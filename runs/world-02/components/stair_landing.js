// Flat square slab of black stone, desaturated, with frost gradient on south edge, hairline cracks, ash patches; top at local y=0; params: size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 4;
  const slab = new THREE.Mesh(new THREE.BoxGeometry(S, 0.3, S), ctx.mat('#1a1c28', { emissive: '#3a4263', emissiveIntensity: 0.2 }));
  slab.position.y = -0.15;
  g.add(slab);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(S + 0.06, 0.03, S + 0.06), ctx.mat('#4a5068', { emissive: '#6f768a', emissiveIntensity: 0.3 }));
  edge.position.y = -0.02;
  g.add(edge);
  const d = new THREE.Object3D();
  const n = 60;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.6 }), n);
  for (let i = 0; i < n; i++) {
    const s = ctx.range(0.02, 0.06);
    d.position.set(ctx.range(-S / 2, S / 2), s, ctx.range(-S / 2, S / 2));
    d.scale.set(s, s * ctx.range(1, 2.5), s);
    d.rotation.set(0, ctx.range(0, 6), 0);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  const an = 8;
  const am = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 0.01, 6), ctx.mat('#8f98ad', { emissive: '#6c7690', emissiveIntensity: 0.2 }), an);
  for (let i = 0; i < an; i++) {
    const s = ctx.range(0.25, 0.7);
    d.position.set(ctx.range(-S / 2 + 0.3, S / 2 - 0.3), 0.008, ctx.range(-S / 2 + 0.3, S / 2 - 0.3));
    d.scale.set(s, 1, s * ctx.range(0.5, 1.1));
    d.rotation.set(0, ctx.range(0, 6), 0);
    d.updateMatrix();
    am.setMatrixAt(i, d.matrix);
  }
  g.add(am);
  const cn = 12;
  const cr = new THREE.InstancedMesh(new THREE.BoxGeometry(0.02, 0.004, 1), new THREE.MeshBasicMaterial({ color: '#0b1226' }), cn);
  for (let i = 0; i < cn; i++) {
    d.position.set(ctx.range(-S / 2 + 0.5, S / 2 - 0.5), 0.016, ctx.range(-S / 2 + 0.5, S / 2 - 0.5));
    d.scale.set(1, 1, ctx.range(0.5, 1.5));
    d.rotation.set(0, ctx.range(0, 6.28), 0);
    d.updateMatrix();
    cr.setMatrixAt(i, d.matrix);
  }
  g.add(cr);
  const ft = ctx.dataTexture(32, 32, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 0.5);
    const k = Math.pow(1 - v, 1.5) * e * 255;
    return [k, k, k];
  });
  const fg = new THREE.PlaneGeometry(S, 1.3);
  fg.rotateX(-Math.PI / 2);
  const fr = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: ft, color: '#6f7fa8', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  fr.position.set(0, 0.02, S / 2 - 0.65);
  g.add(fr);
  return g;
}
