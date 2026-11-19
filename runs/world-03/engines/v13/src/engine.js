// Engine v10 "controlled glow" (v9 + gaussian light pools, bloom/exposure limits, recessed doorways, beacon god-ray, sharper glass floor with ripples, overview starfield + lantern dots). v9 was (v8 + "starlit void": planar glass-floor mirror, procedural star dome, flame shaders, light cones and pools, fireflies, auto-exposure, chromatic bloom, lens flare; all night-only, dawn unchanged). three.js PBR renderer. The `sky` colour drives everything: light sky = dawn (sun, halo, god-rays, lavender fill), dark sky = night (star dome, moon, void).
// Falls back to the hand-written WebGL engine (v6.js) when WebGL2 or three.js fails.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, FogExp2, Vector2, Vector3, Group, Mesh, Points, Sprite, SpriteMaterial, InstancedMesh, Matrix4, Raycaster,
  BufferGeometry, BufferAttribute, Float32BufferAttribute, BoxGeometry, SphereGeometry, ConeGeometry, CircleGeometry, PlaneGeometry, RingGeometry, LatheGeometry,
  MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial, ShaderMaterial, CanvasTexture, DataTexture, PMREMGenerator, WebGLRenderTarget,
  DirectionalLight, PointLight, HemisphereLight, RepeatWrapping, SRGBColorSpace, HalfFloatType, FloatType, AdditiveBlending, BackSide, DoubleSide, PCFShadowMap, ACESFilmicToneMapping,
  RGBAFormat, LinearFilter, Vector4, CylinderGeometry, UnsignedByteType, InstancedBufferGeometry, InstancedBufferAttribute,
} from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { createEngine as createV6 } from './v6.js';
import { buildLand, buildDescent } from './descent.js';

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
function grassFn() {
  const a = lat(61, 192), b = lat(62, 192), n = fbm(63, 4, 4);
  return (u, v) => {
    const bl = Math.max(a(u, v * 3), b(u * 3, v)), nz = n(u, v);
    return [0.5 + 0.4 * bl, (0.6 + 0.4 * bl) * (0.8 + 0.4 * nz), 0.84];
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
// procedural star dome: ~60k twinkling colour-varied stars over the full sphere, a Milky Way band with dust lanes, nebula wisps
const STARLIB = `float hh(vec3 p){p=fract(p*vec3(.1031,.103,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
vec3 h3(vec3 p){return vec3(hh(p),hh(p+19.19),hh(p+47.7));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(mix(mix(hh(i),hh(i+vec3(1,0,0)),f.x),mix(hh(i+vec3(0,1,0)),hh(i+vec3(1,1,0)),f.x),f.y),mix(mix(hh(i+vec3(0,0,1)),hh(i+vec3(1,0,1)),f.x),mix(hh(i+vec3(0,1,1)),hh(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fb(vec3 p){return vn(p)*.5+vn(p*2.03+7.)*.27+vn(p*4.1+3.)*.15+vn(p*8.3)*.08;}
vec3 stl(vec3 r,float S,float pr,float sz,float t,float bd){vec3 s=r*S,g=floor(s),f=fract(s);
if(hh(g)>pr*(1.+bd*3.))return vec3(0);vec3 q=h3(g+3.7),d=f-(.22+.56*h3(g+8.1));float m=q.y,rad=sz*(.55+.6*m);
float k=exp(-dot(d,d)/(rad*rad))*(.12+1.4*m*m*m);float tt=q.z;
vec3 c=tt<.5?mix(vec3(.62,.8,1.15),vec3(1.),tt*2.):mix(vec3(1.),vec3(1.1,.88,.62),(tt-.5)*2.);if(q.x>.96)c=vec3(1.2,.62,.34);
return c*k*(.68+.32*sin(t*(1.3+q.x*3.)+q.y*90.));}
vec3 nightSky(vec3 r,vec3 hor,float t){float hy=max(r.y,0.);vec3 nc=mix(hor,hor*.27,sqrt(hy));if(r.y<0.)nc=hor*mix(1.,.5,smoothstep(0.,-.5,r.y));
vec3 gn=normalize(vec3(.3,.84,.45));float gb=dot(r,gn),bd=exp(-gb*gb/.02),nz=fb(r*3.+1.7),ln=smoothstep(.45,.7,fb(r*7.+9.));
nc+=vec3(.42,.5,.9)*bd*(.25+.9*nz)*(1.-.6*ln)*.085+vec3(1.,.78,.5)*bd*pow(max(dot(r,normalize(vec3(-.55,.15,-.8))),0.),3.)*nz*.07;
vec3 w1=normalize(vec3(.75,.25,-.6)),w2=normalize(vec3(-.8,.4,-.45)),w3=normalize(vec3(.1,-.55,-.8)),w4=normalize(vec3(-.2,-.3,.9));
nc+=(vec3(.5,.22,.95)*pow(max(dot(r,w1),0.),5.)*smoothstep(.42,.85,fb(r*3.4+vec3(4.,1.,2.)+fb(r*1.7)*1.6))+vec3(.15,.55,.9)*pow(max(dot(r,w2),0.),5.)*smoothstep(.42,.85,fb(r*3.1+vec3(9.,3.,5.)+fb(r*1.9)*1.6))
+vec3(.9,.28,.6)*pow(max(dot(r,w3),0.),5.)*smoothstep(.42,.85,fb(r*3.+vec3(2.,8.,1.)))+vec3(.3,.4,1.)*pow(max(dot(r,w4),0.),5.)*smoothstep(.45,.85,fb(r*3.+vec3(6.,2.,7.))))*.2;
return nc+(stl(r,40.,.10,.2,t,bd)*1.1+stl(r,90.,.14,.19,t,bd)*.9+stl(r,200.,.06,.17,t,bd)*.8);}`;
const SKY_FS = `precision highp float;uniform vec3 uHor,uZen,uSun,uMoon;uniform float uD,uT,uAlt;varying vec3 vD;
${STARLIB}
void main(){vec3 r=normalize(vD);float y=r.y,hy=max(y,0.);
float sd=dot(r,uSun),an=acos(clamp(sd,-1.,1.));
vec3 dc=mix(uHor*vec3(1.1,1.,.86),uZen,smoothstep(0.,.95,pow(hy,.45)));
dc=mix(dc,dc*vec3(1.08,.9,.86),exp(-hy*9.)*.5);
float cp=mix(1.,.3,uAlt);dc+=cp*(vec3(1.,.58,.26)*pow(max(sd,0.),4.)*.28*(1.-hy*.6)+vec3(1.,.74,.42)*exp(-an*7.)*.5+vec3(1.,.82,.55)*exp(-an*30.)*1.6+vec3(1.,.88,.62)*smoothstep(.046,.034,an)*34.);
if(uAlt>0.){dc=mix(dc,mix(uHor*vec3(1.03,.98,.86),uZen,smoothstep(0.,.9,pow(hy,.55))),uAlt*.7);
dc+=uAlt*(vec3(1.,.82,.52)*exp(-an*2.4)*.16+vec3(1.,.9,.66)*exp(-an*9.)*.14);
dc=mix(dc,mix(dc,vec3(.86,.78,1.)*.95,.4),uAlt*smoothstep(.25,-.5,y));
if(y>0.){vec2 q=r.xz/(y+.2)*1.2+vec2(uT*.012,uT*.005);float wv=smoothstep(.5,.8,fb(vec3(q*vec2(1.,2.3),uT*.008)));dc=mix(dc,vec3(1.04,.94,.78),wv*.38*uAlt*smoothstep(0.,.1,y)*(1.-smoothstep(.75,1.,y)));}}
vec3 nc=vec3(0);if(uD<.999){nc=nightSky(r,uHor,uT);float md=dot(r,uMoon);
nc+=vec3(.5,.62,.95)*(pow(max(md,0.),40.)*.35+pow(max(md,0.),600.)*.5)+vec3(.9,.95,1.1)*smoothstep(.9991,.9993,md)*2.2;}
gl_FragColor=vec4(mix(nc,dc,uD),1.);}`;

// v11 high sky: pale-gold cumulus sea (one plane per layer, world-space noise so layers parallax)
const CLOUD_FS = `precision highp float;uniform float uT,uS,uA,uBase;uniform vec3 uHor,uSun;varying vec3 vW;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=n2(p)*a;p=p*2.03+vec2(17.,9.);a*=.5;}return s/.9375;}
void main(){vec3 V=vW-cameraPosition;float dist=length(V);vec2 p=vW.xz*uS+vec2(uT*.02,uT*.008)*uS*8.;
float fd=1.-smoothstep(900.,1700.,dist);float d=mix(.5,fb(p),fd),cov=smoothstep(uBase,uBase+.22,d);
float ds=mix(.5,fb(p+uSun.xz*.5),fd),lit=clamp(.5+(d-ds)*7.,0.,1.)*(.35+.65*cov);
vec3 c=mix(vec3(.66,.55,.8),vec3(1.12,.99,.76),lit)*(.72+.42*cov);
c=mix(c,mix(uHor*1.02,vec3(.86,.78,1.),.5),1.-exp(-dist/900.));
float a=mix(cov*uA,1.,step(.99,uA))*(1.-smoothstep(900.,1450.,dist));gl_FragColor=vec4(c,a);}`;
// light-bridge ribbon (u across -1..1, v 0..1 along) and its travelling sparkles
const RIB_VS = 'varying vec2 vU;varying vec3 vW;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}';
const RIB_FS = `uniform float uT,uL;uniform vec3 uC,uN;varying vec2 vU;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
void main(){float a=abs(vU.x),L=vU.y*uL;float edge=1.-smoothstep(.5,1.,a),core=exp(-a*a*2.5);
float fl=.78+.22*sin(L*1.7-uT*3.)+.1*sin(L*5.-uT*7.+vU.x*3.);float q=floor(L*1.4-uT*.9);
float g=pow(max(sin(L*5.-uT*6.+sin(vU.x*4.+q)*1.5),0.),14.)*smoothstep(.35,.9,h(vec2(q,floor(vU.x*2.5))));
vec3 c=vec3(1.,.78,.36)*uC*fl*(.7+.9*core)+vec3(1.,.95,.75)*(g*1.3+core*.25);gl_FragColor=vec4(c,edge*smoothstep(2.,8.,distance(vW,cameraPosition))*mix(.22,1.,smoothstep(.08,.4,abs(dot(normalize(vW-cameraPosition),uN)))));}`;
const SPK_VS = `attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(uT*(.07+.1*fract(aS*3.1))+aS*7.3);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*.9+sin(uT*2.+aS*40.)*.1;q.y+=.12+fract(aS*5.)*.8+sin(uT*3.+aS*20.)*.08;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(f*3.1416)*(.45+.55*sin(uT*9.+aS*60.));gl_PointSize=max(.09*uK/-mv.z,1.8);}`;
const SPK_FS = `varying float vA;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vec3(1.,.9,.55)*2.,vA*a);}`;
// v12: sparkles shed by the bridge, falling away below it
const SPK2_VS = `attribute vec3 aA,aB;attribute float aS;uniform float uT,uK;varying float vA;
void main(){float f=fract(aS),ph=fract(uT*(.1+.1*fract(aS*3.7))+aS*5.1);vec3 q=mix(aA,aB,f);q.x+=(fract(aS*13.)-.5)*1.8+sin(uT*.8+aS*40.)*.25;q.y+=.2-ph*(2.4+fract(aS*9.)*2.6);q.z+=sin(uT*.9+aS*30.)*.25+ph*.7;
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;vA=sin(ph*3.1416)*(1.-ph*.35)*(.55+.45*sin(uT*7.+aS*60.));gl_PointSize=max(.14*uK/-mv.z,2.2);}`;

// v12 living sky: cumulus lobes (camera-facing quads shaded like lumpy spheres: gold on top, lavender underneath)
const PUF_VS = `attribute vec4 aC,aD;uniform float uT;varying vec2 vQ;varying vec4 vD;varying float vFd,vDist;varying vec3 vRay;
void main(){vec3 c=aC.xyz;float r=aC.w,sd=aD.x;c+=vec3(sin(uT*.05+sd*40.),sin(uT*.04+sd*17.)*.12,cos(uT*.045+sd*23.))*r*.4+vec3(sin(uT*.011)*9.,0.,cos(uT*.008)*5.);r*=1.+.05*sin(uT*.3+sd*30.);
vRay=normalize(c-cameraPosition);vec4 mv=viewMatrix*vec4(c,1.);vDist=length(mv.xyz);vFd=smoothstep(r*.6,r*1.8+6.,vDist);vQ=position.xy;vD=aD;mv.xy+=position.xy*r*1.18;gl_Position=projectionMatrix*mv;}`;
const PUF_FS = `precision highp float;uniform float uT;uniform vec3 uSun,uHor;varying vec2 vQ;varying vec4 vD;varying float vFd,vDist;varying vec3 vRay;
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){return n2(p)*.55+n2(p*2.1+5.)*.3+n2(p*4.3+9.)*.15;}
void main(){vec2 q=vQ*1.18;float sd=vD.x,h=vD.y,r2=dot(q,q);vec2 np=q*1.5+sd*53.;float n1=fb(np),n3=fb(np*1.9+13.);
float rr=sqrt(r2)+(n1-.5)*.6;float a=smoothstep(1.,.42,rr);if(a<.004)discard;
float z=sqrt(max(1.-min(r2,1.),0.));vec3 nv=normalize(vec3(q+(vec2(n1,n3)-.5)*.8,z*1.05+.12));vec3 nw=normalize(nv*mat3(viewMatrix));
float d=dot(nw,uSun),up=nw.y,sun=max(d,0.);
vec3 lav=vec3(.74,.65,.92),cream=vec3(1.,.94,.82),gold=vec3(1.,.8,.44);
cream=mix(cream,vec3(1.,.86,.6),h*.55);vec3 c=mix(lav*mix(.82,1.,h),cream,smoothstep(-.5,.5,up)*.7+.3*h);c*=mix(.86,1.,h)*(.84+.3*n1);
c+=gold*sun*(.3+.5*h)+gold*pow(smoothstep(.1,1.,up),1.5)*1.1*h+vec3(1.,.86,.6)*pow(1.-z,3.)*sun*.45;
c+=gold*pow(max(dot(vRay,uSun),0.),2.5)*(.3+1.1*pow(1.-z,2.))*(.4+.6*h);
c*=1.12;float hz=1.-exp(-vDist/1000.);c=mix(c,mix(uHor,vec3(.82,.74,.98),.55)*1.0,hz*.8);
gl_FragColor=vec4(c,a*vFd*.94);}`;
// birds: flapping V silhouettes on a lazy drift, wrapped inside a box around the flock centre
const BIRD_VS = `attribute vec4 aB;attribute vec3 aV;uniform float uT;uniform vec3 uCen;uniform vec2 uDir;varying float vA,vS;
void main(){float L=150.;vec3 d=vec3(aB.x,aB.y,aB.z)+vec3(uDir.x,0.,uDir.y)*aV.y*uT;d.xz=mod(d.xz+L*.5,L)-L*.5;d.y+=sin(uT*.2+aV.x*9.)*1.5;vec3 wp=uCen+d;float fp=uT*(5.+aV.y)+aV.x*30.,flap=sin(fp);
vec3 lp=position;float wing=abs(lp.x);lp.y+=flap*wing*.55*step(.01,wing);lp.y+=sin(fp*.5)*.04;lp*=aB.w;
float yaw=atan(uDir.x,uDir.y)+(aV.z-.5)*.5;float cy=cos(yaw),sy=sin(yaw);vec3 rp=vec3(lp.x*cy+lp.z*sy,lp.y,-lp.x*sy+lp.z*cy);
vec4 mv=viewMatrix*vec4(wp+rp,1.);gl_Position=projectionMatrix*mv;vA=1.-smoothstep(.62,.98,length(d.xz)/(L*.5));vS=.5+.5*flap*step(.01,wing);}`;
const BIRD_FS = `uniform vec3 uHor;varying float vA,vS;void main(){vec3 c=mix(vec3(.22,.17,.36),vec3(.46,.38,.6),vS*.6);c=mix(c,uHor*.8,.28);gl_FragColor=vec4(c,vA*.9);}`;
// drifting petals and seeds: a wrapped box around the camera, so they stream past it
const DRIFT_VS = `attribute vec4 aP;attribute vec3 aC;uniform float uT,uK;varying vec4 vC;
void main(){vec3 B=vec3(46.,20.,46.),wind=vec3(1.5,-.14,.95);float s=aP.w;vec3 q=aP.xyz*B+wind*uT*(.55+.9*fract(s*7.1))+vec3(sin(uT*.9+s*40.)*.7,sin(uT*1.4+s*30.)*.4,cos(uT*.8+s*20.)*.7);
vec3 rel=mod(q-cameraPosition+B*.5,B)-B*.5;vec4 mv=viewMatrix*vec4(cameraPosition+rel,1.);gl_Position=projectionMatrix*mv;
float e=max(abs(rel.x)/(B.x*.5),max(abs(rel.y)/(B.y*.5),abs(rel.z)/(B.z*.5)));float fl=.65+.35*sin(uT*3.+s*50.);vC=vec4(aC*(.8+.5*fl),(1.-smoothstep(.7,1.,e))*smoothstep(.6,2.5,-mv.z)*.85);
gl_PointSize=clamp(.075*(.7+fract(s*3.3))*uK/-mv.z,1.8,16.);}`;
const DRIFT_FS = `varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=smoothstep(1.,.3,r);gl_FragColor=vec4(vC.rgb,vC.a*a);}`;

// glass floor: planar reflection (Fresnel, ripple, vertical smear) over the star dome seen through it
const FLOOR = {
  name: 'GlassFloor',
  uniforms: { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null }, uT: { value: 2 }, uHor: { value: new Color() }, uOv: { value: 0 }, uRip: { value: 0 }, uFt: { value: Array.from({ length: 7 }, () => new Vector2()) }, uBc: { value: new Vector4() } },
  vertexShader: `uniform mat4 textureMatrix;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
void main(){vUv=textureMatrix*vec4(position,1.);vL=position.xy*2.;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
  fragmentShader: `uniform vec3 color,uHor;uniform sampler2D tDiffuse;uniform float uT,uOv,uRip;uniform vec2 uFt[7];uniform vec4 uBc;varying vec4 vUv;varying vec3 vW;varying vec2 vL;
${STARLIB}
void main(){vec3 V=normalize(vW-cameraPosition);vec2 p=vW.xz;
float a=p.x*1.7+uT*.8+sin(p.y*.9),b=p.y*2.3-uT*.6+p.x*.4,c=(p.x+p.y)*3.7+uT*1.3;
vec2 g=vec2(cos(a)*1.7+cos(c)*1.85,cos(b)*2.3+cos(c)*1.85)*.0007;
float rp=0.;for(int i=0;i<7;i++){vec2 d=p-uFt[i];float L=length(d),ph=fract(uT*.3+float(i)*.29),r=.15+ph*1.7,e=exp(-pow((L-r)/.11,2.))*(1.-ph)*(1.-ph)*(1.-float(i)*.1)*uRip;rp+=e;g+=d/max(L,.01)*e*.004*sin((L-r)*36.);}
vec3 n=normalize(vec3(-g.x,1.,-g.y));
vec2 uv=vUv.xy/vUv.w+g*2.5;vec3 rf=texture2D(tDiffuse,uv).rgb*.7+texture2D(tDiffuse,uv+vec2(0.,.003)).rgb*.15+texture2D(tDiffuse,uv-vec2(0.,.003)).rgb*.15;
float cs=clamp(dot(-V,n),0.,1.),F=.16+.84*pow(1.-cs,3.5);
vec3 tr=nightSky(normalize(V),uHor*.7,uT)*.4;
vec3 col=color*.5+vec3(.01,.014,.035)+tr*(1.-F)+rf*F*1.1;
col+=vec3(.55,.7,1.)*rp*.07*(.4+F);
if(uBc.w>0.){vec2 cd=normalize(uBc.xy-cameraPosition.xz+1e-4),q=p-uBc.xy;float al=-dot(q,cd),ac=q.x*cd.y-q.y*cd.x,wd=.22+.05*max(al,0.);
float st=exp(-ac*ac/(wd*wd))*(al>0.?exp(-al/30.):exp(-al*al/9.));col+=vec3(.8,.9,1.)*st*uBc.w*(.3+.7*F)*.6;}
if(uOv>0.){vec2 cp=p*.1,ci=floor(cp),cf=fract(cp);float hs=hh(vec3(ci,5.));vec3 st=vec3(.014,.02,.05);if(hs>.7){vec2 sp=.2+.6*vec2(hh(vec3(ci,9.)),hh(vec3(ci,13.)));vec2 dd=cf-sp;st+=mix(vec3(.6,.8,1.),vec3(1.,.85,.6),hh(vec3(ci,2.)))*exp(-dot(dd,dd)/.012)*(.3+.7*hh(vec3(ci,7.)))*.7;}col+=st*uOv;}
gl_FragColor=vec4(col,1.-smoothstep(.8,1.,length(vL)));}`,
};

const GOD = {
  uniforms: { tDiffuse: { value: null }, uSun: { value: new Vector2() }, uAmt: { value: 0 }, uCol: { value: new Color('#ffc477') }, uA: { value: 1.7 }, uT: { value: 2 }, uThr: { value: 1.5 } },
  vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader: `uniform sampler2D tDiffuse;uniform vec2 uSun;uniform float uAmt,uA,uT,uThr;uniform vec3 uCol;varying vec2 vUv;
void main(){vec4 o=texture2D(tDiffuse,vUv);vec2 d=(uSun-vUv),st=d/36.*.97,p=vUv;float s=0.,w=1.;
for(int i=0;i<36;i++){p+=st;vec3 c=texture2D(tDiffuse,p).rgb;s+=max(dot(c,vec3(.33))-uThr,0.)*w;w*=.968;}
vec2 dd=d*vec2(uA,1.);float ang=atan(dd.y,dd.x);
o.rgb+=smoothstep(.015,.3,dot(o.rgb,vec3(.33)))*uCol*s*uAmt*.07*(.65+.35*sin(ang*38.+uT*.25)*sin(ang*11.+1.-uT*.15))*exp(-length(dd)*1.2);gl_FragColor=o;}`,
};
const GRADE = {
  uniforms: { tDiffuse: { value: null }, uT: { value: 2 }, uA: { value: 1.7 }, uD: { value: 0 }, uV: { value: 0.5 }, uN: { value: 0 }, uLP: { value: [new Vector3(), new Vector3(), new Vector3(), new Vector3()] } },
  vertexShader: GOD.vertexShader,
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uT,uA,uD,uV,uN;uniform vec3 uLP[4];varying vec2 vUv;
float h(vec2 g){return fract(sin(dot(g,vec2(12.9898,78.233)))*43758.5453);}
void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;
if(uN>0.){vec2 q0=vUv-.5,o=q0*.005*(.5+length(q0)*2.);c=vec3(texture2D(tDiffuse,vUv+o).r,c.g,texture2D(tDiffuse,vUv-o).b);vec3 bl=vec3(0);
for(int i=0;i<8;i++){float a=float(i)*.785+.3;vec2 d=vec2(cos(a),sin(a)*uA);vec3 s1=texture2D(tDiffuse,vUv+d*.007).rgb,s2=texture2D(tDiffuse,vUv+d*.02).rgb;
bl+=s1*max(dot(s1,vec3(.33))-.5,0.)*vec3(1.,.72,.45)+s2*max(dot(s2,vec3(.33))-.5,0.)*vec3(.45,.7,1.1);}
c+=bl*.07*uN;vec3 fl=vec3(0);
for(int i=0;i<4;i++){vec3 L=uLP[i];if(L.z>0.){vec2 d=(vUv-L.xy)*vec2(uA,1.);fl+=vec3(.45,.68,1.)*exp(-abs(d.y)*70.)*exp(-abs(d.x)*2.2)*L.z*.1;
for(int k=0;k<3;k++){float kk=.5+float(k)*.55;vec2 gp=.5+(.5-L.xy)*kk,e=(vUv-gp)*vec2(uA,1.);fl+=mix(vec3(1.,.6,.3),vec3(.4,.6,1.),float(k)*.5)*exp(-dot(e,e)/(.0012+float(k)*.001))*L.z*.05;}}}
c+=fl*uN;float ll=0.;for(int i=0;i<8;i++){float a=float(i)*.785;ll+=dot(texture2D(tDiffuse,vUv+vec2(cos(a),sin(a)*uA)*.05).rgb,vec3(.3,.59,.11));}ll/=8.;c*=max(1./(1.+max(ll-.42,0.)*1.1),.62);}
float l=dot(c,vec3(.3,.59,.11));
c=mix(c*mix(vec3(.84,.95,1.12),vec3(.9,.94,1.1),uD),c*mix(vec3(1.1,1.,.86),vec3(1.06,1.,.9),uD),smoothstep(.12,.7,l));
vec2 q=(vUv-.5)*vec2(uA,1.);c*=1.-uV*pow(length(q)*.92,2.4);c*=1./(1.+max(dot(c,vec3(.33))-.82,0.)*1.1);
c+=(h(vUv*vec2(1920.,1080.)+floor(uT*24.))-.5)*.045*(1.-l*.6);gl_FragColor=vec4(c,1.);}`,
};

const PART_VS = `attribute float aS,aK,aZ;attribute vec3 aC;uniform float uT,uK,uD;uniform vec3 uSun;varying vec4 vC;
void main(){vec3 q=position;float a=aS*40.,al=1.;
if(aK>6.5){float h=fract(uT*.02+aS*9.);q.y+=h*16.;q.xz+=vec2(sin(uT*.13+a),cos(uT*.11+a*1.3))*1.2;al=sin(h*3.1416)*(.55+.45*sin(uT*2.+a*5.))*.9;}
else if(aK>5.5){q+=vec3(sin(uT*.21+a)*2.2+sin(uT*.5+a*2.)*.6,sin(uT*.17+a*1.3)*.8,cos(uT*.19+a*.7)*2.2);al=pow(.5+.5*sin(uT*1.1+a*7.),3.)*1.8;}
else if(aK>4.5){al=pow(max(sin(uT*2.3+a*3.),0.),12.)*2.5;}
else if(aK>3.5){float h=fract(uT*.11+aS*7.);q+=vec3(h*20.,sin(h*9.+a)*.25+h*.7,sin(a+h*3.)*1.2);al=sin(h*3.1416)*.7;}
else if(aK>2.5){q+=vec3(sin(uT*.2+a),sin(uT*.17+a*1.3)*.6,cos(uT*.23+a*.7))*1.6;al=.5+.5*sin(uT*1.3+a);}
else if(aK>1.5){q+=vec3(sin(uT*.2+a),sin(uT*.17+a*1.3)*.6,cos(uT*.23+a*.7))*.5;al=.5+.5*sin(uT*1.5+a);}
else{float h=fract(uT*.5+aS);q+=vec3(sin(a)*h*.6+sin(uT*3.+a)*.1,.1+h*.9,cos(a*1.3)*h*.6);al=(1.-h)*(.6+.4*sin(uT*20.+a));}
vec4 mv=modelViewMatrix*vec4(q,1.);gl_Position=projectionMatrix*mv;
float g=pow(max(dot(normalize(q-cameraPosition),uSun),0.),5.);if(aK>2.5&&aK<3.5)al*=mix(1.,.3+3.2*g,uD);
vC=vec4(aC,al);gl_PointSize=max(aZ*uK/-mv.z,1.6);}`;
const PART_FS = `varying vec4 vC;void main(){float r=length(gl_PointCoord-.5)*2.,a=pow(max(1.-r,0.),2.);gl_FragColor=vec4(vC.rgb,vC.a*a);}`;

// animated teardrop flame (quad, bottom at y=0): amber body, hot inner, blue core
const FLAME_FS = `uniform float uT,uS,uK;uniform vec3 uC;varying vec2 vUv;
void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float y=p.y,t=uT*2.+uS*7.;
float sw=sin(t*1.7+y*4.)*.07*y*y+sin(t*3.3+y*7.)*.035*y,x=p.x-sw;
float w=1.7*pow(max(y,0.),.42)*pow(max(1.-y,0.),1.15)*(1.+.1*sin(t*5.+y*9.))*(.92+.08*sin(t*2.3));
float d=abs(x)/max(w,.001),body=smoothstep(1.,.35,d)*step(0.,y)*smoothstep(1.,.9,y);
float hot=smoothstep(.75,0.,d)*(1.-y*.8),cd=length(vec2(x*1.25,(y-.2)*.9)),core=smoothstep(.2,.02,cd);
vec3 c=mix(uC*1.5,vec3(1.,.93,.72)*1.6,hot*.7);c=mix(c,vec3(.55,.8,1.)*2.2,core);
gl_FragColor=vec4(c*body*uK,1.);}`;
// luminance meter: 8x8 weighted log-luminance of the frame before bloom, read back for auto-exposure
class MeterPass extends Pass {
  constructor() {
    super(); this.needsSwap = false; this.rt = new WebGLRenderTarget(8, 8, { type: UnsignedByteType }); this.buf = new Uint8Array(256); this.lum = 0.1;
    this.q = new FullScreenQuad(new ShaderMaterial({ uniforms: { tD: { value: null } }, depthTest: false,
      vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader: 'uniform sampler2D tD;varying vec2 vUv;void main(){float s=0.;for(int i=0;i<4;i++)for(int j=0;j<4;j++){vec3 c=texture2D(tD,vUv+(vec2(float(i),float(j))-1.5)*.03).rgb;s+=min(dot(c,vec3(.3,.59,.11)),1.4);}gl_FragColor=vec4(clamp(log2(s/16.+1e-4)/12.+.75,0.,1.),0.,0.,1.);}' }));
  }
  render(renderer, writeBuffer, readBuffer) {
    this.q.material.uniforms.tD.value = readBuffer.texture; renderer.setRenderTarget(this.rt); this.q.render(renderer); renderer.readRenderTargetPixels(this.rt, 0, 0, 8, 8, this.buf);
    let s = 0, ws = 0; for (let i = 0; i < 64; i++) { const x = (i % 8) - 3.5, y = ((i / 8) | 0) - 3.5, k = Math.exp(-(x * x + y * y) / 14); s += k * (this.buf[i * 4] / 255 - 0.75) * 12; ws += k; }
    this.lum = Math.pow(2, s / ws);
  }
}

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
  const RIM = { uRim: { value: 0 }, uRimC: { value: new Color('#ffd49a') } }, CT = { value: 2 }, GR = { value: 0 }, CS = { value: 0 }, WG = { value: 0 }, HZ = { value: 0 };
  const GUST = 'float gust(vec2 p){return pow(.5+.5*sin(dot(p,vec2(.13,.07))-uCT*1.15+sin(dot(p,vec2(-.05,.1))+uCT*.3)*1.4),2.);}\n';
  const CSH = 'float cn2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5),b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5),c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5),d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5);return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}\n';
  const patch = (m, o = {}) => {
    m.onBeforeCompile = (s) => {
      s.uniforms.uRim = RIM.uRim; s.uniforms.uRimC = RIM.uRimC; s.uniforms.uCT = CT; s.uniforms.uGR = o.gold ? GR : { value: 0 }; s.uniforms.uCS = CS; s.uniforms.uWG = WG; s.uniforms.uHZ = HZ; s.uniforms.uWV = { value: o.wave ? 1 : 0 };
      s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nuniform float uCT,uWG;varying vec3 vWP;varying float vGu;\n' + GUST).replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvGu=0.;')
        .replace('#include <project_vertex>', '#include <project_vertex>\n#ifdef USE_INSTANCING\nvWP=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;\n#else\nvWP=(modelMatrix*vec4(transformed,1.)).xyz;\n#endif');
      if (o.cloth) s.vertexShader = s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nfloat cw=clamp((1.5-position.y)/1.5,0.,1.)*' + o.cloth + ';transformed.x+=sin(uCT*1.7+position.y*4.+position.z*3.)*.05*cw+sin(uCT*.7)*.02*cw;transformed.z+=cos(uCT*1.3+position.y*3.+position.x*3.)*.04*cw+.03*cw*(.6+.4*sin(uCT*2.1));');
      if (o.sway) s.vertexShader = s.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\nfloat ph=instanceMatrix[3].x*.7+instanceMatrix[3].z*.5;vec3 wc=(modelMatrix*vec4(instanceMatrix[3].xyz,1.)).xyz;\n#else\nfloat ph=modelMatrix[3].x*.7+modelMatrix[3].z*.5;vec3 wc=modelMatrix[3].xyz;\n#endif\nfloat gs=gust(wc.xz)*uWG;float sw=max(position.y-(' + o.sway[1].toFixed(3) + '),0.)*' + o.sway[0].toFixed(4) + '*(1.+2.6*gs);transformed.x+=sin(uCT*1.3+ph)*sw+sin(uCT*.5+ph*2.)*sw*.5+gs*sw*1.6;transformed.z+=cos(uCT*1.1+ph*1.3)*sw*.6+gs*sw*.7;vGu=gs;');
      s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uRim,uGR,uCT,uCS,uWG,uHZ,uWV;uniform vec3 uRimC;varying vec3 vWP;varying float vGu;\n' + GUST + CSH)
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + (o.sheen ? 'totalEmissiveRadiance+=vec3(1.,.78,.42)*pow(max(sin(normal.y*7.+normal.x*3.-uCT*1.1),0.),7.)*.4*(.4+.6*pow(1.-saturate(dot(normal,normalize(vViewPosition))),1.5));' : ''))
        .replace('#include <fog_fragment>', '{vec2 cq=vWP.xz*.03+vec2(uCT*.045,uCT*.02);float cs=smoothstep(.42,.68,cn2(cq)*.65+cn2(cq*2.3+7.)*.35);gl_FragColor.rgb*=mix(vec3(1.),vec3(.62,.6,.82),cs*uCS);float gw=uWV*uWG*gust(vWP.xz);gl_FragColor.rgb*=1.+gw*.16+vGu*.2;gl_FragColor.rgb+=vec3(.5,.42,.16)*gw*.03;}\n#ifdef USE_FOG\nfloat ff=1.-exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);vec3 fc=mix(vec3(1.,.8,.48)*fogColor*1.15,vec3(.62,.5,.8)*(.55+.45*fogColor),smoothstep(25.,160.,vFogDepth));fc=mix(fc,vec3(.78,.68,.95)*(.62+.38*fogColor),uHZ*smoothstep(10.,110.,vFogDepth));gl_FragColor.rgb=mix(gl_FragColor.rgb,fc,ff*(1.+uHZ*.6));\n#endif')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance+=vec3(1.,.72,.34)*uGR*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),3.)*.7;')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance+=uRimC*uRim*pow(1.-saturate(dot(normalize(normal),normalize(vViewPosition))),2.2)*1.4;');
    };
    m.customProgramCacheKey = () => 'rim' + (o.cloth || '') + (o.gold ? 'g' : '') + (o.sway ? 'w' + o.sway : '') + (o.sheen ? 's' : '') + (o.wave ? 'v' : '') + '12';
    return m;
  };

  // ---------- materials (cached per world build) ----------
  let MC = {}, FLAGMATS = [], LANTMATS = [], WATER = [], SPR = [], night = false, REFL = [], FL = [], LN = [], FLM = [], FLK = [], FLARE = [], MIR = null, mirT = null, WALLS = [], CLOUDS = [], ALT = false, TOWER = false, GFL = [], PUF = null, PUF2 = null, DESC = [], DESCON = false, TILT = 0;
  const col = (c, k = 1) => new Color(c).multiplyScalar(k);
  const brickM = (c) => MC['b' + c] || (MC['b' + c] = patch(new MeshStandardMaterial({ color: col(c, 1.7), ...brickT(), roughness: 1, metalness: 0, normalScale: new Vector2(1.3, 1.3) })));
  const flagM = (c) => MC['f' + c] || (MC['f' + c] = (() => { const m = patch(new MeshStandardMaterial({ color: col(c, 1.35), ...flagT(), roughness: 1, metalness: 0, emissive: col(c, 0.5), emissiveIntensity: 0 })); FLAGMATS.push(m); return m; })());
  const stoneM = (c) => MC['s' + c] || (MC['s' + c] = patch(new MeshStandardMaterial({ color: col(c, 1.4), ...stoneT(), roughness: 1, metalness: 0 })));
  const glowM = (c, g) => MC['g' + c + g] || (MC['g' + c + g] = (() => {
    const gl = night && g == 1, m = patch(new MeshStandardMaterial({ color: col(c, 0.4), emissive: col(c), emissiveIntensity: g == 1 ? (gl ? 0.9 : 3.2) : 2.4, roughness: 0.5, ...(gl ? { transparent: true, opacity: 0.4, depthWrite: false } : {}) })); m.userData.b = gl ? 0.9 : 3.2; if (g == 1) LANTMATS.push(m); return m;
  })());
  const glassM = (c) => MC['gl' + c] || (MC['gl' + c] = new MeshPhysicalMaterial({ color: col(c, 0.7), emissive: col(c), emissiveIntensity: 0.75, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.55, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 2.2, side: DoubleSide, depthWrite: false }));
  const liquidM = (c) => MC['lq' + c] || (MC['lq' + c] = (() => {
    const w = waterT(), m = new MeshPhysicalMaterial({ color: col(c, 0.35), emissive: col(c), emissiveIntensity: 0.55, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.93, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.8, normalMap: w.normalMap, normalScale: new Vector2(0.35, 0.35) });
    WATER.push(w.normalMap); return m;
  })());
  const RT = { value: 2 };
  const roadM = (c, cx) => new ShaderMaterial({
    uniforms: { uT: RT, uC: { value: new Color(c) }, uX: { value: cx } }, fog: false, transparent: false,
    vertexShader: 'varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
    fragmentShader: 'uniform float uT,uX;uniform vec3 uC;varying vec3 vW;float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}void main(){float pu=.72+.28*sin(vW.z*.13-uT*1.5)+.1*sin(vW.z*.9-uT*2.7);float e=1.-.35*smoothstep(.2,1.2,abs(vW.x-uX));float q=floor(vW.z*.8-uT*.9),f=pow(max(sin(vW.z*.8-uT*3.6+sin(vW.x*4.+q)),0.),12.)*smoothstep(.3,.9,.5+.5*sin(vW.x*3.1+q*5.+h(vec2(q,1.))*6.));vec3 c=vec3(1.,.78,.42)*uC*pu*e*2.2+vec3(1.,.92,.6)*f*1.6;gl_FragColor=vec4(c,1.);}',
  });
  const poolM = (c, k) => new ShaderMaterial({ uniforms: { uC: { value: new Color(c) }, uK: { value: k } }, transparent: true, blending: AdditiveBlending, depthWrite: false, fog: false, polygonOffset: true, polygonOffsetFactor: -3,
    vertexShader: 'varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
    fragmentShader: 'uniform vec3 uC;uniform float uK;varying vec2 vUv;varying vec3 vW;void main(){float r=length(vUv-.5)*2.,g=exp(-r*r*4.2)*(1.-smoothstep(.6,1.,r));vec3 c=uC*mix(.7,1.25,g);float nr=smoothstep(1.5,9.,distance(vW,cameraPosition));gl_FragColor=vec4(c*g*uK*(.35+.65*nr),1.);}' });
  const doorM = (c, p, z, zt) => new ShaderMaterial({ uniforms: { uC: { value: c }, uP: { value: new Vector3(...p) }, uS: { value: new Vector3(zt ? z[0] : z[2], z[1], zt ? z[2] : z[0]) }, uX: { value: zt ? 1 : 0 } }, fog: false,
    vertexShader: 'varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
    fragmentShader: 'uniform vec3 uC,uP,uS;uniform float uX;varying vec3 vW;void main(){bool zt=uX>.5;vec3 l=vW-uP;float nn=zt?l.z:l.x,a=zt?l.x:l.z;if(abs(nn)<uS.z*.5+.02)discard;vec3 V=normalize(vW-cameraPosition);float va=zt?V.x:V.z,vn=zt?V.z:V.x;float u=a/uS.x+.5,v=l.y/uS.y;float off=va/max(abs(vn),.25)*.45,u2=(a+off)/uS.x+.5;float ew=min(min(u,1.-u)*uS.x,(1.-v)*uS.y);float j=smoothstep(0.,.24,ew);float gl=exp(-pow((u2-.5)*2.2,2.))*(.3+.9*pow(1.-clamp(v,0.,1.),1.3));vec3 c=vec3(.012,.01,.02)+uC*gl*1.15;float ph=fract(v*8.+(u2-.5)*1.8),st=smoothstep(0.,.18,ph)*smoothstep(.6,.4,ph);c*=mix(1.,.4+1.1*st,.65*smoothstep(0.,.25,v)*(1.-v*.35));c*=.22+.78*j;c+=uC*.35*exp(-ew*9.)*(1.-j);gl_FragColor=vec4(c,1.);}' });
  const beamM = (c, k) => new ShaderMaterial({ uniforms: { uC: { value: c }, uK: { value: k }, uT: RT }, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, fog: false,
    vertexShader: 'varying vec3 vN,vP;varying vec2 vU;void main(){vU=uv;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}',
    fragmentShader: 'uniform vec3 uC;uniform float uK,uT;varying vec3 vN,vP;varying vec2 vU;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.5);float s=.85+.15*sin(vU.x*50.+uT*.3)*sin(vU.x*13.-uT*.2);gl_FragColor=vec4(uC*e*s*pow(vU.y,1.3)*uK,1.);}' });
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
    const r = Math.pow(1 - Math.abs(2 * a - 1), 1.7) - 0.35;
    return mix(a - 0.5, r * 0.9, 0.6) * 1.5 + (b - 0.5) * 0.45 + (c - 0.5) * 0.12;
  };
  const hBase = (x, z, fp) => { let d = 1e9; for (const [a, b, r, s] of fp) { const q = Math.hypot(Math.max(Math.abs(x - a) - r, 0), Math.max(Math.abs(z - b) - s, 0)); if (q < d) d = q; } return dune(x, z) * (1 + 0.8 * sm(10, 50, d)) * sm(2.5, 9, d); };
  const terrainG = (X, Z, fp, gc) => {
    const M = 60, S = 1.5, x0 = X[0] - M, z0 = Z[0] - M, nx = Math.ceil((X[1] + M - x0) / S), nz = Math.ceil((Z[1] + M - z0) / S), pos = [], cl = [], H = [];
    for (let j = 0; j <= nz; j++)
      for (let i = 0; i <= nx; i++) {
        const x = x0 + i * S, z = z0 + j * S;
        const h = hBase(x, z, fp) * sm(0, 30, Math.min(i, nx - i, j, nz - j) * S);
        H.push(h); pos.push(x, h, z);
        const t = vn2(x * 0.07, z * 0.07), k = 0.86 + 0.28 * t + 0.35 * Math.max(h, 0) / 3;
        cl.push(gc.r * k, gc.g * k, gc.b * k * (1.05 - 0.1 * t));
      }
    const idx = []; for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, e = c + 1; idx.push(a, c, b, b, c, e); }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('color', new Float32BufferAttribute(cl, 3));
    g.setAttribute('uv', new Float32BufferAttribute(pos.filter((_, i) => i % 3 != 1), 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const uvXZ = (g) => { const p = g.attributes.position, u = g.attributes.uv; for (let i = 0; i < p.count; i++) u.setXY(i, p.getX(i), p.getZ(i)); return g; };

  // ---------- v11 high-sky builders ----------
  const grassT = () => tex('grass', grassFn, 7, 5, 5);
  const PK = { value: 400 };
  const mergeG = (gs) => {
    const P = [], N = [], U = [], I = []; let o = 0;
    for (const g of gs) { P.push(...g.attributes.position.array); N.push(...g.attributes.normal.array); U.push(...g.attributes.uv.array); I.push(...g.index.array.map((i) => i + o)); o += g.attributes.position.count; }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(P, 3)); g.setAttribute('normal', new Float32BufferAttribute(N, 3)); g.setAttribute('uv', new Float32BufferAttribute(U, 2)); g.setIndex(I); return g;
  };
  const tuftG = () => mergeG([0, 1, 2].map((i) => new ConeGeometry(0.045, 0.5, 3, 1).translate(0, 0.25, 0).rotateZ((i - 1) * 0.32).rotateY(i * 2.1)));
  const put = (o, id, fact) => { o.userData = { id, fact }; things.add(o); pickables.push(o); return o; };
  // tapered tube along points (hanging roots)
  const tube = (pts, r0, r1, P, I) => {
    const o = P.length / 3;
    pts.forEach((p, i) => { const r = mix(r0, r1, i / (pts.length - 1)); for (let k = 0; k < 4; k++) { const a = (k / 4) * PI * 2; P.push(p[0] + Math.cos(a) * r, p[1], p[2] + Math.sin(a) * r); } });
    for (let i = 0; i < pts.length - 1; i++) for (let k = 0; k < 4; k++) { const a = o + i * 4 + k, b = o + i * 4 + ((k + 1) % 4); I.push(a, a + 4, b, b, a + 4, b + 4); }
  };
  // floating island: flat grass top (blade normals), rocky tapered underside, hanging roots, grass tufts, slow turn
  const island = (id, fact, p, z, c, solids) => {
    const R = z[0] / 2, Rz = z[2] / 2, top = p[1] + z[1], D = Math.min(Math.max(R * 0.7, 5), 16), K = 14, NS = 72, r = rng(Math.round(p[0] * 7 + p[2] * 13 + 5)), g0 = new Color(c), grp = new Group();
    const pos = [], col2 = [], uv = [], ix = [], rk = [new Color('#9a8696'), new Color('#76626a'), new Color('#4e4450')];
    const ringAt = (k, i) => {
      const s = k / K, th = (i / NS) * PI * 2, cx = Math.cos(th), sz = Math.sin(th), nz = vn2(cx * 2.5 + s * 4 + 7, sz * 2.5 + s * 3), n3 = vn2(cx * 6 + 30, sz * 6 + s * 9);
      const pr = (k == 0 ? 1 : k == 1 ? 0.985 : Math.pow(1 - s, 0.72) * 0.97) * (1 + (nz - 0.5) * 0.45 * s + (n3 - 0.5) * 0.1 * s), y = k == 0 ? 0 : -(0.35 + D * Math.pow(s, 1.15)) + (n3 - 0.5) * D * 0.06 * s;
      return [cx * R * pr, y, sz * Rz * pr, s, nz];
    };
    for (let k = 0; k <= K; k++) for (let i = 0; i < NS; i++) {
      const [x, y, zz, s, nz] = ringAt(k, i), band = 0.88 + 0.16 * Math.sin(y * 2.3 + nz * 5), rc = rk[0].clone().lerp(rk[1], Math.min(1, s * 1.6)).lerp(rk[2], Math.max(0, s - 0.55) * 1.8).multiplyScalar(band).lerp(g0.clone().multiplyScalar(0.8), 1 - sm(0.02, 0.11, s));
      pos.push(x, y, zz); col2.push(rc.r, rc.g, rc.b); uv.push(x / 5 + y / 6, zz / 5 + y / 4);
    }
    for (let k = 0; k < K; k++) for (let i = 0; i < NS; i++) { const a = k * NS + i, b = k * NS + ((i + 1) % NS), c2 = a + NS, d = b + NS; ix.push(a, b, c2, b, d, c2); }
    const rg2 = new BufferGeometry(); rg2.setAttribute('position', new Float32BufferAttribute(pos, 3)); rg2.setAttribute('color', new Float32BufferAttribute(col2, 3)); rg2.setAttribute('uv', new Float32BufferAttribute(uv, 2)); rg2.setIndex(ix); rg2.computeVertexNormals();
    const rock = new Mesh(rg2, patch(new MeshStandardMaterial({ vertexColors: true, ...stoneT(), roughness: 1, normalScale: new Vector2(1.4, 1.4), side: DoubleSide }))); rock.castShadow = true; rock.receiveShadow = true; grp.add(rock);
    const tg = new CircleGeometry(1, 72).rotateX(-PI / 2).scale(R, 1, Rz), tp = tg.attributes.position, tu = tg.attributes.uv; for (let i = 0; i < tp.count; i++) tu.setXY(i, tp.getX(i) / 6, tp.getZ(i) / 6);
    const top2 = new Mesh(tg, patch(new MeshStandardMaterial({ color: col(c, 1.25), ...grassT(), roughness: 0.9, normalScale: new Vector2(1.2, 1.2) }), { wave: true })); top2.receiveShadow = true; grp.add(top2);
    // hanging roots
    const RP = [], RI = [];
    for (let j = 0; j < 70; j++) {
      const k = 2 + Math.floor(r() * 8), i = Math.floor(r() * NS), q = ringAt(k, i), L = (1.2 + r() * 3.6) * (D / 14), dx = q[0] / R * (0.3 + r()), dz = q[2] / Rz * (0.3 + r()), ph = r() * 6, pts = [[q[0], q[1], q[2]]];
      for (let m = 1; m <= 4; m++) pts.push([q[0] + dx * m * 0.18 + Math.sin(ph + m) * 0.12, q[1] - (L * m) / 4, q[2] + dz * m * 0.18 + Math.cos(ph + m * 1.3) * 0.12]);
      tube(pts, 0.1, 0.02, RP, RI);
    }
    const rgm = new BufferGeometry(); rgm.setAttribute('position', new Float32BufferAttribute(RP, 3)); rgm.setIndex(RI); rgm.computeVertexNormals();
    grp.add(new Mesh(rgm, patch(new MeshStandardMaterial({ color: '#8a6a4a', roughness: 1, side: DoubleSide }))));
    // grass tufts, kept clear of anything standing on the island
    const TN = Math.min(900, Math.round(R * R * 0.9)), im = new InstancedMesh(tuftG(), patch(new MeshStandardMaterial({ color: col(c, 1.15), roughness: 0.9, side: DoubleSide }), { sway: [0.14, 0] }), TN), mt = new Matrix4(), cc2 = new Color(); let n = 0;
    for (let j = 0; j < TN * 3 && n < TN; j++) {
      const a = r() * PI * 2, rr = Math.sqrt(r()) * 0.97, x = Math.cos(a) * R * rr, zz = Math.sin(a) * Rz * rr, wx = p[0] + x, wz = p[2] + zz;
      const sc = 0.6 + r() * 0.9; if (r() < 0.02) continue;
      if (solids.some(([sp, ss]) => Math.abs(wx - sp[0]) < ss[0] / 2 + 0.2 && Math.abs(wz - sp[2]) < ss[2] / 2 + 0.2)) continue;
      mt.makeRotationY(r() * 6).setPosition(x, 0, zz); mt.scale(new Vector3(sc, sc * (0.7 + r() * 0.8), sc)); im.setMatrixAt(n, mt); im.setColorAt(n, cc2.setRGB(0.75 + r() * 0.4, 0.8 + r() * 0.35, 0.6 + r() * 0.3)); n++;
    }
    im.count = n; im.receiveShadow = true; grp.add(im);
    grp.position.set(p[0], top, p[2]); grp.userData.isl = 1; put(grp, id, fact); grp.userData.isl = 1; grp.traverse((o) => { if (o !== grp) o.userData = { id, fact }; pickables.push(o); });
    return grp;
  };
  const treeG = (() => { const g = new SphereGeometry(0.5, 18, 12), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const k = 1 + (ihash(Math.round(p.getX(i) * 40), Math.round(p.getY(i) * 40) + 7 * Math.round(p.getZ(i) * 40), 4) - 0.5) * 0.2; p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k); } g.computeVertexNormals(); return g; })();
  const tree = (id, fact, p, z, c) => {
    const grp = new Group(), h = z[1], cm = patch(new MeshStandardMaterial({ color: col(c, 1.55), roughness: 0.85 }), { sway: [0.05, -0.5] }), r = Math.min(z[0], z[2]) * 0.06;
    const can = new Mesh(treeG, cm); can.scale.set(z[0], h * 0.72, z[2]); can.position.set(p[0], p[1] + h * 0.64, p[2]); can.castShadow = true; can.receiveShadow = true;
    const tr = new Mesh(new CylinderGeometry(0.7, 1, 1, 7).translate(0, 0.5, 0), patch(new MeshStandardMaterial({ color: '#6a4a34', roughness: 1 }))); tr.scale.set(r * 2, h * 0.5, r * 2); tr.position.set(p[0], p[1], p[2]); tr.castShadow = true;
    grp.add(can, tr); things.add(grp); for (const m of [can, tr]) { m.userData = { id, fact }; pickables.push(m); }
  };
  const BELLS = [];
  const bell = (id, fact, p, z, c) => {
    const g = new Group(), pf = [[0.5, 0], [0.48, 0.06], [0.42, 0.16], [0.34, 0.32], [0.27, 0.5], [0.22, 0.66], [0.17, 0.82], [0.11, 0.93], [0.05, 0.98], [0.001, 1]].map(([x, y]) => new Vector2(x, y));
    const m = patch(new MeshPhysicalMaterial({ color: col(c, 1.15), metalness: 0.85, roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.2, sheen: 1, sheenColor: new Color('#ffd890'), sheenRoughness: 0.4, envMapIntensity: 1.8, emissive: col(c, 0.5), emissiveIntensity: 0.12, side: DoubleSide }), { sheen: true });
    const b = new Mesh(new LatheGeometry(pf, 28), m); b.scale.set(z[0], z[1], z[2]); b.position.y = -z[1]; b.castShadow = true;
    const hg = new Mesh(new CylinderGeometry(0.06 * z[0], 0.08 * z[0], 0.14 * z[1], 8).translate(0, 0.07 * z[1], 0), m); g.add(b, hg);
    g.position.set(p[0], p[1] + z[1], p[2]); put(g, id, fact); g.traverse((o) => { if (o !== g) { o.userData = { id, fact }; pickables.push(o); } }); BELLS.push([g, m, p[0]]);
  };
  const rope = (id, fact, p, z) => {
    const L = z[1], r = Math.max(z[0], z[2]) * 0.6, m = patch(new MeshStandardMaterial({ color: '#c8a870', roughness: 0.95 }), { sway: [0.16 / Math.max(L, 0.3), 0] }), me = new Mesh(new CylinderGeometry(r, r * 0.7, L, 6, 8).translate(0, L / 2, 0), m);
    me.rotation.x = PI; me.position.set(p[0], p[1] + L, p[2]); put(me, id, fact);
  };
  const ribbon = (id, fact, p, z, c, SPKD, SPKT) => {
    const a = [p[0], p[1], p[2] - z[2] / 2], b = [p[0], p[1] + z[1], p[2] + z[2] / 2], L = Math.hypot(b[1] - a[1], b[2] - a[2]), w = Math.max(z[0], SPKT ? 1.6 : 1) * 0.95, ny = (b[2] - a[2]) / L, nz = -(b[1] - a[1]) / L, e = 0.04;
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute([a[0] - w, a[1] + ny * e, a[2] + nz * e, a[0] + w, a[1] + ny * e, a[2] + nz * e, b[0] + w, b[1] + ny * e, b[2] + nz * e, b[0] - w, b[1] + ny * e, b[2] + nz * e], 3));
    g.setAttribute('uv', new Float32BufferAttribute([-1, 0, 1, 0, 1, 1, -1, 1], 2)); g.setIndex([0, 1, 2, 0, 2, 3]);
    const m = new ShaderMaterial({ uniforms: { uT: RT, uL: { value: L }, uC: { value: new Color(c) }, uN: { value: new Vector3(0, ny, nz) } }, transparent: true, depthWrite: false, fog: false, side: DoubleSide, vertexShader: RIB_VS, fragmentShader: RIB_FS });
    const me = put(new Mesh(g, m), id, fact); me.renderOrder = 2; NODEPTH.push(me);
    for (let i = 0; i < 26; i++) SPKD.push([a, b, (i + 0.5) / 26 + id.length * 0.013]);
    if (SPKT) {
      // v12: soft gold haze hugging the ribbon, and sparkles shed from it that fall away below
      const hg = new BufferGeometry(); hg.setAttribute('position', new Float32BufferAttribute([a[0] - w * 3.4, a[1] + ny * 0.1, a[2] + nz * 0.1, a[0] + w * 3.4, a[1] + ny * 0.1, a[2] + nz * 0.1, b[0] + w * 3.4, b[1] + ny * 0.1, b[2] + nz * 0.1, b[0] - w * 3.4, b[1] + ny * 0.1, b[2] + nz * 0.1], 3));
      hg.setAttribute('uv', new Float32BufferAttribute([-1, 0, 1, 0, 1, 1, -1, 1], 2)); hg.setIndex([0, 1, 2, 0, 2, 3]);
      const hm = new Mesh(hg, new ShaderMaterial({ uniforms: { uT: RT, uL: { value: L }, uC: { value: new Color(c) }, uN: { value: new Vector3(0, ny, nz) } }, transparent: true, depthWrite: false, blending: AdditiveBlending, fog: false, side: DoubleSide, vertexShader: RIB_VS,
        fragmentShader: 'uniform float uT,uL;uniform vec3 uC,uN;varying vec2 vU;varying vec3 vW;void main(){float a=abs(vU.x),h=exp(-a*a*5.5),f=.78+.22*sin(vU.y*uL*.55-uT*1.3)+.08*sin(vU.y*uL*1.9-uT*2.4);float e=1.-smoothstep(.75,1.,a);gl_FragColor=vec4(vec3(1.,.8,.46)*uC*h*f*e*.4*smoothstep(3.,12.,distance(vW,cameraPosition))*smoothstep(.1,.5,abs(dot(normalize(vW-cameraPosition),uN))),1.);}' }));
      hm.renderOrder = 1; hm.frustumCulled = false; things.add(hm); NODEPTH.push(hm);
      for (let i = 0; i < 70; i++) SPKT.push([a, b, (i + 0.5) / 70 + id.length * 0.007]);
    }
  };

  // ---------- sky / lights / post ----------
  const skyU = { uAlt: { value: 0 }, uHor: { value: new Color() }, uZen: { value: new Color('#ad98e2') }, uSun: { value: new Vector3(...nrm(SD)) }, uMoon: { value: new Vector3(...nrm(MD)) }, uD: { value: 0 }, uT: { value: 2 } };
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
  const meter = new MeterPass(), EXP = { k: 1 }, lim = new ShaderPass({ uniforms: { tDiffuse: { value: null } }, vertexShader: GOD.vertexShader, fragmentShader: 'uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 o=texture2D(tDiffuse,vUv);float l=dot(o.rgb,vec3(.3,.59,.11)),lo=2.5,hi=5.;float m=l<=lo?l:lo+(hi-lo)*(1.-exp(-(l-lo)/(hi-lo)));o.rgb*=m/max(l,1e-4);gl_FragColor=o;}' });
  composer.addPass(gtao); composer.addPass(bokeh); composer.addPass(god); composer.addPass(meter); composer.addPass(lim); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(grade);
  // sky, particles, glass and decals don't take part in the AO / depth-of-field depth passes
  let NODEPTH = [];
  for (const p of [gtao, bokeh]) { const r = p.render.bind(p); p.render = (...a) => { const v = NODEPTH.map((o) => o.visible); NODEPTH.forEach((o) => (o.visible = false)); try { r(...a); } finally { NODEPTH.forEach((o, i) => (o.visible = v[i])); } }; }

  // ---------- state ----------
  let OVD = null, OVU = { uSz: { value: 7 } }, w, view = 'follow', cam = { position: [0, 3.4, 6.5], target: [0, 0.8, -9] }, B = { c: [0, 0, 0], r: 20 }, raf = 0, dawn = 0, LTS = [], ceil = [], pick = [], partM, avatarG, ring, shadowDirty = true, ptsU, bounds = { at: [0, 0, 0] }, tNow = 2;
  const ray = new Raycaster(), pickables = [];

  const mkAvatar = () => {
    const g = new Group(), cloth = patch(new MeshStandardMaterial({ color: '#8a6a40', roughness: 0.9, metalness: 0 }), { cloth: 1.6 }), skin = patch(new MeshStandardMaterial({ color: '#c8a078', roughness: 0.7 })), dark = patch(new MeshStandardMaterial({ color: '#3a2a1c', roughness: 0.95 }), { cloth: 0.5 });
    const prof = [[0.01, 0], [0.32, 0.02], [0.34, 0.15], [0.3, 0.55], [0.24, 0.95], [0.2, 1.25], [0.12, 1.4], [0.01, 1.42]].map(([x, y]) => new Vector2(x, y));
    const body = new Mesh(new LatheGeometry(prof, 24), cloth), head = new Mesh(new SphereGeometry(0.15, 20, 14), skin), hood = new Mesh(new SphereGeometry(0.19, 20, 14, 0, PI * 2, 0, PI * 0.62), dark), pack = new Mesh(new SphereGeometry(0.22, 16, 12).scale(1, 1.2, 0.7), dark);
    head.position.set(0, 1.55, 0.02); hood.position.set(0, 1.58, -0.03); hood.rotation.x = -0.25; pack.position.set(0, 0.95, 0.27);
    const sc = new Mesh(new RingGeometry(0.12, 0.24, 20).rotateX(-PI / 2), cloth); sc.position.y = 1.36; sc.scale.set(1.2, 1.2, 1.2);
    for (const m of [body, head, hood, pack, sc]) { m.castShadow = true; m.receiveShadow = true; g.add(m); }
    return g;
  };

  const clearGroup = (g) => { while (g.children.length) { const c = g.children.pop(); c.geometry?.dispose?.(); } };

  function setWorldSync(W) {
    w = W; clearGroup(things); NODEPTH = [NODEPTH[0]].filter(Boolean); pickables.length = 0; ceil = []; MC = {}; FLAGMATS = []; LANTMATS = []; WATER = []; SPR = [];
    NODEPTH = [sky, ...[]];
    PUF = null; PUF2 = null; DESC = []; DESCON = false; TILT = 0; BELLS.length = 0; WALLS = []; CLOUDS = []; REFL.forEach((r) => r.dispose()); REFL = []; FL = []; LN = []; FLM = []; FLK = []; FLARE = []; MIR = null; mirT = null;
    const sk =new Color(w.sky || '#2a2a4a'), lum = 0.2126 * sk.r + 0.7152 * sk.g + 0.0722 * sk.b;
    const [sr, sg, sb] = (w.sky || '#2a2a4a').slice(1).match(/../g).map((h) => parseInt(h, 16) / 255), l2 = 0.2126 * sr + 0.7152 * sg + 0.0722 * sb;
    dawn = sm(0.35, 0.6, l2); void lum; night = dawn < 0.5;
    skyU.uHor.value.copy(sk); skyU.uD.value = dawn;
    scene.fog.color.copy(sk).multiplyScalar(mix(0.3, 1, dawn)); scene.fog.color.lerp(new Color('#e8d4c0'), dawn * 0.12);
    const gc = new Color(w.ground || '#12121c').multiplyScalar(mix(1.5, 1.8, dawn)); gc.lerp(new Color('#a08a80'), dawn * 0.35);
    const th = Object.entries(w.things), at = w.avatar.at, X = [at[0], at[0]], Z = [at[2], at[2]], fp = [[at[0], at[2], 0.5, 0.5]], cnt = {}, ky = (t) => t[0] + t[2] + t[3];
    th.forEach(([, t]) => !t[5] && (cnt[ky(t)] = (cnt[ky(t)] || 0) + 1));
    const gdom = (h) => { const q = new Color(h); return q.g > q.r * 1.05 && q.g > q.b * 1.05; }, SPKD = [], SPKT = [], PB = [], FLW = [], LANDB = [], RIVB = [], GF = (GFL = []);
    const ISL = th.map((e) => e[1]).filter((t) => t[0] == 'ball' && !t[5] && t[2][0] >= 12 && t[2][1] <= t[2][0] * 0.3 && gdom(t[3])).map((t) => ({ t, top: t[1][1] + t[2][1] }));
    const onIsl = (t) => ISL.some((I) => ((t[1][0] - I.t[1][0]) / (I.t[2][0] / 2)) ** 2 + ((t[1][2] - I.t[1][2]) / (I.t[2][2] / 2)) ** 2 < 1.05 && Math.abs(t[1][1] - I.top) < 3);
    // v12: a Wanderer on a floating island counts as high up too, so the camera never drops back to dunes
    const alt = dawn > 0.5 && (at[1] > 8 || ISL.length > 0); ALT = alt; skyU.uAlt.value = alt ? 1 : 0; skyU.uZen.value.set(alt ? '#cdbfe6' : '#ad98e2'); skyU.uSun.value.set(...nrm(alt ? [0.24, 0.2, -0.95] : SD));
    CS.value = alt ? 1 : 0; WG.value = alt ? 1 : 0; HZ.value = alt ? 1 : 0; let yHi = at[1] + 2;
    const gl2 = th.map((e) => e[1]).filter((t) => t[5] == 2), ctr = (t) => t && [t[1][0], t[1][1] + t[2][1] / 2, t[1][2]], d2 = (t) => Math.hypot(t[1][0] - at[0], t[1][2] - at[2]),
      big = (c) => gl2.filter(c).sort((a, b) => b[2][0] * b[2][1] * b[2][2] - a[2][0] * a[2][1] * a[2][2])[0], rg = (h) => new Color(h);
    const lumOf = (h) => { const c = rg(h); return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b; }, BEA = [], DOOR = [];
    // lights: every glow-1 thing (nearest first), then the orb and the warm doorway glow
    const ls = th.map((e) => e[1]).filter((t) => t[5] == 1).sort((a, b) => d2(a) - d2(b)).slice(0, 4).map((t) => ({ p: ctr(t), c: rg(t[3]), i: 26 }));
    for (const [t, c, i] of [[big((t) => t[0] == 'ball' && rg(t[3]).b > rg(t[3]).r), new Color(0.5, 0.85, 1.4), 14], [big((t) => t[0] == 'ball' && rg(t[3]).r - rg(t[3]).b > 0.3), new Color(1.4, 1, 0.5), 18]]) t && ls.length < 4 && ls.push({ p: ctr(t), c, i });
    LTS.forEach((l) => { scene.remove(l.l); l.l.shadow.map?.dispose(); }); LTS = [];
    for (const L of ls) {
      const l = new PointLight(L.c, L.i, 46, 2); l.position.set(...L.p); l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.003; l.shadow.normalBias = 0.04; l.shadow.radius = 2; l.shadow.camera.near = 0.15; l.shadow.camera.far = 46; l.shadow.autoUpdate = false;
      scene.add(l); LTS.push({ l, b: L.i });
    }
    // night: the largest dark glow-2 flat slab (disc or thin box, both sides > 8 m) becomes the mirror floor
    if (night) {
      mirT = th.filter(([, t]) => t[2][0] > 8 && t[2][2] > 8 && ((t[0] == 'disc') || (t[0] == 'box' && t[2][1] < 0.15)) && (t[5] == 2 ? lumOf(t[3]) < 0.35 : !t[5] && lumOf(t[3]) < 0.02)).sort((a, b) => b[1][2][0] * b[1][2][2] - a[1][2][0] * a[1][2][2])[0] || null;
      if (mirT) { const [, t] = mirT; MIR = { p: t[1], z: t[2], y: t[1][1] + 0.03 }; fp.push([t[1][0], t[1][2], t[2][0] / 2, t[2][2] / 2]); }
    }
    const groups = {}, P = { pos: [], s: [], k: [], z: [], c: [] }, pr = rng(99), addP = (x, y, z, k, size, c) => { P.pos.push(x, y, z); P.s.push(pr()); P.k.push(k); P.z.push(size); P.c.push(c.r, c.g, c.b); };
    const add = (m, g, t, id, fact, o = {}) => { const me = new Mesh(g, m); me.castShadow = o.cast ?? false; me.receiveShadow = o.rec ?? true; me.userData = { id, fact }; things.add(me); pickables.push(me); return me; };
    for (const [id, t] of th) {
      let [s, p, z, c, fact, g] = t;
      if (alt && !g && s == 'ball' && !ISL.some((q) => q.t === t) && (p[1] < 0 || Math.max(...z) > 12)) { PB.push([id, p, z, c]); continue; }
      const dA = Math.hypot(p[0] - at[0], p[2] - at[2]), farT = alt && dA > 45;
      if (alt && dA > 75 && p[1] < 8) continue;
      if (alt && !g && s == 'ball' && Math.max(...z) <= 1.2 && onIsl(t) && rg(c).r > 0.8 && rg(c).b > 0.4) { FLW.push([id, fact, p, z, rg(c)]); continue; }
      const r = Math.max(z[0], z[2]) / 2, mx0 = Math.max(...z);
      if (!farT && (mx0 >= 3 || p[1] >= 8 || !alt)) { yHi = Math.max(yHi, p[1] + z[1]); X[0] = Math.min(X[0], p[0] - r); X[1] = Math.max(X[1], p[0] + r); Z[0] = Math.min(Z[0], p[2] - r); Z[1] = Math.max(Z[1], p[2] + r); }
      p[1] < 1 && p[1] >= 0 && s != 'disc' && fp.push([p[0], p[2], z[0] / 2, z[2] / 2]);
      const cc = rg(c), mx = Math.max(...z);
      // v13: the far green land is a landscape, not boxes (its river is the thin glow-2 box)
      if (alt && fact == 'far_green_land' && s == 'box' && p[1] < -50 && g != 1) { (g ? RIVB : LANDB).push(t); continue; }
      if (alt && p[1] < 1 && z[0] > 8 && z[2] > 8 && (s == 'disc' || (s == 'box' && z[1] < 0.3))) continue;
      if (!g && s == 'ball') {
        const I = ISL.find((q) => q.t === t);
        if (I) { island(id, fact, p, z, c, th.map((e) => e[1]).filter((q) => q[0] == 'box' && !q[5] && Math.abs(q[1][1] - I.top) < 1.2)); continue; }
        if (mx <= 6 && gdom(c) && onIsl(t)) { tree(id, fact, p, z, c); continue; }
      }
      if (/bell/.test(fact || '') && !g) {
        if (s == 'ball' && z[1] <= 4) { bell(id, fact, p, z, c); continue; }
        if (s == 'box' && Math.max(z[0], z[2]) <= 0.08 && z[1] <= 2) { rope(id, fact, p, z); continue; }
      }
      if (g == 2 && s == 'ramp') { ribbon(id, fact, p, z, c, SPKD, alt && SPKT); continue; }
      if (mirT && t === mirT[1]) {
        const rf = new Reflector(new CircleGeometry(0.5, 72), { color: cc, textureWidth: 512, textureHeight: 288, clipBias: 0.003, shader: FLOOR, multisample: 0 });
        rf.rotation.x = -PI / 2; rf.scale.set(z[0], z[2], 1); rf.position.set(p[0], MIR.y, p[2]); rf.renderOrder = -5; rf.material.transparent = true; rf.material.uniforms.uHor.value = skyU.uHor.value;
        rf.userData = { id, fact }; things.add(rf); pickables.push(rf); NODEPTH.push(rf); REFL.push(rf); continue;
      }
      if (g) {
        let m, me;
        if (night && g == 2 && s == 'ball' && z[1] >= z[0] * 1.3 && mx < 0.6 && cc.r > 0.6 && cc.b < cc.r * 0.4) { FL.push([id, fact, p, z, cc]); continue; }
        const thinH = s == 'box' && z[1] < 0.15 && z[0] > 0.4 && z[2] > 0.4, pane = g == 2 && s == 'box' && Math.min(...z) <= 0.15 && !thinH && [...z].sort((a, b) => a - b)[1] >= 0.4, door = pane && z[1] >= 1.2 && Math.max(z[0], z[2]) >= 0.6 && (lumOf(c) < 0.12 || (cc.r >= cc.b * 1.05 && cc.r > 0.5));
        if (g == 2 && s == 'ball' && mx >= 2 && p[1] + z[1] / 2 > 20 && Math.min(cc.r, cc.g, cc.b) > 0.75) BEA.push([p, z, cc]);
        if (alt && g == 2 && s == 'ball' && mx >= 1 && mx <= 4) {
          // v12: a glow orb is a soft halo with a bright core, not a flat white ball
          const sp = new Sprite(new SpriteMaterial({ map: glowT, color: cc.clone().multiplyScalar(1.25), blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: 0.8 }));
          sp.position.set(p[0], p[1] + z[1] / 2, p[2]); sp.scale.set(mx * 2.8, mx * 2.8, 1); sp.renderOrder = 3; things.add(sp); NODEPTH.push(sp); GF.push([(v) => (sp.material.opacity = v), 0.8, sp.position.clone(), mx]); continue;
        }
        if (g == 2 && mx > 4 && s == 'ball') {
          if (Math.abs(z[0] - z[1]) < z[0] * 0.2 && z[2] < 4) {
            const dk = new Mesh(new CircleGeometry(z[0] / 2, 64).translate(p[0], p[1] + z[1] / 2, p[2]), new MeshBasicMaterial({ color: cc.clone().multiplyScalar(alt ? 1.05 : 1.7), fog: false, transparent: alt, opacity: 0.55 })); things.add(dk); NODEPTH.push(dk);
            alt && GF.push([(v) => (dk.material.opacity = v), 0.55, new Vector3(p[0], p[1] + z[1] / 2, p[2]), z[0]]); continue;
          }
          const sp = new Sprite(new SpriteMaterial({ map: glowT, color: cc, blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: alt ? 0.3 : 0.5 }));
          sp.position.set(p[0], p[1] + z[1] / 2, p[2]); sp.scale.set(z[0] * 2.4, z[1] * 2.8, 1); things.add(sp); NODEPTH.push(sp); SPR.push([sp, sp.material.opacity, z[0] * 2.4]);
          continue;
        }
        if (fact == 'sun_road') { me = add(roadM(c, p[0]), geo(s, p, z), t, id, fact, { rec: false }); NODEPTH.push(me); }
        else if (s == 'disc' && (mx > 3 || alt)) {
          const pk = mx > 15 ? 0.2 : mx > 6 ? 0.3 : 0.45, pm = poolM(c, pk); me = add(pm, geo(s, p, z), t, id, fact, { rec: false }); NODEPTH.push(me);
          alt && GF.push([(v) => (pm.uniforms.uK.value = v), pk * 0.85, new Vector3(p[0], p[1], p[2]), mx]);
        }
        else if (door) { const zt = z[2] <= z[0], tc = lumOf(c) < 0.12 ? new Color(1, 0.6, 0.26) : cc.clone(); me = add(doorM(tc, p, z, zt), geo('box', p, [z[0] + (zt ? 0 : 0.06), z[1], z[2] + (zt ? 0.06 : 0)]), t, id, fact, { rec: false }); NODEPTH.push(me); DOOR.push([p, z, zt, tc]); }
        else if (s == 'disc' || thinH) { m = liquidM(c); me = add(m, geo(s, p, z), t, id, fact, { rec: true }); if (s == 'disc') me.geometry.attributes.uv; NODEPTH.push(me); }
        else if (pane) { me = add(glassM(c), geo(s, p, z), t, id, fact, { rec: false }); NODEPTH.push(me); }
        else {
          let zz = z; if (s == 'box' && z[1] < 0.15) zz = [z[0] < z[2] ? z[0] * 0.5 : z[0], z[1] * 0.6, z[2] <= z[0] ? z[2] * 0.5 : z[2]];
          me = add(glowM(c, g), geo(s, p, zz), t, id, fact, { rec: false });
          if (g == 1 && p[1] >= 1) me.userData.sway = th.length + P.s.length;
        }
        const q = [p[0], p[1] + z[1] / 2, p[2]];
        if (g == 1) LN.push([id, fact, p, z, cc, q]);
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
      if (s == 'box' && mx >= 5 && z[1] >= 5 && Math.min(z[0], z[2]) <= 3 && cc.r + cc.g + cc.b < 0.12) { add(new MeshBasicMaterial({ color: cc, fog: false }), geo(s, p, z), t, id, fact, { rec: false }); continue; }
      const wall = s == 'box' && mx >= 2.9 && z[1] >= 0.12, isCeil = wall && p[1] >= 3 && z[1] <= 1.5 && z[0] > 5 && z[2] > 5, slab = s == 'box' && z[1] < 0.12;
      if (!wall && (s == 'box' || s == 'cone') && cnt[ky(t)] >= 3) {
        const k = ky([s, 0, z, c]), G = groups[k] || (groups[k] = { g: geo(s, [0, 0, 0], z, true), m: stoneM(c), o: [], ids: [] });
        G.o.push(p); G.ids.push(id); continue;
      }
      const m = wall ? [brickM(c), brickM(c), p[1] + z[1] < 3.5 ? flagM(c) : brickM(c), brickM(c), brickM(c), brickM(c)] : slab ? flagM(c) : stoneM(c);
      const me = add(m, geo(s, p, z), t, id, fact, { cast: true });
      if (isCeil) ceil.push(me);
      if (s == 'box' && (wall || z[1] >= 3)) WALLS.push({ me, m, b: [p[0] - z[0] / 2, p[0] + z[0] / 2, p[1], p[1] + z[1], p[2] - z[2] / 2, p[2] + z[2] / 2], c, g: 0 });
    }
    for (const G of Object.values(groups)) {
      const im = new InstancedMesh(G.g, G.m, G.o.length), mt = new Matrix4(); G.o.forEach((p, i) => im.setMatrixAt(i, mt.makeTranslation(p[0], p[1], p[2])));
      im.castShadow = true; im.receiveShadow = true; im.userData = { ids: G.ids, fact: null }; im.computeBoundingSphere(); things.add(im); pickables.push(im);
    }
    // the Wanderer stands on whatever solid top lies under them
    let fy = alt && at[1] < -5 ? at[1] : 0; // v13: a Wanderer falling through open sky is drawn where they are
    for (const [, [s, p, z, , , g]] of th) if (!g && s == 'box' && (z[1] >= 0.12 || alt) && Math.abs(at[0] - p[0]) <= z[0] / 2 && Math.abs(at[2] - p[2]) <= z[2] / 2 && p[1] + z[1] <= at[1] + 0.6) fy = Math.max(fy, p[1] + z[1]);
    for (const I of ISL) if (alt && ((at[0] - I.t[1][0]) / (I.t[2][0] / 2)) ** 2 + ((at[2] - I.t[1][2]) / (I.t[2][2] / 2)) ** 2 < 1 && I.top <= at[1] + 0.6) fy = Math.max(fy, I.top);
    const inMir = (x, z) => MIR && ((x - MIR.p[0]) / (MIR.z[0] / 2)) ** 2 + ((z - MIR.p[2]) / (MIR.z[2] / 2)) ** 2 < 0.9, gY = (x, z) => (inMir(x, z) ? MIR.y : hBase(x, z, fp));
    if (inMir(at[0], at[2])) fy = Math.max(fy, MIR.y);
    OVD = null;
    {
      for (const [p, z, cc] of BEA) {
        const y1 = p[1] + z[1] / 2, y0 = gY(p[0], p[2]), h = y1 - y0, bc = cc.clone().multiplyScalar(0.8);
        const bm = beamM(bc, alt ? 0.12 : 0.28), cn = new Mesh(new CylinderGeometry(Math.max(0.5, z[0] * 0.3), 4.4, h, 40, 1, true).translate(0, -h / 2, 0), bm); cn.position.set(p[0], y1, p[2]); cn.frustumCulled = false; cn.renderOrder = 2; things.add(cn); NODEPTH.push(cn);
        const hs = new Sprite(new SpriteMaterial({ map: glowT, color: bc, blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: alt ? 0.22 : 0.4 })); hs.position.set(p[0], y1, p[2]); hs.scale.set(z[0] * 5, z[0] * 5, 1); hs.renderOrder = 3; things.add(hs); NODEPTH.push(hs);
        if (alt) { const q = new Vector3(p[0], y1, p[2]); GF.push([(v) => (bm.uniforms.uK.value = v), 0.12, q, 10], [(v) => (hs.material.opacity = v), 0.22, q, 10]); }
        if (REFL[0]) REFL[0].material.uniforms.uBc.value.set(p[0], p[2], 0, 1);
      }
      for (const [p, z, , tc] of DOOR) { const hw = Math.max(z[0], z[2]), pl = new Mesh(new CircleGeometry(0.5, 40).rotateX(-PI / 2).scale(hw * 2.2, 1, hw * 2.2), poolM(tc, 0.3)); pl.position.set(p[0], gY(p[0], p[2]) + 0.03, p[2]); pl.renderOrder = 2; things.add(pl); NODEPTH.push(pl); }
      if (REFL[0]) {
        const u = REFL[0].material.uniforms, fa = (w.avatar.facing * PI) / 180, fx = Math.sin(fa), fz = -Math.cos(fa);
        u.uRip.value = inMir(at[0], at[2]) ? 1 : 0;
        u.uFt.value = Array.from({ length: 7 }, (_, i) => { const sd = i % 2 ? 1 : -1; return new Vector2(at[0] - fx * i * 0.85 - fz * sd * 0.2, at[2] - fz * i * 0.85 + fx * sd * 0.2); });
      }
    }
    if (!avatarG) { avatarG = mkAvatar(); scene.add(avatarG); ring = new Mesh(new RingGeometry(1.1, 1.6, 40).rotateX(-PI / 2), new MeshBasicMaterial({ color: '#ffd890', transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false, fog: false })); scene.add(ring); NODEPTH.push(ring); }
    avatarG.position.set(at[0], fy, at[2]); avatarG.rotation.y = -(w.avatar.facing * PI) / 180; ring.position.set(at[0], fy + 0.06, at[2]); bounds = { at, fy };
    if (night) {
      const add2 = (o, ro = 1) => { o.renderOrder = ro; o.frustumCulled = false; things.add(o); NODEPTH.push(o); return o; }, am = new Color(1, 0.62, 0.25), ice = new Color(0.6, 0.78, 1);
      const pool = (x, z, R, c, op, k, blob) => {
        const m = new Mesh(new PlaneGeometry(1, 1).rotateX(-PI / 2), new MeshBasicMaterial({ map: glowT, color: blob ? '#000' : c, transparent: true, opacity: op, blending: blob ? undefined : AdditiveBlending, depthWrite: false, fog: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
        m.scale.set(R * 2, 1, R * 2); m.position.set(x, gY(x, z) + (blob ? 0.008 : 0.016), z); if (!blob) FLK.push([m.material, op, k, 0, m.position]); return add2(m, blob ? 1 : 2);
      };
      const halo = (q, sc, c, op, k) => { const sp = new Sprite(new SpriteMaterial({ map: glowT, color: c, blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: op })); sp.position.set(...q); sp.scale.set(sc, sc, 1); FLK.push([sp.material, op, k, 0, sp.position]); return add2(sp, 3); };
      const flame = (id, fact, q, H, c, K, k) => { // eslint-disable-line
        const m = new Mesh(new PlaneGeometry(1, 1).translate(0, 0.5, 0), new ShaderMaterial({ uniforms: { uT: RT, uS: { value: k * 0.37 }, uK: { value: K }, uC: { value: c } }, vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}', fragmentShader: FLAME_FS, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, fog: false }));
        m.scale.set(H * 0.9, H, 1); m.position.set(q[0], q[1], q[2]); m.userData = { id, fact }; m.renderOrder = 4; things.add(m); pickables.push(m); NODEPTH.push(m); FLM.push({ m, k, a: null }); return m;
      };
      if (inMir(at[0], at[2])) pool(at[0], at[2], 0.9, 0, 0.6, 0, true);
      // contact shadows for things standing on the glass
      th.forEach(([, t]) => { if (MIR && !t[5] && Math.max(...t[2]) < 3 && t[1][1] < 0.4 && inMir(t[1][0], t[1][2])) pool(t[1][0], t[1][2], Math.max(t[2][0], t[2][2]) * 0.8 + 0.2, 0, 0.5, 0, true); });
      LN.forEach(([id, fact, p, z, cc, q], i) => {
        const gy = gY(q[0], q[2]), hh = q[1] - gy, H = Math.max(z[1] * 1.3, 0.3);
        flame(id, fact, [q[0], q[1] - z[1] * 0.4, q[2]], H, cc, 1.3, i);
        halo(q, Math.max(2.2, z[1] * 5), cc.clone().multiplyScalar(0.8), 0.4, i);
        pool(q[0], q[2], Math.min(4.2, 1.3 + hh * 0.9), cc.clone().multiplyScalar(0.8), 0.38, i);
        if (hh > 0.45) {
          const cm = new ShaderMaterial({ uniforms: { uC: { value: cc.clone() }, uK: { value: 0.3 } }, vertexShader: 'varying vec3 vN,vP;varying float vv;void main(){vv=uv.y;vN=normalMatrix*normal;vec4 m=modelViewMatrix*vec4(position,1.);vP=m.xyz;gl_Position=projectionMatrix*m;}', fragmentShader: 'uniform vec3 uC;uniform float uK;varying vec3 vN,vP;varying float vv;void main(){float e=pow(abs(dot(normalize(vN),normalize(-vP))),1.3);gl_FragColor=vec4(uC*e*pow(vv,1.4)*uK,1.);}', transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide, fog: false });
          const cn = new Mesh(new CylinderGeometry(0.08, Math.min(3.4, hh * 0.5 + 0.5), hh, 32, 1, true).translate(0, -hh / 2, 0), cm); cn.position.set(q[0], q[1], q[2]); FLK.push([cm.uniforms.uK, 0.3, i, 1, cn.position]); add2(cn, 2);
        }
        FLARE.push([new Vector3(...q), 1]);
      });
      FL.forEach(([id, fact, p, z, cc], i) => {
        const cy = p[1] + z[1] / 2, H = z[1] * 2.6;
        flame(id, fact, [p[0], cy - H * 0.3, p[2]], H, cc, 1.5, i + 5);
        halo([p[0], cy, p[2]], H * 2.4, cc.clone().multiplyScalar(0.7), 0.3, i + 5);
        pool(p[0], p[2], 1.2, cc.clone().multiplyScalar(0.8), 0.4, i + 5);
        for (let j = 0; j < 5; j++) addP(p[0] + (pr() - 0.5) * 0.3, cy + pr() * 0.5, p[2] + (pr() - 0.5) * 0.3, 7, 0.05, am.clone().multiplyScalar(2));
        FLARE.push([new Vector3(p[0], cy, p[2]), 0.7]);
      });
      FLARE.sort((a, b) => a[0].distanceTo(new Vector3(...at)) - b[0].distanceTo(new Vector3(...at))); FLARE.length = Math.min(FLARE.length, 4);
      {
        const dp = [], dcl = [], dz = [];
        const dot = (q, c) => { dp.push(...q); dcl.push(c.r, c.g, c.b); dz.push(1); };
        LN.forEach(([, , , , cc, q]) => dot(q, cc.clone().multiplyScalar(1.2))); FL.forEach(([, , p, z, cc]) => dot([p[0], p[1] + z[1] / 2, p[2]], cc.clone().multiplyScalar(1.2)));
        BEA.forEach(([p, z]) => dot([p[0], p[1] + z[1] / 2, p[2]], new Color(1.4, 1.5, 1.6)));
        if (dz.length) {
          const og = new BufferGeometry(); og.setAttribute('position', new Float32BufferAttribute(dp, 3)); og.setAttribute('aC', new Float32BufferAttribute(dcl, 3)); og.setAttribute('aZ', new Float32BufferAttribute(dz, 1));
          const pts = new Points(og, new ShaderMaterial({ uniforms: OVU, vertexShader: 'attribute vec3 aC;attribute float aZ;uniform float uSz;varying vec3 vC;void main(){vC=aC;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=uSz*aZ;}', fragmentShader: 'varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;float a=exp(-r*r*3.)*(1.-smoothstep(.8,1.,r));gl_FragColor=vec4(mix(vC,vec3(1.),a*a*.6)*a*1.4,1.);}', transparent: true, blending: AdditiveBlending, depthWrite: false, depthTest: false }));
          pts.frustumCulled = false; pts.renderOrder = 6; things.add(pts); NODEPTH.push(pts); OVD = pts;
        }
      }
      // fireflies and slow stardust drifting up
      for (let i = 0; i < 90; i++) addP(at[0] + (pr() - 0.5) * 50, fy + 0.4 + pr() * 5, at[2] + (pr() - 0.5) * 60, 6, 0.1 + 0.05 * pr(), (pr() < 0.8 ? am : ice).clone().multiplyScalar(2.6));
      for (let i = 0; i < 520; i++) addP(at[0] + (pr() - 0.5) * 70, fy + pr() * 0.5, at[2] + (pr() - 0.5) * 80, 7, 0.05 + 0.05 * pr(), (pr() < 0.7 ? ice : am).clone().multiplyScalar(1.8));
    }
    // ambient dust motes: around the Wanderer and each light
    const dustC = dawn > 0.5 ? new Color(1.2, 0.85, 0.5) : new Color(0.5, 0.55, 0.7);
    for (let i = 0; i < 220; i++) addP(at[0] + (pr() - 0.5) * 28, fy + 0.4 + pr() * 6, at[2] + (pr() - 0.5) * 28, 3, 0.05 + pr() * 0.05, dustC.clone().multiplyScalar(1.4));
    ls.forEach((L) => { for (let i = 0; i < 24; i++) addP(L.p[0] + (pr() - 0.5) * 8, L.p[1] - 0.8 + (pr() - 0.5) * 3.6, L.p[2] + (pr() - 0.5) * 8, 3, 0.06, dustC.clone().multiplyScalar(1.2)); });
    B = { c: [(X[0] + X[1]) / 2, 0, (Z[0] + Z[1]) / 2], r: Math.max(10, Math.hypot(X[1] - X[0], Z[1] - Z[0]) * 0.5 + 3), y: 0 };
    if (alt) { B.y = (yHi - 8) / 2; B.r = Math.max(B.r * 0.85, (yHi + 8) * 0.55); }
    // terrain
    const tm = patch(new MeshStandardMaterial({ vertexColors: true, ...dustT(), roughness: 0.95, normalScale: new Vector2(2.2, 2.2), envMapIntensity: 0.7 }), { gold: true });
    if (!alt) {
      const tg = terrainG(X, Z, fp, gc), ter = new Mesh(tg, tm); ter.receiveShadow = true; ter.userData = { id: 'ground' }; things.add(ter);
      const fm = patch(new MeshStandardMaterial({ color: gc.clone().multiplyScalar(0.88), ...dustT(), roughness: 1 })), far = new Mesh(uvXZ(new PlaneGeometry(2400, 2400, 1, 1).rotateX(-PI / 2).translate(0, -0.06, 0)), fm); far.receiveShadow = true; things.add(far);
    }
    if (alt) {
      // high sky: a sea of pale-gold cumulus (3 parallax layers) and faint distant islands; no ground
      [[-34, 0.008, 1, 0.4], [-28, 0.014, 0.85, 0.5], [-24, 0.022, 0.75, 0.56]].forEach(([y, sc, a, bs], i) => {
        const cm = new Mesh(new PlaneGeometry(6000, 6000).rotateX(-PI / 2), new ShaderMaterial({ uniforms: { uT: RT, uS: { value: sc }, uA: { value: a }, uBase: { value: bs }, uHor: { value: skyU.uHor.value }, uSun: skyU.uSun }, vertexShader: 'varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}', fragmentShader: CLOUD_FS, transparent: true, depthWrite: false, fog: false }));
        cm.position.y = y; cm.renderOrder = -4 + i; cm.frustumCulled = false; things.add(cm); NODEPTH.push(cm); CLOUDS.push(cm);
      });
      const ir = rng(11);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * PI * 2 + ir() * 0.5, R = 700 + ir() * 250, w2 = 50 + ir() * 70, y = -22 + ir() * 40, c = new Color('#a89cc0').lerp(new Color('#7a9a80'), 0.25).lerp(skyU.uHor.value, 0.55);
        const g = new Group(), mt = new MeshBasicMaterial({ color: c, fog: false, transparent: true, opacity: 0.6, depthWrite: false });
        g.add(new Mesh(new SphereGeometry(0.5, 16, 8).scale(w2, w2 * 0.1, w2 * 0.8), mt), new Mesh(new ConeGeometry(0.5, 1, 12).rotateX(PI).translate(0, -0.5, 0).scale(w2 * 0.9, w2 * 0.5, w2 * 0.7), mt));
        g.position.set(at[0] + Math.sin(a) * R, y, at[2] - Math.cos(a) * R); g.renderOrder = -6; g.traverse((o) => { o.renderOrder = -6; o.frustumCulled = false; }); things.add(g); NODEPTH.push(...g.children);
      }
      // ---- v12 living sky ----
      const cr = rng(2024), PL = [], fa = (w.avatar.facing * PI) / 180, fwx = Math.sin(fa), fwz = -Math.cos(fa);
      const CP = [at[0] - fwx * 6.5 - fwz * 1.3, at[1] + 3.4, at[2] - fwz * 6.5 + fwx * 1.3];
      let PLt = PL;
      const lobes = (cx, cy, cz, rx, ry, rz, n, rs) => {
        for (let i = 0; i < n; i++) {
          let x, y, zz, q; do { x = cr() * 2 - 1; y = cr() * 2 - 1; zz = cr() * 2 - 1; q = x * x + y * y + zz * zz; } while (q > 1);
          const py = cy + (y < 0 ? y * 0.5 : y) * ry, rd = ((rx + rz) / 2) * (rs * 0.8 + 0.5 * cr() * cr()) * (1 - 0.3 * Math.sqrt(q)), lx = cx + x * rx, lz = cz + zz * rz;
          // keep the follow camera and the Wanderer clear of puffs
          if (Math.hypot(lx - CP[0], py - CP[1], lz - CP[2]) < rd * 1.5 + 14 || Math.hypot(lx - at[0], py - at[1], lz - at[2]) < rd * 1.2 + 9) { cr(); cr(); continue; }
          PLt.push(lx, py, lz, rd, cr(), Math.min(1, Math.max(0, (py - (cy - ry * 0.5)) / (ry * 1.5))), 0, 0);
        }
      };
      const bank = (x, y0, z, rx, h, n) => lobes(x, y0 + h / 2, z, rx, h / 2, rx * 0.8, n, 0.28);
      // towering banks ringing every floating island, and the base of every tall tower, plus a horizon wall
      for (const I of ISL) {
        const R = I.t[2][0] / 2;
        for (let i = 0; i < 12; i++) { const a = (i / 12) * PI * 2 + cr() * 0.4, d = R * (1.15 + cr() * 0.6); bank(I.t[1][0] + Math.cos(a) * d, I.top - 19 - cr() * 6, I.t[1][2] + Math.sin(a) * d, 7 + cr() * 6, 22 + cr() * 24, 18); }
      }
      const TW = {}; WALLS.forEach(({ b }) => { if (b[3] - b[2] >= 9) { const k = Math.round((b[0] + b[1]) / 8) + ',' + Math.round((b[4] + b[5]) / 8), o = TW[k]; TW[k] = [(b[0] + b[1]) / 2, Math.min(b[2], o ? o[1] : 1e9), (b[4] + b[5]) / 2]; } });
      for (const [tx, ty, tz] of Object.values(TW)) for (let i = 0; i < 9; i++) { const a = (i / 9) * PI * 2 + cr() * 0.5, d = 9 + cr() * 8, y0 = ty - 20 - cr() * 3; bank(tx + Math.cos(a) * d, y0, tz + Math.sin(a) * d, 6 + cr() * 5, ty + 2 + cr() * 2 - y0, 14); }
      for (let i = 0; i < 30; i++) { const a = (i / 30) * PI * 2 + cr() * 0.3, d = 150 + cr() * 280, y0 = -40 + cr() * 10; bank(at[0] + Math.sin(a) * d, y0, at[2] - Math.cos(a) * d, 22 + cr() * 30, 28 + cr() * 52, 14); }
      for (const [, p, z] of PB) { const mz = Math.max(3, ...z.map((v) => v * 0.5)); lobes(p[0], p[1] + z[1] / 2, p[2], Math.max(z[0], 3) / 2, Math.max(z[1], 3) / 2, Math.max(z[2], 3) / 2, Math.min(36, Math.max(6, Math.round(Math.cbrt(z[0] * z[1] * z[2]) * 1.2))), 0.35 + 0 * mz); }
      const mkPuf = (arr) => {
        const N = arr.length / 8, bg = new InstancedBufferGeometry(), aC = new InstancedBufferAttribute(new Float32Array(N * 4), 4), aD = new InstancedBufferAttribute(new Float32Array(N * 4), 4);
        bg.setAttribute('position', new Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3)); bg.setIndex([0, 1, 2, 0, 2, 3]); bg.setAttribute('aC', aC); bg.setAttribute('aD', aD); bg.instanceCount = N;
        const pm = new Mesh(bg, new ShaderMaterial({ uniforms: { uT: RT, uSun: skyU.uSun, uHor: skyU.uHor }, vertexShader: PUF_VS, fragmentShader: PUF_FS, transparent: true, depthWrite: false, fog: false }));
        pm.frustumCulled = false; pm.renderOrder = -1; things.add(pm); NODEPTH.push(pm); return { aC, aD, src: new Float32Array(arr), n: N, mesh: pm };
      };
      PUF = mkPuf(PL);
      // ---- v13 the descent: below y = -10 the Wanderer falls through world-pinned cloud layers, between cumulus walls, in light shafts ----
      const lampT = th.map((e) => e[1]).filter((t) => t[5] == 1 && t[1][1] < -50), landC = LANDB.length ? [LANDB.reduce((s, t) => s + t[1][0], 0) / LANDB.length, LANDB.reduce((s, t) => s + t[1][2], 0) / LANDB.length] : [at[0], at[2]];
      if (at[1] < -10) {
        const PD = []; PLt = PD;
        // cumulus walls on every side, three distances, so they slide past each other
        // (the lower view straight ahead stays open onto the land)
        const open = (x, y, z) => { const dx = x - at[0], dz = z - at[2], l = Math.hypot(dx, dz) || 1; return (dx * fwx + dz * fwz) / l > 0.4 && y < at[1] + 16 && l < 120; };
        for (const [R, n, rx, h, nb] of [[36, 12, 10, 60, 20], [80, 16, 16, 90, 22], [150, 22, 26, 110, 20]]) {
          for (let i = 0; i < n; i++) {
            const a = (i / n) * PI * 2 + cr() * 0.5, d = R * (0.85 + cr() * 0.35), y0 = at[1] - 45 - cr() * 15, bx = at[0] + Math.cos(a) * d, bz = at[2] + Math.sin(a) * d;
            if (open(bx, at[1], bz)) { cr(); cr(); cr(); continue; }
            bank(bx, y0, bz, rx * (0.8 + cr() * 0.5), h * (0.7 + cr() * 0.5), nb);
          }
        }
        // layers pinned to world y: gold tops, lavender undersides. Those below the Wanderer open a wide hole over the land.
        for (const [ly, nl, r0, r1] of [[at[1] + 26, 90, 30, 260], [at[1] + 11, 70, 26, 220], [at[1] - 14, 60, 150, 320], [Math.max(at[1] - 28, -70), 60, 190, 360]]) {
          for (let i = 0; i < nl; i++) {
            const a = cr() * PI * 2, d = r0 + (r1 - r0) * Math.sqrt(cr()), x = at[0] + Math.cos(a) * d, z = at[2] + Math.sin(a) * d;
            if (ly < at[1] && Math.hypot(x - landC[0], z - landC[1]) < 85) continue;
            if (ly < at[1] + 20 && open(x, at[1], z)) continue;
            lobes(x, ly, z, 11, 2, 11, 5, 0.5 + cr() * 0.4);
          }
        }
        PLt = PL; PUF2 = mkPuf(PD); DESC.push(PUF2.mesh);
        const ri = th.map((e) => e[1]).find((t) => t[4] == 'cloud_light_rift'), rift = ri ? [ri[1][0], ri[1][2]] : landC, lyB = LANDB.length ? Math.max(...LANDB.map((t) => t[1][1] + t[2][1])) : at[1] - 40;
        DESC.push(...buildDescent({ at, rift, top: at[1] + 28, bottom: lyB, U: { uT: RT } }));
        DESC.slice(1).forEach((o) => { things.add(o); NODEPTH.push(o); });
        TILT = sm(-10, -24, at[1]);
      }
      if (LANDB.length) {
        const q = buildLand({ land: LANDB, riv: RIVB, lamps: lampT.map((t) => [t[1][0], t[1][1] + t[2][1] / 2, t[1][2]]), U: { uT: RT, uHor: skyU.uHor, uSun: skyU.uSun, uZen: skyU.uZen }, glowT });
        q.out.forEach((o) => { things.add(o); NODEPTH.push(o); }); q.pick.userData = { id: Object.keys(w.things).find((k) => w.things[k] === LANDB[0]), fact: 'far_green_land' }; pickables.push(q.pick);
      }
      // wind-blown flower clumps
      if (FLW.length) {
        const fr = rng(31), st = new ConeGeometry(0.035, 1, 4).translate(0, 0.5, 0), hd = new SphereGeometry(0.15, 8, 6).scale(1, 0.6, 1).translate(0, 1.02, 0), fg = mergeG([st, hd]), nv = fg.attributes.position.count, cl = [];
        for (let i = 0; i < nv; i++) cl.push(...(i < st.attributes.position.count ? [0.3, 0.62, 0.3] : [1, 1, 1]));
        fg.setAttribute('color', new Float32BufferAttribute(cl, 3));
        const im = new InstancedMesh(fg, patch(new MeshStandardMaterial({ vertexColors: true, roughness: 0.8, emissive: new Color('#301020'), emissiveIntensity: 0.15 }), { sway: [0.14, 0] }), FLW.length * 12), mt = new Matrix4(), ids = [];
        FLW.forEach(([id, , p, z, cc]) => {
          const big = Math.max(z[0], z[2]) >= 0.3, rc = big ? Math.max(z[0], z[2]) * 0.9 + 0.3 : 0.28;
          for (let k = 0; k < (big ? 12 : 4); k++) {
            const a = fr() * PI * 2, d = Math.sqrt(fr()) * rc, h = (big ? 0.35 : 0.28) + fr() * 0.4, n = ids.length; mt.makeRotationY(fr() * 6).setPosition(p[0] + Math.cos(a) * d, p[1], p[2] + Math.sin(a) * d); mt.scale(new Vector3(h, h, h));
            im.setMatrixAt(n, mt); im.setColorAt(n, new Color().setRGB(cc.r * (0.85 + fr() * 0.25), cc.g * (0.85 + fr() * 0.25), cc.b * (0.85 + fr() * 0.25))); ids.push(id);
          }
        });
        im.count = ids.length; im.castShadow = true; im.receiveShadow = true; im.userData = { ids, fact: null }; im.computeBoundingSphere(); things.add(im); pickables.push(im);
      }
      // a loose flock of far birds, and petals / seeds drifting past the camera
      {
        const br = rng(77), NB = 30, cen = [[-50, -20], [30, 25], [58, -45], [-8, 50]], B2 = new Float32Array(NB * 4), V2 = new Float32Array(NB * 3), bp = [];
        for (let i = 0; i < NB; i++) {
          const c = cen[i % 4], g1 = () => (br() + br() + br() - 1.5) * 18;
          B2.set([c[0] + g1(), 4 + (i % 4) * 5 + g1() * 0.35, c[1] + g1(), 1.2 + br() * 1.1], i * 4); V2.set([br(), 2 + br() * 1.6, br()], i * 3);
        }
        bp.push(0, 0, -0.15, -1.1, 0, 0.1, 0, 0, 0.3, 0, 0, -0.15, 1.1, 0, 0.1, 0, 0, 0.3);
        const bg = new InstancedBufferGeometry(); bg.setAttribute('position', new Float32BufferAttribute(bp, 3)); bg.setAttribute('aB', new InstancedBufferAttribute(B2, 4)); bg.setAttribute('aV', new InstancedBufferAttribute(V2, 3)); bg.instanceCount = NB;
        const bm = new Mesh(bg, new ShaderMaterial({ uniforms: { uT: RT, uCen: { value: new Vector3(at[0] + fwx * 95, at[1] + 10, at[2] + fwz * 95) }, uDir: { value: new Vector2(-fwz, fwx) }, uHor: skyU.uHor }, vertexShader: BIRD_VS, fragmentShader: BIRD_FS, transparent: true, depthWrite: false, side: DoubleSide, fog: false }));
        bm.frustumCulled = false; bm.renderOrder = 0; things.add(bm); NODEPTH.push(bm);
        const dr = rng(13), ND = 320, DP = [], DC = [], pal = [[1.25, 0.6, 0.75], [1.3, 1.15, 0.85], [1.9, 1.75, 1.3]], dz = [];
        for (let i = 0; i < ND; i++) { DP.push(dr(), dr(), dr(), dr()); DC.push(...pal[i % 3 == 2 ? 2 : dr() < 0.55 ? 0 : 1]); dz.push(0, 0, 0); }
        const dg = new BufferGeometry(); dg.setAttribute('position', new Float32BufferAttribute(dz, 3)); dg.setAttribute('aP', new Float32BufferAttribute(DP, 4)); dg.setAttribute('aC', new Float32BufferAttribute(DC, 3));
        const dm = new Points(dg, new ShaderMaterial({ uniforms: { uT: RT, uK: PK }, vertexShader: DRIFT_VS, fragmentShader: DRIFT_FS, transparent: true, depthWrite: false })); dm.frustumCulled = false; dm.renderOrder = 7; things.add(dm); NODEPTH.push(dm);
      }
    }
    if (SPKT.length) {
      const sg = new BufferGeometry(); sg.setAttribute('position', new Float32BufferAttribute(SPKT.flatMap(() => [0, 0, 0]), 3));
      sg.setAttribute('aA', new Float32BufferAttribute(SPKT.flatMap(([a]) => a), 3)); sg.setAttribute('aB', new Float32BufferAttribute(SPKT.flatMap(([, b]) => b), 3)); sg.setAttribute('aS', new Float32BufferAttribute(SPKT.map(([, , s]) => s), 1));
      const sp = new Points(sg, new ShaderMaterial({ uniforms: { uT: RT, uK: PK }, vertexShader: SPK2_VS, fragmentShader: SPK_FS, transparent: true, depthWrite: false, blending: AdditiveBlending, fog: false })); sp.frustumCulled = false; sp.renderOrder = 5; things.add(sp); NODEPTH.push(sp);
    }
    if (SPKD.length) {
      const sg = new BufferGeometry(); sg.setAttribute('position', new Float32BufferAttribute(SPKD.flatMap(() => [0, 0, 0]), 3));
      sg.setAttribute('aA', new Float32BufferAttribute(SPKD.flatMap(([a]) => a), 3)); sg.setAttribute('aB', new Float32BufferAttribute(SPKD.flatMap(([, b]) => b), 3)); sg.setAttribute('aS', new Float32BufferAttribute(SPKD.map(([, , s]) => s), 1));
      const sp = new Points(sg, new ShaderMaterial({ uniforms: { uT: RT, uK: PK }, vertexShader: SPK_VS, fragmentShader: SPK_FS, transparent: true, depthWrite: false, blending: AdditiveBlending, fog: false })); sp.frustumCulled = false; sp.renderOrder = 5; things.add(sp); NODEPTH.push(sp);
    }
    // is the Wanderer inside a hollow tower? (walls on 3+ sides, or standing within a tall block's footprint)
    {
      const y = at[1] + 0.9, hit = (dx, dz) => WALLS.some(({ b }) => b[2] <= y && b[3] >= y && [...Array(10)].some((_, i) => { const x = at[0] + dx * (i + 1) * 0.5, z = at[2] + dz * (i + 1) * 0.5; return x > b[0] && x < b[1] && z > b[4] && z < b[5]; }));
      TOWER = WALLS.some(({ b }) => b[3] - b[2] >= 4 && b[2] <= y && b[3] >= y && at[0] > b[0] - 0.6 && at[0] < b[1] + 0.6 && at[2] > b[4] - 0.6 && at[2] < b[5] + 0.6) || [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(([a, b]) => hit(a, b)).length >= 3
        || (alt && ((hit(1, 0) && hit(-1, 0)) || (hit(0, 1) && hit(0, -1))));
    }
    // wind-blown sand off the crests, glints, bootprints
    if (!alt) {
      const gv = (x, z) => hBase(x, z, fp), sw = new Color(1.5, 1, 0.58);
      for (let i = 0, n = 0; i < 5000 && n < 460; i++) { const x = at[0] + (pr() - 0.5) * 90, z = at[2] + (pr() - 0.5) * 90, h = gv(x, z); if (h > 0.2 || pr() < 0.02) { addP(x, h + 0.05, z, 4, 0.09 + pr() * 0.06, sw); n++; } }
      for (let i = 0; i < 220; i++) { const x = at[0] + (pr() - 0.5) * 50, z = at[2] - 4 - pr() * 36; addP(x, gv(x, z) + 0.06, z, 5, 0.1, new Color(2.2, 1.8, 1)); }
      const bp = new InstancedMesh(new CircleGeometry(0.5, 14).rotateX(-PI / 2), patch(new MeshStandardMaterial({ color: '#4a3050', alphaMap: padT, transparent: true, opacity: 0.9, roughness: 1, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 })), 36), mt = new Matrix4(), fa = (w.avatar.facing * PI) / 180, q = new Vector3(0, 1, 0);
      const fx = Math.sin(fa), fz = -Math.cos(fa);
      for (let i = 0; i < 18; i++) {
        const sd = i % 2 ? 1 : -1, bx = at[0] - fx * (1.1 + i * 0.85) - fz * sd * 0.2, bz = at[2] - fz * (1.1 + i * 0.85) + fx * sd * 0.2, y = at[1] + 0.04, rot = -fa + sd * 0.08;
        for (let k = 0; k < 2; k++) { const l = k ? 0.14 : 0.27, wd = k ? 0.1 : 0.13, o = k ? -0.17 : 0.07; mt.makeRotationY(rot).setPosition(bx + fx * o, y, bz + fz * o); mt.scale(new Vector3(wd, 1, l)); bp.setMatrixAt(i * 2 + k, mt); }
      }
      void q; bp.renderOrder = 2; things.add(bp); NODEPTH.push(bp);
      // layered distant dune ridges (violet far, gold near)
      [[380, 9, '#d0a8a0', 1], [620, 16, '#b890a8', 2], [920, 26, '#9c80b4', 3]].forEach(([R, H, c, k]) => {
        const pos = [], N = 96;
        for (let i = 0; i <= N; i++) { const a = (i / N) * PI * 2, h = H * (0.55 + 0.3 * Math.sin(a * 5 + k * 2) + 0.15 * Math.sin(a * 13 + k)) ; pos.push(at[0] + Math.sin(a) * R, -4, at[2] - Math.cos(a) * R, at[0] + Math.sin(a) * R, h, at[2] - Math.cos(a) * R); }
        const ix = []; for (let i = 0; i < N; i++) { const a = i * 2; ix.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
        const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setIndex(ix);
        const m = new Mesh(g, new MeshBasicMaterial({ color: new Color(c).multiplyScalar(dawn > 0.5 ? 1 : 0.15), fog: false, side: DoubleSide })); m.frustumCulled = false; things.add(m); NODEPTH.push(m);
      });
    }
    // particles
    const pg = new BufferGeometry(); pg.setAttribute('position', new Float32BufferAttribute(P.pos, 3)); pg.setAttribute('aS', new Float32BufferAttribute(P.s, 1)); pg.setAttribute('aK', new Float32BufferAttribute(P.k, 1)); pg.setAttribute('aZ', new Float32BufferAttribute(P.z, 1)); pg.setAttribute('aC', new Float32BufferAttribute(P.c, 3));
    ptsU = { uT: { value: 2 }, uK: { value: 400 }, uD: { value: dawn }, uSun: skyU.uSun };
    partM = new Points(pg, new ShaderMaterial({ uniforms: ptsU, vertexShader: PART_VS, fragmentShader: PART_FS, transparent: true, depthWrite: false, blending: AdditiveBlending })); partM.frustumCulled = false; things.add(partM); NODEPTH.push(partM);
    // light rig
    const day = dawn >= 0.5, sd = new Vector3(...nrm(day ? skyU.uSun.value.toArray() : MD));
    key.color.set(day ? '#ffc07a' : '#9ab4ff'); key.intensity = day ? (alt ? 4.8 : 6.5) : 1.3; key.userData.dir = sd;
    hemi.color.set(day ? '#b8a2ee' : '#4a5aa8'); hemi.groundColor.set(day ? '#9a7a78' : '#14142a'); hemi.intensity = day ? 1.35 : 0.85;
    bloom.strength = day ? (alt ? 0.2 : 0.3) : 0.8; bloom.threshold = day ? (alt ? 2.2 : 1.8) : 0.9; bloom.radius = 0.75;
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
    SC.w = W; SC.h = H; renderer.setSize(W, H, false); bokeh.uniforms.aspect.value = W / H; composer.setSize(W, H); camera.aspect = W / H; camera.updateProjectionMatrix();
    GOD.uniforms.uA.value = GRADE.uniforms.uA.value = W / H; god.uniforms.uA.value = grade.uniforms.uA.value = W / H;
  }

  const fl = (i, t) => (1 + 0.1 * Math.sin(t * 9 + i * 1.7 + Math.sin(t * 3 + i) * 2) + 0.05 * Math.sin(t * 23 + i * 5)) * (1 + 0.1 * Math.sin(t * 5.3 + i * 2));

  let lastT = 2;
  function draw(t = 2, snap = false) {
    if (!w) return;
    const dt = snap ? 0 : Math.min(0.2, Math.max(0, t - lastT)); lastT = t;
    tNow = t;
    const W = cv.clientWidth || cv.width, H = cv.clientHeight || cv.height, { at, facing } = w.avatar, f = (facing * PI) / 180, ov = view == 'overview';
    size(W, H);
    const fw = [Math.sin(f), 0, -Math.cos(f)], rt2 = [-fw[2], 0, fw[0]];
    cam = ov
      ? ALT ? { position: [B.c[0] - Math.sin(f + 0.7) * B.r * 1.25, B.y + B.r * 0.62, B.c[2] + Math.cos(f + 0.7) * B.r * 1.25], target: [B.c[0], B.y - 3, B.c[2]] } : { position: [B.c[0] - fw[0] * B.r, B.r * 0.9, B.c[2] - fw[2] * B.r], target: [B.c[0], 0, B.c[2]] }
      : { position: at.map((a, i) => a - fw[i] * 6.5 + rt2[i] * 1.3 + (i == 1) * 3.4), target: at.map((a, i) => a + fw[i] * 9 + (i == 1) * 0.8) };
    // v13: while descending, the follow camera tips down about 15 degrees so the land fills the lower frame
    if (!ov && TILT > 0) {
      const p0 = cam.position, t0 = cam.target, dy = t0[1] - p0[1], L = Math.hypot(t0[0] - p0[0], dy, t0[2] - p0[2]), hl = Math.hypot(t0[0] - p0[0], t0[2] - p0[2]), pt = Math.atan2(dy, hl) - 0.262 * TILT;
      cam.target = [p0[0] + fw[0] * L * Math.cos(pt), p0[1] + L * Math.sin(pt), p0[2] + fw[2] * L * Math.cos(pt)];
    }
    DESCON = !!DESC.length && !ov; DESC.forEach((m) => (m.visible = DESCON)); CLOUDS.forEach((m) => (m.visible = !DESCON));
    const P = cam.position.map((a, i) => a + [Math.sin(t * 0.4) * 0.14, Math.sin(t * 0.31) * 0.09, Math.cos(t * 0.37) * 0.14][i]),
      T = cam.target.map((a, i) => a + [Math.cos(t * 0.3) * 0.12, Math.sin(t * 0.23) * 0.08, 0][i]);
    camera.position.set(...P); camera.lookAt(...T); camera.rotateZ(Math.sin(t * 0.27) * 0.006); camera.updateMatrixWorld(); camera.updateProjectionMatrix();
    if (shadowDirty) fitShadow();
    ceil.forEach((m) => (m.visible = !ov));
    FLAGMATS.forEach((m) => (m.emissiveIntensity = ov ? 0.9 : 0)); RIM.uRim.value = ov ? 1 : 0; RIM.uRimC.value.set(dawn > 0.5 ? '#ffc98a' : '#7aa8ff');
    ring.visible = ov; ring.scale.setScalar(ov && ALT ? 3.2 : 1); if (OVD) { OVD.visible = ov; OVU.uSz.value = H * 0.013; }
    LTS.forEach((L, i) => (L.l.intensity = L.b * fl(i, t))); LANTMATS.forEach((m) => (m.emissiveIntensity = m.userData.b * fl(0, t)));
    if (night) {
      FLK.forEach(([o, b, k, u, ps]) => { const v = b * (0.85 + 0.15 * fl(k, t)) * (ps ? 0.25 + 0.75 * sm(1.5, 9, ps.distanceTo(camera.position)) : 1); if (u) o.value = v; else o.opacity = v; });
      // flame trail: each lantern turns to face the Wanderer (eased live, exact in stills)
      FLM.forEach((f) => {
        const tg = Math.atan2(at[0] - f.m.position.x, at[2] - f.m.position.z);
        if (f.a == null || snap) f.a = tg; else { let d = tg - f.a; d = Math.atan2(Math.sin(d), Math.cos(d)); f.a += d * Math.min(1, dt * (2.2 / (1 + f.k * 0.15))); }
        f.m.rotation.y = f.a;
      });
      REFL.forEach((r) => { r.material.uniforms.uT.value = t; r.material.uniforms.uOv.value = ov ? 1 : 0; r.getRenderTarget().setSize(Math.round(W * 0.6), Math.round(H * 0.6)); });
    }
    things.children.forEach((c) => { if (c.userData.sway) c.rotation.z = Math.sin(t * 0.6 + c.userData.sway) * 0.05; });
    // v11: clouds follow the camera (world-space noise), the island turns slowly, bells swing, tower walls ghost out of the camera's way
    CLOUDS.forEach((m) => m.position.set(P[0], m.position.y, P[2]));
    things.children.forEach((c) => { if (c.userData.isl) c.rotation.y = t * 0.02; });
    BELLS.forEach(([g, m, bx]) => { g.rotation.x = Math.sin(t * 0.7 + bx) * 0.05; g.rotation.z = Math.sin(t * 0.53 + 1) * 0.03; m.emissiveIntensity = 0.12 + 0.1 * (0.5 + 0.5 * Math.sin(t * 1.3)); });
    {
      const a = P, e = [at[0], at[1] + 1, at[2]], dv = [e[0] - a[0], e[1] - a[1], e[2] - a[2]];
      WALLS.forEach((o) => {
        let hit = false;
        if (TOWER && !ov) {
          let t0 = 0, t1 = 1; const b = o.b, lo = [b[0] - 0.05, b[2] - 0.05, b[4] - 0.05], hi = [b[1] + 0.05, b[3] + 0.05, b[5] + 0.05];
          hit = true;
          for (let i = 0; i < 3 && hit; i++) {
            if (Math.abs(dv[i]) < 1e-6) { if (a[i] < lo[i] || a[i] > hi[i]) hit = false; } else { let u0 = (lo[i] - a[i]) / dv[i], u1 = (hi[i] - a[i]) / dv[i]; if (u0 > u1) [u0, u1] = [u1, u0]; t0 = Math.max(t0, u0); t1 = Math.min(t1, u1); if (t0 > t1) hit = false; }
          }
        }
        o.g = snap ? +hit : o.g + (+hit - o.g) * (1 - Math.exp(-Math.max(dt, 0.016) * 7));
        if (o.g > 0.01) {
          if (!o.gm) o.gm = patch(new MeshStandardMaterial({ color: col(o.c, 1.5), roughness: 1, transparent: true, depthWrite: false }));
          o.gm.opacity = 1 - 0.88 * o.g; o.me.material = o.gm; o.me.castShadow = false;
        } else { o.me.material = o.m; o.me.castShadow = true; }
      });
    }
    // v12 glare control: glow sprites, discs and pools fade when the camera is near them or looks straight at them
    const cdir = new Vector3(); camera.getWorldDirection(cdir);
    const lookFade = (q, rad) => { const v = q.clone().sub(camera.position), d = v.length(); return (1 - 0.8 * sm(0.8, 0.97, v.dot(cdir) / Math.max(d, 1e-3))) * (0.25 + 0.75 * sm(rad * 0.1, rad * 0.7 + 3, d)); };
    SPR.forEach(([sp, o, sw]) => (sp.material.opacity = o * sm(0.1, 0.5, sp.position.distanceTo(camera.position) / sw) * (ALT ? lookFade(sp.position, sw * 0.5) : 1)));
    if (ALT) GFL.forEach(([fn, b, q, rad]) => fn(b * lookFade(q, rad)));
    for (const U of [PUF, PUF2]) if (U) {
      // sort cumulus lobes far to near (fixed camera in stills, so deterministic)
      const { src, n, aC, aD } = U, cp = camera.position, ord = Array.from({ length: n }, (_, i) => i), dd = new Float32Array(n);
      for (let i = 0; i < n; i++) dd[i] = (src[i * 8] - cp.x) ** 2 + (src[i * 8 + 1] - cp.y) ** 2 + (src[i * 8 + 2] - cp.z) ** 2;
      ord.sort((a, b) => dd[b] - dd[a]);
      for (let k = 0; k < n; k++) { const o = ord[k] * 8; aC.array.set(src.subarray(o, o + 4), k * 4); aD.array.set(src.subarray(o + 4, o + 8), k * 4); }
      aC.needsUpdate = true; aD.needsUpdate = true;
    }
    WATER.forEach((n) => n.offset.set(t * 0.012, t * 0.017));
    skyU.uT.value = t; CT.value = RT.value = god.uniforms.uT.value = t; GR.value = dawn > 0.5 ? 1 : 0; PK.value = H * 0.5 * camera.projectionMatrix.elements[5]; if (ptsU) { ptsU.uT.value = t; ptsU.uK.value = PK.value; }
    scene.fog.density = ov ? 0.0016 : ALT ? 0.0028 : dawn > 0.5 ? 0.0055 : 0.012;
    hemi.intensity = (dawn >= 0.5 ? 0.95 : 0.85) * (ov ? 1.3 : 1);
    const baseExp = (dawn >= 0.5 ? 0.5 : 1.1) * (ov ? 1.1 : 1);
    if (snap) EXP.k = 1;
    renderer.toneMappingExposure = baseExp * EXP.k;
    // depth of field: focus between the Wanderer and the camera target; off in overview
    const z = new Vector3(); camera.getWorldDirection(z);
    const dist = (a) => new Vector3(...a).sub(camera.position).dot(z);
    bokeh.uniforms.maxblur.value = ALT ? 0.0025 : 0.008; bokeh.enabled = !ov && !night; bokeh.uniforms.focus.value = (dist(at) + dist(T)) / 2; bokeh.uniforms.aspect.value = camera.aspect;
    gtao.enabled = true;
    // god-rays toward the sun
    const sdir = skyU.uSun.value, sv = camera.position.clone().add(sdir.clone().multiplyScalar(100)).project(camera), front = z.dot(sdir);
    god.uniforms.uSun.value.set(sv.x * 0.5 + 0.5, sv.y * 0.5 + 0.5); god.enabled = dawn > 0.5 && front > 0.05; god.uniforms.uAmt.value = Math.min(1, front * 3) * (ov ? 0.4 : 0.45) * (ALT ? 1.5 : 1); god.uniforms.uThr.value = ALT ? 1.0 : 1.5;
    grade.uniforms.uT.value = t; grade.uniforms.uD.value = dawn; grade.uniforms.uV.value = ov ? 0.35 : 0.5; grade.uniforms.uN.value = night ? 1 : 0;
    // subtle lens flare from the nearest flames
    const LP = grade.uniforms.uLP.value;
    for (let i = 0; i < 4; i++) {
      const f = FLARE[i]; LP[i].set(0, 0, 0); if (!night || !f) continue;
      const v = f[0].clone().applyMatrix4(camera.matrixWorldInverse), d = -v.z; if (d < 1.5) continue;
      const n = f[0].clone().project(camera), e = Math.max(Math.abs(n.x), Math.abs(n.y));
      LP[i].set(n.x * 0.5 + 0.5, n.y * 0.5 + 0.5, f[1] * (1 - sm(0.9, 1.15, e)) * sm(1.5, 6, d) * (0.9 + 0.1 * fl(i, t)));
    }
    composer.render();
    // auto-exposure: night adapts to the void's brightness (dawn stays at v8 exposure); eased live, settled in stills
    const tk = night ? Math.min(1.9, Math.max(0.85, Math.pow(0.03 / Math.max(meter.lum, 1e-4), 0.5))) : 1;
    if (snap) { EXP.k = tk; renderer.toneMappingExposure = baseExp * tk; composer.render(); } else EXP.k += (tk - EXP.k) * (1 - Math.exp(-dt * 1.2));
  }

  const safe = (fn) => (...a) => { try { return fn(...a); } catch (e) { E.push(String(e && e.stack || e)); } };
  const frame = safe(draw);
  cv.addEventListener('webglcontextlost', (e) => { e.preventDefault(); E.push('webgl context lost'); });
  return {
    modes: ['follow', 'overview'],
    async setWorld(W) { setWorldSync(W); frame(); },
    setCamera(m) { if (m != view) { view = m; shadowDirty = true; } frame(tNow); },
    getCamera: () => cam,
    async renderStill(v) { if (v != view) { view = v; shadowDirty = true; } draw(2, true); },
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
    console.warn('engine v10 falling back to v6:', e);
    let c = cv;
    if (!cv.getContext('webgl')) { c = cv.cloneNode(false); cv.parentNode.insertBefore(c, cv); cv.style.display = 'none'; }
    return createV6(c, opts);
  }
}
