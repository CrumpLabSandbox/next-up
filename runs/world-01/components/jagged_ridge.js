// Low ridge of dark jagged stone along local X with a notch gap at center. params: length (m), height (m), notch (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 40, H = p.height || 3, N = p.notch || 3;
  const col = p.color || '#1b1a22';
  const n = 26;
  for (let i = 0; i < n; i++) {
    const x = -L / 2 + (i + 0.5) * L / n;
    if (Math.abs(x) < N / 2 + 0.8) continue;
    const edge = 1 - Math.abs(x) / (L / 2) * 0.6;
    const h = H * edge * ctx.range(0.6, 1.2);
    const r = ctx.range(1.0, 1.6);
    const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 5), ctx.mat(ctx.pick([col, '#25232d', '#15141b'])));
    m.position.set(x + ctx.range(-0.3, 0.3), h / 2, ctx.range(-0.8, 0.8));
    m.rotation.set(ctx.range(-0.12, 0.12), ctx.range(0, 6), ctx.range(-0.12, 0.12));
    g.add(m);
  }
  [-1, 1].forEach(s => {
    const h = H * 0.9;
    const m = new THREE.Mesh(new THREE.ConeGeometry(1.2, h, 5), ctx.mat('#1b1a22'));
    m.position.set(s * (N / 2 + 0.6), h / 2, 0);
    g.add(m);
  });
  return g;
}
