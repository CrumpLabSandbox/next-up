// Slender leafless luminous silver tree with curling branches, a parting bud showing a line of white light, pulsing bark glow, drifting gold motes; params: height, color, open (0-1 bud opening)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 4;
  const bark = ctx.mat(p.color || '#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.8 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.22, H * 0.7, 6), bark);
  trunk.position.y = H * 0.35;
  trunk.rotation.z = 0.04;
  g.add(trunk);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.08, H * 0.35, 5), bark);
  top.position.set(0.03, H * 0.8, 0);
  top.rotation.z = -0.1;
  g.add(top);
  const branch = (y, a, len, tilt) => {
    const pivot = new THREE.Group();
    pivot.position.set(0, y, 0);
    pivot.rotation.y = a;
    const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.06, len, 5), bark);
    b1.position.set(len * 0.4 * Math.sin(tilt), len * 0.5 * Math.cos(tilt), 0);
    b1.rotation.z = -tilt;
    pivot.add(b1);
    const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.03, len * 0.6, 4), bark);
    const ex = len * Math.sin(tilt), ey = len * Math.cos(tilt);
    b2.position.set(ex + len * 0.25, ey + len * 0.2, 0);
    b2.rotation.z = -tilt - 0.9;
    pivot.add(b2);
    g.add(pivot);
    return [ex + len * 0.5, ey + len * 0.4];
  };
  let tip;
  for (let i = 0; i < 7; i++) {
    const y = H * (0.4 + i * 0.08);
    const r = branch(y, i * 2.4 + ctx.range(0, 0.5), 1.25 * ctx.range(0.8, 1.5) * (1.2 - i * 0.08), ctx.range(0.5, 1.0));
    if (i === 3) tip = [0, y + r[1], r[0], i * 2.4];
  }
  const bud = new THREE.Group();
  const halfM = ctx.mat('#eaf4ff', { emissive: '#dfe6ff', emissiveIntensity: 0.9 });
  const halves = [];
  [-1, 1].forEach((s) => {
    const h = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), halfM);
    h.scale.set(0.45, 1.4, 0.8);
    h.position.x = s * 0.035;
    bud.add(h);
    halves.push(h);
  });
  const slit = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.26), new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide, fog: false }));
  bud.add(slit);
  const ht = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 2) * 255; return [k * 0.95, k * 0.92, k * 0.8]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(1.3, 1.3, 1);
  bud.add(sp);
  bud.position.set(tip[2] * Math.sin(tip[3]), tip[1], tip[2] * Math.cos(tip[3]));
  g.add(bud);
  const mn = 12;
  const mo = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.03, 0), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }), mn);
  const seeds = [];
  for (let i = 0; i < mn; i++) seeds.push([ctx.range(0, 6.28), ctx.range(0.4, 1.6), ctx.rng(), ctx.range(0.03, 0.08), ctx.range(0, 6)]);
  g.add(mo);
  g.userData = { sp: sp, mo: mo, bark: bark, halves: halves, slit: slit, seeds: seeds, d: new THREE.Object3D(), H: H };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  const pulse = Math.sin(t * 2.2);
  u.sp.material.opacity = 0.8 + 0.12 * pulse;
  u.bark.emissiveIntensity = 0.8 + 0.15 * pulse;
  u.halves[0].position.x = -0.035 - 0.005 * (1 + pulse);
  u.halves[1].position.x = 0.035 + 0.005 * (1 + pulse);
  u.slit.scale.y = 0.9 + 0.1 * pulse;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[2] + t * q[3]) % 1;
    const a = q[0] + t * 0.3;
    u.d.position.set(Math.cos(a) * q[1], u.H * (0.5 + 0.6 * f), Math.sin(a) * q[1]);
    u.d.scale.setScalar(Math.max(0.05, Math.sin(Math.PI * f)) * (0.7 + 0.3 * Math.sin(t * 3 + q[4])));
    u.d.rotation.set(t + q[4], t * 0.5, 0);
    u.d.updateMatrix();
    u.mo.setMatrixAt(i, u.d.matrix);
  }
  u.mo.instanceMatrix.needsUpdate = true;
}
