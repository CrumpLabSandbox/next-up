// Hero gold lotus that unfolds in a loop and sheds rising sparks; params: size (m width), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 0.45, add = THREE.AdditiveBlending;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.75, c * 0.45]; });
  const geo = new THREE.ConeGeometry(S * 0.13, S * 0.5, 5); geo.translate(0, S * 0.25, 0);
  const petals = [];
  const n = 8;
  for (let i = 0; i < n; i++) {
    const pivot = new THREE.Group();
    pivot.rotation.y = (i / n) * Math.PI * 2;
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: i % 2 ? '#ffb060' : '#e8944c', transparent: true, opacity: 0.65, depthWrite: false, blending: add, fog: false }));
    m.position.x = S * 0.05;
    pivot.add(m); g.add(pivot);
    petals.push({ pivot, m, ph: i * 0.12 });
  }
  const core = new THREE.Mesh(new THREE.SphereGeometry(S * 0.1, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffc27a', fog: false }));
  core.position.y = S * 0.12; g.add(core);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffb060', transparent: true, opacity: 0.4, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(S * 4, S * 4, 1); halo.position.y = S * 0.2; g.add(halo);
  const ns = 28;
  const geoP = new THREE.BufferGeometry();
  geoP.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ns * 3), 3));
  const pmat = new THREE.PointsMaterial({ map: gt, color: '#ffc880', size: 0.09, sizeAttenuation: true, transparent: true, opacity: 0.7, blending: add, depthWrite: false, fog: false });
  const pts = new THREE.Points(geoP, pmat);
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < ns; i++) seeds.push([ctx.range(0, 6.283), ctx.range(0.05, 0.3), ctx.range(0, 1), ctx.range(0.15, 0.3)]);
  g.userData = { petals, halo, pts, seeds, S };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, S = u.S;
  const open = 0.5 + 0.5 * Math.sin(t * 0.4 - 1.2);
  for (const q of u.petals) {
    const k = Math.max(0, Math.min(1, open * 1.2 - q.ph));
    q.m.rotation.z = -(0.15 + k * 1.0);
  }
  u.halo.material.opacity = 0.35 + 0.08 * open;
  const a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const s = u.seeds[i], f = (t * s[3] + s[2]) % 1;
    a[i * 3] = Math.cos(s[0] + t * 0.3) * s[1] * f;
    a[i * 3 + 1] = S * 0.3 + f * 0.8;
    a[i * 3 + 2] = Math.sin(s[0] + t * 0.3) * s[1] * f;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
  u.pts.material.opacity = 0.75;
}
