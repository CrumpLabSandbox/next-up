// Instanced pale-blue pebbles and frost tufts scattered in a ring around the pool edge and around a landing; params: count, poolRadius, landingZ
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 60, R = p.poolRadius || 6, lz = p.landingZ === undefined ? -5.6 : p.landingZ;
  const cols = ['#6f7fa8', '#8a96b6', '#a9b1c4'];
  const d = new THREE.Object3D();
  for (let k = 0; k < 3; k++) {
    const cnt = Math.floor(n / 3);
    const im = new THREE.InstancedMesh(k === 2 ? new THREE.ConeGeometry(0.5, 1, 4) : new THREE.IcosahedronGeometry(0.5, 0), ctx.mat(cols[k], { emissive: cols[k], emissiveIntensity: 0.3 }), cnt);
    for (let i = 0; i < cnt; i++) {
      let x, z;
      if (ctx.rng() < 0.65) { const a = ctx.range(0, 6.28), r = R + 0.5 + ctx.rng() * 1.3; x = Math.cos(a) * r; z = Math.sin(a) * r; }
      else { const a = ctx.range(0, 6.28), r = 2.4 + ctx.rng() * 0.8; x = Math.cos(a) * r; z = lz + Math.sin(a) * r; }
      if (Math.abs(x) > 7.7 || z > 7.7 || z < -7.7) { x *= 0.6; z *= 0.6; }
      const s = ctx.range(0.1, 0.3);
      d.position.set(x, s * 0.3, z);
      d.scale.set(s, s * (k === 2 ? 1.2 : 0.7), s * ctx.range(0.8, 1.3));
      d.rotation.set(0, ctx.range(0, 6), 0);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    g.add(im);
  }
  return g;
}
