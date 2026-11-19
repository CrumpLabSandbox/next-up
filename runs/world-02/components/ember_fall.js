// Slow golden embers falling like snow through a cylinder, shrinking and fading near the ground; params: count, radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 120, R = p.radius || 6, H = p.height || 9;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.05, 0), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(0, 6.28), Math.sqrt(ctx.rng()) * R, ctx.rng(), ctx.range(0.03, 0.07), ctx.range(0, 6)]);
  g.add(im);
  g.userData = { im: im, seeds: seeds, d: new THREE.Object3D(), H: H };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[2] + t * q[3]) % 1;
    const y = u.H * (1 - f);
    u.d.position.set(Math.cos(q[0]) * q[1] + Math.sin(t * 0.5 + q[4]) * 0.3, y, Math.sin(q[0]) * q[1] + Math.cos(t * 0.4 + q[4]) * 0.3);
    const s = Math.min(1, f * 6) * Math.min(1, (1 - f) * 5);
    u.d.scale.setScalar(Math.max(0.02, s) * (0.8 + 0.4 * Math.sin(t * 3 + q[4])));
    u.d.rotation.set(t + q[4], t * 0.6, 0);
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
