// Narrow vertical glowing crack with drifting silver mist pooling low. params: height (m), width (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1.5, w = p.width || 0.1;
  const c = p.color || '#dfe8ff';
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(w * 0.5, h * 0.3);
  shape.lineTo(w * 0.3, h * 0.65);
  shape.lineTo(0, h);
  shape.lineTo(-w * 0.4, h * 0.6);
  shape.lineTo(-w * 0.5, h * 0.28);
  shape.closePath();
  const crack = new THREE.Mesh(new THREE.ShapeGeometry(shape), ctx.mat(c, { emissive: c, emissiveIntensity: 2, side: THREE.DoubleSide }));
  g.add(crack);
  const mist = new THREE.Group();
  for (let i = 0; i < 10; i++) {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(ctx.range(0.12, 0.22), 1), ctx.mat(c, { emissive: c, emissiveIntensity: 0.6, transparent: true, opacity: 0.18 }));
    m.position.set(ctx.range(-0.7, 0.7), ctx.range(0.05, 0.3), ctx.range(0.1, 1.0));
    m.scale.y = 0.4;
    m.userData.s = ctx.range(0, 6.28);
    m.userData.p = m.position.clone();
    mist.add(m);
  }
  g.add(mist);
  return g;
}
export function update(obj, t) {
  obj.children[0].material.emissiveIntensity = 1.7 + 0.5 * Math.sin(t * 1.3);
  obj.children[1].children.forEach(m => {
    const s = m.userData.s, b = m.userData.p;
    m.position.x = b.x + 0.1 * Math.sin(t * 0.5 + s);
    m.position.z = b.z + 0.1 * Math.cos(t * 0.4 + s);
    m.position.y = b.y + 0.04 * Math.sin(t * 0.8 + s);
  });
}
