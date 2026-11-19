// Slender black post topped by a small iron cage. params: height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 2;
  const iron = ctx.mat(p.color || '#0c0c10');
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, h - 0.3, 6), iron);
  post.position.y = (h - 0.3) / 2;
  g.add(post);
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.12, 0.06, 8), iron);
  plate.position.y = h - 0.3;
  g.add(plate);
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2 + Math.PI / 4;
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.02), iron);
    bar.position.set(Math.cos(a) * 0.14, h - 0.12, Math.sin(a) * 0.14);
    g.add(bar);
  }
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.12, 8), iron);
  roof.position.y = h + 0.09;
  g.add(roof);
  return g;
}
