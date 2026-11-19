// Small carving on the marker stone. kind 'hollow' = flat palm-shaped warm glowing dimple (faces up); 'letters' = line of tiny worn letters (faces +Z). params: kind, size (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const warm = ctx.mat('#ffcf90', { emissive: '#ff9a40', emissiveIntensity: 1.2 });
  if (p.kind === 'letters') {
    const dim = ctx.mat('#6f6b64', { emissive: '#4a4638', emissiveIntensity: 0.4 });
    let x = -0.2;
    for (let i = 0; i < 12; i++) {
      const w = ctx.range(0.01, 0.022), h = ctx.range(0.018, 0.03);
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.004), dim);
      m.position.set(x + w / 2, ctx.range(-0.004, 0.004), 0);
      g.add(m); x += w + 0.016;
    }
    return g;
  }
  const s = p.size || 0.15;
  const palm = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.38, s * 0.38, 0.006, 8), warm);
  g.add(palm);
  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.BoxGeometry(s * 0.12, 0.006, s * 0.35), warm);
    f.position.set((i - 1.5) * s * 0.17, 0, -s * 0.5); f.rotation.y = (i - 1.5) * 0.12; g.add(f);
  }
  const th = new THREE.Mesh(new THREE.BoxGeometry(s * 0.12, 0.006, s * 0.3), warm);
  th.position.set(s * 0.42, 0, -s * 0.12); th.rotation.y = -0.7; g.add(th);
  g.userData.m = warm;
  return g;
}
export function update(obj, t) {
  if (obj.userData.m) obj.userData.m.emissiveIntensity = 1.1 + 0.4 * Math.sin(t * 2);
}
