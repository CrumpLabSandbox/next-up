// Engine v7: three.js PBR renderer. The `sky` colour drives everything: light sky = dawn (sun, halo, god-rays, lavender fill), dark sky = night (moon, stars).
// Falls back to the hand-written WebGL engine (v6.js) when WebGL2 or three.js fails.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, FogExp2, Vector2, Vector3, Group, Mesh, Points, Sprite, SpriteMaterial, InstancedMesh, Matrix4, Raycaster,
  BufferGeometry, BufferAttribute, Float32BufferAttribute, BoxGeometry, SphereGeometry, ConeGeometry, CircleGeometry, PlaneGeometry, RingGeometry, LatheGeometry,
  MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial, ShaderMaterial, CanvasTexture, DataTexture, PMREMGenerator, WebGLRenderTarget,
  DirectionalLight, PointLight, HemisphereLight, RepeatWrapping, SRGBColorSpace, HalfFloatType, FloatType, AdditiveBlending, BackSide, DoubleSide, PCFShadowMap, ACESFilmicToneMapping,
  RGBAFormat, LinearFilter,
} from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { createEngine as createV6 } from './v6.js';

const PI = Math.PI, MD = [0.55, 0.55, -0.4], SD = [0.26, 0.12, -0.96];
const nrm = (a) => { const l = Math.hypot(...a); return a.map((x) => x / l); };
const sm = (a, b, x) => ((x = Math.min(1, Math.max(0, (x - a) / (b - a)))), x * x * (3 - 2 * x));
const mix = (a, b, t) => a + (b - a) * t;
const rng = (a) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const ihash = (a, b, s = 0) => { let h = Math.imul(a + 374761393, 668265263) ^ Math.imul(b + 1274126177, 2246822519) ^ Math.imul(s + 97, 3266489917); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };

// ---------- procedural PBR maps (seeded, tileable) ----------
const lat = (seed, n) => {
  const r = rng(seed), g = Float32Array.from({ length: n * n }, r);
  return (x, y) => {
    x *= n; y *= n;
    const xi = Math.floor(x), yi = Math.floor(y), fx = x - xi, fy = y - yi, sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy),
      q = (i, j) => g[(((j % n) + n) % n) * n + (((i % n) + n) % n)];
    return mix(mix(q(xi, yi), q(xi + 1, yi), sx), mix(q(xi, yi + 1), q(xi + 1, yi + 1), sx), sy);
  };
};
const fbm = (seed, base = 4, oct = 4) => {
  const L = [...Array(oct)].map((_, i) => lat(seed + i * 17, base << i));
  return (x, y) => { let s = 0, a = 0.5, t = 0; for (const f of L) { s += f(x, y) * a; t += a; a *= 0.5; } return s / t; };
};

// fn(u, v) in [0,1) tile units -> [height 0..1, albedo 0..1, roughness 0..1]
function makeMaps(N, fn, str, mkTex) {
  const H = new Float32Array(N * N), A = new Uint8ClampedArray(N * N * 4), R = new Uint8ClampedArray(N * N * 4);
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      const [h, a, r] = fn((x + 0.5) / N, (y + 0.5) / N), i = y * N + x;
      H[i] = h;
      A[i * 4] = A[i * 4 + 1] = A[i * 4 + 2] = a * 255; A[i * 4 + 3] = 255;
      R[i * 4] = R[i * 4 + 1] = R[i * 4 + 2] = r * 255; R[i * 4 + 3] = 255;
    }
  const NM = new Uint8ClampedArray(N * N * 4), g = (x, y) => H[((y + N) % N) * N + ((x + N) % N)];
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) {
      const dx = (g(x - 1, y) - g(x + 1, y)) * str, dy = (g(x, y + 1) - g(x, y - 1)) * str, l = Math.hypot(dx, dy, 1), i = (y * N + x) * 4;
      NM[i] = (dx / l * 0.5 + 0.5) * 255; NM[i + 1] = (dy / l * 0.5 + 0.5) * 255; NM[i + 2] = (1 / l * 0.5 + 0.5) * 255; NM[i + 3] = 255;
    }
  return { map: mkTex(A, N, true), normalMap: mkTex(NM, N), roughnessMap: mkTex(R, N) };
}

