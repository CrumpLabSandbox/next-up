// Hero door of white light: bars, big halo, starry interior with dark descending staircase, ground glow, streak toward -Z; params: height, width, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 3, W = p.width || 1.3, c = p.color || '#eaf4ff';
  const fm = ctx.mat(c, { emissive: c, emissiveIntensity: 2.4 });
  const t = 0.14;
  [-1, 1].forEach((s) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(t, H, t), fm);
    b.position.set(s * (W / 2 + t / 2), H / 2, 0);
    g.add(b);
  });
  const top = new THREE.Mesh(new THREE.BoxGeometry(W + t * 2, t, t), fm);
  top.position.y = H + t / 2 - 0.05;
  g.add(top);
  const tex = ctx.dataTexture(64, 128, (u, v) => {
    let k = 4 + 14 * v;
    const n = ctx.noise2(u * 60, v * 90);
    if (n > 0.88) k = 200;
    const sv = 1 - v;
    for (let i = 0; i < 6; i++) {
      const top0 = 0.5 - i * 0.07;
      const inset = 0.08 + i * 0.07;
      if (u > inset && u < 1 - inset && sv > top0 - 0.07 && sv < top0 - 0.02 + 0.0) { k = 2; }
      if (u > inset && u < 1 - inset && sv >= top0 - 0.02 && sv < top0 + 0.01) { k = 34; }
    }
    return [k * 0.7, k * 0.8, k + 10];
  });
  const inner = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
  inner.position.y = H / 2;
  g.add(inner);
  const ht = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2.2) * 255;
    return [k * 0.7, k * 0.85, k];
  });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.75, depthWrite: false, fog: false }));
  sp.scale.set(10, 11, 1);
  sp.position.y = H / 2;
  g.add(sp);
  const gg = new THREE.CircleGeometry(3.5, 32);
  gg.rotateX(-Math.PI / 2);
  const gl = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({ map: ht, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5, depthWrite: false, fog: false }));
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
  obj.userData.sp.material.opacity = 0.75 + 0.1 * Math.sin(t * 0.6);
  obj.userData.streak.material.opacity = 0.22 + 0.05 * Math.sin(t * 0.6);
}
