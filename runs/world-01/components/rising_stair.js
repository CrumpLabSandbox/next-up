// Narrow stair of pale steps rising along local +Z, silver edges, star patch at top. params: steps, run, rise, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.steps || 14, run = p.run || 0.5, rise = p.rise || 0.32, W = p.width || 1;
  const stone = ctx.mat('#e6e2d6');
  const sil = ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1.6 });
  for (let i = 0; i < n; i++) {
    const h = rise * (i + 1);
    const s = new THREE.Mesh(new THREE.BoxGeometry(W, h, run), stone);
    s.position.set(0, h / 2, i * run + run / 2); g.add(s);
    [-1, 1].forEach(k => {
      const e = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, run), sil);
      e.position.set(k * (W / 2 - 0.02), h + 0.01, i * run + run / 2); g.add(e);
    });
  }
  const top = rise * n;
  const sky = new THREE.Mesh(new THREE.CircleGeometry(0.9, 10), ctx.mat('#0a0d1c', { emissive: '#1a2040', emissiveIntensity: 0.8, side: THREE.DoubleSide }));
  sky.position.set(0, top + 1.2, n * run + 0.5); g.add(sky);
  for (let i = 0; i < 8; i++) {
    const st = new THREE.Mesh(new THREE.IcosahedronGeometry(0.025, 0), ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 2.5 }));
    st.position.set(ctx.range(-0.6, 0.6), top + 1.2 + ctx.range(-0.6, 0.6), n * run + 0.45); g.add(st);
  }
  g.userData.m = sil;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.4 + 0.4 * Math.sin(t * 1.8);
}
