// Low round rough stone well with cool north rim tint, ash mound ring and fallen stones; params: radius (m), height (m)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.75, H = p.height || 0.8;
  const greys = ['#6f768a', '#4a5068', '#8a90a3'];
  const amber = new THREE.Color('#ffb347'), cool = new THREE.Color('#8a90a3');
  const n = 10;
  const tilt = 4 * Math.PI / 180;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const sc = ctx.range(0.9, 1.15);
    const w = 2 * R * Math.sin(Math.PI / n) * 1.05 * sc;
    const h = H * ctx.range(0.85, 1.08);
    const col = new THREE.Color(ctx.pick(greys));
    if (Math.sin(a) > 0.2) col.lerp(amber, 0.1);
    if (Math.sin(a) < -0.2) col.lerp(cool, 0.45);
    const m = ctx.mat('#' + col.getHexString(), { emissive: '#3a4263', emissiveIntensity: 0.35 });
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.32 * sc), m);
    b.position.set(Math.cos(a) * R, h / 2 - 0.02, Math.sin(a) * R);
    b.rotation.y = -a + Math.PI / 2 + ctx.range(-0.05, 0.05);
    b.rotation.z = ctx.range(-tilt, tilt);
    b.rotation.x = ctx.range(-tilt, tilt);
    g.add(b);
  }
  const hole = new THREE.Mesh(new THREE.CircleGeometry(R * 0.85, 12), new THREE.MeshBasicMaterial({ color: '#010103' }));
  hole.rotation.x = -Math.PI / 2;
  hole.position.y = H * 0.7;
  g.add(hole);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.09, 4, 10), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.6 }));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = H + 0.02;
  rim.scale.set(1, 1, 0.5);
  g.add(rim);
  const mound = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), ctx.mat('#a9b1c4', { emissive: '#6c7690', emissiveIntensity: 0.3 }));
  mound.scale.set(1.1, 0.14, 1.1);
  mound.position.y = -0.03;
  g.add(mound);
  const sm = ctx.mat('#4a5068', { emissive: '#2a3048', emissiveIntensity: 0.25 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + ctx.range(-0.3, 0.3);
    const rr = ctx.range(1.0, 1.5);
    const s = ctx.range(0.15, 0.3);
    const st = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), sm);
    st.scale.set(s, s * 0.6, s * ctx.range(0.8, 1.2));
    st.position.set(Math.cos(a) * rr, s * 0.2, Math.sin(a) * rr);
    st.rotation.y = ctx.range(0, 6);
    g.add(st);
  }
  return g;
}
