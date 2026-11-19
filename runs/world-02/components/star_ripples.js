// Expanding silver rings on water with star glints; params: radius (m), rings, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 5, n = p.rings || 5;
  const rg = new THREE.RingGeometry(0.95, 1, 48);
  rg.rotateX(-Math.PI / 2);
  const rings = [];
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: p.color || '#dfe6ff', transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.y = i * 0.003;
    g.add(m);
    rings.push(m);
  }
  const sn = 70;
  const st = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.05, 0), new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false }), sn);
  const seeds = [];
  for (let i = 0; i < sn; i++) seeds.push([ctx.range(0, 6.28), ctx.rng(), ctx.range(0, 6)]);
  g.add(st);
  g.userData = { rings: rings, st: st, seeds: seeds, d: new THREE.Object3D(), R: R, n: n };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  const per = 6;
  for (let i = 0; i < u.n; i++) {
    const f = (t / per + i / u.n) % 1;
    const r = 0.8 + f * u.R;
    u.rings[i].scale.set(r, 1, r);
    u.rings[i].material.opacity = 0.35 * Math.sin(Math.PI * f) * (1 - f * 0.5);
  }
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const ri = Math.floor(q[1] * u.n);
    const f = (t / per + ri / u.n) % 1;
    const r = 0.8 + f * u.R;
    u.d.position.set(Math.cos(q[0]) * r, 0.02, Math.sin(q[0]) * r);
    u.d.scale.setScalar(Math.max(0.05, Math.sin(Math.PI * f) * (0.6 + 0.6 * Math.sin(t * 5 + q[2]))));
    u.d.rotation.set(0, t + q[2], 0);
    u.d.updateMatrix();
    u.st.setMatrixAt(i, u.d.matrix);
  }
  u.st.instanceMatrix.needsUpdate = true;
}
