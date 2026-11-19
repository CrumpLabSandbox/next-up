// Round dusky rose-grey stone ledge with darker tapered underside, lip stones silhouetting against clouds, south gap, dew; top at y=0; params: radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 3;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(R, R * 0.6, 1.4, 16), ctx.mat('#a8929e', { emissive: '#e8a0a0', emissiveIntensity: 0.05 }));
  body.position.y = -0.7; g.add(body);
  const under = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.6, R * 0.2, 1.8, 12), ctx.mat('#7a6878'));
  under.position.y = -2.3; g.add(under);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.97, R * 0.97, 0.04, 16), ctx.mat('#bda8b0', { emissive: '#ffc2a0', emissiveIntensity: 0.12 }));
  top.position.y = -0.01; g.add(top);
  const lips = [ctx.mat('#8f7f8c'), ctx.mat('#a8929e'), ctx.mat('#b9a4ab')];
  const n = 28;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    let d = Math.abs(a - Math.PI / 2); if (d > Math.PI) d = Math.PI * 2 - d;
    if (d < 0.3) continue;
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), lips[i % 3]);
    s.scale.set(ctx.range(0.35, 0.5), ctx.range(0.14, 0.24), ctx.range(0.25, 0.32));
    s.position.set(Math.cos(a) * R * 0.94, 0.1, Math.sin(a) * R * 0.94);
    s.rotation.y = -a + ctx.range(-0.2, 0.2); g.add(s);
  }
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const glow = new THREE.Mesh(new THREE.CircleGeometry(R * 1.4, 32), new THREE.MeshBasicMaterial({ map: gt, color: '#ffb890', transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.06; g.add(glow);
  const dew = [];
  for (let i = 0; i < 24; i++) {
    const a = ctx.range(0, 6.28), r = Math.sqrt(ctx.rng()) * R * 0.88;
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 4), new THREE.MeshBasicMaterial({ color: '#fff2e0', fog: false }));
    m.position.set(Math.cos(a) * r, 0.05, Math.sin(a) * r); g.add(m); dew.push(m);
  }
  g.userData = { dew: dew };
  return g;
}
export function update(obj, t) {
  const d = obj.userData.dew;
  for (let i = 0; i < d.length; i++) d[i].scale.setScalar(0.7 + 0.5 * Math.max(0, Math.sin(t * 1.3 + i * 1.7)));
}
