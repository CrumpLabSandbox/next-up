# Engine v1: tiny hand-written WebGL, light as the hero

Perspective camera, per-vertex lambert lighting (faint ambient + a point light at the glowing thing, i.e. the lantern), distance fog fading into the sky color, soft-edged radial discs, additive halo + flicker on glowing things, and a few drifting dust motes. Everything is flat-colored. The engine itself uses almost the whole 4 KB budget, so the Builder has about zero spare bytes: prefer `del`/replacing things over adding new ones, and keep ids/colors short.

Things are arrays `[shape, at, size, color, fact, glow]` (glow only present when set).

Ops:
- `{ "op": "set", "id": "snake_id", "shape": "box" | "disc", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge). `at` = center of the base. `box`: w,h,d in meters. `disc`: flat circle/ellipse, w and d are diameters (h ignored); opacity fades softly to the rim. `glow: 1` makes it emissive (unlit, flickering, with a halo) and makes it the scene's point light (the last glowing thing wins). Any other shape name (e.g. `cone`) draws as a box.
- `{ "op": "del", "id": "snake_id" }`
- `{ "op": "sky", "color": "#rrggbb" }` sky and fog color.
- `{ "op": "ground", "color": "#rrggbb" }` huge ground plane (fogs away into the sky color).
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer.

Example: `{ "op": "set", "id": "lamp", "shape": "box", "at": [3, 0, -8], "size": [0.2, 0.4, 0.2], "color": "#ffb347", "fact": "lamp", "glow": 1 }`
