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
