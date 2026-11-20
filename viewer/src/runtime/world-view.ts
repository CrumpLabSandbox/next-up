// Renders a WorldState with three.js and diffs successive states so the world
// can be replayed forwards (with materialize animations) or scrubbed instantly.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { COMPONENT_LIB } from '../../../shared/component-lib.js';
import { makeCtx, moduleUrl, countTriangles } from '../../../shared/component-api.js';
import type { Entity, Environment, WorldState } from '../../../shared/types';
import { cameraAt, envAt, poseAt, propVisible, type Cutscene } from '../../../shared/cutscene';
import { Atmosphere } from './atmosphere';
import { Avatar, compassToYaw } from './avatar';
import { emptyWorld } from '../../../shared/world';

export type CameraMode = 'follow' | 'orbit' | 'walk';

type Ctx = ReturnType<typeof makeCtx>;
interface ComponentModule {
  build: (T: typeof THREE, p: Record<string, unknown>, ctx: Ctx) => THREE.Object3D;
  update?: (obj: THREE.Object3D, t: number, dt: number, p: Record<string, unknown>, ctx: Ctx) => void;
}

interface Live {
  entity: Entity;
  sig: string;
  root: THREE.Group; // world transform
  mid: THREE.Group; // behavior transform
  inner: THREE.Object3D;
  mod: ComponentModule | null;
  ctx: Ctx;
  born: number; // clock time; NaN when not animating in
  refreshed: number; // clock time of a visual rebuild (e.g. a polish pass); NaN otherwise
  dying: number; // clock time; NaN when alive
  baseLights: { light: THREE.Light; intensity: number }[];
  updateBroken: boolean;
}

const SPAWN_SECS = 1.4;
const DIE_SECS = 0.7;

const easeOutBack = (x: number) => 1 + 2.2 * Math.pow(x - 1, 3) + 1.2 * Math.pow(x - 1, 2);

function disposeTree(o: THREE.Object3D) {
  o.traverse((c) => {
    const m = c as THREE.Mesh;
    m.geometry?.dispose?.();
    const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
    for (const mat of mats) {
      for (const v of Object.values(mat)) if (v instanceof THREE.Texture) v.dispose();
      mat.dispose();
    }
  });
}

export class WorldView {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(55, 16 / 9, 0.1, 2000);
  readonly avatar = new Avatar();
  private atmo: Atmosphere;
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private orbit: OrbitControls;
  private live = new Map<string, Live>();
  private dying: Live[] = [];
  private modules = new Map<string, Promise<ComponentModule>>();
  private last = performance.now();
  private time = 0;
  private mode: CameraMode = 'follow';
  private lookAt = new THREE.Vector3();
  private applying: Promise<void> = Promise.resolve();
  private queued: { state: WorldState; animate: boolean } | null = null;
  private errors: string[] = [];
  private keys = new Set<string>();
  private walkYaw = 0;
  private walkPitch = 0.25;
  private dragging = false;
  private raycaster = new THREE.Raycaster();
  private storyAvatar = { at: [0, 0, 0] as [number, number, number], facing: 0 };
  private cut: {
    cs: Cutscene; props: Map<string, Live>; env: Environment; t: number; playing: boolean; onEnd: (() => void) | null;
  } | null = null;
  private lastState: WorldState | null = null;
  private running = false;
  onError: (msg: string) => void = () => {};

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const env = emptyWorld().env;
    this.atmo = new Atmosphere(env);
    this.scene.fog = this.atmo.fog;
    this.scene.add(this.atmo.group, this.avatar.group);

