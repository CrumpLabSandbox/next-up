// Cutscenes: short scripted films played between turns. Pure data, sampled at
// any time t, so the viewer's playback and the orchestrator's stills agree.
import type { Environment, Vec3 } from './types';

export interface CameraKey { pos: Vec3; target: Vec3; fov?: number }
export interface Shot { start: number; end: number; from: CameraKey; to: CameraKey; ease?: 'linear' | 'inOut' }
export interface Pose { at?: Vec3; rotation?: number; scale?: number }
export interface Animation { target: string; start: number; end: number; from?: Pose; to: Pose; ease?: 'linear' | 'inOut' } // target: entity id, prop id or 'wanderer'
export interface Prop { id: string; component: string; params?: Record<string, unknown>; at: Vec3; rotation?: number; scale?: number; appear?: number; vanish?: number }
export interface EnvKey { start: number; end: number; to: Partial<Environment> }
export interface Caption { start: number; end: number; text: string; style?: 'title' | 'subtitle' }

export interface Cutscene {
  title?: string;
  style: string;
  duration: number;
  shots: Shot[];
  animations?: Animation[];
  props?: Prop[];
  env?: EnvKey[];
  captions?: Caption[];
  letterbox?: boolean;
  fade?: { in?: number; out?: number };
}

/** What a cutscene may use at each resource tier (index = tier). */
export const CUTSCENE_TIERS = [
  { duration: 8, shots: 1, animations: 2, props: 0, env: 0, captions: 2, note: 'a title card or caption and one slow camera move' },
  { duration: 10, shots: 2, animations: 4, props: 1, env: 1, captions: 3, note: 'two shots, a few animated objects, one prop' },
  { duration: 14, shots: 3, animations: 8, props: 3, env: 2, captions: 4, note: 'multi-shot sequence, animated objects, light and sky changes' },
  { duration: 18, shots: 5, animations: 14, props: 6, env: 3, captions: 5, note: 'cinematic sequence with props, choreography, dramatic light' },
  { duration: 22, shots: 8, animations: 24, props: 10, env: 4, captions: 6, note: 'full film-grade sequence: complex choreography, many props, sweeping light' },
  { duration: 26, shots: 10, animations: 32, props: 14, env: 5, captions: 7, note: 'breakthrough grade: anything goes within reason' },
  { duration: 30, shots: 12, animations: 40, props: 18, env: 6, captions: 8, note: 'breakthrough grade: anything goes within reason' },
];

const isVec = (v: unknown): v is Vec3 => Array.isArray(v) && v.length === 3 && v.every((x) => typeof x === 'number' && Number.isFinite(x));

