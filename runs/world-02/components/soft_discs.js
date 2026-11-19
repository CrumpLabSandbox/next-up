// Flat feathered round discs lying horizontally, scattered, optionally drifting slowly; params: count, rmin, rmax (diameter m), spread, spreadZ, color, opacity, drift
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 8;
  const at = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  const ds = [];
  for (let i = 0; i < n; i++) {
    const d = ctx.range(p.rmin || 12, p.rmax || 20) / 2;
    const geo = new THREE.CircleGeometry(d, 20); geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: p.color || '#8a5a80', alphaMap: at, transparent: true, opacity: p.opacity || 0.18, depthWrite: false, fog: true }));
    m.scale.set(1, 1, ctx.range(0.7, 1.1));
    const x = ctx.range(-1, 1) * (p.spread || 40), z = ctx.range(-1, 1) * (p.spreadZ || p.spread || 40);
    m.position.set(x, i * 0.01, z); m.renderOrder = 5; g.add(m); ds.push({ m: m, x: x, z: z, ph: ctx.range(0, 6) });
  }
  g.userData = { ds: ds, drift: p.drift || 0 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  if (!u.drift) return;
  for (let i = 0; i < u.ds.length; i++) { const d = u.ds[i]; d.m.position.x = d.x + Math.sin(t * 0.05 * u.drift + d.ph) * 4; d.m.position.z = d.z + Math.cos(t * 0.04 * u.drift + d.ph) * 3; }
}
