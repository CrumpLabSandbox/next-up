// Soft concentric gold rings expanding across a floor and fading before 80% of radius; params: radius, rings
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 2.8, n = p.rings || 4;
  const tex = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.exp(-Math.pow((q - 0.9) / 0.1, 2)) * 255; return [k, k * 0.8, k * 0.45]; });
  const rings = [];
  for (let i = 0; i < n; i++) {
    const geo = new THREE.CircleGeometry(R, 48); geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: '#e8a257', transparent: true, opacity: 0.25, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    m.position.y = 0.04 + i * 0.002; g.add(m); rings.push(m);
  }
  g.userData = { rings: rings, n: n };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  for (let i = 0; i < u.n; i++) {
    const f = ((t * 0.15 + i / u.n) % 1);
    const s = 0.1 + 0.79 * f;
    u.rings[i].scale.set(s, 1, s);
    const fade = Math.sin(Math.PI * Math.min(1, f * 1.1)) * Math.pow(1 - f, 0.7);
    u.rings[i].material.opacity = 0.25 * fade;
  }
}