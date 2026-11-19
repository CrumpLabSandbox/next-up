// The three.js turn loop: Wanderer acts → Narrator establishes facts → Builder builds →
// render → Designer critiques (and may unlock the next resource tier) → Builder polishes →
// render → every few turns a Reviewer looks at the whole run. Every step is appended to
// runs/<id>/timeline.jsonl.
//
//   npm run world -- --turns 50 [--premise "..."] [--model sonnet] [--id name]
//                    [--reviewer-every 5] [--reviewer-model fable] [--no-tiers]
//   npm run world -- --resume <id> [--turns 50]
//   touch runs/<id>/STOP   (stops cleanly after the current turn)
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { runBuilder, runDesigner, runNarrator, runPlayer, runReviewer, turnContext, type BuilderBrief } from './agents';
import { Capture } from './capture';
import { checkWorld } from './check';
import { applyEvent, applyOp, cloneWorld, emptyWorld, LIMITS, worldFromEvents } from '../shared/world';
import { LADDER, THREE_TIERS, THREE_UNLOCK_GAP, contentBytes, fmtBytes, fmtTier } from '../shared/ladder';
import type { BuilderEvent, DesignerEvent, Op, RenderEvent, ReviewerEvent, RunInfo, TimelineEvent, WorldState } from '../shared/types';

const RUNS = fileURLToPath(new URL('../runs/', import.meta.url));

const { values: args } = parseArgs({
  options: {
    turns: { type: 'string', default: '50' },
    premise: { type: 'string', default: '' },
    model: { type: 'string', default: 'sonnet' },
    id: { type: 'string' },
    resume: { type: 'string' },
    'design-every': { type: 'string', default: '1' },
    'reviewer-every': { type: 'string', default: '5' },
    'reviewer-model': { type: 'string', default: 'fable' },
    'no-tiers': { type: 'boolean', default: false },
  },
});

const pad = (n: number) => String(n).padStart(3, '0');
const now = () => new Date().toISOString();

function dirSize(dir: string): number {
  let n = 0;
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    n += s.isDirectory() ? dirSize(p) : s.size;
  }
  return n;
}

// ---------- run setup ----------

let run: RunInfo;
let events: TimelineEvent[] = [];
let dir: string;

if (args.resume) {
  dir = join(RUNS, args.resume);
  run = JSON.parse(readFileSync(join(dir, 'run.json'), 'utf8'));
  const all: TimelineEvent[] = existsSync(join(dir, 'timeline.jsonl'))
    ? readFileSync(join(dir, 'timeline.jsonl'), 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l))
    : [];
  const done = all.filter((e) => e.type === 'render' && e.final !== false).map((e) => e.turn);
  const lastDone = done.length ? Math.max(...done) : -1;
  events = all.filter((e) => e.turn <= lastDone);
  writeFileSync(join(dir, 'timeline.jsonl'), events.map((e) => JSON.stringify(e) + '\n').join(''));
  run.turnsCompleted = Math.max(0, lastDone);
  if (args.turns) run.maxTurns = Number(args.turns);
  console.log(`Resuming ${run.id} after turn ${lastDone}`);
} else {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 13);
  const id = args.id ?? `run-${stamp}`;
  dir = join(RUNS, id);
  if (existsSync(dir)) throw new Error(`${dir} already exists`);
  run = {
    id, created: now(), premise: args.premise ?? '', model: args.model!, maxTurns: Number(args.turns),
    designEvery: Number(args['design-every']), status: 'running', turnsCompleted: 0, calls: 0,
    ...(args['no-tiers'] ? {} : { mode: 'tiered' as const, tier: 0 }),
  };
}
mkdirSync(join(dir, 'shots'), { recursive: true });
mkdirSync(join(dir, 'components'), { recursive: true });
run.status = 'running';

const saveRun = () => writeFileSync(join(dir, 'run.json'), JSON.stringify(run, null, 2) + '\n');
saveRun();

let state: WorldState = worldFromEvents(events);
let lastShot: string | null = null;
let lastTriangles = 0;
let issues: string[] = [];
let styleGuide = '';
{
  const r = [...events].reverse().find((e): e is RenderEvent => e.type === 'render');
  if (r) { lastShot = r.shot ? join(dir, r.shot) : null; lastTriangles = r.triangles; issues = r.errors; }
  const d = [...events].reverse().find((e): e is DesignerEvent => e.type === 'designer');
  if (d) styleGuide = d.styleGuide;
}
const designEvery = run.designEvery ?? 0;
const tiered = run.mode === 'tiered';
const reviewEvery = Number(args['reviewer-every']);
let tier = 0;
let lastUnlockTurn = 0;
let lastLights = 0;
for (const e of events) {
  if (e.type === 'budget') { tier = e.tier; lastUnlockTurn = e.turn; }
  if (e.type === 'reviewer') turnContext.review = e;
}
const limits = () => THREE_TIERS[tier];

