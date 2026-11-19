// Three tiny glowing scratched pictures (wave, tree, spiral) at the ends of diverging lines on a round chamber wall. params: radius (m), angle (rad, 0=south, sin->x), y (m, base height)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 4.2, a = p.angle || 2.5, y = p.y || 1.0;
  const m = ctx.mat('#dfe8ff', { emissive: '#bcd0ff', emissiveIntensity: 1.4 });
  g.userData.m = m;
  const f = new THREE.Group();
  const line = (x0, y0, x1, y1) => {
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy);
    const b = new THREE.Mesh(new THREE.BoxGeometry(L, 0.012, 0.008), m);
    b.position.set((x0 + x1) / 2, (y0 + y1) / 2, 0);
    b.rotation.z = Math.atan2(dy, dx);
    f.add(b);
  };
  const box = (w, h, x, yy, rz) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.008), m);
    b.position.set(x, yy, 0);
    b.rotation.z = rz || 0;
    f.add(b);
  };
  const ends = [[-0.45, 0.35], [-0.85, 0.12], [-1.2, -0.15]];
  ends.forEach(e => line(-0.2, 0.05, e[0], e[1] - 0.12));
  // wave
  let [x, yy] = ends[0];
  for (let k = 0; k < 3; k++) box(0.08, 0.012, x - 0.1 + k * 0.1, yy + (k % 2 ? 0.03 : -0.03), k % 2 ? -0.5 : 0.5);
  // tree
  [x, yy] = ends[1];
  box(0.012, 0.18, x, yy);
  box(0.1, 0.012, x, yy + 0.03, 0.5);
  box(0.1, 0.012, x, yy + 0.03, -0.5);
  box(0.07, 0.012, x, yy + 0.08, 0.5);
  box(0.07, 0.012, x, yy + 0.08, -0.5);
  // spiral
  [x, yy] = ends[2];
  const pts = [];
  for (let i = 0; i < 24; i++) {
    const t = i / 23 * Math.PI * 4;
    pts.push([x + Math.cos(t) * (0.01 + t * 0.006), yy + Math.sin(t) * (0.01 + t * 0.006)]);
  }
  for (let i = 1; i < pts.length; i++) line(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]);
  f.position.set(Math.sin(a) * (R - 0.06), y, Math.cos(a) * (R - 0.06));
  f.rotation.y = Math.atan2(-Math.sin(a), -Math.cos(a));
  g.add(f);
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.2 + 0.5 * Math.sin(t * 1.5);
}
