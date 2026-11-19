// Small brass bell standing upright, faintly glowing gold, origin at its base; params: height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.25;
  const brass = ctx.mat('#b8893a', { emissive: '#ffb347', emissiveIntensity: 0.5 });
  const pts = [[0.5, 0], [0.5, 0.08], [0.4, 0.2], [0.28, 0.5], [0.2, 0.8], [0.1, 0.95], [0, 1]].map((a) => new THREE.Vector2(a[0] * H * 0.5, a[1] * H));
  g.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 12), brass));
  const top = new THREE.Mesh(new THREE.TorusGeometry(H * 0.08, H * 0.02, 4, 8), brass); top.position.y = H * 1.02; g.add(top);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd37a', transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  h.scale.set(0.5, 0.5, 1); h.position.y = H * 0.5; g.add(h);
  g.userData = { h: h };
  return g;
}
export function update(obj, t) {
  obj.userData.h.material.opacity = 0.32 + 0.06 * Math.sin(t * 1.6);
}
