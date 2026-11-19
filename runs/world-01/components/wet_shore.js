// Strip of dark damp sand with tiny pale shells. params: width (m, X), length (m, Z), shells
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const w = p.width || 4, L = p.length || 60, n = p.shells || 220;
  const sand = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, L), ctx.mat('#2a2c3a', { roughness: 0.3 }));
  sand.position.y = 0.005;
  g.add(sand);
  const mesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.03, 0), ctx.mat('#e6e2d8', { emissive: '#8a8a90', emissiveIntensity: 0.3 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    d.position.set(ctx.range(-w / 2, w / 2), 0.03, ctx.range(-L / 2, L / 2));
    const s = ctx.range(0.6, 1.4);
    d.scale.set(s, s * 0.5, s);
    d.rotation.set(0, ctx.range(0, 6.28), 0);
    d.updateMatrix();
    mesh.setMatrixAt(i, d.matrix);
  }
  g.add(mesh);
  return g;
}
