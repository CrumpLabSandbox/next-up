// Large still black glassy water plane with reflected star specks. params: width (m, X), depth (m, Z), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const w = p.width || 300, d = p.depth || 300;
  const tex = ctx.dataTexture(128, 128, (u, v) => {
    const n = ctx.noise2(u * 60, v * 60);
    const star = n > 0.93 ? 255 : 0;
    const b = 8 + ctx.noise2(u * 5, v * 5) * 14;
    return [Math.max(b, star), Math.max(b + 4, star), Math.max(b + 12, star)];
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(w / 20, d / 20);
  const m = new THREE.MeshStandardMaterial({ map: tex, color: p.color || '#0a0d18', emissive: '#10162a', emissiveMap: tex, emissiveIntensity: 0.9, roughness: 0.05, metalness: 0.6, transparent: true, opacity: 0.88 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
  mesh.rotation.x = -Math.PI / 2;
  g.add(mesh);
  return g;
}
export function update(obj, t) {
  obj.children[0].material.emissiveIntensity = 0.85 + 0.1 * Math.sin(t * 0.4);
}
