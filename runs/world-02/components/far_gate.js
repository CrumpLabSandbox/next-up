// Round golden gate; open eye with gold lens, see-through center, six soft rays; faces +Z; params: radius (m), open (0-1)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.8, open = p.open === undefined ? 0.5 : p.open;
  const add = THREE.AdditiveBlending;
  const gt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.88, c * 0.6]; });
  const rayTex = ctx.dataTexture(16, 32, (u, v) => { const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.5); const k = e * (1 - v) * 255; return [k, k * 0.83, k * 0.48]; });
  const glowDisc = new THREE.Mesh(new THREE.CircleGeometry(R * 1.25, 28), new THREE.MeshBasicMaterial({ map: gt, color: '#fff2d0', transparent: true, opacity: 0.2, depthWrite: false, blending: add, fog: false }));
  glowDisc.position.z = -0.05; g.add(glowDisc);
  const lid = new THREE.Mesh(new THREE.CircleGeometry(R * 0.78, 28), new THREE.MeshBasicMaterial({ color: '#ffd37a', transparent: true, opacity: 0.4, depthWrite: false, fog: false }));
  lid.scale.set(0.95, open * 0.2, 1); lid.position.z = 0.01; g.add(lid);
  const core = new THREE.Mesh(new THREE.CircleGeometry(R * 0.78, 28), new THREE.MeshBasicMaterial({ color: '#fff2d0', transparent: true, opacity: 0.35, depthWrite: false, fog: false }));
  core.scale.set(0.6, open * 0.1, 1); core.position.z = 0.02; g.add(core);
  g.add(new THREE.Mesh(new THREE.TorusGeometry(R, 0.09, 6, 36), new THREE.MeshBasicMaterial({ color: '#ffe7b0', fog: false })));
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(R * 1.2, 0.04, 4, 40), new THREE.MeshBasicMaterial({ color: '#ffd37a', transparent: true, opacity: 0.3, depthWrite: false, blending: add, fog: false }));
  g.add(ring2);
  const rays = [];
  for (let i = 0; i < 6; i++) {
    const geo = new THREE.PlaneGeometry(0.15, 4); geo.translate(0, 2, 0);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: rayTex, color: '#ffd37a', transparent: true, opacity: 0.14, depthWrite: false, blending: add, side: THREE.DoubleSide, fog: false }));
    m.rotation.z = (i / 6) * Math.PI * 2 + 0.3; m.position.z = -0.02; g.add(m); rays.push(m);
  }
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd37a', transparent: true, opacity: 0.25, depthWrite: false, blending: add, fog: false }));
  sp.scale.set(R * 6, R * 6, 1); sp.position.z = -0.1; g.add(sp);
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const n = 12;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#ffd37a', size: 0.2, sizeAttenuation: true, transparent: true, opacity: 0.9, blending: add, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(0, 6.28), ctx.range(0.8, 2.6) * R, ctx.range(0.04, 0.08)]);
  g.userData = { sp: sp, ring2: ring2, pts: pts, seeds: seeds, lid: lid, core: core, rays: rays, open: open };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, w = Math.sin(t * 0.8);
  u.sp.material.opacity = 0.25 + 0.04 * w;
  u.ring2.material.opacity = 0.3 + 0.06 * w;
  u.lid.scale.y = u.open * 0.2 * (1 + 0.04 * Math.sin(t * 0.5));
  u.core.scale.y = u.open * 0.1;
  for (let i = 0; i < u.rays.length; i++) u.rays[i].material.opacity = 0.14 * (0.8 + 0.2 * Math.sin(t * 0.7 + i));
  const a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 1, r = q[2] * (1 - f);
    a[i * 3] = Math.cos(q[1]) * r;
    a[i * 3 + 1] = Math.sin(q[1]) * r;
    a[i * 3 + 2] = 6 * (1 - f);
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
