// Tall thin tapering faintly luminous stone shaft. params: height (m), width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 12, w = p.width || 0.8;
  const c = p.color || '#d8dcee';
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.08, w / 2, h, 5), ctx.mat(c, { emissive: c, emissiveIntensity: 0.6 }));
  shaft.position.y = h / 2;
  g.add(shaft);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.7, w * 1.1, 0.5, 6), ctx.mat('#9ea3b8', { emissive: '#9ea3b8', emissiveIntensity: 0.3 }));
  base.position.y = 0.25;
  g.add(base);
  return g;
}
export function update(obj, t) {
  obj.children[0].material.emissiveIntensity = 0.6 + 0.15 * Math.sin(t * 0.8);
}
