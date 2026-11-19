// Smoke test without any model calls: builds a tiny scene, checks its
// components in Node, and renders a screenshot through headless Chromium.
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { applyOp, emptyWorld } from '../shared/world';
import { checkWorld } from './check';
import { Capture } from './capture';

const out = fileURLToPath(new URL('../runs/_selftest/', import.meta.url));
mkdirSync(out, { recursive: true });

const s = emptyWorld();
const ops = [
  { op: 'environment', skyTop: '#2a3a66', skyBottom: '#c98f6a', fogColor: '#8a7a80', fogDensity: 0.02, sunIntensity: 1, ambient: 0.5 },
  {
    op: 'defineComponent', name: 'ground', doc: 'params: radius, color',
    code: `export function build(THREE, p, ctx) {
  const g = new THREE.CircleGeometry(p.radius ?? 60, 48);
  g.rotateX(-Math.PI / 2);
  return new THREE.Mesh(g, ctx.mat(p.color ?? '#6b7d4a'));
}`,
  },
  {
    op: 'defineComponent', name: 'dirt_path', doc: 'params: length, width',
    code: `export function build(THREE, p, ctx) {
  const L = p.length ?? 20, W = p.width ?? 1.4;
  const g = new THREE.PlaneGeometry(W, L, 4, 20);
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setX(i, pos.getX(i) + Math.sin(pos.getZ(i) * 0.3) * 0.6 + ctx.range(-0.05, 0.05));
  g.translate(0, 0.02, -L / 2);
  return new THREE.Mesh(g, ctx.mat('#8a6a48'));
}`,
  },
  {
    op: 'defineComponent', name: 'lantern', doc: 'params: color',
    code: `export function build(THREE, p, ctx) {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 1.6, 6), ctx.mat('#3b2f25'));
  post.position.y = 0.8;
  const lamp = new THREE.Mesh(new THREE.OctahedronGeometry(0.16), ctx.mat(p.color ?? '#ffd27a', { emissive: p.color ?? '#ffd27a', emissiveIntensity: 2 }));
  lamp.position.y = 1.7;
  const light = new THREE.PointLight(p.color ?? '#ffd27a', 6, 10);
  light.position.y = 1.7;
  g.add(post, lamp, light);
  return g;
}
export function update(obj, t) { obj.children[1].rotation.y = t; }`,
  },
  { op: 'add', id: 'ground_01', component: 'ground', params: { radius: 80 } },
  { op: 'add', id: 'path_01', component: 'dirt_path', params: { length: 30 }, at: [0, 0, 1] },
  { op: 'add', id: 'lantern_01', component: 'lantern', at: [1.6, 0, -6], behavior: { type: 'flicker' } },
  { op: 'add', id: 'mystery', component: 'placeholder', params: { size: 1.2 }, at: [-3, 0, -9] },
  { op: 'moveAvatar', to: [0, 0, 0], facing: 0 },
];
for (const op of ops) {
  const err = applyOp(s, op, 1);
  if (err) throw new Error(`op failed: ${err}`);
}

const check = await checkWorld(s, new Set(Object.keys(s.components)), new Set(Object.keys(s.entities)));
console.log('check:', JSON.stringify(check));

const cap = new Capture();
await cap.start();
const res = await cap.render(s, `${out}shot.jpg`);
console.log('render:', res, `${out}shot.jpg`);
await cap.stop();
