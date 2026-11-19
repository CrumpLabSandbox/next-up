// Thin dark post with a glass lantern and flickering amber flame leaning south. params: height, lean
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 2;
  const dark = ctx.mat('#1b1a1c');
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, h, 6), dark);
  post.position.y = h / 2;
  g.add(post);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.1, 6), dark);
  base.position.y = 0.05;
  g.add(base);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.12, 6), dark);
  cap.position.y = h + 0.3;
  g.add(cap);
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.04, 6), dark);
  plate.position.y = h - 0.02;
  g.add(plate);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.3, 6), ctx.mat('#ffd9a0', { transparent: true, opacity: 0.35, emissive: '#ff9a30', emissiveIntensity: 0.4 }));
  glass.position.y = h + 0.13;
  g.add(glass);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 6), ctx.mat('#ffb347', { emissive: '#ff8a1e', emissiveIntensity: 2 }));
  flame.position.y = h + 0.03;
  flame.geometry.translate(0, 0.08, 0);
  flame.name = 'flame';
  g.add(flame);
  const light = new THREE.PointLight('#ff9a40', 3, 25, 1.6);
  light.position.y = h + 0.15;
  g.add(light);
  return g;
}
export function update(obj, t, dt, p) {
  const f = obj.getObjectByName('flame');
  if (f) {
    const s = 1 + 0.15 * Math.sin(t * 13) + 0.1 * Math.sin(t * 7.3);
    f.scale.set(1, s, 1);
    f.rotation.x = (p && p.lean !== undefined ? p.lean : 0.45) + 0.08 * Math.sin(t * 2.1);
  }
}
