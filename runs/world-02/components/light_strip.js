// Flat feathered additive strip along Z; params: width, length, color, opacity
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const c = new THREE.Color(p.color || '#bfe4ff');
  const tex = ctx.dataTexture(32, 64, (u, v) => {
    const e = Math.pow(Math.max(0, 1 - Math.abs(u * 2 - 1)), 1.6);
    const f = Math.pow(Math.sin(Math.PI * v), 0.8);
    const k = e * f * 255;
    return [k * c.r, k * c.g, k * c.b];
  });
  const geo = new THREE.PlaneGeometry(p.width || 2, p.length || 14);
  geo.rotateX(-Math.PI / 2);
  g.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: p.opacity || 0.15, fog: false })));
  return g;
}
