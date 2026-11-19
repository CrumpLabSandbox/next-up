// Slow spirals of pale ash drifting low over a rectangular corridor; params: curls, length, width, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const nc = p.curls || 14, per = 9, L = p.length || 24, W = p.width || 6;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.035, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.9 }), nc * per);
  const cs = [];
  for (let i = 0; i < nc; i++) cs.push([ctx.range(-W / 2, W / 2), ctx.range(-L / 2, L / 2), ctx.range(0.25, 0.6), ctx.range(0.3, 0.7) * (ctx.rng() < 0.5 ? -1 : 1), ctx.range(0, 6.28), ctx.range(0.15, 0.4)]);
  g.userData = { cs: cs, im: im, per: per, d: new THREE.Object3D(), H: p.height || 0.45 };
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  let k = 0;
  for (let i = 0; i < u.cs.length; i++) {
    const c = u.cs[i];
    for (let j = 0; j < u.per; j++) {
      const f = j / u.per;
      const a = c[4] + t * c[3] + f * 4;
      const r = c[2] * (0.3 + f);
      u.d.position.set(c[0] + Math.cos(a) * r + Math.sin(t * 0.1 + i) * 0.5, 0.08 + f * u.H + Math.sin(t * 0.5 + i) * 0.04, c[1] + Math.sin(a) * r);
      u.d.scale.setScalar(1 - f * 0.6);
      u.d.updateMatrix();
      u.im.setMatrixAt(k++, u.d.matrix);
    }
  }
  u.im.instanceMatrix.needsUpdate = true;
}
