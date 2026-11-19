// Golden-lit round floor with white plinth, optionally topped by dark spiral pearl. params: radius, pearl (false hides pearl), dim (1 = dusky)
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const R = p.radius || 5;
  const dim = p.dim ? 1 : 0;
  const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 28), ctx.mat(dim ? '#b89c68' : '#e8dcc0', { emissive: dim ? '#8a6428' : '#c8a050', emissiveIntensity: dim ? 0.3 : 0.4, side: THREE.DoubleSide }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = 0.01; g.add(floor);
  const pl = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.35, 1.0, 8), ctx.mat('#f4f2ee', { emissive: '#8a7a5a', emissiveIntensity: 0.3 }));
  pl.position.y = 0.5; g.add(pl);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 8), ctx.mat('#ffffff', { emissive: '#8a7a5a', emissiveIntensity: 0.3 }));
  cap.position.y = 1.03; g.add(cap);
  if (p.pearl !== false) {
    const pearl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 1), ctx.mat('#14121a'));
    pearl.position.y = 1.14; g.add(pearl);
  }
  return g;
}
