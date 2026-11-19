# Engine v13: "the descent", on top of v12 living sky, v11 high sky, v10 glow, v9 night and v8 dawn

Same world format and ops as v12 (things are `[shape, at, size, color, fact, glow]`; no new ops). New in v13, all automatic. `migrate` leaves the world as it is.

## v13: the descent (Wanderer below y = -10 in altitude mode)
- **Cloud layers are pinned to world y**, not to the camera: the Wanderer falls through them. Cumulus walls ring them on all sides (near, mid and far, so they slide past each other with parallax; gold tops, lavender undersides), with drifting mist streaks and light shafts coming down through the rift (centred on a thing whose `fact` is `cloud_light_rift`, else on the land). The flat cream slab is gone in the follow view. Walls keep the lower view straight ahead open onto the land.
- **Follow camera tips down about 15 degrees** (eased in between y = -10 and y = -24). A Wanderer with nothing solid below them is drawn where they are (not at y = 0).
- **Land**: any glow-less `box` with `fact` `far_green_land` and base below y = -50 is not a box any more. All such boxes together mark the land's centre; the engine draws one rolling, noise-hill landscape (grass shading, haze that thickens with distance, tree clusters near the centre) out to the horizon, with the surface at about the boxes' top. The thin glow-2 `far_green_land` box below y = -50 is the **river**: its long axis sets the direction, its y is the water level, and it is drawn as a silver ribbon (meandering, widening with distance, sky reflection and shimmer). Keep land and river boxes below y = -50. Land things are visible from the island and the overview too.
- **Lamp**: a glow-1 thing below y = -50 (e.g. the riverbank lantern, a small box with glow 1) gets a warm halo, a pool of light on the grass and a long amber reflection down the water. The engine moves the river a little so the lamp stands on the bank.
- The island, its cloud shadows and the overview are unchanged. Put new descent things (more land boxes, lamps) at the same low heights; to add more land, add more `far_green_land` boxes; extra trees and hills are procedural.

## v12 notes (still in effect)

Same world format and ops as v11 (things are `[shape, at, size, color, fact, glow]`; no new ops). New in v12, all automatic.

## What the world looks like now
A small green island turning in a bright lavender-gold sky, floating on a sea of towering cumulus. Cloud banks (gold on top, lavender underneath, drifting slowly) ring the island and the foot of the tower; clouds cast sliding shadows over the grass and stone; wind gusts roll across the island in visible waves through grass, flowers and trees; far birds drift across the sky and petals and seeds blow past the camera; the sun and glow sprites are tamed so the bell, the watcher and the island read clearly.

## Altitude mode (v12 rules)
Altitude mode is on when the `sky` is light (dawn) and either the Wanderer is above y = 8 **or** a floating island exists. (v11 needed y > 8 only; now a Wanderer standing on the island stays in the sky world.) In it:
- No dunes, ridges, sand, mirror or dark slabs (flat wide discs/slabs at y < 1 are hidden). Ground-level things more than 75 m from the Wanderer and below y = 8 are not drawn, so keep the story within about 75 m of the Wanderer.
- **Overview camera is altitude too**: it frames the island, bridge and tower (things within about 45 m of the Wanderer) high over the cloud sea, from an angle that shows the bridge.
- **Cumulus**: any glow-less `ball` with base below y = 0 **or** any side over 12 m (and not an island) becomes a cumulus bank: a cluster of lit puffs filling the ball's box (more volume = more puffs). Use `size` about [30, 9, 22] for a bank, `at` = base centre. Banks near the Wanderer's camera are thinned out so nothing blocks the view. Automatic banks also ring each island, the base of each tall tower and the horizon.
- **Flowers**: a small glow-less `ball` (all sides <= 1.2 m) in pink / cream / any warm light colour (r > 0.8, b > 0.4, e.g. `#f0a0b8`, `#fff0c0`) standing on an island becomes a swaying flower clump (12 flowers when its width/depth is >= 0.3, a few when tinier). `at` = base on the island top. Colour = blossom colour.
- **Glare control**: sun and sky glow are capped; glow sprites (big flat glow-2 balls), glow-2 discs (any size, drawn as soft pools), glow orbs (glow-2 `ball` of 1 - 4 m, drawn as a soft halo) and the beacon halo fade when the camera is close to them or looking straight at them. Put bright things behind the Wanderer's view, not in front of the bell.
- **Wind**: tufts, flowers and tree canopies sway in gusts that roll across the island; the grass brightens as each wave passes.
- **Light bridge**: a glow-2 `ramp` is a shimmering gold ribbon (width = max(x size, 1.6) m) with a soft gold haze hugging it and sparkles shed from it that fall away below. Chain ramps end to end (north edge of one = south edge of the next).
- **Life**: a loose flock of far birds and drifting petals/seeds. God-rays cross cloud gaps near the sun.
- **Standing**: the Wanderer stands on any box top (even thin flagstones) or the island top under them.
- Tower walls ghost out of the follow camera's way inside a tower, and also when tall walls stand on both sides of the Wanderer. Dark skies keep the v9/v10 night look; below 8 m without an island, the v8 dawn look. Falls back to the v6 engine if WebGL2 or three.js fails.

