// Soft vertical gradient wall face (+Z facing) with irregular misty-tinted rocks along the top edge and base haze; params: width, height, rocks, rockColor
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 7, H = p.height || 2.9, n = p.rocks || 14;
  const tex = ctx.dataTexture(4, 32, (u, v) => [11 + 31 * v, 18 + 33 * v, 38 + 50 * v]);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.9, depthWrite: false }));
  face.position.y = H / 2;
  g.add(face);
  const rim = new THREE.Mesh(new THREE.PlaneGeometry(W, 0.18), new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  rim.position.set(0, H - 0.05, 0.02);
  g.add(rim);
  const rc = p.rockColor || '#2a3358';
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), ctx.mat(rc, { emissive: '#3a4468', emissiveIntensity: 0.35 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const s = ctx.range(0.5, 1.4);
    d.position.set(-W / 2 + (i + ctx.range(0.1, 0.9)) / n * W, H + ctx.range(-0.15, 0.2), ctx.range(0.05, 0.4));
    d.scale.set(s, s * ctx.range(0.5, 0.8), s * 0.7);
    const tl = ctx.range(0.09, 0.26);
    d.rotation.set(ctx.range(-tl, tl), ctx.range(0, 6), ctx.range(-tl, tl));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  const ft = ctx.dataTexture(32, 32, (u, v) => { const k = Math.min(1, (1 - Math.abs(u * 2 - 1)) / 0.4) * Math.min(1, (1 - v) / 0.6) * 255; return [k, k, k]; });
  const hz = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.1, H * 0.8), new THREE.MeshBasicMaterial({ color: '#3a4468', alphaMap: ft, transparent: true, opacity: 0.3, depthWrite: false, fog: false }));
  hz.position.set(0, H * 0.4, 0.6);
  g.add(hz);
  const top = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.2, 1.2), new THREE.MeshBasicMaterial({ color: '#3a4468', alphaMap: ft, transparent: true, opacity: 0.3, depthWrite: false, fog: false }));
  top.position.set(0, H + 0.1, 0.7);
  g.add(top);
  return g;
}
