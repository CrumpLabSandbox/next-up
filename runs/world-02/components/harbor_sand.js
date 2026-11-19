// Damp silver sand slab with irregular edge, dark pebbles and wet sheen; params: width, depth
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 4, D = p.depth || 3.4;
  const slab = new THREE.Mesh(new THREE.BoxGeometry(W, 0.16, D), ctx.mat('#8f98ad', { emissive: '#4a5068', emissiveIntensity: 0.3 }));
  slab.position.y = 0.0;
  g.add(slab);
  const top = new THREE.Mesh(new THREE.BoxGeometry(W * 0.8, 0.18, D * 0.85), ctx.mat('#6f768a', { emissive: '#4a5068', emissiveIntensity: 0.25 }));
  top.position.y = 0.0;
  g.add(top);
  const n = 40;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.3 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const s = ctx.range(0.05, 0.14);
    d.position.set(ctx.range(-W / 2 + 0.2, W / 2 - 0.2), 0.09, ctx.range(-D / 2 + 0.2, D / 2 - 0.2));
    d.scale.set(s, s * 0.6, s * ctx.range(0.8, 1.3));
    d.rotation.y = ctx.range(0, 6);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  const ft = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - q) / 0.5) * 255; return [k, k, k]; });
  const gg = new THREE.PlaneGeometry(W + 2, D + 2);
  gg.rotateX(-Math.PI / 2);
  const sheen = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({ map: ft, color: '#8fc0ff', transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sheen.position.y = 0.11;
  g.add(sheen);
  return g;
}
