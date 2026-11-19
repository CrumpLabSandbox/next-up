// Small gold sparks rising 0-2 m from a point and fading like fireflies; params: count, height, spread, size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 36;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.5) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, vertexColors: true, size: p.size || 0.09, sizeAttenuation: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(0, 1), ctx.range(0, 6.28), ctx.range(0.1, 0.5), ctx.range(0.15, 0.35), ctx.range(0, 6)]);
  g.userData = { pts: pts, seeds: seeds, H: p.height || 2 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array, c = u.pts.geometry.attributes.color.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 1;
    a[i * 3] = Math.cos(q[1]) * q[2] + Math.sin(t * 0.9 + q[4]) * 0.15 * f;
    a[i * 3 + 1] = 0.05 + f * u.H;
    a[i * 3 + 2] = Math.sin(q[1]) * q[2] + Math.cos(t * 0.8 + q[4]) * 0.15 * f;
    const k = Math.sin(Math.PI * f);
    c[i * 3] = 1 * k; c[i * 3 + 1] = 0.78 * k; c[i * 3 + 2] = 0.4 * k;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
  u.pts.geometry.attributes.color.needsUpdate = true;
}
