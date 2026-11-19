// Small iron lantern with cool rim; lit=true adds gold flame, warm glass and halo; params: height (m), lit
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.25, w = H * 0.4, lit = !!p.lit;
  const iron = ctx.mat('#1a1c28', { emissive: '#8fc0ff', emissiveIntensity: 0.6 });
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const back = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: lit ? '#ffb347' : '#8fc0ff', transparent: true, opacity: lit ? 0.6 : 0.25, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  back.scale.set(lit ? 2.2 : 0.8, lit ? 2.2 : 0.8, 1); back.position.set(0, H * 0.5, -0.08); g.add(back);
  const base = new THREE.Mesh(new THREE.BoxGeometry(w * 1.2, H * 0.1, w * 1.2), iron);
  base.position.y = H * 0.05; g.add(base);
  const glass = new THREE.Mesh(new THREE.BoxGeometry(w, H * 0.65, w), ctx.mat('#ffd37a', { transparent: true, opacity: lit ? 0.45 : 0.15, emissive: '#ffb347', emissiveIntensity: lit ? 0.9 : 0.15, depthWrite: false }));
  glass.position.y = H * 0.43; g.add(glass);
  [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach((s) => {
    const post = new THREE.Mesh(new THREE.BoxGeometry(w * 0.14, H * 0.68, w * 0.14), iron);
    post.position.set(s[0] * w / 2, H * 0.43, s[1] * w / 2); g.add(post);
  });
  const cap = new THREE.Mesh(new THREE.ConeGeometry(w * 0.85, H * 0.18, 4), iron);
  cap.position.y = H * 0.85; cap.rotation.y = Math.PI / 4; g.add(cap);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(w * 0.3, w * 0.05, 4, 10), iron);
  ring.position.y = H * 1.0; g.add(ring);
  const wick = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.05, w * 0.05, H * 0.2, 5), ctx.mat('#08090d'));
  wick.position.y = H * 0.2; g.add(wick);
  let flame = null;
  if (lit) {
    flame = new THREE.Mesh(new THREE.SphereGeometry(w * 0.22, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }));
    flame.scale.set(1, 1.6, 1); flame.position.y = H * 0.38; g.add(flame);
    const fs = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffc866', transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    fs.scale.set(0.7, 0.7, 1); fs.position.y = H * 0.4; g.add(fs);
  }
  g.userData = { flame: flame };
  return g;
}
export function update(obj, t) {
  const f = obj.userData.flame;
  if (f) f.scale.set(1, 1.6 + 0.15 * Math.sin(t * 7), 1);
}
