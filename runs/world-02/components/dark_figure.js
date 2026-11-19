// Robed motionless figure: wide 6-sided robe tapering to shoulders, hard fold ridges, strong cool rim, stirring hem; front faces -Z; params: height, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 2;
  const c = p.color || '#08090d';
  const bm = ctx.mat(c, { emissive: '#3a3f5c', emissiveIntensity: 0.25 });
  const rm = ctx.mat(c, { emissive: '#6fa8ff', emissiveIntensity: 0.7 });
  const fm = ctx.mat('#14151c', { emissive: '#3a3f5c', emissiveIntensity: 0.3 });
  const hemM = ctx.mat('#14151c', { emissive: '#6fa8ff', emissiveIntensity: 0.7 });
  const hemH = 0.15;
  const hem = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.375, hemH, 6), hemM);
  hem.position.y = hemH / 2;
  g.add(hem);
  const bodyH = H * 0.78;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.34, bodyH, 6), bm);
  body.position.y = hemH + bodyH / 2 - 0.02;
  g.add(body);
  for (let i = 0; i < 4; i++) {
    const a = -0.9 + i * 0.6 + Math.PI;
    const rb = 0.33, rt = 0.2;
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.05, bodyH * 0.95, 0.07), fm);
    const rr = (rb + rt) / 2 + 0.01;
    ridge.position.set(Math.sin(a) * rr, hemH + bodyH / 2 - 0.02, Math.cos(a) * rr);
    ridge.rotation.y = a;
    ridge.rotation.z = 0;
    g.add(ridge);
  }
  const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.21, 0.1, 6), rm);
  sh.position.y = hemH + bodyH - 0.05;
  g.add(sh);
  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.42, 6), rm);
  hood.position.set(0, H * 0.9, 0.03);
  g.add(hood);
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.3, 0.3), rm);
  ridge.position.set(0, H * 0.92, 0.1);
  ridge.rotation.x = -0.5;
  g.add(ridge);
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 1.6) * 255;
    return [k * 0.44, k * 0.75, k];
  });
  const pg = new THREE.CircleGeometry(1, 32);
  pg.rotateX(-Math.PI / 2);
  const pool = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.3, fog: false }));
  pool.position.y = 0.04;
  g.add(pool);
  const sg = new THREE.PlaneGeometry(0.45, 3);
  sg.rotateX(-Math.PI / 2);
  const sm = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: '#05060a', transparent: true, opacity: 0.3, depthWrite: false }));
  sm.position.set(0, 0.05, 1.6);
  g.add(sm);
  g.userData.hem = hem;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const h = obj.userData.hem;
  h.scale.set(1 + 0.03 * Math.sin(t * 0.8), 1, 1 + 0.03 * Math.cos(t * 0.7));
}
