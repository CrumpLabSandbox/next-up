// Alternating faint boot prints pressed in ash running along -Z from local origin; params: length, spacing, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 30, sp = p.spacing || 0.7;
  const n = Math.floor(L / sp);
  const geo = new THREE.CylinderGeometry(0.5, 0.5, 0.01, 7);
  const im = new THREE.InstancedMesh(geo, ctx.mat(p.color || '#5d6784', { emissive: '#2a3048', emissiveIntensity: 0.15 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const side = i % 2 ? 1 : -1;
    d.position.set(side * 0.13 + ctx.range(-0.03, 0.03), 0.025, -i * sp);
    d.scale.set(0.12, 1, 0.3);
    d.rotation.y = ctx.range(-0.12, 0.12);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}
