// Slow silver round stars drifting beneath a rising bridge; params: count, length, rise, spread, minDepth, maxDepth
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 80;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#dfe6ff', size: 0.3, sizeAttenuation: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false;
  g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(-1, 1), ctx.range(p.minDepth || 2, p.maxDepth || 6), ctx.range(0, 6), ctx.range(0.004, 0.012)]);
  g.userData = { pts: pts, seeds: seeds, L: p.length || 37, R: p.rise || 12, S: p.spread || 4 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[4]) % 1;
    a[i * 3] = q[1] * u.S + Math.sin(t * 0.3 + q[3]) * 0.4;
    a[i * 3 + 1] = u.R * f - q[2] + Math.sin(t * 0.5 + q[3]) * 0.2;
    a[i * 3 + 2] = -f * u.L;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
