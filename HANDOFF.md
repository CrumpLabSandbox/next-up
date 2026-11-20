# next-up: handoff notes

Hi Sam. These notes cover what next-up is, how it works, and how to run your own worlds. The [README](README.md) is the short reference. This document is the longer tour: the design, the moving parts, and the gotchas we hit along the way.

**Live replays:** https://crumplabsandbox.github.io/next-up/

---

## 1. The idea

A 3D world that doesn't exist until someone looks at it. A Wanderer stands in a void. As they look, ask and move, a team of Claude agents decides what's there, builds it in three.js, art-directs it, runs it as a game and films it, one turn at a time. Everything each agent says and does is recorded to a timeline, and a web viewer replays the whole thing: the agents' conversation in a side feed, and the world assembling itself in the main view.

The project evolved through six runs, and each one added an idea:

| Run | What it added |
|---|---|
| world-01 | Wanderer, Narrator and Builder. Replay viewer. |
| world-02 | **Graphic Designer** plus a Builder "polish pass" each turn. |
| world-03 | **Ladder:** the whole world (engine code too) starts at 4 KB and grows ×4 per tier. An **Engineer** agent rewrites the rendering engine itself (v0 → v13). Engines are frozen per version so replays stay correct. |
| world-04 | Back to a fixed three.js engine with **resource tiers** (content bytes, triangles, lights) that the Designer unlocks. Realism features (sun and horizon sky, bloom, PBR, image-based light). Probing Wanderer questions and detailed builds. A **Reviewer** on Fable critiques the whole run every 5 turns. |
| world-05 | **Human Wanderer:** a person types the Wanderer's moves in the viewer. |
| world-06 | **Game Master** (rules, dice, an open set of mechanics, a HUD) and a **Cutscene Director** (a short film after every turn, with breakthroughs). Rare role swaps let the person play another agent for a turn. |

`npm run world` is the world-06 setup. The older modes are still runnable (see §4).

---

## 2. Setup

Prerequisites:
- **Node 22+** (developed on Node 26) and npm.
- **The Claude Code CLI (`claude`), logged in with a Claude subscription.** Every agent call is `claude -p …` (headless mode), and the orchestrator **unsets `ANTHROPIC_API_KEY`** so calls bill to the logged-in subscription rather than an API key. If you'd rather use the API, remove the `delete env.ANTHROPIC_API_KEY` lines in `orchestrator/claude.ts`.
- The Sonnet and Fable models must be available to your account. The Reviewer uses `--model fable`, and everything else defaults to `sonnet`.
- **tmux** is optional but recommended for long runs.

```bash
git clone https://github.com/CrumpLabSandbox/next-up.git && cd next-up
npm install
npx playwright install chromium-headless-shell   # headless browser used for screenshots
npm run typecheck && npm run selftest            # no model calls: checks the render pipeline end to end
```

`selftest` writes `runs/_selftest/shot.jpg`. If it looks like a path, a lantern and a hooded figure under a sunset, rendering works.

---

## 3. Running a world

```bash
npm run viewer                        # the viewer at http://localhost:5173; it follows running worlds live
npm run world -- --human --id my-world  # a Game Master run where you are the Wanderer (20 turns)
```

In the viewer, pick the run. When it's your turn an input box appears ("Your move · turn N"). Type, then press Send. You can also submit from a terminal: `npm run say -- my-world "open the door"`.

Useful options (`orchestrator/run.ts`):

| Option | Meaning |
|---|---|
| `--turns 20` | planned length (default 20) |
| `--premise "…"` | an opening the Narrator must honor (default: start from the void) |
| `--human` | you play the Wanderer (without it, an AI Wanderer plays) |
| `--no-game-master` | world-04 style: no Game Master or cutscenes |
| `--no-tiers` | world-01/02 style: no resource tiers |
| `--reviewer-every 5`, `--reviewer-model fable` | Reviewer cadence and model |
| `--model sonnet` | model for all other agents |
| `--resume <id> [--turns 30]` | continue after a crash or stop, or **extend** a finished run |

- **Stopping cleanly:** `touch runs/<id>/STOP` (finishes the current turn), or press Ctrl-C once.
- **Running in the background and publishing as you go:**
  ```bash
  tmux new -d -s world 'npm run world -- --human --id my-world'
  tmux new -d -s publish 'scripts/publish-run.sh my-world'   # commits and pushes runs/my-world every 15 minutes
  ```
  Use tmux for publishing rather than a background job with a time limit, because runs take hours.
