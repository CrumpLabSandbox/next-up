// k: 0 lit solids, 1 soft blended flats, 2 additive points, 3 sky. c.a on meshes = material (0 lit, 1 emissive, 2 flagstone top, 3 soft disc, 4 blob shadow)
const VS = `attribute vec3 p,n;attribute vec4 c;uniform vec3 P,X,Y,Z;uniform vec4 S;uniform float k;varying vec3 w,N;varying vec4 C;
void main(){float t=S.z,f=S.x,a=n.y*40.,h=fract(t*.5+n.y),s=n.x;vec3 q=p;N=n;C=c;
if(k>2.5){w=Z+(X*p.x*S.y+Y*p.y)/f;gl_Position=vec4(p.xy,0,1);return;}
if(k>1.5){
if(n.z>1.5){q+=vec3(sin(t*.2+a),sin(t*.17+a*1.3)*.6,cos(t*.23+a*.7))*1.5;C.a*=.5+.5*sin(t*1.5+a);}
else if(n.z>.5){q+=vec3(sin(a)*h*.6+sin(t*3.+a)*.1,.3-h*.8,cos(a*1.3)*h*.6);C.a*=(1.-h)*(.6+.4*sin(t*20.+a));}
else s*=1.+.1*sin(t*9.);}
w=q;vec3 d=q-P;float z=dot(d,Z);
gl_Position=vec4(dot(d,X)*f/S.y,dot(d,Y)*f,z*1.0001-.2,z);gl_PointSize=s*400.*S.w/z;}`;
const FS = `precision highp float;uniform vec3 P,H,L,E;uniform vec4 S;uniform float k;varying vec3 w,N;varying vec4 C;
float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
vec3 lt(vec3 n){vec3 l=L-w;return vec3(.42,.48,.75)*(.6+.4*n.y)+E*(.25+max(dot(n,normalize(l)),0.))*4.*(1.+.1*sin(S.z*9.+sin(S.z*3.)*2.))/(1.+dot(l,l)*.03);}
void main(){float t=S.z,m=C.a,a=1.;vec3 o=C.rgb,n=normalize(N),d=w-P;
if(k>2.5){vec3 r=normalize(w),s=r*70.,g=floor(s);float q=h(g.xy+g.z*7.3);
o=mix(H,H*.27,sqrt(max(r.y,0.)));
if(q>.96)o+=smoothstep(.2,0.,length(fract(s)-.5-(vec3(h(g.yz),h(g.zx),h(g.xy))-.5)*.5))*(.5+.5*sin(t*2.+q*99.))*smoothstep(0.,.3,r.y)*vec3(.8,.85,1.);
gl_FragColor=vec4(o,1);return;}
float f=exp(-length(d)*.025/(1.+max(P.y-4.,0.)*.1));
if(k>1.5){gl_FragColor=vec4(o,C.a*f*pow(max(1.-length(gl_PointCoord-.5)*2.,0.),2.));return;}
if(k>.5){float r=length(N.xz);
if(m>3.5){a=.55*smoothstep(1.,0.,r)*f;o=vec3(0);}else{a=smoothstep(1.,.5,r);o=mix(H,o*lt(vec3(0,1,0)),f);}
gl_FragColor=vec4(o,a);return;}
float s=0.;
if(m>1.5&&n.y>.5){vec2 g=w.xz/vec2(1.,1.5);g.x+=.5*mod(floor(g.y),2.);vec2 e=(.5-abs(fract(g)-.5))*vec2(1.,1.5);
o*=.8+.4*h(floor(g));s=smoothstep(.05,0.,min(e.x,e.y))*(.7+.3*sin(t*2.+w.z*.6));}
o=m>.5&&m<1.5?o*(1.2+.1*sin(t*9.)):o*lt(n)+s*vec3(.4,.55,.7);
gl_FragColor=vec4(mix(H,o,f),1);}`;

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const nm = (a) => a.map((x) => x / Math.hypot(...a));
const sub = (a, b) => a.map((x, i) => x - b[i]);
const PI = Math.PI;

function tri(o, a, b, e, c, m, C, ns) {
  if (!ns) {
    const u = sub(b, a), v = sub(e, a), n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    if (Math.hypot(...n) < 1e-6) return;
    const s = n.reduce((t, q, i) => t + q * (a[i] - C[i]), 0) < 0 ? -1 : 1;
    ns = [0, 0, 0].map(() => n.map((q) => q * s));
  }
  [a, b, e].map((p, i) => o.push(...p, ...ns[i], ...c, m));
}

