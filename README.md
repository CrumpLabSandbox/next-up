# next-up

An emergent 3D world that doesn't exist until someone looks at it.

**Watch the replays:** https://crumplabsandbox.github.io/next-up/

Four Claude agents take turns:

| Agent | Sees | Does |
|---|---|---|
| **Wanderer** (player) | the Narrator's words + a screenshot of the real 3D view | takes one text-adventure action |
| **Narrator** (world-keeper) | the action, all established facts, the view | narrates and records new or changed **facts** (stable ids, descriptions, placements) |
| **Builder** | the new facts, the current scene and its code, the view | emits **ops**: defines procedural three.js components and places, updates and removes entities, changes sky and light, moves the wanderer |
| **Graphic Designer** | the story view + a high overview shot, the scene and its code | critiques the look, gives 2–4 concrete suggestions and keeps a running **style guide**. The Builder then does a **polish pass** to make the changes, and follows the style guide in later builds |

A turn is: Wanderer → Narrator → Builder → render → Designer → Builder (polish) → render. Both renders are kept, so you can see what each polish changed. Every step is appended to `runs/<id>/timeline.jsonl`. The world at any point is just the replay of that log, so the viewer can play the whole thing back, scrub and watch things materialize.

## Tiered three.js runs (world-04, the default)

`npm run world` uses the three.js runtime throughout (no engine swaps). The world's own content has resource tiers that the Graphic Designer must ask to unlock (at most one every 6 turns): 8 KB / 8k triangles / 1 light → 32 KB / 30k / 2 → 128 KB / 80k / 4 → 512 KB / 200k / 6 → 2 MB / 500k / 8. Builds over the limit are rejected and retried.
- The runtime supports realism controls (`skyMode: "physical"` sun and horizon glow, `bloom`, `exposure`, image-based `envLight`, smooth PBR via `ctx.pbr`) and three.js helpers for components (`ctx.lib`: mergeGeometries, ImprovedNoise, SimplexNoise).
- A sixth role, the **Reviewer** (Fable, every 5 turns), looks at the whole run (full story, a contact sheet of views across time, recent agent output) and sends direction on narrative arc, visual coherence and viewer experience to each agent.
- `scripts/publish-run.sh <run>` (in tmux) pushes a run's progress every 15 minutes so the Pages site follows along.

## Ladder runs (world-03, `npm run world:ladder`)

New runs grow in **orders of magnitude**. The whole world (engine code, libraries and world data) has to fit a byte budget that starts at **4 KB** and climbs ×4 per tier (16 KB → 64 KB → 256 KB → 1 MB → 4 MB → 16 MB). The Graphic Designer can ask for the next tier (at most one every 5 turns) and can order a **new engine**. A fifth agent, the **Engineer**, then writes it: a tool-using Claude Code session in `work/<run>/vN/` that may install npm libraries (their bytes count).

- The **engine contract** (`orchestrator/prompts/engine-contract.md`): each engine is `world.js` (pure: `initialWorld`, `migrate`, `reduce`, `describe`, `facts`) plus `engine.js` (`createEngine(canvas)` → `setWorld`, `setCamera`, `getCamera`, `renderStill`, …). Each engine defines its own world format and ops (documented in its `OPS.md` for the Builder).
- `orchestrator/engine-tool.mjs check` builds a draft and checks it: exports, a deterministic migration of the live world that keeps every story fact, the budget, a real headless render, and pixel-identical repeat renders. A draft ships only if it passes.
- Passing engines are **frozen** in `runs/<id>/engines/vN/`, and the timeline records the switch. The viewer runs each engine in its own frame (`viewer/engine-host.html`), rebuilds the world through each engine's own `reduce` and `migrate`, and cross-fades at a handoff, passing the camera across.
- `engine-seed/` is v0: about 3 KB of flat boxes and cones on a 2D canvas.

## Use

```bash
npm install
npx playwright install chromium-headless-shell   # once, for screenshots

npm run world -- --turns 50                  # new tiered three.js run (uses your Claude subscription via `claude -p`)
npm run world:ladder -- --turns 50           # world-03 style: growing budget + Engineer-built engines
npm run world:legacy -- --turns 50           # world-01/02 style: fixed three.js runtime
npm run world -- --turns 50 --premise "..."  # optional seed for the world
npm run world -- --resume <run-id>           # continue after a crash or stop
touch runs/<run-id>/STOP                     # stop cleanly after the current turn

npm run viewer                               # http://localhost:5173 — replay, live-follow a running world
npm run selftest                             # no model calls: checks components + headless render
npm run build                                # static site in dist/ (runs included), deployed to Pages on push to main
```

Viewer: play/pause (space), step (← →), scrub, speed. Camera modes: **Follow** (story camera), **Orbit**, **Walk** (WASD/arrows, Shift to run, drag to look, Esc back to the story). Hover objects to see the fact they came from.

## Layout

```
shared/        world model shared by both sides: types, reducer (facts + ops → WorldState), component API
orchestrator/  turn loop (run.ts), agents + prompts, Node component checker, headless capture
viewer/        Vite + three.js: runtime (scene diffing, avatar, atmosphere), UI (feed, timeline)
runs/<id>/     run.json, timeline.jsonl, shots/turn-NNN{-build,-overview,}.jpg, components/*.js (readable copies)
```

## Guardrails

- Components are procedural ES modules (`build(THREE, p, ctx)`, optional `update`). No imports, DOM or network. Randomness comes from a seeded `ctx.rng` so replays are identical.
- Each turn's ops are checked before they're accepted: the reducer rejects bad ops, and a worker thread runs every touched component with a 4 s timeout (errors, triangle budget). The Builder gets one retry with the errors. Whatever still fails becomes a placeholder.
- Budgets: 20 KB per component, 30k triangles per instance, 200k per scene, 8 lights, and the run folder stops at 45 MB.
