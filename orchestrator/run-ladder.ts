// Ladder runs: the world grows in orders of magnitude. The Designer can unlock
// bigger byte budgets and order new engines, which an Engineer agent writes and
// which are frozen per version so replays always use the engine of their turn.
//
//   npm run world -- --turns 50 [--id name] [--premise "..."] [--model sonnet] [--engineer-model sonnet]
//   npm run world -- --resume <id>
//   touch runs/<id>/STOP
//
// A turn: Wanderer → Narrator → Builder → render → Designer
//   → (budget unlock) → (Engineer builds a new engine) → Builder polish → render.
import { appendFileSync, cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { runNarrator, runPlayer } from './agents';
import { runEngineer, runLadderBuilder, runLadderDesigner, type LadderBrief, type LadderContext } from './ladder-agents';
import { EngineCapture } from './engine-capture';
import { checkEngine } from './engine-tool.mjs';
import { applyFacts, emptyWorld } from '../shared/world';
import { LADDER, TIERS, fmtBytes } from '../shared/ladder';
import type { BuilderEvent, DesignerEvent, EngineEvent, RunInfo, TimelineEvent, WorldState } from '../shared/types';

const REPO = fileURLToPath(new URL('..', import.meta.url));
const RUNS = join(REPO, 'runs');
const TOOL = join(REPO, 'orchestrator', 'engine-tool.mjs');
const SEED = join(REPO, 'engine-seed');
const CONTRACT = join(REPO, 'orchestrator', 'prompts', 'engine-contract.md');

const { values: args } = parseArgs({
  options: {
    turns: { type: 'string', default: '50' },
    premise: { type: 'string', default: '' },
    model: { type: 'string', default: 'sonnet' },
    'engineer-model': { type: 'string', default: 'sonnet' },
    id: { type: 'string' },
    resume: { type: 'string' },
    'unlock-gap': { type: 'string', default: String(LADDER.unlockGap) },
    'engine-gap': { type: 'string', default: String(LADDER.engineGap) },
  },
});
const unlockGap = Number(args['unlock-gap']);
const engineGap = Number(args['engine-gap']);

const pad = (n: number) => String(n).padStart(3, '0');
const now = () => new Date().toISOString();

interface WorldModule {
  initialWorld(): unknown;
  migrate(prev: unknown): unknown;
  reduce(world: unknown, op: unknown, turn: number): unknown;
  describe(world: unknown): string;
  facts(world: unknown): string[];
}

interface LiveEngine {
  version: string;
  n: number;
  mod: WorldModule;
  url: string; // site-relative engine.js URL for the host page
  bytes: number;
  ops: string;
  notes: string;
}

/** Run folder size with identical files counted once (engines share libraries). */
function uniqueBytes(dir: string): number {
  const seen = new Set<string>();
  let n = 0;
  const walk = (d: string) => {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      const s = statSync(p);
      if (s.isDirectory()) { walk(p); continue; }
      const h = createHash('sha1').update(readFileSync(p)).digest('hex');
      if (!seen.has(h)) { seen.add(h); n += s.size; }
    }
  };
  walk(dir);
  return n;
}

// ---------- run setup ----------

let run: RunInfo;
let events: TimelineEvent[] = [];
let dir: string;

