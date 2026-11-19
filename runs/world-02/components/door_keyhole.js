// Small door-shaped keyhole of silver light, faces +Z; params: height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.3, W = H * 0.55, t = 0.012;
  const bm = new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false });
  const bar = (w, h, x, y) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.02), bm); m.position.set(x, y, 0); g.add(m); };
  const sh = H - W / 2;
  bar(t, sh, -W / 2, sh / 2); bar(t, sh, W / 2, sh / 2); bar(W, t, 0, 0);
  const arch = new THREE.Mesh(new THREE.TorusGeometry(W / 2, t / 2, 4, 10, Math.PI), bm);
  arch.position.set(0, sh, 0); g.add(arch);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.85, c * 0.93, c]; });
  const inner = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: gt, color: '#bfd8ff', transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  inner.position.set(0, H / 2, -0.005); g.add(inner);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#cfe0ff', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(1, 1, 1); sp.position.set(0, H / 2, 0.05); g.add(sp);
  g.userData.sp = sp;
  return g;
}
export function update(obj, t) { obj.userData.sp.material.opacity = 0.5 + 0.08 * Math.sin(t * 1.2); }
