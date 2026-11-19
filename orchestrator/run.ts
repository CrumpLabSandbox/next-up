// The turn loop: Wanderer acts → Narrator establishes facts → Builder builds →
// render a screenshot. Every step is appended to runs/<id>/timeline.jsonl.
//
//   npm run world -- --turns 50 [--premise "..."] [--model sonnet] [--id name]
//   npm run world -- --resume <id> [--turns 50]
//   touch runs/<id>/STOP   (stops cleanly after the current turn)
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { runBuilder, runNarrator, runPlayer } from './agents';
import { Capture } from './capture';
import { checkWorld } from './check';
import { applyEvent, applyOp, cloneWorld, emptyWorld, LIMITS, worldFromEvents } from '../shared/world';
import type { BuilderEvent, NarratorEvent, Op, RenderEvent, RunInfo, TimelineEvent, WorldState } from '../shared/types';

const RUNS = fileURLToPath(new URL('../runs/', import.meta.url));

const { values: args } = parseArgs({
  options: {
    turns: { type: 'string', default: '50' },
    premise: { type: 'string', default: '' },
    model: { type: 'string', default: 'sonnet' },
    id: { type: 'string' },
    resume: { type: 'string' },
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
  const done = all.filter((e) => e.type === 'render').map((e) => e.turn);
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
    status: 'running', turnsCompleted: 0, calls: 0,
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
{
  const r = [...events].reverse().find((e): e is RenderEvent => e.type === 'render');
  if (r) { lastShot = r.shot ? join(dir, r.shot) : null; lastTriangles = r.triangles; issues = r.errors; }
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
  return { accepted, rejected, problems: check.problems };
}

async function build(turn: number, narr: NarratorEvent): Promise<BuilderEvent> {
  let feedback: string | null = null;
  let out = { notes: '', ops: [] as unknown[] };
  let t: Awaited<ReturnType<typeof trial>> | null = null;
  let attempts = 0;
  for (attempts = 1; attempts <= 2; attempts++) {
    out = await runBuilder(run.model, turn, narr, state, lastShot, lastTriangles, issues, feedback);
    run.calls++;
    t = await trial(out.ops, turn);
    if (!t.rejected.length && !t.problems.length) break;
    feedback = [
      ...t.rejected.map((r) => `- rejected ${JSON.stringify(r.op).slice(0, 160)}: ${r.error}`),
      ...t.problems.map((p) => `- ${p.component ? `component ${p.component}` : ''}${p.entity ? ` entity ${p.entity}` : ''}: ${p.error}`),
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
  return { turn, type: 'builder', notes: out.notes, ops, rejected, attempts: Math.min(attempts, 2), ts: now() };
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

async function render(turn: number) {
  const shot = `shots/turn-${pad(turn)}.jpg`;
  const res = await capture.render(state, join(dir, shot));
  const ev: RenderEvent = { turn, type: 'render', shot, triangles: res.triangles, errors: res.errors.slice(0, 10), ts: now() };
  if (res.triangles > LIMITS.trianglesTotal) ev.errors.push(`scene has ${res.triangles} triangles, over the ${LIMITS.trianglesTotal} budget: simplify or instance something`);
  record(ev);
  lastShot = join(dir, shot);
  lastTriangles = res.triangles;
  issues = ev.errors;
}

try {
  const startTurn = events.some((e) => e.type === 'render') ? run.turnsCompleted + 1 : 0;
  for (let turn = startTurn; turn <= run.maxTurns; turn++) {
    const t0 = Date.now();
    console.log(`\n=== ${turn === 0 ? 'Genesis' : `Turn ${turn}`} ===`);
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

    const b = await build(turn, n);
    record(b);
    saveComponents(b);
    console.log(`  builder: ${b.notes}\n  ops: ${b.ops.map((o) => `${o.op}${'id' in o ? ` ${o.id}` : 'name' in o ? ` ${o.name}` : ''}`).join(', ')}${b.rejected.length ? ` | rejected ${b.rejected.length}` : ''}`);

    await render(turn);
    console.log(`  render: ${lastTriangles} tris${issues.length ? ` | ${issues.length} issues` : ''} · ${Math.round((Date.now() - t0) / 1000)}s`);

    run.turnsCompleted = turn;
    const bytes = dirSize(dir);
    saveRun();
    if (bytes > LIMITS.runBytes) {
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
