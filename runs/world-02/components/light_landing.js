// Round floating platform of white light with feathered glow; params: radius
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 1.5;
  const gt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 1.5) * 255; return [c * 0.85, c * 0.93, c]; });
  const dg = new THREE.CircleGeometry(R, 32); dg.rotateX(-Math.PI / 2);
  const disc = new THREE.Mesh(dg, new THREE.MeshBasicMaterial({ color: '#eaf4ff', transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  g.add(disc);
  const rg = new THREE.RingGeometry(R * 0.9, R, 32); rg.rotateX(-Math.PI / 2);
  const ring = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  ring.position.y = 0.01; g.add(ring);
  const fg = new THREE.CircleGeometry(R * 2.4, 32); fg.rotateX(-Math.PI / 2);
  const glow = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: gt, color: '#8fc0ff', transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  glow.position.y = -0.02; g.add(glow);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#cfe0ff', transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  sp.scale.set(R * 4, R * 2, 1); sp.position.y = 0.3; g.add(sp);
  g.userData = { glow: glow };
  return g;
}
export function update(obj, t) { obj.userData.glow.material.opacity = 0.5 + 0.07 * Math.sin(t * 1.1); }
