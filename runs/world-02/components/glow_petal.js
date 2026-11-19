// Palm-sized glowing white petal, tip tilted east, soft small glow and rising motes; params: length (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 0.14;
  const c = p.color || '#ffffff';
  const pm = ctx.mat(c, { emissive: c, emissiveIntensity: 1.4 });
  const body = new THREE.Group();
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, 6, 4), pm);
  m.scale.set(L * 0.5, L * 0.07, L * 0.32);
  m.position.y = 0.01;
  body.add(m);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(L * 0.14, L * 0.3, 4), pm);
  tip.rotation.z = -Math.PI / 2;
  tip.scale.y = 0.3;
  tip.position.set(L * 0.55, 0.01, 0);
  body.add(tip);
  body.rotation.z = 0.4;
  g.add(body);
  const tex = ctx.dataTexture(32, 32, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2) * 255;
    return [k * 0.8, k * 0.88, k];
  });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.35, depthWrite: false }));
  sp.scale.set(0.5, 0.5, 1);
  sp.position.y = 0.05;
  g.add(sp);
  const n = 6;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.02, 0), new THREE.MeshBasicMaterial({ color: '#eef2ff', fog: false }), n);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(-0.2, 0.2), ctx.range(0, 1), ctx.range(-0.2, 0.2), ctx.range(0.08, 0.18)]);
  g.userData = { seeds: seeds, im: im, d: new THREE.Object3D() };
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData, H = 1.5;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[1] + t * q[3] / H) % 1;
    u.d.position.set(-0.1 + q[0] + Math.sin(t * 0.5 + i) * 0.08, -0.3 + f * H, -0.75 + q[2] + Math.cos(t * 0.4 + i) * 0.08);
    u.d.scale.setScalar(Math.max(0.05, 1 - f));
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}