// Ring of rough bone-white leaning standing stones with warm inner rim tint; params: count, radius (m), height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 8, R = p.radius || 3, H = p.height || 1.2;
  const base = new THREE.Color(p.color || '#e8e2d0');
  const alt = new THREE.Color('#d4cfbf');
  const warm = new THREE.Color('#ffcf8a');
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + ctx.range(-0.1, 0.1);
    const h = H * ctx.range(0.9, 1.1);
    const rb = ctx.range(0.34, 0.4);
    const geo = new THREE.CylinderGeometry(rb * 0.62, rb, h, 6, 3);
    const pos = geo.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      pos.setX(k, pos.getX(k) + ctx.range(-0.05, 0.05));
      pos.setZ(k, pos.getZ(k) + ctx.range(-0.05, 0.05));
    }
    geo.computeVertexNormals();
    const body = base.clone().lerp(alt, ctx.rng());
    const cols = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let k = 0; k < pos.count; k++) {
      const inner = Math.max(0, Math.min(1, pos.getX(k) / rb + 0.2));
      const fade = 1 - (pos.getY(k) + h / 2) / h;
      c.copy(body).lerp(warm, inner * (0.25 + 0.6 * fade));
      cols[k * 3] = c.r; cols[k * 3 + 1] = c.g; cols[k * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const mat = ctx.mat('#ffffff', { emissive: '#5a6490', emissiveIntensity: 0.15 });
    mat.vertexColors = true;
    const m = new THREE.Mesh(geo, mat);
    m.position.y = h / 2 - 0.05;
    const pivot = new THREE.Group();
    pivot.position.set(Math.cos(a) * R, 0, Math.sin(a) * R);
    pivot.rotation.order = 'YXZ';
    pivot.rotation.y = Math.PI - a;
    pivot.rotation.z = -ctx.range(0.105, 0.14);
    pivot.add(m);
    g.add(pivot);
  }
  return g;
}
