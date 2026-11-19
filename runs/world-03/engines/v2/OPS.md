# Engine v2: hand-written WebGL night scene, light as the hero

Per-pixel fog fades the ground into a vertical sky gradient (horizon glow = the `sky` color, darkening to near-black overhead) with sparse twinkling stars. The glowing lantern is a per-pixel point light with falloff and flicker; things get soft blob shadows. Low flat boxes (height < 0.3) show a flagstone texture with glowing pale-blue seams for free. Glowing things get a halo and emit drifting sparks; faint dust motes float around the Wanderer. The camera slowly breathes. The Wanderer is a cone body with a round head.

The world is about 8 KB under the engine. World data counts toward the budget: keep ids and colors short.

Things are arrays `[shape, at, size, color, fact, glow]` (glow only present when set).

Ops:
- `{ "op": "set", "id": "p1", "shape": "box"|"disc"|"cone"|"ball"|"ramp", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge; new things default to a 1 m grey box). Units are meters, `at` = center of the base, size = [width x, height y, depth z].
  - `box`: block. If h < 0.3 it is a flagstone slab with glowing seams on top.
  - `cone`: round cone, base ellipse w x d, apex at height h (hooks, hoods, wings: scale it small and thin).
  - `ball`: smooth ellipsoid filling the w x h x d box.
  - `disc`: flat soft-edged ellipse (w and d are diameters, h ignored), good for glows on the ground.
  - `ramp`: wedge; the surface is at base level on its north (-Z) edge and rises to height h on its south (+Z) edge, i.e. walking north it descends. For a slope going down into the ground, put the base below ground: `at.y = -h`, so the high edge is flush with the ground.
  - `glow`: `1` = emissive, flickering, halo, sparks, and it becomes the scene's point light (the last glow-1 thing wins; use the lantern). `2` = emissive with halo and sparks of its own color (e.g. the blue moth, glitter) but never takes over the light.
- `{ "op": "ramp", "id": "r", "at": [..], "size": [..], "color": "#..", "fact": ".." }` shorthand for `set` with shape ramp.
- `{ "op": "del", "id": "p1" }`
- `{ "op": "sky", "color": "#2a2a4a" }` horizon glow / fog color (overhead is derived, about 27% of it).
- `{ "op": "ground", "color": "#12121c" }` huge ground plane (fogs away into the horizon glow).
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east).

Colors must be `#rrggbb`. Unknown shapes or bad colors are rejected.

Examples:
- Hook pole: `{ "op": "set", "id": "pl", "shape": "box", "at": [1, 0, -42], "size": [0.12, 2.2, 0.12], "color": "#5a3f24", "fact": "distant_lantern" }`
- Hook tip: `{ "op": "set", "id": "hk", "shape": "cone", "at": [1, 2.2, -42], "size": [0.12, 0.3, 0.12], "color": "#1a1a22" }`
- Moth: `{ "op": "set", "id": "mo", "shape": "cone", "at": [0.6, 2.4, -42], "size": [0.1, 0.06, 0.1], "color": "#bfe4ff", "glow": 2 }`
- Slope: `{ "op": "ramp", "id": "sl", "at": [0, -3, -52], "size": [10, 3, 12], "color": "#12121c" }`
