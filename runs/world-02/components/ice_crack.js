// Thin pale branching crack along -Z from local origin with frost crystals; params: length
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 3;
  const cm = new THREE.MeshBasicMaterial({ color: '#dfe6ff', transparent: true, opacity: 0.85 });
  const seg = (x, z, len, rot, w) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.01, len), cm);
    m.position.set(x, 0.1, z);
    m.rotation.y = rot;
    g.add(m);
  };
  let x = 0, z = 0;
  const pts = [];
  while (-z < L) {
    const len = ctx.range(0.35, 0.6), a = ctx.range(-0.35, 0.35);
    const nx = x + Math.sin(a) * len, nz = z - Math.cos(a) * len;
    seg((x + nx) / 2, (z + nz) / 2, len, -a, 0.035);
    x = nx; z = nz;
    pts.push([x, z]);
    if (ctx.rng() < 0.5) {
      const b = ctx.range(0.6, 1.1) * (ctx.rng() < 0.5 ? -1 : 1);
      seg(x + Math.sin(b) * 0.2, z - Math.cos(b) * 0.2, 0.4, -b, 0.02);
    }
  }
  const n = 22;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.6 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const q = ctx.pick(pts);
    const s = ctx.range(0.03, 0.08);
    d.position.set(q[0] + ctx.range(-0.12, 0.12), s * 1.2 + 0.08, q[1] + ctx.range(-0.2, 0.2));
    d.scale.set(s, s * ctx.range(1.5, 2.5), s);
    d.rotation.set(ctx.range(-0.3, 0.3), ctx.range(0, 6), ctx.range(-0.3, 0.3));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}
