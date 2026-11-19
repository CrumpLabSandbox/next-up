// Visible golden ribbon of embers running along -Z from local origin, arcing gently down, fading with distance, wide additive glow strip on the water, round embers streaming; params: length, count, color, drop (m total descent), water (local y of water)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 20, n = p.count || 110, drop = p.drop || 1.1, wy = p.water === undefined ? -1.47 : p.water;
  const col = p.color || '#ffd37a';
  const cy = (f) => -drop * Math.pow(f, 1.4);
  const tex = ctx.dataTexture(16, 64, (u, v) => { const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.2); const k = e * Math.pow(1 - v, 1.2) * Math.min(1, v * 12 + 0.3) * 255; return [k, k * 0.85, k * 0.55]; });
  const N = 24;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const f = i / N;
    [-1, 1].forEach((s, j) => { pos.push(s * 0.06, cy(f), -f * L); uv.push(j, f); });
    if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  const line = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: col, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
  g.add(line);
  const sg = new THREE.PlaneGeometry(0.8, L);
  sg.rotateX(-Math.PI / 2);
  sg.translate(0, 0, -L / 2);
  const sg2 = sg.attributes.uv;
  for (let i = 0; i < sg2.count; i++) sg2.setY(i, 1 - sg2.getY(i));
  const strip = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ map: tex, color: col, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
  strip.position.y = wy + 0.03;
  g.add(strip);
  const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.07, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffe0a0', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.rng(), ctx.range(0.03, 0.06), ctx.range(0, 6), ctx.range(-0.1, 0.1)]);
  g.add(im);
  g.userData = { im: im, seeds: seeds, d: new THREE.Object3D(), L: L, line: line, cy: cy };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[0] + t * q[1]) % 1;
    u.d.position.set(Math.sin(t * 0.8 + q[2] + f * 8) * 0.05 * f + q[3] * f, u.cy(f) + 0.03 + Math.cos(t + q[2]) * 0.04 * f, -f * u.L);
    u.d.scale.setScalar(Math.max(0.1, (1 - f) * Math.min(1, f * 20)) * (0.8 + 0.3 * Math.sin(t * 3 + q[2])));
    u.d.rotation.set(0, 0, 0);
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
  u.line.material.opacity = 0.75 + 0.08 * Math.sin(t * 1.5);
}
