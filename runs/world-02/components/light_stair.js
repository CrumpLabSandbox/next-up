// Stair of glowing white steps running north (-Z) and rising, fading with distance; params: steps, run, rise, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const N = p.steps || 12, run = p.run || 1.25, rise = p.rise || 0.67, W = p.width || 1.5;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.85, c * 0.93, c]; });
  const mats = [];
  for (let i = 0; i < N; i++) {
    const f = i / (N - 1);
    const fade = 1 - Math.pow(f, 1.6) * 0.95;
    const tm = new THREE.MeshBasicMaterial({ color: '#eaf4ff', transparent: true, opacity: 0.9 * fade, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const rm = new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.35 * fade, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const tread = new THREE.Mesh(new THREE.BoxGeometry(W * (1 - f * 0.1), 0.06, run * 0.92), tm);
    tread.position.set(0, i * rise, -i * run - run / 2);
    g.add(tread);
    const riser = new THREE.Mesh(new THREE.BoxGeometry(W * (1 - f * 0.1), rise, 0.03), rm);
    riser.position.set(0, i * rise - rise / 2, -i * run);
    g.add(riser);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#cfe0ff', transparent: true, opacity: 0.35 * fade, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    sp.scale.set(2.4, 1.2, 1);
    sp.position.set(0, i * rise + 0.1, -i * run - run / 2);
    g.add(sp);
    mats.push(tm);
  }
  g.userData = { mats: mats, N: N };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.N; i++) {
    const f = i / (u.N - 1);
    const fade = 1 - Math.pow(f, 1.6) * 0.95;
    u.mats[i].opacity = fade * (0.8 + 0.15 * Math.sin(t * 1.5 - i * 0.6));
  }
}
