// Bright round stars drifting slowly through a box with faint streaks; params: count, sx, sy, sz
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 60, SX = p.sx || 5, SY = p.sy || 8, SZ = p.sz || 10;
  const dt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.8) * 255; return [k, k, k]; });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ map: dt, color: '#f4f8ff', size: 0.22, sizeAttenuation: true, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  pts.frustumCulled = false; g.add(pts);
  const tg = new THREE.BufferGeometry();
  tg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 6), 3));
  const tr = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({ color: '#cfe0ff', transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  tr.frustumCulled = false; g.add(tr);
  const seeds = [];
  for (let i = 0; i < n; i++) seeds.push([ctx.range(-SX, SX), ctx.range(-SY, SY), ctx.range(-SZ, SZ), ctx.range(0.2, 0.6), ctx.range(0, 6)]);
  g.userData = { pts: pts, tr: tr, seeds: seeds, SY: SY };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, a = u.pts.geometry.attributes.position.array, b = u.tr.geometry.attributes.position.array;
  const H = u.SY * 2;
  for (let i = 0; i < u.seeds.length; i++) {
    const q = u.seeds[i];
    const y = ((q[1] + u.SY + t * q[3]) % H + H) % H - u.SY;
    const x = q[0] + Math.sin(t * 0.4 + q[4]) * 0.4, z = q[2] + Math.cos(t * 0.3 + q[4]) * 0.4;
    a[i * 3] = x; a[i * 3 + 1] = y; a[i * 3 + 2] = z;
    b[i * 6] = x; b[i * 6 + 1] = y; b[i * 6 + 2] = z;
    b[i * 6 + 3] = x; b[i * 6 + 4] = y - 0.6 * q[3] * 2; b[i * 6 + 5] = z;
  }
  u.pts.geometry.attributes.position.needsUpdate = true;
  u.tr.geometry.attributes.position.needsUpdate = true;
}