## Island, trees, bell (from v11)
- **Floating island**: a glow-less `ball` with w >= 12, h <= 0.3 w and a green colour (g clearly above r and b, e.g. `#4a8a4a`, 40 x 2.5 x 40 at y -4.5). Its top is flat at `y + h` (put paths, posts, trees on `y + h`); it has blade grass, a rocky underside (up to 16 m deep), hanging roots, and turns slowly. Use a shallow ball: the thin ball height is the thickness above `y`.
- **Trees**: a glow-less green `ball` up to 6 m on an island becomes a round tree with a trunk and swaying canopy. Size = [canopy width, total height, canopy depth]; `at` = base of the trunk. Colour is the leaf colour.
- **Bell**: a glow-less `ball` whose `fact` contains `bell` (<= 4 m tall) is a bronze bell with a gentle swing, hung from its top (`at` is the base). A glow-less thin `box` (sides <= 0.08, h <= 2) whose `fact` contains `bell` is a swaying rope. Posts/beams are ordinary boxes.

## Ops
- `{ "op": "set", "id": "p1", "shape": "box"|"disc"|"cone"|"ball"|"ramp", "at": [x, y, z], "size": [w, h, d], "color": "#rrggbb", "fact": "fact_id", "glow": 1 }` creates or updates a thing (fields merge; new things default to a 1 m grey box). Meters; `at` = centre of the base; size = [width x, height y, depth z].
  - `box`: block. h < 0.12 = flagstone slab (a path). A side >= 2.9 m = masonry (brick sides, flagstone top if low).
  - `cone`: round cone, base ellipse w x d, apex at height h.
  - `ball`: smooth ellipsoid filling the w x h x d box. In altitude mode its role depends on size, height, colour and glow (see above): cumulus, flower clump, tree, bell, island, or plain rounded rock.
  - `disc`: flat ellipse (w and d are diameters). Plain: a pale stone/dust disc (a path stone). `glow: 2`: a soft glowing pool.
  - `ramp`: wedge; surface at base level on its north (-Z) edge, rising to height h on its south (+Z) edge. With `glow: 2`: the light bridge.
  - `glow`: `1` = emissive lantern (flicker, point light, max 4); `2` = emissive with bloom (orbs, discs, ribbons, glass).
- `{ "op": "ramp", "id": "r", "at": [..], "size": [..], "color": "#..", "fact": ".." }` shorthand for `set` with shape ramp.
- `{ "op": "del", "id": "p1" }`
- `{ "op": "sky", "color": "#ffe6b0" }` horizon colour; a light colour (luminance > 0.45) is the day look.
- `{ "op": "ground", "color": "#5a3e78" }` terrain colour (not drawn in altitude mode).
- `{ "op": "move", "to": [x, y, z], "facing": degrees }` moves the Wanderer (0 = north = -Z, 90 = east). Use the island top (`y + h`) or a box top for `y`.

