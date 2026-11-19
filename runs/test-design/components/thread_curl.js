// Small curl of glowing pale thread with warm glow disc and rising motes; params: length (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 0.2;
  const col = p.color || '#f4efe6';
  const pts = [];
  const n = 14;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = t * Math.PI * 3.2;
    const r = L * 0.22 * (1 - t * 0.5);
    pts.push(new THREE.Vector3(Math.cos(a) * r + t * L * 0.5 - L * 0.25, 0.015 + Math.sin(a * 1.5) * 0.008 + (i % 3 === 0 ? 0.006 : 0), Math.sin(a) * r));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const geo = new THREE.TubeGeometry(curve, 40, 0.01, 5, false);
  g.add(new THREE.Mesh(geo, ctx.mat(col, { emissive: '#ffe2b8', emissiveIntensity: 2.5 })));
  const gt = ctx.dataTexture(32, 32, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2);
    const c = Math.floor(255 * k);
    return [c, c, c];
  });
  const glow = new THREE.Mesh(new THREE.CircleGeometry(0.6, 20), new THREE.MeshBasicMaterial({ color: '#ffe2b8', map: gt, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.6, depthWrite: false }));
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.035;
  glow.name = 'glow';
  g.add(glow);
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.01, 0), new THREE.MeshBasicMaterial({ color: '#fff0d0', fog: false }), 6);
  const seeds = [];
  for (let i = 0; i < 6; i++) {
    seeds.push([ctx.range(-0.15, 0.15), ctx.range(0, 0.7), ctx.range(-0.15, 0.15), ctx.range(0.05, 0.12), ctx.range(0, 6)]);
  }
  im.userData.seeds = seeds;
  im.userData.dummy = new THREE.Object3D();
  im.name = 'motes';
  g.add(im);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const gl = obj.getObjectByName('glow');
  if (gl) gl.material.opacity = 0.55 + Math.sin(t * 1.6) * 0.15;
  const im = obj.getObjectByName('motes');
  if (!im) return;
  const s = im.userData.seeds, d = im.userData.dummy;
  for (let i = 0; i < s.length; i++) {
    const q = s[i];
    const y = 0.03 + ((q[1] + t * q[3]) % 0.7);
    d.position.set(q[0] + Math.sin(t * 0.7 + q[4]) * 0.04, y, q[2] + Math.cos(t * 0.6 + q[4]) * 0.04);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  im.instanceMatrix.needsUpdate = true;
}