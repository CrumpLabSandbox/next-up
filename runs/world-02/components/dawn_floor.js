// Round honey-wood floor with feathered edge plus curved gold wall feathered at both ends and fading out by 55% height; params: radius, height
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 3, H = p.height || 3.2;
  const ft = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.min(1, (1 - q) * 5) * 255; return [k, k, k]; });
  const wood = ctx.dataTexture(64, 64, (u, v) => {
    const x = (u - 0.5) * 2, z = (v - 0.5) * 2; const r = Math.hypot(x, z);
    const band = 0.5 + 0.5 * Math.sin(r * 38 + ctx.noise2(x * 3, z * 3) * 3);
    const plank = 0.5 + 0.5 * Math.sin(x * 26);
    const f = 0.96 + 0.025 * band + 0.015 * plank;
    const c = Math.pow(Math.max(0, 1 - r / 0.8), 1.2);
    const rr = (200 + 55 * c) * f, gg = (147 + 64 * c) * f, bb = (79 + 43 * c) * f;
    return [Math.min(255, rr), Math.min(211, gg), Math.min(122, bb)];
  });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 64), new THREE.MeshBasicMaterial({ map: wood, alphaMap: ft, transparent: true, fog: false }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = 0.0; g.add(floor);
  const rt = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const s = Math.max(0, Math.min(1, (q - 0.75) / 0.2)); const k = s * Math.min(1, (1 - q) * 6) * 0.6 * 255; return [k, k, k]; });
  const rim = new THREE.Mesh(new THREE.CircleGeometry(R, 64), new THREE.MeshBasicMaterial({ color: '#c8934f', alphaMap: rt, transparent: true, depthWrite: false, fog: false }));
  rim.rotation.x = -Math.PI / 2; rim.position.y = 0.01; g.add(rim);
  const arc = Math.PI * 2 - 1.1;
  const gw = ctx.dataTexture(4, 32, (u, v) => { const f = v; return [232 + 23 * f, 162 + 49 * f, 87 + 35 * f]; });
  const wa = ctx.dataTexture(64, 32, (u, v) => {
    const a = Math.min(u, 1 - u) / 0.3; const sa = Math.max(0, Math.min(1, a)); const hs = sa * sa * (3 - 2 * sa);
    const t = Math.max(0, 1 - v / 0.55); const vs = t * t * (3 - 2 * t) * Math.min(1, v / 0.12 + 0.35);
    const c = Math.min(1, hs * vs) * 255; return [c, c, c];
  });
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 48, 1, true, 0.55, arc), new THREE.MeshBasicMaterial({ map: gw, alphaMap: wa, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false, fog: false }));
  wall.position.y = H / 2; g.add(wall);
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const gl = new THREE.Mesh(new THREE.CircleGeometry(R * 0.9, 64), new THREE.MeshBasicMaterial({ map: gt, color: '#ffd37a', transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  gl.rotation.x = -Math.PI / 2; gl.position.y = 0.02; g.add(gl);
  g.userData = { gl: gl };
  return g;
}
export function update(obj, t) {
  obj.userData.gl.material.opacity = 0.15 + 0.02 * Math.sin(t * 0.8);
}