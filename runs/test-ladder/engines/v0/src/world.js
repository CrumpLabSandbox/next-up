// v0 world: a sky color, an optional ground color and flat-colored boxes and cones.
// Things are compact arrays to save budget: [shape, at, size, color, fact].
const vec = (v) => Array.isArray(v) && v.length === 3 && v.every(Number.isFinite);
const col = (c) => /^#[0-9a-f]{6}$/i.test(c);
const need = (ok, msg) => { if (!ok) throw Error(msg); };

export const initialWorld = () => ({ avatar: { at: [0, 0, 0], facing: 0 }, sky: '#08080f', ground: null, things: {} });

export const migrate = (prev) => prev || initialWorld();

export function reduce(w, o) {
  const k = o.op;
  if (k === 'set') {
    need(/^[a-z][a-z0-9_]*$/.test(o.id), 'bad id');
    const [s = 'box', a = [0, 0, 0], z = [1, 1, 1], c = '#888888', f = null] = w.things[o.id] || [];
    const t = [o.shape ?? s, o.at ?? a, o.size ?? z, o.color ?? c, o.fact ?? f];
    need(/^(box|cone)$/.test(t[0]) && vec(t[1]) && vec(t[2]) && col(t[3]), 'bad shape/at/size/color');
    w.things[o.id] = t;
  } else if (k === 'del') delete w.things[o.id];
  else if (k === 'sky' || k === 'ground') { need(col(o.color), 'bad color'); w[k] = o.color; }
  else if (k === 'move') { need(vec(o.to), 'bad to'); w.avatar = { at: o.to, facing: o.facing ?? w.avatar.facing }; }
  else throw Error('unknown op ' + k);
  return w;
}

export const describe = (w) =>
  `sky ${w.sky} ground ${w.ground}\n` + Object.entries(w.things).map(([id, t]) => `${id}: ${t.join(' ')}`).join('\n');

export const facts = (w) => Object.values(w.things).map((t) => t[4]).filter(Boolean);
