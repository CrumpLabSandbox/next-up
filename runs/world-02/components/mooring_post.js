// Short stout black post with pale rope coil; params: height, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.6;
  const iron = ctx.mat(p.color || '#08090d', { emissive: '#3a3f5c', emissiveIntensity: 0.35 });
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, H, 7), iron);
  post.position.y = H / 2;
  g.add(post);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.08, 7), iron);
  cap.position.y = H + 0.03;
  g.add(cap);
  const rope = ctx.mat('#c9cfdc', { emissive: '#a9b1c4', emissiveIntensity: 0.35 });
  for (let i = 0; i < 3; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.125, 0.025, 4, 9), rope);
    t.rotation.x = Math.PI / 2;
    t.rotation.z = i * 0.4;
    t.position.y = H * 0.55 + i * 0.05;
    g.add(t);
  }
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 4), rope);
  tail.rotation.z = Math.PI / 2;
  tail.rotation.y = 0.6;
  tail.position.set(0.45, 0.04, 0.3);
  g.add(tail);
  return g;
}
