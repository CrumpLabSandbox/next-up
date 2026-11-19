// v13 "the descent": the far green land (noise hills, grass, trees, silver river, lamp) and the light shafts / mist of the rift.
import {
  Color, Vector3, Vector4, Group, Mesh, Sprite, SpriteMaterial, InstancedMesh, Matrix4, BufferGeometry, Float32BufferAttribute, SphereGeometry, CylinderGeometry, MeshStandardMaterial,
  MeshBasicMaterial, ShaderMaterial, AdditiveBlending, DoubleSide, CircleGeometry, InstancedBufferGeometry, InstancedBufferAttribute,
} from 'three';

const PI = Math.PI;
const sm = (a, b, x) => ((x = Math.min(1, Math.max(0, (x - a) / (b - a)))), x * x * (3 - 2 * x));
const mix = (a, b, t) => a + (b - a) * t;
const ih = (a, b, s) => { let h = Math.imul(a + 374761393, 668265263) ^ Math.imul(b + 1274126177, 2246822519) ^ Math.imul(s + 97, 3266489917); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const vn = (x, z, s) => { const xi = Math.floor(x), zi = Math.floor(z), fx = x - xi, fz = z - zi, u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz); return mix(mix(ih(xi, zi, s), ih(xi + 1, zi, s), u), mix(ih(xi, zi + 1, s), ih(xi + 1, zi + 1, s), u), v); };
const hf = (x, z) => vn(x * 0.011, z * 0.011, 5) * 0.55 + vn(x * 0.025 + 7, z * 0.025, 6) * 0.3 + vn(x * 0.07, z * 0.07 + 3, 7) * 0.15;
const seeded = (a) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

const NZ = `float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1,0)),f.x),mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x),f.y);}
float fb(vec2 p){return n2(p)*.55+n2(p*2.1+5.)*.3+n2(p*4.3+9.)*.15;}`;
const HAZE = `vec3 hazeC(){return mix(uHor*vec3(1.03,.98,.86),vec3(.86,.78,1.)*.95,.3);}
float hazeF(float d){float f=1.-exp(-pow(d*.0028,2.)),h=max(f,(1.-exp(-d/640.))*.8);return mix(h,1.,smoothstep(650.,1000.,d));}`;

const LAND_VS = 'attribute vec3 color;varying vec3 vW,vN,vC;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vN=normal;vC=color;gl_Position=projectionMatrix*viewMatrix*w;}';
const LAND_FS = `precision highp float;uniform vec3 uHor,uSun;uniform float uT;varying vec3 vW,vN,vC;
${NZ}
${HAZE}
void main(){vec3 V=vW-cameraPosition;float dist=length(V);vec3 N=normalize(vN);vec2 p=vW.xz;
float g1=fb(p*.9),g2=n2(p*4.1),g3=n2(p*13.);float blade=g2*.5+g3*.5;
float wv=.5+.5*sin(dot(p,vec2(.05,.03))*6.28+uT*.5+g1*4.);
vec3 base=vC*(.74+.5*g1)*(.84+.3*blade)*(.94+.12*wv);
float sun=dot(N,uSun);
vec3 L=vec3(.5,.46,.78)*(.35+.65*N.y)*.85+vec3(1.,.8,.5)*(max(sun,0.)*1.25+max(sun*.5+.5,0.)*.3);
vec3 col=base*L*1.05;
col+=vec3(1.,.8,.5)*pow(max(dot(normalize(V),uSun),0.),3.)*.1*base;
col=mix(col,hazeC(),hazeF(dist));gl_FragColor=vec4(col,1.);}`;

