// Sky dome, fog, lights and drifting dust, all driven by the world Environment.
import * as THREE from 'three';
import type { Environment } from '../../../shared/types';
import { DEFAULT_ENV } from '../../../shared/world';

const DUST = 700;
const DUST_RANGE = 36;

export class Atmosphere {
  readonly group = new THREE.Group();
  readonly sun: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly fog: THREE.FogExp2;
  private skyMat: THREE.ShaderMaterial;
  private skyDome: THREE.Mesh;
  private dust: THREE.Points;
  private dustMat: THREE.PointsMaterial;
  private glow: THREE.Mesh;
  private cur: Environment;
  private target: Environment;

  constructor(env: Environment) {
    this.cur = { ...structuredClone(DEFAULT_ENV), ...structuredClone(env) };
    this.target = structuredClone(this.cur);

    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        top: { value: new THREE.Color() }, bottom: { value: new THREE.Color() },
        sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunColor: { value: new THREE.Color() }, physical: { value: 0 },
      },
      vertexShader: `varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      // 'physical' adds a sun disc, a forward-scattering glow and a bright horizon band.
      fragmentShader: `uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform float physical; varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y * 1.4 + 0.25, 0.0, 1.0);
          vec3 col = mix(bottom, top, pow(h, 0.8));
          if (physical > 0.5) {
            vec3 s = normalize(sunDir);
            float c = max(dot(d, s), 0.0);
            float horizon = exp(-abs(d.y) * 9.0);
            col = mix(col, mix(bottom, sunColor, 0.35) * 1.15, horizon * 0.55);
            col += sunColor * (pow(c, 9.0) * 0.22 + pow(c, 64.0) * 0.45);
            col += sunColor * smoothstep(0.9993, 0.9997, c) * 1.6;
          }
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), this.skyMat);
    sky.renderOrder = -1;
    sky.frustumCulled = false;
    this.skyDome = sky;
    this.group.add(sky);


    this.fog = new THREE.FogExp2('#000000', 0.03);
    this.hemi = new THREE.HemisphereLight('#ffffff', '#202020', 1);
    this.sun = new THREE.DirectionalLight('#ffffff', 1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -35; sc.right = 35; sc.top = 35; sc.bottom = -35; sc.near = 1; sc.far = 200;
    this.sun.shadow.bias = -0.0005;
    this.group.add(this.hemi, this.sun, this.sun.target);

    const pos = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST * 3; i++) pos[i] = (Math.random() - 0.5) * DUST_RANGE;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dustMat = new THREE.PointsMaterial({ color: '#cfd6ff', size: 0.06, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending });
    this.dust = new THREE.Points(geo, this.dustMat);
    this.dust.frustumCulled = false;
    this.group.add(this.dust);

    // A soft pool of light under the wanderer: the one certain place in the void.
    const size = 64;
    const data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const d = Math.hypot(x / (size - 1) - 0.5, y / (size - 1) - 0.5) * 2;
      const a = Math.max(0, 1 - d) ** 2;
      const i = (y * size + x) * 4;
      data[i] = 200; data[i + 1] = 210; data[i + 2] = 255; data[i + 3] = a * 255;
    }
    const tex = new THREE.DataTexture(data, size, size);
    tex.needsUpdate = true;
    this.glow = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 3.2),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5 }),
    );
    this.glow.rotation.x = -Math.PI / 2;
    this.group.add(this.glow);

    this.apply();
  }

  setEnv(env: Environment, animate: boolean) {
    this.target = { ...structuredClone(DEFAULT_ENV), ...structuredClone(env) };
    this.cur.skyMode = this.target.skyMode;
    if (!animate) { this.cur = structuredClone(this.target); this.apply(); }
  }

  /** Current (interpolated) environment, for renderer-level settings. */
  get env(): Environment { return this.cur; }

  /** Called each frame; `focus` is the wanderer's position. */
  update(dt: number, focus: THREE.Vector3, glowOpacity: number) {
    const k = Math.min(1, dt * 1.2);
    const c = this.cur, t = this.target;
    for (const key of ['skyTop', 'skyBottom', 'fogColor', 'sunColor'] as const) {
      c[key] = '#' + new THREE.Color(c[key]).lerp(new THREE.Color(t[key]), k).getHexString();
    }
    for (const key of ['fogDensity', 'ambient', 'sunIntensity', 'particles', 'exposure', 'bloom', 'envLight'] as const) c[key] += (t[key] - c[key]) * k;
    for (let i = 0; i < 3; i++) c.sunDirection[i] += (t.sunDirection[i] - c.sunDirection[i]) * k;
    this.apply();

    const dir = new THREE.Vector3(...c.sunDirection).normalize();
    this.sun.position.copy(focus).addScaledVector(dir, 80);
    this.sun.target.position.copy(focus);
    this.skyDome.position.copy(focus);

    const p = this.dust.geometry.attributes.position as THREE.BufferAttribute;
    const arr = p.array as Float32Array;
    const h = DUST_RANGE / 2;
    for (let i = 0; i < DUST; i++) {
      arr[i * 3 + 1] += dt * 0.08;
      for (let a = 0; a < 3; a++) {
        const rel = arr[i * 3 + a] - focus.getComponent(a);
        if (rel > h) arr[i * 3 + a] -= DUST_RANGE;
        else if (rel < -h) arr[i * 3 + a] += DUST_RANGE;
      }
    }
    p.needsUpdate = true;
    this.glow.position.set(focus.x, focus.y + 0.02, focus.z);
    (this.glow.material as THREE.MeshBasicMaterial).opacity = glowOpacity;
  }

  private apply() {
    const c = this.cur;
    this.skyMat.uniforms.top.value.set(c.skyTop);
    this.skyMat.uniforms.bottom.value.set(c.skyBottom);
    this.fog.color.set(c.fogColor);
    this.fog.density = c.fogDensity;
    this.hemi.color.set(c.skyTop).lerp(new THREE.Color('#ffffff'), 0.5);
    this.hemi.groundColor.set(c.skyBottom).multiplyScalar(0.6);
    this.hemi.intensity = c.ambient * 2.2;
    this.sun.color.set(c.sunColor);
    this.sun.intensity = c.sunIntensity * 2.6;
    const u = this.skyMat.uniforms;
    u.physical.value = c.skyMode === 'physical' ? 1 : 0;
    u.sunDir.value.set(...c.sunDirection);
    u.sunColor.value.set(c.sunColor);
    this.dustMat.opacity = c.particles * 0.7;
    this.dust.visible = c.particles > 0.01;
  }
}
