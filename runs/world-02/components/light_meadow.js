// Dark honey-to-plum meadow with large soft plum patches, tufts and drifting white sparks; top at y=0; params: radius, sparks, tufts
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 40, add = THREE.AdditiveBlending;
  const at = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = Math.min(1, s * 2.2); const c = k * k * (3 - 2 * k) * 255; return [c, c, c]; });
  const gradTex = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); return [138 - 32 * q, 82 - 20 * q, 64 + 26 * q]; });
  const base = new THREE.Mesh(new THREE.CircleGeometry(R, 40), new THREE.MeshBasicMaterial({ map: gradTex, color: '#ffffff', alphaMap: at, transparent: true, opacity: 1.0, depthWrite: false, fog: true }));
  base.rotation.x = -Math.PI / 2; base.renderOrder = 8; g.add(base);
  const glow = new THREE.Mesh(new THREE.CircleGeometry(R * 0.7, 32), new THREE.MeshBasicMaterial({ color: '#ffb870', alphaMap: at, transparent: true, opacity: 0.005, depthWrite: false, blending: add, fog: false }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.03; glow.renderOrder = 9; g.add(glow);
  const soft = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  function patch(color, op, d0, d1, i, cx, cz, rr) {
    const d = ctx.range(d0, d1), a = ctx.range(0, 6.283), r = Math.sqrt(ctx.rng()) * rr;
    const geo = new THREE.CircleGeometry(d / 2, 20); geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: color, alphaMap: soft, transparent: true, opacity: op, depthWrite: false, fog: false }));
    m.scale.set(1, 1, ctx.range(0.7, 1.1));
    m.position.set(cx + Math.cos(a) * r, 0.015 + i * 0.0015, cz + Math.sin(a) * r); m.renderOrder = 8; g.add(m);
  }
  for (let i = 0; i < 18; i++) patch('#6a3e5a', 0.3, 6, 12, i, 0, 0, R * 0.6);
  for (let i = 0; i < 10; i++) patch('#8a5240', 0.25, 6, 12, i + 18, 0, 0, R * 0.6);
  for (let i = 0; i < 12; i++) patch('#6a3e5a', 0.3, 5, 9, i + 32, -4, 8.9, 14);
  for (let i = 0; i < 24; i++) patch('#6a3e5a', 0.3, 5, 9, i + 44, 0.9, -2.9, 14);
  for (let i = 0; i < 20; i++) patch('#6a3e5a', 0.3, 10, 16, i + 68, 0.9, -2.9, 25);
  const n = p.tufts || 420, extra = 150;
  const cone = new THREE.ConeGeometry(0.12, 0.3, 5); cone.translate(0, 0.15, 0);
  const mesh = new THREE.InstancedMesh(cone, new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.4, depthWrite: false, fog: false }), n + extra);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), sc = new THREE.Vector3(), c = new THREE.Color();
  let placed = 0, guard = 0;
  function put(x, z) {
    e.set(ctx.range(-0.2, 0.2), ctx.range(0, 3), ctx.range(-0.2, 0.2)); q.setFromEuler(e);
    const s = ctx.range(0.8, 1.3);
    pos.set(x, 0.02, z); sc.set(s, ctx.range(1, 1.67), s);
    m.compose(pos, q, sc); mesh.setMatrixAt(placed, m);
    c.set(ctx.pick(['#a86a3c', '#8a5a40'])); mesh.setColorAt(placed, c);
    placed++;
  }
  while (placed < n && guard++ < n * 8) {
    const a = ctx.range(0, 6.283), r = Math.sqrt(ctx.rng()) * R * 0.8;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const fd = Math.hypot(x + 1.9, z - 3.8);
    if (fd < 12 && ctx.rng() > 0.25) continue;
    put(x, z);
  }
  for (let i = 0; i < extra; i++) {
    const a = ctx.range(0, 6.283), r = Math.sqrt(ctx.rng()) * 6;
    put(0.9 + Math.cos(a) * r, -2.9 + Math.sin(a) * r);
  }
  mesh.count = placed;
  mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false; mesh.renderOrder = 10; g.add(mesh);
  const ns = p.sparks || 70;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const qq = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - qq, 1.5) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ns * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#fff0d0', size: 0.16, sizeAttenuation: true, transparent: true, opacity: 0.6, blending: add, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < ns; i++) seeds.push([ctx.range(0, 6.283), Math.sqrt(ctx.rng()) * R * 0.6, ctx.range(0, 6), ctx.range(0.05, 0.12), ctx.range(0.3, 2.5)]);
  g.userData = { pts: pts, seeds: seeds, glow: glow };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const s = u.seeds[i];
    a[i * 3] = Math.cos(s[0]) * s[1] + Math.sin(t * s[3] + s[2]) * 2;
    a[i * 3 + 1] = s[4] + 0.4 * Math.sin(t * 0.5 + s[2]) + ((t * 0.1 + s[2]) % 1) * 0.6;
    a[i * 3 + 2] = Math.sin(s[0]) * s[1] + Math.cos(t * s[3] + s[2]) * 2;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
  u.glow.material.opacity = 0.005 + 0.001 * Math.sin(t * 0.6);
}
