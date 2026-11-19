// Dry riverbed: cracked clay floor, pebbles, rocky banks along local X (gap at center for road). params: width (m, X), depth (m, Z)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 60, D = p.depth || 12;
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const n = ctx.noise2(u * 9, v * 9);
    const crack = Math.abs(Math.sin((u + n * 0.3) * 22)) < 0.06 || Math.abs(Math.sin((v + n * 0.3) * 22)) < 0.06;
    const c = crack ? 0.3 : 0.5 + n * 0.12;
    return [c * 255, c * 255, (c + 0.02) * 255];
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: tex, flatShading: true, roughness: 1 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = 0.03; g.add(floor);
  const n = 260;
  const peb = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.14, 0), ctx.mat('#c9c6c0'), n);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), pos = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    const k = ctx.range(0.6, 1.8);
    pos.set(ctx.range(-W / 2, W / 2), 0.05, ctx.range(-D / 2 + 1, D / 2 - 1));
    e.set(ctx.range(0, 3), ctx.range(0, 3), 0); q.setFromEuler(e); s.set(k, k * 0.6, k);
    m4.compose(pos, q, s); peb.setMatrixAt(i, m4);
  }
  g.add(peb);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 34; i++) {
      const x = -W / 2 + (i + 0.5) * W / 34;
      if (Math.abs(x) < 1.6) continue;
      const h = ctx.range(0.4, 0.9);
      const b = new THREE.Mesh(new THREE.BoxGeometry(ctx.range(1.2, 2), h, ctx.range(0.8, 1.4)), ctx.mat(ctx.pick(['#8a857f', '#77736f', '#9a958d'])));
      b.position.set(x, h / 2, side * (D / 2 + 0.3));
      b.rotation.set(0, ctx.range(-0.2, 0.2), side * 0.15);
      g.add(b);
    }
  }
  return g;
}
