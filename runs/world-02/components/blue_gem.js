// Faceted glowing blue gem with round additive halo and periodic brightening; params: size, color, halo (m), haloOpacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.1;
  const c = p.color || '#6fc0ff';
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(s, 0), ctx.mat(c, { emissive: c, emissiveIntensity: 2.6 }));
  gem.scale.set(0.8, 1.2, 0.8);
  g.add(gem);
  const tex = ctx.dataTexture(32, 32, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2) * 255;
    return [k * 0.45, k * 0.75, k];
  });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, transparent: true, opacity: p.haloOpacity || 0.5, depthWrite: false, depthTest: false }));
  const h = p.halo || 0.9;
  sp.scale.set(h, h, 1);
  sp.renderOrder = 5;
  g.add(sp);
  g.userData.sp = sp;
  g.userData.base = p.haloOpacity || 0.5;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const ph = (t % 6) / 6;
  const flash = ph < 0.15 ? Math.sin(ph / 0.15 * Math.PI) * 0.2 : 0;
  obj.userData.sp.material.opacity = obj.userData.base + 0.05 * Math.sin(t * 1.1) + flash;
}
