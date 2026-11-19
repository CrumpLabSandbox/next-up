// Round black glass disc, tilted by params.tilt (rad), showing a tiny pale spire, five seated figures and a sixth kneeling one. params: radius (m), tilt
export function build(THREE, p, ctx) {
  const root = new THREE.Group();
  const g = new THREE.Group();
  root.add(g);
  g.rotation.x = p.tilt || 0;
  const R = p.radius || 0.125;
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(R * 1.08, R * 1.08, 0.015, 20), ctx.mat('#4a4e58'));
  rim.position.y = 0.0075; g.add(rim);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.02, 20), ctx.mat('#05060c', { emissive: '#0c1230', emissiveIntensity: 0.8 }));
  disc.position.y = 0.01; g.add(disc);
  const bright = ctx.mat('#e8f0ff', { emissive: '#cfe0ff', emissiveIntensity: 1.6 });
  const sp = new THREE.Mesh(new THREE.ConeGeometry(R * 0.06, R * 0.55, 5), bright);
  sp.rotation.x = -Math.PI / 2; sp.position.set(0, 0.024, R * 0.1); g.add(sp);
  const fm = ctx.mat('#9aa6c8', { emissive: '#8090c0', emissiveIntensity: 1.0 });
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2;
    const f = new THREE.Mesh(new THREE.ConeGeometry(R * 0.035, R * 0.09, 5), fm);
    f.rotation.x = -Math.PI / 2;
    f.position.set(Math.cos(a) * R * 0.2, 0.024, R * 0.38 + Math.sin(a) * R * 0.1); g.add(f);
  }
  const six = new THREE.Mesh(new THREE.ConeGeometry(R * 0.03, R * 0.07, 5), ctx.mat('#ffffff', { emissive: '#ffe8b0', emissiveIntensity: 2.2 }));
  six.rotation.x = -Math.PI / 2; six.position.set(R * 0.05, 0.025, R * 0.5); g.add(six);
  const sm = ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 2.5 });
  for (let i = 0; i < 12; i++) {
    const a = ctx.range(0, 6.28), d = ctx.range(0.1, 0.85) * R;
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.003, 0), sm);
    s.position.set(Math.cos(a) * d, 0.022, Math.sin(a) * d); g.add(s);
  }
  root.userData.m = sm;
  return root;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 2 + 1.2 * Math.sin(t * 2.3);
}
