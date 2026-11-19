// Glowing ash disc with vertex-color gradient, softened dark patches, mounds, ridges and round glows; params: radius, color, glow, mounds, lanternZ
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 160;
  const wz = (p.lanternZ || -40) - 3;
  const geo = new THREE.RingGeometry(0.01, r, 48, 14);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const cols = new Float32Array(pos.count * 3);
  const near = new THREE.Color('#a9b1c4'), far = new THREE.Color('#6c7690'), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const d = Math.hypot(pos.getX(i), pos.getZ(i) - wz);
    c.copy(near).lerp(far, Math.min(1, d / 60));
    const n = 0.92 + 0.08 * ctx.noise2(pos.getX(i) * 0.1, pos.getZ(i) * 0.1);
    cols[i * 3] = c.r * n; cols[i * 3 + 1] = c.g * n; cols[i * 3 + 2] = c.b * n;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const m = ctx.mat('#ffffff', { emissive: '#6c7690', emissiveIntensity: p.glow || 0.3 });
  m.vertexColors = true;
  g.add(new THREE.Mesh(geo, m));
  const mkGlow = (rgb, size, opacity, x, z, sz) => {
    const t = ctx.dataTexture(64, 64, (u, v) => {
      const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
      const k = Math.pow(1 - d, 2) * 255;
      return [k * rgb[0], k * rgb[1], k * rgb[2]];
    });
    const mat = new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: opacity });
    const cg = new THREE.CircleGeometry(size / 2, 32);
    cg.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(cg, mat);
    mesh.scale.set(1, 1, sz || 1);
    mesh.position.set(x, 0.02, z);
    g.add(mesh);
  };
  mkGlow([0.6, 0.68, 1], 18, 0.45, 0, 0);
  mkGlow([1, 0.7, 0.28], 16, 0.12, 0, -42, 0.8);
  const pn = 25;
  const pm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.5, 0.5, 0.02, 7), ctx.mat('#4a5068', { emissive: '#3a4263', emissiveIntensity: 0.4 }), pn);
  const d0 = new THREE.Object3D();
  for (let i = 0; i < pn; i++) {
    const a = ctx.range(0, Math.PI * 2), rr = Math.sqrt(ctx.rng()) * 70;
    d0.position.set(Math.cos(a) * rr, 0.01, Math.sin(a) * rr);
    const s = ctx.range(3, 6) * 0.49;
    d0.scale.set(s, 1, s * ctx.range(0.7, 1.2));
    d0.rotation.y = ctx.range(0, 6);
    d0.updateMatrix();
    pm.setMatrixAt(i, d0.matrix);
  }
  g.add(pm);
  const total = p.mounds || 700;
  const cl = ['#a9b1c4', '#7d869b'];
  const mg = new THREE.IcosahedronGeometry(0.3, 0);
  const d = new THREE.Object3D();
  for (let k = 0; k < 2; k++) {
    const count = Math.floor(total / 2);
    const im = new THREE.InstancedMesh(mg, ctx.mat(cl[k], { emissive: cl[k], emissiveIntensity: 0.2 }), count);
    for (let i = 0; i < count; i++) {
      const a = ctx.range(0, Math.PI * 2), rr = Math.sqrt(ctx.rng()) * (r * 0.7);
      d.position.set(Math.cos(a) * rr, -0.08, Math.sin(a) * rr);
      d.scale.set(ctx.range(0.5, 2.5), ctx.range(0.3, 0.9), ctx.range(0.5, 2.5));
      d.rotation.y = ctx.range(0, 6);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    g.add(im);
  }
  const rg = new THREE.IcosahedronGeometry(1, 1);
  const ridgeMat = ctx.mat('#9aa3b9', { emissive: '#6c7690', emissiveIntensity: 0.2 });
  [[-28, -15, 0.3, 40], [30, -45, -0.2, 50]].forEach((q) => {
    const mesh = new THREE.Mesh(rg, ridgeMat);
    mesh.position.set(q[0], -0.05, q[1]);
    mesh.rotation.y = q[2];
    mesh.scale.set(2.5, 0.35, q[3] / 2);
    g.add(mesh);
  });
  return g;
}
