// Slender pitted dark iron tower with a pale bell-shaped cup at top that glows and shimmers. params: height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 6;
  const iron = ctx.mat(p.color || '#2a2c33');
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 0.4, 6), iron);
  base.position.y = 0.2; g.add(base);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.28, H - 0.8, 6), iron);
  shaft.position.y = 0.4 + (H - 0.8) / 2; g.add(shaft);
  for (let i = 0; i < 4; i++) {
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.2 - i * 0.02, 0.2 - i * 0.02, 0.08, 6), ctx.mat('#3b3e47'));
    r.position.y = 1 + i * 1.3; g.add(r);
  }
  const frost = ctx.mat('#c8d6e6', { emissive: '#9fb4d0', emissiveIntensity: 0.25 });
  for (let i = 0; i < 14; i++) {
    const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.05, 0), frost);
    const y = ctx.range(0.6, H - 1), a = ctx.range(0, 6.28), r = 0.28 - (y / H) * 0.17;
    f.position.set(Math.cos(a) * r, y, Math.sin(a) * r); g.add(f);
  }
  const bellMat = ctx.mat('#e6efff', { emissive: '#bcd4ff', emissiveIntensity: 0.8 });
  const bell = new THREE.Group();
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.55, 0.6, 8, 1, true), ctx.mat('#e6efff', { emissive: '#bcd4ff', emissiveIntensity: 0.8, side: THREE.DoubleSide }));
  cup.position.y = -0.3; bell.add(cup);
  const clap = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), bellMat);
  clap.position.y = -0.6; bell.add(clap);
  bell.position.y = H; g.add(bell);
  g.userData.bell = bell; g.userData.m = bellMat;
  return g;
}
export function update(obj, t) {
  obj.userData.bell.rotation.z = Math.sin(t * 2.2) * 0.05;
  obj.userData.m.emissiveIntensity = 0.8 + 0.6 * Math.max(0, Math.sin(t * 5)) ;
}
