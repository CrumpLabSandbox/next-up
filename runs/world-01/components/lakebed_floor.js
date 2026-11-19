// Round smooth pale glowing stone floor. params: radius, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 6;
  const c = p.color || '#c9d2e6';
  const f = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.3, 28), ctx.mat(c, { emissive: '#8a9cc0', emissiveIntensity: 0.7 }));
  f.position.y = -0.15;
  g.add(f);
  const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.93, R * 0.97, 40), ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1.6, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.01;
  g.add(ring);
  return g;
}