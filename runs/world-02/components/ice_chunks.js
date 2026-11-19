// Loose clusters of 3-5 pale ice chunks (0.4 m) scattered over a rectangle; params: clusters, spread, spreadZ
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const C = p.clusters || 9, SX = p.spread || 14, SZ = p.spreadZ || 16;
  const mat = ctx.mat('#8f98ad', { emissive: '#8f98ad', emissiveIntensity: 0.2 });
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), mat, C * 5);
  const d = new THREE.Object3D();
  let k = 0;
  for (let c = 0; c < C; c++) {
    const cx = ctx.range(-SX, SX), cz = ctx.range(-SZ, SZ), m = 3 + Math.floor(ctx.rng() * 3);
    for (let i = 0; i < 5; i++) {
      if (i < m) {
        const s = ctx.range(0.25, 0.45);
        d.position.set(cx + ctx.range(-0.9, 0.9), 0.08, cz + ctx.range(-0.9, 0.9));
        d.scale.set(s, s * ctx.range(0.5, 0.9), s * ctx.range(0.8, 1.2));
        d.rotation.set(ctx.range(-0.4, 0.4), ctx.range(0, 6), ctx.range(-0.4, 0.4));
      } else d.scale.setScalar(0.0001);
      d.updateMatrix();
      im.setMatrixAt(k++, d.matrix);
    }
  }
  g.add(im);
  return g;
}
