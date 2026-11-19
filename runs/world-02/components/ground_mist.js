// Low soft drifting additive mist discs; params: count, radius (max), rmin, color, opacity, spread
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 6, S = p.spread || 5;
  const r0 = p.rmin || 1.5, r1 = p.rmax || 2.5;
  const tex = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - q) / 0.7) * 255; return [k, k, k]; });
  const ms = [];
  for (let i = 0; i < n; i++) {
    const r = ctx.range(r0, r1);
    const cg = new THREE.CircleGeometry(r, 20);
    cg.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: tex, color: p.color || '#6f8fd0', transparent: true, opacity: p.opacity || 0.08, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    m.position.set(ctx.range(-S, S), 0.15 + i * 0.002, ctx.range(-S, S));
    m.userData = { x0: m.position.x, z0: m.position.z, ph: ctx.range(0, 6) };
    g.add(m);
    ms.push(m);
  }
  g.userData.ms = ms;
  return g;
}
export function update(obj, t) {
  obj.userData.ms.forEach((m) => {
    const q = m.userData;
    m.position.x = q.x0 + Math.sin(t * 0.1 + q.ph) * 1.5;
    m.position.z = q.z0 + Math.cos(t * 0.08 + q.ph) * 1.2;
  });
}
