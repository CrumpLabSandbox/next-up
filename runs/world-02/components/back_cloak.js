// Indigo unlit back-facing cloak plane, pack plane, indigo head cap, hood-top highlight and blue shoulder rim, facing +Z; params: color, packColor, rim
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const mk = (w, h, col, y, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide, fog: false })); m.position.set(0, y, z); g.add(m); return m; };
  mk(0.75, 1.0, p.color || '#2a3358', 0.95, 0);
  mk(0.4, 0.45, p.packColor || '#1c2542', 0.9, 0.05);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#2a3358', side: THREE.DoubleSide, fog: false }));
  cap.position.set(0, 1.5, -0.3); cap.scale.set(1, 1.1, 1); g.add(cap);
  const hl = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: '#4a5584', fog: false }));
  hl.scale.set(1, 0.6, 0.8); hl.position.set(0, 1.68, -0.3); g.add(hl);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const rim = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: p.rim || '#8fc0ff', transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  rim.scale.set(0.9, 0.7, 1); rim.position.set(0, 1.4, -0.2); g.add(rim);
  return g;
}
