// Shallow round pool of pale blue light with soft feathered edge and ripple rings; params: radius, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 3;
  const col = new THREE.Color(p.color || '#8fd0ff');
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2.2) * 255;
    return [k * col.r, k * col.g, k * col.b];
  });
  const geo = new THREE.CircleGeometry(R, 32);
  geo.rotateX(-Math.PI / 2);
  const disc = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.5, fog: false }));
  disc.position.y = 0.05;
  g.add(disc);
  const rings = [];
  for (let i = 0; i < 3; i++) {
    const rg = new THREE.RingGeometry(0.94, 1, 40);
    rg.rotateX(-Math.PI / 2);
    const m = new THREE.MeshBasicMaterial({ color: '#cfeaff', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.3, fog: false });
    const r = new THREE.Mesh(rg, m);
    r.position.y = 0.06;
    g.add(r);
    rings.push(r);
  }
  g.userData = { rings: rings, R: R };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  u.rings.forEach((r, i) => {
    const f = (t * 0.15 + i / 3) % 1;
    const s = Math.max(0.05, f * u.R * 0.8);
    r.scale.set(s, 1, s);
    r.material.opacity = 0.3 * (1 - f) * Math.min(1, f * 6);
  });
}
