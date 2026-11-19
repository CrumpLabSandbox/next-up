// Instanced tiny glowing ash flecks drifting upward; params: count, radius (m), height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 200, R = p.radius || 15, H = p.height || 6;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.03, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.8 }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, 6.283), rr = Math.sqrt(ctx.rng()) * R;
    seeds.push([Math.cos(a) * rr, ctx.range(0, H), Math.sin(a) * rr, ctx.range(0.05, 0.2)]);
  }
  g.userData.seeds = seeds;
  g.userData.im = im;
  g.userData.H = H;
  g.userData.d = new THREE.Object3D();
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const s = obj.userData.seeds, im = obj.userData.im, H = obj.userData.H, d = obj.userData.d;
  for (let i = 0; i < s.length; i++) {
    const q = s[i];
    d.position.set(q[0] + Math.sin(t * 0.3 + i) * 0.3, (q[1] + t * q[3]) % H, q[2] + Math.cos(t * 0.25 + i) * 0.3);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  im.instanceMatrix.needsUpdate = true;
}
