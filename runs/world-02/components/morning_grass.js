// Dewy green grass disc with soft light/dark patches, tufts, tiny flowers and rising white sparks; top at y=0; params: radius, tufts, sparks, hx, hz (hill exclusion)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 60, add = THREE.AdditiveBlending;
  const hx = p.hx || 0, hz = p.hz || 0, HR = 13;
  const geo = new THREE.CircleGeometry(R, 48); geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), r = Math.hypot(x, z) / R;
    const n = ctx.noise2(x * 0.08, z * 0.08);
    c.set('#6fb858').lerp(new THREE.Color('#9ad675'), n * 0.8).lerp(new THREE.Color('#bcd8b8'), Math.pow(r, 3));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.add(new THREE.Mesh(geo, ctx.mat('#ffffff', { vertexColors: true })));
  const soft = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  function patch(color, op, i) {
    const d = ctx.range(6, 12), a = ctx.range(0, 6.283), r = Math.sqrt(ctx.rng()) * 32;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.hypot(x - hx, z - hz) < HR) return;
    const pg = new THREE.CircleGeometry(d / 2, 20); pg.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ color: color, alphaMap: soft, transparent: true, opacity: op, depthWrite: false }));
    m.scale.set(1, 1, ctx.range(0.7, 1.1));
    m.position.set(x, 0.02 + i * 0.001, z); m.renderOrder = 2; g.add(m);
  }
  for (let i = 0; i < 20; i++) patch('#4f9a48', 0.25, i);
  for (let i = 0; i < 12; i++) patch('#b8ea8c', 0.2, i + 20);
  const n = p.tufts || 700;
  const cone = new THREE.ConeGeometry(0.06, 0.28, 4); cone.translate(0, 0.14, 0);
  const mesh = new THREE.InstancedMesh(cone, ctx.mat('#ffffff'), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), ps = new THREE.Vector3(), sc = new THREE.Vector3(), tc = new THREE.Color();
  const c0 = new THREE.Color('#5aa84c'), c1 = new THREE.Color('#8ed46e');
  let k = 0, guard = 0;
  while (k < n && guard++ < n * 8) {
    const a = ctx.range(0, 6.283), r = ctx.rng() * 42;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.hypot(x - hx, z - hz) < HR) continue;
    e.set(ctx.range(-0.25, 0.25), ctx.range(0, 3), ctx.range(-0.25, 0.25)); q.setFromEuler(e);
    const h = ctx.range(0.2, 0.35) / 0.28, w = ctx.range(0.8, 1.3);
    ps.set(x, 0, z); sc.set(w, h, w);
    m.compose(ps, q, sc); mesh.setMatrixAt(k, m);
    tc.copy(c0).lerp(c1, ctx.rng()); mesh.setColorAt(k, tc);
    k++;
  }
  mesh.count = k; mesh.frustumCulled = false; g.add(mesh);
  const nf = 40;
  const fm = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.04, 0), new THREE.MeshBasicMaterial({ color: '#ffffff' }), nf);
  let fk = 0; guard = 0;
  while (fk < nf && guard++ < 400) {
    const a = ctx.range(0, 6.283), r = Math.sqrt(ctx.rng()) * 28;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (Math.hypot(x - hx, z - hz) < HR) continue;
    q.identity(); ps.set(x, 0.12, z); sc.set(1, 1, 1);
    m.compose(ps, q, sc); fm.setMatrixAt(fk, m);
    tc.set(fk % 2 ? '#fff6d0' : '#ffe070'); fm.setColorAt(fk, tc);
    fk++;
  }
  fm.count = fk; fm.frustumCulled = false; g.add(fm);
  const ns = p.sparks || 60;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const qq = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const kk = Math.pow(1 - qq, 1.5) * 255; return [kk, kk, kk]; });
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ns * 3), 3));
  const pts = new THREE.Points(pg, new THREE.PointsMaterial({ map: dt, color: '#ffffff', size: 0.14, transparent: true, opacity: 0.6, blending: add, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < ns; i++) seeds.push([ctx.range(0, 6.283), Math.sqrt(ctx.rng()) * 25, ctx.range(0, 1), ctx.range(0.05, 0.12)]);
  g.userData = { pts, seeds };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const s = u.seeds[i], f = (t * s[3] + s[2]) % 1;
    a[i * 3] = Math.cos(s[0]) * s[1]; a[i * 3 + 1] = 0.1 + f * 1.2; a[i * 3 + 2] = Math.sin(s[0]) * s[1];
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
