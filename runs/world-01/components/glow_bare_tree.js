// Leafless twisted silver-grey tree with a split doorway trunk and green glowing twig tips. params: height (m), color, glow
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 4;
  const bark = ctx.mat(p.color || '#8d929e', { emissive: '#2a2e38', emissiveIntensity: 0.4 });
  const gc = p.glow || '#6dff9a';
  const glow = ctx.mat(gc, { emissive: gc, emissiveIntensity: 2.2 });
  g.userData.glow = glow;
  const tips = [];
  const limb = (x0, y0, z0, x1, y1, z1, r0, r1) => {
    const dx = x1-x0, dy = y1-y0, dz = z1-z0, L = Math.hypot(dx, dy, dz);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, L, 5), bark);
    m.position.set((x0+x1)/2, (y0+y1)/2, (z0+z1)/2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), new THREE.Vector3(dx,dy,dz).normalize());
    g.add(m);
  };
  // split trunk: two legs leaving a doorway gap
  const topY = H * 0.35;
  limb(-0.5, 0, 0, -0.1, topY, 0, 0.3, 0.22);
  limb(0.5, 0, 0, 0.1, topY, 0, 0.3, 0.22);
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.3, 0.5), bark);
  lintel.position.set(0, topY, 0);
  g.add(lintel);
  limb(0, topY, 0, 0, H * 0.6, 0, 0.24, 0.16);
  const n = 9;
  for (let i = 0; i < n; i++) {
    const a = i / n * 6.28 + ctx.range(-0.3, 0.3);
    const y0 = H * ctx.range(0.5, 0.68);
    const len = ctx.range(1.0, 1.6);
    const x1 = Math.sin(a) * len, z1 = Math.cos(a) * len, y1 = y0 + ctx.range(0.5, 1.2);
    limb(0, y0, 0, x1, y1, z1, 0.09, 0.04);
    const a2 = a + ctx.range(-0.7, 0.7);
    const x2 = x1 + Math.sin(a2) * 0.7, z2 = z1 + Math.cos(a2) * 0.7, y2 = y1 + ctx.range(0.2, 0.7);
    limb(x1, y1, z1, x2, y2, z2, 0.04, 0.015);
    const t = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 0), glow);
    t.position.set(x2, y2, z2);
    g.add(t);
  }
  return g;
}
export function update(obj, t) {
  obj.userData.glow.emissiveIntensity = 2 + 0.7 * Math.sin(t * 1.3);
}
