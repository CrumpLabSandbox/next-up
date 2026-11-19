# Engine v5: hand-written WebGL night scene with shadow-casting point lights, stone masonry halls, volumetric shafts and floor reflections

Same world format and ops as v4. Things are arrays `[shape, at, size, color, fact, glow]` (glow only present when set). World data counts toward the budget: keep ids and colors short.

Look (all automatic, driven by the same ops):
- **Point lights**: up to 4 shadow-casting point lights (6-face cube shadow maps): every `glow: 1` thing (nearest the Wanderer first), then the largest bluish glow-2 `ball` (the orb), then the largest warm glow-2 `ball`. Each lights and shadows its own surroundings, with warm bounce light on nearby walls. The moon still gives crisp shadows outdoors.
- **Masonry**: a glow-less `box` with any side >= 2.9 m (and h >= 0.12) is a wall/ceiling slab with procedural stone blocks and dark mortar seams (about 1.7 x 0.75 m courses, world-aligned). A flat slab (y >= 3, w and d > 5) is a ceiling: it shades the room, and is hidden in the overview so the interior reads.
- **Ceiling light strips**: a glow-2 `box` with a thin side (<= 0.4), long side >= 3 m and y >= 3 casts volumetric light shafts down to the floor and is mirrored on the floor (longest two).
- **Reflections**: glow things are reflected, as glossy streaks, on dust discs, flagstone tops and the terrain.
- **Fog**: exponential height fog and drifting low mist.
- **Instancing**: 3 or more identical non-glow boxes/cones (same shape, size, color) are drawn instanced, so rows of poles are cheap.
- **Sway**: glow-1 things hanging at y >= 1 (up to 4) sway slowly.
- **Overview camera**: higher contrast with a lifted ambient floor and thinner fog, so paths, glows and structures read from above.
- Stone (glow-less things) has grain, cracks, chips, rim light and contact shadows (drawn under solid things at y 0 to 0.3). Dust motes drift. The Wanderer is a rounded egg figure.

Ops:
- `{ "op": "set", "id": "p1", "shape": "box"|"disc"|"cone"|"ball"|"ramp", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge; new things default to a 1 m grey box). Units are meters, `at` = center of the base, size = [width x, height y, depth z].
  - `box`: block of grained stone. If h < 0.12 it is a flagstone slab with glowing seams on top (a path). If a side >= 2.9 it is masonry (see above).
  - `cone`: round cone, base ellipse w x d, apex at height h.
  - `ball`: smooth ellipsoid filling the w x h x d box. A flattened ball (h about 0.2) is a good rounded rock.
  - `disc`: flat soft-edged ellipse (w and d are diameters, h ignored). Plain: a dust pool or glow on the ground. With `glow: 2`: liquid.
  - `ramp`: wedge; surface at base level on its north (-Z) edge, rising to height h on its south (+Z) edge. Ramps sit under the terrain unless raised.
  - `glow`: `1` = emissive, flickering, bloom, shafts, sparks, a shadow-casting point light (max 4 lights in total) and it sways if hung at y >= 1. `2` = emissive with bloom and sparks of its own color (moth, glitter, light threads, slits, orb, ceiling strips); only the orb and a warm ball become lights when fewer than 4 glow-1 things exist. A glow-2 flat box (h < 0.15, w and d > 0.4) or glow-2 `disc` is reflective liquid. Glow things cast no shadows.
- `{ "op": "ramp", "id": "r", "at": [..], "size": [..], "color": "#..", "fact": ".." }` shorthand for `set` with shape ramp.
- `{ "op": "del", "id": "p1" }`
- `{ "op": "sky", "color": "#2a2a4a" }` horizon glow / fog color.
- `{ "op": "ground", "color": "#12121c" }` terrain color.
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east).

Colors must be `#rrggbb`. Unknown shapes or bad colors are rejected.

Examples:
- Hall wall: `{ "op": "set", "id": "w1", "shape": "box", "at": [-17, 0, -126], "size": [1, 8, 32], "color": "#2a2e4c", "fact": "pole_hall" }`
- Ceiling light strip (shafts): `{ "op": "set", "id": "ls", "shape": "box", "at": [6, 7.9, -126], "size": [0.3, 0.1, 28], "color": "#9ad0ff", "fact": "pole_hall", "glow": 2 }`
- Hanging lantern (light, swaying): `{ "op": "set", "id": "ln", "shape": "box", "at": [0, 1.5, -135.7], "size": [0.4, 0.45, 0.4], "color": "#ffb050", "fact": "lit_pole", "glow": 1 }`
- Row pole (identical ones are instanced): `{ "op": "set", "id": "e1", "shape": "box", "at": [-2.5, 0, -113.7], "size": [0.1, 2, 0.1], "color": "#1a1a22", "fact": "empty_poles" }`
- Water pool on a slab: `{ "op": "set", "id": "pl", "shape": "box", "at": [0, 0.7, -74], "size": [1.5, 0.04, 1.5], "color": "#9ad0ff", "fact": "altar_pool", "glow": 2 }`
- Round pond: `{ "op": "set", "id": "pd", "shape": "disc", "at": [4, 0.02, -60], "size": [6, 0.05, 6], "color": "#5a8ad0", "glow": 2 }`
- Moth: `{ "op": "set", "id": "mo", "shape": "cone", "at": [0.6, 2.4, -42], "size": [0.1, 0.06, 0.1], "color": "#bfe4ff", "glow": 2 }`
- Rock: `{ "op": "set", "id": "rk", "shape": "ball", "at": [2, 0, -40], "size": [0.6, 0.3, 0.5], "color": "#4a4e66" }`
- Light thread: `{ "op": "set", "id": "th", "shape": "box", "at": [0, 0.03, -60], "size": [0.05, 0.04, 10], "color": "#9ad0ff", "glow": 2 }`
