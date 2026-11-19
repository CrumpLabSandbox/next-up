# Engine v3: hand-written WebGL night scene with terrain, shadows, mist and bloom

Same world format and ops as v2. The ground is now a procedural heightfield: gentle dunes and gritty rock texture, always flat (y = 0) within a few meters of anything you place, so keep placing things at ground level y = 0 and they sit correctly. Real shadow maps: a faint cold moon key light casts shadows from all solid things, and the lantern (the glow-1 thing) casts its own. Low layered mist hugs the ground, tinted amber near the lantern and blue near the glow-2 things; height fog fades the horizon. Stone (glow-less things) has procedural grain and a pale-blue rim light on its silhouette. Glowing things bloom. Flagstone seams are thin and soft with a pulse travelling along the path. Thin glowing boxes (h < 0.15) are drawn even thinner as light threads. The Wanderer is a rounded cone with a round head; sparks and dust motes remain.

World data counts toward the budget: keep ids and colors short.

Things are arrays `[shape, at, size, color, fact, glow]` (glow only present when set).

Ops:
- `{ "op": "set", "id": "p1", "shape": "box"|"disc"|"cone"|"ball"|"ramp", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge; new things default to a 1 m grey box). Units are meters, `at` = center of the base, size = [width x, height y, depth z].
  - `box`: block of grained stone. If h < 0.12 it is a flagstone slab with glowing seams on top (a path).
  - `cone`: round cone, base ellipse w x d, apex at height h (hooks, hoods, wings: scale it small and thin).
  - `ball`: smooth ellipsoid filling the w x h x d box. A flattened ball (h about 0.2) is a good rounded rock.
  - `disc`: flat soft-edged ellipse (w and d are diameters, h ignored), good for glows or dust pools on the ground.
  - `ramp`: wedge; the surface is at base level on its north (-Z) edge and rises to height h on its south (+Z) edge. Ramps sit under the terrain unless raised, so use them for steps and ledges above ground.
  - `glow`: `1` = emissive, flickering, bloom, sparks, and it becomes the scene's point light and shadow caster (the last glow-1 thing wins; use the lantern). `2` = emissive with bloom and sparks of its own color (the blue moth, glitter, light threads, slits); it never takes over the light. Glow things cast no shadows. The glow-2 things' average position tints the mist blue.
- `{ "op": "ramp", "id": "r", "at": [..], "size": [..], "color": "#..", "fact": ".." }` shorthand for `set` with shape ramp.
- `{ "op": "del", "id": "p1" }`
- `{ "op": "sky", "color": "#2a2a4a" }` horizon glow / fog color (overhead is derived, about 27% of it).
- `{ "op": "ground", "color": "#12121c" }` terrain color (fogs away into the horizon glow).
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east).

Colors must be `#rrggbb`. Unknown shapes or bad colors are rejected.

Examples:
- Hook pole: `{ "op": "set", "id": "pl", "shape": "box", "at": [1, 0, -42], "size": [0.12, 2.2, 0.12], "color": "#5a3f24", "fact": "distant_lantern" }`
- Moth: `{ "op": "set", "id": "mo", "shape": "cone", "at": [0.6, 2.4, -42], "size": [0.1, 0.06, 0.1], "color": "#bfe4ff", "glow": 2 }`
- Rock: `{ "op": "set", "id": "rk", "shape": "ball", "at": [2, 0, -40], "size": [0.6, 0.3, 0.5], "color": "#4a4e66" }`
- Light thread: `{ "op": "set", "id": "th", "shape": "box", "at": [0, 0.03, -60], "size": [0.05, 0.04, 10], "color": "#9ad0ff", "glow": 2 }`