if (args.resume) {
  dir = join(RUNS, args.resume);
  run = JSON.parse(readFileSync(join(dir, 'run.json'), 'utf8'));
  const all: TimelineEvent[] = readFileSync(join(dir, 'timeline.jsonl'), 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
  const done = all.filter((e) => e.type === 'render' && e.final !== false).map((e) => e.turn);
  const lastDone = done.length ? Math.max(...done) : -1;
  events = all.filter((e) => e.turn <= lastDone);
  writeFileSync(join(dir, 'timeline.jsonl'), events.map((e) => JSON.stringify(e) + '\n').join(''));
  run.turnsCompleted = Math.max(0, lastDone);
  run.maxTurns = Number(args.turns);
  console.log(`Resuming ${run.id} after turn ${lastDone}`);
} else {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 13);
  const id = args.id ?? `run-${stamp}`;
  dir = join(RUNS, id);
  if (existsSync(dir)) throw new Error(`${dir} already exists`);
  run = {
    id, created: now(), premise: args.premise ?? '', model: args.model!, maxTurns: Number(args.turns),
    designEvery: 1, mode: 'ladder', engine: 'v0', tier: 0, status: 'running', turnsCompleted: 0, calls: 0,
  };
}
const WORKDIR = join(REPO, 'work', run.id);
mkdirSync(join(dir, 'shots'), { recursive: true });
mkdirSync(join(dir, 'engines'), { recursive: true });
mkdirSync(WORKDIR, { recursive: true });
run.status = 'running';
const saveRun = () => writeFileSync(join(dir, 'run.json'), JSON.stringify(run, null, 2) + '\n');
saveRun();

// ---------- live state ----------

let engine!: LiveEngine;
let world: unknown = null;
const story: WorldState = emptyWorld(); // facts only (the engine world holds the scene)
let tier = 0;
let lastUnlockTurn = 0;
let lastEngineTurn = 0;
let styleGuide = '';
let lastShot: string | null = null;
let issues: string[] = [];

async function loadEngine(version: string): Promise<LiveEngine> {
  const edir = join(dir, 'engines', version);
  const meta = JSON.parse(readFileSync(join(edir, 'meta.json'), 'utf8'));
  const mod = (await import(pathToFileURL(join(edir, 'world.js')).href)) as WorldModule;
  return {
    version, n: Number(version.slice(1)), mod, bytes: meta.bytes, notes: meta.notes,
    url: `/runs/${run.id}/engines/${version}/engine.js`,
    ops: readFileSync(join(edir, 'OPS.md'), 'utf8'),
  };
}

const worldBytes = () => JSON.stringify(world).length;
const totalBytes = () => engine.bytes + worldBytes();

function record(ev: TimelineEvent) {
  events.push(ev);
  appendFileSync(join(dir, 'timeline.jsonl'), JSON.stringify(ev) + '\n');
}

/** Rebuild live state from the timeline (used on resume). */
async function replay() {
  for (const ev of events) {
    if (ev.type === 'budget') { tier = ev.tier; lastUnlockTurn = ev.turn; }
    else if (ev.type === 'engine') {
      engine = await loadEngine(ev.version);
      world = ev.from === null ? engine.mod.initialWorld() : engine.mod.migrate(world);
      lastEngineTurn = ev.turn;
    } else if (ev.type === 'narrator') applyFacts(story, ev.facts, ev.turn);
    else if (ev.type === 'builder') for (const op of ev.ops) { try { world = engine.mod.reduce(structuredClone(world), structuredClone(op), ev.turn); } catch { /* skipped then too */ } }
    else if (ev.type === 'designer') styleGuide = ev.styleGuide;
    else if (ev.type === 'render' && ev.shot) { lastShot = join(dir, ev.shot); issues = ev.errors; }
  }
}

/** Copies a checked workspace's build into runs/<id>/engines/<version>/ (never edited again). */
function freeze(work: string, version: string, notes: string, outBytes: number) {
  const dest = join(dir, 'engines', version);
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(work, 'out'), dest, { recursive: true });
  cpSync(join(work, 'src'), join(dest, 'src'), { recursive: true });
  for (const f of ['OPS.md', 'package.json']) if (existsSync(join(work, f))) cpSync(join(work, f), join(dest, f));
  if (existsSync(join(work, 'engineer.log'))) cpSync(join(work, 'engineer.log'), join(dest, 'engineer.log'));
  writeFileSync(join(dest, 'meta.json'), JSON.stringify({ version, notes, bytes: outBytes }, null, 2) + '\n');
}

