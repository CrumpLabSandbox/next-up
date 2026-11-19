// Narrow black stone staircase in a trench along +Z descending, bright frost bars, glowing first treads, frost lip around the opening; open at the bottom; params: steps, rise, run, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.steps || 10, rise = p.rise || 0.3, run = p.run || 1, W = p.width || 1;
  const wallM = ctx.mat('#0b1226', { emissive: '#1c2542', emissiveIntensity: 0.35 });
  const rimM = new THREE.MeshBasicMaterial({ color: '#eaf4ff' });
  const mats = [];
  const base = (i) => (i < 4 ? 1.0 - 0.13 * i : 0.6 * Math.exp(-(i - 3) * 0.4) + 0.05);
  for (let i = 0; i < n; i++) {
    const top = -rise * (i + 1);
    const m = ctx.mat('#1a1c28', { emissive: '#8fb0e8', emissiveIntensity: base(i) });
    mats.push(m);
    const tread = new THREE.Mesh(new THREE.BoxGeometry(W, rise, run * ctx.range(0.97, 1)), m);
    tread.position.set(0, top - rise / 2, (i + 0.5) * run);
    g.add(tread);
    const rim = new THREE.Mesh(new THREE.BoxGeometry(W, 0.03, 0.05), rimM);
    rim.position.set(0, top + 0.016, (i + 1) * run - 0.05);
    g.add(rim);
    const h = -top + rise + 0.03;
    [-1, 1].forEach((s) => {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.12, h, run), wallM);
      w.position.set(s * (W / 2 + 0.06), 0.03 - h / 2, (i + 0.5) * run);
      g.add(w);
    });
  }
  const lipM = new THREE.MeshBasicMaterial({ color: '#eaf4ff' });
  [-1, 1].forEach((s) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 2), lipM);
    b.position.set(s * 0.65, 0.07, 1);
    g.add(b);
  });
  const cb = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.04, 0.08), lipM);
  cb.position.set(0, 0.07, 2);
  g.add(cb);
  g.userData.mats = mats;
  g.userData.base = base;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const m = obj.userData.mats, b = obj.userData.base;
  for (let i = 0; i < m.length; i++) {
    m[i].emissiveIntensity = b(i) * (1 + 0.12 * Math.sin(t * 1.3 - i * 0.3));
  }
}
