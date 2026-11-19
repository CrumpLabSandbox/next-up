// Points scattered over a sky dome; params: count, radius, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 300, R = p.radius || 90;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.283), e = Math.asin(ctx.range(0.05, 1));
    pos[i * 3] = Math.cos(a) * Math.cos(e) * R;
    pos[i * 3 + 1] = Math.sin(e) * R;
    pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * R;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const m = new THREE.PointsMaterial({ color: p.color || '#cfd8ff', size: 2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.85 });
  g.add(new THREE.Points(geo, m));
  return g;
}
