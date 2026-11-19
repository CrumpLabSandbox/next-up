// Instanced flat pebbles and low ripples scattered around origin, thinning with distance, clear corridor north; params: count, radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 150, R = p.radius || 25;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), ctx.mat('#ffffff'), n);
  const d = new THREE.Object3D();
  const c = new THREE.Color();
  let i = 0, guard = 0;
  while (i < n && guard++ < 2000) {
    const a = ctx.range(0, 6.283), r = R * Math.pow(ctx.rng(), 0.7);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (z < 0 && Math.abs(x) < 2) continue;
    const s = ctx.range(0.1, 0.4);
    const ripple = ctx.rng() < 0.3;
    d.position.set(x, 0, z);
    d.rotation.set(0, ctx.range(0, 3.14), 0);
    d.scale.set(s * (ripple ? 3 : 1), s * 0.25, s * (ripple ? 1 : 0.8));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
    c.set('#8a8da0').lerp(new THREE.Color('#a9acbc'), ctx.rng());
    im.setColorAt(i, c);
    i++;
  }
  im.count = i;
  g.add(im);
  return g;
}