/** The resource line every agent sees in tiered runs. */
function limitsText(turn: number) {
  if (!tiered) return '';
  const l = limits();
  const next = THREE_TIERS[tier + 1];
  const wait = lastUnlockTurn + THREE_UNLOCK_GAP - turn;
  const pct = (a: number, b: number) => `${Math.round((a / b) * 100)}%`;
  return `tier ${tier + 1}/${THREE_TIERS.length}. Content ${fmtBytes(contentBytes(state))} of ${fmtBytes(l.bytes)} (${pct(contentBytes(state), l.bytes)}), ` +
    `triangles ${lastTriangles.toLocaleString()} of ${l.triangles.toLocaleString()} (${pct(lastTriangles, l.triangles)}), lights ${lastLights} of ${l.lights}. ` +
    (next ? `Next tier: ${fmtTier(next)}, ${wait <= 0 ? 'can be unlocked NOW if the Designer asks' : `unlockable in ${wait} turns`}.` : 'Top tier reached.');
}

function record(ev: TimelineEvent) {
  events.push(ev);
  applyEvent(state, ev);
  appendFileSync(join(dir, 'timeline.jsonl'), JSON.stringify(ev) + '\n');
}

// ---------- building ----------

/** Applies builder ops to a trial world and validates every touched component in Node. */
async function trial(ops: unknown[], turn: number) {
  const w = cloneWorld(state);
  const accepted: Op[] = [];
  const rejected: { op: unknown; error: string }[] = [];
  const comps = new Set<string>(), ents = new Set<string>();
  for (const op of ops) {
    const err = applyOp(w, op, turn);
    if (err) { rejected.push({ op, error: err }); continue; }
    const o = op as Op;
    accepted.push(o);
    if (o.op === 'defineComponent') comps.add(o.name);
    if (o.op === 'add' || o.op === 'update') ents.add(o.id);
  }
  const check = await checkWorld(w, comps, ents);
  return { accepted, rejected, problems: check.problems, world: w };
}

/** Tiered runs: is this world within the current resource limits? */
async function overLimits(w: WorldState): Promise<string[]> {
  if (!tiered) return [];
  const l = limits();
  const out: string[] = [];
  const bytes = contentBytes(w);
  if (bytes > l.bytes) out.push(`content is ${fmtBytes(bytes)}, over the ${fmtBytes(l.bytes)} limit by ${fmtBytes(bytes - l.bytes)}: shorter code, fewer or simpler components, reuse`);
  const probe = await capture.render(w, join(tmpdir(), 'next-up-probe.jpg'), 'story');
  if (probe.triangles > l.triangles) out.push(`scene would have ${probe.triangles.toLocaleString()} triangles, over the ${l.triangles.toLocaleString()} limit: lower segment counts, fewer instances`);
  if (probe.lights > l.lights) out.push(`scene would have ${probe.lights} lights, over the limit of ${l.lights}: use emissive materials instead`);
  return out;
}

