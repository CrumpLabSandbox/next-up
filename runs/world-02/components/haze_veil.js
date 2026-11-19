// Soft normal-blend vertical haze plane, feathered on all edges, faces +Z; params: width, height, color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 100, H = p.height || 10;
  const sm = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const tex = ctx.dataTexture(64, 32, (u, v) => { const k = sm(Math.min(u, 1 - u) / 0.35) * sm(Math.min(v, 1 - v) / 0.5) * 255; return [k, k, k]; });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ color: p.color || '#c890a8', alphaMap: tex, transparent: true, opacity: p.opacity || 0.18, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  m.position.y = H / 2; m.renderOrder = 6; g.add(m);
  return g;
}
