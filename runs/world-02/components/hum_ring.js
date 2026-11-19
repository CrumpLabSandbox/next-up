// Horizontal trembling ring of gold light with soft halo; params: radius (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.14, add = THREE.AdditiveBlending;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(R, 0.008, 5, 28), new THREE.MeshBasicMaterial({ color: p.color || '#ffd37a', transparent: true, opacity: 0.7, depthWrite: false, blending: add, fog: false }));
  ring.rotation.x = Math.PI / 2; g.add(ring);
  const wide = new THREE.Mesh(new THREE.TorusGeometry(R, 0.03, 5, 28), new THREE.MeshBasicMaterial({ color: '#ffb870', transparent: true, opacity: 0.18, depthWrite: false, blending: add, fog: false }));
  wide.rotation.x = Math.PI / 2; g.add(wide);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffc27a', transparent: true, opacity: 0.2, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(R * 6, R * 6, 1); g.add(halo);
  g.userData = { ring, wide, halo };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, k = 0.5 + 0.5 * Math.sin(t * 2.2);
  u.ring.material.opacity = 0.45 + 0.3 * k;
  u.wide.material.opacity = 0.1 + 0.12 * k;
  u.halo.material.opacity = 0.12 + 0.1 * k;
  const s = 1 + 0.04 * Math.sin(t * 9);
  u.ring.scale.set(s, s, s);
  u.wide.scale.set(1 / s, 1 / s, 1 / s);
}
