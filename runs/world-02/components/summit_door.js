// Luminous door: thick bright frame blooming into feathered bars, indigo interior, halo, shaft, ground glow; faces +Z; params: height, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 4, W = p.width || 2.5;
  const bm = new THREE.MeshBasicMaterial({ color: '#eaf4ff', fog: false });
  const t = 0.12;
  const bar = (w, h, x, y) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.1), bm); m.position.set(x, y, 0); g.add(m); };
  bar(t, H, -W / 2, H / 2); bar(t, H, W / 2, H / 2); bar(W + t, t, 0, H); bar(W + t, t, 0, 0.02);
  const ft = ctx.dataTexture(32, 4, (u, v) => { const k = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.5) * 255; return [k, k, k]; });
  const fm = new THREE.MeshBasicMaterial({ map: ft, color: '#bfd8ff', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const fb = (w, h, x, y, rot) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), fm); m.position.set(x, y, -0.06); m.rotation.z = rot; g.add(m); };
  fb(0.4, H + 0.4, -W / 2, H / 2, 0); fb(0.4, H + 0.4, W / 2, H / 2, 0);
  fb(0.4, W + 0.4, 0, H, Math.PI / 2); fb(0.4, W + 0.4, 0, 0.02, Math.PI / 2);
  const gradTex = ctx.dataTexture(4, 32, (u, v) => [11 + 17 * (1 - v), 16 + 26 * (1 - v), 48 + 42 * (1 - v)]);
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(W - t, H - t), new THREE.MeshBasicMaterial({ map: gradTex, transparent: true, opacity: 0.6, depthWrite: false, fog: false }));
  sky.position.set(0, H / 2, -0.5); g.add(sky);
  const cols = 7, rows = 10, n = 70, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const cx = i % cols, cy = Math.floor(i / cols);
    pos[i * 3] = -W / 2 + 0.15 + (cx + ctx.range(0.15, 0.85)) / cols * (W - 0.3);
    pos[i * 3 + 1] = 0.3 + (cy + ctx.range(0.15, 0.85)) / rows * (H - 0.5);
    pos[i * 3 + 2] = -0.52;
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  g.add(new THREE.Points(sg, new THREE.PointsMaterial({ map: dt, color: '#ffffff', size: 0.09, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })));
  const gt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.85, c * 0.93, c]; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#cfe0ff', transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  halo.scale.set(H * 3, H * 3, 1); halo.position.set(0, H / 2, 0.2); g.add(halo);
  const sht = ctx.dataTexture(16, 32, (u, v) => { const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.3); const f = Math.sin(Math.PI * v); const k = e * f * 255; return [k, k, k]; });
  const shaft = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.9, 8), new THREE.MeshBasicMaterial({ map: sht, color: '#bfd8ff', transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
  shaft.position.set(0, 4, 0.3); g.add(shaft);
  const dg = new THREE.CircleGeometry(2.5, 28); dg.rotateX(-Math.PI / 2);
  const disc = new THREE.Mesh(dg, new THREE.MeshBasicMaterial({ map: gt, color: '#8fc0ff', transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  disc.position.set(0, 0.12, 1.6); g.add(disc);
  const rm = ctx.mat('#1a1c28', { emissive: '#3a3f5c', emissiveIntensity: 0.4 });
  for (let i = 0; i < 7; i++) {
    const r = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), rm);
    const a = -0.4 + i * 0.55;
    r.scale.set(ctx.range(1.2, 2), ctx.range(0.3, 0.5), ctx.range(1, 1.6));
    r.position.set(Math.sin(a) * 2.4, -0.1, Math.cos(a) * 1.6 + 0.2);
    r.rotation.y = ctx.range(0, 6); g.add(r);
  }
  g.userData = { halo: halo, disc: disc };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.halo.material.opacity = 0.4 + 0.05 * Math.sin(t * 1.1);
  u.disc.material.opacity = 0.4 + 0.06 * Math.sin(t * 1.1);
}
