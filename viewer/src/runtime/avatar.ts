// The wanderer: a small low-poly figure that walks between story positions.
import * as THREE from 'three';
import type { Vec3 } from '../../../shared/types';

const WALK_SPEED = 2.6;
const TURN_SPEED = 5;

/** Compass degrees (0 = -Z, 90 = +X) to a three.js yaw. */
export const compassToYaw = (deg: number) => (-deg * Math.PI) / 180;

function angleLerp(a: number, b: number, t: number) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export class Avatar {
  readonly group = new THREE.Group();
  private legL: THREE.Object3D;
  private legR: THREE.Object3D;
  private armL: THREE.Object3D;
  private armR: THREE.Object3D;
  private body: THREE.Object3D;
  private target = new THREE.Vector3();
  private targetYaw = 0;
  private phase = 0;
  private speed = 0;
  /** True while the figure is being driven by the viewer (walk mode). */
  manual = false;

  constructor() {
    const mat = (c: string) => new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.8 });
    const cloak = mat('#c9a96e');
    const skin = mat('#e8c4a0');
    const dark = mat('#4a3f35');

    const limb = (w: number, h: number, m: THREE.Material, x: number, y: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(x, y, 0);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), m);
      mesh.position.y = -h / 2;
      pivot.add(mesh);
      return pivot;
    };
    this.legL = limb(0.16, 0.8, dark, -0.12, 0.8);
    this.legR = limb(0.16, 0.8, dark, 0.12, 0.8);
    this.armL = limb(0.12, 0.62, cloak, -0.3, 1.42);
    this.armR = limb(0.12, 0.62, cloak, 0.3, 1.42);

    this.body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.72, 7), cloak);
    this.body.position.y = 1.15;
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.17, 1), skin);
    head.position.y = 1.66;
    const hood = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.32, 7, 1, true), cloak);
    hood.position.set(0, 1.74, 0.03);
    // A little satchel marks the back, so "behind" reads clearly in screenshots.
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.3, 0.12), dark);
    bag.position.set(0, 1.18, 0.26);

    this.group.add(this.legL, this.legR, this.armL, this.armR, this.body, head, hood, bag);
    this.group.traverse((o) => { if ((o as THREE.Mesh).isMesh) { o.castShadow = true; } });
  }

  get position() { return this.group.position; }
  get yaw() { return this.group.rotation.y; }
  get moving() { return this.speed > 0.05; }

  setTarget(at: Vec3, facing: number, animate: boolean) {
    this.target.set(at[0], at[1], at[2]);
    this.targetYaw = compassToYaw(facing);
    if (!animate) this.snap();
  }

  snap() {
    this.group.position.copy(this.target);
    this.group.rotation.y = this.targetYaw;
    this.speed = 0;
  }

  /** Walk mode: move along a world-space direction (unit or zero). */
  drive(dir: THREE.Vector3, run: boolean, dt: number) {
    const v = run ? WALK_SPEED * 2.2 : WALK_SPEED;
    if (dir.lengthSq() > 0) {
      this.group.position.addScaledVector(dir, v * dt);
      const yaw = Math.atan2(-dir.x, -dir.z);
      this.group.rotation.y = angleLerp(this.group.rotation.y, yaw, Math.min(1, dt * TURN_SPEED * 2));
      this.speed = v;
    } else {
      this.speed = 0;
    }
    this.animateLimbs(dt);
  }

  update(dt: number) {
    if (this.manual) return;
    const p = this.group.position;
    const flat = new THREE.Vector3(this.target.x - p.x, 0, this.target.z - p.z);
    const dist = flat.length();
    if (dist > 0.05) {
      const step = Math.min(dist, WALK_SPEED * dt);
      flat.normalize();
      p.addScaledVector(flat, step);
      p.y += (this.target.y - p.y) * Math.min(1, dt * 3);
      const yaw = Math.atan2(-flat.x, -flat.z);
      this.group.rotation.y = angleLerp(this.group.rotation.y, yaw, Math.min(1, dt * TURN_SPEED));
      this.speed = WALK_SPEED;
    } else {
      p.y += (this.target.y - p.y) * Math.min(1, dt * 3);
      this.group.rotation.y = angleLerp(this.group.rotation.y, this.targetYaw, Math.min(1, dt * TURN_SPEED * 0.6));
      this.speed = 0;
    }
    this.animateLimbs(dt);
  }

  private animateLimbs(dt: number) {
    if (this.speed > 0.05) {
      this.phase += dt * this.speed * 3.2;
      const s = Math.sin(this.phase) * 0.6;
      this.legL.rotation.x = s;
      this.legR.rotation.x = -s;
      this.armL.rotation.x = -s * 0.8;
      this.armR.rotation.x = s * 0.8;
      this.body.position.y = 1.15 + Math.abs(Math.cos(this.phase)) * 0.04;
    } else {
      this.phase += dt;
      for (const l of [this.legL, this.legR, this.armL, this.armR]) l.rotation.x *= 0.85;
      this.body.position.y = 1.15 + Math.sin(this.phase * 1.5) * 0.008;
    }
  }
}
