// v0 engine: painter's-algorithm flat shading on a 2D canvas. No libraries.
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(...a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const LIGHT = norm([0.4, 1, 0.3]);

// Faces as corner-index lists, wound counter-clockwise seen from outside.
const BOX = [[0, 1, 2, 3], [7, 6, 5, 4], [0, 4, 5, 1], [1, 5, 6, 2], [2, 6, 7, 3], [3, 7, 4, 0]];

function solid([shape, at, size]) {
  const [x, y, z] = at, [w, h, d] = size.map((s) => s / 2);
  if (shape === 'cone') {
    const b = [[x - w, y, z - d], [x + w, y, z - d], [x + w, y, z + d], [x - w, y, z + d]], top = [x, y + h * 2, z];
    return [[b[0], b[1], b[2], b[3]], [b[1], b[0], top], [b[2], b[1], top], [b[3], b[2], top], [b[0], b[3], top]];
  }
  const c = [];
  for (const yy of [y, y + h * 2]) for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) c.push([x + dx * w, yy, z + dz * d]);
  return BOX.map((f) => f.map((i) => c[i]));
}

export async function createEngine(canvas) {
  const g = canvas.getContext('2d');
  let world = null, view = 'follow', cam = null;

  function camera(v) {
    const { at, facing } = world.avatar, f = (facing * Math.PI) / 180;
    const fw = [Math.sin(f), 0, -Math.cos(f)], rt = [Math.cos(f), 0, Math.sin(f)];
    const far = v === 'overview';
    const position = at.map((a, i) => a - fw[i] * (far ? 30 : 6.5) + rt[i] * (far ? 0 : 1.3) + (i === 1 ? (far ? 30 : 3.4) : 0));
    const target = at.map((a, i) => a + fw[i] * (far ? 6 : 9) + (i === 1 ? 0.8 : 0));
    return { position, target };
  }

  function draw() {
    const W = (canvas.width = canvas.clientWidth || 960), H = (canvas.height = canvas.clientHeight || 540);
    cam = camera(view);
    const fz = norm(sub(cam.target, cam.position)), fx = norm(cross(fz, [0, 1, 0])), fy = cross(fx, fz), F = H * 0.9;
    const proj = (p) => { const r = sub(p, cam.position), z = dot(r, fz); return [W / 2 + (dot(r, fx) / z) * F, H / 2 - (dot(r, fy) / z) * F, z]; };
    g.fillStyle = world.sky;
    g.fillRect(0, 0, W, H);
    if (world.ground) {
      const hz = proj(cam.position.map((c, i) => c + fz[i] * 1e4 * (i !== 1)))[1];
      g.fillStyle = world.ground;
      g.fillRect(0, Math.max(0, hz), W, H);
    }
    const a = world.avatar.at;
    const things = [...Object.values(world.things),
      ['box', a, [0.5, 1.4, 0.35], '#b08850'],
      ['box', [a[0], a[1] + 1.4, a[2]], [0.3, 0.3, 0.3], '#e0b890']];
    const faces = [];
    for (const t of things) {
      const col = rgb(t[3]);
      for (const f of solid(t)) {
        const n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0])));
        if (dot(n, sub(f[0], cam.position)) >= 0) continue;
        const p = f.map(proj);
        if (p.some((q) => q[2] < 0.2)) continue;
        const k = 0.45 + 0.55 * Math.max(0, dot(n, LIGHT));
        faces.push({ p, z: p.reduce((s, q) => s + q[2], 0) / p.length, c: `rgb(${col.map((v) => v * k | 0)})` });
      }
    }
    faces.sort((u, v) => v.z - u.z);
    for (const f of faces) {
      g.beginPath();
      f.p.forEach((q, i) => (i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])));
      g.fillStyle = f.c;
      g.fill();
    }
  }

  return {
    modes: ['follow', 'overview'],
    async setWorld(w) { world = w; draw(); },
    setCamera(m) { view = m; if (world) draw(); },
    getCamera: () => cam,
    async renderStill(v) { view = v; draw(); },
    start() {}, stop() {}, dispose() {},
    resize() { if (world) draw(); },
    errors: () => [],
  };
}
