// Wide flat rippled dust disc at y=0. params: radius (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const r = p.radius || 300;
  const geo = new THREE.CircleGeometry(r, 64);
  geo.rotateX(-Math.PI / 2);
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    const n = ctx.noise2(u * 40, v * 40);
    const ripple = 0.5 + 0.5 * Math.sin((u * 30 + n * 4) * Math.PI);
    const c = 0.55 + 0.25 * n + 0.1 * ripple;
    return [c * 170, c * 172, c * 180];
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(r / 10, r / 10);
  const m = new THREE.MeshStandardMaterial({ map: tex, color: p.color || '#a9abb2', roughness: 1, metalness: 0 });
  const mesh = new THREE.Mesh(geo, m);
  g.add(mesh);
  return g;
}