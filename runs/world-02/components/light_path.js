// Glowing road of pale light running north (-Z) from origin, brighter toward the far end, fading in from 0 at the near 2 m, feathered 4 m glow strip, centre line, 6 pairs of edge dots and rising round motes; params: length, width, endWidth, rise
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 25, W0 = p.width || 2.2, W1 = p.endWidth || 1.2, R = p.rise || 0;
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const wAt = (f) => W0 + (W1 - W0) * f;
  const nf = 2 / L;
  const tex = ctx.dataTexture(16, 64, (u, v) => { const e = Math.min(1, (1 - Math.abs(u * 2 - 1)) / 0.35); const k = e * sm(0, nf, v) * (0.55 + 0.45 * v) * (1 - sm(0.97, 1, v)) * 255; return [k * 0.85, k * 0.93, k]; });
  const gtex = ctx.dataTexture(16, 64, (u, v) => { const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.5); const k = e * sm(0, nf, v) * (0.5 + 0.5 * v) * (1 - sm(0.95, 1, v)) * 255; return [k, k, k]; });
  const strip = (wf, map, color, op, y) => {
    const N = 20, pos = [], uv = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const f = i / N;
      [-1, 1].forEach((s, j) => { pos.push(s * wf(f) / 2, R * f + y, -f * L); uv.push(j, f); });
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: map, color: color, transparent: true, opacity: op, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    g.add(m);
    return m;
  };
  strip(() => 4, gtex, '#8fc0ff', 0.3, -0.02);
  const rib = strip(wAt, tex, '#dfe6ff', 0.85, 0);
  strip(() => 0.07, tex, '#dfe6ff', 0.5, 0.02);
  const dotGeo = new THREE.SphereGeometry(0.06, 6, 4);
  const dots = new THREE.InstancedMesh(dotGeo, new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false }), 12);
  const d0 = new THREE.Object3D();
  for (let i = 0; i < 6; i++) {
    const f = 0.12 + i * 0.15;
    [-1, 1].forEach((s, j) => {
      d0.position.set(s * (wAt(f) / 2 + 0.1), R * f + 0.07, -f * L);
      d0.scale.set(1, 0.6, 1); d0.updateMatrix();
      dots.setMatrixAt(i * 2 + j, d0.matrix);
    });
  }
  g.add(dots);
  const n = 80;
  const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.025, 6, 4), new THREE.MeshBasicMaterial({ color: '#eaf4ff', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), i % 2 ? 1 : -1, ctx.range(0, 6), ctx.range(0.01, 0.03), ctx.rng()]);
  g.add(im);
  g.userData = { rib: rib, im: im, seeds: seeds, d: new THREE.Object3D(), L: L, R: R, wAt: wAt, sm: sm };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], f = (q[0] + t * q[3]) % 1;
    const h = (q[4] + t * 0.15) % 1;
    u.d.position.set(q[1] * u.wAt(f) * 0.5 + Math.sin(t + q[2]) * 0.05, u.R * f + 0.05 + 0.3 * h, -f * u.L);
    u.d.scale.setScalar(Math.max(0.05, (1 - u.sm(0.8, 1, f)) * Math.sin(Math.PI * h) * (0.8 + 0.3 * Math.sin(t * 2 + q[2]))));
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
  u.rib.material.opacity = 0.85 + 0.05 * Math.sin(t * 1.3);
}
