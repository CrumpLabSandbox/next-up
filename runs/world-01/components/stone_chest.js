// Grey stone chest, lid carved with three circles. params: width, height, color, lift (m, lid raised)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 0.6, H = p.height || 0.3, D = W * 0.65, L = p.lift || 0;
  const st = ctx.mat(p.color || '#7a7f88');
  const body = new THREE.Mesh(new THREE.BoxGeometry(W, H * 0.75, D), st);
  body.position.y = H * 0.375; g.add(body);
  if (L > 0) {
    const hol = new THREE.Mesh(new THREE.BoxGeometry(W * 0.86, 0.01, D * 0.82), ctx.mat('#1c1e24'));
    hol.position.y = H * 0.75 + 0.003; g.add(hol);
  }
  const lid = new THREE.Mesh(new THREE.BoxGeometry(W * 1.04, H * 0.25, D * 1.06), ctx.mat('#8d929b'));
  lid.position.y = H * 0.875 + L; g.add(lid);
  const gm = ctx.mat('#2c3038');
  const r = W * 0.12;
  [[-r * 0.9, r * 0.5], [r * 0.9, r * 0.5], [0, -r * 0.9]].forEach(c => {
    const t = new THREE.Mesh(new THREE.TorusGeometry(r, 0.008, 4, 14), gm);
    t.rotation.x = -Math.PI / 2; t.position.set(c[0], H + 0.005 + L, c[1]); g.add(t);
  });
  return g;
}
