// Desaturated glassy dark ice sheet along +Z with stairwell slot (x+-0.55, z 27.6..37.6) widening to a cavern opening (x+-8, z 37.6..53) that opens wide (x+-22) to z 74 over the water; feathered plates, reflection fan, cracks, glints; params: width, length, plates
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const W = p.width || 120, L = p.length || 80;
  const sh = new THREE.Shape();
  sh.moveTo(-W / 2, 0); sh.lineTo(W / 2, 0); sh.lineTo(W / 2, -L); sh.lineTo(-W / 2, -L); sh.lineTo(-W / 2, 0);
  const hole = new THREE.Path();
  const pts = [[-0.55, -27.6], [-0.55, -37.6], [-8, -37.6], [-8, -53], [-22, -53], [-22, -74], [22, -74], [22, -53], [8, -53], [8, -37.6], [0.55, -37.6], [0.55, -27.6]];
  hole.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) hole.lineTo(pts[i][0], pts[i][1]);
  hole.lineTo(pts[0][0], pts[0][1]);
  sh.holes.push(hole);
  const geo = new THREE.ShapeGeometry(sh);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0.03, 0);
  g.add(new THREE.Mesh(geo, ctx.mat('#141a2e', { emissive: '#2a3558', emissiveIntensity: 0.22, side: THREE.DoubleSide })));
  const gt = ctx.dataTexture(64, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.4);
    const f = Math.sin(Math.PI * v);
    const k = e * f * 255;
    return [k * 0.5, k * 0.7, k];
  });
  const gg = new THREE.PlaneGeometry(40, 50);
  gg.rotateX(-Math.PI / 2);
  const grad = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({ map: gt, color: '#3a5590', transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  grad.rotation.y = Math.PI;
  grad.position.set(0, 0.04, 27);
  g.add(grad);
  const ft = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.3);
    const f = Math.pow(1 - v, 1.4);
    const k = e * f * 255;
    return [k * 0.56, k * 0.66, k * 0.85];
  });
  const fg = new THREE.PlaneGeometry(4, 10);
  fg.rotateX(-Math.PI / 2);
  const fan = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: ft, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  fan.position.set(0, 0.09, 22.5);
  g.add(fan);
  const feather = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.min(1, (1 - d) / 0.35) * 255;
    return [k, k, k];
  });
  const n = p.plates || 170;
  const bands = [
    { col: '#6f7fa8', em: 0.1, z0: 0.8, z1: 12, sc: 0.37, emc: '#6f7fa8' },
    { col: '#8a96b6', em: 0.1, z0: 12, z1: 18, sc: 0.4, emc: '#8a96b6' },
    { col: '#a9b1c4', em: 0.2, z0: 18, z1: L - 1, sc: 0.56, emc: '#a9b1c4', skip: true },
    { col: '#5a6b9a', em: 0.3, z0: 20, z1: 38, sc: 0.45, emc: '#5a6b9a', near: true }
  ];
  const d = new THREE.Object3D();
  const inHole = (x, z, s) => (Math.abs(x) < s + 0.8 && z > 26 && z < 39) || (Math.abs(x) < s + 8.8 && z > 36 && z < 54) || (Math.abs(x) < s + 22.8 && z > 52 && z < 75);
  bands.forEach((b, k) => {
    const cnt = b.near ? 40 : Math.floor(n / 3);
    const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 0.02, 6), ctx.mat(b.col, { emissive: b.emc, emissiveIntensity: b.em, transparent: true, opacity: 0.8, alphaMap: feather }), cnt);
    for (let i = 0; i < cnt; i++) {
      const rx = b.near ? 11 : W / 2.2;
      const x = ctx.range(-rx, rx), z = ctx.range(b.z0, b.z1);
      d.position.set(x, 0.05 + k * 0.004, z);
      const s = ctx.range(1.2, 4) * b.sc;
      d.scale.set(s, 1, s * ctx.range(0.6, 1.2));
      if (inHole(x, z, s)) d.scale.set(0, 0, 0);
      if (b.skip && z > 20 && z < 38 && Math.abs(x) < 12) d.scale.set(0, 0, 0);
      d.rotation.y = ctx.range(0, 6);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    g.add(im);
  });
  const nn = 46;
  const nim = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 0.02, 6), ctx.mat('#4a5a8a', { emissive: '#2a3d6a', emissiveIntensity: 0.2, transparent: true, opacity: 0.8, alphaMap: feather }), nn);
  for (let i = 0; i < nn; i++) {
    const a = ctx.range(0, 6.283), r = Math.sqrt(ctx.rng()) * 8;
    const x = Math.cos(a) * r, z = 26.6 + Math.sin(a) * r;
    d.position.set(x, 0.062, z);
    const s = ctx.range(0.8, 2.2);
    d.scale.set(s, 1, s * ctx.range(0.6, 1.2));
    if (inHole(x, z, s)) d.scale.set(0, 0, 0);
    d.rotation.y = ctx.range(0, 6);
    d.updateMatrix();
    nim.setMatrixAt(i, d.matrix);
  }
  g.add(nim);
  const cn = 60;
  const cr = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.01, 1), new THREE.MeshBasicMaterial({ color: '#0b1226', transparent: true, opacity: 0.5, depthWrite: false }), cn);
  for (let i = 0; i < cn; i++) {
    d.position.set(ctx.range(-W / 3, W / 3), 0.07, ctx.range(1, L - 2));
    d.scale.set(1, 1, ctx.range(2, 6));
    d.rotation.set(0, ctx.range(0, 6.28), 0);
    d.updateMatrix();
    cr.setMatrixAt(i, d.matrix);
  }
  g.add(cr);
  const un = 40;
  const ucr = new THREE.InstancedMesh(new THREE.BoxGeometry(0.02, 0.005, 1), new THREE.MeshBasicMaterial({ color: '#8fa8d8', transparent: true, opacity: 0.35, depthWrite: false }), un);
  for (let i = 0; i < un; i++) {
    d.position.set(ctx.range(-14, 14), 0.075, ctx.range(2, 34));
    d.scale.set(1, 1, ctx.range(1, 3));
    d.rotation.set(0, ctx.range(0, 6.28), 0);
    d.updateMatrix();
    ucr.setMatrixAt(i, d.matrix);
  }
  g.add(ucr);
  const gn = 120;
  const gl = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.04, 0), new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false }), gn);
  for (let i = 0; i < gn; i++) {
    d.position.set(ctx.range(-25, 25), 0.08, ctx.range(1, 50));
    d.scale.setScalar(ctx.range(0.6, 1.5));
    d.rotation.set(0, 0, 0);
    d.updateMatrix();
    gl.setMatrixAt(i, d.matrix);
  }
  g.add(gl);
  g.userData.gl = gl;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.userData.gl.material.color.setScalar(0.75 + 0.25 * Math.sin(t * 1.7));
}
