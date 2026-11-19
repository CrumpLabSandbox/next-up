// Runtime API for Builder-authored components. Plain JS so the Node checker
// worker and the browser viewer load the exact same code.
//
// A component is an ES module source string:
//   export function build(THREE, p, ctx) { ...; return object3d }
//   export function update(obj, t, dt, p, ctx) { ... }   // optional, per frame

function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Deterministic helpers handed to build/update. Seeded by entity id.
 * `lib` carries three.js addons: { mergeGeometries, ImprovedNoise, SimplexNoise }.
 */
export function makeCtx(THREE, seedKey, lib = {}) {
  const rng = mulberry32(hashString(String(seedKey)));
  const lattice = (ix, iz) => {
    const h = hashString(ix + ',' + iz + ':' + seedKey);
    return (h % 100000) / 100000;
  };
  const smooth = (t) => t * t * (3 - 2 * t);
  return {
    lib,
    rng,
    range: (a, b) => a + (b - a) * rng(),
    pick: (arr) => arr[Math.floor(rng() * arr.length)],
    /** Value noise in [0,1], smooth over integer lattice. */
    noise2(x, z) {
      const ix = Math.floor(x), iz = Math.floor(z);
      const fx = smooth(x - ix), fz = smooth(z - iz);
      const a = lattice(ix, iz), b = lattice(ix + 1, iz);
      const c = lattice(ix, iz + 1), d = lattice(ix + 1, iz + 1);
      return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
    },
    /** Smooth physically based material (for realism: roughness, metalness, normal-ish detail via geometry). */
    pbr(color, opts = {}) {
      return new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0, ...opts });
    },
    /** Flat-shaded standard material. */
    mat(color, opts = {}) {
      return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, metalness: 0, ...opts });
    },
    /** Procedural texture: fn(u, v) -> [r, g, b] in 0..255. */
    dataTexture(w, h, fn) {
      const data = new Uint8Array(w * h * 4);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const [r, g, b] = fn(x / (w - 1), y / (h - 1));
          const i = (y * w + x) * 4;
          data[i] = r; data[i + 1] = g; data[i + 2] = b; data[i + 3] = 255;
        }
      }
      const tex = new THREE.DataTexture(data, w, h);
      tex.needsUpdate = true;
      return tex;
    },
  };
}

export function moduleUrl(code) {
  return 'data:text/javascript;charset=utf-8,' + encodeURIComponent(code);
}

export function countTriangles(root) {
  let tris = 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry;
    const n = g.index ? g.index.count / 3 : (g.attributes.position ? g.attributes.position.count / 3 : 0);
    tris += o.isInstancedMesh ? n * o.count : n;
  });
  return Math.round(tris);
}

export function countLights(root) {
  let n = 0;
  root.traverse((o) => { if (o.isLight) n++; });
  return n;
}

export const PLACEHOLDER_CODE = `export function build(THREE, p, ctx) {
  const s = Number(p.size) || 1;
  const g = new THREE.Group();
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(s, s, s),
    new THREE.MeshStandardMaterial({ color: '#9fb4ff', transparent: true, opacity: 0.35, emissive: '#3a4a90' })
  );
  box.position.y = s / 2;
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(box.geometry), new THREE.LineBasicMaterial({ color: '#cfd8ff' }));
  box.add(edges);
  g.add(box);
  return g;
}
export function update(obj, t) { obj.children[0].rotation.y = t * 0.4; }
`;
