// Pale ice shards scattered along +Z line plus slow upward star-reflection glints; params: shards, glints, length, spread
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.shards || 60, L = p.length || 28, S = p.spread || 4, gn = p.glints || 15;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.5 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const s = ctx.range(0.1, 0.3) * 0.5;
    d.position.set(ctx.range(-S, S) * (0.4 + ctx.rng()), s * 0.5 + 0.06, ctx.range(1, L));
    d.scale.set(s, s * ctx.range(1, 2), s);
    d.rotation.set(ctx.range(-0.3, 0.3), ctx.range(0, 6), ctx.range(-0.3, 0.3));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  const gm = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.05, 0), new THREE.MeshBasicMaterial({ color: '#e8f4ff', fog: false }), gn);
  const seeds = [];
  for (let i = 0; i < gn; i++) seeds.push([ctx.range(-S, S), ctx.rng(), ctx.range(1, L), ctx.range(0.05, 0.15)]);
  g.add(gm);
  g.userData = { gm: gm, seeds: seeds, d: new THREE.Object3D() };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[1] + t * q[3] / 2.5) % 1;
    u.d.position.set(q[0] + Math.sin(t * 0.3 + i) * 0.2, 0.1 + f * 2.5, q[2]);
    u.d.scale.setScalar(Math.max(0.05, Math.sin(Math.PI * f)));
    u.d.updateMatrix();
    u.gm.setMatrixAt(i, u.d.matrix);
  }
  u.gm.instanceMatrix.needsUpdate = true;
}
