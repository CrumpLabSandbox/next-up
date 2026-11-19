// Thin flat glowing ribbon along +X. params: length (m), width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const len = p.length || 20, w = p.width || 0.1;
  const m = new THREE.Mesh(new THREE.BoxGeometry(len, 0.01, w), ctx.mat(p.color || '#a8d4ff', { emissive: p.color || '#8ec5ff', emissiveIntensity: 2 }));
  m.name = 'rib';
  m.position.set(len / 2, 0.015, 0);
  g.add(m);
  const halo = new THREE.Mesh(new THREE.BoxGeometry(len, 0.005, w * 4), ctx.mat('#6fa8ff', { transparent: true, opacity: 0.25, emissive: '#6fa8ff', emissiveIntensity: 1 }));
  halo.position.set(len / 2, 0.01, 0);
  g.add(halo);
  return g;
}
export function update(obj, t) {
  const m = obj.getObjectByName('rib');
  if (m) m.material.emissiveIntensity = 1.8 + 0.8 * Math.sin(t * 2.2);
}
