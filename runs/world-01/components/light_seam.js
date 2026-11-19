// Thin glowing ribbon along a polyline on the ground. params: points [[x,z],...] relative, width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const pts = p.points || [[0,0],[0,-10]];
  const w = (p.width || 0.03) / 2;
  const pos = [], idx = [];
  for (let i = 0; i < pts.length; i++) {
    pos.push(pts[i][0] - w, 0, pts[i][1], pts[i][0] + w, 0, pts[i][1]);
    if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const c = p.color || '#e8f0ff';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 1.8, side: THREE.DoubleSide });
  g.add(new THREE.Mesh(geo, m));
  return g;
}
export function update(obj, t) {
  obj.children[0].material.emissiveIntensity = 1.6 + 0.4 * Math.sin(t * 1.5);
}
