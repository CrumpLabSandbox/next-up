// Clear glass bead with a turning flame inside. params: size (m), color, flame (flame color)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.012;
  const c = p.color || '#dfe8ff';
  const f = p.flame || '#e6f0ff';
  const bead = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), ctx.mat('#e8f2ff', { emissive: c, emissiveIntensity: 0.6, transparent: true, opacity: 0.6 }));
  g.add(bead);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(s * 0.4, s * 1.1, 5), ctx.mat(p.flame || '#ffffff', { emissive: f, emissiveIntensity: 3 }));
  g.add(flame);
  const halo = new THREE.Mesh(new THREE.IcosahedronGeometry(s * 2.5, 1), ctx.mat(c, { emissive: c, emissiveIntensity: 1, transparent: true, opacity: 0.15 }));
  g.add(halo);
  return g;
}
export function update(obj, t) {
  obj.children[1].rotation.y = t * 2;
  obj.children[1].scale.y = 1 + 0.15 * Math.sin(t * 6);
}
