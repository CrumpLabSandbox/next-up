// Cavern under the ice opening: dim floor, low south edge, soft side walls, star-mirroring pool, endless feathered water to the south with round sparkle discs thinning with distance and a silver sheen toward the pillar, ripples, amber mist; origin at pool center on floor level; params: radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 6;
  const floor = new THREE.Mesh(new THREE.BoxGeometry(16.6, 0.2, 16.6), ctx.mat('#141b33', { emissive: '#141b33', emissiveIntensity: 0.3 }));
  floor.position.y = -0.12;
  g.add(floor);
  const wm = ctx.mat('#141b33', { emissive: '#141b33', emissiveIntensity: 0.3 });
  const wall = (w, h, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wm);
    m.position.set(x, h / 2 - 0.05, z);
    g.add(m);
  };
  wall(0.3, 3.05, 16.6, -8.15, 0); wall(0.3, 3.05, 16.6, 8.15, 0); wall(16.6, 0.5, 0.3, 0, 8.15);
  wall(7.3, 3.05, 0.3, -4.35, -8.15); wall(7.3, 3.05, 0.3, 4.35, -8.15);
  const gt = ctx.dataTexture(64, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 0.6);
    const k = Math.pow(Math.sin(Math.PI * v), 1.3) * e * 255;
    return [k * 0.29, k * 0.35, k * 0.54];
  });
  const wallGlow = (x, z, ry, w) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, 7), new THREE.MeshBasicMaterial({ map: gt, color: '#2a3558', transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.set(x, 3, z);
    m.rotation.y = ry;
    g.add(m);
  };
  wallGlow(-7.95, 0, Math.PI / 2, 16); wallGlow(7.95, 0, Math.PI / 2, 16);
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const f = Math.pow(1 - d, 1.5);
    let r = 42 + 32 * f, gg = 61 + 29 * f, b = 106 + 32 * f;
    if (ctx.noise2(u * 90, v * 90) > 0.72) { r = 225; gg = 232; b = 255; }
    return [r * 0.9, gg * 0.9, b * 0.95];
  });
  const pg = new THREE.CircleGeometry(R, 40);
  pg.rotateX(-Math.PI / 2);
  const pm = new THREE.MeshBasicMaterial({ map: tex, fog: false });
  const pool = new THREE.Mesh(pg, pm);
  pool.position.y = 0.05;
  g.add(pool);
  const feather = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.min(1, (1 - d) / 0.45) * 255;
    return [k, k, k];
  });
  const wg = new THREE.CircleGeometry(40, 40);
  wg.rotateX(-Math.PI / 2);
  const water = new THREE.Mesh(wg, new THREE.MeshBasicMaterial({ color: '#1f2b52', alphaMap: feather, transparent: true, depthWrite: false, fog: true }));
  water.position.set(0, 0.04, 15);
  g.add(water);
  // silver sheen brightening toward the pillar (south)
  const sg = new THREE.PlaneGeometry(36, 34);
  sg.rotateX(-Math.PI / 2);
  const sheen = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: '#4a5a8a', alphaMap: feather, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sheen.position.set(0, 0.06, 24);
  g.add(sheen);
  // round sparkle discs, thinning beyond 20 m
  const sn2 = 170;
  const stars = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 0.01, 6), new THREE.MeshBasicMaterial({ color: '#cfd8f5', fog: true }), sn2);
  const dd = new THREE.Object3D();
  let placed = 0, tries = 0;
  while (placed < sn2 && tries < 4000) {
    tries++;
    let x = ctx.range(-30, 30), z = ctx.range(-6, 40);
    const dist = Math.hypot(x, z);
    if (dist < R + 0.6) continue;
    if (dist > 20 && ctx.rng() > Math.max(0, 1 - (dist - 20) / 14)) continue;
    dd.position.set(x, 0.055, z);
    dd.scale.setScalar(ctx.range(0.03, 0.06));
    dd.scale.y = 1;
    dd.updateMatrix();
    stars.setMatrixAt(placed++, dd.matrix);
  }
  dd.scale.set(0, 0, 0); dd.updateMatrix();
  for (let i = placed; i < sn2; i++) stars.setMatrixAt(i, dd.matrix);
  g.add(stars);
  const rg = new THREE.RingGeometry(R, R + 0.3, 40, 1, -Math.PI / 6, Math.PI * 4 / 3);
  rg.rotateX(-Math.PI / 2);
  const rim = new THREE.Mesh(rg, ctx.mat('#a9b1c4', { emissive: '#a9b1c4', emissiveIntensity: 0.8 }));
  rim.position.y = 0.06;
  g.add(rim);
  const rings = [];
  const ringG = new THREE.RingGeometry(0.96, 1, 48);
  ringG.rotateX(-Math.PI / 2);
  [1.5, 3, 4.5].forEach((r, i) => {
    const m = new THREE.Mesh(ringG, new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.15, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.y = 0.08;
    m.scale.set(r, 1, r);
    m.userData = { r: r, i: i };
    g.add(m);
    rings.push(m);
  });
  const sn = 12;
  const sp = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.06, 0), new THREE.MeshBasicMaterial({ color: '#e8f4ff', fog: false }), sn);
  const d = new THREE.Object3D();
  for (let i = 0; i < sn; i++) {
    const a = ctx.range(0, 6.28), r = Math.sqrt(ctx.rng()) * (R - 0.4);
    d.position.set(Math.cos(a) * r, 0.09, Math.sin(a) * r);
    d.scale.set(1, 0.4, 1);
    d.updateMatrix();
    sp.setMatrixAt(i, d.matrix);
  }
  g.add(sp);
  const gn = 80;
  const gl = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.04, 0), new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false }), gn);
  for (let i = 0; i < gn; i++) {
    let x, y, z;
    const k = ctx.rng();
    if (k < 0.6) { x = ctx.range(-8, 8); z = ctx.range(-8, 8); y = 0.03; if (Math.hypot(x, z) < R + 0.4) { x = 7.5 * Math.sign(x || 1); } }
    else { y = ctx.range(0.2, 2.8); x = ctx.rng() < 0.5 ? -8 : 8; z = ctx.range(-8, 8); }
    d.position.set(x, y, z);
    d.scale.setScalar(ctx.range(0.6, 1.5));
    d.updateMatrix();
    gl.setMatrixAt(i, d.matrix);
  }
  g.add(gl);
  const mt = ctx.dataTexture(64, 64, (u, v) => {
    const dist = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - dist, 2) * 255;
    return [k, k * 0.81, k * 0.6];
  });
  const mists = [];
  for (let i = 0; i < 6; i++) {
    const cg = new THREE.CircleGeometry(ctx.range(1.8, 3), 20);
    cg.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: mt, color: '#ffcf9a', transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    const a = ctx.range(0, 6.28), r = ctx.range(0, R * 0.8);
    m.position.set(Math.cos(a) * r, 0.12 + i * 0.05, Math.sin(a) * r);
    m.userData = { a: a, r: r, s: ctx.range(0.1, 0.25), ph: ctx.range(0, 6) };
    g.add(m);
    mists.push(m);
  }
  const wmists = [];
  const bt = ctx.dataTexture(64, 64, (u, v) => {
    const dist = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - dist, 2) * 255;
    return [k * 0.44, k * 0.56, k * 0.82];
  });
  for (let i = 0; i < 4; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: bt, color: '#6f8fd0', transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    s.scale.set(5, 3, 1);
    s.userData = { z0: -6 + i * 4, ph: i * 1.7, sp: ctx.range(0.15, 0.3) };
    s.position.set(-7, 0.8, s.userData.z0);
    g.add(s);
    wmists.push(s);
  }
  g.userData = { mists: mists, wmists: wmists, pm: pm, rings: rings, gl: gl };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  u.mists.forEach((m) => {
    const q = m.userData, a = q.a + t * q.s * 0.2;
    m.position.x = Math.cos(a) * q.r;
    m.position.z = Math.sin(a) * q.r;
    m.material.opacity = 0.17 + 0.07 * Math.sin(t * 0.7 + q.ph);
  });
  u.wmists.forEach((s) => {
    const q = s.userData;
    s.position.z = ((q.z0 + 8 + t * q.sp * 2) % 16) - 8;
    s.position.y = 0.8 + 0.2 * Math.sin(t * 0.4 + q.ph);
    s.material.opacity = 0.08 * Math.sin(Math.PI * ((s.position.z + 8) / 16));
  });
  u.rings.forEach((m) => {
    const q = m.userData;
    const f = (t * 0.06 + q.i / 3) % 1;
    const r = 0.5 + f * 5;
    m.scale.set(r, 1, r);
    m.material.opacity = 0.15 * Math.sin(Math.PI * f);
  });
  u.pm.color.setScalar(0.9 + 0.1 * Math.sin(t * 1.4));
  u.gl.material.color.setScalar(0.75 + 0.25 * Math.sin(t * 1.9));
}
