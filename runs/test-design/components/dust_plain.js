// Wide dust disc, smooth blended texture with blotches, bluish rim glow and radial vignette; params: radius (m), rimColor
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 300;
  const A = [0x8a,0x8d,0xa2], B = [0xa7,0xaa,0xb6], C = [0xbf,0xc2,0xcb], S = [0x7a,0x80,0xa0];
  const sn = (u, v, f) => {
    const x = u * f, y = v * f;
    return ctx.noise2(x, y) * (1 - u) * (1 - v) + ctx.noise2(x - f, y) * u * (1 - v) + ctx.noise2(x, y - f) * (1 - u) * v + ctx.noise2(x - f, y - f) * u * v;
  };
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const tex = ctx.dataTexture(256, 256, (u, v) => {
    const big = sn(u, v, 4);
    const fine = sn(u, v, 24) * 0.5 + sn(u, v, 48) * 0.5;
    const k = big * 0.7 + fine * 0.3;
    let c = mix(A, B, sm(0.3, 0.5, k));
    c = mix(c, C, sm(0.5, 0.7, k));
    c = mix(c, B, 0.4);
    c = mix(c, S, sm(0.45, 0.65, sn(u, v, 3)) * 0.35);
    return [Math.round(c[0]), Math.round(c[1]), Math.round(c[2])];
  });
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  const geo = new THREE.CircleGeometry(r, 64);
  geo.rotateX(-Math.PI / 2);
  const m = ctx.mat('#ffffff', { emissive: p.rimColor || '#4a4d5c', emissiveIntensity: 0.2 });
  m.map = tex;
  g.add(new THREE.Mesh(geo, m));
  const f0 = 40 / r;
  const at = ctx.dataTexture(128, 128, (u, v) => {
    const d = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2);
    const a = Math.round(255 * sm(f0, 1, d) * 0.55);
    return [a, a, a];
  });
  const vg = new THREE.Mesh(geo.clone(), new THREE.MeshBasicMaterial({ color: '#5a6490', alphaMap: at, transparent: true, depthWrite: false, side: THREE.DoubleSide }));
  vg.position.y = 0.02;
  g.add(vg);
  return g;
}