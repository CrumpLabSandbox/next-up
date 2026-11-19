// Cold green-white beacon: emissive core, smooth 5 m sprite glow, ground glow, slow flicker; params: size, color, drop
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.125;
  const c = p.color || '#bfffe8';
  g.add(new THREE.Mesh(new THREE.SphereGeometry(s, 8, 6), ctx.mat(c, { emissive: c, emissiveIntensity: 3 })));
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2.6) * 255;
    return [k * 0.62, k, k * 0.88];
  });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5, depthWrite: false, fog: false }));
  sp.scale.set(5, 5, 1);
  g.add(sp);
  const gg = new THREE.CircleGeometry(1.75, 32);
  gg.rotateX(-Math.PI / 2);
  const gl = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({ map: tex, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.3, depthWrite: false, fog: false }));
  gl.position.y = -((p.drop || 0.95) - 0.05);
  g.add(gl);
  g.userData = { sp: sp, gl: gl };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  let f = 0.875 + 0.125 * Math.sin(t * 0.9) + 0.03 * Math.sin(t * 3.7);
  const ph = (t % 11) / 11;
  if (ph > 0.8 && ph < 0.86) f -= 0.18 * Math.sin((ph - 0.8) / 0.06 * Math.PI);
  f = Math.max(0.6, Math.min(1, f));
  u.sp.material.opacity = 0.5 * f;
  u.gl.material.opacity = 0.3 * f;
}
