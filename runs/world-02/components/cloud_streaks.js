// Long thin additive feathered high-cloud streaks aligned north-south toward the sun; params: count, minLen, maxLen, spread, height, color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 10;
  const tex = ctx.dataTexture(64, 16, (u, v) => { const a = Math.max(0, 1 - Math.abs(u * 2 - 1)), b = Math.max(0, 1 - Math.abs(v * 2 - 1)); const k = Math.pow(a, 1.2) * Math.pow(b, 1.5) * 255; return [k, k, k]; });
  for (let i = 0; i < n; i++) {
    const L = ctx.range(p.minLen || 30, p.maxLen || 60);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(L, ctx.range(2, 4)), new THREE.MeshBasicMaterial({ map: tex, color: p.color || '#ffd4a0', transparent: true, opacity: p.opacity || 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.rotation.x = -Math.PI / 2; m.rotation.z = Math.PI / 2 + ctx.range(-0.08, 0.08);
    m.position.set(ctx.range(-1, 1) * (p.spread || 90), ctx.range(40, 80) - (p.height || 60), ctx.range(-60, 60));
    g.add(m);
  }
  return g;
}
