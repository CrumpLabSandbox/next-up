// Row of dark iron lanterns frozen under ice along +Z, seen as dim shapes; params: count, spacing, size
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 6, sp = p.spacing || 4, s = p.size || 0.4;
  const iron = ctx.mat('#08090d', { emissive: '#3a3f5c', emissiveIntensity: 0.4 });
  const rim = ctx.mat('#23252f', { emissive: '#8fc0ff', emissiveIntensity: 0.5 });
  const dm = new THREE.MeshBasicMaterial({ color: '#070b1a', transparent: true, opacity: 0.55, depthWrite: false });
  const gm = new THREE.MeshBasicMaterial({ color: '#8fa8d8', transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending });
  for (let i = 0; i < n; i++) {
    const l = new THREE.Group();
    l.position.set(ctx.range(-0.15, 0.15), -1, i * sp);
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(s / 2, 0), iron);
    l.add(body);
    const band = new THREE.Mesh(new THREE.TorusGeometry(s / 2, 0.025, 4, 8), rim);
    band.rotation.x = Math.PI / 2;
    l.add(band);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(s * 0.25, s * 0.2, 6), iron);
    cap.position.y = s * 0.55;
    l.add(cap);
    g.add(l);
    const cg = new THREE.CircleGeometry(s * 0.7, 10);
    cg.rotateX(-Math.PI / 2);
    const d = new THREE.Mesh(cg, dm);
    d.position.set(l.position.x, 0.085, l.position.z);
    g.add(d);
    const h = new THREE.Mesh(cg, gm);
    h.scale.setScalar(1.6);
    h.position.set(l.position.x, 0.09, l.position.z);
    g.add(h);
  }
  return g;
}
