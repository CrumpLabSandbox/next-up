// Soft round gold motes in a column drifting slowly toward +Z; params: count, size, depth (m), width (m), height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 20;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.2) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#ffd37a', size: p.size || 0.04, sizeAttenuation: true, transparent: true, opacity: 0.5, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(-0.5, 0.5), ctx.range(0.2, 2.2), ctx.range(0.03, 0.07), ctx.range(0, 6)]);
  g.userData = { pts: pts, seeds: seeds, D: p.depth || 1.5 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 1;
    a[i * 3] = q[1] * 1.2 + Math.sin(t * 0.5 + q[4]) * 0.1;
    a[i * 3 + 1] = q[2] + Math.sin(t * 0.4 + q[4]) * 0.1;
    a[i * 3 + 2] = f * u.D;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}