// Soft dissolved warm sun glow low on the horizon, feathered core, ring sprite, faint beams toward +Z; params: radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 14, add = THREE.AdditiveBlending;
  const gt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.85, c * 0.65]; });
  const ft = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, Math.min(1, (1 - q) / 0.5)); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(R, 40), new THREE.MeshBasicMaterial({ color: '#f6d8a0', alphaMap: ft, transparent: true, opacity: 0.35, depthWrite: false, fog: false }));
  g.add(disc);
  const core = new THREE.Mesh(new THREE.CircleGeometry(R * 0.7, 40), new THREE.MeshBasicMaterial({ color: '#f6d8a0', alphaMap: ft, transparent: true, opacity: 0.25, depthWrite: false, fog: false }));
  core.position.z = 0.05; g.add(core);
  const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd8a0', transparent: true, opacity: 0.15, depthWrite: false, blending: add, fog: false }));
  ring.scale.set(R * 5, R * 5, 1); ring.position.z = 0.1; g.add(ring);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd8a0', transparent: true, opacity: 0.08, depthWrite: false, blending: add, fog: false }));
  sp.scale.set(R * 7, R * 5, 1); sp.position.z = -0.5; g.add(sp);
  const bt = ctx.dataTexture(16, 64, (u, v) => { const k = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.5) * Math.pow(v, 1.3) * 255; return [k, k * 0.8, k * 0.5]; });
  const L = 190, beams = [];
  for (let i = 0; i < 7; i++) {
    const geo = new THREE.PlaneGeometry(12 + (i % 3) * 5, L); geo.translate(0, -L / 2, 0); geo.rotateX(-Math.PI / 2);
    const b = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: bt, color: '#ffd8a0', transparent: true, opacity: 0.02, depthWrite: false, blending: add, side: THREE.DoubleSide, fog: false }));
    b.rotation.y = (i - 3) * 0.2; b.position.y = 0.8; g.add(b); beams.push(b);
  }
  g.userData = { sp: sp, beams: beams };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.sp.material.opacity = 0.08 + 0.01 * Math.sin(t * 0.5);
  for (let i = 0; i < u.beams.length; i++) u.beams[i].material.opacity = 0.02 * (0.8 + 0.2 * Math.sin(t * 0.4 + i * 1.3));
}
