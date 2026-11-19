// Soft feathered pale-blue ribbon of light, wider at base, with ground glow and motes; params: height, width, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 3.5, W = p.width || 2.4;
  const col = new THREE.Color(p.color || '#8fd0ff');
  const core = new THREE.Color('#bfe4ff');
  const tex = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.6);
    const f = Math.pow(Math.sin(Math.PI * v), 0.8);
    const k = e * f * 255;
    const m = e * e;
    return [k * (col.r + (core.r - col.r) * m), k * (col.g + (core.g - col.g) * m), k * (col.b + (core.b - col.b) * m)];
  });
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, opacity: 0.8, fog: false });
  const ribbons = [];
  for (let i = 0; i < 2; i++) {
    const geo = new THREE.PlaneGeometry(W, H, 1, 6);
    geo.translate(0, H / 2, 0);
    const pos = geo.attributes.position;
    for (let v = 0; v < pos.count; v++) {
      const k = pos.getY(v) / H;
      pos.setX(v, pos.getX(v) * (1 - 0.42 * k));
    }
    const m = new THREE.Mesh(geo, mat);
    m.rotation.y = i * Math.PI / 2 + 0.4;
    g.add(m);
    ribbons.push(m);
  }
  const gt = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2) * 255;
    return [k * col.r, k * col.g, k * col.b];
  });
  const cg = new THREE.CircleGeometry(3.5, 32);
  cg.rotateX(-Math.PI / 2);
  const glow = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: gt, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.6, fog: false }));
  glow.position.y = 0.04;
  g.add(glow);
  const n = 12;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.04, 0), new THREE.MeshBasicMaterial({ color: '#bfe4ff', fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(-0.9, 0.9), ctx.range(0, 1), ctx.range(-0.9, 0.9), ctx.range(0.1, 0.3)]);
  g.add(im);
  g.userData = { ribbons: ribbons, mat: mat, im: im, seeds: seeds, H: H + 0.5, d: new THREE.Object3D() };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  u.mat.opacity = 0.8 + 0.1 * Math.sin(t * 1.3) + 0.04 * Math.sin(t * 3.1);
  u.ribbons.forEach((r, i) => {
    r.scale.set(1 + 0.12 * Math.sin(t * 0.9 + i * 2), 1 + 0.05 * Math.sin(t * 0.6 + i), 1);
    r.rotation.y = i * Math.PI / 2 + 0.4 + Math.sin(t * 0.3 + i) * 0.15;
  });
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[1] + t * q[3] / u.H) % 1;
    u.d.position.set(q[0] + Math.sin(t * 0.5 + i) * 0.15, f * u.H, q[2] + Math.cos(t * 0.4 + i) * 0.15);
    u.d.scale.setScalar(Math.max(0.05, 1 - f));
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
