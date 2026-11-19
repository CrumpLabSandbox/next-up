// Faint silver-blue sheen plus soft ripple rings (8-25 m); with near=true only soft rings at 2-6 m; params: size, rings, sheenColor, ringColor, near
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 40;
  if (!p.near) {
    const ft = ctx.dataTexture(64, 64, (u, v) => { const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - d) / 0.6) * 255; return [k, k, k]; });
    const sg = new THREE.PlaneGeometry(S, S);
    sg.rotateX(-Math.PI / 2);
    g.add(new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: p.sheenColor || '#4a5a8a', alphaMap: ft, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })));
  }
  const n = p.rings || 12;
  const rg = new THREE.RingGeometry(0.97, 1, 64);
  rg.rotateX(-Math.PI / 2);
  const rings = [];
  for (let i = 0; i < n; i++) {
    const r = p.near ? 2 + (4 * i) / Math.max(1, n - 1) : 8 + (17 * i) / (n - 1) + ctx.range(-0.5, 0.5);
    const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: p.ringColor || '#8fc0ff', transparent: true, opacity: 0.1, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.y = 0.01 + i * 0.001;
    m.scale.set(r, 1, r);
    m.userData = { ph: ctx.range(0, 6) };
    g.add(m);
    rings.push(m);
  }
  g.userData.rings = rings;
  return g;
}
export function update(obj, t) {
  obj.userData.rings.forEach((m) => { m.material.opacity = 0.1 + 0.03 * Math.sin(t * 0.5 + m.userData.ph); });
}
