// Wavering line of dark pebbles running along -Z. params: length (m), width (m), count, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const len = p.length || 30, w = p.width || 0.5, n = p.count || 140;
  const geo = new THREE.IcosahedronGeometry(0.06, 0);
  const mesh = new THREE.InstancedMesh(geo, ctx.mat(p.color || '#16161c'), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const z = -(i / (n - 1)) * len;
    const x = (ctx.noise2(0.3, z * 0.15) - 0.5) * 1.2 + ctx.range(-w / 2, w / 2);
    d.position.set(x, 0.02, z + ctx.range(-0.1, 0.1));
    const s = ctx.range(0.6, 1.4);
    d.scale.set(s, s * ctx.range(0.6, 0.9), s);
    d.rotation.set(ctx.range(0, 3), ctx.range(0, 3), 0);
    d.updateMatrix();
    mesh.setMatrixAt(i, d.matrix);
  }
  g.add(mesh);
  return g;
}
