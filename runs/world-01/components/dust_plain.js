// Flat disc of pale dusty ground with faint ripples. params: radius (m), color, hole [x,z,r] optional circular opening
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 200;
  let geo;
  let rep = r / 4;
  if (p.hole) {
    const s = new THREE.Shape();
    s.absarc(0, 0, r, 0, Math.PI * 2, false);
    const h = new THREE.Path();
    h.absarc(p.hole[0], -p.hole[1], p.hole[2], 0, Math.PI * 2, true);
    s.holes.push(h);
    geo = new THREE.ShapeGeometry(s, 24);
    geo.rotateX(-Math.PI / 2);
    rep = 1 / 8;
  } else {
    geo = new THREE.CircleGeometry(r, 48, 0, Math.PI * 2);
    geo.rotateX(-Math.PI / 2);
  }
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    const s = 0.5 + 0.5 * Math.sin((u * 14 + ctx.noise2(u * 6, v * 6) * 3) * Math.PI);
    const n = ctx.noise2(u * 20, v * 20);
    const k = 0.82 + 0.1 * s + 0.08 * n;
    return [Math.floor(190 * k), Math.floor(192 * k), Math.floor(200 * k)];
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(rep, rep);
  const m = new THREE.MeshStandardMaterial({ map: tex, color: p.color || '#b8bac4', roughness: 1, emissive: '#2a2c38', emissiveIntensity: 0.5, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geo, m);
  mesh.position.y = -0.01;
  g.add(mesh);
  return g;
}
