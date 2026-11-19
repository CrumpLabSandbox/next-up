// Small blinking green lantern light floating above water; params: size, color, dark (1 = extinguished)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.25;
  const c = p.color || '#5dff8a';
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), ctx.mat(c, { emissive: c, emissiveIntensity: 3 }));
  const halo = new THREE.Mesh(new THREE.IcosahedronGeometry(s * 3, 1), ctx.mat(c, { emissive: c, emissiveIntensity: 1, transparent: true, opacity: 0.18 }));
  if (p.dark) { g.visible = false; }
  g.add(core);
  g.add(halo);
  return g;
}
export function update(obj, t, dt, p) {
  if (p.dark) { obj.visible = false; return; }
  obj.visible = true;
  const ph = (t % 3.0);
  const on = (ph < 0.3 || (ph > 0.6 && ph < 0.9)) ? 1 : 0.15;
  obj.children[0].material.emissiveIntensity = 3 * on;
  obj.children[1].material.opacity = 0.18 * on;
  obj.position.y = (obj.userData.y0 === undefined ? (obj.userData.y0 = obj.position.y) : obj.userData.y0) + 0.05 * Math.sin(t * 0.8);
}
