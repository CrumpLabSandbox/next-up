// Small warm motes drifting upward from a point; params: count, size, height, spread, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 20, s = p.size || 0.04, c = p.color || '#ffb347';
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(s, 0), new THREE.MeshBasicMaterial({ color: c, fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(-0.6, 0.6), ctx.range(0, 1), ctx.range(-0.6, 0.6), ctx.range(0.1, 0.3)]);
  g.userData = { seeds: seeds, im: im, H: p.height || 3, d: new THREE.Object3D() };
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData, H = u.H;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const y = ((q[1] * H + t * q[3]) % H);
    const k = 1 - y / H;
    u.d.position.set(q[0] + Math.sin(t * 0.5 + i) * 0.3, y, q[2] + Math.cos(t * 0.4 + i) * 0.3);
    u.d.scale.setScalar(Math.max(0.05, k));
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
