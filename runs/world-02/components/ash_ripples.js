// Instanced low ash ripples and small pale stones scattered around the line between two points, thinning with distance; params: x0,z0,x1,z1,ripples,stones,reach
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const x0 = p.x0 === undefined ? 0 : p.x0, z0 = p.z0 === undefined ? -41.6 : p.z0;
  const x1 = p.x1 === undefined ? 35 : p.x1, z1 = p.z1 === undefined ? -41.6 : p.z1;
  const R = p.reach || 12, n = p.ripples || 120, ns = p.stones || 10;
  const d = new THREE.Object3D();
  const cols = ['#7d869b', '#a9b1c4'];
  const geo = new THREE.IcosahedronGeometry(0.5, 0);
  for (let k = 0; k < 2; k++) {
    const count = n / 2;
    const im = new THREE.InstancedMesh(geo, ctx.mat(cols[k], { emissive: cols[k], emissiveIntensity: 0.2 }), count);
    for (let i = 0; i < count; i++) {
      const t = ctx.rng();
      const off = (ctx.rng() < 0.5 ? -1 : 1) * Math.pow(ctx.rng(), 1.5) * R;
      d.position.set(x0 + (x1 - x0) * t, 0.0, z0 + (z1 - z0) * t + off);
      d.scale.set(ctx.range(0.6, 1.5), 0.08, ctx.range(0.25, 0.5));
      d.rotation.y = ctx.range(-0.3, 0.3);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    g.add(im);
  }
  const sm = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), ctx.mat('#6f768a', { emissive: '#3a4263', emissiveIntensity: 0.2 }), ns);
  for (let i = 0; i < ns; i++) {
    const s = ctx.range(0.1, 0.2);
    d.position.set(ctx.range(21, 36), s * 0.2, z0 + ctx.range(-3, 3));
    d.scale.set(s, s * 0.6, s * ctx.range(0.8, 1.2));
    d.rotation.y = ctx.range(0, 6);
    d.updateMatrix();
    sm.setMatrixAt(i, d.matrix);
  }
  g.add(sm);
  return g;
}
