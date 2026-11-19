// v1 engine: tiny WebGL. One unit cube drawn per thing; per-pixel lights, fog into a gradient sky.
const V = 'attribute vec3 p;uniform vec3 E,G,R,T;uniform vec4 S;varying vec3 P;void main(){vec3 q=p-vec3(.5,0,.5);if(S.w>0.&&p.y>.5)q.xz=vec2(0);P=T+q*S.xyz;vec3 w=normalize(G-E),x=normalize(cross(w,vec3(0,1,0))),r=P-E;float z=dot(r,w);gl_Position=vec4(dot(r,x)*R.x,dot(r,cross(x,w))*R.y,z*1.0001-.2,z);}';
const F = `#extension GL_OES_standard_derivatives:enable
precision highp float;uniform vec3 E,H;uniform vec4 C,K[4],L[4];varying vec3 P;
void main(){vec3 d=P-E,n=normalize(cross(dFdx(P),dFdy(P))),l=vec3(.1,.11,.17)+.2*max(dot(n,vec3(.37,.93,.28)),0.);float r=length(d),g=C.w;
for(int i=0;i<4;i++){vec3 v=L[i].xyz-P;float a=max(1.-length(v)/L[i].w,0.);l+=K[i].rgb*a*a*max(dot(n,normalize(v)),.2);}
gl_FragColor=vec4(mix(mix(H*1.6,H*.5,smoothstep(0.,.6,d.y/r)),C.rgb*mix(l,vec3(1),g),exp(-r*(.018-.014*g))),1);}`;
const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.substr(i, 2), 16) / 255);

export async function createEngine(canvas) {
  const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true }), pr = gl.createProgram(), cube = [];
  let world, view = 'follow', cam, timer;
  gl.getExtension('OES_standard_derivatives');
  [[35633, V], [35632, F]].map(([t, s]) => { const h = gl.createShader(t); gl.shaderSource(h, s); gl.compileShader(h); gl.attachShader(pr, h); });
  gl.linkProgram(pr); gl.useProgram(pr); gl.enable(2929);
  for (const i of '01237150426745') cube.push(i & 1, i >> 1 & 1, i >> 2);
  gl.bindBuffer(34962, gl.createBuffer());
  gl.bufferData(34962, new Float32Array(cube), 35044);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 3, 5126, 0, 0, 0);
  const U = (o) => { for (const s in o) gl['uniform' + (o[s].length > 3 ? 4 : 3) + 'fv'](gl.getUniformLocation(pr, s), o[s]); };

  function draw(t) {
    const W = (canvas.width = canvas.clientWidth || 960), H = (canvas.height = canvas.clientHeight || 540), sky = rgb(world.sky);
    const { at, facing } = world.avatar, f = (facing * Math.PI) / 180, fw = [Math.sin(f), 0, -Math.cos(f)], rt = [Math.cos(f), 0, Math.sin(f)];
    const [b, r, u, a, y] = view == 'overview' ? [30, 0, 30, 6, 0] : [6.5, 1.3, 3.4, 9, 0.8];
    const e = at.map((v, i) => v - fw[i] * b + rt[i] * r + (i == 1 ? u : 0));
    cam = { position: e, target: at.map((v, i) => v + fw[i] * a + (i == 1 ? y : 0)) };
    const L = [], K = [], th = Object.values(world.things), ls = th.filter((x) => x[0] == 'light');
    for (let i = 0; i < 4; i++) {
      const [, p, [r, fl], c] = ls[i] || [0, [0, 0, 0], [1, 0], '#000000'], q = 1 + fl * Math.sin(t * 13 + i * 5);
      L.push(...p, r); K.push(...rgb(c).map((v) => v * q * 2.5), 0);
    }
    gl.viewport(0, 0, W, H);
    gl.clear(16640);
    U({ E: e, G: cam.target, R: [1.8 * H / W, 1.8, 0], H: sky, K, L });
    const items = [...th.filter((x) => x[0] != 'light'), [0, at, [0.5, 1.4, 0.35], '#b08850'], [0, [at[0], at[1] + 1.4, at[2]], [0.3, 0.3, 0.3], '#e0b890'], [0, [0, -1e3, 0], [2e3, 2e3, 2e3], '#000000']];
    world.ground && items.push([0, [0, -1, 0], [3e3, 1, 3e3], world.ground]);
    for (const [s, p, z, c, , g] of items) { U({ T: p, S: [...z, +(s == 'cone')], C: [...rgb(c), g || 0] }); gl.drawArrays(5, 0, 14); }
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
    errors: () => [],
  };
}
