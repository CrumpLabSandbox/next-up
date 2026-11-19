// Thin dark post with flickering flame, additive glow sprite, warm ground pool and point light; params: height, flameSize, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1.8;
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, h, 5), ctx.mat('#1a1614'));
  post.position.y = h / 2;
  g.add(post);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.025, 0.025), ctx.mat('#1a1614'));
  arm.position.set(0, h, 0);
  g.add(arm);
  const fs = p.flameSize || 0.5;
  const col = p.color || '#ffb040';
  const flame = new THREE.Mesh(new THREE.ConeGeometry(fs * 0.22, fs, 6), ctx.mat(col, { emissive: col, emissiveIntensity: 4 }));
  flame.position.y = h + fs / 2 + 0.05;
  flame.name = 'flame';
  g.add(flame);
  const gt = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2);
    return [Math.floor(255 * k), Math.floor(176 * k), Math.floor(64 * k)];
  });
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.65, depthWrite: false, fog: false }));
  glow.scale.set(3, 3, 1);
  glow.position.y = h + fs / 2 + 0.05;
  glow.name = 'glow';
  g.add(glow);
  const pool = new THREE.Mesh(new THREE.CircleGeometry(2, 24), new THREE.MeshBasicMaterial({ color: '#ffb040', transparent: true, opacity: 0.15, depthWrite: false }));
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = 0.03;
  g.add(pool);
  const light = new THREE.PointLight(col, 3, 25, 1.5);
  light.position.y = h + fs / 2;
  g.add(light);
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const f = obj.getObjectByName('flame');
  if (f) f.scale.set(1 + Math.sin(t * 9) * 0.08, 1 + Math.sin(t * 13 + 1) * 0.12, 1 + Math.sin(t * 11) * 0.08);
  const gl = obj.getObjectByName('glow');
  if (gl) gl.material.opacity = 0.65 + Math.sin(t * 9) * 0.1 + Math.sin(t * 13 + 1) * 0.05;
}
