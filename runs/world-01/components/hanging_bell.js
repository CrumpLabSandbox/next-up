// Small dull silver bell on a thin chain; origin at the hanging point. params: chain (m), size (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.chain || 1.5, s = p.size || 0.5;
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, L, 5), ctx.mat('#9aa0b4'));
  chain.position.y = -L / 2;
  g.add(chain);
  const pts = [];
  const prof = [[0.02, 1], [0.12, 0.95], [0.18, 0.7], [0.22, 0.4], [0.3, 0.05], [0.32, 0]];
  prof.forEach(q => pts.push(new THREE.Vector2(q[0] * s / 0.5 * 0.9, (q[1] - 1) * s)));
  const bell = new THREE.Mesh(new THREE.LatheGeometry(pts, 10), ctx.mat('#8a90a2', { emissive: '#4a5068', emissiveIntensity: 0.5, side: THREE.DoubleSide }));
  bell.position.y = -L;
  g.add(bell);
  const clap = new THREE.Mesh(new THREE.IcosahedronGeometry(0.04, 0), ctx.mat('#c8d0e6', { emissive: '#dfe8ff', emissiveIntensity: 0.8 }));
  clap.position.y = -L - s * 1.0;
  g.add(clap);
  return g;
}
