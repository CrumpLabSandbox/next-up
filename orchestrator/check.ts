// Validates components headlessly in Node (errors, triangles, lights) before
// anything reaches the scene.
import { Worker } from 'node:worker_threads';
import { LIMITS } from '../shared/world';
import type { WorldState } from '../shared/types';

export interface InstanceReport { id: string; triangles: number; lights: number; error: string | null }
export interface ComponentReport { error: string | null; instances: InstanceReport[] }

const WORKER = new URL('./check-worker.mjs', import.meta.url);

export function checkComponent(code: string, instances: { id: string; params: Record<string, unknown> }[]): Promise<ComponentReport> {
  return new Promise((resolve) => {
    const worker = new Worker(WORKER, { workerData: { code, instances } });
    const timer = setTimeout(() => {
      worker.terminate();
      resolve({ error: 'timed out after 4s (infinite loop or too much geometry?)', instances: [] });
    }, 4000);
    worker.once('message', (m: ComponentReport) => { clearTimeout(timer); worker.terminate(); resolve(m); });
    worker.once('error', (e) => { clearTimeout(timer); resolve({ error: String(e), instances: [] }); });
  });
}

/**
 * Checks every component touched this turn against all entities that use it.
 * Returns per-entity triangle counts and a list of problems, keyed so the
 * caller can drop or replace what failed.
 */
export async function checkWorld(state: WorldState, touchedComponents: Set<string>, touchedEntities: Set<string>) {
  const problems: { component?: string; entity?: string; error: string }[] = [];
  const triangles: Record<string, number> = {};
  const lights: Record<string, number> = {};
  const toCheck = new Set(touchedComponents);
  for (const id of touchedEntities) {
    const e = state.entities[id];
    if (e) toCheck.add(e.component);
  }
  for (const name of toCheck) {
    const def = state.components[name];
    if (!def) continue;
    const users = Object.values(state.entities).filter((e) => e.component === name);
    const report = await checkComponent(def.code, users.map((e) => ({ id: e.id, params: e.params })));
    if (report.error) {
      problems.push({ component: name, error: report.error });
      continue;
    }
    for (const inst of report.instances) {
      if (inst.error) {
        problems.push({ entity: inst.id === '_probe' ? undefined : inst.id, component: name, error: inst.error });
        continue;
      }
      const tris = inst.triangles;
      if (tris > LIMITS.trianglesPerInstance) {
        problems.push({ entity: inst.id, component: name, error: `${tris} triangles exceeds ${LIMITS.trianglesPerInstance} per instance` });
      }
      triangles[inst.id] = tris;
      lights[inst.id] = inst.lights;
    }
  }
  return { problems, triangles, lights };
}
