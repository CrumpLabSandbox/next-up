// Tiny flat etched symbol on a surface. params: kind ('crescent','glint','eye'), size (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const s = p.size || 0.05;
  const c = p.color || '#c8d0ee';
  const m = ctx.mat(c, { emissive: c, emissiveIntensity: 0.8, side: THREE.DoubleSide });
  if (p.kind === 'glint') {
    const d = new THREE.Mesh(new THREE.CircleGeometry(s, 10), m);
    d.rotation.x = -Math.PI / 2;
    g.add(d);
    return g;
  }
  if (p.kind === 'eye') {
    const ring = new THREE.Mesh(new THREE.RingGeometry(s * 0.8, s, 16), m);
    ring.rotation.x = -Math.PI / 2;
    ring.scale.set(1.5, 1, 0.8);
    g.add(ring);
    const pupil = new THREE.Mesh(new THREE.CircleGeometry(s * 0.35, 8), m);
    pupil.rotation.x = -Math.PI / 2;
    g.add(pupil);
    for (let i = -2; i <= 2; i++) {
      const a = i * 0.45;
      const ray = new THREE.Mesh(new THREE.PlaneGeometry(s * 0.12, s * 0.8), m);
      ray.rotation.x = -Math.PI / 2;
      ray.rotation.z = a;
      ray.position.set(Math.sin(-a) * s * 2.0 * -1, 0, s * 1.8 * Math.cos(a));
      g.add(ray);
    }
    return g;
  }
  const arc = new THREE.Mesh(new THREE.RingGeometry(s * 0.8, s, 14, 1, Math.PI * 0.3, Math.PI * 1.4), m);
  arc.rotation.x = -Math.PI / 2;
  arc.position.z = s * 0.3;
  g.add(arc);
  const dot = new THREE.Mesh(new THREE.CircleGeometry(s * 0.2, 8), m);
  dot.rotation.x = -Math.PI / 2;
  dot.position.z = -s * 1.0;
  g.add(dot);
  return g;
}
export function update(obj, t, dt, p) {
  if (p.kind === 'glint') obj.children[0].material.emissiveIntensity = 1.5 + 1.2 * Math.sin(t * 2);
}
