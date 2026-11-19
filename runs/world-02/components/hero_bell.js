// Glowing amber bell hanging below its origin, gold rim, big halo sprite, orbiting round motes, slow small sway; params: height (m), motes
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.55, k = H / 0.1;
  const pivot = new THREE.Group();
  g.add(pivot);
  const pts = [[0.045, 0], [0.042, 0.02], [0.03, 0.055], [0.018, 0.085], [0.006, 0.1]].map((a) => new THREE.Vector2(a[0] * k, a[1] * k));
  const bell = new THREE.Mesh(new THREE.LatheGeometry(pts, 10), ctx.mat('#ffb347', { emissive: '#ffb347', emissiveIntensity: 1.0, side: THREE.DoubleSide }));
  bell.position.y = -H;
  pivot.add(bell);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.044 * k, 0.012, 5, 14), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }));
  rim.rotation.x = Math.PI / 2; rim.position.y = -H + 0.004;
  pivot.add(rim);
  const ht = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.7, c * 0.28]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#ffb347', transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(1.4, 1.4, 1);
  sp.position.y = -H * 0.55;
  pivot.add(sp);
  const n = p.motes || 12;
  const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.02, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffc866', fog: false }), n);
  g.add(im);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(0, 6.28), ctx.range(0.25, 0.6), ctx.range(0.1, 0.35) * (i % 2 ? 1 : -1), ctx.range(-0.3, 0.3), ctx.range(0, 6)]);
  g.userData = { pivot: pivot, sp: sp, im: im, seeds: seeds, d: new THREE.Object3D(), H: H };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.pivot.rotation.z = Math.sin(t * 0.6) * 0.09;
  u.pivot.rotation.x = Math.sin(t * 0.45 + 1) * 0.05;
  u.sp.material.opacity = 0.7 + 0.08 * Math.sin(t * 1.3);
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i], a = q[0] + t * q[2];
    u.d.position.set(Math.cos(a) * q[1], -u.H * 0.5 + q[3] + Math.sin(t + q[4]) * 0.08, Math.sin(a) * q[1]);
    u.d.scale.setScalar(0.8 + 0.3 * Math.sin(t * 2 + q[4]));
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
