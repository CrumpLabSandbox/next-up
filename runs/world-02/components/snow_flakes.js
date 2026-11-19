// Round soft additive snow discs falling slowly in a box around local origin; params: count, radius, height, size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 90, R = p.radius || 7, H = p.height || 5;
  const tex = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - q) / 0.5) * 255; return [k, k, k]; });
  const pos = new Float32Array(n * 3);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(-R, R), ctx.rng(), ctx.range(-R, R), ctx.range(0.03, 0.08), ctx.range(0, 6)]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: tex, color: '#ffffff', size: Math.max(0.055, p.size || 0.055), sizeAttenuation: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
  pts.frustumCulled = false;
  g.add(pts);
  g.userData = { pts: pts, pos: pos, seeds: seeds, H: H };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[1] + t * q[3]) % 1;
    u.pos[i * 3] = q[0] + Math.sin(t * 0.5 + q[4]) * 0.4;
    u.pos[i * 3 + 1] = u.H * (1 - f);
    u.pos[i * 3 + 2] = q[2] + Math.cos(t * 0.4 + q[4]) * 0.4;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
