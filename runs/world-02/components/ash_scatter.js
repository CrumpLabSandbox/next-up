// Static instanced ash flecks and softened dark pebbles in a corridor along the avenue; params: flecks, pebbles, zNear, zFar, halfWidth
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const nf = p.flecks || 150, np = p.pebbles || 14;
  const z0 = p.zNear === undefined ? -2 : p.zNear, z1 = p.zFar === undefined ? -42 : p.zFar, hw = p.halfWidth || 6;
  const d = new THREE.Object3D();
  const fm = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.8 }), nf);
  for (let i = 0; i < nf; i++) {
    const t = ctx.rng();
    d.position.set(ctx.range(-hw, hw) * (0.5 + ctx.rng()), ctx.range(0.03, 1.5), z0 + (z1 - z0) * t);
    const s = ctx.range(0.03, 0.06);
    d.scale.set(s, s, s);
    d.updateMatrix();
    fm.setMatrixAt(i, d.matrix);
  }
  g.add(fm);
  const pm = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), ctx.mat('#4a5068', { emissive: '#2a3048', emissiveIntensity: 0.25 }), np);
  for (let i = 0; i < np; i++) {
    const t = Math.pow(ctx.rng(), 1.6);
    const side = ctx.rng() < 0.5 ? -1 : 1;
    d.position.set(side * ctx.range(1, hw + 2), 0.02, z0 + (z1 - z0) * t);
    const s = ctx.range(0.15, 0.3);
    d.scale.set(s, s * 0.6, s * ctx.range(0.8, 1.2));
    d.rotation.y = ctx.range(0, 6);
    d.updateMatrix();
    pm.setMatrixAt(i, d.matrix);
  }
  g.add(pm);
  return g;
}
