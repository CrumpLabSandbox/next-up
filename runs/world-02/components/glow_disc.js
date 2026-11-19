// Flat feathered additive ground glow; params: radius, color, opacity, power
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const c = new THREE.Color(p.color || '#bfffe8');
  const pw = p.power || 2;
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, pw) * 255;
    return [k * c.r, k * c.g, k * c.b];
  });
  const geo = new THREE.CircleGeometry(p.radius || 2.5, 32);
  geo.rotateX(-Math.PI / 2);
  g.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: p.opacity || 0.1, fog: false })));
  return g;
}
