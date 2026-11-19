// Large faint low mist disc; params: radius, color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const geo = new THREE.CircleGeometry(p.radius || 150, 32);
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.MeshBasicMaterial({ color: p.color || '#3a4160', transparent: true, opacity: p.opacity || 0.12, depthWrite: false });
  g.add(new THREE.Mesh(geo, m));
  return g;
}
