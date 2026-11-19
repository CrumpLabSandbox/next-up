// Instanced pale snow flakes falling slowly in a box around local origin; params: count, radius, height, size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 60, R = p.radius || 7, H = p.height || 5, s = p.size || 0.03;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(s, 0), new THREE.MeshBasicMaterial({ color: '#eaf4ff', fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(-R, R), ctx.rng(), ctx.range(-R, R), ctx.range(0.15, 0.35), ctx.range(0, 6)]);
  g.add(im);
  g.userData = { im: im, seeds: seeds, d: new THREE.Object3D(), H: H };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = 1 - ((q[1] + t * q[3] / u.H) % 1);
    u.d.position.set(q[0] + Math.sin(t * 0.4 + q[4]) * 0.3, f * u.H, q[2] + Math.cos(t * 0.3 + q[4]) * 0.3);
    u.d.rotation.set(t + q[4], t * 0.7, 0);
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
