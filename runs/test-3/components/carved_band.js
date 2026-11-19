// Elliptical band of tiny carved spiral/dot symbols on the ground-level base of a stone. params: rx, rz, count
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const rx = p.rx || 0.3, rz = p.rz || 0.23, n = p.count || 22;
  const dark = ctx.mat('#3b3d47');
  const groove = new THREE.Mesh(new THREE.TorusGeometry(1, 0.008, 4, 28), dark);
  groove.rotation.x = Math.PI / 2;
  groove.scale.set(rx, rz, 1);
  groove.position.y = 0.04;
  g.add(groove);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const px = Math.cos(a) * rx * 1.02, pz = Math.sin(a) * rz * 1.02;
    let m;
    if (i % 3 === 0) {
      m = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 4, 8), dark);
    } else {
      m = new THREE.Mesh(new THREE.SphereGeometry(0.01, 5, 4), dark);
    }
    m.position.set(px, 0.075 + ctx.range(-0.005, 0.005), pz);
    m.lookAt(px * 3, 0.075, pz * 3);
    g.add(m);
  }
  return g;
}
