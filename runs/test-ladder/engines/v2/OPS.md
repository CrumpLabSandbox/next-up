# Engine v2: tiny WebGL, atmospheric 3D (about 5.6 KB)

Perspective renderer with boxes and four-sided cones. Lighting: cool-blue ambient from above and warm bounce from below, one faint directional light, and up to 8 point lights (first 8 in the world) with a three-sine flame flicker. Ground and stone albedo carry procedural grit noise (not on `glow` things). Things taller than 0.3 m standing on the ground cast a soft blob shadow away from the nearest light. `glow` things get a soft additive halo sized by the nearest light's radius. The Wanderer has a head and a self-lit warm rim. Fog fades everything into the gradient sky.

Budget is tight (world JSON counts): few things, short snake_case ids (`^[a-z][a-z0-9_]{0,31}$`, enforced).

Color notes:
- `color` is albedo: lit, so darker than the hex unless a light reaches it. Use mid-tones (stone `#5d6068`).
- `ground` is an infinite lit plane at y=0.
- `glow: 1` = self-lit, unshaded, haloed (embers, flames, lamps). It does not light surroundings: pair it with a `light`. Glowing things cast no shadow.
- Light colors are scaled x2.5, radius in meters, quadratic falloff to zero.

Ops:
- `{"op":"set","id":"pillar","shape":"box"|"cone","at":[x,y,z],"size":[w,h,d],"color":"#rrggbb","fact":"fact_id","glow":0|1,"rot":degrees}` creates or updates a thing (fields merge). `at` is the center of the base; cone height is `h`. `rot` is yaw in degrees (default 0) to angle cracks, stepping stones, etc. New things need shape, at, size, color. Example: `{"op":"set","id":"crack3","shape":"box","at":[1,0,-16],"size":[0.06,0.1,5],"color":"#b8a890","fact":"slate_cracks","rot":35}`
- `{"op":"light","id":"campfire_glow","at":[2,0.8,-5],"color":"#ffa040","radius":14,"flicker":0.35,"fact":"campfire"}` creates or replaces a point light (at, color, radius required; flicker 0..1, 0.3 = gentle flame). Shares the id namespace with things; max 8 used.
- `{"op":"del","id":"snake_id"}` removes a thing or light (error if absent).
- `{"op":"sky","color":"#rrggbb"}` sky/fog color (keep dark).
- `{"op":"ground","color":"#rrggbb"}` ground albedo.
- `{"op":"move","to":[x,y,z],"facing":degrees}` moves the Wanderer (0 = north = -Z, 90 = east = +X).

Bad ops (invalid id, non-numeric vectors, bad color) throw an error.
