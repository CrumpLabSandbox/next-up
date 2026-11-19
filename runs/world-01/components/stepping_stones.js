// Row of flat grey stepping stones along local -Z with a silver line through their centers. params: length (m), spacing (m), width (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 12, sp = p.spacing || 1.2, w = p.width || 1;
  const n = Math.floor(L / sp);
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.6, w * 0.65, 0.16, 6), ctx.mat(ctx.pick(['#7d8088', '#6d7078', '#8a8d94'])));
    m.position.set(ctx.range(-0.05, 0.05), 0.08, -(i + 0.5) * sp);
    m.rotation.y = ctx.range(0, 3);
    g.add(m);
  }
  const line = new THREE.Mesh(new THREE.PlaneGeometry(0.05, L), ctx.mat('#e8f0ff', { emissive: '#e8f0ff', emissiveIntensity: 1.5, side: THREE.DoubleSide }));
  line.rotation.x = -Math.PI / 2; line.position.set(0, 0.17, -L / 2);
  g.add(line);
  return g;
}
