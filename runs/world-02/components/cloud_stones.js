// Winding line of honey-cream stepping stones with darker undersides, floating, curving NNE and descending; origin at first stone, runs -Z; params: count, length, drop, still
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const n = p.count || 10, L = p.length || 30, D = p.drop || 5;
  const mat = ctx.mat('#e8c898', { emissive: '#ffb060', emissiveIntensity: 0.25 });
  const dark = ctx.mat('#a8806a');
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c, c]; });
  const stones = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const s = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.5, 0.35, 9), mat);
    body.rotation.y = ctx.range(0, 3); s.add(body);
    const under = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.28, 0.3, 9), dark);
    under.position.y = -0.3; under.rotation.y = body.rotation.y; s.add(under);
    const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffc27a', transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    h.scale.set(2.2, 2.2, 1); h.position.y = -0.1; s.add(h);
    const y = -D * t;
    s.position.set(t * 9 + 3 * Math.sin(t * 5), y, -t * L);
    g.add(s); stones.push({ o: s, y: y, ph: ctx.range(0, 6), still: i === (p.still === undefined ? -1 : p.still) });
  }
  g.userData = { stones: stones };
  return g;
}
export function update(obj, t) {
  const s = obj.userData.stones;
  for (let i = 0; i < s.length; i++) s[i].o.position.y = s[i].y + (s[i].still ? 0 : 0.12 * Math.sin(t * 0.8 + s[i].ph));
}
