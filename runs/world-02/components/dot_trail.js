// Instanced flat glowing dots winding in an S-curve along +X, shrinking with distance; params: count, spacing, startX, z, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 24, sp = p.spacing || 1.4, x0 = p.startX || 1.5, z0 = p.z || -41.8;
  const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.01, 6), ctx.mat(p.color || '#cfe8ff', { emissive: p.color || '#cfe8ff', emissiveIntensity: 0.8, transparent: true, opacity: 0.8 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    d.position.set(x0 + i * sp, 0.03, z0 + Math.sin(i * 0.45) * 1.3);
    d.scale.setScalar(1.2 - 0.8 * i / n);
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  return g;
}