// Shallow round bowl sunk in the ground with a pale rim. params: radius (m), depth (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 0.3, d = p.depth || 0.1;
  const c = p.color || '#d4d8e6';
  const pts = [];
  for (let i = 0; i <= 6; i++) {
    const a = i / 6 * Math.PI / 2;
    pts.push(new THREE.Vector2(r * Math.cos(a), -d * Math.sin(a) + 0.005));
  }
  pts.reverse();
  const bowl = new THREE.Mesh(new THREE.LatheGeometry(pts, 14), ctx.mat(c, { emissive: c, emissiveIntensity: 0.25, side: THREE.DoubleSide }));
  g.add(bowl);
  const rim = new THREE.Mesh(new THREE.RingGeometry(r * 0.98, r * 1.2, 14), ctx.mat('#9ea3b8', { side: THREE.DoubleSide }));
  rim.rotation.x = -Math.PI / 2;
  rim.position.y = 0.012;
  g.add(rim);
  return g;
}
