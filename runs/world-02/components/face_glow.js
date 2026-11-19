// Soft featureless face-shaped glow of pale starlight with two faint bright eye points; billboard sprites; params: size (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 0.25;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 1.6) * 255; return [c, c, c]; });
  const mk = (col, op, sx, sy, x, y) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: col, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })); s.scale.set(sx, sy, 1); s.position.set(x, y, 0); g.add(s); return s; };
  const face = mk('#bcd0ff', 0.8, S * 1.1, S * 1.6, 0, 0);
  mk('#eaf4ff', 0.5, S * 2.2, S * 2.6, 0, 0);
  const e1 = mk('#ffffff', 1, S * 0.3, S * 0.3, -S * 0.2, S * 0.18);
  const e2 = mk('#ffffff', 1, S * 0.3, S * 0.3, S * 0.2, S * 0.18);
  g.userData = { face: face, e1: e1, e2: e2 };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.face.material.opacity = 0.75 + 0.1 * Math.sin(t * 1.2);
  const b = 0.85 + 0.15 * Math.sin(t * 2.1);
  u.e1.material.opacity = b; u.e2.material.opacity = b;
}
