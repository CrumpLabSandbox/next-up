// v1 world: things {id: [shape,at,size,color,fact,glow]}. A light is ['light',at,[radius,flicker,0],color,fact].
const need = (c) => { if (!c) throw Error('bad op'); };

export const initialWorld = () => ({ avatar: { at: [0, 0, 0], facing: 0 }, sky: '#08080f', ground: null, things: {} });

export function migrate(p) {
  const w = { ...p };
  if (p.ground) w.ground = '#4a4d55';
  for (const [id, t] of Object.entries(p.things))
    if (t[3] > '#f0') {
      t[5] = 1;
      w.things[id + '_glow'] = ['light', [t[1][0], t[1][1] + t[2][1] / 2, t[1][2]], [40, 0.3, 0], '#ffa040', t[4]];
    }
  return w;
}

export function reduce(w, o) {
  const k = o.op, i = o.id, T = w.things, old = T[i] || [];
  if (k == 'set' || k == 'light') {
    need(i);
    const t = k == 'set' ? [o.shape, o.at, o.size, o.color, o.fact, o.glow].map((v, j) => v ?? old[j] ?? null)
      : ['light', o.at, [o.radius, o.flicker || 0, 0], o.color, o.fact ?? old[4] ?? null], a = t.slice(0, 4).flat();
    need(a.length == 8 && a.every((x) => x != null) && /^(box|cone|light)$/.test(t[0]));
    T[i] = t;
  } else if (k == 'del') delete T[i];
  else if (k == 'sky' || k == 'ground') { need(/^#[0-9a-f]{6}$/i.test(o.color)); w[k] = o.color; }
  else if (k == 'move') { need([o.to].flat().length == 3); w.avatar = { at: o.to, facing: o.facing ?? w.avatar.facing }; }
  else need(0);
  return w;
}

export const describe = (w) => JSON.stringify(w);

export const facts = (w) => Object.values(w.things).map((t) => t[4]).filter(Boolean);
