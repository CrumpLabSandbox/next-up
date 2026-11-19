// Indigo veil plane (+Z facing) over a figure's back plus blue rim sprite; params: width, height, color, rim, opacity, rimOpacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 0.62, H = p.height || 0.9;
  const tex = ctx.dataTexture(32, 32, (u, v) => { const e = Math.min(1, (1 - Math.abs(u * 2 - 1)) / 0.35) * Math.min(1, (1 - v) / 0.2) * Math.min(1, v / 0.08 + 0.3); const k = Math.max(0, e) * 255; return [k, k, k]; });
  const veil = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ color: p.color || '#2a3358', alphaMap: tex, transparent: true, opacity: p.opacity || 1, depthWrite: false }));
  veil.position.y = H / 2;
  g.add(veil);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const rim = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: p.rim || '#8fc0ff', transparent: true, opacity: p.rimOpacity || 0.7, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  rim.scale.set(0.9, 0.7, 1);
  rim.position.set(0, H * 0.95, -0.25);
  g.add(rim);
  return g;
}
