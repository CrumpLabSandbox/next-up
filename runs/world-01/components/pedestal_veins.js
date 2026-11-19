// Glowing silver helical veins winding up a tapered pedestal to its top. params: height, radius (base), turns, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1, r = p.radius || 0.5, turns = p.turns || 3;
  const c = p.color || '#dfe8ff';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 1.8 });
  g.userData.m = m;
  const arms = 3, n = 40;
  for (let k = 0; k < arms; k++) {
    let prev = null;
    for (let i = 0; i <= n; i++) {
      const f = i / n;
      const a = f * turns * Math.PI * 2 + k * Math.PI * 2 / arms;
      const rr = (r - (r * 0.1) * f) + 0.012 - 0.0 + (f > 0.95 ? -0.05 : 0);
      const pt = new THREE.Vector3(Math.sin(a) * rr, 0.03 + f * (h - 0.05), Math.cos(a) * rr);
      if (prev) {
        const d = pt.clone().sub(prev), L = d.length();
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.018, L, 0.012), m);
        b.position.copy(prev).add(pt).multiplyScalar(0.5);
        b.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
        g.add(b);
      }
      prev = pt;
    }
  }
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.6 + 0.8 * Math.sin(t * 1.8);
}