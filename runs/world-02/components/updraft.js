// Warm amber air column (outer and inner cone) with rising motes, glittering drops and amber base glow sprite; params: height, radius, motes, drops
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 6, R = p.radius || 0.5;
  const nm = p.motes || 110, nd = p.drops || 14;
  const col = new THREE.Mesh(new THREE.CylinderGeometry(R * 1.8, R * 0.6, H, 12, 1, true), new THREE.MeshBasicMaterial({ color: '#ffd9a8', transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  col.position.y = H / 2;
  g.add(col);
  const inn = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.9, R * 0.3, H, 10, 1, true), new THREE.MeshBasicMaterial({ color: '#ffb347', transparent: true, opacity: 0.06, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  inn.position.y = H / 2;
  g.add(inn);
  const atex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2) * 255;
    return [k, k * 0.7, k * 0.28];
  });
  const ag = new THREE.CircleGeometry(3, 32);
  ag.rotateX(-Math.PI / 2);
  const am = new THREE.Mesh(ag, new THREE.MeshBasicMaterial({ map: atex, transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  am.position.y = 0.1;
  g.add(am);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: atex, color: '#ffb347', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  sp.scale.set(4, 4, 1);
  sp.position.y = 0.6;
  g.add(sp);
  const mo = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.05, 0), new THREE.MeshBasicMaterial({ color: '#ffcf9a' }), nm);
  const dr = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.03, 0), new THREE.MeshBasicMaterial({ color: '#dff4ff', fog: false }), nd);
  const seed = (k) => { const a = []; for (let i = 0; i < k; i++) a.push([ctx.range(0, 6.28), ctx.rng(), ctx.range(0.1, 0.25), ctx.rng(), ctx.range(0, 6)]); return a; };
  g.add(mo); g.add(dr);
  g.userData = { mo: mo, dr: dr, ms: seed(nm), ds: seed(nd), d: new THREE.Object3D(), H: H, R: R };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData, d = u.d;
  const run = (im, arr, tw) => {
    for (let i = 0; i < arr.length; i++) {
      const q = arr[i];
      const f = (q[1] + t * q[2] / u.H * 2) % 1;
      const r = u.R * (0.3 + 1.3 * f) * (0.4 + q[3]);
      d.position.set(Math.cos(q[0] + t * 0.4) * r, f * u.H, Math.sin(q[0] + t * 0.4) * r);
      let s = Math.sin(Math.PI * f);
      if (tw) s *= 0.6 + 0.6 * Math.sin(t * 6 + q[4]);
      d.scale.setScalar(Math.max(0.05, s));
      d.rotation.set(t * 0.5 + q[4], t * 0.3, 0);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    im.instanceMatrix.needsUpdate = true;
  };
  run(u.mo, u.ms, false);
  run(u.dr, u.ds, true);
}
