// v2 engine: tiny WebGL. Hemisphere ambient, gritty noise albedo, blob shadows, glow halos, lit Wanderer.
const V = 'attribute vec3 p;uniform vec3 E,G,R,T;uniform vec4 S;uniform float Y;varying vec3 P;varying vec2 Q;void main(){vec3 q=p-vec3(.5,0,.5),w=normalize(G-E),x=normalize(cross(w,vec3(0,1,0)));Q=q.xz*2.;if(S.w==1.&&p.y>.5)q.xz=vec2(0);q.xz=mat2(cos(Y),-sin(Y),sin(Y),cos(Y))*q.xz;P=T+q*S.xyz;if(S.w==2.){P=T+(x*(p.x-.5)+cross(x,w)*(p.y-.5))*S.x;Q=(p.xy-.5)*2.;}vec3 r=P-E;float z=dot(r,w);gl_Position=vec4(dot(r,x)*R.x,dot(r,cross(x,w))*R.y,z*1.0001-.2,z);}';
const F = `#extension GL_OES_standard_derivatives:enable
precision highp float;uniform vec3 E,H,T;uniform vec4 S,C,K[8],L[8];varying vec3 P;varying vec2 Q;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9,78.2)))*43758.5);}
float N(vec2 p){vec2 i=floor(p),f=fract(p);f*=f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
void main(){vec3 d=P-E;float r=length(d),m=C.w,g=m==1.?1.:0.;
if(m==2.){gl_FragColor=vec4(0,0,0,.6*(1.-smoothstep(.2,1.,length((P.xz-T.xz)/S.xz*2.))));return;}
if(m==3.){float a=max(1.-length(Q),0.);gl_FragColor=vec4(C.rgb*a*a*exp(-r*.01),1);return;}
vec3 n=normalize(cross(dFdx(P),dFdy(P))),c=C.rgb,l=mix(vec3(.11,.07,.05),vec3(.07,.1,.2),n.y*.5+.5)+.18*max(dot(n,vec3(.37,.93,.28)),0.);
vec2 u=P.xz+P.y*vec2(3.1,1.7);
if(m<.5)c*=1.+(N(u*4.)*.5+N(u*17.)*.35+N(u*60.)*.4-.62)*1.3*exp(-r*.03);
for(int i=0;i<8;i++){vec3 v=L[i].xyz-P;float a=max(1.-length(v)/L[i].w,0.);l+=K[i].rgb*a*a*max(dot(n,normalize(v)),.2);}
if(m>3.5)l+=.22+vec3(1,.75,.45)*pow(1.-max(dot(n,-normalize(d)),0.),2.)*1.2;
gl_FragColor=vec4(mix(mix(H*1.6,H*.5,smoothstep(0.,.6,d.y/r)),c*mix(l,vec3(1),g),exp(-r*(.018-.014*g))),1);}`;
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.substr(i, 2), 16) / 255);

