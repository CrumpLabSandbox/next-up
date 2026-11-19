// Thin pale gold pillar of light dissolving near the top, rising ember specks, base glow, water reflection streak toward -Z and low amber mist band; params: height, width, color, motes
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 25, W = p.width || 3, nm = p.motes || 90;
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const tex = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 0.8);
    const f = Math.min(1, v * 6) * (1 - v * 0.4) * (1 - sm(0.55, 0.85, v));
    const k = e * f * 255;
    return [k, k * 0.9, k * 0.62];
  });
  const mk = (w, op) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H), new THREE.MeshBasicMaterial({ map: tex, color: p.color || '#ffe6a8', transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
    m.position.y = H / 2;
    return m;
  };
  const a = mk(W, 0.55), b = mk(W, 0.55), c = mk(W * 0.4, 0.5);
  b.rotation.y = Math.PI / 2; c.rotation.y = Math.PI / 4;
  g.add(a); g.add(b); g.add(c);
  const gt = ctx.dataTexture(64, 64, (u, v) => { const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - d, 2) * 255; return [k, k * 0.8, k * 0.45]; });
  const cg = new THREE.CircleGeometry(6, 28);
  cg.rotateX(-Math.PI / 2);
  const gl = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({ map: gt, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  gl.position.y = 0.1;
  g.add(gl);
  const rt = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.4);
    const f = Math.pow(1 - v, 1.5) * Math.min(1, v * 8 + 0.2);
    const k = e * f * 255;
    return [k, k * 0.83, k * 0.48];
  });
  const rgeo = new THREE.PlaneGeometry(2, 18);
  rgeo.rotateX(-Math.PI / 2);
  rgeo.rotateY(Math.PI);
  rgeo.translate(0, 0, -9);
  const streak = new THREE.Mesh(rgeo, new THREE.MeshBasicMaterial({ map: rt, color: '#ffd37a', transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  streak.position.y = 0.14;
  g.add(streak);
  const mist = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffb347', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  mist.scale.set(8, 2, 1);
  mist.position.y = 1;
  g.add(mist);
  const mo = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.09, 0), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }), nm);
  const seeds = [];
  for (let i = 0; i < nm; i++) seeds.push([ctx.range(0, 6.28), ctx.rng(), ctx.range(0.5, 1), ctx.range(0, 6), ctx.range(0.02, 0.06)]);
  g.add(mo);
  g.userData = { mo: mo, seeds: seeds, d: new THREE.Object3D(), H: H, W: W, a: a, b: b, streak: streak };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const f = (q[1] + t * q[4]) % 1;
    const r = u.W * 0.4 * q[2];
    u.d.position.set(Math.cos(q[0] + t * 0.3) * r, f * u.H * 0.85, Math.sin(q[0] + t * 0.3) * r);
    u.d.scale.setScalar(Math.max(0.05, Math.sin(Math.PI * f)) * (0.7 + 0.3 * Math.sin(t * 4 + q[3])));
    u.d.rotation.set(t + q[3], t * 0.5, 0);
    u.d.updateMatrix();
    u.mo.setMatrixAt(i, u.d.matrix);
  }
  u.mo.instanceMatrix.needsUpdate = true;
  const o = 0.5 + 0.06 * Math.sin(t * 0.8);
  u.a.material.opacity = o; u.b.material.opacity = o;
  u.streak.material.opacity = 0.25 + 0.04 * Math.sin(t * 1.1);
}
