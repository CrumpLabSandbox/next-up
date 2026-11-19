// Hero door of white light: emissive bars, smooth halos, interior with 8 converging frost-lined steps descending, stars in upper part, blue glow at foot; params: height, width, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 3, W = p.width || 1.3, c = p.color || '#eaf4ff';
  const fm = ctx.mat(c, { emissive: c, emissiveIntensity: 2.8 });
  const t = 0.14;
  [-1, 1].forEach((s) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(t, H, t), fm);
    b.position.set(s * (W / 2 + t / 2), H / 2, 0);
    g.add(b);
  });
  const top = new THREE.Mesh(new THREE.BoxGeometry(W + t * 2, t, t), fm);
  top.position.y = H + t / 2 - 0.05;
  g.add(top);
  const lines = [];
  for (let i = 0; i < 8; i++) lines.push(0.05 + 0.5 * (1 - Math.pow(0.75, i)));
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    let r = 5 + 6 * v, gg = 8 + 7 * v, b = 20 + 12 * v;
    const hw = 0.46 * (1 - v / 0.62 * 0.78);
    const inside = Math.abs(u - 0.5) < hw && v < 0.6;
    if (inside) {
      r += 4; gg += 6; b += 14;
      for (let i = 0; i < 8; i++) {
        const th = 0.016 * (1 - i * 0.08);
        if (Math.abs(v - lines[i]) < th) { r = 104; gg = 110; b = 120; }
      }
    }
    if (v > 0.62 && ctx.noise2(u * 60, v * 90) > 0.88) { r = 200; gg = 205; b = 220; }
    const gl = Math.exp(-Math.pow((u - 0.5) / 0.2, 2)) * Math.max(0, 1 - v / 0.55) * 80;
    r += gl * 0.56; gg += gl * 0.82; b += gl;
    return [Math.min(255, r), Math.min(255, gg), Math.min(255, b)];
  });
  const inner = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
  inner.position.y = H / 2;
  g.add(inner);
  const ht = ctx.dataTexture(256, 256, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    let k = Math.pow(1 - d, 2.4) * 255;
    if (d > 0.97) k = 0;
    return [k * 0.7, k * 0.85, k];
  });
  ht.generateMipmaps = false;
  ht.minFilter = THREE.LinearFilter;
  ht.magFilter = THREE.LinearFilter;
  ht.needsUpdate = true;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.6, depthWrite: false, fog: false }));
  sp.scale.set(8, 9, 1);
  sp.position.y = H / 2;
  g.add(sp);
  const sp2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#6f8fff', blending: THREE.AdditiveBlending, transparent: true, opacity: 0.12, depthWrite: false, fog: false }));
  sp2.scale.set(16, 16, 1);
  sp2.position.y = H / 2;
  g.add(sp2);
  const gg2 = new THREE.CircleGeometry(3.5, 32);
  gg2.rotateX(-Math.PI / 2);
  const gl = new THREE.Mesh(gg2, new THREE.MeshBasicMaterial({ map: ht, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5, depthWrite: false, fog: false }));
  gl.position.y = 0.09;
  g.add(gl);
  const st = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.5);
    const f = Math.pow(1 - v, 1.5);
    const k = e * f * 255;
    return [k * 0.75, k * 0.89, k];
  });
  const sg = new THREE.PlaneGeometry(1.5, 12);
  sg.rotateX(-Math.PI / 2);
  sg.translate(0, 0, -6);
  const streak = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ map: st, color: '#bfe4ff', blending: THREE.AdditiveBlending, transparent: true, opacity: 0.22, depthWrite: false, fog: false }));
  streak.position.y = 0.12;
  g.add(streak);
  g.userData = { sp: sp, streak: streak };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.userData.sp.material.opacity = 0.6 + 0.07 * Math.sin(t * 0.6);
  obj.userData.streak.material.opacity = 0.22 + 0.05 * Math.sin(t * 0.6);
}
