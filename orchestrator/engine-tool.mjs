#!/usr/bin/env node
// Builds and checks an engine draft workspace (work/<run>/vN/).
//   node orchestrator/engine-tool.mjs build [dir]
//   node orchestrator/engine-tool.mjs check [dir]
// The Engineer agent runs `check` itself while working; the orchestrator runs it
// again before freezing a version, so a draft only ships if it passes here.
import { build as esbuild } from 'esbuild';
import { createServer } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

const REPO = fileURLToPath(new URL('..', import.meta.url));
const WORK = path.join(REPO, 'work');
const VITE_CONFIG = path.join(REPO, 'viewer', 'vite.config.ts');

export function dirBytes(dir) {
  if (!fs.existsSync(dir)) return 0;
  let n = 0;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    n += s.isDirectory() ? dirBytes(p) : s.size;
  }
  return n;
}

export const kb = (n) => (n < 1024 ? `${n} B` : n < 1024 * 1024 ? `${(n / 1024).toFixed(1)} KB` : `${(n / 1024 / 1024).toFixed(2)} MB`);

export async function buildEngine(dir) {
  const out = path.join(dir, 'out');
  fs.rmSync(out, { recursive: true, force: true });
  const common = {
    absWorkingDir: dir,
    bundle: true,
    minify: true,
    format: 'esm',
    target: 'es2022',
    outdir: out,
    logLevel: 'silent',
    legalComments: 'none',
    loader: { '.wasm': 'file', '.png': 'file', '.jpg': 'file', '.bin': 'file', '.glsl': 'text', '.vert': 'text', '.frag': 'text', '.txt': 'text' },
    assetNames: '[name]-[hash]',
  };
  await esbuild({ ...common, entryPoints: { world: 'src/world.js' }, platform: 'neutral', mainFields: ['module', 'main'] });
  await esbuild({ ...common, entryPoints: { engine: 'src/engine.js' }, platform: 'browser' });
  return { outBytes: dirBytes(out) };
}

async function startBrowserHost() {
  const server = await createServer({ configFile: VITE_CONFIG, logLevel: 'silent', server: { port: 5299, strictPort: false } });
  await server.listen();
  const base = server.resolvedUrls.local[0];
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  return { base, browser, close: async () => { await browser.close(); await server.close(); } };
}

const withTimeout = (p, ms, what) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`${what} timed out after ${ms / 1000}s`)), ms))]);

