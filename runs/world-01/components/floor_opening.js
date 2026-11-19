// Round black opening in a floor with rim, rotated-aside pale lid, rising motes, and a ladder of silver-green lights descending. params: radius (m), depth (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.75, D = p.depth || 6;
  const hole = new THREE.Mesh(new THREE.CircleGeometry(R, 24), ctx.mat('#020308'));
  hole.rotation.x = -Math.PI / 2; hole.position.y = 0.02; g.add(hole);
  const rim = new THREE.Mesh(new THREE.RingGeometry(R, R + 0.07, 24), ctx.mat('#dfe8ff', { emissive: '#b8ffd0', emissiveIntensity: 1.2, side: THREE.DoubleSide }));
  rim.rotation.x = -Math.PI / 2; rim.position.y = 0.03; g.add(rim);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.25, R + 0.25, 0.08, 20, 1, false, 0, Math.PI * 0.55), ctx.mat('#c9d2e6', { emissive: '#8a9cc0', emissiveIntensity: 0.5 }));
  lid.position.set(R * 0.5, 0.02, 0.2); lid.rotation.y = 0.9; g.add(lid);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, D, 16, 1, true), ctx.mat('#10131f', { side: THREE.BackSide }));
  wall.position.y = -D / 2; g.add(wall);
  const lm = ctx.mat('#b8ffd0', { emissive: '#8affc0', emissiveIntensity: 2.2 });
  for (let i = 0; i < 6; i++) {
    const s = 0.06 * (1 - i * 0.12);
    const l = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), lm);
    l.position.set(-R * 0.7 + i * R * 0.14, 0.05, R * 0.2 - i * R * 0.1);
    g.add(l);
  }
  for (let i = 0; i < 6; i++) {
    const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.06, 0), lm);
    l.position.set(-R + 0.1, -0.5 - i, 0); g.add(l);
  }
  const n = 24;
  const motes = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.02, 0), ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 2 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.28), r = ctx.range(0, R * 0.8);
    d.position.set(Math.cos(a) * r, ctx.range(0, 1.5), Math.sin(a) * r);
    d.updateMatrix(); motes.setMatrixAt(i, d.matrix);
  }
  g.add(motes);
  g.userData.motes = motes;
  return g;
}
export function update(obj, t) {
  obj.userData.motes.position.y = (t * 0.25) % 1;
}