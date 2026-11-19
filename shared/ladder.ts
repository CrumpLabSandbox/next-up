// The budget ladder for 'ladder' runs: the world's shipped bytes (engine + world
// JSON) may grow by ×4 per tier, unlocked one step at a time by the Designer.
export const TIERS = [4 << 10, 16 << 10, 64 << 10, 256 << 10, 1 << 20, 4 << 20, 16 << 20];

export const LADDER = {
  unlockGap: 5, // minimum turns between budget unlocks
  engineGap: 3, // minimum turns between engine rewrites
  runBytes: 40 * 1024 * 1024, // whole run folder, deduplicated
};

export const fmtBytes = (n: number) =>
  n < 1024 ? `${n} B` : n < 1 << 20 ? `${(n / 1024).toFixed(1)} KB` : `${(n / (1 << 20)).toFixed(2)} MB`;

/** Tiered three.js runs: limits on the world's own content, unlocked by the Designer. */
export interface ThreeTier { bytes: number; triangles: number; lights: number }
export const THREE_TIERS: ThreeTier[] = [
  { bytes: 8 << 10, triangles: 8_000, lights: 1 },
  { bytes: 32 << 10, triangles: 30_000, lights: 2 },
  { bytes: 128 << 10, triangles: 80_000, lights: 4 },
  { bytes: 512 << 10, triangles: 200_000, lights: 6 },
  { bytes: 2 << 20, triangles: 500_000, lights: 8 },
];
export const THREE_UNLOCK_GAP = 6;

export const fmtTier = (t: ThreeTier) => `${fmtBytes(t.bytes)} · ${(t.triangles / 1000).toFixed(0)}k triangles · ${t.lights} light${t.lights === 1 ? '' : 's'}`;

/** Bytes the world's own content takes (component code and docs plus entity data). */
export function contentBytes(state: { components: Record<string, { name: string }>; entities: Record<string, unknown> }) {
  const comps = Object.values(state.components).filter((c) => c.name !== 'placeholder');
  return JSON.stringify({ c: comps, e: state.entities }).length;
}
