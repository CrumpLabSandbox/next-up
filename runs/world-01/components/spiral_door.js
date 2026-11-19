// Tall narrow pale stone door with carved spiral, glowing silver edge lines, and a pearl-sized hollow in the center. Faces local -Z. params: height, width
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 2.2, W = p.width || 1;
  const door = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.15), ctx.mat('#d4d8e2'));
  door.position.y = H / 2; g.add(door);
  const em = ctx.mat('#dfe8ff', { emissive: '#dfe8ff', emissiveIntensity: 1.8 });
  const t = 0.02, z = -0.08;
  [[0, H, W + 0.04, t], [0, 0.0, W + 0.04, t]].forEach(a => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(a[2], a[3], 0.02), em); b.position.set(0, a[1] + (a[1] ? 0 : 0.01), z); g.add(b);
  });
  [-1, 1].forEach(s => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(t, H, 0.02), em); b.position.set(s * (W / 2 + 0.01), H / 2, z); g.add(b);
  });
  const cy = H * 0.55;
  const sm = ctx.mat('#7c8296');
  let prev = null;
  for (let i = 0; i <= 40; i++) {
    const a = i * 0.45, r = 0.04 + i * 0.0105;
    const pt = new THREE.Vector3(Math.cos(a) * r, cy + Math.sin(a) * r, z);
    if (prev) {
      const d = pt.clone().sub(prev), L = d.length();
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.025, L, 0.02), sm);
      b.position.copy(prev).add(pt).multiplyScalar(0.5);
      b.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
      g.add(b);
    }
    prev = pt;
  }
  const hol = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), ctx.mat('#10131f', { emissive: '#8affc0', emissiveIntensity: 0.6 }));
  hol.position.set(0, cy, z - 0.002); hol.rotation.y = Math.PI; g.add(hol);
  g.userData.m = em;
  return g;
}
export function update(obj, t) {
  obj.userData.m.emissiveIntensity = 1.6 + 0.6 * Math.sin(t * 2);
}