// Pulsing ring etched on a floor, green-tinted, lifted lid edge. params: radius, width, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 1, w = (p.width || 0.04) / 2;
  const c = p.color || '#dfe8ff';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 1.6, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.RingGeometry(R - w, R + w, 48), m);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = p.lift ? 0.02 : 0;
  g.add(ring);
  if (p.lift) {
    const gm = ctx.mat('#5dff8a', { emissive: '#5dff8a', emissiveIntensity: 1.4, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const halo = new THREE.Mesh(new THREE.RingGeometry(R - 0.12, R + 0.02, 48), gm);
    halo.rotation.x = -Math.PI / 2; halo.position.y = 0.015;
    g.add(halo);
    g.userData.g = gm;
  }
  g.userData.m = m;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.8 + 1.2 * Math.sin(t * 2);
  if (obj.userData.g) obj.userData.g.emissiveIntensity = 1.2 + 0.8 * Math.sin(t * 2);
}