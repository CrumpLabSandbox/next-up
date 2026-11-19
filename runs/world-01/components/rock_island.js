// Low rounded pale rock island with pebbly beach on its north (-Z) side. params: radius (m), height (m), color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 7, H = p.height || 1;
  const prof = [[R,-0.1],[R*0.89,H*0.3],[R*0.64,H*0.75],[R*0.36,H*0.95],[0.01,H]].map(q => new THREE.Vector2(q[0], q[1]));
  const rock = new THREE.Mesh(new THREE.LatheGeometry(prof, 14), ctx.mat(p.color || '#8f939f', { emissive: '#2a2c38', emissiveIntensity: 0.4, side: THREE.DoubleSide }));
  rock.scale.set(1, 1, 0.95);
  g.add(rock);
  const beach = new THREE.Mesh(new THREE.CylinderGeometry(R*0.9, R*1.12, 0.3, 8, 1, false, Math.PI - 0.9, 1.8), ctx.mat('#b4b0a4', { emissive: '#3a3a3e', emissiveIntensity: 0.4 }));
  beach.position.y = 0.05;
  g.add(beach);
  const n = 60;
  const peb = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.07, 0), ctx.mat('#5a5c66'), n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = Math.PI + ctx.range(-0.8, 0.8);
    const r = R * ctx.range(0.88, 1.05);
    d.position.set(Math.sin(a) * r, 0.2, Math.cos(a) * r);
    const s = ctx.range(0.6, 1.5);
    d.scale.set(s, s * 0.6, s);
    d.rotation.set(ctx.range(0, 3), ctx.range(0, 3), 0);
    d.updateMatrix();
    peb.setMatrixAt(i, d.matrix);
  }
  g.add(peb);
  for (let i = 0; i < 5; i++) {
    const a = ctx.range(0, 6.28), r = R * ctx.range(0.4, 0.8);
    const b = new THREE.Mesh(new THREE.DodecahedronGeometry(ctx.range(0.25, 0.5), 0), ctx.mat('#7d818d'));
    b.position.set(Math.sin(a) * r, H * 0.5, Math.cos(a) * r);
    b.scale.y = 0.6;
    g.add(b);
  }
  return g;
}
