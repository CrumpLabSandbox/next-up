// Long black robe sleeve tapering from 0.16 m shoulder to 0.07 m wrist, 0.4 m hand, bright cool rim, ground shadow streak; extends along +Z; params: length, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const arm = new THREE.Group();
  const L = p.length || 1.2;
  const m = ctx.mat(p.color || '#08090d', { emissive: '#8fc0ff', emissiveIntensity: 0.9 });
  const sl = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.16, L, 6), m);
  sl.rotation.x = Math.PI / 2;
  sl.position.z = L / 2;
  arm.add(sl);
  const hand = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.4, 4), m);
  hand.rotation.x = Math.PI / 2;
  hand.position.z = L + 0.15;
  arm.add(hand);
  arm.rotation.x = 0.06;
  g.add(arm);
  const sg = new THREE.PlaneGeometry(0.2, 2);
  sg.rotateX(-Math.PI / 2);
  const sh = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: '#05060a', transparent: true, opacity: 0.4, depthWrite: false }));
  sh.position.set(0, -1.44, 1.0);
  g.add(sh);
  g.userData.arm = arm;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.userData.arm.rotation.x = 0.06 + Math.sin(t * 0.6) * 0.015;
}