/** Full check. Returns { ok, problems[], report, outBytes, worldBytes, world }. */
export async function checkEngine(dir) {
  dir = path.resolve(dir);
  const problems = [];
  const notes = [];
  const task = JSON.parse(fs.readFileSync(path.join(dir, 'task.json'), 'utf8'));
  const prevPath = path.join(dir, 'prev-world.json');
  const prev = fs.existsSync(prevPath) ? JSON.parse(fs.readFileSync(prevPath, 'utf8')) : null;

  let outBytes = 0;
  try {
    ({ outBytes } = await buildEngine(dir));
    notes.push(`built out/: ${kb(outBytes)}`);
  } catch (err) {
    problems.push(`build failed: ${err.message}`);
    return finish();
  }

  // --- world.js in Node ---
  let world = null;
  let worldBytes = 0;
  try {
    const mod = await import(pathToFileURL(path.join(dir, 'out', 'world.js')).href + `?t=${Date.now()}`);
    for (const fn of ['initialWorld', 'migrate', 'reduce', 'describe', 'facts']) {
      if (typeof mod[fn] !== 'function') problems.push(`world.js must export function ${fn}`);
    }
    if (!problems.length) {
      world = prev ? mod.migrate(structuredClone(prev)) : mod.initialWorld();
      const again = prev ? mod.migrate(structuredClone(prev)) : mod.initialWorld();
      if (!isDeepStrictEqual(JSON.parse(JSON.stringify(world)), JSON.parse(JSON.stringify(again)))) problems.push('migrate() is not deterministic');
      const a = world?.avatar;
      if (!a || !Array.isArray(a.at) || a.at.length !== 3 || !Number.isFinite(a.facing)) problems.push('world.avatar must be { at: [x,y,z], facing }');
      if (prev?.avatar && a && JSON.stringify(a.at) !== JSON.stringify(prev.avatar.at)) problems.push('migrate() moved the avatar; keep world.avatar.at');
      const kept = new Set(mod.facts(world));
      const lost = (task.prevFacts ?? []).filter((f) => !kept.has(f));
      if (lost.length) problems.push(`migrate() lost story facts: ${lost.join(', ')}`);
      if (typeof mod.describe(world) !== 'string') problems.push('describe() must return a string');
      worldBytes = JSON.stringify(world).length;
      notes.push(`migrated world: ${kb(worldBytes)}, ${kept.size} facts represented`);
    }
  } catch (err) {
    problems.push(`world.js failed in Node: ${err.stack?.split('\n').slice(0, 3).join(' | ')}`);
  }

  const total = outBytes + worldBytes;
  notes.push(`budget: engine ${kb(outBytes)} + world ${kb(worldBytes)} = ${kb(total)} of ${kb(task.budget)}`);
  if (total > task.budget) problems.push(`over budget by ${kb(total - task.budget)}`);
  if (!world) return finish();

  // --- engine.js in a real browser page ---
  if (!dir.startsWith(WORK + path.sep)) {
    problems.push(`workspace must live under ${WORK}`);
    return finish();
  }
  const host = await startBrowserHost();
  try {
    const page = await host.browser.newPage({ viewport: { width: 960, height: 540 } });
    const errs = [];
    page.on('pageerror', (e) => errs.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    const rel = path.relative(WORK, path.join(dir, 'out', 'engine.js')).split(path.sep).join('/');
    await page.goto(`${host.base}engine-host.html?capture=1&engine=/work/${rel}`);
    await withTimeout(page.waitForFunction(() => window.__hostReady === true), 30000, 'engine load').catch((e) => problems.push(`${e.message} ${errs.join(' | ')}`));
    if (!problems.length) {
      const modes = await page.evaluate(() => window.__host.modes);
      for (const m of ['follow', 'overview']) if (!modes?.includes(m)) problems.push(`engine.modes must include '${m}'`);
      const shot = async (view) => {
        const res = await withTimeout(page.evaluate(([w, v]) => window.__host.render(w, v), [world, view]), 30000, `render ${view}`);
        for (const e of res.errors) errs.push(e);
        return page.screenshot({ type: 'png' });
      };
      const a = await shot('follow');
      const b = await shot('follow');
      fs.writeFileSync(path.join(dir, 'check-follow.png'), a);
      if (!a.equals(b)) problems.push('renderStill is not deterministic (two renders of the same world differ)');
      fs.writeFileSync(path.join(dir, 'check-overview.png'), await shot('overview'));
      const live = await withTimeout(page.evaluate((w) => window.__host.live(w), world), 30000, 'live loop');
      for (const e of live.errors) errs.push(`live loop: ${e}`);
      notes.push('wrote check-follow.png and check-overview.png');
    }
    if (errs.length) problems.push(`runtime errors: ${[...new Set(errs)].slice(0, 6).join(' | ')}`);
  } catch (err) {
    problems.push(`browser check failed: ${err.message}`);
  } finally {
    await host.close();
  }
  return finish();

  function finish() {
    const ok = problems.length === 0;
    const report = [`ENGINE CHECK ${ok ? 'PASSED' : 'FAILED'}`, ...notes.map((n) => `  - ${n}`), ...problems.map((p) => `  ✗ ${p}`)].join('\n');
    fs.writeFileSync(path.join(dir, 'check-report.txt'), report + '\n');
    return { ok, problems, report, outBytes, worldBytes, world };
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const [cmd, dirArg] = process.argv.slice(2);
  const dir = path.resolve(dirArg ?? '.');
  if (cmd === 'build') {
    const { outBytes } = await buildEngine(dir);
    console.log(`built ${path.join(dir, 'out')}: ${kb(outBytes)}`);
  } else if (cmd === 'check') {
    const r = await checkEngine(dir);
    console.log(r.report);
    process.exit(r.ok ? 0 : 1);
  } else {
    console.log('usage: engine-tool.mjs build|check [dir]');
    process.exit(2);
  }
}
