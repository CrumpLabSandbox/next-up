// Thin silver road drawn on a tilted mirror running 'north' (local -Z) to a pinprick of light. params: radius (m), tilt
export function build(THREE, p, ctx) {
  const root = new THREE.Group();
  const g = new THREE.Group();
  root.add(g);
  g.rotation.x = p.tilt || 0;
  const R = p.radius || 0.125;
  const m = ctx.mat('#ffffff', { emissive: '#eef4ff', emissiveIntensity: 3, side: THREE.DoubleSide });
  const len = R * 0.75;
  const road = new THREE.Mesh(new THREE.PlaneGeometry(0.004, len), m);
  road.rotation.x = -Math.PI / 2; road.position.set(0, 0.0235, -R * 0.1 - len / 2 + R * 0.02); g.add(road);
  const pin = new THREE.Mesh(new THREE.IcosahedronGeometry(0.004, 0), ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 3 }));
  pin.position.set(0, 0.025, -R * 0.88); g.add(pin);
  root.userData.m = m;
  return root;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 3 + 1.0 * Math.sin(t * 2.4);
}
