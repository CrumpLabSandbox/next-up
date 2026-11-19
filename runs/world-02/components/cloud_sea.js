// Deep layered cloud sea: darker plum-rose floor plus 3 layers of overlapping feathered discs 8-16 m (lavender/rose/plum, gold within 40 m of sun); cloud level y=0; params: radius, count
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 220, N = Math.min(300, Math.round((p.count || 450) * 0.6));
  const ft = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); return [168 + 48 * q, 120 + 34 * q, 142 + 10 * q]; });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R * 1.1, 32), new THREE.MeshBasicMaterial({ map: ft, fog: true }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -0.6; g.add(floor);
  const at = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  const geo = new THREE.CircleGeometry(1, 14); geo.rotateX(-Math.PI / 2);
  const lav = new THREE.Color('#c8a0ba'), rose = new THREE.Color('#e8a0a8'), plum = new THREE.Color('#a87c9c'), gold = new THREE.Color('#ffd4a0'), c = new THREE.Color();
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
  const layers = [];
  for (let l = 0; l < 3; l++) {
    const mesh = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ alphaMap: at, transparent: true, opacity: 0.8, depthWrite: false, fog: true }), N);
    for (let i = 0; i < N; i++) {
      const a = ctx.range(0, 6.2832), r = 3 + (R - 3) * Math.sqrt(ctx.rng());
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const w = ctx.range(8, 16);
      const y = l * 0.4 + ctx.noise2(x * 0.05 + l * 7, z * 0.05) * 0.3 - 0.2;
      e.set(0, ctx.range(0, 3), 0); q.setFromEuler(e);
      pos.set(x, y, z); sc.set(w / 2, 1, w / 2 * ctx.range(0.8, 1.2));
      m.compose(pos, q, sc); mesh.setMatrixAt(i, m);
      const n = ctx.noise2(x * 0.04 + 5, z * 0.04 + l * 3);
      c.copy(lav).lerp(rose, Math.min(1, n * (l === 1 ? 1.8 : 1.2)));
      if (l === 1) c.lerp(rose, 0.4);
      const sh = ctx.noise2(x * 0.03 - 9, z * 0.03 + 4);
      if (l === 0) { if (sh > 0.5) c.lerp(plum, Math.min(1, 0.5 + (sh - 0.5) * 3)); }
      else if (sh > 0.62) c.lerp(plum, Math.min(1, (sh - 0.62) * 4) * 0.4);
      const d = Math.hypot(x, z + 190.6);
      if (d < 40) c.lerp(gold, (1 - d / 40) * 0.7);
      mesh.setColorAt(i, c);
    }
    mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false; mesh.renderOrder = l;
    g.add(mesh); layers.push(mesh);
  }
  g.userData = { layers: layers };
  return g;
}
export function update(obj, t) {
  const L = obj.userData.layers;
  for (let i = 0; i < L.length; i++) L[i].position.y = 0.25 * Math.sin(t * 0.5 + i * 1.3);
}
