// Flat round stone slab with a ring of tally marks and glowing central dot. params: radius (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 0.5;
  const slab = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.03, 0.06, 18), ctx.mat(p.color || '#8a8d96'));
  slab.position.y = 0.02;
  g.add(slab);
  const dark = ctx.mat('#2a2c34');
  const n = 40;
  const marks = new THREE.InstancedMesh(new THREE.BoxGeometry(0.012, 0.01, 0.06), dark, n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const unfinished = i >= n - 4;
    d.position.set(Math.cos(a) * r * 0.75, unfinished ? 0.052 : 0.055, Math.sin(a) * r * 0.75);
    d.rotation.set(0, -a, 0);
    d.scale.set(1, unfinished ? 0.4 : 1, unfinished ? 0.5 : ctx.range(0.8, 1.3));
    d.updateMatrix();
    marks.setMatrixAt(i, d.matrix);
  }
  g.add(marks);
  const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.012, 8), ctx.mat('#ffcf8a', { emissive: '#ffb050', emissiveIntensity: 1.5 }));
  dot.position.y = 0.056;
  g.add(dot);
  return g;
}
