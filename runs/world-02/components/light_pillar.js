// Feathered pale gold pillar of light with round soft ember discs, base glow, water streak, amber mist; params: height, width, color, motes, tilt
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 25, W = p.width || 3, nm = p.motes || 54;
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const tex = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.6);
    const f = Math.min(1, v * 6) * (1 - v * 0.4) * (1 - sm(0.55, 0.85, v));
    const k = e * f * 255;
    return [k, k * 0.9, k * 0.62];
  });
  const pg = new THREE.Group();
  pg.rotation.z = -(p.tilt || 0) * Math.PI / 180;
  g.add(pg);
  const mk = (w, op, col) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H), new THREE.MeshBasicMaterial({ map: tex, color: col || p.color || '#ffd37a', transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
    m.position.y = H / 2;
    return m;
  };
  const a = mk(W, 0.3), b = mk(W, 0.3), c = mk(W * 0.4, 0.2);
  b.rotation.y = Math.PI / 2; c.rotation.y = Math.PI / 4;
  const h1 = mk(6, 0.12, '#ffd37a'), h2 = mk(6, 0.12, '#ffd37a');
  h2.rotation.y = Math.PI / 2;
  pg.add(h1); pg.add(h2); pg.add(a); pg.add(b); pg.add(c);
  const gt = ctx.dataTexture(64, 64, (u, v) => { const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - d, 2) * 255; return [k, k * 0.8, k * 0.45]; });
  const cg = new THREE.CircleGeometry(6, 28);
  cg.rotateX(-Math.PI / 2);
  const gl = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: gt, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  gl.position.y = 0.1;
  g.add(gl);
  const rt = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.4);
    const f = Math.pow(1 - v, 1.5) * Math.min(1, v * 8 + 0.2);
    const k = e * f * 255;
    return [k, k * 0.83, k * 0.48];
  });
  const rgeo = new THREE.PlaneGeometry(2, 18);
  rgeo.rotateX(-Math.PI / 2);
  rgeo.rotateY(Math.PI);
  rgeo.translate(0, 0, -9);
  const streak = new THREE.Mesh(rgeo, new THREE.MeshBasicMaterial({ map: rt, color: '#ffd37a', transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  streak.position.y = 0.14;
  g.add(streak);
  const mist = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffb347', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  mist.scale.set(8, 2, 1);
  mist.position.y = 1;
  g.add(mist);
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const sets = [];
  const sizes = [0.12, 0.17, 0.22], cols = ['#ffd37a', '#ffdd90', '#ffe6a8'];
  for (let s = 0; s < 3; s++) {
    const n = Math.ceil(nm / 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: cols[s], size: sizes[s], sizeAttenuation: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    pts.frustumCulled = false;
    const seeds = [];
    for (let i = 0; i < n; i++) seeds.push([ctx.range(0, 6.28), ctx.rng(), ctx.range(0.5, 1), ctx.range(0, 6), ctx.range(0.02, 0.06)]);
    pg.add(pts);
    sets.push({ pts: pts, seeds: seeds });
  }
  g.userData = { sets: sets, H: H, W: W, a: a, b: b, streak: streak };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  u.sets.forEach((s) => {
    const arr = s.pts.geometry.attributes.position.array;
    for (let i = 0; i < s.seeds.length; i++) {
      const q = s.seeds[i];
      const f = (q[1] + t * q[4]) % 1;
      const r = u.W * 0.4 * q[2];
      arr[i * 3] = Math.cos(q[0] + t * 0.3) * r;
      arr[i * 3 + 1] = f * u.H * 0.85;
      arr[i * 3 + 2] = Math.sin(q[0] + t * 0.3) * r;
    }
    s.pts.geometry.attributes.position.needsUpdate = true;
    s.pts.material.opacity = 0.8 + 0.1 * Math.sin(t * 2 + s.seeds[0][3]);
  });
  const o = 0.3 + 0.04 * Math.sin(t * 0.8);
  u.a.material.opacity = o; u.b.material.opacity = o;
  u.streak.material.opacity = 0.25 + 0.04 * Math.sin(t * 1.1);
}
