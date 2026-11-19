// Fine glowing gold vein lines radiating across a flat stone top from origin, pulsing; params: reach (m), rays
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const reach = p.reach || 0.6, rays = p.rays || 9, w = 0.012;
  const pos = [], idx = [];
  function seg(x0, z0, x1, z1, w0) {
    const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz) || 1;
    const nx = -dz / l * w0, nz = dx / l * w0, b = pos.length / 3;
    pos.push(x0 - nx, 0, z0 - nz, x0 + nx, 0, z0 + nz, x1 - nx * 0.6, 0, z1 - nz * 0.6, x1 + nx * 0.6, 0, z1 + nz * 0.6);
    idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2);
  }
  function ray(a, len, w0, depth) {
    let x = 0, z = 0, ang = a;
    const steps = 4;
    for (let i = 0; i < steps; i++) {
      ang += ctx.range(-0.35, 0.35);
      const l = len / steps, nx = x + Math.cos(ang) * l, nz = z + Math.sin(ang) * l;
      seg(x, z, nx, nz, w0 * (1 - i / steps * 0.6));
      if (depth < 1 && i === 1) ray(ang + ctx.range(0.5, 0.9) * (ctx.rng() < 0.5 ? -1 : 1), len * 0.5, w0 * 0.7, depth + 1);
      x = nx; z = nz;
    }
  }
  for (let i = 0; i < rays; i++) ray((i / rays) * Math.PI * 2 + ctx.range(-0.2, 0.2), reach * ctx.range(0.6, 1), w, 0);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  const mat = new THREE.MeshBasicMaterial({ color: '#ffc864', transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
  const m = new THREE.Mesh(geo, mat); g.add(m);
  const wide = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#e8944f', transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  wide.scale.set(1.5, 1, 1.5); wide.position.y = -0.002; g.add(wide);
  g.userData = { m, wide };
  return g;
}
export function update(obj, t) {
  const u = obj.userData;
  u.m.material.opacity = 0.7 + 0.2 * Math.sin(t * 1.2);
  u.wide.material.opacity = 0.2 + 0.08 * Math.sin(t * 1.2 + 0.6);
}
