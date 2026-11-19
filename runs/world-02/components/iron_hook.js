// Tall black iron pole with curved hook reaching north and a short chain; params: height, reach, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 2.0, r = (p.reach || 0.8) / 2;
  const m = ctx.mat(p.color || '#0e0f14', { emissive: '#14151c', emissiveIntensity: 0.1 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, h, 6), m);
  pole.position.y = h / 2;
  g.add(pole);
  const arc = new THREE.Mesh(new THREE.TorusGeometry(r, 0.03, 5, 10, Math.PI), m);
  arc.rotation.y = Math.PI / 2;
  arc.position.set(0, h, -r);
  g.add(arc);
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 4), m);
  chain.position.set(0, h - 0.15, -2 * r);
  g.add(chain);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.15, 6), m);
  base.position.y = 0.05;
  g.add(base);
  return g;
}
