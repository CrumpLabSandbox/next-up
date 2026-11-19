// Round soft golden embers falling like snow with sideways drift, dimmer at edges; params: count, radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 6, H = p.height || 9, N = p.count || 90;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const sets = [];
  const sizes = [0.12, 0.17, 0.22], cols = ['#ffd37a', '#ffdd90', '#ffe6a8'];
  for (let s = 0; s < 3; s++) {
    const n = Math.ceil(N / 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: cols[s], size: sizes[s], sizeAttenuation: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    pts.frustumCulled = false;
    const seeds = [];
    for (let i = 0; i < n; i++) {
      const a = ctx.range(0, 6.28), r = R * Math.sqrt(ctx.rng());
      seeds.push([Math.cos(a) * r, Math.sin(a) * r, ctx.rng(), ctx.range(0.03, 0.08), ctx.range(0, 6)]);
    }
    g.add(pts);
    sets.push({ pts: pts, seeds: seeds });
  }
  g.userData = { sets: sets, H: H };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.sets.forEach((s) => {
    const arr = s.pts.geometry.attributes.position.array;
    for (let i = 0; i < s.seeds.length; i++) {
      const q = s.seeds[i];
      const f = (q[2] + t * q[3]) % 1;
      arr[i * 3] = q[0] + Math.sin(t * 0.5 + q[4]) * 0.5;
      arr[i * 3 + 1] = u.H * (1 - f);
      arr[i * 3 + 2] = q[1] + Math.cos(t * 0.4 + q[4]) * 0.5;
    }
    s.pts.geometry.attributes.position.needsUpdate = true;
  });
}
