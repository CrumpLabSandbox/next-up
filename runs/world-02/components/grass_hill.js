// Soft rounded dome hill with three-green vertex colours and a soft pale earth footpath to the top; base at y=0; params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 12, H = p.height || 10;
  const f = (r) => { const q = Math.min(1, r / R); const dome = Math.sqrt(Math.max(0, 1 - q * q)); const s = Math.max(0, 1 - q); const sm = s * s * (3 - 2 * s); return H * (0.5 * dome + 0.5 * sm); };
  const rings = 22, segs = 48, pos = [], col = [], idx = [];
  const c = new THREE.Color(), cTop = new THREE.Color('#9ad675'), cMid = new THREE.Color('#7cc864'), cBase = new THREE.Color('#5aa84c');
  for (let i = 0; i <= rings; i++) {
    const r = R * i / rings, k = i / rings;
    for (let j = 0; j < segs; j++) {
      const a = j / segs * Math.PI * 2, x = Math.cos(a) * r, z = Math.sin(a) * r;
      pos.push(x, f(r) - (i === rings ? 0.3 : 0), z);
      if (k < 0.5) c.copy(cTop).lerp(cMid, k * 2); else c.copy(cMid).lerp(cBase, (k - 0.5) * 2);
      const n = ctx.noise2(x * 0.25, z * 0.25);
      c.lerp(n > 0.5 ? cTop : cBase, Math.abs(n - 0.5) * 0.7);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < rings; i++) for (let j = 0; j < segs; j++) {
    const a = i * segs + j, b = i * segs + (j + 1) % segs, d = (i + 1) * segs + j, e = (i + 1) * segs + (j + 1) % segs;
    idx.push(a, d, b, b, d, e);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx); geo.computeVertexNormals();
  g.add(new THREE.Mesh(geo, ctx.mat('#ffffff', { vertexColors: true })));
  const N = 60, pp = [], pc = [], pi = [], a0 = 1.9;
  const centre = new THREE.Color('#e6d5aa'), edge = new THREE.Color('#b9c88a');
  const pt = (t) => { const r = R * (0.99 - 0.93 * t), a = a0 + t * 4.2 + Math.sin(t * 9) * 0.12; return [Math.cos(a) * r, Math.sin(a) * r, r]; };
  for (let i = 0; i <= N; i++) {
    const t = i / N, P = pt(t), Q = pt(Math.min(1, t + 0.01)), Q0 = pt(Math.max(0, t - 0.01));
    let tx = Q[0] - Q0[0], tz = Q[1] - Q0[1]; const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l;
    const w = 0.3 * (1 - t * 0.4), y = f(P[2]) + 0.07;
    pp.push(P[0] - tz * w, y, P[1] + tx * w, P[0], y + 0.01, P[1], P[0] + tz * w, y, P[1] - tx * w);
    pc.push(edge.r, edge.g, edge.b, centre.r, centre.g, centre.b, edge.r, edge.g, edge.b);
    if (i < N) { const k = i * 3; pi.push(k, k + 1, k + 3, k + 1, k + 4, k + 3, k + 1, k + 2, k + 4, k + 2, k + 5, k + 4); }
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3));
  pg.setAttribute('color', new THREE.Float32BufferAttribute(pc, 3));
  pg.setIndex(pi); pg.computeVertexNormals();
  g.add(new THREE.Mesh(pg, ctx.mat('#ffffff', { vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })));
  return g;
}