const WATER_VS = 'varying vec2 vU;varying vec3 vW;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}';
const WATER_FS = `precision highp float;uniform vec3 uHor,uSun,uZen;uniform vec4 uLamp;uniform float uT;varying vec2 vU;varying vec3 vW;
${NZ}
${HAZE}
vec3 skyAt(vec3 r){float hy=max(r.y,0.);vec3 c=mix(uHor*vec3(1.03,.98,.86),uZen,smoothstep(0.,.9,pow(hy,.55)));float an=acos(clamp(dot(r,uSun),-1.,1.));
c+=vec3(1.,.82,.52)*exp(-an*2.4)*.3+vec3(1.,.9,.66)*exp(-an*9.)*.4+vec3(1.,.82,.55)*exp(-an*30.)*1.2;
vec2 q=r.xz/(r.y+.2)*1.2+vec2(uT*.012,uT*.005);c=mix(c,vec3(1.04,.94,.78),smoothstep(.5,.8,fb(q*vec2(1.,2.3)))*.4);return c;}
void main(){vec3 V=normalize(vW-cameraPosition);float dist=distance(vW,cameraPosition);vec2 p=vW.xz;
vec2 g=vec2(n2(p*1.7+vec2(0.,uT*.5))-.5,n2(p*1.3-vec2(uT*.4,0.)+7.)-.5)*.3+(n2(p*6.+uT*vec2(.3,1.4))-.5)*.18;
vec3 N=normalize(vec3(g.x,1.,g.y));vec3 R=reflect(V,N);R.y=abs(R.y);
float cs=clamp(dot(-V,N),0.,1.),F=.55+.45*pow(1.-cs,2.);
vec3 sk=skyAt(R);vec3 col=mix(vec3(.16,.3,.36),sk*vec3(.98,.99,1.05)*.8,F);col=mix(col,vec3(.7,.8,.92)*(.5+.3*sk),.4);
float a=abs(vU.x);col*=.88+.3*(1.-a);
float s1=n2(p*vec2(5.,2.)+vec2(0.,-uT*1.5)),s2=n2(p*7.-uT*.7+9.),sh=pow(smoothstep(.6,.9,s1*.5+s2*.6),2.);
col+=vec3(1.,.98,.92)*sh*(.5+1.4*pow(max(dot(V,uSun),0.),1.5))*1.1;
if(uLamp.z>0.){vec2 cd=normalize(cameraPosition.xz-uLamp.xz+1e-4),q=p-uLamp.xz-vec2(uLamp.w,0.);float al=dot(q,cd),ac=q.x*cd.y-q.y*cd.x,wd=.5+.07*max(al,0.);
float st=exp(-ac*ac/(wd*wd))*(al>0.?exp(-al/30.):exp(-al*al/2.));st*=.55+.9*n2(p*vec2(6.,2.5)+vec2(0.,-uT*1.1));
col+=mix(vec3(1.,.6,.2),vec3(1.,.8,.45),st*.4)*st*uLamp.z;}
col=mix(col,hazeC(),hazeF(dist)*.9);
gl_FragColor=vec4(col,(1.-smoothstep(.7,1.,a))*(1.-smoothstep(500.,900.,dist)*.6));}`;

