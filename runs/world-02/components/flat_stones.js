// Row of flat round half-sunk pale stones along +X with glowing tops, ash mound rings, cooler tint toward the east; params: count, length, width, thickness
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 8, L = p.length || 12, W = p.width || 1, T = p.thickness || 0.2;
  const greys = ['#a9b1c4', '#8a90a3', '#c4cbe0'];
  const warm = new THREE.Color('#bcd8ff'), cool = new THREE.Color('#8fd0ff');
  const ringMat = ctx.mat('#dfe6ff', { emissive: '#8f98ad', emissiveIntensity: 0.3 });
  for (let i = 0; i < n; i++) {
    const col = ctx.pick(greys);
    const s = ctx.range(0.9, 1.1);
    const stone = new THREE.Mesh(new THREE.CylinderGeometry(W * 0.5 * s, W * 0.55 * s, T, 7), ctx.mat(col, { emissive: '#8f98ad', emissiveIntensity: 0.2 }));
    const x = (i / (n - 1)) * L;
    const z = Math.sin(i * 0.8) * 0.6 + ctx.range(-0.15, 0.15);
    stone.position.set(x, 0, z);
    stone.rotation.y = ctx.range(0, 6);
    stone.rotation.x = ctx.range(-0.04, 0.04);
    stone.rotation.z = ctx.range(-0.04, 0.04);
    stone.scale.z = ctx.range(0.85, 1.1);
    g.add(stone);
    const tc = warm.clone();
    if (i >= n - 3) tc.lerp(cool, 0.25);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(W * 0.4 * s, W * 0.4 * s, 0.01, 7), ctx.mat('#dfe6ff', { emissive: '#' + tc.getHexString(), emissiveIntensity: 0.8 }));
    top.position.set(x, T / 2 + 0.006, z);
    top.rotation.y = stone.rotation.y;
    top.scale.z = stone.scale.z;
    g.add(top);
    const ring = new THREE.Mesh(new THREE.IcosahedronGeometry(0.65, 1), ringMat);
    ring.scale.set(1, 0.12 / 1.3, ctx.range(0.9, 1.05));
    ring.position.set(x, -0.03, z);
    ring.rotation.y = ctx.range(0, 6);
    g.add(ring);
  }
  return g;
}
