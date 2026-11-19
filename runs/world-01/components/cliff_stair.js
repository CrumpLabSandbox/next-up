// Rough rust-orange stair rising along local +Z against a cliff wall, with a darker rock wall behind. params: steps, run (m), rise (m), width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.steps || 16, run = p.run || 0.5, rise = p.rise || 0.5, w = p.width || 1;
  const col = p.color || '#b5582a';
  for (let i = 0; i < n; i++) {
    const h = rise * (i + 1);
    const s = new THREE.Mesh(new THREE.BoxGeometry(w + ctx.range(-0.08, 0.08), h, run + 0.02), ctx.mat(i % 2 ? col : '#a34e25'));
    s.position.set(ctx.range(-0.05, 0.05), h / 2, i * run + run / 2);
    s.rotation.y = ctx.range(-0.04, 0.04);
    g.add(s);
  }
  const H = rise * n, L = run * n;
  const wall = new THREE.Mesh(new THREE.BoxGeometry(w + 8, H + 1.5, 4), ctx.mat('#8f4421'));
  wall.position.set(0, (H + 1.5) / 2, L + 2);
  g.add(wall);
  const side = new THREE.Mesh(new THREE.BoxGeometry(0.6, H * 0.6, L), ctx.mat('#9c4a24'));
  side.position.set(-w / 2 - 0.4, H * 0.3, L / 2 + 0.3);
  g.add(side);
  return g;
}
