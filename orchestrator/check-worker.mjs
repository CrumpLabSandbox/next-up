// Runs one component's build/update in isolation so a crash or infinite loop
// can't take down the orchestrator. Input: { code, instances: [{ id, params }] }.
import { parentPort, workerData } from 'node:worker_threads';
import * as THREE from 'three';
import { makeCtx, moduleUrl, countTriangles, countLights } from '../shared/component-api.js';

const { code, instances } = workerData;
const out = { error: null, instances: [] };

try {
  const mod = await import(moduleUrl(code));
  if (typeof mod.build !== 'function') throw new Error('module does not export build()');
  const list = instances.length ? instances : [{ id: '_probe', params: {} }];
  for (const inst of list) {
    try {
      const ctx = makeCtx(THREE, inst.id);
      const obj = mod.build(THREE, inst.params ?? {}, ctx);
      if (!obj || !obj.isObject3D) throw new Error('build() must return a THREE.Object3D');
      if (typeof mod.update === 'function') {
        for (let i = 1; i <= 3; i++) mod.update(obj, i * 0.5, 0.016, inst.params ?? {}, ctx);
      }
      out.instances.push({ id: inst.id, triangles: countTriangles(obj), lights: countLights(obj), error: null });
    } catch (err) {
      out.instances.push({ id: inst.id, triangles: 0, lights: 0, error: String(err?.stack ?? err).split('\n').slice(0, 3).join(' | ') });
    }
  }
} catch (err) {
  out.error = String(err?.stack ?? err).split('\n').slice(0, 3).join(' | ');
}
parentPort.postMessage(out);
