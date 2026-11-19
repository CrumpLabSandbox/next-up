// Thin soft-edged low mist disc; params: size (m), color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 10;
  const at = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const c = Math.round(255 * Math.pow(1 - d, 1.2));
    return [c, c, c];
  });
  const m = new THREE.Mesh(new THREE.CircleGeometry(s / 2, 24), new THREE.MeshBasicMaterial({ color: p.color || '#3a4268', alphaMap: at, transparent: true, opacity: p.opacity || 0.12, depthWrite: false, side: THREE.DoubleSide }));
  m.rotation.x = -Math.PI / 2;
  m.name = 'mist';
  g.add(m);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const m = obj.getObjectByName('mist');
  if (m) m.rotation.z = t * 0.02;
}