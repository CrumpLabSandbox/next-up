// Avenue of weathered posts in two rows leaning north, banded, rim-lit, amber tint on north faces, ash mounds at base; params: perRow, spacing, width, height, lean (deg)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.perRow || 3, sp = p.spacing || 4, w = p.width || 6, h = p.height || 2.5;
  const lean = (p.lean || 6) * Math.PI / 180;
  const m = ctx.mat('#ffffff', { emissive: '#3a3f5c', emissiveIntensity: 0.35 });
  m.vertexColors = true;
  const mound = ctx.mat('#a9b1c4', { emissive: '#6c7690', emissiveIntensity: 0.25 });
  const dark1 = new THREE.Color('#14151c'), dark2 = new THREE.Color('#23252f'), amber = new THREE.Color('#ffb347');
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < n; i++) {
      const hh = h * ctx.range(0.9, 1.08);
      const geo = new THREE.CylinderGeometry(0.09, 0.14, hh, 5);
      geo.translate(0, hh / 2, 0);
      const pos = geo.attributes.position, nor = geo.attributes.normal;
      const cols = new Float32Array(pos.count * 3);
      const c = new THREE.Color();
      for (let v = 0; v < pos.count; v++) {
        const band = Math.floor(pos.getY(v) / 0.35 + ctx.noise2(i * 3 + row, 0) * 2) % 2;
        c.copy(band ? dark1 : dark2);
        if (nor.getZ(v) < -0.3) c.lerp(amber, 0.15);
        cols[v * 3] = c.r; cols[v * 3 + 1] = c.g; cols[v * 3 + 2] = c.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      const post = new THREE.Mesh(geo, m);
      const x = (row - 0.5) * w + ctx.range(-0.15, 0.15), z = -i * sp;
      post.position.set(x, -0.1, z);
      post.rotation.x = -lean * ctx.range(0.5, 1.5);
      post.rotation.z = ctx.range(-0.04, 0.04);
      g.add(post);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.22), m);
      cap.position.set(0, hh, 0);
      post.add(cap);
      const mo = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), mound);
      mo.position.set(x, -0.12, z);
      mo.scale.set(1, 0.3, 1);
      mo.rotation.y = ctx.range(0, 6);
      g.add(mo);
    }
  }
  return g;
}
