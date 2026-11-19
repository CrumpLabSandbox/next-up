// Ring of glittering frost crystals on the ice with faint pale glow ring; params: radius, count
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 2, n = p.count || 110;
  const im = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), ctx.mat('#eaf4ff', { emissive: '#eaf4ff', emissiveIntensity: 0.8 }), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = ctx.range(0, Math.PI * 2);
    const r = R * (0.45 + 0.55 * Math.sqrt(ctx.rng()));
    const s = ctx.range(0.03, 0.1);
    d.position.set(Math.cos(a) * r, s * 1.3 + 0.06, Math.sin(a) * r);
    d.scale.set(s, s * ctx.range(1.5, 3), s);
    d.rotation.set(ctx.range(-0.3, 0.3), ctx.range(0, 6), ctx.range(-0.3, 0.3));
    d.updateMatrix();
    im.setMatrixAt(i, d.matrix);
  }
  g.add(im);
  const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.9, R, 40), new THREE.MeshBasicMaterial({ color: '#cfe8ff', transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.1;
  g.add(ring);
  g.userData.ring = ring;
  return g;
}
export function update(obj, t, dt, p, ctx) {
  obj.userData.ring.material.opacity = 0.16 + 0.07 * Math.sin(t * 1.5);
}
