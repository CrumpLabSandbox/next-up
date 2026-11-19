// Tarnished brass bell; held=true hangs mouth-down from a frayed cool cord with falling silver sand; otherwise lies on sand with pebbles; params: height (m), held
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.16;
  const k = H / 0.1;
  const pts = [[0.045, 0], [0.042, 0.02], [0.03, 0.055], [0.018, 0.085], [0.006, 0.1]].map((a) => new THREE.Vector2(a[0] * k, a[1] * k));
  const bell = new THREE.Mesh(new THREE.LatheGeometry(pts, 8), ctx.mat('#8a6a2e', { emissive: '#8a6a2e', emissiveIntensity: 0.6, side: THREE.DoubleSide }));
  const cm = ctx.mat('#4a5068', { emissive: '#3a3f5c', emissiveIntensity: 0.3 });
  const ht = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.7, c * 0.28]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#ffb347', transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(0.5, 0.5, 1);
  g.userData.sp = sp;
  if (p.held) {
    const hang = new THREE.Group();
    bell.position.y = -H;
    hang.add(bell);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.004, 0.22, 4), cm);
    cord.position.y = 0.11;
    hang.add(cord);
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0015, 0.05, 3), cm);
      f.position.set(ctx.range(-0.012, 0.012), 0.235, ctx.range(-0.012, 0.012));
      f.rotation.set(ctx.range(-0.6, 0.6), 0, ctx.range(-0.6, 0.6));
      hang.add(f);
    }
    sp.position.set(0, -H * 0.6, 0.04);
    hang.add(sp);
    const n = 14;
    const sand = new THREE.InstancedMesh(new THREE.SphereGeometry(0.006, 4, 3), new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false }), n);
    const seeds = [];
    for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(-0.01, 0.01), ctx.range(-0.01, 0.01)]);
    hang.add(sand);
    g.add(hang);
    g.userData.hang = hang; g.userData.sand = sand; g.userData.seeds = seeds; g.userData.d = new THREE.Object3D(); g.userData.H = H;
    return g;
  }
  bell.rotation.z = 0.5;
  bell.position.y = -H * 0.2;
  g.add(bell);
  const pm = ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.3 });
  [[0.14, 0.06], [-0.1, 0.12], [0.05, -0.12]].forEach((a) => {
    const s = ctx.range(0.04, 0.07);
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), pm);
    m.scale.set(s, s * 0.6, s);
    m.position.set(a[0], -0.02, a[1]);
    g.add(m);
  });
  sp.position.set(0.02, 0.06, 0.03);
  g.add(sp);
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.sp.material.opacity = 0.5 + 0.15 * Math.sin(t * 1.2);
  if (u.sand) {
    for (let i = 0; i < u.seeds.length; i++) {
      const q = u.seeds[i];
      const f = (q[0] + t * 0.5) % 1;
      u.d.position.set(q[1], -u.H - f * 0.5, q[2]);
      u.d.scale.setScalar(Math.max(0.1, 1 - f));
      u.d.updateMatrix();
      u.sand.setMatrixAt(i, u.d.matrix);
    }
    u.sand.instanceMatrix.needsUpdate = true;
  }
}
