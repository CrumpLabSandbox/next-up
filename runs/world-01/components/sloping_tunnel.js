// Narrow dark polished stone passage with low arched roof, silver center line, glowing door frame at start. Runs along local +Z and slopes downward. params: length, width, height, slope (rad)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 20, W = p.width || 1.5, H = p.height || 2.2, s = p.slope || 0.075;
  const t = new THREE.Group();
  const floor = new THREE.Mesh(new THREE.BoxGeometry(W, 0.1, L), ctx.mat('#232736'));
  floor.position.set(0, -0.05, L / 2); t.add(floor);
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(W / 2, W / 2, L, 14, 1, true), ctx.mat('#171a26', { side: THREE.BackSide }));
  tube.rotation.x = Math.PI / 2; tube.scale.x = 1; tube.scale.z = H / W * 1.0;
  tube.position.set(0, H * 0.45, L / 2); t.add(tube);
  const sm = ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1.8 });
  const line = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.02, L), sm);
  line.position.set(0, 0.01, L / 2); t.add(line);
  const fw = 0.5 + 0.02;
  [-1, 1].forEach(k => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.03, H, 0.03), sm);
    b.position.set(k * fw, H / 2, 0); t.add(b);
  });
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.06, 0.03, 0.03), sm);
  top.position.set(0, H, 0); t.add(top);
  t.rotation.x = s;
  g.add(t);
  g.userData.m = sm;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.5 + 0.6 * Math.sin(t * 1.5);
}