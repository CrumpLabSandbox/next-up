// Silver studs along the light seam, pulsing fast in sequence; final stud at the bowl glows brightest. params: count, spacing (m), color, endZ
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 13, s = p.spacing || 5;
  const c = p.color || '#dfe8ff';
  for (let i = 1; i <= n; i++) {
    const z = -s * i;
    let x = 0.65;
    if (z < -3 && z >= -20) x = 0.65 + (0.3 - 0.65) * (-z - 3) / 17;
    else if (z < -20 && z >= -40) x = 0.3 * (1 - (-z - 20) / 20);
    else if (z < -40) x = 0;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.03, 8), ctx.mat(c, { emissive: c, emissiveIntensity: 1 }));
    m.position.set(x, 0.02, z);
    g.add(m);
  }
  const last = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.03, 8), ctx.mat('#ffffff', { emissive: '#f0f6ff', emissiveIntensity: 3 }));
  last.position.set(0, 0.02, p.endZ || -71.5);
  g.add(last);
  return g;
}
export function update(obj, t) {
  const k = obj.children.length - 1;
  obj.children.forEach((m, i) => {
    if (i === k) { m.material.emissiveIntensity = 3 + 1.5 * Math.sin(t * 5); return; }
    const w = Math.sin(t * 4 - i * 0.6);
    m.material.emissiveIntensity = 1.2 + 1.6 * Math.max(0, w);
  });
}
