// Hair-thin vertical thread of green light woven with silver, descending from origin downward. params: depth (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const D = p.depth || 6;
  const c = p.color || '#5dff8a';
  const m1 = ctx.mat(c, { emissive: c, emissiveIntensity: 2.2, transparent: true, opacity: 0.9 });
  const m2 = ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 2, transparent: true, opacity: 0.8 });
  const a = new THREE.Mesh(new THREE.BoxGeometry(0.008, D, 0.008), m1);
  a.position.set(0.004, -D / 2, 0);
  const b = new THREE.Mesh(new THREE.BoxGeometry(0.005, D, 0.005), m2);
  b.position.set(-0.004, -D / 2, 0.003);
  g.add(a, b);
  g.userData.m = m1;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.8 + 0.8 * Math.sin(t * 3);
}