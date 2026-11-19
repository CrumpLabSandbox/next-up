// Three small glowing ring grooves (teal, green, silver) flat on a chest lid at the interlocking circle centers. params: r (m), spread (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.r || 0.04, s = p.spread || 0.065;
  const cols = ['#5fffe0', '#6dff7a', '#e8f0ff'];
  const pos = [[-s, s * 0.55], [s, s * 0.55], [0, -s]];
  g.userData.ms = [];
  pos.forEach((c, i) => {
    const m = ctx.mat(cols[i], { emissive: cols[i], emissiveIntensity: 2, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(r * 0.75, r, 20), m);
    ring.rotation.x = -Math.PI / 2; ring.position.set(c[0], 0, c[1]); g.add(ring);
    g.userData.ms.push(m);
  });
  return g;
}
export function update(obj, t) {
  obj.userData.ms.forEach((m, i) => { m.emissiveIntensity = 1.8 + 0.7 * Math.sin(t * 2 + i * 1.3); });
}