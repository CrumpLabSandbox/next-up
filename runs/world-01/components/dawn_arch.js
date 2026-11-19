// Round-topped pale stone archway filled with warm gold light, spill on floor. Faces along Z. params: width, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 1.5, H = p.height || 2.2, T = 0.25, D = 0.4;
  const stone = ctx.mat('#d8d4c8');
  const r = W / 2, sh = H - r;
  [-1, 1].forEach(s => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(T, sh, D), stone);
    b.position.set(s * (r + T / 2), sh / 2, 0); g.add(b);
  });
  const arc = new THREE.Mesh(new THREE.TorusGeometry(r + T / 2, T / 2, 6, 16, Math.PI), stone);
  arc.scale.z = D / T; arc.position.y = sh; g.add(arc);
  const lm = ctx.mat('#ffe2a0', { emissive: '#ffd27a', emissiveIntensity: 2.2, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const sp = new THREE.Shape();
  sp.moveTo(-r, 0); sp.lineTo(r, 0); sp.lineTo(r, sh); sp.absarc(0, sh, r, 0, Math.PI, false); sp.lineTo(-r, 0);
  const fill = new THREE.Mesh(new THREE.ShapeGeometry(sp, 12), lm); g.add(fill);
  const sm = ctx.mat('#ffd98a', { emissive: '#ffc860', emissiveIntensity: 1.2, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
  const spill = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.9, 2.5), sm);
  spill.rotation.x = -Math.PI / 2; spill.position.set(0, 0.02, -1.25); g.add(spill);
  g.userData.m = lm;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 2 + 0.5 * Math.sin(t * 2.2);
}