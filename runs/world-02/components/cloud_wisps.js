// Soft pink-gold mist ribbons curling up around the cloud stones path (local origin at first stone, runs -Z); params: count, length, drop
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 22, L = p.length || 30, D = p.drop || 5;
  const tex = ctx.dataTexture(16, 64, (u, v) => { const a = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.3); const b = Math.sin(Math.PI * v); const k = a * b * 255; return [k, k, k]; });
  const ws = [];
  for (let i = 0; i < n; i++) {
    const t = ctx.range(0, 1);
    const x = t * 9 + 3 * Math.sin(t * 5) + ctx.range(-1.8, 1.8);
    const z = -t * L + ctx.range(-1.8, 1.8);
    const y = -D * t - 1.2;
    const h = ctx.range(1.4, 2.6);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(ctx.range(0.3, 0.6), h), new THREE.MeshBasicMaterial({ map: tex, color: ctx.pick(['#ffc2a0', '#ffd4a0', '#f0a8b8']), transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false }));
    m.position.set(x, y + h / 2, z); m.rotation.y = ctx.range(0, 3.14);
    g.add(m); ws.push({ m: m, x: x, y: y + h / 2, z: z, ph: ctx.range(0, 6), sp: ctx.range(0.2, 0.4) });
  }
  g.userData = { ws: ws };
  return g;
}
export function update(obj, t) {
  const ws = obj.userData.ws;
  for (let i = 0; i < ws.length; i++) {
    const w = ws[i], f = (t * w.sp * 0.3 + w.ph) % 1;
    w.m.position.set(w.x + Math.sin(t * w.sp + w.ph) * 0.4, w.y + f * 1.0 - 0.3, w.z + Math.cos(t * w.sp + w.ph) * 0.4);
    w.m.rotation.z = Math.sin(t * w.sp * 2 + w.ph) * 0.3;
    w.m.material.opacity = 0.3 * Math.sin(Math.PI * f);
  }
}
