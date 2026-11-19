// Tall narrow arched rose-gold door (#e8946a to #ffc27a) with thin pale-gold outline, soft halo, faces +Z; params: height, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 2.5, W = p.width || 1.2;
  const add = THREE.AdditiveBlending;
  const shape = ctx.dataTexture(64, 128, (u, v) => {
    const x = Math.abs(u - 0.5) * 2;
    const y = v;
    const archY = 0.78;
    let d;
    if (y > archY) { const yy = (y - archY) / (1 - archY); d = 1 - Math.hypot(x, yy); } else d = 1 - x;
    const k = Math.max(0, Math.min(1, d * 4)) * Math.min(1, y * 8 + 0.2);
    const c = k * 255; return [c, c, c];
  });
  const col = ctx.dataTexture(4, 64, (u, v) => [232 + 23 * v, 148 + 46 * v, 106 + 16 * v]);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: col, alphaMap: shape, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  door.position.y = H / 2; g.add(door);
  const pts = [];
  const ay = H * 0.78, ah = H - ay;
  pts.push(new THREE.Vector3(-W / 2, 0.02, 0.01), new THREE.Vector3(-W / 2, ay * 0.5, 0.01), new THREE.Vector3(-W / 2, ay, 0.01));
  for (let i = 1; i < 16; i++) { const a = Math.PI - (i / 16) * Math.PI; pts.push(new THREE.Vector3(Math.cos(a) * W / 2, ay + Math.sin(a) * ah, 0.01)); }
  pts.push(new THREE.Vector3(W / 2, ay, 0.01), new THREE.Vector3(W / 2, ay * 0.5, 0.01), new THREE.Vector3(W / 2, 0.02, 0.01));
  const curve = new THREE.CatmullRomCurve3(pts);
  const outline = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.02, 5, false), new THREE.MeshBasicMaterial({ color: '#ffd37a', transparent: true, opacity: 0.85, fog: false }));
  g.add(outline);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.8, c * 0.6]; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffb36a', transparent: true, opacity: 0.3, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(W * 3.2, H * 1.5, 1); halo.position.set(0, H * 0.5, 0.05); g.add(halo);
  const fg = new THREE.CircleGeometry(1.4, 24); fg.rotateX(-Math.PI / 2);
  const spill = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: gt, color: '#e8946a', transparent: true, opacity: 0.2, depthWrite: false, blending: add, fog: false }));
  spill.position.set(0, 0.03, 1.0); spill.scale.set(0.8, 1, 1.2); g.add(spill);
  g.userData = { halo: halo, spill: spill };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, w = Math.sin(t * 0.9);
  u.halo.material.opacity = 0.3 + 0.04 * w;
  u.spill.material.opacity = 0.2 + 0.03 * w;
}