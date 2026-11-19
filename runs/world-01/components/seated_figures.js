// Ring of hunched hooded seated stone figures facing center, or all facing east if faceEast. Figure 3 pinned to the northwest. params: count, radius (m), height (m), color, faceEast
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 5, R = p.radius || 3.2, h = p.height || 1;
  const base = new THREE.Color(p.color || '#4a4d57');
  for (let i = 0; i < n; i++) {
    let a = (i + 0.5) / n * Math.PI * 2 + ctx.range(-0.12, 0.12);
    let r = R + ctx.range(-0.4, 0.4);
    if (n === 5 && i === 3) { a = -2.0; r = R; }
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    const f = new THREE.Group();
    const mat = ctx.mat(base.clone().offsetHSL(0, 0, ctx.range(-0.04, 0.04)));
    const body = new THREE.Mesh(new THREE.CylinderGeometry(h * 0.16, h * 0.34, h * 0.62, 7), mat);
    body.position.y = h * 0.31;
    body.scale.z = 1.1;
    f.add(body);
    const hood = new THREE.Mesh(new THREE.ConeGeometry(h * 0.17, h * 0.4, 7), mat);
    hood.position.set(0, h * 0.78, -h * 0.04);
    hood.rotation.x = 0.25;
    f.add(hood);
    const lap = new THREE.Mesh(new THREE.BoxGeometry(h * 0.22, h * 0.06, h * 0.16), ctx.mat('#3a3d46'));
    lap.position.set(0, h * 0.3, h * 0.3);
    f.add(lap);
    const legs = new THREE.Mesh(new THREE.BoxGeometry(h * 0.6, h * 0.12, h * 0.4), mat);
    legs.position.set(0, h * 0.06, h * 0.15);
    f.add(legs);
    f.position.set(x, 0, z);
    f.rotation.y = p.faceEast ? Math.PI / 2 + ctx.range(-0.05, 0.05) : Math.atan2(-x, -z);
    g.add(f);
  }
  return g;
}
