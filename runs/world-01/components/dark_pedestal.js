// Squat dark stone pedestal with a round spiral-marked hollow in top. params: height, radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1, r = p.radius || 0.5;
  const b = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.9, r, h, 8), ctx.mat('#2a2c36'));
  b.position.y = h / 2;
  g.add(b);
  const pit = new THREE.Mesh(new THREE.CircleGeometry(0.1, 12), ctx.mat('#0a0a10'));
  pit.rotation.x = -Math.PI / 2;
  pit.position.y = h + 0.005;
  g.add(pit);
  const sp = new THREE.Mesh(new THREE.RingGeometry(0.13, 0.15, 14, 1, 0, Math.PI * 1.6), ctx.mat('#9aa6c8', { emissive: '#9aa6c8', emissiveIntensity: 0.8, side: THREE.DoubleSide }));
  sp.rotation.x = -Math.PI / 2;
  sp.position.y = h + 0.008;
  g.add(sp);
  return g;
}