// Black teardrop seed pod with silver streak and pulsing halo; hangs from a twig, lies flat when held=true; open=true gives two empty shell halves. params: length (m), held, open
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const L = p.length || 0.24;
  const ht = ctx.dataTexture(64, 64, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const k = Math.pow(1 - q, 1.6) * 255; return [k * 0.87, k * 0.9, k]; });
  if (p.open) {
    const mat = ctx.mat('#08090d', { emissive: '#3a3f5c', emissiveIntensity: 0.45, side: THREE.DoubleSide });
    [-1, 1].forEach((s) => {
      const h = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), mat);
      h.rotation.x = Math.PI;
      h.scale.set(L * 0.2, L * 0.17, L * 0.5);
      const piv = new THREE.Group();
      piv.position.set(s * L * 0.2, 0, 0);
      piv.rotation.z = -s * 0.35;
      piv.add(h);
      g.add(piv);
    });
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#ffe2b0', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    halo.scale.set(0.7, 0.7, 1);
    halo.position.y = 0.03;
    g.add(halo);
    g.userData.halo = halo;
    return g;
  }
  const inner = new THREE.Group();
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const f = i / 8;
    const r = L * 0.3 * Math.pow(Math.sin(Math.PI * Math.pow(f, 0.7)), 0.9) * (0.4 + 0.6 * (1 - f));
    pts.push(new THREE.Vector2(Math.max(0.001, r), -f * L));
  }
  inner.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 8), ctx.mat('#08090d', { emissive: '#3a3f5c', emissiveIntensity: 0.4 })));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: ht, color: '#dfe6ff', transparent: true, opacity: p.held ? 0.6 : 0.3, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  halo.scale.set(p.held ? 0.9 : 0.5, p.held ? 0.9 : 0.5, 1);
  halo.position.set(0, -L * 0.45, 0.05);
  inner.add(halo);
  const streak = new THREE.Mesh(new THREE.BoxGeometry(0.01, L * 0.55, 0.01), new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false }));
  streak.position.set(-L * 0.12, -L * 0.4, -L * 0.1);
  streak.rotation.z = 0.15;
  inner.add(streak);
  if (p.held) {
    inner.rotation.x = -Math.PI / 2;
    inner.position.z = -L / 2;
  } else {
    const twig = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.45, 4), ctx.mat('#dfe6ff', { emissive: '#dfe6ff', emissiveIntensity: 0.8 }));
    twig.position.y = 0.22;
    inner.add(twig);
  }
  g.add(inner);
  g.userData.halo = halo;
  return g;
}
export function update(obj, t, dt, p) {
  if (p.open) {
    obj.userData.halo.material.opacity = 0.5 + 0.1 * Math.sin(t * 2);
    return;
  }
  if (p.held) {
    obj.position.y = 0.01 * Math.sin(t * 1.5);
    obj.userData.halo.material.opacity = 0.6 + 0.1 * Math.sin(t * 2.2);
    return;
  }
  obj.rotation.z = 0.14 * Math.sin(t * Math.PI * 1.2);
}
