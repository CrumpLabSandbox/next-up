// Smooth glowing round wall with low dome, seen from inside. params: radius, wallHeight, dim (1 = dusky amber)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 5, H = p.wallHeight || 3;
  const d = !!p.dim;
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 32, 1, true), ctx.mat(d ? '#b88a4c' : '#f0d9a8', { emissive: d ? '#7a4a1c' : '#d9a860', emissiveIntensity: d ? 0.5 : 0.9, side: THREE.BackSide }));
  wall.position.y = H / 2; g.add(wall);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 32, 8, 0, Math.PI * 2, 0, Math.PI / 2), ctx.mat(d ? '#c89a58' : '#ffe6b0', { emissive: d ? '#8a5a24' : '#f0c070', emissiveIntensity: d ? 0.55 : 1.1, side: THREE.BackSide }));
  dome.scale.y = 0.4; dome.position.y = H; g.add(dome);
  return g;
}
