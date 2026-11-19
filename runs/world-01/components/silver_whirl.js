// Circular glowing silver patch on water with slowly rotating rings and star specks, like a drain; spiral glowing steps inside. params: radius (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 3;
  const c = p.color || '#dfe8ff';
  const disc = new THREE.Mesh(new THREE.CircleGeometry(R * 0.75, 24), ctx.mat(c, { emissive: c, emissiveIntensity: 1.2, transparent: true, opacity: 0.85 }));
  disc.rotation.x = -Math.PI / 2; disc.position.y = 0.03;
  g.add(disc);
  const spin = new THREE.Group();
  for (let k = 0; k < 4; k++) {
    const r0 = R * (0.3 + k * 0.22);
    const ring = new THREE.Mesh(new THREE.RingGeometry(r0, r0 + 0.05, 32, 1, 0, Math.PI * 1.5), ctx.mat(c, { emissive: c, emissiveIntensity: 1.6, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.rotation.z = k * 1.3;
    ring.position.y = 0.04 + k * 0.002;
    ring.userData.k = k;
    spin.add(ring);
  }
  g.add(spin);
  const n = 40;
  const specks = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.05, 0), ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 2 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.28), r = R * ctx.range(0.7, 1.5);
    d.position.set(Math.cos(a) * r, 0.03, Math.sin(a) * r);
    d.updateMatrix();
    specks.setMatrixAt(i, d.matrix);
  }
  const sg = new THREE.Group(); sg.add(specks);
  g.add(sg);
  const steps = new THREE.Group();
  for (let i = 0; i < 12; i++) {
    const a = i * 0.6, r = R * 0.5 * (1 - i / 14);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.2), ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 1.8 }));
    b.position.set(Math.cos(a) * r, 0.05 - i * 0.004, Math.sin(a) * r);
    b.rotation.y = -a;
    steps.add(b);
  }
  g.add(steps);
  const light = new THREE.PointLight(c, 1.2, 14, 1.5);
  light.position.y = 0.6;
  g.add(light);
  return g;
}
export function update(obj, t) {
  obj.children[1].children.forEach(r => { r.rotation.z += 0; });
  obj.children[1].rotation.y = t * 0.3;
  obj.children[2].rotation.y = t * 0.12;
  obj.children[0].material.emissiveIntensity = 1.1 + 0.3 * Math.sin(t * 1.2);
}