export async function createEngine(canvas) {
  const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true }), pr = gl.createProgram(), cube = [], err = [];
  let world, view = 'follow', cam, timer;
  gl.getExtension('OES_standard_derivatives');
  [[35633, V], [35632, F]].map(([t, s]) => { const h = gl.createShader(t); gl.shaderSource(h, s); gl.compileShader(h); gl.attachShader(pr, h); gl.getShaderInfoLog(h) && err.push(gl.getShaderInfoLog(h)); });
  gl.linkProgram(pr); gl.useProgram(pr); gl.enable(2929); gl.enable(3042);
  for (const i of '01237150426745') cube.push(i & 1, i >> 1 & 1, i >> 2);
  gl.bindBuffer(34962, gl.createBuffer());
  gl.bufferData(34962, new Float32Array(cube), 35044);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 3, 5126, 0, 0, 0);
  const U = (o) => { for (const s in o) { const n = o[s].length; gl['uniform' + (n < 2 ? 1 : n > 3 ? 4 : 3) + 'fv'](gl.getUniformLocation(pr, s), o[s]); } };
  const fl = (t, i, f) => 1 + f * (.5 * Math.sin(t * 13 + i * 5) + .3 * Math.sin(t * 23 + i * 2.1) + .2 * Math.sin(t * 37 + i));
  const D = () => gl.drawArrays(5, 0, 14);

  function draw(t) {
    const W = (canvas.width = canvas.clientWidth || 960), H = (canvas.height = canvas.clientHeight || 540), sky = rgb(world.sky);
    const { at, facing } = world.avatar, f = (facing * Math.PI) / 180, fw = [Math.sin(f), 0, -Math.cos(f)], rt = [Math.cos(f), 0, Math.sin(f)];
    const [b, r, u, a, y] = view == 'overview' ? [30, 0, 30, 6, 0] : [6.5, 1.3, 3.4, 9, 0.8];
    const e = at.map((v, i) => v - fw[i] * b + rt[i] * r + (i == 1 ? u : 0));
    cam = { position: e, target: at.map((v, i) => v + fw[i] * a + (i == 1 ? y : 0)) };
    const L = [], K = [], Q = [], th = Object.values(world.things), ls = th.filter((x) => x[0] == 'light').slice(0, 8);
    for (let i = 0; i < 8; i++) {
      const [, p, [r, f], c] = ls[i] || [0, [0, 0, 0], [1, 0], '#000000'], q = fl(t, i, f);
      L.push(...p, r); Q.push(q); K.push(...rgb(c).map((v) => v * q * 2.5), 0);
    }
    gl.viewport(0, 0, W, H);
    gl.clear(16640);
    U({ E: e, G: cam.target, R: [1.8 * H / W, 1.8, 0], H: sky, K, L });
    const bk = th.filter((x) => x[0] != 'light');
    const near = (p) => { let m = 1e9, k = -1; ls.map((l, i) => { const d = Math.hypot(l[1][0] - p[0], l[1][1] - p[1], l[1][2] - p[2]); d < m && (m = d, k = i); }); return k; };
    const items = [...bk, [0, at, [0.5, 1.15, 0.35], '#8a6a3e', 0, 4, facing], [0, [at[0], at[1] + 1.15, at[2]], [0.32, 0.36, 0.32], '#d8b088', 0, 4, facing], [0, [0, -1e3, 0], [2e3, 2e3, 2e3], '#000000']];
    world.ground && items.push([0, [0, -1, 0], [3e3, 1, 3e3], world.ground]);
    const P = (p, z, c, m, s, o) => { U({ T: p, S: [...z, s || 0], C: [...c, m || 0], Y: [o || 0] }); D(); };
    gl.blendFunc(770, 771); gl.depthMask(true);
    for (const [s, p, z, c, , g, o] of items) P(p, z, rgb(c), g, +(s == 'cone'), (o || 0) * Math.PI / 180);
    gl.depthMask(false);
    const sh = (p, z) => {
      const k = near(p), l = ls[k] ? ls[k][1] : p, dx = p[0] - l[0], dz = p[2] - l[2], d = Math.hypot(dx, dz) || 1, s = z[1] * .5;
      P([p[0] + dx / d * s, .11, p[2] + dz / d * s], [z[0] + s, .01, z[2] + s], [0, 0, 0], 2);
    };
    for (const [, p, z, , , g] of bk) z[1] > .3 && p[1] < .5 && !g && sh(p, z);
    sh(at, [.8, 1.7, .8]);
    gl.blendFunc(1, 1);
    for (const [, p, z, c, , g] of bk) if (g) { const k = near(p); P([p[0], p[1] + z[1] / 2, p[2]], [Math.max(...z) * (4 + (k < 0 ? 0 : ls[k][2][0] / 6)), 0, 0], rgb(c).map((v) => v * .5 * (k < 0 ? 1 : Q[k])), 3, 2); }
    gl.depthMask(true);
  }

  const stop = () => cancelAnimationFrame(timer), live = () => { draw(performance.now() / 1e3); timer = requestAnimationFrame(live); };
  return {
    modes: ['follow', 'overview'],
    async setWorld(w) { world = w; draw(2); },
    setCamera(m) { view = m; world && draw(2); },
    getCamera: () => cam,
    async renderStill(v) { view = v; draw(2); },
    start: live, stop, dispose: stop,
    resize() { world && draw(2); },
    errors: () => err.splice(0),
  };
}
