// Small round songbird, blue back, gold breast, open beak, faces +Z; origin at feet; params: size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const S = p.size || 1;
  const body = new THREE.Group(); body.position.y = 0.1 * S; g.add(body);
  const back = new THREE.Mesh(new THREE.SphereGeometry(0.1 * S, 8, 6), ctx.mat('#4f86d8'));
  back.scale.set(1, 0.95, 1.15); body.add(back);
  const breast = new THREE.Mesh(new THREE.SphereGeometry(0.085 * S, 8, 6), ctx.mat('#ffc858', { emissive: '#ffb030', emissiveIntensity: 0.25 }));
  breast.position.set(0, -0.025 * S, 0.05 * S); body.add(breast);
  const head = new THREE.Group(); head.position.set(0, 0.08 * S, 0.09 * S); body.add(head);
  const hm = new THREE.Mesh(new THREE.SphereGeometry(0.06 * S, 8, 6), ctx.mat('#5a92e0')); head.add(hm);
  const bm = ctx.mat('#f0a030');
  const b1 = new THREE.Mesh(new THREE.ConeGeometry(0.02 * S, 0.06 * S, 4), bm);
  b1.rotation.x = Math.PI / 2 - 0.2; b1.position.set(0, 0.008 * S, 0.075 * S); head.add(b1);
  const b2 = new THREE.Mesh(new THREE.ConeGeometry(0.018 * S, 0.05 * S, 4), bm);
  b2.rotation.x = Math.PI / 2 + 0.35; b2.position.set(0, -0.012 * S, 0.07 * S); head.add(b2);
  const eye = ctx.mat('#101018');
  [-1, 1].forEach((s) => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.01 * S, 5, 4), eye); e.position.set(s * 0.04 * S, 0.012 * S, 0.04 * S); head.add(e); });
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.05 * S, 0.012 * S, 0.12 * S), ctx.mat('#3a6ec0'));
  tail.position.set(0, 0.0, -0.15 * S); tail.rotation.x = 0.3; body.add(tail);
  g.userData = { body, head };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, k = Math.max(0, Math.sin(t * 5));
  u.body.scale.y = 1 + 0.04 * k; u.head.rotation.x = -0.25 * k;
  u.body.rotation.z = Math.sin(t * 2.5) * 0.04;
}