function flat(o, x, y, z, rx, rz, c, m) {
  for (const [u, v] of [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]]) o.push(x + u * rx, y, z + v * rz, u, 0, v, ...c, m);
}

function mesh(s, [x, y, z], [w, h, d], c, m) {
  const o = [], C = [x, y + h * 0.3, z], T = (a, b, e, n) => tri(o, a, b, e, c, m, C, n);
  w /= 2; d /= 2;
  if (s == 'cone') {
    const R = (i) => [x + Math.cos((i * PI) / 6) * w, y, z + Math.sin((i * PI) / 6) * d], N = (i) => [Math.cos((i * PI) / 6), 0.5, Math.sin((i * PI) / 6)], D = [0, -1, 0];
    for (let i = 0; i < 12; i++) T(R(i), R(i + 1), [x, y + h, z], [N(i), N(i + 1), N(i + 0.5)]), T(R(i), R(i + 1), [x, y, z], [D, D, D]);
  } else if (s == 'ball') {
    const S = (i, j) => [Math.sin((i * PI) / 8) * Math.cos((j * PI) / 6), Math.cos((i * PI) / 8), Math.sin((i * PI) / 8) * Math.sin((j * PI) / 6)];
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 12; j++) {
        const u = [S(i, j), S(i + 1, j), S(i + 1, j + 1), S(i, j + 1)], p = u.map((v) => [x + v[0] * w, y + h / 2 + (v[1] * h) / 2, z + v[2] * d]);
        T(p[0], p[1], p[2], [u[0], u[1], u[2]]); T(p[0], p[2], p[3], [u[0], u[2], u[3]]);
      }
  } else {
    let P = [...Array(8)].map((_, i) => [x + (i & 1 ? w : -w), y + (i & 2 ? h : 0), z + (i & 4 ? d : -d)]);
    if (s == 'ramp') P = P.map((p, i) => (i & 4 ? p : [p[0], y, p[2]]));
    for (const f of [[0, 1, 3, 2], [4, 5, 7, 6], [0, 1, 5, 4], [2, 3, 7, 6], [0, 2, 6, 4], [1, 3, 7, 5]]) T(P[f[0]], P[f[1]], P[f[2]]), T(P[f[0]], P[f[2]], P[f[3]]);
  }
  return o;
}

