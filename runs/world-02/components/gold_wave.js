// Wide soft gold ripples expanding across flat ground on a 9 s period, lifting gold-white sparks; params: radius (max m), rings, sparks
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 30, n = p.rings || 4, add = THREE.AdditiveBlending;
  const tex = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const d = Math.abs(q - 0.8) / 0.28; const k = Math.max(0, 1 - d); const c = k * k * (3 - 2 * k) * 255; return [c, c, c]; });
  const rings = [];
  for (let i = 0; i < n; i++) {
    const geo = new THREE.CircleGeometry(1, 40); geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#e8a860', alphaMap: tex, transparent: true, opacity: 0.1, depthWrite: false, blending: add, fog: false }));
    m.position.y = 0.06; m.renderOrder = 13; g.add(m); rings.push(m);
  }
  const ns = p.sparks || 90;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.5) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ns * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#ffd49a', size: 0.18, sizeAttenuation: true, transparent: true, opacity: 0.7, blending: add, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const seeds = [];
  for (let i = 0; i < ns; i++) seeds.push([ctx.range(0, 6.283), Math.sqrt(ctx.rng()) * R * 0.9, ctx.range(0.5, 1)]);
  g.userData = { rings, pts, seeds, R, n };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, R = u.R, per = 9;
  for (let i = 0; i < u.n; i++) {
    const f = ((t / per) + i / u.n) % 1, r = 0.5 + f * R;
    u.rings[i].scale.set(r, 1, r);
    u.rings[i].material.opacity = 0.18 * (1 - f) * Math.min(1, f * 8);
  }
  const a = u.pts.geometry.attributes.position.array;
  for (let i = 0; i < u.seeds.length; i++) {
    const s = u.seeds[i];
    let lift = 0;
    for (let k = 0; k < u.n; k++) {
      const w = (((t / per) + k / u.n) % 1) * R, d = w - s[1];
      if (d > 0) lift = Math.max(lift, Math.min(1, d / 3) * Math.max(0, 1 - d / 12));
    }
    a[i * 3] = Math.cos(s[0]) * s[1]; a[i * 3 + 1] = 0.2 + lift * 2.5 * s[2]; a[i * 3 + 2] = Math.sin(s[0]) * s[1];
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
}
