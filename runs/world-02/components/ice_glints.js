// Static soft round star-glints on the ground around a center, thinning with distance; params: count, radius, size, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 40, R = p.radius || 10;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.283), r = R * Math.pow(ctx.rng(), 1.7);
    pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = 0.06; pos[i * 3 + 2] = Math.sin(a) * r;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.add(new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: p.color || '#dfe6ff', size: p.size || 0.1, sizeAttenuation: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })));
  return g;
}
