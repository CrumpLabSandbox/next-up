// Upright ring of deep gold fire with rose-tipped feather flames, halo and nearly clear interior, faces +Z; params: radius (m), flames
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 2, n = p.flames || 44, add = THREE.AdditiveBlending;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(R, 0.05, 6, 48), new THREE.MeshBasicMaterial({ color: '#e8944c', fog: false }));
  g.add(ring);
  const glowRing = new THREE.Mesh(new THREE.TorusGeometry(R, 0.22, 6, 48), new THREE.MeshBasicMaterial({ color: '#e88a50', transparent: true, opacity: 0.08, depthWrite: false, blending: add, fog: false }));
  g.add(glowRing);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.85, c * 0.6]; });
  const inner = new THREE.Mesh(new THREE.CircleGeometry(R * 0.98, 32), new THREE.MeshBasicMaterial({ map: gt, color: '#e8944c', transparent: true, opacity: 0.02, depthWrite: false, blending: add, side: THREE.DoubleSide, fog: false }));
  inner.position.z = 0.01; g.add(inner);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#e88a50', transparent: true, opacity: 0.05, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(R * 4, R * 4, 1); g.add(halo);
  const cone = new THREE.ConeGeometry(0.07, 0.3, 4); cone.translate(0, 0.15, 0);
  const pa = cone.attributes.position, cols = new Float32Array(pa.count * 3), tip = new THREE.Color('#c87898');
  const gA = new THREE.Color('#e8944c'), gB = new THREE.Color('#e08a48'), cc = new THREE.Color();
  const fl = [];
  for (let i = 0; i < n; i++) {
    const geo = cone.clone(), base = i % 2 ? gA : gB;
    for (let k = 0; k < pa.count; k++) { cc.copy(base).lerp(tip, Math.max(0, Math.min(1, pa.getY(k) / 0.3))); cols[k * 3] = cc.r; cols[k * 3 + 1] = cc.g; cols[k * 3 + 2] = cc.b; }
    geo.setAttribute('color', new THREE.BufferAttribute(cols.slice(), 3));
    const a = (i / n) * Math.PI * 2 + ctx.range(-0.04, 0.04);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.22, depthWrite: false, blending: add, fog: false }));
    m.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); m.rotation.z = a - Math.PI / 2;
    g.add(m); fl.push({ m: m, ph: ctx.range(0, 6), s: ctx.range(0.85, 1.3), sp: ctx.range(2, 4) });
  }
  g.userData = { fl: fl, halo: halo };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.fl.length; i++) { const f = u.fl[i]; const k = 0.6 + 0.5 * Math.sin(t * f.sp + f.ph); f.m.scale.set(0.85 + 0.2 * k, f.s * (0.8 + 0.3 * k), 1); }
  u.halo.material.opacity = 0.05 + 0.01 * Math.sin(t * 1.5);
}
