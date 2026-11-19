// Instanced pale motes slowly rising; params: count, radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 80, R = p.radius || 15, H = p.height || 6;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.03, 0), new THREE.MeshBasicMaterial({ color: '#dfe4ff', fog: false }), n);
  const d = new THREE.Object3D();
  const seeds = [];
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.28), r = R * Math.sqrt(ctx.rng());
    seeds.push([Math.cos(a) * r, ctx.range(0, H), Math.sin(a) * r, ctx.range(0.05, 0.2), ctx.range(0, 6)]);
    d.position.set(seeds[i][0], seeds[i][1], seeds[i][2]);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  im.userData.seeds = seeds;
  im.userData.dummy = d;
  im.name = 'motes';
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const im = obj.getObjectByName('motes');
  if (!im) return;
  const H = p.height || 6;
  const d = im.userData.dummy;
  const s = im.userData.seeds;
  for (let i = 0; i < s.length; i++) {
    const q = s[i];
    const y = (q[1] + t * q[3]) % H;
    d.position.set(q[0] + Math.sin(t * 0.3 + q[4]) * 0.5, y, q[2] + Math.cos(t * 0.25 + q[4]) * 0.5);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  im.instanceMatrix.needsUpdate = true;
}
