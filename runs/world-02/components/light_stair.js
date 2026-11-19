// Stair of glowing white steps running north (-Z) and rising; bright blue risers, dark undersides, brighter glow under first 6, last 4 fade, drifting motes; params: steps, run, rise, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const N = p.steps || 12, run = p.run || 1.25, rise = p.rise || 0.67, W = p.width || 1.8;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.85, c * 0.93, c]; });
  const mats = [], fades = [];
  const dm = new THREE.MeshBasicMaterial({ color: '#0b1030', transparent: true, opacity: 0.8, depthWrite: false, fog: false });
  for (let i = 0; i < N; i++) {
    const fade = i >= N - 4 ? 1 - (i - (N - 5)) / 4.5 : 1;
    const alt = i % 2 ? 0.85 : 1;
    fades.push(fade * alt);
    const tm = new THREE.MeshBasicMaterial({ color: '#eaf4ff', transparent: true, opacity: 0.95 * fade * alt, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const rm = new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.9 * fade, depthWrite: false, fog: false });
    const w = W * (1 - i / (N - 1) * 0.1);
    const tread = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, run * 0.88), tm);
    tread.position.set(0, i * rise, -i * run - run / 2);
    g.add(tread);
    const riser = new THREE.Mesh(new THREE.BoxGeometry(w, rise, 0.025), rm);
    riser.position.set(0, i * rise - rise / 2, -i * run);
    g.add(riser);
    const dk = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.3), dm);
    dk.position.set(0, i * rise - 0.2, -i * run + 0.02);
    g.add(dk);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#cfe0ff', transparent: true, opacity: (i < 6 ? 0.3 : 0.2) * fade, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    sp.scale.set(2.4, 1.0, 1);
    sp.position.set(0, i * rise + 0.1, -i * run - run / 2);
    g.add(sp);
    mats.push(tm);
  }
  const n = 30;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#dfe6ff', size: 0.12, sizeAttenuation: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false;
  g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(-0.6, 0.6), ctx.range(0, 6), ctx.range(0.02, 0.04), ctx.range(0.3, 1.2)]);
  g.userData = { mats: mats, fades: fades, N: N, pts: pts, seeds: seeds, run: run, rise: rise };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.N; i++) u.mats[i].opacity = 0.95 * u.fades[i] * (0.92 + 0.08 * Math.sin(t * 1.5 - i * 0.6));
  const a = u.pts.geometry.attributes.position.array, L = u.N * u.run;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 1;
    a[i * 3] = q[1] + Math.sin(t * 0.7 + q[2]) * 0.1;
    a[i * 3 + 1] = f * u.N * u.rise + q[4];
    a[i * 3 + 2] = -f * L;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
