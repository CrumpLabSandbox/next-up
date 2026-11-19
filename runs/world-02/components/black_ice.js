// Glassy dark-blue ice sheet along +Z with distance-graded pale plates, dark crack lines and twinkling glints; params: width, length, plates
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 120, L = p.length || 80;
  const geo = new THREE.PlaneGeometry(W, L);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0.03, L / 2);
  g.add(new THREE.Mesh(geo, ctx.mat('#1c2542', { emissive: '#2a3d6a', emissiveIntensity: 0.55 })));
  const n = p.plates || 170;
  const bands = [
    { col: '#6f7fa8', em: 0.15, z0: 0.8, z1: 12, sc: 0.7 },
    { col: '#8a96b6', em: 0.25, z0: 12, z1: 22, sc: 1 },
    { col: '#a9b1c4', em: 0.35, z0: 22, z1: L - 1, sc: 1 }
  ];
  const d = new THREE.Object3D();
  bands.forEach((b, k) => {
    const cnt = Math.floor(n / 3);
    const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 0.02, 6), ctx.mat(b.col, { emissive: b.col, emissiveIntensity: b.em }), cnt);
    for (let i = 0; i < cnt; i++) {
      d.position.set(ctx.range(-W / 2.2, W / 2.2), 0.05 + k * 0.004, ctx.range(b.z0, b.z1));
      const s = ctx.range(1.2, 4) * b.sc;
      d.scale.set(s, 1, s * ctx.range(0.6, 1.2));
      d.rotation.y = ctx.range(0, 6);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    g.add(im);
  });
  const cn = 150;
  const cr = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.01, 1), ctx.mat('#0b1226', { emissive: '#0b1226', emissiveIntensity: 0.2 }), cn);
  for (let i = 0; i < cn; i++) {
    d.position.set(ctx.range(-W / 3, W / 3), 0.07, ctx.range(1, L - 2));
    d.scale.set(1, 1, ctx.range(2, 6));
    d.rotation.set(0, ctx.range(0, 6.28), 0);
    d.updateMatrix();
    cr.setMatrixAt(i, d.matrix);
  }
  g.add(cr);
  const gn = 120;
  const gl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.04, 0), new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false }), gn);
  for (let i = 0; i < gn; i++) {
    d.position.set(ctx.range(-25, 25), 0.08, ctx.range(1, 50));
    d.scale.setScalar(ctx.range(0.6, 1.5));
    d.rotation.set(0, 0, 0);
    d.updateMatrix();
    gl.setMatrixAt(i, d.matrix);
  }
  g.add(gl);
  g.userData.gl = gl;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.userData.gl.material.color.setScalar(0.75 + 0.25 * Math.sin(t * 1.7));
}
