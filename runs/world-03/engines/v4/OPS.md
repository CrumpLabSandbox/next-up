# Engine v4: hand-written WebGL night scene with liquid light, light shafts, a moon and graded color

Same world format and ops as v3. Things are arrays `[shape, at, size, color, fact, glow]` (glow only present when set). World data counts toward the budget: keep ids and colors short.

Look: procedural dune terrain (flat y = 0 near anything placed), cold moon key light with crisp shadow maps, a visible moon disc and halo in the sky (ahead and to the right of a north-facing Wanderer), low mist with a faint volumetric glow, and a teal-shadow / amber-highlight grade with a vignette. Stone (glow-less things) has grain, cracks and chips, rim light, and darkens where it meets the ground (contact shadows are drawn automatically under solid things sitting at y 0 to 0.3). Dust motes drift in the air. The Wanderer is a rounded egg-shaped figure with a round head.

Liquid light: a glow-2 flat box (h < 0.15, w and d both > 0.4) or a glow-2 `disc` renders as reflective liquid: animated ripples, soft sky and moon reflection, fresnel brightening at grazing angles. Use it for pools, puddles and lakes. Thin glow-2 boxes (w or d <= 0.4) stay thin light threads.

Light shafts and bloom: the lantern (glow 1), the largest bluish glow-2 `ball` (the orb) and the largest warm (amber) glow-2 `ball` (a doorway glow) each get soft bloom and radial light shafts. Every glow thing blooms and emits sparks (about 22 each) in its own color.

Ops:
- `{ "op": "set", "id": "p1", "shape": "box"|"disc"|"cone"|"ball"|"ramp", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge; new things default to a 1 m grey box). Units are meters, `at` = center of the base, size = [width x, height y, depth z].
  - `box`: block of grained stone. If h < 0.12 it is a flagstone slab with glowing seams on top (a path).
  - `cone`: round cone, base ellipse w x d, apex at height h.
  - `ball`: smooth ellipsoid filling the w x h x d box. A flattened ball (h about 0.2) is a good rounded rock.
  - `disc`: flat soft-edged ellipse (w and d are diameters, h ignored). Plain: a dust pool or glow on the ground. With `glow: 2`: liquid.
  - `ramp`: wedge; surface at base level on its north (-Z) edge, rising to height h on its south (+Z) edge. Ramps sit under the terrain unless raised.
  - `glow`: `1` = emissive, flickering, bloom, shafts, sparks, and it becomes the scene's point light and shadow caster (the last glow-1 thing wins; use the lantern). `2` = emissive with bloom and sparks of its own color (moth, glitter, light threads, slits, orb); never takes over the light. Glow things cast no shadows.
- `{ "op": "ramp", "id": "r", "at": [..], "size": [..], "color": "#..", "fact": ".." }` shorthand for `set` with shape ramp.
- `{ "op": "del", "id": "p1" }`
- `{ "op": "sky", "color": "#2a2a4a" }` horizon glow / fog color.
- `{ "op": "ground", "color": "#12121c" }` terrain color.
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east).

Colors must be `#rrggbb`. Unknown shapes or bad colors are rejected.

Examples:
- Water pool on a slab: `{ "op": "set", "id": "pl", "shape": "box", "at": [0, 0.7, -74], "size": [1.5, 0.04, 1.5], "color": "#9ad0ff", "fact": "altar_pool", "glow": 2 }`
- Round pond: `{ "op": "set", "id": "pd", "shape": "disc", "at": [4, 0.02, -60], "size": [6, 0.05, 6], "color": "#5a8ad0", "glow": 2 }`
- Hook pole: `{ "op": "set", "id": "pole", "shape": "box", "at": [1, 0, -42], "size": [0.12, 2.2, 0.12], "color": "#5a3f24", "fact": "distant_lantern" }`
- Moth: `{ "op": "set", "id": "mo", "shape": "cone", "at": [0.6, 2.4, -42], "size": [0.1, 0.06, 0.1], "color": "#bfe4ff", "glow": 2 }`
- Rock: `{ "op": "set", "id": "rk", "shape": "ball", "at": [2, 0, -40], "size": [0.6, 0.3, 0.5], "color": "#4a4e66" }`
- Light thread: `{ "op": "set", "id": "th", "shape": "box", "at": [0, 0.03, -60], "size": [0.05, 0.04, 10], "color": "#9ad0ff", "glow": 2 }`
