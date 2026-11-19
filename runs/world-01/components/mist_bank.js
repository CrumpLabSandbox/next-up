// Low drifting wall of pale silver mist with faint blue shimmer inside. Width runs along local X. params: width (m), height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const w = p.width || 20, h = p.height || 3;
  const c = p.color || '#d6dff0';
  const shimmer = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.9, h * 0.8), ctx.mat('#5aa8ff', { emissive: '#4a9cff', emissiveIntensity: 1.2, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
  shimmer.position.set(0, h * 0.45, -0.8);
  g.add(shimmer);
  const puffs = new THREE.Group();
  for (let i = 0; i < 46; i++) {
    const s = ctx.range(0.9, 1.7);
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), ctx.mat(c, { emissive: c, emissiveIntensity: 0.5, transparent: true, opacity: 0.28 }));
    m.position.set(ctx.range(-w / 2, w / 2), ctx.range(0.6, h - 0.5), ctx.range(-0.5, 0.5));
    m.scale.y = 1.1;
    m.userData.s = ctx.range(0, 6.28);
    m.userData.p = m.position.clone();
    puffs.add(m);
  }
  g.add(puffs);
  return g;
}
export function update(obj, t) {
  obj.children[0].material.emissiveIntensity = 1.0 + 0.4 * Math.sin(t * 0.9);
  obj.children[1].children.forEach(m => {
    const s = m.userData.s, b = m.userData.p;
    m.position.x = b.x + 0.5 * Math.sin(t * 0.25 + s);
    m.position.y = b.y + 0.2 * Math.sin(t * 0.4 + s);
    m.position.z = b.z + 0.3 * Math.cos(t * 0.3 + s);
  });
}
