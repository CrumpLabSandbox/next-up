// Tiny round bowl-shaped hollow lined with faint gold light, flat on a stone top; params: radius (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.075;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(R, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#c8934f', side: THREE.BackSide, fog: false }));
  bowl.scale.set(1, 0.5, 1); bowl.position.y = 0.004; g.add(bowl);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(R, 0.008, 5, 20), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }));
  lip.rotation.x = Math.PI / 2; lip.position.y = 0.006; g.add(lip);
  const gl = new THREE.Mesh(new THREE.CircleGeometry(R * 3, 20), new THREE.MeshBasicMaterial({ map: gt, color: '#ffc27a', transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  gl.rotation.x = -Math.PI / 2; gl.position.y = 0.012; g.add(gl);
  g.userData = { gl: gl };
  return g;
}
export function update(obj, t) {
  obj.userData.gl.material.opacity = 0.3 + 0.08 * Math.sin(t * 1.5);
}
