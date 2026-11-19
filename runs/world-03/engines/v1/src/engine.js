const VS = `attribute vec3 p,n;attribute vec4 c;uniform mat4 m;uniform vec4 L;uniform float k;varying vec4 v;varying vec2 u;
void main(){vec3 q=p,l=L.xyz-p,o=c.rgb;float F=1.+.15*sin(L.w*9.);u=vec2(0);
if(k>0.){q+=sin(L.w*.3+p.zxy*5.)*.5;o*=F;}
else if(n.y>1.)o*=n.x==0.?F+.5:.6,u=n.xz;
else o*=.3+max(dot(n,normalize(l)),0.)*1.6/(1.+dot(l,l)*.002);
gl_Position=m*vec4(q,1.);gl_PointSize=n.x*400./gl_Position.w;
v=vec4(o,c.a*exp(-gl_Position.w*.03*(1.-k)));}`;
const FS = `precision highp float;varying vec4 v;varying vec2 u;uniform float k;
void main(){float a=v.a*max(0.,1.-length(k>0.?(gl_PointCoord-.5)*2.:u));
gl_FragColor=vec4(v.rgb,a*1.8);}`;

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const nm = (a) => a.map((x) => x / Math.hypot(...a));

function mesh(s, [x, y, z], [w, h, d], c, g) {
  const o = [], D = s == 'disc';
  w /= 2; d /= 2; h = D ? 0.02 : h / 2;
  for (let i = D ? 18 : 0; i < (D ? 24 : 36); i++) {
    const a = (i / 12) | 0, e = [w, h, d], p = [x, y + h, z], n = [0, 0, 0], q = +'012023'[i % 6], b = (a + 1) % 3, r = (a + 2) % 3, J = (q % 3 > 0) * 2 - 1, K = (q > 1) * 2 - 1;
    n[a] = (i / 6) & 1 || -1;
    p[a] += n[a] * e[a]; p[b] += J * e[b]; p[r] += K * e[r];
    D && (n[a] = 2, n[b] = J, n[r] = K);
    o.push(...p, ...(g ? [0, 2, 0] : n), ...c, 1);
  }
  return o;
}

export async function createEngine(cv) {
  const gl = cv.getContext('webgl'), pr = gl.createProgram();
  [VS, FS].map((s, i) => { const h = gl.createShader(35633 - i); gl.shaderSource(h, s); gl.compileShader(h); gl.attachShader(pr, h); });
  gl.linkProgram(pr); gl.useProgram(pr); gl.bindBuffer(34962, gl.createBuffer());
  [...'pnc'].map((a, i) => { const l = gl.getAttribLocation(pr, a); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, i < 2 ? 3 : 4, 5126, 0, 40, i * 12); });
  gl.enable(2929); gl.enable(3042);
  const g = (n) => gl.getUniformLocation(pr, n), u = (n, ...v) => gl['uniform' + v.length + 'f'](g(n), ...v), s = () => cancelAnimationFrame(raf);
  let w, view = 'follow', cam, T, N, L, raf;

  function draw(t = 2) {
    if (!w) return;
    const W = (cv.width = cv.clientWidth), H = (cv.height = cv.clientHeight), { at, facing } = w.avatar, f = facing / 57.3;
    const fw = [Math.sin(f), 0, -Math.cos(f)], [B, S, Hh, F] = view == 'overview' ? [30, 0, 30, 6] : [6.5, 1.3, 3.4, 9];
    cam = {
      position: at.map((a, i) => a - fw[i] * B + [-fw[2], 0, fw[0]][i] * S + (i == 1) * Hh),
      target: at.map((a, i) => a + fw[i] * F + (i == 1) * 0.8),
    };
    const P = cam.position, z = nm(cam.target.map((a, i) => a - P[i])), x = nm([-z[2], 0, z[0]]), y = [-x[2] * z[1], x[2] * z[0] - x[0] * z[2], x[0] * z[1]];
    const R = [[x, (1.8 * H) / W], [y, 1.8], [z, 1, -0.2], [z, 1]].map(([v, s, B = 0]) => [...v.map((a) => a * s), B - v.reduce((t, a, i) => t + a * P[i], 0) * s]);
    gl.viewport(0, 0, W, H);
    gl.uniformMatrix4fv(g('m'), 0, [0, 1, 2, 3].flatMap((j) => R.map((r) => r[j])));
    gl.clearColor(...rgb(w.sky), 1);
    gl.clear(16640);
    u('L', ...L, t);
    gl.blendFunc(770, 771); u('k', 0);
    gl.drawArrays(4, 0, T);
    gl.blendFunc(770, 1); u('k', 1);
    gl.drawArrays(0, T, N);
  }

  return {
    modes: ['follow', 'overview'],
    setWorld(W) {
      w = W;
      const A = w.ground ? mesh('box', [0, -1, 0], [800, 1, 800], rgb(w.ground)) : [], B = [], P = [], { at } = w.avatar;
      L = [0, 1e4, 0];
      for (const [s, p, z, c, , g] of [...Object.values(w.things), ['box', at, [0.5, 1.7, 0.35], '#7a5a35']]) {
        (s == 'disc' ? A : B).push(...mesh(s, p, z, rgb(c), g));
        if (g) L = [p[0], p[1] + z[1] / 2, p[2]], P.push(...L, 4, 1, 0, ...rgb(c), 0.9);
      }
      for (let i = 0; i < 20; i++) {
        P.push(at[0] + Math.sin(i * 13) * 12, 3 + Math.sin(i * 29) * 2.5, at[2] + Math.sin(i * 47) * 12, 0.05, 0, 0, 0.5, 0.5, 0.6, 0.7);
      }
      gl.bufferData(34962, new Float32Array([...A, ...B, ...P]), 35044);
      T = (A.length + B.length) / 10; N = P.length / 10;
      draw();
    },
    setCamera(m) { view = m; draw(); },
    getCamera: () => cam,
    renderStill(v) { view = v; draw(); },
    start() { raf = requestAnimationFrame(function l(ms) { draw(ms / 1e3); raf = requestAnimationFrame(l); }); },
    stop: s,
    dispose: s,
    resize() { draw(); },
    errors: () => [],
  };
}
