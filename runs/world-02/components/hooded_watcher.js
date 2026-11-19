// Slender motionless figure in long pale cloak with vertical gradient, wide hem, deep hood edged with bright gold light, foot glow, soft blue rim sprite; faces +Z; params: height, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const H = p.height || 1.8;
  const cloak = ctx.mat(p.color || '#c9d1e6', { emissive: '#6f7fb0', emissiveIntensity: 0.5 });
  const gradMat = ctx.mat('#ffffff', { emissive: '#6f7fb0', emissiveIntensity: 0.45 });
  gradMat.vertexColors = true;
  const gt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 2) * 255; return [c, c * 0.8, c * 0.4]; });
  const rt = ctx.dataTexture(32, 32, (u, v) => { const q = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 2); const c = Math.pow(1 - q, 1.5) * 255; return [c, c, c]; });
  const rimSp = new THREE.Sprite(new THREE.SpriteMaterial({ map: rt, color: '#8fc0ff', transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  rimSp.scale.set(0.8, 2, 1); rimSp.position.set(0, H * 0.52, -0.3); g.add(rimSp);
  const bh = H * 0.82;
  const bg = new THREE.CylinderGeometry(0.17, 0.5, bh, 7);
  const pa = bg.attributes.position, cols = [];
  const lo = new THREE.Color('#8f98ad'), hi = new THREE.Color('#c9d1e6'), c = new THREE.Color();
  for (let i = 0; i < pa.count; i++) { const f = (pa.getY(i) + bh / 2) / bh; c.copy(lo).lerp(hi, Math.min(1, f * 1.15)); cols.push(c.r, c.g, c.b); }
  bg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  const body = new THREE.Mesh(bg, gradMat);
  body.position.y = bh / 2; g.add(body);
  const sh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 7, 5), cloak);
  sh.scale.set(1.1, 0.6, 0.8); sh.position.y = H * 0.8; g.add(sh);
  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 7), cloak);
  hood.position.y = H * 0.93; g.add(hood);
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), new THREE.MeshBasicMaterial({ color: '#08090d', fog: false }));
  face.position.set(0, H * 0.9, 0.15); face.scale.set(0.9, 1.3, 1); g.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.03, 4, 16), new THREE.MeshBasicMaterial({ color: '#ffd37a', fog: false }));
  rim.scale.set(0.9, 1.3, 1); rim.position.set(0, H * 0.9, 0.155); g.add(rim);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.6, 5), cloak);
  arm.position.set(0.28, H * 0.58, 0.12); arm.rotation.x = -0.3; g.add(arm);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: gt, color: '#ffd37a', transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  halo.scale.set(0.9, 1.1, 1); halo.position.set(0, H * 0.9, 0.1); g.add(halo);
  const fg = new THREE.CircleGeometry(0.6, 20); fg.rotateX(-Math.PI / 2);
  const foot = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ map: rt, color: '#8fc0ff', transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  foot.position.y = 0.03; g.add(foot);
  return g;
}
