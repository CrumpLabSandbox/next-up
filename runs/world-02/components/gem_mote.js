// Tiny white petal mote drifting in a small orbit; params: size (m), radius (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.04;
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, 5, 4), ctx.mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: 2 }));
  m.scale.set(s, s * 0.25, s * 0.6);
  g.add(m);
  g.userData.m = m;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const R = p.radius || 0.04, m = obj.userData.m;
  m.position.set(Math.cos(t * 0.7) * R, Math.sin(t * 0.5) * R * 0.8, Math.sin(t * 0.7) * R);
  m.rotation.set(t * 0.9, t * 0.6, t * 0.4);
}
