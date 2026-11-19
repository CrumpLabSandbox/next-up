// Expanding feathered rings of pale light on water with star discs, staggered; params: radius (max m), rings, thickness, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.rings || 3, T = p.thickness || 0.12, col = p.color || '#dfe6ff';
  const tex = ctx.dataTexture(4, 16, (u, v) => { const k = Math.pow(Math.sin(Math.PI * v), 1.5) * 255; return [k, k, k]; });
  const S = 64, rings = [];
  const sg = new THREE.CircleGeometry(0.075, 8);
  sg.rotateX(-Math.PI / 2);
  for (let i = 0; i < n; i++) {
    const pos = new Float32Array((S + 1) * 2 * 3), uv = [], idx = [];
    for (let j = 0; j <= S; j++) {
      uv.push(j / S, 0, j / S, 1);
      if (j < S) { const a = j * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({ map: tex, color: col, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.position.y = 0.04 + i * 0.002;
    g.add(mesh);
    const sm = new THREE.MeshBasicMaterial({ color: '#eaf4ff', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const stars = new THREE.InstancedMesh(sg, sm, 12);
    stars.frustumCulled = false;
    stars.position.y = 0.06 + i * 0.002;
    g.add(stars);
    const ang = [];
    for (let k = 0; k < 12; k++) ang.push([(k + ctx.range(0, 0.8)) / 12 * 6.283, ctx.range(-0.15, 0.15), ctx.range(0, 6)]);
    rings.push({ mesh: mesh, stars: stars, ang: ang });
  }
  g.userData = { rings: rings, R: p.radius || 14, T: T, d: new THREE.Object3D(), S: S };
  return g;
}
export function update(obj, t) {
  const u = obj.userData, P = 7;
  u.rings.forEach((rg, i) => {
    const f = (((t - i * 0.6) / P) % 1 + 1) % 1;
    const r = 0.8 + (u.R - 0.8) * f;
    const fade = (1 - f) * Math.min(1, f * 10);
    const h = u.T * (1 + f);
    const a = rg.mesh.geometry.attributes.position.array;
    for (let j = 0; j <= u.S; j++) {
      const th = j / u.S * 6.2832, c = Math.cos(th), s = Math.sin(th);
      const o = j * 6;
      a[o] = c * (r - h); a[o + 1] = 0; a[o + 2] = s * (r - h);
      a[o + 3] = c * (r + h); a[o + 4] = 0; a[o + 5] = s * (r + h);
    }
    rg.mesh.geometry.attributes.position.needsUpdate = true;
    rg.mesh.material.opacity = 0.35 * fade;
    rg.stars.material.opacity = 0.8 * fade;
    rg.ang.forEach((q, k) => {
      const rr = r + q[1];
      u.d.position.set(Math.cos(q[0]) * rr, 0, Math.sin(q[0]) * rr);
      u.d.scale.setScalar(0.7 + 0.4 * Math.sin(t * 2 + q[2]));
      u.d.updateMatrix();
      rg.stars.setMatrixAt(k, u.d.matrix);
    });
    rg.stars.instanceMatrix.needsUpdate = true;
  });
}