function brickFn() {
  const n1 = fbm(3, 4, 4), n2 = lat(9, 64);
  return (u, v) => {
    const row = Math.floor(v * 8), cu = u * 4 + (row & 1) * 0.5, col = Math.floor(cu), fu = cu - col, fv = v * 8 - row,
      e = Math.min(fu * 128, (1 - fu) * 128, fv * 64, (1 - fv) * 64), rb = ihash(row, ((col % 4) + 4) % 4, 3), nz = n1(u, v), gr = n2(u, v),
      mort = e < 3.5 ? 0 : sm(3.5, 9, e), h = mort * (0.55 + 0.25 * nz + 0.1 * gr + 0.12 * rb) ;
    const chip = nz > 0.7 ? (nz - 0.7) * 1.2 : 0;
    return [h - chip * mort, mort < 0.05 ? 0.42 + 0.1 * gr : (0.62 + 0.32 * rb) * (0.82 + 0.3 * nz) * (0.9 + 0.2 * gr), mort < 0.05 ? 0.96 : 0.74 + 0.22 * gr];
  };
}
function flagFn() {
  const n1 = fbm(21, 4, 4), n2 = lat(5, 96), sp = [0, 1, 2].map((r) => 0.25 + 0.5 * ihash(r, 1, 7)), off = [0, 1, 2].map((r) => ihash(r, 2, 7));
  return (u, v) => {
    const row = Math.floor(v * 3), fv = v * 3 - row, cu = (u * 2 + off[row]) % 2, k = Math.floor(cu), fu = cu - k, w = k ? 1 - sp[row] : sp[row],
      e = Math.min(fu * w * 256, (1 - fu) * w * 256, fv * 170, (1 - fv) * 170), id = row * 2 + k, nz = n1(u, v), gr = n2(u, v), s = sm(3, 11, e);
    return [s * (0.7 + 0.2 * nz + 0.06 * gr + 0.04 * (fu - 0.5) * ihash(id, 0, 3)), e < 3 ? 0.4 : (0.72 + 0.28 * ihash(id, 5, 1)) * (0.85 + 0.25 * nz), e < 3 ? 0.97 : 0.55 + 0.3 * gr + 0.15 * nz];
  };
}
function dustFn() {
  const n1 = fbm(33, 4, 5), n2 = lat(8, 128), n3 = lat(14, 8);
  return (u, v) => {
    const ph = 2 * PI * (6 * u + 3 * v) + n3(u, v) * 9, r = Math.sin(ph), cr = r > 0 ? 1 - (1 - r) * (1 - r) : r * 0.8, nz = n1(u, v), gr = n2(u, v);
    return [0.5 + 0.28 * cr * (0.5 + nz) + 0.3 * gr, 0.82 + 0.3 * nz - 0.06 * cr, 0.9 + 0.1 * gr];
  };
}
function stoneFn() {
  const n1 = fbm(41, 4, 5), n2 = fbm(43, 16, 3), n3 = lat(7, 128);
  return (u, v) => {
    const a = n1(u, v), cr = Math.abs(n2(u, v) - 0.5) < 0.018 ? 0.6 : 1;
    return [(0.4 + 0.5 * a + 0.2 * n3(u, v)) * cr, (0.78 + 0.3 * a) * (0.6 + 0.4 * cr) * (0.92 + 0.16 * n3(u, v)), 0.8 + 0.18 * n3(u, v)];
  };
}
function waterFn() {
  const n = lat(12, 16);
  return (u, v) => {
    const a = Math.sin(2 * PI * (5 * u + 2 * v)) + Math.sin(2 * PI * (3 * v - 4 * u) + 1.7) + 0.7 * Math.sin(2 * PI * (9 * u + 7 * v) + 3);
    return [0.5 + 0.12 * a + 0.2 * n(u, v), 1, 0.1];
  };
}

// ---------- sky dome (also the PMREM environment) ----------
const SKY_VS = `varying vec3 vD;void main(){vD=position;vec4 p=projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.);gl_Position=p.xyww;}`;
const SKY_FS = `precision highp float;uniform vec3 uHor,uZen,uSun,uMoon;uniform float uD,uT;varying vec3 vD;
float h2(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
void main(){vec3 r=normalize(vD);float y=r.y,hy=max(y,0.);
float sd=dot(r,uSun),an=acos(clamp(sd,-1.,1.));
vec3 dc=mix(uHor*vec3(1.1,1.,.86),uZen,smoothstep(0.,.95,pow(hy,.45)));
dc=mix(dc,dc*vec3(1.08,.9,.86),exp(-hy*9.)*.5);
dc+=vec3(1.,.58,.26)*pow(max(sd,0.),4.)*.28*(1.-hy*.6)+vec3(1.,.74,.42)*exp(-an*7.)*.5+vec3(1.,.82,.55)*exp(-an*30.)*1.6+vec3(1.,.88,.62)*smoothstep(.046,.034,an)*34.;
vec3 nc=mix(uHor,uHor*.27,sqrt(hy));float md=dot(r,uMoon);
nc+=vec3(.5,.62,.95)*(pow(max(md,0.),40.)*.35+pow(max(md,0.),600.)*.5)+vec3(.9,.95,1.1)*smoothstep(.9991,.9993,md)*2.2;
vec3 s=r*70.,g=floor(s);float q=h2(g.xy+g.z*7.3);
if(q>.96)nc+=smoothstep(.2,0.,length(fract(s)-.5-(vec3(h2(g.yz),h2(g.zx),h2(g.xy))-.5)*.5))*(.5+.5*sin(uT*2.+q*99.))*smoothstep(0.,.3,r.y)*vec3(.8,.85,1.);
gl_FragColor=vec4(mix(nc,dc,uD),1.);}`;

