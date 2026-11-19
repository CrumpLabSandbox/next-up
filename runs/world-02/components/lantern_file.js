// Single file of violet hooded figures with starlight faces carrying gold lanterns, walking toward -Z, spaced along +Z from origin; params: count, spacing, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const N = p.count || 7, S = p.spacing || 2.8, H = p.height || 1.8;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const add = THREE.AdditiveBlending;
  const cloakM = ctx.mat('#8a7aa0', { emissive: '#8a6a98', emissiveIntensity: 0.06 });
  const hoodM = ctx.mat('#7e6e96', { emissive: '#8a6a98', emissiveIntensity: 0.06 });
  const frameM = ctx.mat('#3a3040');
  const glassM = new THREE.MeshBasicMaterial({ color: '#ffd090', fog: false });
  const figs = [];
  for (let i = 0; i < N; i++) {
    const f = new THREE.Group();
    f.position.set(ctx.range(-0.35, 0.35), 0, i * S);
    const h = H * ctx.range(0.95, 1.05);
    const body = new THREE.Mesh(new THREE.ConeGeometry(h * 0.25, h * 0.85, 8), cloakM);
    body.position.y = h * 0.425; f.add(body);
    const hood = new THREE.Mesh(new THREE.SphereGeometry(h * 0.12, 8, 6), hoodM);
    hood.scale.set(1, 1.2, 1.1); hood.position.y = h * 0.9; f.add(hood);
    const face = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#dfe6ff', transparent: true, opacity: 0.7, depthWrite: false, blending: add, fog: false }));
    face.scale.set(0.2, 0.26, 1); face.position.set(0, h * 0.89, -h * 0.07); f.add(face);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.5, 5), cloakM);
    arm.position.set(0.22, h * 0.6, -0.2); arm.rotation.x = -1.1; f.add(arm);
    const lan = new THREE.Group(); lan.position.set(0.25, h * 0.5, -0.45);
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.17, 0.13), frameM); lan.add(box);
    const gl = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.13, 0.1), glassM); lan.add(gl);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffc27a', transparent: true, opacity: 0.6, depthWrite: false, blending: add, fog: false }));
    halo.scale.set(2.2, 2.2, 1); lan.add(halo);
    f.add(lan);
    const sh = new THREE.Mesh(new THREE.CircleGeometry(0.4, 12), new THREE.MeshBasicMaterial({ color: '#6a4060', transparent: true, opacity: 0.25, depthWrite: false, fog: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = 0.05; f.add(sh);
    g.add(f); figs.push({ f, lan, halo, ph: ctx.range(0, 6), by: f.position.x });
  }
  g.userData = { figs };
  return g;
}
export function update(obj, t) {
  for (const q of obj.userData.figs) {
    q.f.position.y = 0.03 * Math.abs(Math.sin(t * 1.4 + q.ph));
    q.f.rotation.z = 0.02 * Math.sin(t * 0.7 + q.ph);
    q.lan.rotation.z = 0.08 * Math.sin(t * 1.4 + q.ph);
    q.halo.material.opacity = 0.6 + 0.05 * Math.sin(t * 3 + q.ph);
  }
}
