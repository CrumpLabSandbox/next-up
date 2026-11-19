// Slender cracked bone-white arch, opaque dark void in opening, frost glitter; params: height, width, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 3, W = p.width || 2;
  const col = p.color || '#c9cfdc';
  const m = ctx.mat(col, { emissive: '#c9cfdc', emissiveIntensity: 0.5 });
  const R = W / 2 - 0.12;
  const ph = H - R - 0.12;
  for (let s = -1; s <= 1; s += 2) {
    const h = ph * ctx.range(0.95, 1.0);
    const pil = new THREE.Mesh(new THREE.BoxGeometry(0.32, h, 0.32), m);
    pil.position.set(s * R, h / 2, 0);
    pil.rotation.z = ctx.range(-0.02, 0.02);
    g.add(pil);
    const base = new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 0), ctx.mat('#a9b1c4', { emissive: '#6c7690', emissiveIntensity: 0.25 }));
    base.scale.set(1.2, 0.3, 1.2);
    base.position.set(s * R, 0, 0);
    g.add(base);
  }
  const top = new THREE.Mesh(new THREE.TorusGeometry(R, 0.16, 5, 12, Math.PI), m);
  top.position.y = ph;
  top.scale.z = 2;
  g.add(top);
  const crack = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.6, 0.34), ctx.mat('#4a5068'));
  crack.position.set(R, 1.2, 0);
  crack.rotation.z = 0.2;
  g.add(crack);
  const iw = R - 0.1;
  const sh = new THREE.Shape();
  sh.moveTo(-iw, 0); sh.lineTo(iw, 0); sh.lineTo(iw, ph);
  sh.absarc(0, ph, iw, 0, Math.PI, false);
  sh.lineTo(-iw, 0);
  const dark = new THREE.Mesh(new THREE.ShapeGeometry(sh, 10), new THREE.MeshBasicMaterial({ color: '#05060a', transparent: true, opacity: 0.97, depthWrite: true, side: THREE.DoubleSide }));
  dark.position.z = 0;
  g.add(dark);
  const n = 90;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.045, 0), new THREE.MeshBasicMaterial({ color: '#e8f4ff', fog: false }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const side = ctx.rng();
    let x, y;
    if (side < 0.5) { x = (ctx.rng() < 0.5 ? -1 : 1) * (R + ctx.range(-0.16, 0.16)); y = ctx.range(0.1, ph); }
    else { const a = ctx.range(0, Math.PI); x = Math.cos(a) * (R + ctx.range(-0.16, 0.16)); y = ph + Math.sin(a) * R; }
    d.position.set(x, y, ctx.range(-0.2, 0.2));
    d.scale.setScalar(ctx.range(0.5, 1.4));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.children[obj.children.length - 1].scale.setScalar(1 + 0.15 * Math.sin(t * 2.3));
}
