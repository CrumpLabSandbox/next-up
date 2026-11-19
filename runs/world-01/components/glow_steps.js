// Stair of small glowing silver treads descending along local +Z. params: count, run (m), drop (m), width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 8, run = p.run || 0.5, drop = p.drop || 0.4, w = p.width || 0.1;
  const c = p.color || '#dfe8ff';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 1.8 });
  g.userData.m = m;
  for (let i = 0; i < n; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.03, run * 0.8), m);
    b.position.set(0, -i * drop, i * run);
    g.add(b);
  }
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.5 + 0.6 * Math.sin(t * 1.5);
}