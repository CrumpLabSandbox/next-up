// Small smooth round hollow with faintly glowing silver rim, flush to a surface. params: radius (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 0.03;
  const c = p.color || '#cfe0ff';
  const pit = new THREE.Mesh(new THREE.CircleGeometry(r, 14), ctx.mat('#2a2c38'));
  pit.rotation.x = -Math.PI / 2;
  pit.position.y = 0.002;
  g.add(pit);
  const rim = new THREE.Mesh(new THREE.RingGeometry(r, r * 1.35, 14), ctx.mat(c, { emissive: c, emissiveIntensity: 1.5, side: THREE.DoubleSide }));
  rim.rotation.x = -Math.PI / 2;
  rim.position.y = 0.004;
  g.add(rim);
  return g;
}
export function update(obj, t) {
  obj.children[1].material.emissiveIntensity = 1.3 + 0.7 * Math.sin(t * 1.8);
}
