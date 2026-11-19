// Tiny glowing white two-pillar gate drawn on a tilted mirror at its far north end. params: radius (m), tilt
export function build(THREE, p, ctx) {
  const root = new THREE.Group();
  const g = new THREE.Group();
  root.add(g);
  g.rotation.x = p.tilt || 0;
  const R = p.radius || 0.125;
  const m = ctx.mat('#ffffff', { emissive: '#e8f0ff', emissiveIntensity: 2.2 });
  const h = 0.024, w = 0.0022, gap = 0.009;
  [-1, 1].forEach(s => {
    const pil = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), m);
    pil.position.set(s * gap, 0.022 + h / 2, -R * 0.9);
    g.add(pil);
  });
  const cap = new THREE.Mesh(new THREE.BoxGeometry(gap * 2 + w * 3, w, w), m);
  cap.position.set(0, 0.022 + h, -R * 0.9);
  g.add(cap);
  root.userData.m = m;
  return root;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 2.0 + 0.8 * Math.sin(t * 1.6);
}