const GOD = {
  uniforms: { tDiffuse: { value: null }, uSun: { value: new Vector2() }, uAmt: { value: 0 }, uCol: { value: new Color('#ffc477') }, uA: { value: 1.7 } },
  vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader: `uniform sampler2D tDiffuse;uniform vec2 uSun;uniform float uAmt,uA;uniform vec3 uCol;varying vec2 vUv;
void main(){vec4 o=texture2D(tDiffuse,vUv);vec2 d=(uSun-vUv),st=d/36.*.97,p=vUv;float s=0.,w=1.;
for(int i=0;i<36;i++){p+=st;vec3 c=texture2D(tDiffuse,p).rgb;s+=max(dot(c,vec3(.33))-1.5,0.)*w;w*=.968;}
vec2 dd=d*vec2(uA,1.);float ang=atan(dd.y,dd.x);
o.rgb+=uCol*s*uAmt*.07*(.7+.3*sin(ang*38.)*sin(ang*11.+1.))*exp(-length(dd)*1.2);gl_FragColor=o;}`,
};
const GRADE = {
  uniforms: { tDiffuse: { value: null }, uT: { value: 2 }, uA: { value: 1.7 }, uD: { value: 0 }, uV: { value: 0.5 } },
  vertexShader: GOD.vertexShader,
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uT,uA,uD,uV;varying vec2 vUv;
float h(vec2 g){return fract(sin(dot(g,vec2(12.9898,78.233)))*43758.5453);}
void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.3,.59,.11));
c=mix(c*mix(vec3(.84,.95,1.12),vec3(.9,.94,1.1),uD),c*mix(vec3(1.1,1.,.86),vec3(1.06,1.,.9),uD),smoothstep(.12,.7,l));
vec2 q=(vUv-.5)*vec2(uA,1.);c*=1.-uV*pow(length(q)*.92,2.4);
c+=(h(vUv*vec2(1920.,1080.)+floor(uT*24.))-.5)*.045*(1.-l*.6);gl_FragColor=vec4(c,1.);}`,
};

const PART_VS = `attribute float aS,aK,aZ;attribute vec3 aC;uniform float uT,uK,uD;uniform vec3 uSun;varying vec4 vC;
void main(){vec3 q=position;float a=aS*40.,al=1.;
if(aK>2.5){q+=vec3(sin(uT*.2+a),sin(uT*.17+a*1.3)*.6,cos(uT*.23+a*.7))*1.6;al=.5+.5*sin(uT*1.3+a);}
else if(aK>1.5){q+=vec3(sin(uT*.2+a),sin(uT*.17+a*1.3)*.6,cos(uT*.23+a*.7))*.5;al=.5+.5*sin(uT*1.5+a);}
else{float h=fract(uT*.5+aS);q+=vec3(sin(a)*h*.6+sin(uT*3.+a)*.1,.1+h*.9,cos(a*1.3)*h*.6);al=(1.-h)*(.6+.4*sin(uT*20.+a));}
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;
float g=pow(max(dot(normalize(q-cameraPosition),uSun),0.),5.);if(aK>2.5)al*=mix(1.,.3+3.2*g,uD);
vC=vec4(aC,al);gl_PointSize=max(aZ*uK/-mv.z,1.6);}`;
const PART_FS = `varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vC.rgb,vC.a*a);}`;

async function createThree(cv) {
  const E = [];
  const renderer = new WebGLRenderer({ canvas: cv, antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;
  renderer.toneMapping = ACESFilmicToneMapping; renderer.setPixelRatio(1);
  if (!renderer.capabilities.isWebGL2) throw Error('no webgl2');
  const scene = new Scene(), camera = new PerspectiveCamera(58, 16 / 9, 0.25, 1500), things = new Group(), skyScene = new Scene(), maxAni = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  scene.add(things);

  const mkTex = (data, N, srgb) => {
    const c = document.createElement('canvas'); c.width = c.height = N;
    c.getContext('2d').putImageData(new ImageData(data, N), 0, 0);
    const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = maxAni; if (srgb) t.colorSpace = SRGBColorSpace; return t;
  };
  const TEX = {};
  const tex = (k, fn, str, tw, th) => {
    if (!TEX[k]) { TEX[k] = makeMaps(512, fn(), str, mkTex); for (const t of Object.values(TEX[k])) t.repeat.set(1 / tw, 1 / th); }
    return TEX[k];
  };
  const brickT = () => tex('brick', brickFn, 5, 2.4, 2), flagT = () => tex('flag', flagFn, 4, 3, 3), dustT = () => tex('dust', dustFn, 3, 4, 4), stoneT = () => tex('stone', stoneFn, 3, 1.2, 1.2),
    waterT = () => tex('water', waterFn, 1.2, 2, 2);

  // shared uniforms: overview rim light
  const RIM = { uRim: { value: 0 }, uRimC: { value: new Color('#ffd49a') } };
  const patch = (m) => {
    m.onBeforeCompile = (s) => {
      s.uniforms.uRim = RIM.uRim; s.uniforms.uRimC = RIM.uRimC;
      s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uRim;uniform vec3 uRimC;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance+=uRimC*uRim*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),2.2)*1.4;');
    };
    m.customProgramCacheKey = () => 'rim';
    return m;
  };

  // ---------- materials (cached per world build) ----------
  let MC = {}, FLAGMATS = [], LANTMATS = [], WATER = [];
  const col = (c, k = 1) => new Color(c).multiplyScalar(k);
  const brickM = (c) => MC['b' + c] || (MC['b' + c] = patch(new MeshStandardMaterial({ color: col(c, 1.7), ...brickT(), roughness: 1, metalness: 0, normalScale: new Vector2(1.3, 1.3) })));
  const flagM = (c) => MC['f' + c] || (MC['f' + c] = (() => { const m = patch(new MeshStandardMaterial({ color: col(c, 1.35), ...flagT(), roughness: 1, metalness: 0, emissive: col(c, 0.5), emissiveIntensity: 0 })); FLAGMATS.push(m); return m; })());
  const stoneM = (c) => MC['s' + c] || (MC['s' + c] = patch(new MeshStandardMaterial({ color: col(c, 1.4), ...stoneT(), roughness: 1, metalness: 0 })));
  const glowM = (c, g) => MC['g' + c + g] || (MC['g' + c + g] = (() => {
    const m = patch(new MeshStandardMaterial({ color: col(c, 0.4), emissive: col(c), emissiveIntensity: g == 1 ? 3.2 : 2.4, roughness: 0.5 })); if (g == 1) LANTMATS.push(m); return m;
  })());
  const glassM = (c) => MC['gl' + c] || (MC['gl' + c] = new MeshPhysicalMaterial({ color: col(c, 0.7), emissive: col(c), emissiveIntensity: 0.75, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.55, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 2.2, side: DoubleSide, depthWrite: false }));
  const liquidM = (c) => MC['lq' + c] || (MC['lq' + c] = (() => {
    const w = waterT(), m = new MeshPhysicalMaterial({ color: col(c, 0.35), emissive: col(c), emissiveIntensity: 0.55, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.93, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.8, normalMap: w.normalMap, normalScale: new Vector2(0.35, 0.35) });
    WATER.push(w.normalMap); return m;
  })());
  const padT = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, '#fff'); g.addColorStop(0.55, '#fff'); g.addColorStop(1, '#000'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new CanvasTexture(c); })();
  const glowT = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t; })();
  const shaftT = (() => { const c = document.createElement('canvas'); c.width = 32; c.height = 64; const x = c.getContext('2d'); for (let j = 0; j < 64; j++) { const v = Math.pow(1 - j / 63, 1.6); const g = x.createLinearGradient(0, 0, 32, 0); g.addColorStop(0, '#000'); g.addColorStop(0.5, `rgb(${v * 255},${v * 255},${v * 255})`); g.addColorStop(1, '#000'); x.fillStyle = g; x.fillRect(0, j, 32, 1); } return new CanvasTexture(c); })();

  // ---------- geometry ----------
  const wuv = (g) => {
    const p = g.attributes.position, n = g.attributes.normal, u = g.attributes.uv;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i), ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      if (ay >= ax && ay >= az) u.setXY(i, x, z); else if (ax >= az) u.setXY(i, z, y); else u.setXY(i, x, y);
    }
    return g;
  };
  const rampG = ([x, y, z], [w, h, d]) => {
    w /= 2; d /= 2;
    const a = [x - w, y, z - d], b = [x + w, y, z - d], c = [x + w, y, z + d], e = [x - w, y, z + d], f = [x - w, y + h, z + d], g = [x + w, y + h, z + d],
      tr = [a, c, b, a, e, c, e, f, g, e, g, c, a, f, e, b, g, f, a, b, f, b, c, g, a, e, f];
    // bottom (a,c,b)(a,e,c); south (e,f,g)(e,g,c); slope (a,b,g)(a,g,f); west (a,e,f); east (b,g,c)
    const T = [a, c, b, a, e, c, e, c, g, e, g, f, a, b, g, a, g, f, a, f, e, b, c, g];
    const ge = new BufferGeometry(); ge.setAttribute('position', new Float32BufferAttribute(T.flat(), 3)); ge.setAttribute('uv', new Float32BufferAttribute(new Float32Array(T.length * 2), 2)); ge.computeVertexNormals();
    return wuv(ge);
  };
  const geo = (s, p, z, local) => {
    const q = local ? [0, 0, 0] : p; let g;
    if (s == 'box') g = new BoxGeometry(z[0], z[1], z[2]).translate(q[0], q[1] + z[1] / 2, q[2]);
    else if (s == 'cone') g = new ConeGeometry(0.5, 1, 20, 1).scale(z[0], z[1], z[2]).translate(q[0], q[1] + z[1] / 2, q[2]);
    else if (s == 'ball') g = new SphereGeometry(0.5, 24, 16).scale(z[0], z[1], z[2]).translate(q[0], q[1] + z[1] / 2, q[2]);
    else if (s == 'ramp') return rampG(q, z);
    else g = new CircleGeometry(0.5, 40).rotateX(-PI / 2).scale(z[0], 1, z[2]).translate(q[0], q[1] + 0.02, q[2]);
    return s == 'disc' ? g : wuv(g);
  };

  // ---------- terrain ----------
  const vn2 = (() => { const l = lat(77, 64); return (x, y) => l(((x % 64) + 64) % 64 / 64, ((y % 64) + 64) % 64 / 64); })();
  const dune = (x, z) => {
    const wx = x + (vn2(x * 0.03, z * 0.03) - 0.5) * 30, wz = z + (vn2(x * 0.03 + 9, z * 0.03) - 0.5) * 30,
      a = vn2((wx * 0.55 + wz * 0.84) * 0.05, (wz * 0.55 - wx * 0.84) * 0.14), b = vn2(x * 0.11 + 3, z * 0.11), c = vn2(x * 0.4, z * 0.4);
    return (a - 0.5) * 1.5 + (b - 0.5) * 0.45 + (c - 0.5) * 0.12;
  };
  const terrainG = (X, Z, fp, gc) => {
    const M = 60, S = 1.5, x0 = X[0] - M, z0 = Z[0] - M, nx = Math.ceil((X[1] + M - x0) / S), nz = Math.ceil((Z[1] + M - z0) / S), pos = [], cl = [], H = [];
    for (let j = 0; j <= nz; j++)
      for (let i = 0; i <= nx; i++) {
        const x = x0 + i * S, z = z0 + j * S;
        let d = 1e9; for (const [a, b, r, s] of fp) { const q = Math.hypot(Math.max(Math.abs(x - a) - r, 0), Math.max(Math.abs(z - b) - s, 0)); if (q < d) d = q; }
        const h = dune(x, z) * (1 + 0.8 * sm(10, 50, d)) * sm(2.5, 9, d) * sm(0, 30, Math.min(i, nx - i, j, nz - j) * S);
        H.push(h); pos.push(x, h, z);
        const t = vn2(x * 0.07, z * 0.07), k = 0.86 + 0.28 * t + 0.35 * Math.max(h, 0) / 3;
        cl.push(gc.r * k, gc.g * k, gc.b * k * (1.05 - 0.1 * t));
      }
    const idx = []; for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, e = c + 1; idx.push(a, c, b, b, c, e); }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('color', new Float32BufferAttribute(cl, 3));
    g.setAttribute('uv', new Float32BufferAttribute(pos.filter((_, i) => i % 3 != 1), 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const uvXZ = (g) => { const p = g.attributes.position, u = g.attributes.uv; for (let i = 0; i < p.count; i++) u.setXY(i, p.getX(i), p.getZ(i)); return g; };

  // ---------- sky / lights / post ----------
  const skyU = { uHor: { value: new Color() }, uZen: { value: new Color('#ad98e2') }, uSun: { value: new Vector3(...nrm(SD)) }, uMoon: { value: new Vector3(...nrm(MD)) }, uD: { value: 0 }, uT: { value: 2 } };
  const skyMat = new ShaderMaterial({ uniforms: skyU, vertexShader: SKY_VS, fragmentShader: SKY_FS, side: BackSide, depthWrite: false, depthTest: false, fog: false });
  const sky = new Mesh(new SphereGeometry(1, 48, 24), skyMat); sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);
  const skyEnv = new Mesh(sky.geometry, skyMat); skyScene.add(skyEnv);
  const pmrem = new PMREMGenerator(renderer); let envRT = null;
  const hemi = new HemisphereLight('#b9a5ee', '#7a6070', 1), key = new DirectionalLight('#ffc88a', 4);
  key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.06; key.shadow.radius = 3; key.shadow.autoUpdate = false;
  scene.add(hemi, key, key.target);
  scene.fog = new FogExp2('#ffe6b0', 0.008);

  const SC = { w: 0, h: 0 };
  const rt = new WebGLRenderTarget(4, 4, { type: HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const gtao = new GTAOPass(scene, camera, 4, 4); gtao.blendIntensity = 1; gtao.updateGtaoMaterial({ radius: 0.9, distanceExponent: 1.4, thickness: 1.2, scale: 1.3, samples: 16, distanceFallOff: 1, screenSpaceRadius: false }); gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, rings: 2, samples: 12 });
  const bokeh = new BokehPass(scene, camera, { focus: 10, aperture: 0.0005, maxblur: 0.008 });
  const god = new ShaderPass(GOD), bloom = new UnrealBloomPass(new Vector2(4, 4), 0.55, 0.7, 1.05), grade = new ShaderPass(GRADE);
  composer.addPass(gtao); composer.addPass(bokeh); composer.addPass(god); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(grade);
  // sky, particles, glass and decals don't take part in the AO / depth-of-field depth passes
  let NODEPTH = [];
  for (const p of [gtao, bokeh]) { const r = p.render.bind(p); p.render = (...a) => { const v = NODEPTH.map((o) => o.visible); NODEPTH.forEach((o) => (o.visible = false)); try { r(...a); } finally { NODEPTH.forEach((o, i) => (o.visible = v[i])); } }; }

  // ---------- state ----------
  let w, view = 'follow', cam = { position: [0, 3.4, 6.5], target: [0, 0.8, -9] }, B = { c: [0, 0, 0], r: 20 }, raf = 0, dawn = 0, LTS = [], ceil = [], pick = [], partM, avatarG, ring, shadowDirty = true, ptsU, bounds = { at: [0, 0, 0] }, tNow = 2;
  const ray = new Raycaster(), pickables = [];

  const mkAvatar = () => {
    const g = new Group(), cloth = patch(new MeshStandardMaterial({ color: '#8a6a40', roughness: 0.9, metalness: 0 })), skin = patch(new MeshStandardMaterial({ color: '#c8a078', roughness: 0.7 })), dark = patch(new MeshStandardMaterial({ color: '#3a2a1c', roughness: 0.95 }));
    const prof = [[0.01, 0], [0.32, 0.02], [0.34, 0.15], [0.3, 0.55], [0.24, 0.95], [0.2, 1.25], [0.12, 1.4], [0.01, 1.42]].map(([x, y]) => new Vector2(x, y));
    const body = new Mesh(new LatheGeometry(prof, 24), cloth), head = new Mesh(new SphereGeometry(0.15, 20, 14), skin), hood = new Mesh(new SphereGeometry(0.19, 20, 14, 0, PI * 2, 0, PI * 0.62), dark), pack = new Mesh(new SphereGeometry(0.22, 16, 12).scale(1, 1.2, 0.7), dark);
    head.position.set(0, 1.55, 0.02); hood.position.set(0, 1.58, -0.03); hood.rotation.x = -0.25; pack.position.set(0, 0.95, 0.27);
    const sc = new Mesh(new RingGeometry(0.12, 0.24, 20).rotateX(-PI / 2), cloth); sc.position.y = 1.36; sc.scale.set(1.2, 1.2, 1.2);
    for (const m of [body, head, hood, pack, sc]) { m.castShadow = true; m.receiveShadow = true; g.add(m); }
    return g;
  };

  const clearGroup = (g) => { while (g.children.length) { const c = g.children.pop(); c.geometry?.dispose?.(); } };

  function setWorldSync(W) {
    w = W; clearGroup(things); NODEPTH = [NODEPTH[0]].filter(Boolean); pickables.length = 0; ceil = []; MC = {}; FLAGMATS = []; LANTMATS = []; WATER = [];
    NODEPTH = [sky, ...[]];
    const sk = new Color(w.sky || '#2a2a4a'), lum = 0.2126 * sk.r + 0.7152 * sk.g + 0.0722 * sk.b;
    const [sr, sg, sb] = (w.sky || '#2a2a4a').slice(1).match(/../g).map((h) => parseInt(h, 16) / 255), l2 = 0.2126 * sr + 0.7152 * sg + 0.0722 * sb;
    dawn = sm(0.35, 0.6, l2); void lum;
    skyU.uHor.value.copy(sk); skyU.uD.value = dawn;
    scene.fog.color.copy(sk).multiplyScalar(mix(0.3, 1, dawn)); scene.fog.color.lerp(new Color('#e8d4c0'), dawn * 0.12);
    const gc = new Color(w.ground || '#12121c').multiplyScalar(mix(1.5, 2.2, dawn)); gc.lerp(new Color('#a08a80'), dawn * 0.45);
    const th = Object.entries(w.things), at = w.avatar.at, X = [at[0], at[0]], Z = [at[2], at[2]], fp = [[at[0], at[2], 0.5, 0.5]], cnt = {}, ky = (t) => t[0] + t[2] + t[3];
    th.forEach(([, t]) => !t[5] && (cnt[ky(t)] = (cnt[ky(t)] || 0) + 1));
    const gl2 = th.map((e) => e[1]).filter((t) => t[5] == 2), ctr = (t) => t && [t[1][0], t[1][1] + t[2][1] / 2, t[1][2]], d2 = (t) => Math.hypot(t[1][0] - at[0], t[1][2] - at[2]),
      big = (c) => gl2.filter(c).sort((a, b) => b[2][0] * b[2][1] * b[2][2] - a[2][0] * a[2][1] * a[2][2])[0], rg = (h) => new Color(h);
    // lights: every glow-1 thing (nearest first), then the orb and the warm doorway glow
    const ls = th.map((e) => e[1]).filter((t) => t[5] == 1).sort((a, b) => d2(a) - d2(b)).slice(0, 4).map((t) => ({ p: ctr(t), c: rg(t[3]), i: 26 }));
    for (const [t, c, i] of [[big((t) => t[0] == 'ball' && rg(t[3]).b > rg(t[3]).r), new Color(0.5, 0.85, 1.4), 14], [big((t) => t[0] == 'ball' && rg(t[3]).r - rg(t[3]).b > 0.3), new Color(1.4, 1, 0.5), 18]]) t && ls.length < 4 && ls.push({ p: ctr(t), c, i });
    LTS.forEach((l) => { scene.remove(l.l); l.l.shadow.map?.dispose(); }); LTS = [];
    for (const L of ls) {
      const l = new PointLight(L.c, L.i, 46, 2); l.position.set(...L.p); l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.003; l.shadow.normalBias = 0.04; l.shadow.radius = 2; l.shadow.camera.near = 0.15; l.shadow.camera.far = 46; l.shadow.autoUpdate = false;
      scene.add(l); LTS.push({ l, b: L.i });
    }
    const groups = {}, P = { pos: [], s: [], k: [], z: [], c: [] }, pr = rng(99), addP = (x, y, z, k, size, c) => { P.pos.push(x, y, z); P.s.push(pr()); P.k.push(k); P.z.push(size); P.c.push(c.r, c.g, c.b); };
    const add = (m, g, t, id, fact, o = {}) => { const me = new Mesh(g, m); me.castShadow = o.cast ?? false; me.receiveShadow = o.rec ?? true; me.userData = { id, fact }; things.add(me); pickables.push(me); return me; };
    for (const [id, t] of th) {
      let [s, p, z, c, fact, g] = t;
      const r = Math.max(z[0], z[2]) / 2; X[0] = Math.min(X[0], p[0] - r); X[1] = Math.max(X[1], p[0] + r); Z[0] = Math.min(Z[0], p[2] - r); Z[1] = Math.max(Z[1], p[2] + r);
      p[1] < 1 && fp.push([p[0], p[2], z[0] / 2, z[2] / 2]);
      const cc = rg(c), mx = Math.max(...z);
      if (g) {
        let m, me;
        const thinH = s == 'box' && z[1] < 0.15 && z[0] > 0.4 && z[2] > 0.4, pane = g == 2 && s == 'box' && Math.min(...z) <= 0.15 && !thinH && [...z].sort((a, b) => a - b)[1] >= 0.4;
        if (g == 2 && mx > 4 && s == 'ball') {
          const sp = new Sprite(new SpriteMaterial({ map: glowT, color: cc, blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: 0.85 }));
          sp.position.set(p[0], p[1] + z[1] / 2, p[2]); sp.scale.set(z[0] * 2.4, z[1] * 2.8, 1); things.add(sp); NODEPTH.push(sp); continue;
        }
        if (s == 'disc' || thinH) { m = liquidM(c); me = add(m, geo(s, p, z), t, id, fact, { rec: true }); if (s == 'disc') me.geometry.attributes.uv; NODEPTH.push(me); }
        else if (pane) { me = add(glassM(c), geo(s, p, z), t, id, fact, { rec: false }); NODEPTH.push(me); }
        else {
          let zz = z; if (s == 'box' && z[1] < 0.15) zz = [z[0] < z[2] ? z[0] * 0.5 : z[0], z[1] * 0.6, z[2] <= z[0] ? z[2] * 0.5 : z[2]];
          me = add(glowM(c, g), geo(s, p, zz), t, id, fact, { rec: false });
          if (g == 1 && p[1] >= 1) me.userData.sway = th.length + P.s.length;
        }
        const q = [p[0], p[1] + z[1] / 2, p[2]];
        if (g == 1) for (let i = 0; i < 14; i++) addP(q[0], q[1], q[2], 1, 0.07, cc.clone().multiplyScalar(3));
        else if (mx < 2.5) for (let i = 0; i < 5; i++) addP(q[0] + (pr() - 0.5) * Math.min(z[0], 2), q[1] + (pr() - 0.5) * Math.min(z[1], 2), q[2] + (pr() - 0.5) * Math.min(z[2], 2), 2, 0.06, cc.clone().multiplyScalar(2.5));
        // ceiling light strips: shafts
        if (g == 2 && s == 'box' && Math.min(z[0], z[2]) <= 0.4 && Math.max(z[0], z[2]) >= 3 && p[1] >= 3) {
          const ax = z[2] > z[0], len = ax ? z[2] : z[0], hw = (ax ? z[0] : z[2]) / 2 + 0.15, sp = p[1] * 0.3, y = p[1], pos = [], uv = [];
          const q4 = (a, b, c2, d) => { pos.push(...a, ...b, ...c2, ...a, ...c2, ...d); uv.push(0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1); }, P3 = (sx, py, a) => (ax ? [p[0] + sx, py, p[2] + a] : [p[0] + a, py, p[2] + sx]);
          for (let a = -len / 2 + 1; a < len / 2; a += 3.3) q4(P3(-hw, y, a), P3(hw, y, a), P3(hw + sp, 0.03, a), P3(-hw - sp, 0.03, a));
          q4(P3(0, y, -len / 2), P3(0, y, len / 2), P3(0, 0.03, len / 2), P3(0, 0.03, -len / 2));
          const sg = new BufferGeometry(); sg.setAttribute('position', new Float32BufferAttribute(pos, 3)); sg.setAttribute('uv', new Float32BufferAttribute(uv, 2));
          const sm2 = new Mesh(sg, new MeshBasicMaterial({ map: shaftT, color: cc.clone().multiplyScalar(0.5), transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, fog: false }));
          sm2.frustumCulled = false; things.add(sm2); NODEPTH.push(sm2);
        }
        continue;
      }
      if (s == 'disc') {
        const m = new MeshStandardMaterial({ color: col(c, 1.3), alphaMap: padT, transparent: true, opacity: 0.85, roughness: 1, normalMap: dustT().normalMap, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, ...dustT() });
        m.map = dustT().map; const me = add(patch(m), geo(s, p, z), t, id, fact); NODEPTH.push(me); continue;
      }
      const wall = s == 'box' && mx >= 2.9 && z[1] >= 0.12, isCeil = wall && p[1] >= 3 && z[1] <= 1.5 && z[0] > 5 && z[2] > 5, slab = s == 'box' && z[1] < 0.12;
      if (!wall && (s == 'box' || s == 'cone') && cnt[ky(t)] >= 3) {
        const k = ky([s, 0, z, c]), G = groups[k] || (groups[k] = { g: geo(s, [0, 0, 0], z, true), m: stoneM(c), o: [], ids: [] });
        G.o.push(p); G.ids.push(id); continue;
      }
      const m = wall ? [brickM(c), brickM(c), p[1] + z[1] < 3.5 ? flagM(c) : brickM(c), brickM(c), brickM(c), brickM(c)] : slab ? flagM(c) : stoneM(c);
      const me = add(m, geo(s, p, z), t, id, fact, { cast: true });
      if (isCeil) ceil.push(me);
    }
    for (const G of Object.values(groups)) {
      const im = new InstancedMesh(G.g, G.m, G.o.length), mt = new Matrix4(); G.o.forEach((p, i) => im.setMatrixAt(i, mt.makeTranslation(p[0], p[1], p[2])));
      im.castShadow = true; im.receiveShadow = true; im.userData = { ids: G.ids, fact: null }; im.computeBoundingSphere(); things.add(im); pickables.push(im);
    }
    // the Wanderer stands on whatever solid top lies under them
    let fy = 0;
    for (const [, [s, p, z, , , g]] of th) if (!g && s == 'box' && z[1] >= 0.12 && Math.abs(at[0] - p[0]) <= z[0] / 2 && Math.abs(at[2] - p[2]) <= z[2] / 2 && p[1] + z[1] <= at[1] + 0.6) fy = Math.max(fy, p[1] + z[1]);
    if (!avatarG) { avatarG = mkAvatar(); scene.add(avatarG); ring = new Mesh(new RingGeometry(1.1, 1.6, 40).rotateX(-PI / 2), new MeshBasicMaterial({ color: '#ffd890', transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false, fog: false })); scene.add(ring); NODEPTH.push(ring); }
    avatarG.position.set(at[0], fy, at[2]); avatarG.rotation.y = -(w.avatar.facing * PI) / 180; ring.position.set(at[0], fy + 0.06, at[2]); bounds = { at, fy };
    // ambient dust motes: around the Wanderer and each light
    const dustC = dawn > 0.5 ? new Color(1.2, 0.85, 0.5) : new Color(0.5, 0.55, 0.7);
    for (let i = 0; i < 220; i++) addP(at[0] + (pr() - 0.5) * 28, fy + 0.4 + pr() * 6, at[2] + (pr() - 0.5) * 28, 3, 0.05 + pr() * 0.05, dustC.clone().multiplyScalar(1.4));
    ls.forEach((L) => { for (let i = 0; i < 24; i++) addP(L.p[0] + (pr() - 0.5) * 8, L.p[1] - 0.8 + (pr() - 0.5) * 3.6, L.p[2] + (pr() - 0.5) * 8, 3, 0.06, dustC.clone().multiplyScalar(1.2)); });
    B = { c: [(X[0] + X[1]) / 2, 0, (Z[0] + Z[1]) / 2], r: Math.max(10, Math.hypot(X[1] - X[0], Z[1] - Z[0]) * 0.5 + 3) };
    // terrain
    const tm = patch(new MeshStandardMaterial({ vertexColors: true, ...dustT(), roughness: 1, normalScale: new Vector2(1.5, 1.5), envMapIntensity: 0.7 }));
    const tg = terrainG(X, Z, fp, gc), ter = new Mesh(tg, tm); ter.receiveShadow = true; ter.userData = { id: 'ground' }; things.add(ter);
    const fm = patch(new MeshStandardMaterial({ color: gc.clone().multiplyScalar(1.02), ...dustT(), roughness: 1 })), far = new Mesh(uvXZ(new PlaneGeometry(2400, 2400, 1, 1).rotateX(-PI / 2).translate(0, -0.06, 0)), fm); far.receiveShadow = true; things.add(far);
    // particles
    const pg = new BufferGeometry(); pg.setAttribute('position', new Float32BufferAttribute(P.pos, 3)); pg.setAttribute('aS', new Float32BufferAttribute(P.s, 1)); pg.setAttribute('aK', new Float32BufferAttribute(P.k, 1)); pg.setAttribute('aZ', new Float32BufferAttribute(P.z, 1)); pg.setAttribute('aC', new Float32BufferAttribute(P.c, 3));
    ptsU = { uT: { value: 2 }, uK: { value: 400 }, uD: { value: dawn }, uSun: skyU.uSun };
    partM = new Points(pg, new ShaderMaterial({ uniforms: ptsU, vertexShader: PART_VS, fragmentShader: PART_FS, transparent: true, depthWrite: false, blending: AdditiveBlending })); partM.frustumCulled = false; things.add(partM); NODEPTH.push(partM);
    // light rig
    const day = dawn >= 0.5, sd = new Vector3(...nrm(day ? SD : MD));
    key.color.set(day ? '#ffc07a' : '#9ab4ff'); key.intensity = day ? 6.5 : 1.3; key.userData.dir = sd;
    hemi.color.set(day ? '#b8a2ee' : '#4a5aa8'); hemi.groundColor.set(day ? '#9a7a78' : '#14142a'); hemi.intensity = day ? 1.35 : 0.85;
    bloom.strength = day ? 0.3 : 0.8; bloom.threshold = day ? 1.8 : 0.9; bloom.radius = 0.75;
    scene.environmentIntensity = day ? 0.8 : 0.5;
    // environment from the sky
    envRT?.dispose(); skyEnv.visible = true; envRT = pmrem.fromScene(skyScene, 0, 0.1, 10); scene.environment = envRT.texture;
    shadowDirty = true;
  }

  function fitShadow() {
    const ov = view == 'overview', c = ov ? B.c : [bounds.at[0], 0, bounds.at[2] - 6], hs = ov ? Math.min(B.r * 1.1, 160) : 46, d = key.userData.dir || new Vector3(...nrm(SD));
    key.position.set(c[0] + d.x * 400, c[1] + d.y * 400, c[2] + d.z * 400); key.target.position.set(...c); key.target.updateMatrixWorld();
    const sc = key.shadow.camera; sc.left = -hs; sc.right = hs; sc.top = hs; sc.bottom = -hs; sc.near = 20; sc.far = 800; sc.updateProjectionMatrix();
    key.shadow.needsUpdate = true; LTS.forEach((l) => (l.l.shadow.needsUpdate = true)); shadowDirty = false;
  }

  function size(W, H) {
    if (SC.w == W && SC.h == H) return;
    SC.w = W; SC.h = H; renderer.setSize(W, H, false); composer.setSize(W, H); camera.aspect = W / H; camera.updateProjectionMatrix();
    GOD.uniforms.uA.value = GRADE.uniforms.uA.value = W / H; god.uniforms.uA.value = grade.uniforms.uA.value = W / H;
  }

  const fl = (i, t) => (1 + 0.1 * Math.sin(t * 9 + i * 1.7 + Math.sin(t * 3 + i) * 2) + 0.05 * Math.sin(t * 23 + i * 5)) * (1 + 0.1 * Math.sin(t * 5.3 + i * 2));

  function draw(t = 2) {
    if (!w) return;
    tNow = t;
    const W = cv.clientWidth || cv.width, H = cv.clientHeight || cv.height, { at, facing } = w.avatar, f = (facing * PI) / 180, ov = view == 'overview';
    size(W, H);
    const fw = [Math.sin(f), 0, -Math.cos(f)], rt2 = [-fw[2], 0, fw[0]];
    cam = ov
      ? { position: [B.c[0] - fw[0] * B.r, B.r * 0.9, B.c[2] - fw[2] * B.r], target: [B.c[0], 0, B.c[2]] }
      : { position: at.map((a, i) => a - fw[i] * 6.5 + rt2[i] * 1.3 + (i == 1) * 3.4), target: at.map((a, i) => a + fw[i] * 9 + (i == 1) * 0.8) };
    const P = cam.position.map((a, i) => a + [Math.sin(t * 0.4) * 0.1, Math.sin(t * 0.31) * 0.07, Math.cos(t * 0.37) * 0.1][i]),
      T = cam.target.map((a, i) => a + [Math.cos(t * 0.3) * 0.12, Math.sin(t * 0.23) * 0.08, 0][i]);
    camera.position.set(...P); camera.lookAt(...T); camera.updateMatrixWorld(); camera.updateProjectionMatrix();
    if (shadowDirty) fitShadow();
    ceil.forEach((m) => (m.visible = !ov));
    FLAGMATS.forEach((m) => (m.emissiveIntensity = ov ? 0.9 : 0)); RIM.uRim.value = ov ? 1 : 0; RIM.uRimC.value.set(dawn > 0.5 ? '#ffc98a' : '#7aa8ff');
    ring.visible = ov;
    LTS.forEach((L, i) => (L.l.intensity = L.b * fl(i, t))); LANTMATS.forEach((m) => (m.emissiveIntensity = 3.2 * fl(0, t)));
    things.children.forEach((c) => { if (c.userData.sway) c.rotation.z = Math.sin(t * 0.6 + c.userData.sway) * 0.05; });
    WATER.forEach((n) => n.offset.set(t * 0.012, t * 0.017));
    skyU.uT.value = t; if (ptsU) { ptsU.uT.value = t; ptsU.uK.value = H * 0.5 * camera.projectionMatrix.elements[5]; }
    scene.fog.density = ov ? 0.0016 : dawn > 0.5 ? 0.0085 : 0.012;
    hemi.intensity = (dawn >= 0.5 ? 0.95 : 0.85) * (ov ? 1.3 : 1);
    renderer.toneMappingExposure = (dawn >= 0.5 ? 0.62 : 1.1) * (ov ? 1.1 : 1);
    // depth of field: focus between the Wanderer and the camera target; off in overview
    const z = new Vector3(); camera.getWorldDirection(z);
    const dist = (a) => new Vector3(...a).sub(camera.position).dot(z);
    bokeh.enabled = !ov; bokeh.uniforms.focus.value = (dist(at) + dist(T)) / 2; bokeh.uniforms.aspect.value = camera.aspect;
    gtao.enabled = true;
    // god-rays toward the sun
    const sdir = skyU.uSun.value, sv = camera.position.clone().add(sdir.clone().multiplyScalar(100)).project(camera), front = z.dot(sdir);
    god.uniforms.uSun.value.set(sv.x * 0.5 + 0.5, sv.y * 0.5 + 0.5); god.enabled = dawn > 0.5 && front > 0.05; god.uniforms.uAmt.value = Math.min(1, front * 3) * (ov ? 0.4 : 0.45);
    grade.uniforms.uT.value = t; grade.uniforms.uD.value = dawn; grade.uniforms.uV.value = ov ? 0.35 : 0.5;
    composer.render();
  }

  const safe = (fn) => (...a) => { try { return fn(...a); } catch (e) { E.push(String(e && e.stack || e)); } };
  const frame = safe(draw);
  cv.addEventListener('webglcontextlost', (e) => { e.preventDefault(); E.push('webgl context lost'); });
  return {
    modes: ['follow', 'overview'],
    async setWorld(W) { setWorldSync(W); frame(); },
    setCamera(m) { if (m != view) { view = m; shadowDirty = true; } frame(tNow); },
    getCamera: () => cam,
    async renderStill(v) { if (v != view) { view = v; shadowDirty = true; } draw(2); },
    start() { cancelAnimationFrame(raf); raf = requestAnimationFrame(function l(ms) { frame(ms / 1e3); raf = requestAnimationFrame(l); }); },
    stop() { cancelAnimationFrame(raf); },
    resize() { frame(tNow); },
    pick(x, y) {
      const r = cv.getBoundingClientRect(); ray.setFromCamera({ x: ((x - r.left) / r.width) * 2 - 1, y: -(((y - r.top) / r.height) * 2 - 1) }, camera);
      const h = ray.intersectObjects(pickables, false)[0]; if (!h) return null;
      const u = h.object.userData; return u.ids ? { id: u.ids[h.instanceId], fact: w.things[u.ids[h.instanceId]]?.[4] ?? null } : { id: u.id, fact: u.fact ?? null };
    },
    errors: () => E.splice(0),
    dispose() { cancelAnimationFrame(raf); composer.dispose?.(); renderer.dispose(); },
  };
}

export async function createEngine(cv, opts) {
  try {
    if (!document.createElement('canvas').getContext('webgl2')) throw Error('WebGL2 unavailable');
    return await createThree(cv, opts);
  } catch (e) {
    console.warn('engine v7 falling back to v6:', e);
    let c = cv;
    if (!cv.getContext('webgl')) { c = cv.cloneNode(false); cv.parentNode.insertBefore(c, cv); cv.style.display = 'none'; }
    return createV6(c, opts);
  }
}
