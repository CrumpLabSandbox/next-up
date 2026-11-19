# Engine v10: "controlled glow", on top of v9 night and v8 dawn

Same world format and ops as v9 (migrate is the identity). New in v10, all automatic, no new ops:
- **Light pools**: any glow-2 `disc` wider than 3 m is a soft additive pool with a gaussian radial falloff (brighter centre, no hard edge; colour steps from edge to centre). Stacked pools add smoothly. Very wide ones are dimmer, and every pool fades a little when the camera is close. Discs of 3 m or less stay liquid.
- **Bloom limits**: per-pixel bloom energy is soft-clamped, near-camera halos/pools/cones fade, a local-exposure cap tames bright areas, and auto-exposure can no longer over-darken. Stars and brick stay visible.
- **Open doorways**: a glow-2 thin `box` (one horizontal side <= 0.15, other >= 0.6, h >= 1.2) with a dark colour (e.g. `#05050a`, drawn with warm light) or a warm colour (e.g. `#ffd890`) is a recessed doorway: dark reveal, soft inner light, stair-like stripe gradient that shifts with the view, and a warm spill pool on the floor. Place it flush in a wall face. Blue panes stay glass.
- **Beacon**: a white glow-2 `ball` (all channels bright, sides >= 2 m, top above 20 m, e.g. `#ffffff` 4 m at y 35) gets a soft vertical god-ray column down to the floor, a halo, and a long reflection streak on the glass floor towards the camera.
- **Glass floor**: sharper reflections (tower, lights) with Fresnel, plus faint ring ripples around the Wanderer's footsteps.
- **Overview**: the glass floor is tinted with a faint starfield, and flame/lantern lights show as bright dots so the route to the tower reads.
- Falls back to the v6 engine if WebGL2 or three.js fails.

## v9 notes (still in effect)

Same world format and ops as v8 (migrate is the identity). New in v9, all automatic and **night only** (dark `sky`, luminance below about 0.45). A light sky renders exactly as in v8 (dawn).
- **Star dome**: the whole sphere is a procedural sky: ~60k twinkling, colour-varied stars, a faint Milky Way band with dust lanes and nebula wisps (violet, teal, rose). It also shows below the horizon, through the glass floor. The `sky` colour is still the horizon haze. glow-2 `ball` stars you place are extra bright stars on top.
- **Glass floor (planar reflection)**: at night the largest flat slab becomes black glass that mirrors flames, stars, lights and the Wanderer with Fresnel and a slight ripple. A slab qualifies when it is a `disc` or a `box` with h < 0.15, both w and d > 8 m, and either `glow: 2` with a dark colour (luminance < 0.35) or no glow and a near-black colour (e.g. `#05050c`). Its colour tints the glass. Only one mirror is made (the largest); the Wanderer stands on it, things standing on it get soft contact shadows, and terrain is flattened under it. Brighter glow-2 slabs stay additive light pools.
- **Flames**: a small warm glow-2 `ball` taller than wide (h >= 1.3 w, all sides < 0.6 m, orange/amber colour, e.g. `#ffc060`, 0.14 x 0.22 x 0.14) is drawn as an animated teardrop flame shader with a blue core, a halo, a warm floor pool and rising stardust, instead of a ball. Rows of them make a **flame trail**: every flame (and every glow-1 lantern flame) smoothly turns to face the Wanderer.
- **Volumetric light**: every glow-1 thing gets a flame shader inside a glassy translucent body, a soft halo, a warm light pool on the floor and (when hung more than 0.45 m above the floor) a soft light cone. The Builder places them as before: `glow: 1`.
- **Particles**: slow fireflies, stardust drifting up, plus all the v8 motes and sparks.
- **Cinematic post**: auto-exposure adapts to the frame's brightness (slowly eased live, fully settled in stills), chromatic bloom (warm inner and cool outer fringes around bright lights), subtle lens flare from the nearest flames. Depth of field is off at night so the star dome stays sharp.
- Falls back to the v6 engine if WebGL2 or three.js fails.

Authoring tips for night: use `sky` `#0c0c24` and a dark `ground`; make the floor one big near-black disc (80 x 60); put lanterns low (y 0.4 - 1.5) so their reflections read; hang them over the floor for cones and pools; keep stars as tiny glow-2 balls.

## Earlier engine notes (v8, still in effect)

Same world format and ops as v7 (migrate is the identity). New in v8, all automatic:
- **Exposure**: lower, tuned dawn exposure with a highlight shoulder, so the sun never blows out. A glow-2 `ball` that is roughly round (|w-h| < 20% of w, d < 4) and larger than 4 m is drawn as a solid bright **sun disc** (no wash); a flat/wide big glow-2 ball is a soft sky-glow sprite that fades near the camera. A very dark tall glow-less `box` (any side >= 5, h >= 5, thin side <= 3, colour near black) is an unlit, unfogged **silhouette** (the door slit): put it in front of the sun disc.
- **Aerial perspective**: fog shifts from gold near to violet far; three violet dune-ridge layers ring the horizon. Light shafts shimmer.
- **Wind sand**: sand streams off dune crests near the Wanderer, with twinkling sand glints.
- **`sun_road`**: a glow-2 thin box whose `fact` is `sun_road` becomes an animated pulsing gold ribbon with travelling glints (width/length from its size).
- **Terrain**: sharper dune crests, sand-grain normals, gold rim light. Glow-2 `disc` wider than 8 m is a soft additive light pool (not liquid); discs don't flatten the terrain. Bootprints trail behind the Wanderer.
- **Sway**: gentle camera sway, cloak and hood cloth sway.

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
