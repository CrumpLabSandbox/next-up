// Dim rounded square slab of black stone with pale-grey top, frost on south edge, feathered additive edge strip and chipped rim stones; top at local y=0; params: size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 4, h = S / 2, r = 0.35;
  const sh = new THREE.Shape();
  sh.moveTo(-h + r, -h); sh.lineTo(h - r, -h); sh.quadraticCurveTo(h, -h, h, -h + r);
  sh.lineTo(h, h - r); sh.quadraticCurveTo(h, h, h - r, h);
  sh.lineTo(-h + r, h); sh.quadraticCurveTo(-h, h, -h, h - r);
  sh.lineTo(-h, -h + r); sh.quadraticCurveTo(-h, -h, -h + r, -h);
  const mk = (depth, mat, y) => {
    const geo = new THREE.ExtrudeGeometry(sh, { depth: depth, bevelEnabled: false, curveSegments: 4 });
    geo.rotateX(Math.PI / 2);
    const m = new THREE.Mesh(geo, mat);
    m.position.y = y;
    return m;
  };
  g.add(mk(0.3, ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.3 }), -0.02));
  const top = mk(0.04, ctx.mat('#6f768a', { emissive: '#4a5068', emissiveIntensity: 0.15 }), 0);
  top.scale.set(0.96, 1, 0.96);
  g.add(top);
  const ft = ctx.dataTexture(64, 64, (u, v) => { const ex = Math.min(1, Math.min(u, 1 - u) / 0.2), ez = Math.min(1, Math.min(v, 1 - v) / (1.2 / (S + 2.4))); const k = Math.pow(Math.min(1, Math.min(ex, ez)), 1) ; const a = (1 - k) * 255; return [a, a, a]; });
  const fg = new THREE.PlaneGeometry(S + 2.4, S + 2.4);
  fg.rotateX(-Math.PI / 2);
  const feather = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: '#8fc0ff', map: ft, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  feather.position.y = 0.03;
  g.add(feather);
  const st = ctx.dataTexture(16, 32, (u, v) => { const k = Math.pow(v, 1.5) * 255; return [k, k, k]; });
  const sg = new THREE.PlaneGeometry(S * 0.85, 0.9);
  sg.rotateX(-Math.PI / 2);
  const frost = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: '#dfe6ff', map: st, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  frost.position.set(0, 0.05, h - 0.45);
  g.add(frost);
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.3 }), 8);
  const d = new THREE.Object3D();
  for (let i = 0; i < 8; i++) {
    const a = (i + ctx.range(0, 0.8)) / 8 * 6.283;
    const s = ctx.range(0.2, 0.5);
    d.position.set(Math.cos(a) * h * 1.02, 0.05, Math.sin(a) * h * 1.02);
    d.position.x = Math.max(-h - 0.1, Math.min(h + 0.1, d.position.x));
    d.position.z = Math.max(-h - 0.1, Math.min(h + 0.1, d.position.z));
    d.scale.set(s, s * 0.6, s * ctx.range(0.8, 1.3));
    d.rotation.set(ctx.range(-0.3, 0.3), ctx.range(0, 6), ctx.range(-0.3, 0.3));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}
