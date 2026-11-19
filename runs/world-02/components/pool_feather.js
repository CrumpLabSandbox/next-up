// Water-colored ring that fades inward to soften a hard disc edge; params: radius, color, fade (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 6, F = p.fade || 2, O = R + 1;
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.hypot(u - 0.5, v - 0.5) * 2 * O;
    const t = Math.min(1, Math.max(0, (d - (R - F)) / F));
    const k = t * t * (3 - 2 * t) * 255;
    return [k, k, k];
  });
  const cg = new THREE.CircleGeometry(O, 40);
  cg.rotateX(-Math.PI / 2);
  g.add(new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ color: p.color || '#26346a', alphaMap: tex, transparent: true, depthWrite: false, fog: false })));
  return g;
}
