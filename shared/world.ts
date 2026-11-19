// Pure world reducer. The scene at any turn is fully determined by replaying
// the timeline's narrator facts and builder ops in order.
import { PLACEHOLDER_CODE } from './component-api.js';
import type {
  Behavior, BehaviorType, Environment, FactChange, Op, TimelineEvent, Vec3, WorldState,
} from './types';

export const LIMITS = {
  componentCodeBytes: 20_000,
  entities: 400,
  trianglesPerInstance: 30_000,
  trianglesTotal: 200_000,
  lightsTotal: 8,
  runBytes: 45 * 1024 * 1024,
};

export const DEFAULT_ENV: Environment = {
  skyTop: '#05060c',
  skyBottom: '#1a1d2e',
  fogColor: '#10121c',
  fogDensity: 0.035,
  ambient: 0.35,
  sunColor: '#c8d0ff',
  sunIntensity: 0.6,
  sunDirection: [0.4, 1, 0.3],
  particles: 0.6,
};

export const PHASES = ['player', 'narrator', 'builder', 'render'] as const;

const ID_RE = /^[a-z][a-z0-9_]{0,63}$/;
const COLOR_RE = /^#[0-9a-fA-F]{6}$/;
const BEHAVIORS: BehaviorType[] = ['spin', 'bob', 'sway', 'pulse', 'flicker'];

export function emptyWorld(): WorldState {
  return {
    turn: 0,
    components: {
      placeholder: { name: 'placeholder', code: PLACEHOLDER_CODE, doc: 'Built-in stand-in. params: size (m)', since: 0, updated: 0 },
    },
    entities: {},
    facts: {},
    env: { ...DEFAULT_ENV, sunDirection: [...DEFAULT_ENV.sunDirection] as Vec3 },
    avatar: { at: [0, 0, 0], facing: 0 },
  };
}

export function cloneWorld(s: WorldState): WorldState {
  return structuredClone(s);
}

const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isVec3 = (v: unknown): v is Vec3 => Array.isArray(v) && v.length === 3 && v.every(isNum);

function checkBehavior(b: unknown): Behavior | null {
  if (b === null || b === undefined) return null;
  if (typeof b !== 'object') throw new Error('behavior must be an object or null');
  const o = b as Record<string, unknown>;
  if (!BEHAVIORS.includes(o.type as BehaviorType)) throw new Error(`behavior.type must be one of ${BEHAVIORS.join(', ')}`);
  return {
    type: o.type as BehaviorType,
    ...(isNum(o.speed) ? { speed: o.speed } : {}),
    ...(isNum(o.amount) ? { amount: o.amount } : {}),
  };
}

export function applyFacts(s: WorldState, changes: FactChange[], turn: number): void {
  for (const c of changes) {
    if (!ID_RE.test(c.id)) continue;
    if (c.op === 'remove') {
      delete s.facts[c.id];
    } else {
      const prev = s.facts[c.id];
      s.facts[c.id] = {
        id: c.id,
        description: c.description,
        placement: c.placement,
        since: prev ? prev.since : turn,
        updated: turn,
      };
    }
  }
}

