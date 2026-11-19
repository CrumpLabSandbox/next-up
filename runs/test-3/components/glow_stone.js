// Translucent egg stone with inner blue glow and crack. params: color, glow, boost (brightness multiplier), crack (width m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const b = p.boost || 1;
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), ctx.mat(p.color || '#aab4c8', { transparent: true, opacity: 0.8, emissive: p.glow || '#6fa8ff', emissiveIntensity: 0.35 * b }));
  shell.scale.set(0.7, 0.58, 0.52);
  shell.position.y = 0.27;
  g.add(shell);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), ctx.mat(p.glow || '#8ec5ff', { emissive: p.glow || '#6fa8ff', emissiveIntensity: 2.2 * b }));
  core.name = 'core';
  core.scale.set(0.3, 0.26, 0.22);
  core.position.y = 0.27;
  g.add(core);
  const w = p.crack || 0.008;
  const crackMat = ctx.mat('#dff0ff', { emissive: '#bfe0ff', emissiveIntensity: b > 1 ? 2.5 : 0.1 });
  let x = 0.12, y = 0.03;
  for (let i = 0; i < 5; i++) {
    const dy = 0.1, dx = ctx.range(-0.04, 0.04);
    const seg = new THREE.Mesh(new THREE.BoxGeometry(w, dy * 1.1, 0.008), crackMat);
    const f = 1 - Math.pow((y + dy / 2 - 0.27) / 0.29, 2);
    seg.position.set(x + dx / 2, y + dy / 2, 0.2 * Math.sqrt(Math.max(f, 0.1)) * 1.02);
    seg.rotation.z = -dx / dy;
    g.add(seg);
    x += dx; y += dy;
  }
  return g;
}
export function update(obj, t) {
  const c = obj.getObjectByName('core');
  if (c) { const s = 1 + 0.08 * Math.sin(t * 1.5); c.scale.set(0.3 * s, 0.26 * s, 0.22 * s); }
}
