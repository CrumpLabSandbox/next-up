// Spiral stair of pale steps with silver-lit edges descending into a shaft. params: steps, depth (m), radius (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.steps || 18, drop = (p.depth || 4.5) / n, R = p.radius || 0.6;
  const c = p.color || '#dfe8ff';
  const stone = ctx.mat('#b4b9cc', { emissive: '#6a7088', emissiveIntensity: 0.3 });
  const edge = ctx.mat(c, { emissive: c, emissiveIntensity: 1.8 });
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.02, R + 0.02, n * drop + 0.5, 14, 1, true), ctx.mat('#2a2d3c', { side: THREE.BackSide }));
  wall.position.y = -(n * drop) / 2 - 0.2;
  g.add(wall);
  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, n * drop + 0.3, 7), stone);
  col.position.y = -(n * drop) / 2 - 0.1;
  g.add(col);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 14), ctx.mat('#c8d4ff', { emissive: c, emissiveIntensity: 0.8 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -n * drop - 0.45;
  g.add(floor);
  for (let i = 0; i < n; i++) {
    const a = i * 0.45, y = -0.05 - i * drop;
    const s = new THREE.Group();
    const tread = new THREE.Mesh(new THREE.BoxGeometry(R - 0.08, 0.08, 0.32), stone);
    tread.position.x = (R + 0.08) / 2 - 0.0;
    const e = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.32), edge);
    e.position.set(R - 0.06, 0.05, 0);
    s.add(tread, e);
    s.position.set(Math.sin(a) * 0.0, y, Math.cos(a) * 0.0);
    s.rotation.y = a - Math.PI / 2;
    g.add(s);
  }
  return g;
}
export function update(obj, t) {
  obj.children.forEach((m, i) => {
    if (i < 3) return;
    m.children[1].material.emissiveIntensity = 1.5 + 0.5 * Math.sin(t * 1.5);
  });
}
