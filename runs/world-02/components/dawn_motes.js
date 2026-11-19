// Tiny round gold motes drifting slowly upward within a radius of origin; params: count, radius, height, size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 40;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.5) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#ffd37a', size: p.size || 0.05, sizeAttenuation: true, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(0, 6.283), Math.sqrt(ctx.rng()) * (p.radius || 2.5), ctx.range(0.02, 0.05), ctx.range(0, 6)]);
  g.userData = { pts: pts, seeds: seeds, H: p.height || 3 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 1;
    a[i * 3] = Math.cos(q[1]) * q[2] + Math.sin(t * 0.4 + q[4]) * 0.15;
    a[i * 3 + 1] = 0.1 + f * u.H;
    a[i * 3 + 2] = Math.sin(q[1]) * q[2] + Math.cos(t * 0.3 + q[4]) * 0.15;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
