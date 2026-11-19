// Small flat glowing white petal mark with bright soft halo; params: size (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.1, c = p.color || '#ffffff';
  const sh = new THREE.Shape();
  sh.moveTo(0, -s);
  sh.quadraticCurveTo(s * 0.7, -s * 0.2, 0, s);
  sh.quadraticCurveTo(-s * 0.7, -s * 0.2, 0, -s);
  const geo = new THREE.ShapeGeometry(sh);
  geo.rotateX(-Math.PI / 2);
  g.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide, fog: false })));
  const t = ctx.dataTexture(64, 64, (u, v) => { const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - d, 2) * 255; return [k * 0.8, k * 0.9, k]; });
  const cg = new THREE.CircleGeometry(s * 4, 24);
  cg.rotateX(-Math.PI / 2);
  const hm = new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const h = new THREE.Mesh(cg, hm);
  h.position.y = 0.01;
  g.add(h);
  g.userData.hm = hm;
  return g;
}
export function update(obj, t) {
  obj.userData.hm.opacity = 0.7 + 0.15 * Math.sin(t * 2.2);
}
