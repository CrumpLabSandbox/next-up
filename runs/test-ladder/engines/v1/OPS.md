# Engine v1: tiny WebGL, lit 3D

A real 3D perspective renderer (about 4 KB). Boxes and four-sided cones are shaded per face by one fixed cool directional light plus dim ambient. Up to 4 point lights add warm per-pixel pools of light on the ground and on things, with flicker. Distance fog fades everything into the sky color, and the sky is a soft vertical gradient (brighter at the horizon, darker overhead) derived from the `sky` color. The Wanderer is drawn as a small figure.

Budget is extremely tight (world JSON counts): keep payloads small, use few things, short ids.

Color notes:
- A thing's `color` is its albedo: it is lit, so it looks darker than the hex unless a light reaches it. Use mid-tone colors (stone `#5d6068`), not near-black ones.
- `ground` is an infinite lit plane at y=0 (albedo, currently `#4a4d55`). Warm lights create a visible pool on it.
- `glow: 1` makes a thing self-lit (unshaded, fogs less): use for embers, flames, lamps. A glowing thing does not light its surroundings; pair it with a `light`.
- Only the first 4 lights in the world are used. Light colors are scaled x2.5, radius is in meters, falloff is quadratic to zero at the radius.

Ops:
- `{ "op": "set", "id": "snake_id", "shape": "box" | "cone", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 0 | 1 }` creates or updates a thing (fields merge). `at` is the center of its base, `size` is width/height/depth in meters (cone height is `h`). New things need shape, at, size and color. Example: `{"op":"set","id":"pillar","shape":"box","at":[4,0,-6],"size":[1,3,1],"color":"#5d6068","fact":"stone_pillar"}`
- `{ "op": "light", "id": "snake_id", "at": [x, y, z], "color": "#rrggbb", "radius": meters, "flicker": 0..1, "fact": "fact_id" }` creates or replaces a point light (all of at, color, radius required; flicker defaults to 0, 0.3 is a gentle flame). Lights share the id namespace with things. Example: `{"op":"light","id":"campfire_glow","at":[2,0.8,-5],"color":"#ffa040","radius":14,"flicker":0.35,"fact":"campfire"}`
- `{ "op": "del", "id": "snake_id" }` removes a thing or light.
- `{ "op": "sky", "color": "#rrggbb" }` sets the sky/fog color (keep it dark for a night mood; it is a base for the gradient).
- `{ "op": "ground", "color": "#rrggbb" }` sets the ground albedo.
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east = +X).

Existing world: a pale stone pad `grey_ground`, a glowing ember cube `distant_light` 40 m north with its light `distant_light_glow` (radius 40).
