// Amber flame: sphere core, soft round halo, round sprite glow, point light; params: color, size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.18;
  const c = p.color || '#ffd27a';
  const core = new THREE.Mesh(new THREE.SphereGeometry(s, 10, 8), ctx.mat(c, { emissive: c, emissiveIntensity: 2.5 }));
  g.add(core);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(s * 2, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffb347', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending }));
  g.add(halo);
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2.5) * 255;
    return [k, k * 0.7, k * 0.28];
  });
  const sm = new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.3, depthWrite: false, fog: false });
  const sp = new THREE.Sprite(sm);
  sp.scale.set(2.5, 2.5, 1);
  g.add(sp);
  const l = new THREE.PointLight('#ffb347', 5, 24, 2);
  l.position.set(0, 0, -0.3);
  g.add(l);
  return g;
}
