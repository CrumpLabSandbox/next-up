// Slender arched gold path ribbon running -Z, normal-blended so it reads against glare, darker edge lines, far 30% dissolves; params: length, width, rise, arch
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 35, R = p.rise || 5, A = p.arch || 1.5;
  const N = 48;
  const sm = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const tex = ctx.dataTexture(32, 64, (u, v) => {
    const e = sm((1 - Math.abs(u * 2 - 1)) / 0.4);
    const f = sm((1 - v) / 0.3) * Math.min(1, v * 20 + 0.6);
    const k = e * f * 255; return [k, k, k];
  });
  const edgeTex = ctx.dataTexture(4, 64, (u, v) => {
    const f = sm((1 - v) / 0.3); const k = f * 255; return [k, k, k];
  });
  const col = ctx.dataTexture(4, 32, (u, v) => [255, 159 + 35 * v, 88 + 34 * v]);
  function ribbon(w, y0, xo) {
    const pos = [], uv = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N, y = R * t + A * Math.sin(Math.PI * t) + y0, z = -L * t;
      pos.push(xo - w / 2, y, z, xo + w / 2, y, z); uv.push(0, t, 1, t);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); return geo;
  }
  const mk = (w, y0, o, xo) => new THREE.Mesh(ribbon(w, y0, xo), new THREE.MeshBasicMaterial({ map: col, alphaMap: tex, transparent: true, opacity: o, side: THREE.DoubleSide, depthWrite: false, fog: false }));
  const m1 = mk(1.6, 0, 0.45, 0), m2 = mk(0.8, 0.02, 0.5, 0);
  g.add(m1, m2);
  const em = (xo) => new THREE.Mesh(ribbon(0.05, 0.03, xo), new THREE.MeshBasicMaterial({ color: '#c8803f', alphaMap: edgeTex, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false, fog: false }));
  g.add(em(-0.4), em(0.4));
  const n = 40;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.5) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#ffc880', size: 0.12, sizeAttenuation: true, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng() * 0.7, ctx.range(-0.6, 0.6), ctx.range(0.1, 0.9), ctx.range(0.02, 0.05), ctx.range(0, 6)]);
  g.userData = { m1, m2, pts, seeds, L, R, A };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.m1.material.opacity = 0.45 + 0.04 * Math.sin(t * 1.3);
  u.m2.material.opacity = 0.5 + 0.04 * Math.sin(t * 2.1 + 1);
  const a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 0.7;
    a[i * 3] = q[1] + Math.sin(t * 0.8 + q[4]) * 0.1;
    a[i * 3 + 1] = u.R * f + u.A * Math.sin(Math.PI * f) + q[2] + 0.3 * Math.sin(t + q[4]);
    a[i * 3 + 2] = -u.L * f;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
