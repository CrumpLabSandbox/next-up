// Warm gold halo with fine gold lines rising up two wrists, pulsing gently; params: size (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 0.4, add = THREE.AdditiveBlending;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.8, c * 0.5]; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: p.color || '#e8944c', transparent: true, opacity: 0.5, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(S, S, 1); g.add(halo);
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffc27a', transparent: true, opacity: 0.45, depthWrite: false, blending: add, fog: false }));
  core.scale.set(S * 0.35, S * 0.35, 1); g.add(core);
  const lines = [];
  for (let i = 0; i < 4; i++) {
    const side = i % 2 ? 1 : -1;
    const geo = new THREE.CylinderGeometry(0.004, 0.004, 0.3, 4); geo.translate(0, 0.15, 0);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#e8944c', transparent: true, opacity: 0.4, depthWrite: false, blending: add, fog: false }));
    m.position.set(side * (0.03 + 0.015 * (i >> 1)), 0, (i >> 1) * 0.04 - 0.02);
    m.rotation.z = -side * 0.25; g.add(m); lines.push(m);
  }
  g.userData = { halo, lines };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, k = 0.5 + 0.5 * Math.sin(t * 1.6);
  u.halo.material.opacity = 0.42 + 0.1 * k;
  u.lines.forEach((m, i) => { m.material.opacity = 0.3 + 0.15 * Math.sin(t * 2 + i); });
}
