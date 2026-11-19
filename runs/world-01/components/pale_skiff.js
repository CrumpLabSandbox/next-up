// Small narrow rowing boat, length along local X, upswept prow at +X, oar across seats. params: length (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = (p.length || 3) / 2;
  const c = p.color || '#d8d0bc';
  const wood = ctx.mat(c, { emissive: '#4a4638', emissiveIntensity: 0.35 });
  const outline = (k) => {
    const s = new THREE.Shape();
    s.moveTo(-L, 0);
    s.lineTo(-L * 0.7, 0.42 * k);
    s.lineTo(L * 0.7, 0.42 * k);
    s.lineTo(L, 0);
    s.lineTo(L * 0.7, -0.42 * k);
    s.lineTo(-L * 0.7, -0.42 * k);
    s.closePath();
    return s;
  };
  const rim = outline(1);
  const hole = new THREE.Path();
  const k = 0.82;
  hole.moveTo(-L * k, 0); hole.lineTo(-L * 0.7 * k, -0.33); hole.lineTo(L * 0.7 * k, -0.33); hole.lineTo(L * k, 0); hole.lineTo(L * 0.7 * k, 0.33); hole.lineTo(-L * 0.7 * k, 0.33); hole.closePath();
  rim.holes.push(hole);
  const wallGeo = new THREE.ExtrudeGeometry(rim, { depth: 0.3, bevelEnabled: false });
  wallGeo.rotateX(-Math.PI / 2);
  const walls = new THREE.Mesh(wallGeo, wood);
  walls.position.y = -0.1;
  g.add(walls);
  const floorGeo = new THREE.ExtrudeGeometry(outline(0.95), { depth: 0.05, bevelEnabled: false });
  floorGeo.rotateX(-Math.PI / 2);
  const floor = new THREE.Mesh(floorGeo, ctx.mat('#b8b09c'));
  floor.position.y = -0.08;
  g.add(floor);
  const prow = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.12), wood);
  prow.position.set(L - 0.1, 0.3, 0);
  prow.rotation.z = 0.7;
  g.add(prow);
  const stern = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.12), wood);
  stern.position.set(-L + 0.08, 0.25, 0);
  stern.rotation.z = -0.5;
  g.add(stern);
  [-0.4, 0.5].forEach(x => {
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.78), wood);
    seat.position.set(x, 0.1, 0);
    g.add(seat);
  });
  const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.3, 6), ctx.mat('#a89c80'));
  oar.rotation.x = Math.PI / 2;
  oar.rotation.z = 0.15;
  oar.position.set(0.05, 0.16, 0);
  g.add(oar);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.14), ctx.mat('#a89c80'));
  blade.position.set(0.05 + 0.1, 0.16, 0.65);
  g.add(blade);
  return g;
}
