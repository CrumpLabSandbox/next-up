// Straight line of flat glowing dots running along +Z (south), shrinking to nothing; params: count, spacing, dot (diameter), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 14, sp = p.spacing || 1.6, c = p.color || '#bfffe8', dd = p.dot || 0.1;
  const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(dd / 2, dd / 2, 0.01, 6), ctx.mat(c, { emissive: c, emissiveIntensity: 0.6 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    d.position.set(ctx.range(-0.04, 0.04), 0.03, i * sp);
    d.scale.setScalar(Math.max(0.05, 1 - i / n));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}