- **Watching from a phone or tablet on the same Wi-Fi:** `npx vite --config viewer/vite.config.ts --host`, then open the "Network" URL it prints. The input box works there too.
- **Timing:** a Game Master turn takes about 3–4 minutes (about 6–8 model calls). A 20-turn run is about 1–1.5 hours of compute, plus however long you take to type. A 50-turn world-04-style run is about 2 hours.

---

## 4. Architecture

```
orchestrator/   Node + TypeScript (run with tsx). The turn loop, the agents, validation, headless rendering.
shared/         Imported by both the orchestrator and the viewer: data model, reducers, game and cutscene logic.
viewer/         Vite + three.js. The replay viewer, plus the engine host page used for screenshots.
runs/<id>/      One folder per world: run.json, timeline.jsonl, shots/, components/, input/
engine-seed/    The 3 KB v0 engine for ladder runs.
scripts/        publish-run.sh (periodic push), say.mjs (submit a move from the terminal)
```

### The turn loop (`orchestrator/run.ts`)

```
Wanderer (you or AI)
  → Game Master: rules on the move, may use seeded dice, changes game state, sets pacing
  → Narrator: prose plus physical "facts" (id, description, placement) and the Wanderer's movement
  → Builder: three.js ops (define components, add/update/remove entities, environment, moveAvatar)
  → render (screenshot)
  → Graphic Designer: critique, 2–4 concrete suggestions, style guide, may request the next resource tier
  → Builder polish pass → render
  → Cutscene Director: a short film linking this turn to the next
  → every 5 turns: Reviewer (Fable) looks at everything and sends direction to each agent
```

Each agent is one stateless `claude -p` call with a system prompt from `orchestrator/prompts/*.md`, a JSON schema (`--json-schema`, so outputs come back as structured data) and, usually, the latest screenshot as an image. They don't keep sessions. The orchestrator gives each one exactly the context it needs: story so far, facts, scene summary with component code, limits, the latest Reviewer notes and so on. See `orchestrator/agents.ts` and `orchestrator/gm-agents.ts`. The shared `turnContext` object in `agents.ts` carries per-turn context (resource limits, the latest review, the game state, the Game Master's ruling, the arc position) to every call.

### The timeline is the source of truth

`runs/<id>/timeline.jsonl` has one JSON event per line: `player`, `gamemaster`, `narrator`, `builder` (stage `build` or `polish`), `render`, `designer`, `cutscene`, `reviewer`, `budget`, `system` (plus `engineer` and `engine` in ladder runs). The world at any point is just a replay:
- **Scene:** `shared/world.ts`. `applyOp` applies Builder ops to a `WorldState` of components, entities, facts, environment and avatar.
- **Game state:** `shared/game.ts`. `applyGameOp` applies Game Master ops to an open set of mechanics.
- **Rule:** keep the reducers deterministic and backward-compatible. Old runs must replay identically. Components must use `ctx.rng`, never `Math.random` or `Date`.

### Components (how the Builder makes 3D)

The Builder writes small ES modules as strings:

```js
export function build(THREE, p, ctx) { /* return an Object3D */ }
export function update(obj, t, dt, p, ctx) { /* optional, per frame */ }
```

`ctx` provides seeded randomness, noise, material helpers (`pbr`, `mat`), `dataTexture`, and `ctx.lib` (`mergeGeometries`, `ImprovedNoise`, `SimplexNoise`). See `shared/component-api.js` and `shared/component-lib.js`.

Each component is loaded through a `data:` URL import in both Node and the browser. Before ops are accepted, `orchestrator/check.ts` runs every touched component in a **worker thread with a 4-second timeout** (catching errors, infinite loops and triangle counts). In tiered runs, `overLimits` also renders a probe to check the triangle and light limits. Failures go back to the Builder for one retry. Anything that still fails becomes a placeholder or is dropped, and the run keeps going.

### Rendering and screenshots

