// Line of slender glowing bare footprints (ball + heel + dark pressed ring) along X; prints within 3 m of nearX brighten with soft glow; params: length, spacing, color, nearX
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 60, sp = p.spacing || 0.6;
  const n = Math.floor(L / sp);
  const col = p.color || '#7fd0ff';
  const nearX = p.nearX || 0;
  const strip = new THREE.Mesh(new THREE.PlaneGeometry(L, 0.8), new THREE.MeshBasicMaterial({ color: '#4a78c0', transparent: true, opacity: 0.1, depthWrite: false, blending: THREE.AdditiveBlending }));
  strip.rotation.x = -Math.PI / 2;
  strip.position.y = 0.03;
  g.add(strip);
  const geo = new THREE.CircleGeometry(1, 12);
  geo.rotateX(-Math.PI / 2);
  const G = 4;
  const mk = (mat, cnt, name) => { const im = new THREE.InstancedMesh(geo, mat, cnt); im.count = 0; im.name = name; g.add(im); return im; };
  const ringMat = new THREE.MeshBasicMaterial({ color: '#3a4a78', transparent: true, opacity: 0.35, depthWrite: false });
  const rings = mk(ringMat, n * 2 + 2, 'rings');
  const far = [];
  for (let j = 0; j < G; j++) {
    const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
    far.push(mk(mat, 2 * (Math.ceil(n / G) + 1), 'prints' + j));
  }
  const nearMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending });
  const near = mk(nearMat, 2 * n, 'near');
  const gt = ctx.dataTexture(32, 32, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const c = Math.floor(255 * Math.pow(1 - d, 2));
    return [c, c, c];
  });
  const glowMat = new THREE.MeshBasicMaterial({ color: col, map: gt, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending });
  const glows = mk(glowMat, n + 1, 'glows');
  const d = new THREE.Object3D();
  const put = (im, x, y, z, rot, sx, sz) => {
    d.position.set(x, y, z);
    d.rotation.set(0, rot, 0);
    d.scale.set(sx, 1, sz);
    d.updateMatrix();
    im.setMatrixAt(im.count++, d.matrix);
  };
  for (let i = 0; i < n; i++) {
    const x = L / 2 - i * sp;
    const z = (i % 2 ? 1 : -1) * 0.15 + ctx.range(-0.02, 0.02);
    const rot = ctx.range(-0.12, 0.12);
    const isNear = Math.abs(x - nearX) < 3;
    const im = isNear ? near : far[i % G];
    const hx = x + Math.cos(rot) * 0.2, hz = z - Math.sin(rot) * 0.2;
    put(rings, x, 0.035, z, rot, 0.17, 0.08);
    put(rings, hx, 0.035, hz, rot, 0.07, 0.07);
    put(im, x, 0.045, z, rot, 0.15, 0.06);
    put(im, hx, 0.045, hz, rot, 0.05, 0.05);
    if (isNear) put(glows, x + Math.cos(rot) * 0.1, 0.05, z - Math.sin(rot) * 0.1, rot, 0.3, 0.3);
  }
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const ph = t * Math.PI * 2 / 4;
  for (let j = 0; j < 4; j++) {
    const m = obj.getObjectByName('prints' + j);
    if (m) m.material.opacity = 0.75 + 0.2 * Math.sin(ph + j * 1.5);
  }
  const gl = obj.getObjectByName('glows');
  if (gl) gl.material.opacity = 0.45 + 0.15 * Math.sin(ph);
  const nr = obj.getObjectByName('near');
  if (nr) nr.material.opacity = 0.92 + 0.08 * Math.sin(ph);
}