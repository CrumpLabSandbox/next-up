// Small cloaked figure seen from behind (back faces +Z, looks -Z), warm silhouette, thin rim-lit hood, contact shadow, holding a dark bell-shaped hollow raised high; params: height, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 1;
  const st = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, 1 - q); const k = s * s * (3 - 2 * s) * 255; return [k, k, k]; });
  const sh = new THREE.Mesh(new THREE.CircleGeometry(H * 0.5, 20), new THREE.MeshBasicMaterial({ color: '#8a5a50', alphaMap: st, transparent: true, opacity: 0.3, depthWrite: false, fog: false }));
  sh.rotation.x = -Math.PI / 2; sh.position.y = 0.04; sh.renderOrder = 12; g.add(sh);
  const cloak = ctx.mat(p.color || '#b88a64', { emissive: '#ffb870', emissiveIntensity: 0.05 });
  const body = new THREE.Mesh(new THREE.ConeGeometry(H * 0.3, H * 0.75, 8), cloak);
  body.position.y = H * 0.375; g.add(body);
  const head = new THREE.Group(); head.position.y = H * 0.84; head.rotation.z = 0.18; g.add(head);
  const hood = new THREE.Mesh(new THREE.SphereGeometry(H * 0.14, 8, 6), ctx.mat('#c09a70', { emissive: '#ffb870', emissiveIntensity: 0.05 }));
  hood.scale.set(1, 1.1, 1.05); head.add(hood);
  const rim = new THREE.Mesh(new THREE.SphereGeometry(H * 0.15, 8, 6), new THREE.MeshBasicMaterial({ color: '#fff0d0', side: THREE.BackSide, fog: false }));
  rim.scale.set(1.03, 1.1, 1.04); head.add(rim);
  const arm = ctx.mat('#a98462', { emissive: '#ffb870', emissiveIntensity: 0.05 });
  for (const s of [-1, 1]) {
    const a = new THREE.Mesh(new THREE.CylinderGeometry(H * 0.04, H * 0.05, H * 0.36, 5), arm);
    a.position.set(s * H * 0.14, H * 0.58, -H * 0.2); a.rotation.x = -0.6; g.add(a);
  }
  const bell = new THREE.Mesh(new THREE.SphereGeometry(H * 0.1, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.8), ctx.mat('#14101a'));
  bell.position.set(0, H * 0.66, -H * 0.36); g.add(bell);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd9a0', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  halo.scale.set(3, 3, 1); halo.position.y = H * 0.5; g.add(halo);
  g.userData = { body: body, halo: halo, head: head };
  return g;
}
export function update(obj, t) {
  obj.userData.body.rotation.z = 0.02 * Math.sin(t * 0.7);
  obj.userData.head.rotation.z = 0.18 + 0.02 * Math.sin(t * 0.5);
  obj.userData.halo.material.opacity = 0.12 + 0.02 * Math.sin(t * 1.1);
}
