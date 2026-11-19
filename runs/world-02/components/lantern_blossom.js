// Focal white blossom, pointed petals, bright core, pulsing halo, round motes drifting plus 6 motes streaming toward a target (pod); twig running +Z; faces -Z; params: size, twig, target [x,y,z] local
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 0.55, tw = p.twig || 2;
  const bloom = new THREE.Group();
  const pm = ctx.mat('#eaf4ff', { emissive: '#bfd8ff', emissiveIntensity: 0.7 });
  const pm2 = ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 1.0 });
  const ring = (n, len, tilt, mat, off) => {
    for (let i = 0; i < n; i++) {
      const piv = new THREE.Group();
      piv.rotation.z = (i + off) / n * Math.PI * 2;
      const m = new THREE.Mesh(new THREE.ConeGeometry(len * 0.26, len, 4), mat);
      m.scale.set(1, 1, 0.35);
      m.position.y = len / 2 + 0.01;
      const t = new THREE.Group();
      t.rotation.x = tilt;
      t.add(m);
      piv.add(t);
      bloom.add(piv);
    }
  };
  ring(10, S * 0.5, -0.35, pm, 0);
  ring(8, S * 0.38, -0.8, pm2, 0.5);
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(S * 0.1, 0), new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false }));
  core.position.z = -0.02;
  bloom.add(core);
  const ht = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 2) * 255; return [k * 0.95, k * 0.95, k]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(1.4, 1.4, 1);
  bloom.add(sp);
  g.add(bloom);
  const mn = 8;
  const mo = new THREE.InstancedMesh(new THREE.SphereGeometry(0.018, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false }), mn);
  const seeds = [];
  for (let i = 0; i < mn; i++) seeds.push([ctx.range(0, 6.28), ctx.rng(), ctx.range(0.04, 0.09), ctx.range(0, 6)]);
  g.add(mo);
  const sn = 6;
  const st = new THREE.InstancedMesh(new THREE.SphereGeometry(0.02, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false }), sn);
  g.add(st);
  const bark = ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.8 });
  const twig = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.05, tw, 5), bark);
  twig.rotation.x = Math.PI / 2;
  twig.position.z = tw / 2 + 0.05;
  g.add(twig);
  g.userData = { bloom: bloom, sp: sp, mo: mo, st: st, seeds: seeds, d: new THREE.Object3D(), S: S, tg: p.target || [0.25, -0.54, -0.33] };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  const s = 1 + 0.04 * Math.sin(t * 2.2);
  u.bloom.scale.setScalar(s);
  u.bloom.rotation.z = t * 0.05;
  const hs = 1.55 + 0.15 * Math.sin(t * Math.PI * 2 / 3);
  u.sp.scale.set(hs, hs, 1);
  u.sp.material.opacity = 0.7;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[1] + t * q[2]) % 1;
    const a = q[0] + t * 0.4;
    const r = u.S * (0.5 + f * 1.6);
    u.d.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.8 + f * 0.5, -0.1 - f * 0.3);
    u.d.scale.setScalar(Math.max(0.05, Math.sin(Math.PI * f)));
    u.d.rotation.set(0, 0, 0);
    u.d.updateMatrix();
    u.mo.setMatrixAt(i, u.d.matrix);
  }
  u.mo.instanceMatrix.needsUpdate = true;
  for (let i = 0; i < 6; i++) {
    const f = (i / 6 + t * 0.22) % 1;
    const w = Math.sin(f * 6.28 + i) * 0.03;
    u.d.position.set(u.tg[0] * f + w, u.tg[1] * f + Math.sin(f * 3.14) * 0.08, u.tg[2] * f - 0.05);
    u.d.scale.setScalar(Math.max(0.1, Math.sin(Math.PI * f)));
    u.d.updateMatrix();
    u.st.setMatrixAt(i, u.d.matrix);
  }
  u.st.instanceMatrix.needsUpdate = true;
}
