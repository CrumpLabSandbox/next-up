// Low round island: black wet stone disc, thin dark silver sand ring, pebbles, blue rim glow, wide warm mist ring; params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 4, H = p.height || 0.25;
  const stone = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.92, R, H, 11), ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.35 }));
  stone.position.y = H / 2 - 0.05;
  g.add(stone);
  const sand = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.74, R * 0.82, H + 0.04, 11), ctx.mat('#6f768a', { emissive: '#6f768a', emissiveIntensity: 0.2 }));
  sand.position.y = H / 2 - 0.03;
  g.add(sand);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.6, R * 0.7, H + 0.08, 9), ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.35 }));
  top.position.y = H / 2 - 0.01;
  g.add(top);
  const rg = new THREE.RingGeometry(R * 0.95, R * 0.95 + 0.3, 11);
  rg.rotateX(-Math.PI / 2);
  const rim = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  rim.position.y = 0.0;
  g.add(rim);
  const d = new THREE.Object3D();
  const n = 30;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), ctx.mat('#4a5068', { emissive: '#4a5068', emissiveIntensity: 0.25 }), n);
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.28), r = R * ctx.range(0.3, 0.9), s = ctx.range(0.08, 0.25);
    d.position.set(Math.cos(a) * r, H + 0.02, Math.sin(a) * r);
    d.scale.set(s, s * 0.6, s * ctx.range(0.8, 1.3));
    d.rotation.y = ctx.range(0, 6);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  const mt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 2) * 255; return [k, k * 0.78, k * 0.5]; });
  const mists = [];
  for (let i = 0; i < 8; i++) {
    const cg = new THREE.CircleGeometry(ctx.range(2, 3.2), 20);
    cg.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: mt, color: '#ffb347', transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    const a = i / 8 * 6.28;
    const mr = R * 1.25;
    m.userData = { a: a, r: mr, ph: ctx.range(0, 6) };
    m.position.set(Math.cos(a) * mr, 0.2 + i * 0.02, Math.sin(a) * mr);
    g.add(m);
    mists.push(m);
  }
  g.userData.mists = mists;
  return g;
}
export function update(obj, t) {
  obj.userData.mists.forEach((m) => {
    const q = m.userData, a = q.a + t * 0.04;
    m.position.x = Math.cos(a) * q.r;
    m.position.z = Math.sin(a) * q.r;
    m.material.opacity = 0.14 + 0.04 * Math.sin(t * 0.7 + q.ph);
  });
}
