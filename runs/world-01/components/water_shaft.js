// Cylindrical shaft of glassy black water with drifting stars and glowing spiral steps. Origin at the shaft floor. params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 3, H = p.height || 15;
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 20, 1, true), ctx.mat('#0b1224', { emissive: '#101a38', emissiveIntensity: 0.8, transparent: true, opacity: 0.8, side: THREE.BackSide }));
  wall.position.y = H / 2;
  g.add(wall);
  const n = 60;
  const sp = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.05, 0), ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 2 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.28);
    d.position.set(Math.cos(a) * (R - 0.08), ctx.range(0, H), Math.sin(a) * (R - 0.08));
    d.updateMatrix();
    sp.setMatrixAt(i, d.matrix);
  }
  const sg = new THREE.Group();
  sg.add(sp);
  g.add(sg);
  const c = '#dfe8ff';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 1.8 });
  const steps = 50;
  for (let i = 0; i < steps; i++) {
    const a = i * 0.42, y = H - 0.2 - i * (H - 0.2) / steps;
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.45), m);
    b.position.set(Math.cos(a) * (R - 0.5), y, Math.sin(a) * (R - 0.5));
    b.rotation.y = -a + Math.PI / 2;
    g.add(b);
  }
  return g;
}
export function update(obj, t) {
  obj.children[1].position.y = -((t * 0.4) % 3);
  obj.children[1].rotation.y = t * 0.1;
}