/** Sets up a workspace for the next engine from the current one. */
function prepareWorkspace(version: string, request: string) {
  const work = join(WORKDIR, version);
  rmSync(work, { recursive: true, force: true });
  mkdirSync(work, { recursive: true });
  const from = join(dir, 'engines', engine.version);
  cpSync(join(from, 'src'), join(work, 'src'), { recursive: true });
  cpSync(join(from, 'OPS.md'), join(work, 'OPS.md'));
  cpSync(existsSync(join(from, 'package.json')) ? join(from, 'package.json') : join(SEED, 'package.json'), join(work, 'package.json'));
  cpSync(CONTRACT, join(work, 'CONTRACT.md'));
  writeFileSync(join(work, 'prev-world.json'), JSON.stringify(world));
  const recent = events.filter((e) => e.type === 'narrator').slice(-3).map((e) => (e.type === 'narrator' ? e.narration : '')).join('\n');
  writeFileSync(join(work, 'task.json'), JSON.stringify({
    newVersion: version, previousVersion: engine.version, request,
    budget: TIERS[tier], budgetNote: `World budget is ${fmtBytes(TIERS[tier])}, covering out/ plus JSON.stringify(world). The current world data is ${fmtBytes(worldBytes())}, and the Builder needs room to keep adding to it, so leave headroom.`,
    styleGuide, recentStory: recent, prevFacts: engine.mod.facts(world),
  }, null, 2));
  const pkg = JSON.parse(readFileSync(join(work, 'package.json'), 'utf8'));
  if (pkg.dependencies && Object.keys(pkg.dependencies).length) {
    execFileSync('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'], { cwd: work, stdio: 'ignore' });
  }
  return work;
}

// ---------- building ----------

const capture = new EngineCapture();
await capture.start();

function ctx(turn: number): LadderContext {
  return {
    turn, engine: { version: engine.version, ops: engine.ops, notes: engine.notes, bytes: engine.bytes },
    sceneText: engine.mod.describe(world), worldBytes: worldBytes(), tier,
    avatar: (world as { avatar: { at: number[]; facing: number } }).avatar,
    facts: story.facts, builtFacts: new Set(engine.mod.facts(world)), styleGuide, issues,
  };
}

function applyOps(base: unknown, ops: unknown[], turn: number) {
  let w = base;
  const accepted: unknown[] = [];
  const rejected: { op: unknown; error: string }[] = [];
  for (const op of ops) {
    try {
      w = engine.mod.reduce(structuredClone(w), structuredClone(op), turn);
      accepted.push(op);
    } catch (err) {
      rejected.push({ op, error: String((err as Error).message ?? err) });
    }
  }
  return { w, accepted, rejected };
}

async function build(turn: number, brief: LadderBrief): Promise<BuilderEvent> {
  const limitBytes = TIERS[tier];
  let feedback: string | null = null;
  let out = { notes: '', ops: [] as unknown[] };
  let t = applyOps(world, [], turn);
  let attempts = 0;
  for (attempts = 1; attempts <= 2; attempts++) {
    out = await runLadderBuilder(run.model, ctx(turn), brief, lastShot, feedback);
    run.calls++;
    t = applyOps(world, out.ops, turn);
    const size = engine.bytes + JSON.stringify(t.w).length;
    const probe = await capture.render(engine.url, t.w, join(WORKDIR, 'probe.jpg'), 'follow');
    const problems = [
      ...t.rejected.map((r) => `- rejected ${JSON.stringify(r.op).slice(0, 200)}: ${r.error}`),
      ...(size > limitBytes ? [`- the world would be ${fmtBytes(size)}, over the ${fmtBytes(limitBytes)} budget by ${fmtBytes(size - limitBytes)}. Use fewer or smaller things, or remove decor.`] : []),
      ...probe.errors.map((e) => `- render error: ${e}`),
    ];
    if (!problems.length) break;
    feedback = problems.join('\n');
    console.log(`  builder attempt ${attempts} problems:\n${feedback}`);
    if (attempts === 2) break;
  }
  // Still over budget after the retry: keep the longest prefix of ops that fits.
  let accepted = t.accepted;
  const rejected = [...t.rejected];
  while (accepted.length && engine.bytes + JSON.stringify(applyOps(world, accepted, turn).w).length > limitBytes) {
    rejected.push({ op: accepted[accepted.length - 1], error: 'over budget' });
    accepted = accepted.slice(0, -1);
  }
  world = applyOps(world, accepted, turn).w;
  return { turn, type: 'builder', stage: brief.stage, notes: out.notes, ops: accepted as BuilderEvent['ops'], rejected, attempts: Math.min(attempts, 2), ts: now() };
}

