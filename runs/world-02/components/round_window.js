// Delicate double gold ring window seen from inside, faint glow, see-through; faces +Z; params: radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 1.5;
  g.add(new THREE.Mesh(new THREE.TorusGeometry(R, 0.05, 6, 48), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false })));
  g.add(new THREE.Mesh(new THREE.TorusGeometry(R * 1.15, 0.02, 4, 48), new THREE.MeshBasicMaterial({ color: '#ffd37a', transparent: true, opacity: 0.25, depthWrite: false, fog: false })));
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd37a', transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(R * 3, R * 3, 1); sp.position.z = 0.1; g.add(sp);
  g.userData = { sp: sp };
  return g;
}
export function update(obj, t) {
  obj.userData.sp.material.opacity = 0.1 + 0.02 * Math.sin(t * 0.8);
}
