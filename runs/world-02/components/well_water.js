// Still black water disc with reflected stars and an amber lantern dot, slow shimmer; params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 0.5;
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    let c = [3, 4, 10];
    const n = ctx.noise2(u * 90, v * 90);
    if (n > 0.86) { const k = 120 + (n - 0.86) * 1200; c = [k * 0.85, k * 0.9, k]; }
    const d = Math.hypot(u - 0.5, v - 0.36);
    if (d < 0.07) c = [255, 179, 71];
    else if (d < 0.14) { const k = 1 - (d - 0.07) / 0.07; c = [c[0] + 120 * k, c[1] + 70 * k, c[2] + 20 * k]; }
    return c;
  });
  const geo = new THREE.CircleGeometry(R, 16);
  geo.rotateX(-Math.PI / 2);
  const disc = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex }));
  g.add(disc);
  g.userData.disc = disc;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.userData.disc.rotation.y = Math.sin(t * 0.2) * 0.03;
}
