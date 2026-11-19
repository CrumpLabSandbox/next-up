# next-up

Iteratively building an emergent 3D sim.

Work directly on `main`. Don't create branches, worktrees or PRs unless asked.

## Project notes

- `npm run typecheck`, `npm run selftest` (no model calls) and a short `npm run world -- --turns 3 --id <name>` are the checks.
- `shared/` is imported by both the orchestrator (tsx) and the viewer (Vite). `shared/component-api.js` stays plain JS because the Node checker worker loads it directly.
- The timeline is the source of truth. Keep `shared/world.ts` deterministic so old runs replay identically.
- Agent prompts live in `orchestrator/prompts/*.md`.
- Ladder runs (`orchestrator/run-ladder.ts`) keep old engines frozen under `runs/<id>/engines/vN/`. Never edit a frozen engine, because replays depend on it. Engine drafts live in `work/` (gitignored).
