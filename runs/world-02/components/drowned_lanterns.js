// Row of dark iron lanterns under ice along +Z with big pale halos, rim rings and flickering amber embers; params: count, spacing, size, depth
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 6, sp = p.spacing || 4, s = p.size || 0.4, dep = p.depth || 0.7;
  const iron = ctx.mat('#23252f', { emissive: '#3a3f5c', emissiveIntensity: 0.3 });
  const rim = ctx.mat('#23252f', { emissive: '#8fc0ff', emissiveIntensity: 0.9 });
  const dm = new THREE.MeshBasicMaterial({ color: '#0b1226', transparent: true, opacity: 0.4, depthWrite: false });
  const tex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 1.8) * 255;
    return [k * 0.56, k * 0.66, k * 0.85];
  });
  const atex = ctx.dataTexture(64, 64, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const k = Math.pow(1 - d, 2) * 255;
    return [k, k * 0.7, k * 0.28];
  });
  const gm = new THREE.MeshBasicMaterial({ map: tex, color: '#8fc0ff', transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
  const rm = new THREE.MeshBasicMaterial({ color: '#8fc0ff', transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, side: THREE.DoubleSide });
  const rg = new THREE.RingGeometry(0.27, 0.3, 24);
  rg.rotateX(-Math.PI / 2);
  const cg = new THREE.CircleGeometry(s * 0.7, 12);
  cg.rotateX(-Math.PI / 2);
  const col = new THREE.CylinderGeometry(s * 0.3, s * 0.45, dep + 0.1, 8, 1, true);
  const embers = [];
  for (let i = 0; i < n; i++) {
    const z = i * sp;
    const l = new THREE.Group();
    l.position.set(0, -dep, z);
    l.add(new THREE.Mesh(new THREE.IcosahedronGeometry(s / 2, 0), iron));
    const band = new THREE.Mesh(new THREE.TorusGeometry(s / 2, 0.03, 4, 8), rim);
    band.rotation.x = Math.PI / 2;
    l.add(band);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(s * 0.25, s * 0.2, 6), iron);
    cap.position.y = s * 0.55;
    l.add(cap);
    const em = new THREE.Mesh(new THREE.SphereGeometry(s * 0.14, 6, 5), new THREE.MeshBasicMaterial({ color: '#ffb347', transparent: true, opacity: 0 }));
    l.add(em);
    g.add(l);
    const c = new THREE.Mesh(col, dm);
    c.position.set(0, -dep / 2 + 0.05, z);
    g.add(c);
    const d = new THREE.Mesh(cg, dm);
    d.position.set(0, 0.085, z);
    g.add(d);
    const h = new THREE.Mesh(cg, gm);
    h.scale.setScalar(3);
    h.position.set(0, 0.095, z);
    g.add(h);
    const r = new THREE.Mesh(rg, rm);
    r.position.set(0, 0.11, z);
    g.add(r);
    const ag = new THREE.CircleGeometry(s * 1.6, 20);
    ag.rotateX(-Math.PI / 2);
    const am = new THREE.Mesh(ag, new THREE.MeshBasicMaterial({ map: atex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    am.position.set(0, 0.12, z);
    g.add(am);
    embers.push([em, am]);
  }
  g.userData.embers = embers;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const e = obj.userData.embers;
  for (let i = 0; i < e.length; i++) {
    let f = Math.max(0, Math.sin(t * 0.9 - i * 0.8));
    f = Math.pow(f, 3) * (0.8 + 0.2 * Math.sin(t * 9 + i * 2));
    e[i][0].material.opacity = f;
    e[i][1].material.opacity = f * 0.4;
  }
}
