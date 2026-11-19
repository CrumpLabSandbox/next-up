// Faint glowing horizon haze cylinder (additive, fades upward); params: radius, height, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 400, H = p.height || 30;
  const geo = new THREE.CylinderGeometry(R, R, H, 48, 1, true);
  const pos = geo.attributes.position;
  const cols = new Float32Array(pos.count * 3);
  for (let k = 0; k < pos.count; k++) {
    const t = pos.getY(k) > 0 ? 0 : 1;
    cols[k * 3] = t; cols[k * 3 + 1] = t; cols[k * 3 + 2] = t;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const mat = new THREE.MeshBasicMaterial({ color: p.color || '#343b62', vertexColors: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, fog: false });
  const m = new THREE.Mesh(geo, mat);
  m.position.y = H / 2;
  g.add(m);
  return g;
}
