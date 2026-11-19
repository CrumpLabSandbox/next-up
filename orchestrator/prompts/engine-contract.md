# Engine contract

An engine is two ES modules built from `src/` into `out/` by the engine tool (esbuild, bundled and minified). Once frozen, an engine version is never edited again, so replays of old turns always use the engine they were built with.

```
src/world.js   pure data: no DOM, no timers, no randomness except seeded. Runs in Node and the browser.
src/engine.js  rendering: runs in a browser page that hosts one full-window <canvas>.
OPS.md         documentation of this engine's world ops, shown to the Builder and the Designer.
package.json   optional npm dependencies, bundled into out/ at build time.
```

## world.js exports

```js
export function initialWorld()          // only used by the very first engine
export function migrate(prevWorld)      // convert the PREVIOUS engine's world (see prev-world.json) into this engine's format
export function reduce(world, op, turn) // apply one Builder op; may mutate `world`, return it; throw Error('clear message') on a bad op
export function describe(world)         // compact text summary of the scene for the agents (ids, positions, key params)
export function facts(world)            // array of story fact ids represented in the scene
```

Required world fields, which must survive every migration:
- `world.avatar = { at: [x, y, z], facing: degrees }`. The Wanderer. Compass facing: 0 = north = -Z, 90 = east = +X.

Everything else in the world format is up to the engine. Everything the Builder adds should carry the story `fact` id it represents.

`migrate` must carry over everything the previous world contains: every story thing (with its fact id), the avatar, sky and ground. The world continues across engine changes, and nothing should vanish. It's fine (encouraged) to upgrade things during migration: richer params, better defaults.

## engine.js exports

```js
export async function createEngine(canvas, opts) {
  return {
    modes: ['follow', 'overview', ...],   // camera modes supported; 'follow' and 'overview' are required; 'orbit' and 'walk' optional
    async setWorld(world, { animate }),    // show this world; animate = true when the viewer steps forward in playback
    setCamera(mode, pose),                 // pose (optional) = { position: [x,y,z], target: [x,y,z] } handed over from the previous engine
    getCamera(),                           // -> { position, target }
    async renderStill(view),               // view: 'follow' | 'overview'. Settle everything and draw ONE deterministic frame (fixed time t = 2s).
    start(), stop(),                       // animation loop for live viewing (optional for very small engines)
    resize(width, height),
    pick(x, y),                            // optional: canvas pixel -> { id, fact } | null, used for hover tooltips
    errors(),                              // -> array of runtime error strings since the last call
    dispose(),
  };
}
```

The host always calls `setWorld` before `start()`. The check also runs the live path (camera handoff, `start()`, an animated `setWorld`, every camera mode, `stop()`), and any error fails it.

Conventions every engine keeps, so handoffs line up:
- Meters, +Y up, north = -Z. The Wanderer is about 1.7 m tall.
- **follow** camera: over the Wanderer's right shoulder, about 6.5 m behind and 3.4 m up, looking ahead in the direction they face. This is what the Wanderer "sees", so the Wanderer figure must be drawn.
- **overview** camera: high and wide, framing every thing in the world plus the Wanderer.
- `renderStill` must be deterministic: same world in, same pixels out. Use seeded randomness only (no Math.random or Date in anything that affects pixels), and a fixed time of 2 s for animations.

## Assets and libraries

- No network at runtime: no CDNs, no fetch to the internet. Everything ships in `out/`.
- Libraries: `npm install --ignore-scripts <pkg>` in the workspace, then import normally. esbuild bundles them into out/, and **their size counts toward the budget**.
- Binary files (wasm, images) imported from src/ are emitted next to engine.js. Import them to get a relative path and resolve it with `new URL(path, import.meta.url)`.
- `.glsl`, `.vert`, `.frag` and `.txt` imports come in as strings.

## Budget

The world's budget covers the shipped bytes of `out/` (engine.js + world.js + emitted assets) plus the bytes of `JSON.stringify(world)`. The check tells you exactly where you stand. Compact world formats leave more room for the Builder.
