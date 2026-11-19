// Tiny faintly silver scratched letters in an arc just inside a hanging bell's rim; local origin at the bell's hand/top, bell hangs below; params: height (bell height)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 0.16, k = H / 0.1;
  const m = new THREE.MeshBasicMaterial({ color: '#dfe6ff', fog: false });
  const R = 0.04 * k;
  for (let i = 0; i < 9; i++) {
    const a = 0.6 + i * 0.28;
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.002, ctx.range(0.006, 0.014)), m);
    b.position.set(Math.cos(a) * R, -H + 0.006, Math.sin(a) * R);
    b.rotation.y = -a + ctx.range(-0.3, 0.3);
    g.add(b);
  }
  const ht = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c * 0.85, c * 0.92, c]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#bfd8ff', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(0.3, 0.3, 1);
  sp.position.set(0, -H, 0.02);
  g.add(sp);
  g.userData.sp = sp;
  return g;
}
export function update(obj, t) {
  obj.userData.sp.material.opacity = 0.5 + 0.2 * Math.sin(t * 1.5);
}