    // Image-based light from a neutral studio environment; strength comes from env.envLight.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // A single NaN/Inf pixel (from any component's material or geometry) would be
    // smeared across the whole frame by the bloom blur and turn it black, so
    // scrub invalid values and clamp extreme highlights before bloom.
    this.composer.addPass(new ShaderPass({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
          gl_FragColor = clamp(c, 0.0, 32.0);
        }`,
    }));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(960, 540), 0, 0.5, 0.9);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.orbit = new OrbitControls(this.camera, canvas);
    this.orbit.enabled = false;
    this.orbit.enableDamping = true;
    this.orbit.maxDistance = 300;

    this.placeCameraBehind(true);
    this.bindInput();
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement ?? canvas);
    this.resize();
  }

  start() {
    if (this.running) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      const now = performance.now();
      this.tick(Math.min((now - this.last) / 1000, 0.1));
      this.last = now;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  setMode(mode: CameraMode) {
    if (this.mode === 'walk' && mode !== 'walk') {
      this.avatar.manual = false;
      this.avatar.setTarget(this.storyAvatar.at, this.storyAvatar.facing, false);
    }
    this.mode = mode;
    this.orbit.enabled = mode === 'orbit';
    if (mode === 'orbit') this.orbit.target.copy(this.avatar.position).add(new THREE.Vector3(0, 1.2, 0));
    if (mode === 'walk') {
      this.avatar.manual = true;
      this.walkYaw = this.avatar.yaw;
      this.walkPitch = 0.25;
    }
  }

  getMode() { return this.mode; }

  /** Diff the scene toward `state`. Calls are serialized; only the latest queued state is applied. */
  setState(state: WorldState, animate: boolean): Promise<void> {
    this.queued = { state, animate };
    this.applying = this.applying.then(async () => {
      const q = this.queued;
      if (!q) return;
      this.queued = null;
      await this.apply(q.state, q.animate);
    });
    return this.applying;
  }

  private loadModule(code: string): Promise<ComponentModule> {
    let p = this.modules.get(code);
    if (!p) {
      p = import(/* @vite-ignore */ moduleUrl(code)) as Promise<ComponentModule>;
      this.modules.set(code, p);
    }
    return p;
  }

  private async apply(state: WorldState, animate: boolean) {
    this.lastState = state;
    this.atmo.setEnv(state.env, animate);
    this.storyAvatar = { at: [...state.avatar.at] as [number, number, number], facing: state.avatar.facing };
    if (!this.avatar.manual) this.avatar.setTarget(state.avatar.at, state.avatar.facing, animate);

    for (const [id, l] of this.live) {
      if (!state.entities[id]) {
        this.live.delete(id);
        if (animate) { l.dying = this.time; this.dying.push(l); }
        else { this.scene.remove(l.root); disposeTree(l.root); }
      }
    }

    for (const e of Object.values(state.entities)) {
      const def = state.components[e.component];
      const code = def?.code ?? state.components.placeholder.code;
      const sig = `${e.component}|${code.length}:${code}|${JSON.stringify(e.params)}`;
      const existing = this.live.get(e.id);
      if (existing && existing.sig === sig) {
        existing.entity = e;
        this.placeRoot(existing, animate);
        continue;
      }
      const built = await this.build(e, code, sig, state);
      if (existing) {
        this.scene.remove(existing.root);
        disposeTree(existing.root);
      }
      built.born = animate && !existing ? this.time : NaN;
      built.refreshed = animate && existing ? this.time : NaN;
      this.placeRoot(built, false);
      if (!Number.isNaN(built.born)) built.root.scale.setScalar(0.001);
      this.live.set(e.id, built);
      this.scene.add(built.root);
    }
  }

  private async build(e: Entity, code: string, sig: string, state: WorldState): Promise<Live> {
    const ctx = makeCtx(THREE, e.id, COMPONENT_LIB);
    const root = new THREE.Group();
    const mid = new THREE.Group();
    root.add(mid);
    root.userData.entityId = e.id;
    let mod: ComponentModule | null = null;
    let inner: THREE.Object3D;
    try {
      mod = await this.loadModule(code);
      inner = mod.build(THREE, e.params, ctx);
      if (!inner?.isObject3D) throw new Error('build() did not return an Object3D');
    } catch (err) {
      this.reportError(`${e.id} (${e.component}): ${(err as Error).message}`);
      mod = await this.loadModule(state.components.placeholder.code);
      inner = mod.build(THREE, { size: 1 }, ctx);
    }
    inner.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const m = o as THREE.Mesh;
        const transparent = Array.isArray(m.material) ? false : (m.material as THREE.Material)?.transparent;
        m.castShadow = !transparent;
        m.receiveShadow = true;
      }
    });
    mid.add(inner);
    const baseLights: Live['baseLights'] = [];
    inner.traverse((o) => { if ((o as THREE.Light).isLight) baseLights.push({ light: o as THREE.Light, intensity: (o as THREE.Light).intensity }); });
    return { entity: e, sig, root, mid, inner, mod, ctx, born: NaN, refreshed: NaN, dying: NaN, baseLights, updateBroken: false };
  }

  private placeRoot(l: Live, animate: boolean) {
    const e = l.entity;
    const target = new THREE.Vector3(...e.at);
    if (animate && l.root.position.distanceTo(target) > 0.01) {
      l.root.userData.moveFrom = l.root.position.clone();
      l.root.userData.moveTo = target;
      l.root.userData.moveStart = this.time;
    } else {
      l.root.position.copy(target);
      delete l.root.userData.moveTo;
    }
    l.root.rotation.y = compassToYaw(e.rotation);
    l.root.scale.setScalar(e.scale);
  }

  private reportError(msg: string) {
    this.errors.push(msg);
    this.onError(msg);
  }

  drainErrors() { const e = this.errors; this.errors = []; return e; }

  triangleCount() {
    let n = 0;
    for (const l of this.live.values()) n += countTriangles(l.root);
    return n;
  }

  entityAt(clientX: number, clientY: number): string | null {
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const roots = [...this.live.values()].map((l) => l.root);
    const hit = this.raycaster.intersectObjects(roots, true).find((h) => (h.object as THREE.Mesh).isMesh && h.object.visible);
    let o: THREE.Object3D | null = hit?.object ?? null;
    while (o && !o.userData.entityId) o = o.parent;
    return o?.userData.entityId ?? null;
  }

  /** Puts the camera where the Player "sees" from: behind and above the wanderer. */
  placeCameraBehind(instant: boolean) {
    const yaw = this.avatar.yaw;
    const back = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    const p = this.avatar.position;
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
    const desired = p.clone().addScaledVector(back, 6.5).addScaledVector(right, 1.3).add(new THREE.Vector3(0, 3.4, 0));
    const look = p.clone().addScaledVector(back, -9).addScaledVector(right, 0.4).add(new THREE.Vector3(0, 0.8, 0));
    if (instant) { this.camera.position.copy(desired); this.lookAt.copy(look); }
    return { desired, look };
  }

  // ---------- cutscenes ----------

  /** Sets up a cutscene over the current state: builds its temporary props. */
  async beginCutscene(cs: Cutscene) {
    this.endCutscene();
    await this.applying;
    const state = this.lastState;
    if (!state) return;
    const props = new Map<string, Live>();
    for (const p of cs.props ?? []) {
      const def = state.components[p.component];
      if (!def) continue;
      const e: Entity = {
        id: `cut_${p.id}`, component: p.component, params: p.params ?? {}, at: p.at, rotation: p.rotation ?? 0, scale: p.scale ?? 1,
        behavior: null, fact: null, since: state.turn, updated: state.turn,
      };
      const l = await this.build(e, def.code, `cut|${p.id}`, state);
      this.placeRoot(l, false);
      l.root.visible = false;
      this.scene.add(l.root);
      props.set(p.id, l);
    }
    this.cut = { cs, props, env: state.env, t: 0, playing: false, onEnd: null };
  }

  /** Poses the camera, animated entities, props and environment at time t. */
  cutsceneFrame(t: number) {
    const c = this.cut;
    if (!c) return;
    const cam = cameraAt(c.cs, t);
    this.camera.position.set(...cam.pos);
    this.lookAt.set(...cam.target);
    this.camera.lookAt(this.lookAt);
    if (this.camera.fov !== cam.fov) { this.camera.fov = cam.fov ?? 55; this.camera.updateProjectionMatrix(); }
    const targets = new Set((c.cs.animations ?? []).map((a) => a.target));
    const apply = (root: THREE.Object3D, base: { at: [number, number, number]; rotation: number; scale: number }, id: string) => {
      const pose = targets.has(id) ? poseAt(c.cs, id, base, t) : base;
      root.position.set(...pose.at);
      root.rotation.y = compassToYaw(pose.rotation);
      root.scale.setScalar(pose.scale);
    };
    if (targets.has('wanderer')) apply(this.avatar.group, { at: this.storyAvatar.at, rotation: this.storyAvatar.facing, scale: 1 }, 'wanderer');
    for (const id of targets) {
      const l = this.live.get(id);
      if (l) apply(l.root, { at: l.entity.at, rotation: l.entity.rotation, scale: l.entity.scale }, id);
    }
    for (const p of c.cs.props ?? []) {
      const l = c.props.get(p.id);
      if (!l) continue;
      l.root.visible = propVisible(p, t);
      apply(l.root, { at: p.at, rotation: p.rotation ?? 0, scale: p.scale ?? 1 }, p.id);
    }
    if (c.cs.env?.length) this.atmo.setEnv(envAt(c.cs, c.env, t), false);
  }

  /** Plays a cutscene in real time; onEnd fires when it finishes (not when stopped). */
  async playCutscene(cs: Cutscene, onEnd: () => void) {
    await this.beginCutscene(cs);
    if (!this.cut) { onEnd(); return; }
    this.cut.playing = true;
    this.cut.onEnd = onEnd;
  }

  cutsceneTime() { return this.cut ? this.cut.t : -1; }

  /** Removes props and restores everything the cutscene touched. */
  endCutscene() {
    const c = this.cut;
    if (!c) return;
    this.cut = null;
    for (const l of c.props.values()) { this.scene.remove(l.root); disposeTree(l.root); }
    for (const a of c.cs.animations ?? []) {
      const l = this.live.get(a.target);
      if (l) this.placeRoot(l, false);
    }
    this.avatar.setTarget(this.storyAvatar.at, this.storyAvatar.facing, false);
    this.atmo.setEnv(c.env, false);
    this.camera.fov = 55;
    this.camera.updateProjectionMatrix();
    this.placeCameraBehind(true);
  }

  /** Headless: render one deterministic cutscene frame at time t. */
  async renderCutsceneStill(cs: Cutscene, t: number) {
    await this.beginCutscene(cs);
    this.avatar.snap();
    for (const l of this.live.values()) l.born = NaN;
    this.time = t;
    this.updateEntities(0.016);
    this.cutsceneFrame(t);
    for (let i = 0; i < 40; i++) this.atmo.update(0.1, this.avatar.position, this.glowOpacity());
    this.draw();
    this.endCutscene();
  }

  /** High wide shot framing every entity and the wanderer (for the Designer). */
  private placeCameraOverview() {
    const pts = [...this.live.values()].map((l) => l.root.position.clone());
    pts.push(this.avatar.position.clone());
    const center = pts.reduce((a, p) => a.add(p), new THREE.Vector3()).divideScalar(pts.length);
    const radius = THREE.MathUtils.clamp(Math.max(...pts.map((p) => p.distanceTo(center))), 12, 90);
    const yaw = this.avatar.yaw;
    const back = new THREE.Vector3(Math.sin(yaw + 0.6), 0, Math.cos(yaw + 0.6));
    this.camera.position.copy(center).addScaledVector(back, radius * 1.5).add(new THREE.Vector3(0, radius * 1.1 + 8, 0));
    this.lookAt.copy(center);
  }

  /** For headless capture: settle everything at its final pose and render once. */
  renderStill(view: 'story' | 'overview' = 'story', t = 2) {
    this.avatar.snap();
    for (const l of this.live.values()) {
      l.born = NaN;
      if (l.root.userData.moveTo) { l.root.position.copy(l.root.userData.moveTo); delete l.root.userData.moveTo; }
    }
    this.time = t;
    if (view === 'overview') this.placeCameraOverview();
    else this.placeCameraBehind(true);
    this.camera.lookAt(this.lookAt);
    for (let i = 0; i < 40; i++) this.atmo.update(0.1, this.avatar.position, this.glowOpacity());
    this.updateEntities(0.016);
    this.draw();
  }

  /** Applies renderer-level environment settings and draws one frame. */
  private draw() {
    const env = this.atmo.env;
    this.renderer.toneMappingExposure = env.exposure;
    this.scene.environmentIntensity = env.envLight;
    if (env.bloom > 0.01) {
      this.bloom.strength = env.bloom;
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  lightCount() {
    let n = 0;
    for (const l of this.live.values()) l.root.traverse((o) => { if ((o as THREE.Light).isLight) n++; });
    return n;
  }

  private glowOpacity() {
    return this.live.size === 0 ? 0.55 : Math.max(0.12, 0.55 - this.live.size * 0.05);
  }

  private resize() {
    const el = this.canvas.parentElement ?? this.canvas;
    const w = el.clientWidth || 960, h = el.clientHeight || 540;
    this.renderer.setSize(w, h, false);
    this.composer?.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private bindInput() {
    addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'SELECT') return;
      this.keys.add(e.key.toLowerCase());
    });
    addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));
    addEventListener('blur', () => this.keys.clear());
    this.canvas.addEventListener('pointerdown', (e) => { if (this.mode === 'walk') { this.dragging = true; this.canvas.setPointerCapture(e.pointerId); } });
    this.canvas.addEventListener('pointerup', () => { this.dragging = false; });
    this.canvas.addEventListener('pointermove', (e) => {
      if (!this.dragging || this.mode !== 'walk') return;
      this.walkYaw -= e.movementX * 0.005;
      this.walkPitch = THREE.MathUtils.clamp(this.walkPitch + e.movementY * 0.004, -0.2, 1.2);
    });
  }

  private tick(dt: number) {
    this.time += dt;
    if (this.cut?.playing) {
      this.cut.t += dt;
      this.updateEntities(dt);
      this.cutsceneFrame(Math.min(this.cut.t, this.cut.cs.duration));
      this.atmo.update(dt, this.avatar.position, this.glowOpacity());
      this.draw();
      if (this.cut.t >= this.cut.cs.duration) {
        const done = this.cut.onEnd;
        this.endCutscene();
        done?.();
      }
      return;
    }
    if (this.mode === 'walk') this.walk(dt);
    else this.avatar.update(dt);
    this.updateEntities(dt);
    this.atmo.update(dt, this.avatar.position, this.glowOpacity());
    this.updateCamera(dt);
    this.draw();
  }

  private walk(dt: number) {
    const k = this.keys;
    const f = (k.has('w') || k.has('arrowup') ? 1 : 0) - (k.has('s') || k.has('arrowdown') ? 1 : 0);
    const r = (k.has('d') || k.has('arrowright') ? 1 : 0) - (k.has('a') || k.has('arrowleft') ? 1 : 0);
    const fwd = new THREE.Vector3(-Math.sin(this.walkYaw), 0, -Math.cos(this.walkYaw));
    const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
    const dir = fwd.multiplyScalar(f).addScaledVector(right, r);
    if (dir.lengthSq() > 0) dir.normalize();
    this.avatar.drive(dir, k.has('shift'), dt);
    if (dir.lengthSq() > 0) this.snapToGround();
  }

  private snapToGround() {
    const p = this.avatar.position;
    this.raycaster.set(new THREE.Vector3(p.x, p.y + 1.2, p.z), new THREE.Vector3(0, -1, 0));
    this.raycaster.far = 30;
    const roots = [...this.live.values()].map((l) => l.root);
    const hit = this.raycaster.intersectObjects(roots, true).find((h) => (h.object as THREE.Mesh).isMesh);
    this.raycaster.far = Infinity;
    if (hit) p.y += (hit.point.y - p.y) * 0.5;
  }

  private updateCamera(dt: number) {
    const a = this.avatar.position;
    if (this.mode === 'orbit') {
      this.orbit.target.lerp(a.clone().add(new THREE.Vector3(0, 1.2, 0)), 1 - Math.exp(-dt * 3));
      this.orbit.update();
      return;
    }
    let desired: THREE.Vector3, look: THREE.Vector3;
    if (this.mode === 'walk') {
      const dist = 6;
      const off = new THREE.Vector3(
        Math.sin(this.walkYaw) * Math.cos(this.walkPitch),
        Math.sin(this.walkPitch),
        Math.cos(this.walkYaw) * Math.cos(this.walkPitch),
      ).multiplyScalar(dist);
      desired = a.clone().add(off).add(new THREE.Vector3(0, 1.4, 0));
      look = a.clone().add(new THREE.Vector3(0, 1.3, 0));
    } else {
      ({ desired, look } = this.placeCameraBehind(false));
    }
    const k = 1 - Math.exp(-dt * (this.mode === 'walk' ? 10 : 2.5));
    this.camera.position.lerp(desired, k);
    this.lookAt.lerp(look, k);
    this.camera.lookAt(this.lookAt);
  }

  private updateEntities(dt: number) {
    const t = this.time;
    for (const l of this.live.values()) {
      const e = l.entity;
      if (!Number.isNaN(l.born)) {
        const x = Math.min(1, (t - l.born) / SPAWN_SECS);
        l.root.scale.setScalar(e.scale * Math.max(0.001, easeOutBack(x)));
        if (x >= 1) { l.born = NaN; l.root.scale.setScalar(e.scale); }
      } else if (!Number.isNaN(l.refreshed)) {
        // A quick breath so viewers can see what a polish pass changed.
        const x = Math.min(1, (t - l.refreshed) / 0.9);
        l.root.scale.setScalar(e.scale * (1 + Math.sin(x * Math.PI) * 0.08));
        if (x >= 1) { l.refreshed = NaN; l.root.scale.setScalar(e.scale); }
      }
      const mv = l.root.userData;
      if (mv.moveTo) {
        const x = Math.min(1, (t - mv.moveStart) / 1.2);
        l.root.position.lerpVectors(mv.moveFrom, mv.moveTo, x * x * (3 - 2 * x));
        if (x >= 1) delete mv.moveTo;
      }
      const b = e.behavior;
      l.mid.position.set(0, 0, 0);
      l.mid.rotation.set(0, l.mid.rotation.y, 0);
      l.mid.scale.setScalar(1);
      if (b) {
        const sp = b.speed ?? 1, amt = b.amount ?? 1;
        if (b.type === 'spin') l.mid.rotation.y += dt * sp;
        else if (b.type === 'bob') l.mid.position.y = Math.sin(t * sp * 2) * 0.15 * amt;
        else if (b.type === 'sway') l.mid.rotation.z = Math.sin(t * sp * 1.5) * 0.06 * amt;
        else if (b.type === 'pulse') l.mid.scale.setScalar(1 + Math.sin(t * sp * 2) * 0.05 * amt);
        else if (b.type === 'flicker') {
          const f = 0.75 + 0.25 * Math.sin(t * 13 * sp) * Math.sin(t * 7.3 * sp + 1.3);
          for (const bl of l.baseLights) bl.light.intensity = bl.intensity * (1 - amt * 0.5 + amt * 0.5 * f);
        }
      }
      if (l.mod?.update && !l.updateBroken) {
        try {
          l.mod.update(l.inner, t, dt, e.params, l.ctx);
        } catch (err) {
          l.updateBroken = true;
          this.reportError(`${e.id} update(): ${(err as Error).message}`);
        }
      }
    }
    this.dying = this.dying.filter((l) => {
      const x = (t - l.dying) / DIE_SECS;
      if (x >= 1) { this.scene.remove(l.root); disposeTree(l.root); return false; }
      l.root.scale.setScalar(l.entity.scale * (1 - x * x));
      return true;
    });
  }
}
