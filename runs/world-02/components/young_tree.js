// Slender young tree with pale trunk, round fresh leaf clusters and a glowing gold bud; params: height, leaf
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 4, add = THREE.AdditiveBlending;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.13, H * 0.85, 6), ctx.mat('#d8cdb4'));
  trunk.position.y = H * 0.425; trunk.rotation.z = 0.04; g.add(trunk);
  const br = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 1, 5), ctx.mat('#d8cdb4'));
  br.position.set(0.4, 2.0, 0); br.rotation.z = -1.25; g.add(br);
  const leaves = new THREE.Group(); leaves.position.y = H * 0.75; g.add(leaves);
  const cols = [p.leaf || '#a8e07c', '#8fd468', '#b8ea8c'];
  const spots = [[0, 0.4, 0, 0.95], [0.7, 0, 0.2, 0.7], [-0.7, 0.1, -0.2, 0.75], [0.1, 0.1, 0.7, 0.65], [-0.2, 0.9, -0.1, 0.6], [0.3, -0.3, -0.6, 0.6]];
  spots.forEach((s, i) => {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(s[3], 1), ctx.mat(cols[i % 3]));
    m.position.set(s[0], s[1], s[2]); leaves.add(m);
  });
  const bud = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffd060', fog: false }));
  bud.position.set(0.5, H * 0.75 + 0.2, 0.85); g.add(bud);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.8, c * 0.4]; });
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffc860', transparent: true, opacity: 0.5, depthWrite: false, blending: add, fog: false }));
  halo.scale.set(1, 1, 1); halo.position.copy(bud.position); g.add(halo);
  g.userData = { leaves, halo };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.leaves.rotation.z = Math.sin(t * 0.8) * 0.02; u.leaves.rotation.x = Math.sin(t * 0.6 + 1) * 0.02;
  u.halo.material.opacity = 0.45 + 0.12 * Math.sin(t * 1.5);
}
