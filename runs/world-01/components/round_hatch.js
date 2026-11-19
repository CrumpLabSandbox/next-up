// Open round pale stone hatch flush with floor, silver light rising. params: radius (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.75;
  const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.72, R, 20), ctx.mat('#e6e2d6', { side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02; g.add(ring);
  const hole = new THREE.Mesh(new THREE.CircleGeometry(R * 0.72, 20), ctx.mat('#cfe0ff', { emissive: '#cfe0ff', emissiveIntensity: 1.2, side: THREE.DoubleSide }));
  hole.rotation.x = -Math.PI / 2; hole.position.y = 0.01; g.add(hole);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.7, R * 0.7, 0.08, 20), ctx.mat('#d8d4c8'));
  lid.position.set(R * 1.4, 0.04, 0); lid.rotation.z = 0; g.add(lid);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.6, R * 0.7, 2.5, 16, 1, true), ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1, transparent: true, opacity: 0.18, side: THREE.DoubleSide }));
  beam.position.y = 1.25; g.add(beam);
  g.userData.m = beam.material;
  return g;
}
export function update(obj, t) {
  obj.userData.m.opacity = 0.16 + 0.06 * Math.sin(t * 1.7);
}
