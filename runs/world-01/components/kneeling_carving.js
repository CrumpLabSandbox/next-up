// Glowing silver relief of a kneeling hooded figure on a round chamber wall. params: radius (m), angle (rad, 0=south, sin->x), y (m), height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 4.2, a = p.angle || 2.356, y = p.y || 1.0, h = p.height || 1;
  const m = ctx.mat('#dfe8ff', { emissive: '#bcd0ff', emissiveIntensity: 1.2 });
  const f = new THREE.Group();
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.28 * h, 0.7 * h, 6), m);
  body.position.set(0, 0.35 * h, 0); body.scale.z = 0.12;
  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.1 * h, 0.26 * h, 6), m);
  hood.position.set(0.06 * h, 0.78 * h, 0); hood.scale.z = 0.12; hood.rotation.z = -0.5;
  const knee = new THREE.Mesh(new THREE.BoxGeometry(0.4 * h, 0.08 * h, 0.03), m);
  knee.position.set(-0.1 * h, 0.04 * h, 0);
  f.add(body, hood, knee);
  f.position.set(Math.sin(a) * (R - 0.06), y - h * 0.5, Math.cos(a) * (R - 0.06));
  f.rotation.y = Math.atan2(-Math.sin(a), -Math.cos(a));
  g.add(f);
  g.userData.m = m;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.0 + 0.4 * Math.sin(t * 1.2);
}
