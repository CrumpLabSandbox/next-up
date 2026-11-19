// Large soft normal-blend ground fog discs; params: count, rmin, rmax, spread, spreadZ, color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 12, SX = p.spread || 8, SZ = p.spreadZ || 6;
  const tex = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - q) / 0.8) * 255; return [k, k, k]; });
  for (let i = 0; i < n; i++) {
    const r = ctx.range(p.rmin || 2.5, p.rmax || 4);
    const cg = new THREE.CircleGeometry(r, 20); cg.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ color: p.color || '#3a4468', alphaMap: tex, transparent: true, opacity: p.opacity || 0.18, depthWrite: false, fog: false }));
    m.position.set(ctx.range(-SX, SX), 0.05 + i * 0.003, ctx.range(-SZ, SZ));
    g.add(m);
  }
  return g;
}