- `viewer/src/runtime/world-view.ts` is the three.js runtime: scene diffing, the avatar, the atmosphere (`atmosphere.ts`), the follow, orbit and walk cameras, bloom post-processing and cutscene playback.
- The orchestrator renders screenshots by starting a Vite server and **headless Chromium (Playwright)** and calling `window.__nextup.render(state)` on `index.html?capture=1` (see `orchestrator/capture.ts`). So the agents see exactly what the viewer shows.
- Each turn saves `shots/turn-NNN-build.jpg` (before polish), `turn-NNN.jpg` (final), `turn-NNN-overview.jpg` (the Designer's wide shot) and `turn-NNN-cut-{1,2,3}.jpg` (cutscene stills).

### The viewer

- `viewer/src/main.ts`: run picker, timeline scrubbing and playback, live polling (every 2 seconds), the input box, the HUD, toasts and cutscene playback.
- `viewer/src/stage.ts`: each engine runs in an **iframe** (`engine-host.html?engine=…`). The legacy three.js runtime is wrapped as engine `legacy`. Ladder runs load each frozen engine version and cross-fade between them at handoffs.
- `viewer/src/model.ts`: rebuilds the world at any timeline position. Legacy and tiered runs use `shared/world.ts`. Ladder runs replay each engine's own `world.js`.
- `viewer/src/ui/feed.ts` (the agent feed) and `viewer/src/ui/hud.ts` (the game HUD).
- `viewer/vite.config.ts`: serves `runs/` and `work/` in dev, plus `POST /api/input` for the input box. `npm run build` copies the runs into `dist/` for GitHub Pages (`.github/workflows/pages.yml` deploys on every push to `main`).

---

## 5. The newer systems in more detail

### Resource tiers (`shared/ladder.ts`, `THREE_TIERS`)

| Tier | Content bytes | Triangles | Lights |
|---|---|---|---|
| 1 | 8 KB | 8k | 1 |
| 2 | 32 KB | 30k | 2 |
| 3 | 128 KB | 80k | 4 |
| 4 | 512 KB | 200k | 6 |
| 5 | 2 MB | 500k | 8 |

The Designer asks for each unlock (`requestUnlock`), and one is granted at most every 6 turns (`THREE_UNLOCK_GAP`). Every agent sees a usage line each turn. Over-limit builds are rejected and retried. The Builder's code gets visibly more detailed as tiers open. The run folder is capped at 40 MB.

### Game Master (`orchestrator/prompts/gamemaster.md`, `shared/game.ts`, `orchestrator/gm-agents.ts`)

- **Research basis:** quality-based narrative (Failbetter's StoryNexus, where state is an open bag of named qualities), *Blades in the Dark* progress clocks, PbtA moves (2d6: 10+ is a hit, 7–9 a partial success, 6 or less a miss) with fail forward, and the *Left 4 Dead* AI Director's build-up, peak and relax pacing. The prompt includes a catalog of about 40 mechanic templates (resources, clocks, conditions, inventory, abilities, progression, quests, social, economy, knowledge, world flags).
- **Dice:** each turn the orchestrator pre-rolls **seeded** 2d6 (keyed by run id and turn, so resumes match). The Game Master decides whether to use them, the modifier, whether the roll is shown, and how it's presented ("dice", "a heartbeat count", "an omen"…). The orchestrator computes the total and band itself, so the Game Master can't fudge them.
- **Game state** is an open set of mechanics, changed through ops: `define`, `set`, `delta`, `tick`, `addItem`, `removeItem`, `objective`, `retire`. New kinds and fields can be invented mid-run.
- **HUD:** hidden until a mechanic has a `ui`. Built-in widgets are `bar`, `clock`, `slots`, `journal`, `chips`, `counter`, `relations`, `stats` and `text`. The Game Master can also invent widgets declaratively: `{type: "custom", pieces: [{text}, {bar}, {pips}, {icons}, {list}]}`. No generated code runs in the viewer.
- **Role swaps:** rare, at most `maxTurns / 10` per run and at least 6 turns apart. On the next turn the person plays the Narrator, Designer or Game Master while an AI walks the Wanderer. The relevant agent then formats the person's words into its usual structured output. (This path is the least exercised; see §7.)

### Cutscenes (`orchestrator/prompts/cutscene.md`, `shared/cutscene.ts`)

- **Format:** a cutscene is data: `shots` (camera keyframes with ease), `animations` (entities, props or the Wanderer), `props` (temporary instances of existing components), `env` (light and sky blends), `captions` (title or subtitle), `letterbox` and `fade`.
- **One sampler:** `cameraAt`, `poseAt` and `envAt` sample it at any time `t`, so the viewer's playback and the orchestrator's stills are identical.
- **Limits:** `CUTSCENE_TIERS` caps duration and counts per resource tier, from tier 1 (8 seconds, one shot) up to 22 seconds and 8 shots.
- **Breakthroughs:** nominated by the Game Master or Reviewer, or by about a 10% seeded chance, capped per run. They add two tiers of headroom and license a striking style.
- **Validation:** cutscenes are checked (`validateCutscene`) and three stills are rendered. Problems go back for one retry, and otherwise the cutscene is skipped.
- **Playback:** the viewer plays cutscenes between turns, with Skip and a "cutscenes" toggle. Letterbox, fades and captions are drawn by `viewer/src/host.ts`.

### Ladder runs and the Engineer (world-03, `npm run world:ladder`)

`orchestrator/run-ladder.ts`. Each engine is `world.js` (a pure reducer with migration from the previous format) plus `engine.js` (the renderer), following `orchestrator/prompts/engine-contract.md`.

The Engineer is a **tool-using** Claude Code session working in `work/<run>/vN/`. It's started with `claude -p` in acceptEdits mode, with an allowlist of npm and node commands. It iterates against `node orchestrator/engine-tool.mjs check`, which checks:
- the build (esbuild)
- the exports
- a deterministic migration that keeps every story fact
- the byte budget (libraries count, so three.js only fits from the 1 MB tier)
- a real headless render
- that two renders of the same world come out pixel-identical
- that the live loop runs without errors

Passing engines are frozen in `runs/<id>/engines/vN/` and must never be edited.

---

## 6. Gotchas we hit

- **Black frames from bloom.** One NaN pixel from any component got smeared across the whole frame by `UnrealBloomPass`. `world-view.ts` now scrubs NaN and Inf values (and clamps extremes) in a pass before bloom. Keep that pass.
- **Brightness.** three.js's stock `Sky` shader is far too bright for this pipeline. Our own `skyMode: "physical"` shader (in `atmosphere.ts`) keeps values in range.
- **`npm run viewer` printed nothing.** That was `logLevel: 'warn'` in the Vite config, which also hid the URL banner. Removed. Headless servers pass `logLevel: 'silent'` explicitly.
- **Engine host ordering.** Engines must receive `setWorld` before `start()`. The host enforces this, and `engine-tool check` exercises the live path.
- **Swiftshader.** Headless WebGL runs on SwiftShader (`--use-angle=swiftshader --enable-unsafe-swiftshader`). It's slow at 200k+ triangles but deterministic.
- **Background jobs with time limits** (for example in an agent harness) die after about 2 hours. Run long worlds and the publisher in tmux.
- **Subscription billing** depends on unsetting `ANTHROPIC_API_KEY`, `CLAUDE_CODE_OAUTH_TOKEN` and `CLAUDECODE` in the child environment (`orchestrator/claude.ts`).
- **Agents see what you see.** If a render is broken, the agents spend turns reacting to it. world-04's Designer kept saying "the story view is black again".

---

## 7. Known limitations and ideas

- **Role swaps** are implemented but were never triggered end to end during testing. Watch the input box label on a swap turn.
- **The ladder engines** (world-03) used little of their top budget tiers after three.js arrived. The ending got washed out. Ideas: compare each new engine's screenshot against the previous one before accepting it, and give the top tiers explicit targets.
- **The Builder** sometimes oscillates against the limits at tier 1 (retries cost time). Cutscene props can only use existing components.
- **Recorded screenshots** keep any rendering bugs from their time (for example world-04 turns 30–44). The live 3D view replays correctly.
- **Possible next steps:** custom HUD widgets written by an Engineer, sound, a before/after slider for polish passes, and multiple humans playing different agents.

---

## 8. Common changes

- **Tune an agent:** edit its prompt in `orchestrator/prompts/`. Prompts aren't needed for replay, so editing them is always safe.
- **Add an agent:**
  1. Add a function in `agents.ts` or `gm-agents.ts` (system prompt, schema, context).
  2. Add an event type in `shared/types.ts`.
  3. Call it from the loop in `run.ts` and `record()` its event.
  4. Render it in `viewer/src/ui/feed.ts` (and give it a color in `style.css`).
  5. Add a playback delay in `main.ts` `delayFor`.
- **Add a scene op or environment field:** update `shared/types.ts` and `applyOp` in `shared/world.ts`, render it in `world-view.ts` or `atmosphere.ts`, document it in `prompts/builder.md`, and give it a default that leaves old runs unchanged.
- **Add a HUD widget:** add a case in `viewer/src/ui/hud.ts` and document it in `prompts/gamemaster.md`.
- **Checks before a long run:** `npm run typecheck`, `npm run selftest`, then a 2–3 turn test (`npm run world -- --turns 3 --id test-x --reviewer-every 2`), and look at the shots in `runs/test-x/shots/`.

Branching policy for this repo: work directly on `main` (see `CLAUDE.md`).
