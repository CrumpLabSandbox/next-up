// Dark stone slab with a door-shaped opening: thin silver outline, soft light inside, ground glow; params: height, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 2, W = p.width || 1.1;
  const sm = ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.4 });
  const box = (w, h, d, x, y, mat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, 0); g.add(m); return m; };
  const oy0 = H * 0.45, oh = 0.64, ow = 0.38;
  box(W, oy0, 0.4, 0, oy0 / 2, sm);
  box(W, H - oy0 - oh, 0.4, 0, oy0 + oh + (H - oy0 - oh) / 2, sm);
  const sw = (W - ow) / 2;
  box(sw, oh, 0.4, -(ow / 2 + sw / 2), oy0 + oh / 2, sm);
  box(sw, oh, 0.4, (ow / 2 + sw / 2), oy0 + oh / 2, sm);
  box(W * 0.8, 0.25, 0.36, 0, H + 0.1, ctx.mat('#4a5068', { emissive: '#4a5068', emissiveIntensity: 0.2 }));
  const bm = new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false });
  const t = 0.025;
  const ob = (w, h, x, y) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.02), bm); m.position.set(x, y, 0.21); g.add(m); };
  ob(t, oh - 0.2, -ow / 2, oy0 + (oh - 0.2) / 2); ob(t, oh - 0.2, ow / 2, oy0 + (oh - 0.2) / 2);
  const arch = new THREE.Mesh(new THREE.TorusGeometry(ow / 2, t / 2, 4, 10, Math.PI), bm);
  arch.position.set(0, oy0 + oh - 0.2, 0.21); g.add(arch);
  const gt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.85, c * 0.93, c]; });
  const inner = new THREE.Mesh(new THREE.PlaneGeometry(ow, oh), new THREE.MeshBasicMaterial({ map: gt, color: '#eaf4ff', transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  inner.position.set(0, oy0 + oh / 2, 0.1); g.add(inner);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#cfe0ff', transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  sp.scale.set(3.5, 3.5, 1); sp.position.set(0, oy0 + 0.3, 0.4); g.add(sp);
  const dg = new THREE.CircleGeometry(1.6, 24); dg.rotateX(-Math.PI / 2);
  const disc = new THREE.Mesh(dg, new THREE.MeshBasicMaterial({ map: gt, color: '#a8d0ff', transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  disc.position.set(0, 0.12, 1.2); g.add(disc);
  g.userData = { sp: sp, disc: disc, inner: inner };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, w = Math.sin(t * 1.1);
  u.sp.material.opacity = 0.55 + 0.12 * w;
  u.disc.material.opacity = 0.25 + 0.06 * w;
  u.inner.material.opacity = 0.75 + 0.1 * w;
}
