// Small evenly spaced dark notches around a bowl's inner rim, aimed at figures. params: radius (m), count, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 0.29, n = p.count || 5;
  const m = ctx.mat(p.color || '#2a2c3a');
  for (let i = 0; i < n; i++) {
    const a = (i + 0.5) / n * Math.PI * 2;
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.012, 0.05), m);
    b.position.set(Math.sin(a) * r, 0.014, Math.cos(a) * r);
    b.rotation.y = a;
    g.add(b);
  }
  return g;
}
