// Alternating small glowing footprint dents along a world direction, each fading into rising white sparks; params: length, spacing, dir [dx,dz]
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 7, sp = p.spacing || 0.7, n = Math.floor(L / sp);
  const d = p.dir || [0, 1], dl = Math.hypot(d[0], d[1]) || 1, dx = d[0] / dl, dz = d[1] / dl;
  const at = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  const geo = new THREE.CircleGeometry(0.13, 12); geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: '#ffd9a0', alphaMap: at, transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
  const pr = [];
  for (let i = 0; i < n; i++) {
    const s = i * sp + 0.5, side = i % 2 ? 1 : -1;
    const x = dx * s - dz * 0.14 * side, z = dz * s + dx * 0.14 * side;
    e.set(0, Math.atan2(dx, dz), 0); q.setFromEuler(e);
    const f = 1 - i / n * 0.7;
    pos.set(x, 0.05, z); sc.set(0.8 * f + 0.3, 1, 1.4 * f + 0.3);
    m.compose(pos, q, sc); mesh.setMatrixAt(i, m);
    pr.push([x, z, f]);
  }
  mesh.frustumCulled = false; mesh.renderOrder = 11; g.add(mesh);
  const k = 3, ns = n * k;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const qq = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - qq, 1.5) * 255; return [c, c, c]; });
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ns * 3), 3));
  const pts = new THREE.Points(pg, new THREE.PointsMaterial({ map: dt, color: '#fff0d0', size: 0.1, sizeAttenuation: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < ns; i++) seeds.push([ctx.range(0, 1), ctx.range(-0.15, 0.15), ctx.range(-0.15, 0.15), ctx.range(0.2, 0.4)]);
  g.userData = { pts, pr, seeds, k, mesh };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const s = u.seeds[i], pr = u.pr[Math.floor(i / u.k)], f = (s[0] + t * s[3]) % 1;
    a[i * 3] = pr[0] + s[1] + Math.sin(t + s[0] * 6) * 0.08 * f;
    a[i * 3 + 1] = 0.08 + f * 0.9 * pr[2];
    a[i * 3 + 2] = pr[1] + s[2];
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
  u.mesh.material.opacity = 0.4 + 0.07 * Math.sin(t * 1.2);
}
