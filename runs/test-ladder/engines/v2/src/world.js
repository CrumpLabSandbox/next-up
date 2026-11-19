// v2 world: things {id: [shape,at,size,color,fact,glow,rot]}. A light is ['light',at,[radius,flicker,0],color,fact].
const need = (c, m) => { if (!c) throw Error(m || 'bad op'); };
const v3 = (a) => Array.isArray(a) && a.length == 3 && a.every(Number.isFinite);
const hex = (c) => /^#[0-9a-f]{6}$/i.test(c);

export const initialWorld = () => ({ avatar: { at: [0, 0, 0], facing: 0 }, sky: '#08080f', ground: null, things: {} });

export function migrate(p) {
  const w = { ...p };
  for (const [id, t] of Object.entries(p.things))
    if (t[4] == 'stepping_stones' && t[6] == null) t[6] = ((parseInt(id.slice(1)) * 37) % 50) - 25;
  return w;
}

export function reduce(w, o) {
  const k = o.op, i = o.id, T = w.things, old = T[i] || [];
  if (k == 'set' || k == 'light') {
    need(/^[a-z][a-z0-9_]{0,31}$/.test(i), 'id must be snake_case: a-z, 0-9, _ (max 32)');
    const t = k == 'set' ? [o.shape, o.at, o.size, o.color, o.fact, o.glow, o.rot].map((v, j) => v ?? old[j] ?? null)
      : ['light', o.at, [o.radius, o.flicker || 0, 0], o.color, o.fact ?? old[4] ?? null];
    need(/^(box|cone|light)$/.test(t[0]) && (k == 'light') == (t[0] == 'light'), 'shape must be box or cone');
    need(v3(t[1]) && hex(t[3]) && (k == 'light' ? t[2][0] > 0 : v3(t[2])), 'at/size need 3 numbers, color #rrggbb, radius > 0');
    need(t[6] == null || Number.isFinite(t[6]), 'rot must be a number');
    T[i] = t;
  } else if (k == 'del') { need(T[i], 'no such id'); delete T[i]; }
  else if (k == 'sky' || k == 'ground') { need(hex(o.color), 'color must be #rrggbb'); w[k] = o.color; }
  else if (k == 'move') { need(v3(o.to), 'to needs 3 numbers'); w.avatar = { at: o.to, facing: o.facing ?? w.avatar.facing }; }
  else need(0, 'unknown op');
  return w;
}

export const describe = (w) => JSON.stringify(w);

export const facts = (w) => Object.values(w.things).map((t) => t[4]).filter(Boolean);
