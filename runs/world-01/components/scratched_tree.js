// Tiny glowing scratched bare tree, faces local -Z (double sided). params: height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 0.15;
  const c = p.color || '#7dffa0';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 1.6, side: THREE.DoubleSide });
  g.userData.m = m;
  const bar = (w, hh, x, y, rz) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, hh, 0.004), m);
    b.position.set(x, y, 0);
    b.rotation.z = rz || 0;
    g.add(b);
  };
  bar(0.008, h, 0, 0);
  [[0.25, 0.5], [0.4, 0.45], [0.55, 0.35]].forEach(([f, w], i) => {
    bar(h * w, 0.005, h * w * 0.4, h * (f - 0.5), 0.7);
    bar(h * w, 0.005, -h * w * 0.4, h * (f - 0.5), -0.7);
  });
  bar(h * 0.3, 0.005, h * 0.1, h * 0.45, 0.6);
  bar(h * 0.3, 0.005, -h * 0.1, h * 0.45, -0.6);
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.3 + 0.5 * Math.sin(t * 1.4);
}
