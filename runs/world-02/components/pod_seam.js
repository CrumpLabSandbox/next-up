// Hair-thin silver light line along local Z with pulsing halo and small bright glow sprite; params: length (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 0.14;
  const line = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.004, L), new THREE.MeshBasicMaterial({ color: '#f4f8ff', fog: false }));
  g.add(line);
  const ht = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 2) * 255; return [k * 0.85, k * 0.92, k]; });
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sp.scale.set(0.25, 0.25, 1);
  g.add(sp);
  const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#bfd8ff', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  gl.scale.set(0.3, 0.3, 1);
  g.add(gl);
  g.userData.sp = sp;
  g.userData.gl = gl;
  return g;
}
export function update(obj, t) {
  const k = 0.75 + 0.15 * Math.sin(t * 2.2);
  obj.userData.sp.material.opacity = k;
  obj.userData.gl.material.opacity = k;
}
