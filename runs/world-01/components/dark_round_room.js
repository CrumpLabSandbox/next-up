// Small round room with dark polished stone walls, low dome with an opening at top, silver-green ladder lights descending through it. Origin at floor center. params: radius (m), wallHeight (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 2.5, H = p.wallHeight || 2.2;
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 28), ctx.mat('#2a2e3c', { side: THREE.DoubleSide }));
  floor.rotation.x = -Math.PI / 2; g.add(floor);
  const ring = new THREE.Mesh(new THREE.RingGeometry(R - 0.25, R - 0.2, 28), ctx.mat('#b8ffd0', { emissive: '#8affc0', emissiveIntensity: 0.8, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.01; g.add(ring);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 28, 1, true), ctx.mat('#181b27', { side: THREE.BackSide }));
  wall.position.y = H / 2; g.add(wall);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 28, 8, 0, Math.PI * 2, 0.3, Math.PI / 2 - 0.3), ctx.mat('#1d2130', { side: THREE.BackSide }));
  dome.scale.y = 0.6; dome.position.y = H; g.add(dome);
  const lm = ctx.mat('#b8ffd0', { emissive: '#8affc0', emissiveIntensity: 2.4 });
  g.userData.lights = [];
  for (let i = 0; i < 6; i++) {
    const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 0), lm);
    l.position.set(-0.55, H + 0.5 + i * 0.5 - 0.3, 0); g.add(l);
  }
  const pl = new THREE.PointLight('#a8ffd8', 1.2, 9);
  pl.position.set(-0.3, H - 0.3, 0); g.add(pl);
  g.userData.pl = pl;
  return g;
}
export function update(obj, t) {
  obj.userData.pl.intensity = 1.1 + 0.25 * Math.sin(t * 1.5);
}