async function build(turn: number, brief: BuilderBrief): Promise<BuilderEvent> {
  let feedback: string | null = null;
  let out = { notes: '', ops: [] as unknown[] };
  let t: Awaited<ReturnType<typeof trial>> | null = null;
  let attempts = 0;
  for (attempts = 1; attempts <= 2; attempts++) {
    out = await runBuilder(run.model, turn, brief, state, lastShot, lastTriangles, issues, feedback, styleGuide);
    run.calls++;
    t = await trial(out.ops, turn);
    const over = await overLimits(t.world);
    if (!t.rejected.length && !t.problems.length && !over.length) break;
    feedback = [
      ...t.rejected.map((r) => `- rejected ${JSON.stringify(r.op).slice(0, 160)}: ${r.error}`),
      ...t.problems.map((p) => `- ${p.component ? `component ${p.component}` : ''}${p.entity ? ` entity ${p.entity}` : ''}: ${p.error}`),
      ...over.map((o) => `- over limits: ${o}`),
    ].join('\n');
    console.log(`  builder attempt ${attempts} problems:\n${feedback}`);
    if (attempts === 2) break;
  }
  // Whatever still fails after the retry falls back so the run keeps going:
  // broken new components become placeholders; broken updates are dropped.
  const badComps = new Set(t!.problems.filter((p) => p.component && !p.entity).map((p) => p.component!));
  const badEnts = new Set(t!.problems.filter((p) => p.entity).map((p) => p.entity!));
  const ops: Op[] = [];
  const rejected = [...t!.rejected];
  for (const op of t!.accepted) {
    if (op.op === 'defineComponent' && badComps.has(op.name)) {
      rejected.push({ op: { op: op.op, name: op.name }, error: t!.problems.find((p) => p.component === op.name)!.error });
      continue;
    }
    const target = op.op === 'add' || op.op === 'update' ? op : null;
    const broken = target && (badEnts.has(target.id) || (target.op === 'add' && badComps.has(target.component) && !state.components[target.component]));
    if (target && broken) {
      if (target.op === 'add') ops.push({ ...target, component: 'placeholder', params: { size: 1 } });
      else rejected.push({ op: target, error: 'component failed for these params' });
      continue;
    }
    ops.push(op);
  }
  // Still over the tier's limits after the retry: drop ops from the end until it fits.
  if (tiered) {
    const fits = async (list: Op[]) => {
      const w = cloneWorld(state);
      for (const op of list) applyOp(w, op, turn);
      return !(await overLimits(w)).length;
    };
    let tries = 0;
    while (ops.length && !(await fits(ops))) {
      rejected.push({ op: ops.pop(), error: 'over the resource limits' });
      if (++tries >= 12) {
        rejected.push(...ops.filter((o) => o.op !== 'moveAvatar').map((op) => ({ op, error: 'over the resource limits' })));
        ops.splice(0, ops.length, ...ops.filter((o) => o.op === 'moveAvatar'));
        break;
      }
    }
  }
  return { turn, type: 'builder', stage: brief.stage, notes: out.notes, ops, rejected, attempts: Math.min(attempts, 2), ts: now() };
}

function saveComponents(ev: BuilderEvent) {
  for (const op of ev.ops) {
    if (op.op === 'defineComponent') writeFileSync(join(dir, 'components', `${op.name}.js`), `// ${op.doc ?? ''}\n${op.code}`);
  }
}

// ---------- main loop ----------

let stopping = false;
process.on('SIGINT', () => {
  if (stopping) process.exit(1);
  stopping = true;
  console.log('\nStopping after this turn (Ctrl-C again to quit now)…');
});

const capture = new Capture();
await capture.start();

async function render(turn: number, final: boolean) {
  const shot = `shots/turn-${pad(turn)}${final ? '' : '-build'}.jpg`;
  const res = await capture.render(state, join(dir, shot), 'story');
  const ev: RenderEvent = { turn, type: 'render', final, shot, triangles: res.triangles, errors: res.errors.slice(0, 10), ts: now() };
  if (tiered) ev.bytes = contentBytes(state);
  const maxTris = tiered ? limits().triangles : LIMITS.trianglesTotal;
  if (res.triangles > maxTris) ev.errors.push(`scene has ${res.triangles} triangles, over the ${maxTris} limit: simplify or instance something`);
  record(ev);
  lastShot = join(dir, shot);
  lastTriangles = res.triangles;
  lastLights = res.lights;
  issues = ev.errors;
}

