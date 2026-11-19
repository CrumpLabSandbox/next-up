// Ring of smooth egg-shaped stones. params: count, radius (m), height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 8;
  const r = p.radius || 2;
  const h = p.height || 0.45;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + ctx.range(-0.1, 0.1);
    const geo = new THREE.SphereGeometry(0.5, 8, 6);
    const shade = ctx.range(-0.04, 0.04);
    const c = new THREE.Color(p.color || '#b9bbc2').offsetHSL(0, 0, shade);
    const m = new THREE.Mesh(geo, ctx.mat(c));
    const s = ctx.range(0.85, 1.15);
    m.scale.set(0.6 * s, h * 1.1 * s, 0.45 * s);
    m.position.set(Math.cos(a) * r, h * 0.45, Math.sin(a) * r);
    m.rotation.y = -a + ctx.range(-0.4, 0.4);
    m.rotation.z = ctx.range(-0.1, 0.1);
    g.add(m);
  }
  return g;
}
