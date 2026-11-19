# Engine v0: flat boxes and cones

A tiny 2D-canvas renderer: flat-shaded, axis-aligned boxes and four-sided cones, a sky color and an optional flat ground color. No rotation, no textures, no animation, no lights. The world JSON counts toward the budget. Things are stored as compact arrays, so each costs about 60 bytes.

Ops:
- `{ "op": "set", "id": "snake_id", "shape": "box" | "cone", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id" }` creates or updates a thing (fields merge). `at` is the center of its base. A cone's height is `h`.
- `{ "op": "del", "id": "snake_id" }`
- `{ "op": "sky", "color": "#rrggbb" }`
- `{ "op": "ground", "color": "#rrggbb" }` fills everything below the horizon (there's no ground until this is set).
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer.
