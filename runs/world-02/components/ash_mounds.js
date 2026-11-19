// Instanced low ash mounds in a disc or ring around a center; params: cx, cz, reach, inner, count, size, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const cx = p.cx === undefined ? 28 : p.cx, cz = p.cz === undefined ? -41.6 : p.cz;
  const R = p.reach || 25, n = p.count || 250, r0 = p.inner || 0, S = p.size || 1;
  const cols = p.color ? [p.color] : ['#7d869b', '#a9b1c4', '#8f98ad'];
  const geo = new THREE.IcosahedronGeometry(0.5, 0);
  const d = new THREE.Object3D();
  for (let k = 0; k < cols.length; k++) {
    const count = Math.floor(n / cols.length);
    const im = new THREE.InstancedMesh(geo, ctx.mat(cols[k], { emissive: cols[k], emissiveIntensity: 0.2 }), count);
    for (let i = 0; i < count; i++) {
      const a = ctx.range(0, 6.283);
      const rr = r0 > 0 ? r0 + ctx.rng() * (R - r0) : Math.pow(ctx.rng(), 1.3) * R;
      const w = ctx.range(0.5, 1.8) * S;
      d.position.set(cx + Math.cos(a) * rr, 0, cz + Math.sin(a) * rr);
      d.scale.set(w, ctx.range(0.1, 0.24) * S, w * ctx.range(0.5, 1));
      d.rotation.y = ctx.range(0, 6);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    }
    g.add(im);
  }
  return g;
}
