// v11 world (same format as v2-v10): sky (horizon glow), ground, things {id: [shape, at, size, color, fact, glow]}. shape: box|disc|cone|ball|ramp.
export const initialWorld = () => ({ avatar: { at: [0, 0, 0], facing: 0 }, things: {} });

// v11: a Wanderer standing high (y > 8) under a dark sky has climbed out into the day: the sky becomes white-gold haze.
export const migrate = (w) => {
  const c = (w.sky || '#000000').slice(1).match(/../g).map((h) => parseInt(h, 16) / 255);
  if (w.avatar.at[1] > 8 && 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] < 0.45) w.sky = '#ffe6b0';
  return w;
};

const S = ['box', 'disc', 'cone', 'ball', 'ramp'], C = /^#[0-9a-f]{6}$/i;

export function reduce(w, o) {
  let k = o.op;
  const i = o.id;
  if (k == 'ramp') (k = 'set'), (o.shape = 'ramp');
  if (k == 'set') {
    if (o.shape != null && !S.includes(o.shape)) throw Error('shape must be ' + S);
    if (o.color != null && !C.test(o.color)) throw Error('bad color');
    const t = w.things[i] || ['box', [0, 0, 0], [1, 1, 1], '#888888'];
    ['shape', 'at', 'size', 'color', 'fact', 'glow'].map((f, j) => o[f] != null && (t[j] = o[f]));
    w.things[i] = t;
  } else if (k == 'del') delete w.things[i];
  else if (k == 'move') w.avatar = { at: o.to, facing: o.facing ?? w.avatar.facing };
  else if (k == 'sky' || k == 'ground') {
    if (!C.test(o.color)) throw Error('bad color');
    w[k] = o.color;
  } else throw Error('bad op');
  return w;
}

export const describe = (w) => JSON.stringify(w);
export const facts = (w) => Object.values(w.things).map((t) => t[4]).filter(Boolean);
