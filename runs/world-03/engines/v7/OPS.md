# Engine v7: three.js PBR renderer, sky-driven dawn/night look

Same world format and ops as v6. Things are arrays `[shape, at, size, color, fact, glow]` (glow only present when set). World data counts toward the budget: keep ids and colors short.

New in v7 (all automatic, no new ops):
- **The `sky` colour drives the whole look.** A light sky (luminance above about 0.45, e.g. `#ffe6b0`) means **dawn**: no stars or moon, a low warm sun disc with halo and god-rays (low in the north, slightly east), a gradient from the sky colour at the horizon to lavender overhead, warm key light with long shadows, lavender hemisphere fill, golden haze, and drifting dust that glints in the sun. A dark sky (e.g. `#2a2a4a`) keeps the **night** look: stars, cold moon, blue fill, blue moonlight shadows. Pick the sky colour as the horizon haze colour.
- **PBR materials** (standard physically based, with an environment taken from the sky): masonry has procedural brick with normal and roughness maps; flagstone paths and floor tops have beveled slabs; plain stone has grain and cracks; the ground is real dune terrain with wind ripples and no striping.
- **Shadows**: up to 4 shadow-casting point lights (the lights flicker) plus a directional sun/moon with soft PCF shadows.
- **Post**: GTAO ambient occlusion, bloom, ACES tone mapping, depth of field (focused around the Wanderer), vignette and light film grain.
- **Glass and liquid**: a glow-2 thin box becomes glass (vertical pane, one side <= 0.15 and the others >= 0.4) or liquid (flat slab, h < 0.15 and w, d > 0.4); a glow-2 `disc` is liquid. Other glow things are bright emissive materials with bloom.
- **Particles** are GPU points: sparks rise from glow-1 things, glitter drifts around small glow-2 things, dust motes float near the Wanderer and each light.
- **Overview camera**: ceilings are hidden, structures get a rim-lit silhouette, paths are brightened, the Wanderer has a gold ring, fog is thin.
- Falls back to the v6 engine if WebGL2 or three.js fails (same world, no new features).

Rules of thumb:
- Colors are multiplied by the texture, then lit physically: use mid-tone colors for stone (brightened a little internally), and saturated colors for glows.
- Strong images come from warm light against cool shade: put `glow: 1` lanterns and warm glow things near mid-tone masonry; use a light `sky` for dawn scenes.
- Big far-away `glow: 2` balls (any side > 4) become soft glow sprites (suns, sky glow).

Look (automatic, driven by the same ops):
- **Point lights**: every `glow: 1` thing (nearest the Wanderer first, max 4), then the largest bluish glow-2 `ball` (the orb), then the largest warm glow-2 `ball`, while fewer than 4. They flicker and cast shadows.
- **Masonry**: a glow-less `box` with any side >= 2.9 m (and h >= 0.12) is brick on its sides (about 0.6 x 0.25 m bricks, world-aligned). A low one (top below 3.5 m) gets a flagstone top. A flat slab at y >= 3 with w and d > 5 is a ceiling (hidden in the overview).
- **Flagstone**: a glow-less `box` with h < 0.12.
- **Ceiling light strips**: a glow-2 `box` with a thin side (<= 0.4), long side >= 3 m and y >= 3 casts light shafts down to the floor.
- **Instancing**: 3 or more identical non-glow boxes/cones (same shape, size, color) are drawn instanced.
- **Sway**: glow-1 things hanging at y >= 1 sway slowly.
- The Wanderer is a hooded, cloaked figure standing on whatever solid box top lies under them.

Ops:
- `{ "op": "set", "id": "p1", "shape": "box"|"disc"|"cone"|"ball"|"ramp", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge; new things default to a 1 m grey box). Units are meters, `at` = center of the base, size = [width x, height y, depth z].
  - `box`: block of stone. h < 0.12 = flagstone slab (a path). A side >= 2.9 = masonry.
  - `cone`: round cone, base ellipse w x d, apex at height h.
  - `ball`: smooth ellipsoid filling the w x h x d box. A flattened ball (h about 0.2) is a good rounded rock.
  - `disc`: flat ellipse (w and d are diameters, h ignored). Plain: a soft dust pool on the ground. With `glow: 2`: liquid.
  - `ramp`: wedge; surface at base level on its north (-Z) edge, rising to height h on its south (+Z) edge. Ramps sit under the terrain unless raised.
  - `glow`: `1` = emissive, flickering, bloom, sparks, a shadow-casting point light (max 4 in total), sways if hung at y >= 1. `2` = emissive with bloom and glitter (moth, slits, orb, ceiling strips, seams), or glass / liquid as described above. Glow things cast no shadows.
- `{ "op": "ramp", "id": "r", "at": [..], "size": [..], "color": "#..", "fact": ".." }` shorthand for `set` with shape ramp.
- `{ "op": "del", "id": "p1" }`
- `{ "op": "sky", "color": "#ffe6b0" }` horizon colour; its brightness picks dawn or night.
- `{ "op": "ground", "color": "#181838" }` terrain colour (lightened internally, warmed at dawn).
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east).

Colors must be `#rrggbb`. Unknown shapes or bad colors are rejected.

Examples:
- Hall wall: `{ "op": "set", "id": "w1", "shape": "box", "at": [-17, 0, -126], "size": [1, 8, 32], "color": "#2a2e4c", "fact": "pole_hall" }`
- Ceiling light strip (shafts): `{ "op": "set", "id": "ls", "shape": "box", "at": [6, 7.9, -126], "size": [0.3, 0.1, 28], "color": "#9ad0ff", "fact": "pole_hall", "glow": 2 }`
- Hanging lantern (light, swaying): `{ "op": "set", "id": "ln", "shape": "box", "at": [0, 1.5, -135.7], "size": [0.4, 0.45, 0.4], "color": "#ffb050", "fact": "lit_pole", "glow": 1 }`
- Row pole (identical ones are instanced): `{ "op": "set", "id": "e1", "shape": "box", "at": [-2.5, 0, -113.7], "size": [0.1, 2, 0.1], "color": "#1a1a22", "fact": "empty_poles" }`
- Water pool on a slab: `{ "op": "set", "id": "pl", "shape": "box", "at": [0, 0.7, -74], "size": [1.5, 0.04, 1.5], "color": "#9ad0ff", "fact": "altar_pool", "glow": 2 }`
- Glass pane: `{ "op": "set", "id": "gp", "shape": "box", "at": [3, 0, -140.7], "size": [0.6, 1, 0.05], "color": "#7ab8ff", "fact": "glass_niche", "glow": 2 }`
- Round pond: `{ "op": "set", "id": "pd", "shape": "disc", "at": [4, 0.02, -60], "size": [6, 0.05, 6], "color": "#5a8ad0", "glow": 2 }`
- Moth: `{ "op": "set", "id": "mo", "shape": "cone", "at": [0.6, 2.4, -42], "size": [0.1, 0.06, 0.1], "color": "#bfe4ff", "glow": 2 }`
- Rock: `{ "op": "set", "id": "rk", "shape": "ball", "at": [2, 0, -40], "size": [0.6, 0.3, 0.5], "color": "#4a4e66" }`
- Light thread: `{ "op": "set", "id": "th", "shape": "box", "at": [0, 0.03, -60], "size": [0.05, 0.04, 10], "color": "#9ad0ff", "glow": 2 }`
