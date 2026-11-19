// v1 world: sky, ground, things {id: [shape, at, size, color, fact, glow]}. shape: box|disc.
export const initialWorld = () => ({ avatar: { at: [0, 0, 0], facing: 0 }, things: {} });

export const migrate = (w) => {
  for (const t of Object.values(w.things)) {
    if (t[2][1] < 0.1) t[0] = 'disc';
    if (t[3] == '#ffb347') t[5] = 1;
  }
  return w;
};

export function reduce(w, o) {
  const k = o.op, i = o.id;
  if (k == 'set') {
    const t = w.things[i] || ['box', [0, 0, 0], [1, 1, 1], '#888888'];
    ['shape', 'at', 'size', 'color', 'fact', 'glow'].map((f, j) => o[f] != null && (t[j] = o[f]));
    w.things[i] = t;
  } else if (k == 'del') delete w.things[i];
  else if (k == 'move') w.avatar = { at: o.to, facing: o.facing ?? w.avatar.facing };
  else if (k == 'sky' || k == 'ground') w[k] = o.color;
  else throw Error('bad op');
  return w;
}

export const describe = (w) => JSON.stringify(w);
export const facts = (w) => Object.values(w.things).map((t) => t[4]).filter(Boolean);
