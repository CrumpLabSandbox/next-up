// Rolling sea of soft overlapping rose/lavender cloud puffs around origin (cloud level y=0), gold near the sun; gentle wave; params: radius, count
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 220, N = p.count || 450;
  const ft = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); return [184 + 31 * q, 138 + 16 * q, 158 - 16 * q]; });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R * 1.1, 32), new THREE.MeshBasicMaterial({ map: ft, fog: false }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -0.6; g.add(floor);
  const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 4), new THREE.MeshBasicMaterial({ fog: false }), N);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
  const lav = new THREE.Color('#c8a0ba'), rose = new THREE.Color('#e8a0a8'), gold = new THREE.Color('#ffd4a0'), c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const a = ctx.range(0, 6.2832), r = 4 + (R - 4) * Math.pow(ctx.rng(), 0.7);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const w = (8 + Math.min(12, r * 0.05) * ctx.rng() + ctx.rng() * 6) / 2;
    const h = ctx.range(1.5, 3) / 2 * 1.3;
    const y = ctx.noise2(x * 0.05, z * 0.05) * 1.2 + (i % 3) * 0.35 - 0.3;
    e.set(0, ctx.range(0, 3), 0); q.setFromEuler(e);
    pos.set(x, y, z); sc.set(w, h, w * ctx.range(0.8, 1.2));
    m.compose(pos, q, sc); mesh.setMatrixAt(i, m);
    const n = ctx.noise2(x * 0.04 + 5, z * 0.04);
    c.copy(lav).lerp(rose, Math.min(1, n * 1.5 + (i % 3) * 0.15));
    const d = Math.hypot(x, z + 198.6);
    if (d < 60) c.lerp(gold, (1 - d / 60) * 0.9);
    mesh.setColorAt(i, c);
  }
  mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false;
  g.add(mesh);
  g.userData = { mesh: mesh };
  return g;
}
export function update(obj, t) {
  obj.userData.mesh.position.y = 0.3 * Math.sin(t * 0.628);
}
