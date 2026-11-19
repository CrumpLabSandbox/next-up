// Low pale stone islet with a shallow spiral groove edged in silver light. params: radius (m), height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 5, H = p.height || 0.5;
  const prof = [[R,-0.2],[R*0.95,H*0.5],[R*0.85,H*0.9],[0.01,H]].map(q => new THREE.Vector2(q[0], q[1]));
  const rock = new THREE.Mesh(new THREE.LatheGeometry(prof, 16), ctx.mat(p.color || '#b9bdc9', { emissive: '#2a2c38', emissiveIntensity: 0.4, side: THREE.DoubleSide }));
  g.add(rock);
  const turns = 3, n = 90, pos = [], idx = [];
  const w = 0.07;
  for (let i = 0; i <= n; i++) {
    const f = i / n, a = f * turns * Math.PI * 2, r = 0.2 + f * R * 0.72;
    const c = Math.cos(a), s = Math.sin(a);
    pos.push(c * (r - w), H + 0.02, s * (r - w), c * (r + w), H + 0.02, s * (r + w));
    if (i > 0) { const k = (i - 1) * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const glow = ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1.6, side: THREE.DoubleSide });
  g.userData.glow = glow;
  g.add(new THREE.Mesh(geo, glow));
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.04, 8), glow);
  core.position.y = H + 0.03;
  g.add(core);
  return g;
}
export function update(obj, t) {
  obj.userData.glow.emissiveIntensity = 1.4 + 0.5 * Math.sin(t * 1.5);
}