async function render(turn: number, final: boolean) {
  const shot = `shots/turn-${pad(turn)}${final ? '' : '-build'}.jpg`;
  const res = await capture.render(engine.url, world, join(dir, shot), 'follow');
  record({ turn, type: 'render', final, shot, triangles: 0, bytes: totalBytes(), errors: res.errors.slice(0, 8), ts: now() });
  lastShot = join(dir, shot);
  issues = res.errors.slice(0, 8);
}

async function newEngine(turn: number, request: string) {
  const version = `v${engine.n + 1}`;
  console.log(`  engineer: building ${version}…`);
  const work = prepareWorkspace(version, request);
  const logFile = join(work, 'engineer.log');
  let notes = '';
  let minutes = 0;
  try {
    const res = await runEngineer(args['engineer-model']!, work, TOOL, request, version, logFile);
    notes = res.text.trim();
    minutes = Math.round(res.durationMs / 6000) / 10;
  } catch (err) {
    notes = `Engineer session ended: ${(err as Error).message}`;
  }
  run.calls++;
  const check = await checkEngine(work);
  record({ turn, type: 'engineer', request, notes, ok: check.ok, version: check.ok ? version : null, problems: check.problems, minutes, ts: now() });
  console.log(`  engineer: ${check.ok ? `${version} passed` : `failed: ${check.problems.join('; ')}`} (${minutes} min)\n    ${notes.slice(0, 400)}`);
  if (!check.ok) return;
  freeze(work, version, notes, check.outBytes);
  const from = engine.version;
  engine = await loadEngine(version);
  world = engine.mod.migrate(world);
  lastEngineTurn = turn;
  const ev: EngineEvent = { turn, type: 'engine', version, from, notes, bytes: check.outBytes, ts: now() };
  record(ev);
  run.engine = version;
}

// ---------- main loop ----------

let stopping = false;
process.on('SIGINT', () => {
  if (stopping) process.exit(1);
  stopping = true;
  console.log('\nStopping after this turn (Ctrl-C again to quit now)…');
});

