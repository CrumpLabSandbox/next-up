// Faint pale-blue flecks drifting slowly near a point; params: count, radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 80, R = p.radius || 5, H = p.height || 2.5;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.03, 0), new THREE.MeshBasicMaterial({ color: '#bfe4ff', fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.283), rr = Math.sqrt(ctx.rng()) * R;
    seeds.push([Math.cos(a) * rr, ctx.range(0, H), Math.sin(a) * rr, ctx.range(0.05, 0.2)]);
  }
  g.userData = { seeds: seeds, im: im, H: H, d: new THREE.Object3D() };
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    u.d.position.set(q[0] + Math.sin(t * 0.3 + i) * 0.4, 0.1 + (q[1] + t * q[3]) % u.H, q[2] + Math.cos(t * 0.25 + i) * 0.4);
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
