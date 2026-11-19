// Small round dawn room, open toward +Z: feathered round back disc wall (r 1.5) with amber-to-gold gradient, warm feathered floor, dark wooden round table with lit lamp; origin at floor center; params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 1.5;
  const add = THREE.AdditiveBlending;
  const ft = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 0.9) * 255; return [k, k, k]; });
  const wt = ctx.dataTexture(8, 32, (u, v) => { const f = v; return [232 + 23 * f, 162 + 49 * f, 87 + 35 * f]; });
  const wall = new THREE.Mesh(new THREE.CircleGeometry(R, 32), new THREE.MeshBasicMaterial({ map: wt, alphaMap: ft, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false }));
  wall.position.set(0, R * 1.05, -R); g.add(wall);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R * 1.2, 28), new THREE.MeshBasicMaterial({ color: '#a8743c', alphaMap: ft, transparent: true, depthWrite: false, fog: false }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -0.01; g.add(floor);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const wood = ctx.mat('#3a2514', { emissive: '#ffb347', emissiveIntensity: 0.12 });
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.06, 14), wood); top.position.y = 0.5; g.add(top);
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.25, 0.48, 8), wood); leg.position.y = 0.25; g.add(leg);
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.12, 8), ctx.mat('#1a1c28', { emissive: '#ffb347', emissiveIntensity: 0.4 }));
  lamp.position.set(-0.3, 0.59, 0.05); g.add(lamp);
  const fl = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ color: '#fff2d0', fog: false }));
  fl.scale.set(1, 1.5, 1); fl.position.set(-0.3, 0.68, 0.05); g.add(fl);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd37a', transparent: true, opacity: 0.6, depthWrite: false, blending: add, fog: false }));
  sp.scale.set(1, 1, 1); sp.position.set(-0.3, 0.7, 0.05); g.add(sp);
  g.userData = { fl: fl };
  return g;
}
export function update(obj, t) {
  obj.userData.fl.scale.set(1, 1.5 + 0.12 * Math.sin(t * 6), 1);
}