try {
  if (!events.length) {
    // Genesis setup: the seed engine at the 4 KB tier.
    const work = join(WORKDIR, 'v0');
    rmSync(work, { recursive: true, force: true });
    cpSync(SEED, work, { recursive: true });
    writeFileSync(join(work, 'task.json'), JSON.stringify({ budget: TIERS[0], prevFacts: [] }));
    const check = await checkEngine(work);
    if (!check.ok) throw new Error(`seed engine failed its check:\n${check.report}`);
    const notes = 'Seed engine: flat-shaded boxes and cones painted on a 2D canvas.';
    freeze(work, 'v0', notes, check.outBytes);
    record({ turn: 0, type: 'budget', tier: 0, limit: TIERS[0], reason: 'The world begins with 4 KB.', ts: now() });
    engine = await loadEngine('v0');
    world = engine.mod.initialWorld();
    record({ turn: 0, type: 'engine', version: 'v0', from: null, notes, bytes: check.outBytes, ts: now() });
  } else {
    await replay();
  }

  const startTurn = events.some((e) => e.type === 'render') ? run.turnsCompleted + 1 : 0;
  for (let turn = startTurn; turn <= run.maxTurns; turn++) {
    const t0 = Date.now();
    console.log(`\n=== ${turn === 0 ? 'Genesis' : `Turn ${turn}`} · ${engine.version} · ${fmtBytes(totalBytes())}/${fmtBytes(TIERS[tier])} ===`);
    const storyView = { ...story, avatar: (world as WorldState).avatar, entities: Object.fromEntries(engine.mod.facts(world).map((f) => [f, { fact: f }])) } as unknown as WorldState;
    if (turn > 0) {
      const p = await runPlayer(run.model, turn, events, lastShot);
      run.calls++;
      record(p);
      console.log(`  wanderer: ${p.action}`);
    }
    const n = await runNarrator(run.model, turn, events, storyView, lastShot, run.premise);
    run.calls++;
    record(n);
    applyFacts(story, n.facts, turn);
    console.log(`  narrator: ${n.narration}\n  facts: ${n.facts.map((f) => `${f.op} ${f.id}`).join(', ') || '-'}`);

    const b = await build(turn, { stage: 'build', narr: n });
    record(b);
    console.log(`  builder: ${b.notes} [${b.ops.length} ops${b.rejected.length ? `, ${b.rejected.length} rejected` : ''}]`);
    await render(turn, false);

    const overview = `shots/turn-${pad(turn)}-overview.jpg`;
    await capture.render(engine.url, world, join(dir, overview), 'overview');
    const unlockIn = lastUnlockTurn + unlockGap - turn;
    const engineIn = engine.n === 0 && lastEngineTurn === 0 ? 0 : lastEngineTurn + engineGap - turn;
    const d = await runLadderDesigner(run.model, ctx(turn), events, lastShot, join(dir, overview), { unlockIn, engineIn });
    run.calls++;
    const dev: DesignerEvent = { turn, type: 'designer', overview, ...d, ts: now() };
    record(dev);
    styleGuide = dev.styleGuide;
    console.log(`  designer: ${dev.critique}${dev.requestUnlock ? `\n  ▲ unlock: ${dev.unlockReason}` : ''}${dev.engineRequest ? `\n  ⚙ engine: ${dev.engineRequest.slice(0, 300)}` : ''}`);

    if (dev.requestUnlock) {
      if (tier + 1 < TIERS.length && unlockIn <= 0) {
        tier++;
        lastUnlockTurn = turn;
        record({ turn, type: 'budget', tier, limit: TIERS[tier], reason: dev.unlockReason ?? '', ts: now() });
        run.tier = tier;
        console.log(`  ▲ budget → ${fmtBytes(TIERS[tier])}`);
      } else {
        record({ turn, type: 'system', message: tier + 1 >= TIERS.length ? 'Unlock declined: already at the top tier.' : `Unlock declined: next tier available in ${unlockIn} turns.`, ts: now() });
      }
    }
    if (dev.engineRequest) {
      if (engineIn <= 0) await newEngine(turn, dev.engineRequest);
      else record({ turn, type: 'system', message: `Engine request deferred: a new engine can be built in ${engineIn} turns.`, ts: now() });
    }

    const pb = await build(turn, { stage: 'polish', design: dev });
    record(pb);
    console.log(`  builder (polish): ${pb.notes} [${pb.ops.length} ops${pb.rejected.length ? `, ${pb.rejected.length} rejected` : ''}]`);
    await render(turn, true);
    console.log(`  ${fmtBytes(totalBytes())} of ${fmtBytes(TIERS[tier])}${issues.length ? ` | ${issues.length} issues` : ''} · ${Math.round((Date.now() - t0) / 1000)}s`);

    run.turnsCompleted = turn;
    saveRun();
    const bytes = uniqueBytes(dir);
    if (bytes > LADDER.runBytes) {
      run.status = 'stopped';
      run.note = `stopped: run folder reached ${fmtBytes(bytes)}`;
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
  console.log(`\n${run.status}: ${run.id}, ${run.turnsCompleted} turns, ${run.calls} calls, ${fmtBytes(uniqueBytes(dir))} (${relative(REPO, dir)}), engine ${run.engine}, tier ${fmtBytes(TIERS[tier])}`);
}
