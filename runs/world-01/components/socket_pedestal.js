// Waist-high stone pedestal with five glowing pearl sockets, each with a distinct symbol (crescent, eye, wave, tree, spiral). params: height, radius, sockets
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const h = p.height || 1, r = p.radius || 0.45, n = p.sockets || 5;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.2, h, 8), ctx.mat('#8e93a2', { emissive: '#3a3e50', emissiveIntensity: 0.4 }));
  body.position.y = h / 2;
  g.add(body);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.15, r * 1.15, 0.08, 8), ctx.mat('#a6abba', { emissive: '#4a4f66', emissiveIntensity: 0.4 }));
  cap.position.y = h + 0.04;
  g.add(cap);
  const glow = ctx.mat('#e8f0ff', { emissive: '#cfe0ff', emissiveIntensity: 1.6 });
  g.userData.glow = glow;
  const rimMat = ctx.mat('#4a4f66', { side: THREE.DoubleSide });
  const y = h + 0.09;
  const flat = (geo) => { const m = new THREE.Mesh(geo, glow); m.rotation.x = -Math.PI / 2; return m; };
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const sx = Math.sin(a), sz = Math.cos(a);
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 10), glow);
    s.position.set(sx * 0.22, h + 0.085, sz * 0.22);
    g.add(s);
    const rim = new THREE.Mesh(new THREE.RingGeometry(0.034, 0.045, 10), rimMat);
    rim.rotation.x = -Math.PI / 2;
    rim.position.set(sx * 0.22, y + 0.002, sz * 0.22);
    g.add(rim);
    const sym = new THREE.Group();
    if (i === 0) {
      const arc = flat(new THREE.RingGeometry(0.022, 0.032, 12, 1, Math.PI * 0.3, Math.PI * 1.4));
      sym.add(arc);
    } else if (i === 1) {
      const eye = flat(new THREE.RingGeometry(0.018, 0.028, 12));
      eye.scale.set(1.6, 1, 0.7);
      sym.add(eye, flat(new THREE.CircleGeometry(0.01, 6)));
    } else if (i === 2) {
      for (let k = 0; k < 3; k++) {
        const w = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.004, 0.008), glow);
        w.position.set(0, 0, (k - 1) * 0.02);
        w.rotation.y = k % 2 ? 0.3 : -0.3;
        sym.add(w);
      }
    } else if (i === 3) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.004, 0.06), glow);
      sym.add(t);
      for (let k = 0; k < 2; k++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.04 - k * 0.012, 0.004, 0.008), glow);
        b.position.z = -0.01 - k * 0.015;
        sym.add(b);
      }
    } else {
      sym.add(flat(new THREE.RingGeometry(0.014, 0.022, 12, 1, 0, Math.PI * 1.6)));
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.004, 0.04), glow);
      st.position.set(0.018, 0, 0.02);
      sym.add(st);
    }
    sym.position.set(sx * 0.35, y, sz * 0.35);
    sym.rotation.y = a;
    g.add(sym);
  }
  return g;
}
export function update(obj, t) {
  if (obj.userData.glow) obj.userData.glow.emissiveIntensity = 1.4 + 0.4 * Math.sin(t * 1.5);
}
