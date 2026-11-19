// Short weathered leaning post with a frayed pale rope loop trailing toward +X. params: height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1;
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, h, 6), ctx.mat(p.color || '#6e7078'));
  post.position.y = h / 2;
  g.add(post);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.05, 6), ctx.mat('#80828a'));
  cap.position.y = h + 0.02;
  g.add(cap);
  const rope = ctx.mat('#cfc8b4');
  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.025, 5, 10), rope);
  loop.rotation.x = Math.PI / 2;
  loop.position.y = h * 0.85;
  g.add(loop);
  let x = 0.13, y = h * 0.85, z = 0;
  for (let i = 0; i < 6; i++) {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.018, 0.3, 5), rope);
    seg.rotation.z = Math.PI / 2 + ctx.range(-0.3, 0.3);
    x += 0.28; y = Math.max(0.03, y - 0.14); z += ctx.range(-0.06, 0.06);
    seg.position.set(x, y, z);
    g.add(seg);
  }
  g.rotation.z = 0.1;
  return g;
}