/** Applies one builder op in place. Returns an error message, or null on success. */
export function applyOp(s: WorldState, raw: unknown, turn: number): string | null {
  try {
    if (!raw || typeof raw !== 'object') throw new Error('op must be an object');
    const op = raw as Op & Record<string, unknown>;
    switch (op.op) {
      case 'defineComponent': {
        if (typeof op.name !== 'string' || !ID_RE.test(op.name)) throw new Error('name must be snake_case');
        if (op.name === 'placeholder') throw new Error('placeholder is built in');
        if (typeof op.code !== 'string' || !/export\s+function\s+build\s*\(/.test(op.code)) {
          throw new Error('code must export function build(THREE, p, ctx)');
        }
        if (op.code.length > LIMITS.componentCodeBytes) throw new Error(`code over ${LIMITS.componentCodeBytes} bytes`);
        if (/\bimport\b\s*[\s({*'"]/.test(op.code) || /\brequire\s*\(/.test(op.code)) throw new Error('imports are not allowed');
        const prev = s.components[op.name];
        s.components[op.name] = {
          name: op.name,
          code: op.code,
          doc: typeof op.doc === 'string' ? op.doc : prev?.doc ?? '',
          since: prev ? prev.since : turn,
          updated: turn,
        };
        for (const e of Object.values(s.entities)) if (e.component === op.name) e.updated = turn;
        return null;
      }
      case 'add': {
        if (typeof op.id !== 'string' || !ID_RE.test(op.id)) throw new Error('id must be snake_case');
        if (s.entities[op.id]) throw new Error(`entity ${op.id} already exists (use update)`);
        if (Object.keys(s.entities).length >= LIMITS.entities) throw new Error('entity limit reached');
        if (!s.components[op.component]) throw new Error(`unknown component ${op.component}`);
        if (op.at !== undefined && !isVec3(op.at)) throw new Error('at must be [x, y, z]');
        s.entities[op.id] = {
          id: op.id,
          component: op.component,
          params: op.params && typeof op.params === 'object' ? op.params : {},
          at: (op.at as Vec3) ?? [0, 0, 0],
          rotation: isNum(op.rotation) ? op.rotation : 0,
          scale: isNum(op.scale) && op.scale > 0 ? op.scale : 1,
          behavior: checkBehavior(op.behavior),
          fact: typeof op.fact === 'string' ? op.fact : null,
          since: turn,
          updated: turn,
        };
        return null;
      }
      case 'update': {
        const e = s.entities[op.id as string];
        if (!e) throw new Error(`unknown entity ${op.id}`);
        if (op.component !== undefined) {
          if (!s.components[op.component]) throw new Error(`unknown component ${op.component}`);
          e.component = op.component;
        }
        if (op.params !== undefined) {
          if (!op.params || typeof op.params !== 'object') throw new Error('params must be an object');
          e.params = { ...e.params, ...op.params };
        }
        if (op.at !== undefined) {
          if (!isVec3(op.at)) throw new Error('at must be [x, y, z]');
          e.at = op.at;
        }
        if (op.rotation !== undefined) {
          if (!isNum(op.rotation)) throw new Error('rotation must be a number');
          e.rotation = op.rotation;
        }
        if (op.scale !== undefined) {
          if (!isNum(op.scale) || op.scale <= 0) throw new Error('scale must be > 0');
          e.scale = op.scale;
        }
        if (op.behavior !== undefined) e.behavior = checkBehavior(op.behavior);
        if (op.fact !== undefined) e.fact = typeof op.fact === 'string' ? op.fact : null;
        e.updated = turn;
        return null;
      }
      case 'remove': {
        if (!s.entities[op.id as string]) throw new Error(`unknown entity ${op.id}`);
        delete s.entities[op.id as string];
        return null;
      }
      case 'environment': {
        const env = { ...s.env };
        for (const k of ['skyTop', 'skyBottom', 'fogColor', 'sunColor'] as const) {
          if (op[k] === undefined) continue;
          if (typeof op[k] !== 'string' || !COLOR_RE.test(op[k] as string)) throw new Error(`${k} must be #rrggbb`);
          env[k] = op[k] as string;
        }
        for (const k of ['fogDensity', 'ambient', 'sunIntensity', 'particles'] as const) {
          if (op[k] === undefined) continue;
          if (!isNum(op[k])) throw new Error(`${k} must be a number`);
          env[k] = Math.max(0, op[k] as number);
        }
        env.fogDensity = Math.min(env.fogDensity, 0.2);
        env.particles = Math.min(env.particles, 1);
        if (op.sunDirection !== undefined) {
          if (!isVec3(op.sunDirection)) throw new Error('sunDirection must be [x, y, z]');
          env.sunDirection = op.sunDirection;
        }
        s.env = env;
        return null;
      }
      case 'moveAvatar': {
        if (!isVec3(op.to)) throw new Error('to must be [x, y, z]');
        s.avatar = { at: op.to, facing: isNum(op.facing) ? op.facing : s.avatar.facing };
        return null;
      }
      default:
        throw new Error(`unknown op ${(op as { op?: unknown }).op}`);
    }
  } catch (err) {
    return (err as Error).message;
  }
}

export function applyEvent(s: WorldState, ev: TimelineEvent): void {
  if (ev.type === 'narrator') {
    applyFacts(s, ev.facts, ev.turn);
  } else if (ev.type === 'builder') {
    for (const op of ev.ops) applyOp(s, op, ev.turn);
  }
  s.turn = Math.max(s.turn, ev.turn);
}

/** World after applying events[0..count). */
export function worldFromEvents(events: TimelineEvent[], count = events.length): WorldState {
  const s = emptyWorld();
  for (let i = 0; i < count && i < events.length; i++) applyEvent(s, events[i]);
  return s;
}
