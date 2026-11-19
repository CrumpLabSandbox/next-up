// Waist-high pale stone with spire mark and tally dots on its south (+Z) face. params: height (m), color, dots (count)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 1;
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.55, H, 0.4), ctx.mat(p.color || '#b9b5ad'));
  body.position.y = H / 2; g.add(body);
  const glow = ctx.mat('#ffffff', { emissive: '#e8f0ff', emissiveIntensity: 1.5 });
  const sp = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.22, 4), glow);
  sp.position.set(0, H * 0.7, 0.205); g.add(sp);
  const n = p.dots === undefined ? 7 : p.dots;
  for (let i = 0; i < n; i++) {
    const d = new THREE.Mesh(new THREE.IcosahedronGeometry(0.014, 0), glow);
    d.position.set((i - (n - 1) / 2) * 0.05, H * 0.5, 0.205); g.add(d);
  }
  return g;
}
