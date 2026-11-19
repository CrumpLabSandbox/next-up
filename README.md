# next-up

An emergent 3D world that doesn't exist until someone looks at it.

**Watch the replays:** https://crumplabsandbox.github.io/next-up/

Three Claude agents take turns:

| Agent | Sees | Does |
|---|---|---|
| **Wanderer** (player) | the Narrator's words + a screenshot of the real 3D view | takes one text-adventure action |
| **Narrator** (world-keeper) | the action, all established facts, the view | narrates and records new or changed **facts** (stable ids, descriptions, placements) |
| **Builder** | the new facts, the current scene and its code, the view | emits **ops**: defines procedural three.js components and places, updates and removes entities, changes sky and light, moves the wanderer |

Every step is appended to `runs/<id>/timeline.jsonl`. The world at any point is just the replay of that log, so the viewer can play the whole thing back, scrub and watch things materialize.

## Use

```bash
npm install
npx playwright install chromium-headless-shell   # once, for screenshots

npm run world -- --turns 50                  # new run (uses your Claude subscription via `claude -p`)
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
runs/<id>/     run.json, timeline.jsonl, shots/turn-NNN.jpg, components/*.js (readable copies)
```

## Guardrails

- Components are procedural ES modules (`build(THREE, p, ctx)`, optional `update`). No imports, DOM or network. Randomness comes from a seeded `ctx.rng` so replays are identical.
- Each turn's ops are checked before they're accepted: the reducer rejects bad ops, and a worker thread runs every touched component with a 4 s timeout (errors, triangle budget). The Builder gets one retry with the errors. Whatever still fails becomes a placeholder.
- Budgets: 20 KB per component, 30k triangles per instance, 200k per scene, 8 lights, and the run folder stops at 45 MB.
