// Rebuilds "the world at event N" for any run. Legacy runs use the shared
// reducer; ladder runs replay each engine's own frozen world.js, migrating the
// world across every engine change.
import { applyFacts, emptyWorld, worldFromEvents } from '../../shared/world';
import { TIERS, THREE_TIERS, contentBytes } from '../../shared/ladder';
import type { Fact, RunInfo, TimelineEvent } from '../../shared/types';

interface WorldModule {
  initialWorld(): unknown;
  migrate(prev: unknown): unknown;
  reduce(world: unknown, op: unknown, turn: number): unknown;
}

export interface Snapshot {
  engineUrl: string; // 'legacy' or runs/<id>/engines/vN/engine.js
  engine: string | null;
  engineNotes: string;
  world: unknown;
  facts: Record<string, Fact>;
  entityFacts: (id: string) => string | null;
  tier: number;
  limit: number;
  bytes: number | null;
}

const modules = new Map<string, Promise<WorldModule>>();
const metas = new Map<string, Promise<{ bytes: number; notes: string }>>();

function load(base: string) {
  if (!modules.has(base)) modules.set(base, import(/* @vite-ignore */ new URL(`${base}/world.js`, location.href).href));
  if (!metas.has(base)) metas.set(base, fetch(`${base}/meta.json`).then((r) => r.json()));
  return Promise.all([modules.get(base)!, metas.get(base)!]);
}

export async function snapshot(run: RunInfo, events: TimelineEvent[], count: number): Promise<Snapshot> {
  if (run.mode !== 'ladder') {
    const s = worldFromEvents(events, count);
    let tier = 0;
    for (let i = 0; i < count && i < events.length; i++) { const e = events[i]; if (e.type === 'budget') tier = e.tier; }
    const tiered = run.mode === 'tiered';
    return {
      engineUrl: 'legacy', engine: tiered ? `three.js · tier ${tier + 1}` : null, engineNotes: '', world: s, facts: s.facts,
      entityFacts: (id) => s.entities[id]?.fact ?? null,
      tier: tiered ? tier : -1, limit: tiered ? THREE_TIERS[tier].bytes : 0, bytes: tiered ? contentBytes(s) : null,
    };
  }
  const story = emptyWorld();
  let mod: WorldModule | null = null;
  let base = '';
  let notes = '';
  let world: unknown = null;
  let tier = 0;
  let engineBytes = 0;
  for (let i = 0; i < count && i < events.length; i++) {
    const ev = events[i];
    if (ev.type === 'engine') {
      base = `runs/${run.id}/engines/${ev.version}`;
      const [m, meta] = await load(base);
      world = ev.from === null || !mod ? m.initialWorld() : m.migrate(world);
      mod = m;
      notes = ev.notes;
      engineBytes = meta.bytes;
    } else if (ev.type === 'budget') tier = ev.tier;
    else if (ev.type === 'narrator') applyFacts(story, ev.facts, ev.turn);
    else if (ev.type === 'builder' && mod) {
      for (const op of ev.ops) {
        try { world = mod.reduce(world, structuredClone(op), ev.turn); } catch { /* rejected at the time too */ }
      }
    }
  }
  if (!mod) {
    // Before the first engine event: show the seed engine with an empty world.
    const first = events.find((e) => e.type === 'engine');
    if (first && first.type === 'engine') {
      base = `runs/${run.id}/engines/${first.version}`;
      const [m, meta] = await load(base);
      world = m.initialWorld();
      engineBytes = meta.bytes;
      notes = first.notes;
    }
  }
  return {
    engineUrl: `${base}/engine.js`, engine: base.split('/').pop() ?? null, engineNotes: notes, world, facts: story.facts,
    entityFacts: () => null, tier, limit: TIERS[tier], bytes: engineBytes + JSON.stringify(world).length,
  };
}
