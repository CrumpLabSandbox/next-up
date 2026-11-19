// Tiny pale glowing silver key lying flat, bow shaped like an arched door at +Z, teeth, bright halo and pulsing 6-point flare; params: length (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 0.08;
  const m = new THREE.MeshBasicMaterial({ color: '#f4f8ff', fog: false });
  const k = new THREE.Group();
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.008, L * 0.7), m);
  shaft.position.z = -L * 0.05;
  k.add(shaft);
  [0.3, 0.2].forEach((o, i) => {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.007, 0.009), m);
    t.position.set(0.011, 0, -L * o - 0.012 * i - L * 0.1);
    k.add(t);
  });
  const bow = new THREE.Group();
  const arch = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.004, 4, 8, Math.PI), m);
  arch.position.y = 0.015;
  bow.add(arch);
  [-1, 1].forEach((s) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.03, 0.008), m);
    b.position.set(s * 0.02, 0, 0);
    bow.add(b);
  });
  bow.position.z = L * 0.4;
  bow.rotation.set(Math.PI / 2, 0, 0);
  k.add(bow);
  k.position.y = 0.04;
  g.add(k);
  const ht = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.9, c * 0.96, c]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#eaf4ff', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(0.9, 0.9, 1);
  sp.position.y = 0.04;
  g.add(sp);
  const ft = ctx.dataTexture(64, 64, (u, v) => {
    const x = u - 0.5, y = v - 0.5;
    const q = Math.min(1, Math.hypot(x, y) * 2);
    const a = Math.atan2(y, x);
    const spike = Math.pow(Math.abs(Math.cos(a * 3)), 14);
    const c = (spike * Math.pow(1 - q, 1.5) + Math.pow(1 - q, 4) * 0.6) * 255;
    return [c, c, c];
  });
  const fl = new THREE.Sprite(new THREE.SpriteMaterial({ map: ft, color: '#ffffff', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  fl.scale.set(0.4, 0.4, 1);
  fl.position.y = 0.04;
  g.add(fl);
  g.userData = { sp: sp, fl: fl, k: k };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.sp.material.opacity = 0.85 + 0.1 * Math.sin(t * 2.6);
  const s = 0.4 + 0.08 * Math.sin(t * 1.7);
  u.fl.scale.set(s, s, 1);
  u.fl.material.opacity = 0.45 + 0.12 * Math.sin(t * 1.7);
  u.fl.material.rotation = t * 0.1;
  u.k.position.y = 0.04 + 0.005 * Math.sin(t * 1.3);
}
