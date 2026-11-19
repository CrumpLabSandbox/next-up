// Round smooth rust-orange ledge ringed by tall curving cliff wall, open sky. Origin at floor center. params: radius (m), wallHeight (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 7, H = p.wallHeight || 8;
  const col = p.color || '#a8581f';
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 32), ctx.mat('#b8682a', { side: THREE.DoubleSide }));
  floor.rotation.x = -Math.PI / 2; g.add(floor);
  const geo = new THREE.CylinderGeometry(R + 1.5, R, H, 32, 3, true);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), y = pos.getY(i);
    const a = Math.atan2(z, x);
    const k = (y + H / 2) / H;
    const n = ctx.noise2(Math.cos(a) * 2 + 5, Math.sin(a) * 2 + 5);
    const r = 1 + k * 0.12 * (n - 0.5) * 2;
    pos.setX(i, x * r); pos.setZ(i, z * r);
    if (k > 0.99) pos.setY(i, y + (n - 0.5) * 1.2);
  }
  geo.computeVertexNormals();
  const wall = new THREE.Mesh(geo, ctx.mat(col, { side: THREE.DoubleSide }));
  wall.position.y = H / 2; g.add(wall);
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(R + 1.6, R + 1.7, 0.4, 32, 1, true), ctx.mat('#8a4416', { side: THREE.DoubleSide }));
  rim.position.y = H * 0.55; g.add(rim);
  for (let i = 0; i < 10; i++) {
    const a = ctx.range(0, 6.28), d = ctx.range(1, R - 1);
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(ctx.range(0.1, 0.25), 0), ctx.mat('#c47a3a'));
    s.position.set(Math.cos(a) * d, 0.05, Math.sin(a) * d); s.scale.y = 0.4; g.add(s);
  }
  return g;
}