/** Validates against a tier's limits and known ids. Returns problems (empty = ok). */
export function validateCutscene(c: Cutscene, tierIndex: number, known: { entities: Set<string>; components: Set<string> }): string[] {
  const L = CUTSCENE_TIERS[Math.min(tierIndex, CUTSCENE_TIERS.length - 1)];
  const p: string[] = [];
  if (!c || typeof c !== 'object') return ['cutscene must be an object'];
  if (!(c.duration > 0 && c.duration <= L.duration)) p.push(`duration must be in (0, ${L.duration}] s`);
  if (!Array.isArray(c.shots) || !c.shots.length) p.push('needs at least one shot');
  const count = (a: unknown[] | undefined, max: number, what: string) => { if ((a?.length ?? 0) > max) p.push(`at most ${max} ${what} at this tier`); };
  count(c.shots, L.shots, 'shots');
  count(c.animations, L.animations, 'animations');
  count(c.props, L.props, 'props');
  count(c.env, L.env, 'env changes');
  count(c.captions, L.captions, 'captions');
  for (const s of c.shots ?? []) {
    if (!isVec(s.from?.pos) || !isVec(s.from?.target) || !isVec(s.to?.pos) || !isVec(s.to?.target)) p.push('each shot needs from/to {pos, target} as [x,y,z]');
    if (!(s.end > s.start)) p.push('each shot needs end > start');
  }
  const propIds = new Set((c.props ?? []).map((x) => x.id));
  for (const a of c.animations ?? []) {
    if (a.target !== 'wanderer' && !known.entities.has(a.target) && !propIds.has(a.target)) p.push(`animation target ${a.target} is not an entity, prop or 'wanderer'`);
    if (a.to?.at !== undefined && !isVec(a.to.at)) p.push(`animation ${a.target}: to.at must be [x,y,z]`);
    if (!(a.end > a.start)) p.push(`animation ${a.target}: end > start`);
  }
  for (const pr of c.props ?? []) {
    if (!known.components.has(pr.component)) p.push(`prop ${pr.id}: unknown component ${pr.component}`);
    if (!isVec(pr.at)) p.push(`prop ${pr.id}: at must be [x,y,z]`);
  }
  return [...new Set(p)];
}

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const ease = (x: number, kind?: string) => (kind === 'linear' ? x : x * x * (3 - 2 * x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpV = (a: Vec3, b: Vec3, t: number): Vec3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

/** Camera at time t: inside the shot covering t, else holding the nearest shot's end or start. */
export function cameraAt(c: Cutscene, t: number): CameraKey {
  const shots = [...c.shots].sort((a, b) => a.start - b.start);
  let s = shots.find((x) => t >= x.start && t <= x.end);
  if (!s) s = [...shots].reverse().find((x) => x.end <= t) ?? shots[0];
  const k = ease(clamp01((t - s.start) / Math.max(0.001, s.end - s.start)), s.ease);
  return { pos: lerpV(s.from.pos, s.to.pos, k), target: lerpV(s.from.target, s.to.target, k), fov: lerp(s.from.fov ?? 55, s.to.fov ?? s.from.fov ?? 55, k) };
}

/** Pose of an animated target at time t, given its base pose. Later animations win. */
export function poseAt(c: Cutscene, target: string, base: Required<Pose>, t: number): Required<Pose> {
  let pose = { ...base };
  for (const a of (c.animations ?? []).filter((x) => x.target === target).sort((x, y) => x.start - y.start)) {
    if (t < a.start) break;
    const from = { ...pose, ...(a.from ?? {}) };
    const k = ease(clamp01((t - a.start) / Math.max(0.001, a.end - a.start)), a.ease);
    pose = {
      at: a.to.at ? lerpV(from.at, a.to.at, k) : from.at,
      rotation: a.to.rotation !== undefined ? lerp(from.rotation, a.to.rotation, k) : from.rotation,
      scale: a.to.scale !== undefined ? lerp(from.scale, a.to.scale, k) : from.scale,
    };
  }
  return pose;
}

/** Environment at time t: base env with each env key blended in over its window. */
export function envAt(c: Cutscene, base: Environment, t: number): Environment {
  let env: Environment = { ...base, sunDirection: [...base.sunDirection] as Vec3 };
  for (const e of [...(c.env ?? [])].sort((a, b) => a.start - b.start)) {
    if (t < e.start) break;
    const k = ease(clamp01((t - e.start) / Math.max(0.001, e.end - e.start)));
    const next = { ...env };
    for (const [key, v] of Object.entries(e.to ?? {})) {
      const cur = (env as unknown as Record<string, unknown>)[key];
      if (typeof v === 'number' && typeof cur === 'number') (next as unknown as Record<string, unknown>)[key] = lerp(cur, v, k);
      else if (isVec(v) && isVec(cur)) (next as unknown as Record<string, unknown>)[key] = lerpV(cur, v, k);
      else if (typeof v === 'string' && /^#[0-9a-f]{6}$/i.test(v) && typeof cur === 'string') (next as unknown as Record<string, unknown>)[key] = mixHex(cur, v, k);
      else if (k >= 0.5) (next as unknown as Record<string, unknown>)[key] = v;
    }
    env = next;
  }
  return env;
}

function mixHex(a: string, b: string, k: number) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return '#' + pa.map((v, i) => Math.round(lerp(v, pb[i], k)).toString(16).padStart(2, '0')).join('');
}

export const propVisible = (p: Prop, t: number) => t >= (p.appear ?? 0) && t <= (p.vanish ?? Infinity);
