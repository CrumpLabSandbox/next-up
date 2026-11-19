// Instanced flat pale dust-drift mounds scattered around the entity, avoiding a trail line and a clear spot; params: count, minR, maxR, lineZ (local z of footprint line), clear [x,z]
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 40, r0 = p.minR || 8, r1 = p.maxR || 30;
  const lz = p.lineZ === undefined ? -5 : p.lineZ;
  const cl = p.clear || [0.5, -0.5];
  const geo = new THREE.SphereGeometry(0.5, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2);
  const im = new THREE.InstancedMesh(geo, ctx.mat('#a7aab6'), n);
  const d = new THREE.Object3D();
  let i = 0, guard = 0;
  while (i < n && guard++ < 3000) {
    const a = ctx.range(0, 6.283), r = ctx.range(r0, r1);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.abs(z - lz) < 1.8) continue;
    if (Math.hypot(x - cl[0], z - cl[1]) < 2) continue;
    const len = ctx.range(0.5, 1.5);
    d.position.set(x, 0, z);
    d.rotation.set(0, ctx.range(0, 3.14), 0);
    d.scale.set(len, 0.1, len * ctx.range(0.4, 0.7));
    d.updateMatrix();
    im.setMatrixAt(i++, d.matrix);
  }
  im.count = i;
  g.add(im);
  return g;
}