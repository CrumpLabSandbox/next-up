// Soft feathered column of warm gold light rising from local origin with sparks and a gold base halo; params: radius (m), height (m), sparks
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 2.4, H = p.height || 30, add = THREE.AdditiveBlending;
  const vt = ctx.dataTexture(8, 64, (u, v) => { const a = Math.min(1, v * 6) * Math.pow(1 - v, 0.8); const k = Math.max(0, a) * 255; return [k, k, k]; });
  const layers = [[1, 0.09, '#f0b070'], [0.7, 0.1, '#ffc27a'], [0.4, 0.12, '#ffd49a']];
  layers.forEach((l) => {
    const geo = new THREE.CylinderGeometry(R * l[0], R * l[0] * 1.08, H, 24, 1, true); geo.translate(0, H / 2, 0);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: l[2], alphaMap: vt, transparent: true, opacity: l[1], depthWrite: false, blending: add, side: THREE.DoubleSide, fog: false }));
    m.renderOrder = 14; g.add(m);
  });
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 2) * 255; return [k, k * 0.8, k * 0.5]; });
  const base = new THREE.Mesh(new THREE.CircleGeometry(3.5, 32), new THREE.MeshBasicMaterial({ map: gt, color: '#e8944c', transparent: true, opacity: 0.22, depthWrite: false, blending: add, fog: false }));
  base.rotation.x = -Math.PI / 2; base.position.y = 0.08; base.renderOrder = 14; g.add(base);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#e8944c', transparent: true, opacity: 0.25, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(6, 6, 1); halo.position.y = 0.9; g.add(halo);
  const ns = p.sparks || 160;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ns * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: gt, color: '#ffe0b0', size: 0.22, sizeAttenuation: true, transparent: true, opacity: 0.7, blending: add, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < ns; i++) seeds.push([ctx.range(0, 6.283), Math.sqrt(ctx.rng()) * R * 0.85, ctx.range(0, 1), ctx.range(0.03, 0.08), ctx.range(0, 6.283)]);
  g.userData = { pts, seeds, H };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const s = u.seeds[i], f = (t * s[3] + s[2]) % 1;
    a[i * 3] = Math.cos(s[0]) * s[1] + Math.sin(t * 0.5 + s[4]) * 0.15;
    a[i * 3 + 1] = f * u.H * 0.9;
    a[i * 3 + 2] = Math.sin(s[0]) * s[1] + Math.cos(t * 0.5 + s[4]) * 0.15;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