try {
  if (tiered && !events.length) {
    record({ turn: 0, type: 'budget', tier: 0, limit: THREE_TIERS[0].bytes, reason: `The world begins small: ${fmtTier(THREE_TIERS[0])}.`, ts: now() });
  }
  const startTurn = events.some((e) => e.type === 'render') ? run.turnsCompleted + 1 : 0;
  const logBuild = (b: BuilderEvent) =>
    console.log(`  builder${b.stage === 'polish' ? ' (polish)' : ''}: ${b.notes}\n  ops: ${b.ops.map((o) => `${o.op}${'id' in o ? ` ${o.id}` : 'name' in o ? ` ${o.name}` : ''}`).join(', ')}${b.rejected.length ? ` | rejected ${b.rejected.length}` : ''}`);
  for (let turn = startTurn; turn <= run.maxTurns; turn++) {
    const t0 = Date.now();
    turnContext.limits = limitsText(turn);
    console.log(`\n=== ${turn === 0 ? 'Genesis' : `Turn ${turn}`}${tiered ? ` · tier ${tier + 1}` : ''} ===`);
    if (turn > 0) {
      const p = await runPlayer(run.model, turn, events, lastShot);
      run.calls++;
      record(p);
      console.log(`  wanderer: ${p.action}`);
    }
    const n = await runNarrator(run.model, turn, events, state, lastShot, run.premise);
    run.calls++;
    record(n);
    console.log(`  narrator: ${n.narration}\n  facts: ${n.facts.map((f) => `${f.op} ${f.id}`).join(', ') || '-'}`);

    const b = await build(turn, { stage: 'build', narr: n });
    record(b);
    saveComponents(b);
    logBuild(b);

    const designTurn = designEvery > 0 && turn % designEvery === 0;
    await render(turn, !designTurn);

    if (designTurn) {
      const overview = `shots/turn-${pad(turn)}-overview.jpg`;
      await capture.render(state, join(dir, overview), 'overview');
      const d = await runDesigner(run.model, turn, events, state, lastShot, join(dir, overview), lastTriangles, styleGuide);
      run.calls++;
      const dev: DesignerEvent = { ...d, overview };
      record(dev);
      styleGuide = dev.styleGuide;
      console.log(`  designer: ${dev.critique}\n${dev.suggestions.map((x) => `    - [${x.target}] ${x.change}`).join('\n')}`);

      if (tiered && dev.requestUnlock) {
        const wait = lastUnlockTurn + THREE_UNLOCK_GAP - turn;
        if (tier + 1 < THREE_TIERS.length && wait <= 0) {
          tier++;
          lastUnlockTurn = turn;
          run.tier = tier;
          record({ turn, type: 'budget', tier, limit: THREE_TIERS[tier].bytes, reason: `${fmtTier(THREE_TIERS[tier])}. ${dev.unlockReason}`, ts: now() });
          console.log(`  ▲ unlocked tier ${tier + 1}: ${fmtTier(THREE_TIERS[tier])}`);
        } else {
          record({ turn, type: 'system', message: tier + 1 >= THREE_TIERS.length ? 'Unlock declined: already at the top tier.' : `Unlock declined: the next tier opens in ${wait} turns.`, ts: now() });
        }
        turnContext.limits = limitsText(turn);
      }

      const pb = await build(turn, { stage: 'polish', design: dev });
      record(pb);
      saveComponents(pb);
      logBuild(pb);
      await render(turn, true);
    }
    console.log(`  render: ${lastTriangles} tris${tiered ? `, ${fmtBytes(contentBytes(state))}` : ''}${issues.length ? ` | ${issues.length} issues` : ''} · ${Math.round((Date.now() - t0) / 1000)}s`);

    if (reviewEvery > 0 && turn > 0 && turn % reviewEvery === 0 && turn < run.maxTurns) {
      // A contact sheet: about eight story views spread across the run, plus the current overview.
      const finals = events.filter((e): e is RenderEvent => e.type === 'render' && e.final !== false && !!e.shot);
      const step = Math.max(1, Math.ceil(finals.length / 8));
      const picks = finals.filter((_, i) => i % step === 0 || i === finals.length - 1);
      const overview = join(dir, `shots/turn-${pad(turn)}-overview.jpg`);
      const shots = [...picks.map((r) => ({ turn: r.turn, file: join(dir, r.shot!) })), ...(existsSync(overview) ? [{ turn, file: overview }] : [])];
      try {
        const r: ReviewerEvent = await runReviewer(args['reviewer-model']!, turn, run.maxTurns, events, state, shots, styleGuide);
        run.calls++;
        record(r);
        turnContext.review = r;
        console.log(`  reviewer: ${r.assessment}`);
      } catch (err) {
        console.warn(`  reviewer failed: ${(err as Error).message}`);
      }
    }

    run.turnsCompleted = turn;
    const bytes = dirSize(dir);
    saveRun();
    if (bytes > (tiered ? LADDER.runBytes : LIMITS.runBytes)) {
      run.status = 'stopped';
      run.note = `stopped: run folder reached ${(bytes / 1e6).toFixed(1)} MB`;
      break;
    }
    if (stopping || existsSync(join(dir, 'STOP'))) { run.status = 'stopped'; run.note = 'stopped by user'; break; }
  }
  if (run.status === 'running') run.status = 'complete';
} catch (err) {
  run.status = 'failed';
  run.note = String((err as Error).message ?? err).slice(0, 500);
  console.error(err);
  record({ turn: run.turnsCompleted + 1, type: 'system', message: `Run failed: ${run.note}`, ts: now() });
} finally {
  saveRun();
  await capture.stop();
  console.log(`\n${run.status}: ${run.id}, ${run.turnsCompleted} turns, ${run.calls} calls, ${(dirSize(dir) / 1e6).toFixed(2)} MB`);
}
