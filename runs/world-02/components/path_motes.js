// Silver motes streaming north (-Z) along a rising path, about 1 m above it; params: length, rise, count
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 90;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#dfe9ff', size: 0.16, sizeAttenuation: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false;
  g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(-0.6, 0.6), ctx.range(0, 6), ctx.range(0.5, 0.9), ctx.range(0.025, 0.045)]);
  g.userData = { pts: pts, seeds: seeds, L: p.length || 29, R: p.rise || 2.9 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[4]) % 1;
    a[i * 3] = q[1] + Math.sin(t * 0.8 + q[2]) * 0.15;
    a[i * 3 + 1] = u.R * f + q[3] + Math.sin(t + q[2]) * 0.1;
    a[i * 3 + 2] = -f * u.L;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
