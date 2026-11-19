// Soft pale-gold shimmering doorway of light facing local -Z. params: width, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 1, H = p.height || 2;
  const m = ctx.mat('#ffe8a8', { emissive: '#ffd77a', emissiveIntensity: 2.2, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(W, H), m);
  pl.position.y = H / 2; g.add(pl);
  const m2 = ctx.mat('#fff3d0', { emissive: '#fff3d0', emissiveIntensity: 2, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.6, H * 0.8), m2);
  p2.position.set(0, H / 2, -0.05); g.add(p2);
  g.userData.m = m; g.userData.m2 = m2;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 2 + 0.6 * Math.sin(t * 2.3);
  obj.userData.m2.opacity = 0.45 + 0.15 * Math.sin(t * 3.1 + 1);
}