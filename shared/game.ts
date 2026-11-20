// Game state for runs with a Game Master: an open, extendable set of named
// mechanics (quality-based narrative). Every change is an op recorded in the
// timeline, so the state at any turn is a pure replay, like the scene.

/** A widget piece the Game Master can compose into new HUD widgets. */
export type WidgetPiece =
  | { text: string } // template: "{value}/{max}", any mechanic field in braces
  | { bar: string; max?: string; color?: string } // field names
  | { pips: string; max?: string; icon?: string }
  | { icons: string } // list field of strings or { icon | label }
  | { list: string }; // list field rendered as lines

export interface WidgetSpec {
  /** Built-in: bar | clock | slots | journal | chips | counter | relations | stats | text. Or 'custom'. */
  type: string;
  pieces?: WidgetPiece[]; // for type 'custom'
}

export interface Mechanic {
  id: string;
  kind: string; // meter | clock | inventory | quest | condition | counter | relation | stat | flag | lore | ... (open)
  label: string;
  ui?: WidgetSpec | string | null; // null/absent = not shown
  hidden?: boolean;
  rules?: string; // plain-language rules the Game Master follows
  color?: string;
  icon?: string;
  since: number;
  updated: number;
  [field: string]: unknown; // value, max, min, segments, filled, items, slots, status, objectives, entries, …
}

export interface GameState {
  mechanics: Record<string, Mechanic>;
  retired: string[];
}

export type GameOp =
  | ({ op: 'define'; id: string; kind: string; label: string } & Record<string, unknown>)
  | { op: 'set'; id: string; fields: Record<string, unknown> }
  | { op: 'delta'; id: string; field?: string; by: number }
  | { op: 'tick'; id: string; by?: number }
  | { op: 'addItem'; id: string; item: Record<string, unknown> }
  | { op: 'removeItem'; id: string; itemId: string }
  | { op: 'objective'; id: string; text: string; done?: boolean }
  | { op: 'retire'; id: string };

const ID_RE = /^[a-z][a-z0-9_]{0,47}$/;
const RESERVED = new Set(['id', 'since', 'updated', 'op']);

export const emptyGame = (): GameState => ({ mechanics: {}, retired: [] });

const num = (v: unknown, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);

/** Applies one op in place; returns an error message or null. */
export function applyGameOp(g: GameState, raw: unknown, turn: number): string | null {
  try {
    const op = raw as GameOp & Record<string, unknown>;
    if (!op || typeof op !== 'object' || typeof op.id !== 'string') throw new Error('op needs an id');
    const m = g.mechanics[op.id];
    const need = () => { if (!m) throw new Error(`unknown mechanic ${op.id}`); return m; };
    switch (op.op) {
      case 'define': {
        if (!ID_RE.test(op.id)) throw new Error('id must be snake_case');
        if (typeof op.kind !== 'string' || typeof op.label !== 'string') throw new Error('define needs kind and label');
        const fields = Object.fromEntries(Object.entries(op).filter(([k]) => !RESERVED.has(k)));
        g.mechanics[op.id] = { ...(m ?? {}), ...fields, id: op.id, since: m?.since ?? turn, updated: turn } as Mechanic;
        g.retired = g.retired.filter((r) => r !== op.id);
        return null;
      }
      case 'set': {
        const t = need();
        if (!op.fields || typeof op.fields !== 'object') throw new Error('set needs fields');
        for (const [k, v] of Object.entries(op.fields)) if (!RESERVED.has(k)) t[k] = v;
        t.updated = turn;
        return null;
      }
      case 'delta': {
        const t = need();
        const f = op.field ?? 'value';
        let v = num(t[f]) + num(op.by);
        if (f === 'value') {
          if (typeof t.max === 'number') v = Math.min(v, t.max);
          v = Math.max(v, typeof t.min === 'number' ? t.min : 0);
        }
        t[f] = v;
        t.updated = turn;
        return null;
      }
      case 'tick': {
        const t = need();
        const segs = num(t.segments, 6);
        t.filled = Math.max(0, Math.min(segs, num(t.filled) + num(op.by, 1)));
        t.updated = turn;
        return null;
      }
      case 'addItem': {
        const t = need();
        if (!op.item || typeof op.item !== 'object') throw new Error('addItem needs item');
        const items = Array.isArray(t.items) ? [...(t.items as unknown[])] : [];
        if (typeof t.slots === 'number' && items.length >= t.slots) throw new Error(`${op.id} is full (${t.slots} slots)`);
        items.push(op.item);
        t.items = items;
        t.updated = turn;
        return null;
      }
      case 'removeItem': {
        const t = need();
        const items = Array.isArray(t.items) ? (t.items as { id?: string }[]) : [];
        const i = items.findIndex((x) => x?.id === op.itemId);
        if (i < 0) throw new Error(`no item ${op.itemId} in ${op.id}`);
        t.items = items.filter((_, j) => j !== i);
        t.updated = turn;
        return null;
      }
      case 'objective': {
        const t = need();
        const objs = Array.isArray(t.objectives) ? [...(t.objectives as { text: string; done?: boolean }[])] : [];
        const o = objs.find((x) => x.text === op.text);
        if (o) o.done = op.done ?? o.done;
        else objs.push({ text: String(op.text), done: !!op.done });
        t.objectives = objs;
        t.updated = turn;
        return null;
      }
      case 'retire': {
        need();
        delete g.mechanics[op.id];
        if (!g.retired.includes(op.id)) g.retired.push(op.id);
        return null;
      }
      default:
        throw new Error(`unknown game op ${(op as { op?: string }).op}`);
    }
  } catch (err) {
    return (err as Error).message;
  }
}

/** Compact text of the game state for agents. */
export function describeGame(g: GameState): string {
  const ms = Object.values(g.mechanics);
  if (!ms.length) return '(no mechanics yet)';
  return ms.map((m) => {
    const { id, kind, label, since, updated, rules, ui, ...rest } = m;
    void since; void updated; void ui;
    return `- ${id} [${kind}] "${label}" ${JSON.stringify(rest).slice(0, 500)}${rules ? ` | rules: ${rules}` : ''}`;
  }).join('\n');
}

/** Game state after events[0..count) (Game Master ops only). */
export function gameFromEvents(events: { type: string; turn: number; ops?: unknown[] }[], count = events.length): GameState {
  const g = emptyGame();
  for (let i = 0; i < count && i < events.length; i++) {
    const e = events[i];
    if (e.type === 'gamemaster') for (const op of e.ops ?? []) applyGameOp(g, structuredClone(op), e.turn);
  }
  return g;
}