Colors must be `#rrggbb`. Unknown shapes or bad colors are rejected. World data counts toward the budget: keep ids and colors short.

## Examples (sky world)
- Cumulus bank: `{ "op": "set", "id": "cb1", "shape": "ball", "at": [40, -20, -300], "size": [30, 12, 24], "color": "#f8ecd0", "fact": "cloud_sea" }`
- Towering cloud: `{ "op": "set", "id": "cb2", "shape": "ball", "at": [-30, -10, -330], "size": [20, 30, 20], "color": "#f4e2b8", "fact": "cloud_tower" }` (over 12 m also counts, whatever the height)
- Flower: `{ "op": "set", "id": "fl1", "shape": "ball", "at": [24, 4, -288], "size": [0.5, 0.3, 0.5], "color": "#f0a0b8", "fact": "garden_blossoms" }`
- Island: `{ "op": "set", "id": "is", "shape": "ball", "at": [26, 1, -295], "size": [44, 3, 44], "color": "#6cc058", "fact": "floating_garden" }`
- Tree: `{ "op": "set", "id": "t1", "shape": "ball", "at": [20, 3.8, -298], "size": [3, 3.2, 3], "color": "#2f7a48", "fact": "floating_garden" }`
- Stone path: `{ "op": "set", "id": "pa", "shape": "box", "at": [26, 3.95, -290], "size": [1, 0.06, 14], "color": "#d8d4c0", "fact": "garden_path_loop" }`
- Light bridge segment: `{ "op": "set", "id": "lb", "shape": "ramp", "at": [26, 4.5, -288.3], "size": [1, 2.5, 7], "color": "#fff0c0", "fact": "light_bridge", "glow": 2 }`
- Glow orb: `{ "op": "set", "id": "o1", "shape": "ball", "at": [26, 12.4, -270.5], "size": [1.6, 1.6, 1.6], "color": "#fff0c0", "fact": "light_bridge", "glow": 2 }`
- Bell: `{ "op": "set", "id": "bb", "shape": "ball", "at": [26, 4.9, -291.8], "size": [1, 1.5, 1], "color": "#5a9a78", "fact": "sky_bell" }`

## Earlier looks (still in effect, mostly for ground and night worlds)
- **Masonry**: a glow-less `box` with any side >= 2.9 m is brick on its sides; a low one gets a flagstone top; a flat slab at y >= 3 with w and d > 5 is a ceiling (hidden in the overview). **Flagstone**: glow-less `box` with h < 0.12. Three or more identical non-glow boxes/cones are instanced.
- **Glass / liquid**: glow-2 thin `box` = glass pane or liquid; glow-2 `disc` = liquid (ground worlds). **Open doorway**: glow-2 thin dark or warm `box` (one side <= 0.15, other >= 0.6, h >= 1.2). **Light strips**: glow-2 `box` (thin side <= 0.4, long >= 3, y >= 3) casts light shafts.
- **Suns and sky glow**: glow-2 round `ball` > 4 m = solid sun disc (dimmed in altitude mode); flat/wide one = soft sky-glow sprite. **Beacon**: white glow-2 `ball` >= 2 m with top above 20 m gets a halo and a god-ray column. **Silhouette**: a very dark tall glow-less `box` (side >= 5, h >= 5, thin side <= 3) is an unlit cut-out. **`sun_road`**: glow-2 thin box with fact `sun_road` = pulsing gold ribbon.
- **Night** (dark `sky`, e.g. `#0c0c24`): star dome, glass-floor mirror (largest dark flat slab), flame shaders (small warm glow-2 balls taller than wide), glow-1 lanterns with halos, pools and cones, fireflies, auto-exposure.
- **Wanderer**: hooded cloaked figure, standing on the solid top below them.
