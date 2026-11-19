// Overlapping tilted rocks along X with a central harbor gap, amber gap glow strip, drifting amber mist; params: width, gap (half-width), depth
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 20, gap = p.gap || 3, D = p.depth || 2.2;
  const mats = ['#1a1c28', '#0b1226', '#2a3358'].map((c) => ctx.mat(c, { emissive: '#8fc0ff', emissiveIntensity: 0.15 }));
  const n = 15;
  for (let i = 0; i < n; i++) {
    const side = i % 2 ? 1 : -1;
    const f = (Math.floor(i / 2) + ctx.range(0.1, 0.9)) / 7.5;
    const x = side * (gap + 0.6 + f * (W / 2 - gap - 0.6));
    const h = ctx.range(0.6, 1.6) * (1 - 0.35 * f);
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), mats[i % 3]);
    m.scale.set(ctx.range(1.3, 2.2), h, ctx.range(1.0, 1.8));
    m.position.set(x, h * 0.3 - 0.1, ctx.range(-D / 2, D / 2));
    m.rotation.set(ctx.range(-0.26, 0.26), ctx.range(0, 6), ctx.range(-0.26, 0.26));
    g.add(m);
  }
  const mt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.78, c * 0.5]; });
  const ft = ctx.dataTexture(32, 32, (u, v) => { const k = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.2) * Math.pow(Math.sin(Math.PI * v), 0.8) * 255; return [k, k * 0.7, k * 0.28]; });
  const sg = new THREE.PlaneGeometry(1, 6);
  sg.rotateX(-Math.PI / 2);
  const strip = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ map: ft, color: '#ffb347', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  strip.position.set(0, 0.05, 2);
  g.add(strip);
  const mists = [];
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: mt, color: '#ffb347', transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    s.scale.set(7, 2, 1);
    s.position.set(-8 + i * 4, 0.8, 0.5);
    s.userData = { x0: s.position.x, ph: i * 1.3 };
    g.add(s);
    mists.push(s);
  }
  g.userData.mists = mists;
  return g;
}
export function update(obj, t) {
  obj.userData.mists.forEach((s) => {
    const q = s.userData;
    s.position.x = q.x0 + Math.sin(t * 0.15 + q.ph) * 1.2;
    s.material.opacity = 0.18 + 0.04 * Math.sin(t * 0.6 + q.ph);
  });
}
