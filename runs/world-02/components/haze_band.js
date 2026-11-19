// Wide additive vertical glow sprite for horizon haze; params: width, height, color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const c = new THREE.Color(p.color || '#ffb347');
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2) * 255;
    return [k * c.r, k * c.g, k * c.b];
  });
  const sm = new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, transparent: true, opacity: p.opacity || 0.06, depthWrite: false, fog: false });
  const sp = new THREE.Sprite(sm);
  sp.scale.set(p.width || 40, p.height || 8, 1);
  g.add(sp);
  return g;
}