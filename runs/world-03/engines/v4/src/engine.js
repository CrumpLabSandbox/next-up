// k: 0 lit solids, 1 soft discs, 2 additive points, 3 sky, 4 post (bloom), 5 shadow depth. c.a on meshes = material (0 stone, 1 emissive, 2 flagstone top, 3 soft disc, 5 terrain)
// two shadow maps: J0 = moon (ortho), J1 = lantern (perspective). Light basis: Lr,Lu (scaled right/up), Lf forward, Lo origin, Lq = (far, perspective)
const VS = `attribute vec3 p,n;attribute vec4 c;uniform vec3 P,X,Y,Z,Lr[2],Lu[2],Lf[2],Lo[2];uniform vec2 Lq[2];uniform vec4 S;uniform float k,J;varying vec3 w,N;varying vec4 C;
void main(){float t=S.z,f=S.x,a=n.y*40.,h=fract(t*.5+n.y),s=n.x;vec3 q=p;N=n;C=c;
if(k>4.5){int j=int(J);vec3 d=p-Lo[j];float z=dot(d,Lf[j]),y=mix(1.,z,Lq[j].y);w=p;C=vec4(z/Lq[j].x,0,0,0);gl_Position=vec4(dot(d,Lr[j]),dot(d,Lu[j]),(z/Lq[j].x*2.-1.)*y,y);return;}
if(k>2.5){w=Z+(X*p.x*S.y+Y*p.y)/f;gl_Position=vec4(p.xy,0,1);return;}
if(k>1.5){
if(n.z>1.5){q+=vec3(sin(t*.2+a),sin(t*.17+a*1.3)*.6,cos(t*.23+a*.7))*1.5;C.a*=.5+.5*sin(t*1.5+a);}
else if(n.z>.5){q+=vec3(sin(a)*h*.6+sin(t*3.+a)*.1,.3-h*.8,cos(a*1.3)*h*.6);C.a*=(1.-h)*(.6+.4*sin(t*20.+a));}
else s*=1.+.1*sin(t*9.);}
w=q;vec3 d=q-P;float z=dot(d,Z);
gl_Position=vec4(dot(d,X)*f/S.y,dot(d,Y)*f,z*1.0001-.2,z);gl_PointSize=s*400.*S.w/z;}`;
const FS = `precision highp float;uniform vec3 P,H,L,E,G,Md,Lr[2],Lu[2],Lf[2],Lo[2];uniform vec2 Lq[2];uniform vec4 S;uniform float k;uniform vec3 Q[3],Qc[3];uniform sampler2D D0,D1,T;varying vec3 w,N;varying vec4 C;
const vec3 MS=vec3(.3,.2,-.933)/1.00024;
float h(vec2 g){return fract(sin(dot(g,vec2(12.9,78.2)))*43758.5);}
float vn(vec3 p){return .5+.5*sin(dot(p,vec3(1.7,2.3,1.1))+sin(dot(p,vec3(2.9,.7,3.1)))*2.+sin(dot(p,vec3(.6,3.3,2.7)))*1.3);}
vec2 SH(){vec2 r=vec2(1);for(int i=0;i<2;i++){vec3 d=w-Lo[i];float z=dot(d,Lf[i]),y=mix(1.,z,Lq[i].y);vec2 u=vec2(dot(d,Lr[i]),dot(d,Lu[i]))/y*.5+.5;
if(z>0.&&u.x>.02&&u.x<.98&&u.y>.02&&u.y<.98){float v=0.;for(int j=0;j<4;j++){vec2 q=u+vec2(cos(float(j)*1.57+.8),sin(float(j)*1.57+.8))*.8/1024.;vec4 c=i<1?texture2D(D0,q):texture2D(D1,q);v+=step(z/Lq[i].x-.0012,c.r+c.g/255.);}r[i]=smoothstep(.2,.8,v/4.);}}return r;}
vec3 lt(vec3 n,vec2 s){vec3 l=L-w;return vec3(.3,.36,.6)*(.55+.45*n.y)+vec3(.5,.72,1.2)*.62*max(dot(n,Md),0.)*s.x+E*(.15+max(dot(n,normalize(l)),0.)*s.y)*4.*(1.+.1*sin(S.z*9.+sin(S.z*3.)*2.))/(1.+dot(l,l)*.03);}
float tx(float k,float c){vec3 d=w-P;float a=exp(-k*w.y),b=exp(-k*P.y),y=P.y-w.y;return c*length(d)*(abs(y)>.02?(a-b)/(k*y):a);}
float ff(){float t=S.z,m=.3+1.4*(vn(vec3(w.x*.12+t*.03,w.y*.5,w.z*.12))*.6+vn(vec3(w.x*.3,w.y,w.z*.3-t*.05))*.4);return exp(-length(w-P)*.012/(1.+max(P.y-4.,0.)*.1)-tx(1.1,.1*m)-tx(.2,.01));}
vec3 mc(){vec3 l=L-w,g=G-w;return H*.8+E*.3/(1.+dot(l,l)*.02)+vec3(.15,.3,.7)*.3/(1.+dot(g,g)*.004)+vec3(.1,.2,.4)*.12*pow(max(dot(normalize(w-P),Md),0.),4.);}
vec3 LQ(vec3 b){float t=S.z;vec2 q=w.xz*14.;vec2 g=vec2(cos(q.x+t*1.8)+cos(q.x*.5+q.y*.8-t*1.3),cos(q.y+t*1.5)+cos(q.y*.6-q.x*.7+t*1.1))*.07;
vec3 n=normalize(vec3(g.x,1,g.y)),v=normalize(P-w),r=reflect(-v,n);float fr=pow(1.-max(dot(n,v),0.),3.);
vec3 s=mix(H,H*.27,sqrt(max(r.y,0.)))*1.5+pow(max(dot(r,MS),0.),150.)*vec3(.8,.9,1.5)*3.;
return b*(.5+.3*(g.x+g.y))+s*(.15+.9*fr)+b*fr*.35;}
void main(){float t=S.z,m=C.a,a=1.;vec3 o=C.rgb,n=normalize(N),d=w-P;
if(k>4.5){float e=C.x*255.;gl_FragColor=vec4(floor(e)/255.,fract(e),0,1);return;}
if(k>3.5){vec2 u=N.xy;o=texture2D(T,u).rgb;vec3 b=vec3(0);for(int i=0;i<16;i++){float a=float(i)*2.4,r=sqrt(float(i)+.5)*.016;b+=max(texture2D(T,u+vec2(cos(a)/S.y,sin(a))*r).rgb-.68,0.);}
o+=b*vec3(.8,.95,1.3)*.13;vec3 sh=vec3(0);
for(int j=0;j<3;j++){vec3 q=Q[j];if(q.z>0.){vec2 dl=q.xy-u,uu=u,st=dl/14.;float ln=length(dl*vec2(S.y,1.)),s=0.;for(int i=0;i<14;i++){uu+=st;s+=max(dot(texture2D(T,uu).rgb,vec3(.33))-.55,0.)*(1.-float(i)/14.);}
sh+=Qc[j]*q.z*(s*.09*(.75+.25*sin(atan(dl.y,dl.x*S.y)*22.+t*.4))+.07*exp(-ln*ln*30.));}}
o+=sh;float l=dot(o,vec3(.33));o=mix(o*vec3(.78,.98,1.12),o*vec3(1.14,1.,.82),smoothstep(.12,.75,l));o*=1.-1.25*dot(u-.5,u-.5);gl_FragColor=vec4(o,1);return;}
if(k>2.5){vec3 r=normalize(w),s=r*70.,g=floor(s);float q=h(g.xy+g.z*7.3);
o=mix(H,H*.27,sqrt(max(r.y,0.)));float md=dot(r,MS);o+=vec3(.5,.62,.95)*(pow(max(md,0.),40.)*.35+pow(max(md,0.),600.)*.5)+vec3(.9,.95,1.1)*smoothstep(.9991,.9993,md)*2.2;
if(q>.96)o+=smoothstep(.2,0.,length(fract(s)-.5-(vec3(h(g.yz),h(g.zx),h(g.xy))-.5)*.5))*(.5+.5*sin(t*2.+q*99.))*smoothstep(0.,.3,r.y)*vec3(.8,.85,1.);
gl_FragColor=vec4(o,1);return;}
float f=ff();
if(k>1.5){gl_FragColor=vec4(o,C.a*f*pow(max(1.-length(gl_PointCoord-.5)*2.,0.),2.));return;}
vec2 s=SH();
if(k>.5){float e=smoothstep(1.,.5,length(N.xz));if(m>6.5){gl_FragColor=vec4(0,0,.01,.6*e*f);return;}
if(m>5.5){gl_FragColor=vec4(mix(mc(),LQ(o),f),e*.92);return;}
gl_FragColor=vec4(mix(mc(),o*lt(vec3(0,1,0),s),f),e);return;}
vec3 g=n;float q=0.,r=m>5.5?0.:m>4.5?6.:m>1.5?14.:m<.5?10.:0.;
if(r>0.){n=normalize(n+(vec3(vn(w*r),vn(w*r+7.3),vn(w*r+13.1))-.5)*.8);o*=.8+.4*vn(w*r*1.3);
if(m<.5){float cr=smoothstep(.035,0.,abs(vn(w*3.1+vn(w*9.)*.3)-.5)),ch=smoothstep(.9,.97,vn(w*24.));n=normalize(n+(vec3(vn(w*31.),vn(w*31.+5.),vn(w*31.+9.))-.5)*(cr+ch)*2.);o*=1.-.55*cr;o+=ch*.07;o*=.45+.55*smoothstep(0.,.7,w.y+.1);}}
if(m>1.5&&m<2.5&&g.y>.5){vec2 u=w.xz/vec2(1.,1.5);u.x+=.5*mod(floor(u.y),2.);vec2 e=(.5-abs(fract(u)-.5))*vec2(1.,1.5);float z=min(e.x,e.y);
o*=.85+.3*h(floor(u));q=exp(-length(d)*.03)*(smoothstep(.025,0.,z)*.9+smoothstep(.12,0.,z)*.2)*(.35+.65*pow(.5+.5*sin(w.z*.6+t*2.2),2.));}
if(m>5.5)o=LQ(o);else if(m>.5&&m<1.5)o*=1.5+.25*sin(t*9.+w.x+w.z);
else{o=o*lt(n,s)*(m>4.5?1.2:m>1.5?1.5:1.)+q*vec3(.4,.6,.9)*1.5;if(m<.5)o+=pow(1.-max(dot(g,normalize(-d)),0.),3.)*vec3(.4,.6,1.)*.6;}
gl_FragColor=vec4(mix(mc(),o,f),1);}`;

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const nm = (a) => a.map((x) => x / Math.hypot(...a));
const sub = (a, b) => a.map((x, i) => x - b[i]);
const PI = Math.PI, MD = nm([0.55, 0.55, -0.4]);
const sm = (a, b, x) => ((x = Math.min(1, Math.max(0, (x - a) / (b - a)))), x * x * (3 - 2 * x));
const bs = (z) => { const x = nm([-z[2], 0, z[0]]); return [x, [-x[2] * z[1], x[2] * z[0] - x[0] * z[2], x[0] * z[1]]]; };

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
    const R = (i) => [x + Math.cos((i * PI) / 8) * w, y, z + Math.sin((i * PI) / 8) * d], N = (i) => [Math.cos((i * PI) / 8), 0.5, Math.sin((i * PI) / 8)], D = [0, -1, 0];
    for (let i = 0; i < 16; i++) T(R(i), R(i + 1), [x, y + h, z], [N(i), N(i + 1), N(i + 0.5)]), T(R(i), R(i + 1), [x, y, z], [D, D, D]);
  } else if (s == 'ball') {
    const S = (i, j) => [Math.sin((i * PI) / 10) * Math.cos((j * PI) / 8), Math.cos((i * PI) / 10), Math.sin((i * PI) / 10) * Math.sin((j * PI) / 8)];
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 16; j++) {
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

// heightfield: dunes + grit, flat (0) near anything placed, tapering to 0 at the grid edge. fp = footprints [x, z, rx, rz]
function terrain(X, Z, fp, c) {
  const o = [], M = 60, x0 = X[0] - M, z0 = Z[0] - M, nx = Math.ceil((X[1] + M - x0) / 2), nz = Math.ceil((Z[1] + M - z0) / 2), H = [];
  for (let j = 0; j <= nz; j++)
    for (let i = 0; i <= nx; i++) {
      const x = x0 + i * 2, z = z0 + j * 2, d = Math.min(...fp.map(([a, b, r, s]) => Math.hypot(Math.max(Math.abs(x - a) - r, 0), Math.max(Math.abs(z - b) - s, 0))));
      H.push((Math.sin(x * 0.27 + Math.sin(z * 0.17) * 2) * 0.5 + Math.sin(z * 0.23 - x * 0.12 + 1) * 0.4 + Math.sin(x * 0.7 + z * 0.6) * 0.08 + Math.sin(x * 1.3 - z * 1.1) * 0.04) * (1 + 1.6 * sm(10, 50, d)) * sm(2.5, 9, d) * sm(0, 30, Math.min(i, nx - i, j, nz - j) * 2));
    }
  const g = (i, j) => H[Math.min(nz, Math.max(0, j)) * (nx + 1) + Math.min(nx, Math.max(0, i))], v = (i, j) => [x0 + i * 2, g(i, j), z0 + j * 2, ...nm([g(i - 1, j) - g(i + 1, j), 4, g(i, j - 1) - g(i, j + 1)])];
  for (let j = 0; j < nz; j++)
    for (let i = 0; i < nx; i++)
      for (const [a, b] of [[0, 0], [1, 0], [1, 1], [0, 0], [1, 1], [0, 1]]) { const q = v(i + a, j + b); o.push(q[0], q[1], q[2], q[3], q[4], q[5], ...c, 5); }
  return o;
}

export async function createEngine(cv) {
  const gl = cv.getContext('webgl'), pr = gl.createProgram(), E = [];
  [VS, FS].map((s, i) => { const h = gl.createShader(35633 - i); gl.shaderSource(h, s); gl.compileShader(h); gl.attachShader(pr, h); gl.getShaderParameter(h, 35713) || E.push(gl.getShaderInfoLog(h)); });
  gl.linkProgram(pr); gl.useProgram(pr); gl.bindBuffer(34962, gl.createBuffer());
  [...'pnc'].map((a, i) => { const l = gl.getAttribLocation(pr, a); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, i < 2 ? 3 : 4, 5126, 0, 40, i * 12); });
  gl.depthFunc(515);
  const loc = (n) => gl.getUniformLocation(pr, n), u = (n, ...v) => gl['uniform' + v.length + 'f'](loc(n), ...v), s = () => cancelAnimationFrame(raf),
    bt = (i, t) => (gl.activeTexture(33984 + i), gl.bindTexture(3553, t)),
    mk = (W, H, f, tex, rb, fbo) => {
      bt(3, tex); gl.texImage2D(3553, 0, 6408, W, H, 0, 6408, 5121, null);
      [[10240, f], [10241, f], [10242, 33071], [10243, 33071]].map(([a, b]) => gl.texParameteri(3553, a, b));
      gl.bindRenderbuffer(36161, rb); gl.renderbufferStorage(36161, 33189, W, H);
      gl.bindFramebuffer(36160, fbo); gl.framebufferTexture2D(36160, 36064, 3553, tex, 0); gl.framebufferRenderbuffer(36160, 36096, 36161, rb);
    },
    mkn = () => [gl.createTexture(), gl.createRenderbuffer(), gl.createFramebuffer()],
    SM = [mkn(), mkn()], SC = mkn(), Q = 1024;
  SM.map((a) => mk(Q, Q, 9728, ...a));
  ['D0', 'D1', 'T'].map((n, i) => gl.uniform1i(loc(n), i));
  let LS = [], w, view = 'follow', cam, n, L, Lc, B, raf, sw = 0, sh = 0, lg;

  function draw(t = 2) {
    if (!w) return;
    const W = cv.clientWidth || cv.width, H = cv.clientHeight || cv.height, { at, facing } = w.avatar, f = (facing * PI) / 180;
    if (cv.width != W || cv.height != H) (cv.width = W), (cv.height = H);
    if (sw != W || sh != H) mk((sw = W), (sh = H), 9729, ...SC);
    const fw = [Math.sin(f), 0, -Math.cos(f)], rt = [-fw[2], 0, fw[0]];
    cam = view == 'overview'
      ? { position: [B.c[0] - fw[0] * B.r, B.r * 0.9, B.c[2] - fw[2] * B.r], target: [B.c[0], 0, B.c[2]] }
      : { position: at.map((a, i) => a - fw[i] * 6.5 + rt[i] * 1.3 + (i == 1) * 3.4), target: at.map((a, i) => a + fw[i] * 9 + (i == 1) * 0.8) };
    const P = cam.position.map((a, i) => a + [Math.sin(t * 0.4) * 0.1, Math.sin(t * 0.31) * 0.07, Math.cos(t * 0.37) * 0.1][i]),
      z = nm(cam.target.map((a, i) => a + [Math.cos(t * 0.3) * 0.12, Math.sin(t * 0.23) * 0.08, 0][i] - P[i])),
      [x, y] = bs(z);
    u('P', ...P); u('X', ...x); u('Y', ...y); u('Z', ...z); u('H', ...rgb(w.sky || '#2a2a4a')); u('L', ...L); u('E', ...Lc); u('S', 1.8, W / H, t, H / 720);
    u('G', ...lg); u('Md', ...MD);
    for (const [k, a] of Object.entries(lg.l)) gl['uniform' + (k[1] == 'q' ? 2 : 3) + 'fv'](loc(k), a);
    const qa = [], qc = [];
    for (const [p, c] of LS) {
      const d = p ? sub(p, P) : [0, 0, 0], z0 = p ? d.reduce((s, v, i) => s + v * z[i], 0) : 0, nx = d.reduce((s, v, i) => s + v * x[i], 0) * 1.8 / (W / H) / z0, ny = d.reduce((s, v, i) => s + v * y[i], 0) * 1.8 / z0;
      qa.push(nx / 2 + 0.5, ny / 2 + 0.5, p && z0 > 0.5 && c ? sm(1.8, 0.8, Math.hypot(nx, ny)) * Math.min(1, 50 / z0 + 0.35) : 0); qc.push(...(c || [0, 0, 0]));
    }
    gl.uniform3fv(loc('Q'), qa); gl.uniform3fv(loc('Qc'), qc);
    gl.disable(3042); gl.enable(2929); gl.depthMask(1); u('k', 5);
    bt(0, null); bt(1, null);
    SM.map((a, i) => { gl.bindFramebuffer(36160, a[2]); gl.viewport(0, 0, Q, Q); gl.clearColor(1, 0, 0, 1); gl.clear(16640); u('J', i); gl.drawArrays(4, 6, n[0]); });
    bt(0, SM[0][0]); bt(1, SM[1][0]); bt(2, null);
    gl.bindFramebuffer(36160, SC[2]); gl.viewport(0, 0, W, H); gl.clearColor(0, 0, 0, 1);
    gl.clear(16640);
    gl.disable(2929); gl.depthMask(0); gl.enable(3042); gl.blendFunc(770, 771);
    u('k', 3); gl.drawArrays(4, 0, 6);
    gl.enable(2929); gl.depthMask(1);
    u('k', 0); gl.drawArrays(4, 6, n[0] + n[1] + n[2]);
    gl.depthMask(0);
    u('k', 1); gl.drawArrays(4, 6 + n[0] + n[1] + n[2], n[3]);
    gl.blendFunc(770, 1); u('k', 2); gl.drawArrays(0, 6 + n[0] + n[1] + n[2] + n[3], n[4]);
    gl.bindFramebuffer(36160, null); gl.viewport(0, 0, W, H); gl.disable(2929); gl.disable(3042); bt(2, SC[0]);
    u('k', 4); gl.drawArrays(4, 0, 6);
    gl.depthMask(1);
  }

  return {
    modes: ['follow', 'overview'],
    setWorld(W) {
      w = W;
      const G = mesh('box', [0, -1.02, 0], [800, 1, 800], rgb(w.ground || '#12121c'), 5), A = [], M = [], F = [], P = [], { at } = w.avatar,
        th = Object.values(w.things), lt = th.filter((t) => t[5] == 1).pop(), X = [at[0], at[0]], Z = [at[2], at[2]], fp = [[at[0], at[2], 0.5, 0.5]], N0 = [0], gl2 = th.filter((t) => t[5] == 2);
      L = lt ? [lt[1][0], lt[1][1] + lt[2][1] / 2, lt[1][2]] : [0, 1e4, 0];
      Lc = lt ? rgb(lt[3]) : [0, 0, 0];
      const big = (c) => gl2.filter(c).sort((a, b) => b[2][0] * b[2][1] * b[2][2] - a[2][0] * a[2][1] * a[2][2])[0], ctr = (t) => t && [t[1][0], t[1][1] + t[2][1] / 2, t[1][2]];
      LS = [[L, lt && [1, 0.75, 0.4]], [ctr(big((t) => t[0] == 'ball' && rgb(t[3])[2] > rgb(t[3])[0])), [0.7, 0.9, 1.3]], [ctr(big((t) => t[0] == 'ball' && rgb(t[3])[0] - rgb(t[3])[2] > 0.3)), [1, 0.7, 0.35]]];
      lg = gl2.length ? gl2.reduce((a, t) => a.map((v, i) => v + t[1][i] / gl2.length), [0, 0, 0]) : [0, 1e4, 0];
      for (let [s, p, z, c, , g] of [...th, ['ball', [at[0], 0, at[2]], [0.64, 1.5, 0.52], '#7a5a35'], ['ball', [at[0], 1.4, at[2]], [0.3, 0.32, 0.3], '#8a6a40']]) {
        const col = rgb(c), r = Math.max(z[0], z[2]) / 2;
        X[0] = Math.min(X[0], p[0] - r); X[1] = Math.max(X[1], p[0] + r); Z[0] = Math.min(Z[0], p[2] - r); Z[1] = Math.max(Z[1], p[2] + r);
        p[1] < 1 && fp.push([p[0], p[2], z[0] / 2, z[2] / 2]);
        if (s == 'disc') { flat(F, p[0], p[1] + 0.02, p[2], z[0] / 2, z[2] / 2, col, g == 2 ? 6 : 3); continue; }
        const lq = g == 2 && s == 'box' && z[1] < 0.15 && z[0] > 0.4 && z[2] > 0.4;
        if (!g && p[1] >= 0 && p[1] < 0.3 && s != 'ramp' && z[1] >= 0.12 && z[0] + z[2] < 12 && N0[0]++ < 80) flat(F, p[0], 0.025, p[2], z[0] * 0.5 + 0.5, z[2] * 0.5 + 0.5, [0, 0, 0], 7);
        if (g && !lq && s == 'box' && z[1] < 0.15) z = [z[0] < z[2] ? z[0] * 0.4 : z[0], z[1] * 0.5, z[2] <= z[0] ? z[2] * 0.4 : z[2]];
        (g ? M : A).push(...mesh(s, p, z, col, lq ? 6 : g ? 1 : z[1] < 0.12 && s == 'box' ? 2 : 0));
        if (g) {
          const q = [p[0], p[1] + z[1] / 2, p[2]];
          P.push(...q, g == 1 ? 2.5 : 1, 0, 0, ...col, 0.8);
          for (let i = 0; i < 22; i++) P.push(...q, 0.12, (i + 0.5) / 22, 1, ...col, 1);
        }
      }
      for (let i = 0; i < 70; i++) P.push(at[0] + Math.sin(i * 13) * 12, 3 + Math.sin(i * 29) * 2.5, at[2] + Math.sin(i * 47) * 12, 0.06, i * 0.37 + 0.1, 2, 0.54, 0.54, 0.58, 0.7);
      B = { c: [(X[0] + X[1]) / 2, 0, (Z[0] + Z[1]) / 2], r: Math.max(10, Math.hypot(X[1] - X[0], Z[1] - Z[0]) * 0.5 + 3) };
      const T = [...G, ...terrain(X, Z, fp, rgb(w.ground || '#12121c'))];
      // light bases: moon (ortho, shining down on the world's bounds), lantern (wide perspective aimed along the world)
      const mf = MD.map((v) => -v),lf = nm([B.c[0] - L[0], -L[1] - 0.5, B.c[2] - L[2]]), hf = Math.max(16, B.r * 0.9),
        LL = [[B.c, mf, hf, hf * 2.4, 0], [L, lf, 1.5, 70, 1]].map(([o, f, h, F, q]) => {
          const [r, up] = bs(f), O = q ? o : o.map((v, i) => v - f[i] * hf * 1.2);
          return [r.map((v) => v / h), up.map((v) => v / h), f, O, [F, q]];
        });
      lg = Object.assign(lg, { l: { Lr: LL.flatMap((a) => a[0]), Lu: LL.flatMap((a) => a[1]), Lf: LL.flatMap((a) => a[2]), Lo: LL.flatMap((a) => a[3]), Lq: LL.flatMap((a) => a[4]) } });
      gl.bufferData(34962, new Float32Array([...[[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]].flatMap(([a, b]) => [a, b, 0, (a + 1) / 2, (b + 1) / 2, 0, 0, 0, 0, 0]), ...A, ...M, ...T, ...F, ...P]), 35044);
      n = [A.length / 10, M.length / 10, T.length / 10, F.length / 10, P.length / 10];
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
