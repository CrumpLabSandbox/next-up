// Glowing white thread from local origin to relative point with halo and travelling motes; params: to [x,y,z], width, haloRadius, color
export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const to = new THREE.Vector3().fromArray(p.to || [0, 0, 1]);
  const L = to.length();
  const w = p.width || 0.02, hr = p.haloRadius || 0.12;
  const mat = new THREE.MeshBasicMaterial({ color: p.color || '#ffffff', transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const hmat = new THREE.MeshBasicMaterial({ color: '#8fd0ff', transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const core = new THREE.Mesh(new THREE.CylinderGeometry(w, w, L, 6), mat);
  const halo = new THREE.Mesh(new THREE.CylinderGeometry(hr, hr, L, 8), hmat);
  const pivot = new THREE.Group();
  pivot.add(core); pivot.add(halo);
  pivot.position.copy(to).multiplyScalar(0.5);
  pivot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().normalize());
  g.add(pivot);
  const n = 5;
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.025, 0), new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false }), n);
  g.add(im);
  g.userData = { mat: mat, hmat: hmat, im: im, to: to, d: new THREE.Object3D() };
  return g;
}
export function update(obj, t, dt, p, ctx) {
  const u = obj.userData;
  const k = 0.5 + 0.5 * Math.sin(t * 2.2);
  u.mat.opacity = 0.75 + 0.25 * k;
  u.hmat.opacity = 0.2 + 0.08 * k;
  for (let i = 0; i < 5; i++) {
    const f = (t / 2 + i / 5) % 1;
    u.d.position.copy(u.to).multiplyScalar(f);
    u.d.scale.setScalar(0.7 + 0.5 * Math.sin(Math.PI * f));
    u.d.updateMatrix();
    u.im.setMatrixAt(i, u.d.matrix);
  }
  u.im.instanceMatrix.needsUpdate = true;
}