// opts: { land, riv, lamps, U: {uT,uHor,uSun,uZen}, glowT, at }
export function buildLand({ land, riv, lamps, U, glowT }) {
  const out = [], tot = land.reduce((s, t) => s + t[2][0] * t[2][2], 0);
  const cx = land.reduce((s, t) => s + t[1][0] * t[2][0] * t[2][2], 0) / tot, cz = land.reduce((s, t) => s + t[1][2] * t[2][0] * t[2][2], 0) / tot;
  const R0 = riv[0], axX = !!R0 && R0[2][0] > R0[2][2], wl = R0 ? R0[1][1] + R0[2][1] / 2 : land[0][1][1] + land[0][2][1] - 1;
  const s0 = R0 ? (axX ? R0[1][0] : R0[1][2]) : cz;
  let rc0 = R0 ? (axX ? R0[1][2] : R0[1][0]) : 1e6;
  const lamp = lamps[0];
  // keep the lamp on the bank, not in the water
  if (lamp && R0) { const ll = axX ? lamp[2] : lamp[0], sg = ll >= rc0 ? 1 : -1; rc0 = ll - sg * (2.15 + 0.2); if (!axX && Math.abs(lamp[2] - s0) > 40) rc0 = R0[1][0]; }
  const off = (s) => { const d = s - s0; return (16 * Math.sin(d * 0.011) + 5 * Math.sin(d * 0.031)) * Math.min(1, Math.abs(d) / 70); };
  const hwAt = (s) => 2 + Math.abs(s - s0) * 0.009;
  const lat = (x, z) => { const s = axX ? x : z, l = axX ? z : x; return Math.abs(l - (rc0 + off(s))); };
  const hgt = (x, z) => {
    const r = Math.hypot(x - cx, z - cz), hr = Math.max(0.2, 3 + (hf(x, z) - 0.42) * (24 + 40 * sm(20, 380, r)) + 9 * sm(300, 800, r));
    return wl + mix(-0.5, hr, sm(hwAt(axX ? x : z) + 1.5, hwAt(axX ? x : z) + 24, lat(x, z)));
  };

  // terrain: dense near the land, coarse far away (x = c + sign(u) |u|^2.2 R)
  const N = 100, RR = 1100, pos = [], col = [], nor = [], idx = [], cLo = new Color('#3f8a44'), cHi = new Color('#4f9a48'), cCr = new Color('#8cb458'), cWet = new Color('#5aa05a'), cMd = new Color('#8aa84c'), c = new Color();
  const mp = (i) => { const u = (i - N) / N; return Math.sign(u) * Math.pow(Math.abs(u), 2.2) * RR; };
  for (let j = 0; j <= 2 * N; j++) for (let i = 0; i <= 2 * N; i++) {
    const x = cx + mp(i), z = cz + mp(j), y = hgt(x, z), e = 1.5, dx = hgt(x + e, z) - hgt(x - e, z), dz = hgt(x, z + e) - hgt(x, z - e), nl = Math.hypot(dx, 2 * e, dz);
    pos.push(x, y, z); nor.push(-dx / nl, (2 * e) / nl, -dz / nl);
    const t = hf(x * 1.7 + 40, z * 1.7), hr = y - wl, d = lat(x, z);
    c.copy(cLo).lerp(cHi, sm(0.3, 0.7, t)).lerp(cMd, sm(0.55, 0.8, hf(x * 0.6 + 90, z * 0.6)) * 0.6).lerp(cCr, sm(4, 20, hr) * 0.6).lerp(cWet, 1 - sm(1, 14, d));
    col.push(c.r, c.g, c.b);
  }
  for (let j = 0; j < 2 * N; j++) for (let i = 0; i < 2 * N; i++) { const a = j * (2 * N + 1) + i, b = a + 1, d = a + 2 * N + 1, e = d + 1; idx.push(a, d, b, b, d, e); }
  const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new Float32BufferAttribute(nor, 3)); g.setAttribute('color', new Float32BufferAttribute(col, 3)); g.setIndex(idx);
  const shared = { uHor: U.uHor, uSun: U.uSun, uT: U.uT };
  const ter = new Mesh(g, new ShaderMaterial({ uniforms: shared, vertexShader: LAND_VS, fragmentShader: LAND_FS, fog: false })); ter.frustumCulled = false; ter.renderOrder = -6; out.push(ter);

  // river: a silver ribbon that widens with distance
  if (R0) {
    const rp = [], ru = [], ri = [], S = 220;
    for (let k = 0; k <= S; k++) {
      const s = s0 + (k / S - 0.5) * 2 * 1000, o = rc0 + off(s), hw = hwAt(s), s1 = s + 1, tx = (rc0 + off(s1) - o), nl = Math.hypot(tx, 1), nx = 1 / nl, ns = -tx / nl, y = wl + 0.08 + 0.45 * sm(60, 300, Math.abs(s - s0));
      for (const u of [-1, 1]) { const l = o + nx * hw * u, ss = s + ns * hw * u; rp.push(axX ? ss : l, y, axX ? l : ss); ru.push(u, s / 10); }
      if (k < S) { const a = k * 2; ri.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const rg = new BufferGeometry(); rg.setAttribute('position', new Float32BufferAttribute(rp, 3)); rg.setAttribute('uv', new Float32BufferAttribute(ru, 2)); rg.setIndex(ri);
    const lq = lamp ? [lamp[0], lamp[2]] : [0, 0], wm = new ShaderMaterial({ uniforms: { ...shared, uZen: U.uZen, uLamp: { value: lamp ? new Vector4(lq[0], lq[1], 4, axX ? 0 : (rc0 > lamp[0] ? 0.9 : -0.9)) : new Vector4() } }, vertexShader: WATER_VS, fragmentShader: WATER_FS, transparent: true, depthWrite: false, fog: false, side: DoubleSide });
    const wm2 = new Mesh(rg, wm); wm2.frustumCulled = false; wm2.renderOrder = -5; out.push(wm2);
  }

  // tree clusters on the hills
  const rn = seeded(404), trees = [];
  const fixed = [[-34, -22], [38, -40], [-52, 14], [30, 26], [-18, -70], [60, -8]];
  for (let k = 0; k < 14; k++) {
    const a = rn() * PI * 2, r = 22 + rn() * 150, px = k < 6 ? cx + fixed[k][0] : cx + Math.cos(a) * r, pz = k < 6 ? cz + fixed[k][1] : cz + Math.sin(a) * r * 0.8, n = 8 + ((rn() * 8) | 0);
    for (let i = 0; i < n; i++) {
      const x = px + (rn() - 0.5) * 20, z = pz + (rn() - 0.5) * 20, d = lat(x, z);
      if (d < hwAt(axX ? x : z) + 7 || Math.hypot(x - lamp?.[0], z - lamp?.[2]) < 5) continue;
      trees.push([x, hgt(x, z), z, 3.2 + rn() * 3.6 * (r > 90 ? 1.5 : 1), rn()]);
    }
  }
  const mk = (geo, color, n, fn) => { const m = new InstancedMesh(geo, new MeshStandardMaterial({ roughness: 1, color }), n), mt = new Matrix4(); trees.forEach((t, i) => { fn(mt, t); m.setMatrixAt(i, mt); m.setColorAt(i, new Color().setHSL(0.31 + (t[4] - 0.5) * 0.06, 0.6, 0.13 + t[4] * 0.08)); }); m.frustumCulled = false; m.instanceMatrix.needsUpdate = true; return m; };
  const trunk = new CylinderGeometry(0.08, 0.14, 1, 5).translate(0, 0.5, 0), ball = new SphereGeometry(1, 9, 7), n = trees.length;
  if (n) {
    const tm = mk(trunk, '#5a4030', n, (m, t) => m.makeScale(t[3] * 0.2, t[3] * 0.5, t[3] * 0.2).setPosition(t[0], t[1] - 0.1, t[2]));
    tm.instanceColor.array.fill(0.3); tm.instanceColor.needsUpdate = true;
    out.push(tm,
      mk(ball, '#ffffff', n, (m, t) => m.makeScale(t[3] * 0.34, t[3] * 0.3, t[3] * 0.34).setPosition(t[0], t[1] + t[3] * 0.42, t[2])),
      mk(ball, '#ffffff', n, (m, t) => m.makeScale(t[3] * 0.24, t[3] * 0.22, t[3] * 0.24).setPosition(t[0] + 0.15, t[1] + t[3] * 0.7, t[2] - 0.1)));
  }

  // lamp: warm halo, ground pool (the long amber reflection is in the water shader)
  for (const q of lamps) {
    const mkS = (s, o, cl) => { const sp = new Sprite(new SpriteMaterial({ map: glowT, color: new Color(cl), blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: o })); sp.position.set(q[0], q[1], q[2]); sp.scale.set(s, s, 1); sp.renderOrder = 4; return sp; };
    out.push(mkS(16, 0.6, '#ff9a30'), mkS(4, 1, '#ffd890'));
    const pool = new Mesh(new CircleGeometry(4.5, 32).rotateX(-PI / 2), new MeshBasicMaterial({ map: glowT, color: '#ff9a30', blending: AdditiveBlending, depthWrite: false, fog: false, transparent: true, opacity: 0.5 }));
    pool.position.set(q[0], hgt(q[0], q[2]) + 0.12, q[2]); pool.renderOrder = -4; out.push(pool);
  }
  return { out, pick: ter, hgt };
}

const SH_VS = 'attribute float aH;varying vec2 vU;varying vec3 vW,vR;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vR=normal;gl_Position=projectionMatrix*viewMatrix*w;}';
const SH_FS = `precision highp float;uniform float uT,uS;varying vec2 vU;varying vec3 vW,vR;
${NZ}
void main(){vec3 V=normalize(vW-cameraPosition);float v=vU.y;float st=.5+.5*sin(vU.x*6.2832*3.+uS*9.+uT*.1)*sin(vU.x*6.2832*5.-uT*.07+uS*3.);
float nz=n2(vec2(vU.x*14.+uS*7.,uT*.05+v*3.));float s=(.35+.65*st)*(.5+nz);
float a=s*smoothstep(0.,.1,v)*(1.-.75*smoothstep(.25,1.,v))*(.25+.75*pow(abs(dot(V,normalize(vR))),.8));
gl_FragColor=vec4(vec3(1.,.8,.48)*1.4,a*.11*smoothstep(10.,45.,distance(vW,cameraPosition)));}`;
const MIST_VS = `attribute vec4 aC;attribute vec3 aD;uniform float uT;varying vec2 vQ;varying vec3 vD;varying float vF;
void main(){float f=fract(uT*aD.z*.004+aD.x*7.3);vec3 c=aC.xyz;c.x+=(f-.5)*aC.w*3.;vec3 Vv=c-cameraPosition;float dst=length(Vv);vec3 vn=Vv/dst;
vec3 X=vec3(1.,0.,0.);vec3 r=normalize(X-vn*dot(X,vn));vec3 u=cross(vn,r);vQ=position.xy;vD=aD;vF=sin(f*3.1416)*smoothstep(5.,24.,dst);
vec3 w=c+r*position.x*aC.w+u*position.y*aD.y;gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}`;
const MIST_FS = `precision highp float;varying vec2 vQ;varying vec3 vD;varying float vF;
${NZ}
void main(){float e=exp(-(vQ.x*vQ.x*1.6+vQ.y*vQ.y*7.));float n=.45+.9*n2(vec2(vQ.x*5.+vD.x*40.,vQ.y*2.));float a=e*n*vF*.3;if(a<.004)discard;
vec3 c=mix(vec3(1.,.9,.72),vec3(.82,.74,.96),vD.x);gl_FragColor=vec4(c*1.05,a);}`;

// opts: { at, rift: [x,z], top, bottom, U }
export function buildDescent({ at, rift, top, bottom, U }) {
  const out = [], r = seeded(1313), SEG = 28;
  for (let k = 0; k < 6; k++) {
    const x = rift[0] + (r() - 0.5) * 70, z = rift[1] + (r() - 0.5) * 20, r0 = 1.2 + r() * 2, r1 = r0 * (1.8 + r() * 0.8), sx = -0.08, sz = 0.3, h = top - bottom - r() * 10, p = [], uv = [], nm = [], ix = [];
    for (let i = 0; i <= SEG; i++) {
      const a = (i / SEG) * PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      p.push(x + ca * r0, top, z + sa * r0, x + sx * h + ca * r1, top - h, z + sz * h + sa * r1); uv.push(i / SEG, 0, i / SEG, 1); nm.push(ca, 0, sa, ca, 0, sa);
      if (i < SEG) { const b = i * 2; ix.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); }
    }
    const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(p, 3)); g.setAttribute('uv', new Float32BufferAttribute(uv, 2)); g.setAttribute('normal', new Float32BufferAttribute(nm, 3)); g.setIndex(ix);
    const m = new Mesh(g, new ShaderMaterial({ uniforms: { uT: U.uT, uS: { value: r() * 10 } }, vertexShader: SH_VS, fragmentShader: SH_FS, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, fog: false }));
    m.frustumCulled = false; m.renderOrder = 2; out.push(m);
  }
  // drifting mist streaks, pinned in the world
  const NM = 46, C = new Float32Array(NM * 4), D = new Float32Array(NM * 3);
  for (let i = 0; i < NM; i++) {
    const a = r() * PI * 2, d = 24 + r() * 150;
    C.set([at[0] + Math.sin(a) * d, at[1] - 38 + r() * 62, at[2] - Math.cos(a) * d * 0.9 - 20, 26 + r() * 50], i * 4); D.set([r(), 1.2 + r() * 2.6, 0.5 + r() * 1.4], i * 3);
  }
  const bg = new InstancedBufferGeometry(); bg.setAttribute('position', new Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3)); bg.setIndex([0, 1, 2, 0, 2, 3]);
  bg.setAttribute('aC', new InstancedBufferAttribute(C, 4)); bg.setAttribute('aD', new InstancedBufferAttribute(D, 3)); bg.instanceCount = NM;
  const mm = new Mesh(bg, new ShaderMaterial({ uniforms: { uT: U.uT }, vertexShader: MIST_VS, fragmentShader: MIST_FS, transparent: true, depthWrite: false, fog: false })); mm.frustumCulled = false; mm.renderOrder = 1; out.push(mm);
  return out;
}
