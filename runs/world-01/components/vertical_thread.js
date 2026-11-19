// Hair-thin pulsing silver vertical thread. params: height (m), width (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 1, W = p.width || 0.012;
  const m = ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 2 });
  const b = new THREE.Mesh(new THREE.BoxGeometry(W, H, W), m);
  b.position.y = H / 2; g.add(b);
  g.userData.m = m;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.6 + 0.8 * Math.sin(t * 1.6);
}
