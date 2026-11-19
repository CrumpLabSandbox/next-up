// Small floating amber flame with point light. params: size (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.15;
  const c = p.color || '#ffa83a';
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), ctx.mat(c, { emissive: c, emissiveIntensity: 2.5 }));
  core.scale.set(1, 1.5, 1);
  g.add(core);
  const halo = new THREE.Mesh(new THREE.IcosahedronGeometry(s * 2.2, 1), ctx.mat(c, { emissive: c, emissiveIntensity: 1, transparent: true, opacity: 0.2 }));
  g.add(halo);
  const light = new THREE.PointLight(c, 3, 30, 1.5);
  g.add(light);
  return g;
}
export function update(obj, t) {
  const f = 1 + 0.12 * Math.sin(t * 9) + 0.08 * Math.sin(t * 15.7);
  obj.children[0].scale.set(f, 1.5 * f, f);
  obj.children[2].intensity = 3 * f;
}
