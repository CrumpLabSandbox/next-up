// Stack of flat stones with a hollow top. params: height (m), width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1.2, w = p.width || 1;
  const layers = 6;
  const lh = h / layers;
  for (let i = 0; i < layers; i++) {
    const k = 1 - i / (layers + 1.5);
    const r = (w / 2) * k;
    const geo = new THREE.CylinderGeometry(r * 0.92, r, lh * 0.95, 7);
    const shade = ctx.range(-0.06, 0.06);
    const col = new THREE.Color(p.color || '#6d7a8f').offsetHSL(0, 0, shade);
    const m = new THREE.Mesh(geo, ctx.mat(col));
    m.position.set(ctx.range(-0.04, 0.04), lh * (i + 0.5), ctx.range(-0.04, 0.04));
    m.rotation.y = ctx.range(0, 6.28);
    m.scale.set(1 + ctx.range(-0.1, 0.1), 1, 1 + ctx.range(-0.1, 0.1));
    g.add(m);
  }
  // rim stones around hollow
  const topR = (w / 2) * (1 - layers / (layers + 1.5));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.12), ctx.mat('#7a869a'));
    s.position.set(Math.cos(a) * (topR + 0.05), h + 0.04, Math.sin(a) * (topR + 0.05));
    s.rotation.y = -a + ctx.range(-0.3, 0.3);
    g.add(s);
  }
  return g;
}
