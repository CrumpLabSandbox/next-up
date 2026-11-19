// Round domed chamber of pale stone with polished floor and silver light. params: radius (m), wallHeight (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 4, wh = p.wallHeight || 2.5;
  const c = p.color || '#c4c9d8';
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 24), ctx.mat('#7a7e8a', { emissive: '#2c3040', emissiveIntensity: 0.6 }));
  floor.rotation.x = -Math.PI / 2;
  g.add(floor);
  const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.5, R * 0.52, 32), ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1.2, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.01;
  g.add(ring);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, wh, 24, 1, true), ctx.mat(c, { emissive: '#7e849c', emissiveIntensity: 0.5, side: THREE.BackSide }));
  wall.position.y = wh / 2;
  g.add(wall);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2), ctx.mat(c, { emissive: '#8a90a8', emissiveIntensity: 0.55, side: THREE.BackSide }));
  dome.scale.y = 0.8;
  dome.position.y = wh;
  g.add(dome);
  const light = new THREE.PointLight('#cfd8ff', 2.2, 16, 1.4);
  light.position.y = 3;
  g.add(light);
  return g;
}