export async function createEngine(cv) {
  const gl = cv.getContext('webgl'), pr = gl.createProgram(), E = [];
  [VS, FS].map((s, i) => { const h = gl.createShader(35633 - i); gl.shaderSource(h, s); gl.compileShader(h); gl.attachShader(pr, h); gl.getShaderParameter(h, 35713) || E.push(gl.getShaderInfoLog(h)); });
  gl.linkProgram(pr); gl.useProgram(pr); gl.bindBuffer(34962, gl.createBuffer());
  [...'pnc'].map((a, i) => { const l = gl.getAttribLocation(pr, a); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, i < 2 ? 3 : 4, 5126, 0, 40, i * 12); });
  gl.enable(3042); gl.enable(2929); gl.depthFunc(515);
  const u = (n, ...v) => gl['uniform' + v.length + 'f'](gl.getUniformLocation(pr, n), ...v), s = () => cancelAnimationFrame(raf);
  let w, view = 'follow', cam, n, L, Lc, B, raf;

  function draw(t = 2) {
    if (!w) return;
    const W = cv.clientWidth || cv.width, H = cv.clientHeight || cv.height, { at, facing } = w.avatar, f = (facing * PI) / 180;
    if (cv.width != W || cv.height != H) (cv.width = W), (cv.height = H);
    const fw = [Math.sin(f), 0, -Math.cos(f)], rt = [-fw[2], 0, fw[0]];
    cam = view == 'overview'
      ? { position: [B.c[0] - fw[0] * B.r, B.r * 0.9, B.c[2] - fw[2] * B.r], target: [B.c[0], 0, B.c[2]] }
      : { position: at.map((a, i) => a - fw[i] * 6.5 + rt[i] * 1.3 + (i == 1) * 3.4), target: at.map((a, i) => a + fw[i] * 9 + (i == 1) * 0.8) };
    const P = cam.position.map((a, i) => a + [Math.sin(t * 0.4) * 0.1, Math.sin(t * 0.31) * 0.07, Math.cos(t * 0.37) * 0.1][i]),
      z = nm(cam.target.map((a, i) => a + [Math.cos(t * 0.3) * 0.12, Math.sin(t * 0.23) * 0.08, 0][i] - P[i])),
      x = nm([-z[2], 0, z[0]]), y = [-x[2] * z[1], x[2] * z[0] - x[0] * z[2], x[0] * z[1]];
    gl.viewport(0, 0, W, H);
    gl.clear(16640);
    u('P', ...P); u('X', ...x); u('Y', ...y); u('Z', ...z); u('H', ...rgb(w.sky || '#2a2a4a')); u('L', ...L); u('E', ...Lc); u('S', 1.8, W / H, t, H / 720);
    gl.disable(2929); gl.depthMask(0); gl.blendFunc(770, 771);
    u('k', 3); gl.drawArrays(4, 0, 6);
    gl.enable(2929);
    u('k', 0); gl.drawArrays(4, 6, n[0]);
    gl.depthMask(1);
    gl.drawArrays(4, 6 + n[0], n[1]);
    gl.depthMask(0);
    u('k', 1); gl.drawArrays(4, 6 + n[0] + n[1], n[2]);
    gl.blendFunc(770, 1); u('k', 2); gl.drawArrays(0, 6 + n[0] + n[1] + n[2], n[3]);
    gl.depthMask(1);
  }

  return {
    modes: ['follow', 'overview'],
    setWorld(W) {
      w = W;
      const G = mesh('box', [0, -1, 0], [800, 1, 800], rgb(w.ground || '#12121c'), 0), A = [], F = [], P = [], { at } = w.avatar,
        th = Object.values(w.things), lt = th.filter((t) => t[5] == 1).pop(), X = [at[0], at[0]], Z = [at[2], at[2]];
      L = lt ? [lt[1][0], lt[1][1] + lt[2][1] / 2, lt[1][2]] : [0, 1e4, 0];
      Lc = lt ? rgb(lt[3]) : [0, 0, 0];
      for (const [s, p, z, c, , g] of [...th, ['cone', [at[0], 0, at[2]], [0.62, 1.5, 0.5], '#7a5a35'], ['ball', [at[0], 1.35, at[2]], [0.3, 0.32, 0.3], '#8a6a40']]) {
        const col = rgb(c), r = Math.max(z[0], z[2]) / 2;
        X[0] = Math.min(X[0], p[0] - r); X[1] = Math.max(X[1], p[0] + r); Z[0] = Math.min(Z[0], p[2] - r); Z[1] = Math.max(Z[1], p[2] + r);
        if (s == 'disc') { flat(F, p[0], p[1] + 0.02, p[2], z[0] / 2, z[2] / 2, col, 3); continue; }
        const lo = z[1] < 0.3 && s == 'box';
        A.push(...mesh(s, p, z, col, g ? 1 : lo ? 2 : 0));
        if (!g && !lo && p[1] < 0.5) {
          const dx = p[0] - L[0], dz = p[2] - L[2], l = Math.hypot(dx, dz) + 1e-3;
          flat(F, p[0] + (dx / l) * 0.2, p[1] + 0.06, p[2] + (dz / l) * 0.2, r * 1.5 + 0.15, r * 1.5 + 0.15, [0, 0, 0], 4);
        }
        if (g) {
          const q = [p[0], p[1] + z[1] / 2, p[2]];
          P.push(...q, g == 1 ? 2.5 : 1, 0, 0, ...col, 0.8);
          for (let i = 0; i < 10; i++) P.push(...q, 0.12, (i + 0.5) / 10, 1, ...col, 1);
        }
      }
      for (let i = 0; i < 24; i++) P.push(at[0] + Math.sin(i * 13) * 12, 3 + Math.sin(i * 29) * 2.5, at[2] + Math.sin(i * 47) * 12, 0.06, i * 0.37 + 0.1, 2, 0.54, 0.54, 0.58, 0.7);
      B = { c: [(X[0] + X[1]) / 2, 0, (Z[0] + Z[1]) / 2], r: Math.max(10, Math.hypot(X[1] - X[0], Z[1] - Z[0]) * 0.5 + 3) };
      gl.bufferData(34962, new Float32Array([...[[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]].flatMap(([a, b]) => [a, b, 0, 0, 0, 0, 0, 0, 0, 0]), ...G, ...A, ...F, ...P]), 35044);
      n = [G.length / 10, A.length / 10, F.length / 10, P.length / 10];
      draw();
    },
    setCamera(m) { view = m; draw(); },
    getCamera: () => cam,
    renderStill(v) { view = v; draw(); },
    start() { raf = requestAnimationFrame(function l(ms) { draw(ms / 1e3); raf = requestAnimationFrame(l); }); },
    stop: s,
    dispose: s,
    resize() { draw(); },
    errors: () => E.splice(0),
  };
}
