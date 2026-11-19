// Sparse round pale star discs lying on water, 15-40 m from center, thinning with distance; params: count, near, far
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 200, near = p.near || 15, far = p.far || 40;
  const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.005, 10), new THREE.MeshBasicMaterial({ color: '#cfd8f5', fog: true }), n);
  const d = new THREE.Object3D();
  let placed = 0, tries = 0;
  while (placed < n && tries < 5000) {
    tries++;
    const a = ctx.range(0, 6.283), r = ctx.range(near, far);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (ctx.rng() > 1 - (r - near) / (far - near) * 0.8) continue;
    d.position.set(x, 0, z);
    d.scale.setScalar(ctx.range(0.7, 1.5) * (1 + (r - near) * 0.03));
    d.updateMatrix();
    im.setMatrixAt(placed++, d.matrix);
  }
  d.scale.set(0, 0, 0); d.updateMatrix();
  for (let i = placed; i < n; i++) im.setMatrixAt(i, d.matrix);
  g.add(im);
  g.userData.im = im;
  return g;
}
export function update(obj, t) {
  obj.userData.im.material.color.setScalar(0.8 + 0.2 * Math.sin(t * 1.3));
}
