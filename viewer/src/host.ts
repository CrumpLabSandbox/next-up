// Hosts one engine version on a full-window canvas. The viewer talks to it over
// postMessage, and the orchestrator drives it directly in headless capture.
//   engine-host.html?engine=<url of engine.js | legacy>[&capture=1]
import { WorldView, type CameraMode } from './runtime/world-view';
import type { WorldState } from '../../shared/types';

export interface Pose { position: number[]; target: number[] }
export interface Engine {
  modes: string[];
  setWorld(world: unknown, opts: { animate: boolean }): Promise<void>;
  setCamera(mode: string, pose?: Pose | null): void;
  getCamera(): Pose | null;
  renderStill(view: string): Promise<void>;
  start?(): void;
  stop?(): void;
  resize?(w: number, h: number): void;
  pick?(x: number, y: number): { id: string; fact: string | null } | null;
  errors?(): string[];
  dispose?(): void;
}

const params = new URLSearchParams(location.search);
const canvas = document.getElementById('c') as HTMLCanvasElement;
const pageErrors: string[] = [];
addEventListener('error', (e) => pageErrors.push(String(e.message)));
addEventListener('unhandledrejection', (e) => pageErrors.push(String((e as PromiseRejectionEvent).reason)));

/** The original three.js runtime, wrapped in the engine contract (used by world-01/02). */
function legacyEngine(): Engine {
  const view = new WorldView(canvas);
  let state: WorldState | null = null;
  return {
    modes: ['follow', 'orbit', 'walk', 'overview'],
    async setWorld(w, { animate }) { state = w as WorldState; await view.setState(state, animate); },
    setCamera(mode) { if (mode !== 'overview') view.setMode(mode as CameraMode); },
    getCamera: () => ({ position: view.camera.position.toArray(), target: view.avatar.position.toArray() }),
    async renderStill(v) { view.renderStill(v as 'story' | 'overview'); },
    start: () => view.start(),
    pick(x, y) {
      const id = view.entityAt(x, y);
      return id && state?.entities[id] ? { id, fact: state.entities[id].fact } : null;
    },
    errors: () => view.drainErrors(),
  };
}

async function load(): Promise<Engine> {
  const src = params.get('engine') ?? 'legacy';
  if (src === 'legacy') return legacyEngine();
  const mod = await import(/* @vite-ignore */ new URL(src, location.href).href);
  return mod.createEngine(canvas, {});
}

const capture = params.has('capture');
let engine: Engine;
try {
  engine = await load();
} catch (err) {
  pageErrors.push(`engine failed to load: ${(err as Error).message}`);
  throw err;
}

const errors = () => [...pageErrors.splice(0), ...(engine.errors?.() ?? [])];
const fit = () => engine.resize?.(canvas.clientWidth, canvas.clientHeight);
new ResizeObserver(fit).observe(document.body);

// Headless capture API used by the orchestrator and the engine check.
(window as unknown as Record<string, unknown>).__host = {
  modes: engine.modes,
  async render(world: unknown, view: string) {
    await engine.setWorld(world, { animate: false });
    await engine.renderStill(view);
    return { errors: errors() };
  },
  /** Exercise the live path the viewer uses: camera handoff, animation loop, forward step. */
  async live(world: unknown) {
    await engine.setWorld(world, { animate: false });
    engine.setCamera('follow', { position: [0, 3.4, 6.5], target: [0, 0.8, -9] });
    engine.start?.();
    await new Promise((r) => setTimeout(r, 800));
    await engine.setWorld(world, { animate: true });
    await new Promise((r) => setTimeout(r, 800));
    for (const m of engine.modes) engine.setCamera(m, null);
    engine.setCamera('follow', null);
    engine.stop?.();
    return { errors: errors() };
  },
};
(window as unknown as Record<string, unknown>).__hostReady = true;

if (!capture) {
  // Engines only start animating once they have a world to draw.
  let started = false;
  let pendingCamera: [string, Pose | null] = ['follow', null];

  const post = (msg: unknown) => parent.postMessage({ nextup: true, ...(msg as object) }, '*');
  addEventListener('message', async (e) => {
    const m = e.data;
    if (!m || !m.nextupCall) return;
    try {
      let result: unknown = null;
      if (m.method === 'setWorld') {
        await engine.setWorld(m.args[0], m.args[1]);
        if (!started) {
          started = true;
          engine.setCamera(...pendingCamera);
          engine.start?.();
        }
      } else if (m.method === 'setCamera') {
        if (started) engine.setCamera(m.args[0], m.args[1]);
        else pendingCamera = [m.args[0], m.args[1]];
      }
      else if (m.method === 'getCamera') result = engine.getCamera();
      else if (m.method === 'errors') result = errors();
      post({ id: m.id, result });
    } catch (err) {
      post({ id: m.id, error: String((err as Error).message ?? err) });
    }
  });

  let walking = false;
  addEventListener('message', (e) => { if (e.data?.nextupCall && e.data.method === 'setCamera') walking = e.data.args[0] === 'walk'; });
  addEventListener('keydown', (e) => {
    if (walking && e.key !== 'Escape') return;
    if ([' ', 'ArrowLeft', 'ArrowRight', 'Escape', 'f', 'o', 'k'].includes(e.key)) {
      e.preventDefault();
      post({ event: 'key', key: e.key });
    }
  });
  canvas.addEventListener('pointerdown', () => canvas.focus());

  let hoverPending = false;
  canvas.addEventListener('pointermove', (e) => {
    if (!engine.pick || hoverPending) return;
    hoverPending = true;
    requestAnimationFrame(() => {
      hoverPending = false;
      post({ event: 'hover', hit: engine.pick!(e.clientX, e.clientY), x: e.clientX, y: e.clientY });
    });
  });
  canvas.addEventListener('pointerleave', () => post({ event: 'hover', hit: null }));
  post({ event: 'ready', modes: engine.modes });
}
