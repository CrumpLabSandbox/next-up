// Small pale emissive crystals scattered along -Z line; params: count, length, spread
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 40, L = p.length || 14, S = p.spread || 0.6;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.5 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const s = ctx.range(0.05, 0.15) * 0.5;
    d.position.set(ctx.range(-S, S) * (0.3 + ctx.rng()), s * 1.2 + 0.06, -Math.pow(ctx.rng(), 1.3) * L);
    d.scale.set(s, s * ctx.range(1.5, 2.5), s);
    d.rotation.set(ctx.range(-0.3, 0.3), ctx.range(0, 6), ctx.range(-0.3, 0.3));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}
