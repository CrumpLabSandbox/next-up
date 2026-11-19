// Low round island: black wet stone, muted stone-grey ring, pebbles, feathered blue rim and under-glow disc, silver ripple rings, amber base glow, warm mist ring; params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 4, H = p.height || 0.25;
  const stone = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.92, R, H, 11), ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.35 }));
  stone.position.y = H / 2 - 0.05;
  g.add(stone);
  const sand = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.74, R * 0.82, H + 0.04, 11), ctx.mat('#4a5068', { emissive: '#4a5068', emissiveIntensity: 0.1 }));
  sand.position.y = H / 2 - 0.03;
  g.add(sand);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.6, R * 0.7, H + 0.08, 9), ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.35 }));
  top.position.y = H / 2 - 0.01;
  g.add(top);
  const rg = new THREE.RingGeometry(R * 0.95, R * 0.95 + 0.6, 11);
  rg.rotateX(-Math.PI / 2);
  const rim = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  g.add(rim);
  const ft = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - q) / 0.45) * 255; return [k, k, k]; });
  const fg = new THREE.CircleGeometry(R + 1.5, 32);
  fg.rotateX(-Math.PI / 2);
  const feather = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: ft, color: '#8fc0ff', transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  feather.position.y = -0.04;
  g.add(feather);
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
  const refl = new THREE.CircleGeometry(0.75, 20);
  refl.rotateX(-Math.PI / 2);
  const rf = new THREE.Mesh(refl, new THREE.MeshBasicMaterial({ map: mt, color: '#ffb347', transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  rf.position.set(0, H + 0.06, 0.5);
  g.add(rf);
  const ripG = new THREE.RingGeometry(0.97, 1, 48);
  ripG.rotateX(-Math.PI / 2);
  const ripples = [];
  [5, 6.5, 8].forEach((r, i) => {
    const m = new THREE.Mesh(ripG, new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.y = 0.02;
    m.scale.set(r, 1, r);
    m.userData = { i: i };
    g.add(m);
    ripples.push(m);
  });
  [3.5, 4.5, 5.5].forEach((r) => {
    const m = new THREE.Mesh(ripG, new THREE.MeshBasicMaterial({ color: '#cfd8f5', transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.y = 0.025;
    m.scale.set(r, 1, r);
    g.add(m);
  });
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
  g.userData.ripples = ripples;
  return g;
}
export function update(obj, t) {
  obj.userData.mists.forEach((m) => {
    const q = m.userData, a = q.a + t * 0.04;
    m.position.x = Math.cos(a) * q.r;
    m.position.z = Math.sin(a) * q.r;
    m.material.opacity = 0.14 + 0.04 * Math.sin(t * 0.7 + q.ph);
  });
  obj.userData.ripples.forEach((m) => {
    const f = (t * 0.03 + m.userData.i / 3) % 1;
    const r = 4.5 + f * 4;
    m.scale.set(r, 1, r);
    m.material.opacity = 0.12 * Math.sin(Math.PI * f);
  });
}
