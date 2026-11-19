// Band of shallow relief carvings on a round chamber wall: five hooded figures walking toward a spire, then a blank panel. params: radius (m), y (band center), height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = (p.radius || 4.2), H = p.height || 1, y0 = p.y || 1.5;
  const band = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 32, 1, true, 0.2, 4.3), ctx.mat('#9aa0b6', { emissive: '#4a506a', emissiveIntensity: 0.5, side: THREE.BackSide }));
  band.position.y = y0;
  g.add(band);
  const blank = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.01, R - 0.01, H, 16, 1, true, 4.5, 1.5), ctx.mat('#c8cde0', { emissive: '#7a809a', emissiveIntensity: 0.5, side: THREE.BackSide }));
  blank.position.y = y0;
  g.add(blank);
  const relief = ctx.mat('#5c6176', { emissive: '#2c3044', emissiveIntensity: 0.4 });
  const place = (m, a, r, y) => {
    m.position.set(Math.sin(a) * r, y, Math.cos(a) * r);
    m.rotation.y = Math.atan2(-Math.sin(a), -Math.cos(a));
    g.add(m);
  };
  for (let i = 0; i < 5; i++) {
    const a = 0.6 + i * 0.62;
    const f = new THREE.Group();
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.62, 6), relief);
    body.position.y = 0.31; body.scale.z = 0.25;
    const hood = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 6), relief);
    hood.position.y = 0.7; hood.scale.z = 0.4;
    f.add(body, hood);
    place(f, a, R - 0.04, y0 - H * 0.42);
  }
  const sp = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.85, 5), ctx.mat('#d8dcee', { emissive: '#b8bed8', emissiveIntensity: 0.6 }));
  sp.scale.z = 0.3;
  place(sp, 4.1, R - 0.04, y0);
  return g;
}
