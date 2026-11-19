// Line of alternating boot prints running south (+Z) from origin. params: length (m), stride (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const len = p.length || 25;
  const stride = p.stride || 0.75;
  const n = Math.floor(len / stride);
  const geo = new THREE.BoxGeometry(0.14, 0.02, 0.32);
  const mesh = new THREE.InstancedMesh(geo, ctx.mat(p.color || '#4a4c58'), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const side = i % 2 ? 1 : -1;
    d.position.set(side * 0.13 + ctx.range(-0.03, 0.03), 0.012, 0.5 + i * stride);
    d.rotation.set(0, ctx.range(-0.12, 0.12) + side * 0.05, 0);
    d.updateMatrix();
    mesh.setMatrixAt(i, d.matrix);
  }
  g.add(mesh);
  return g;
}
