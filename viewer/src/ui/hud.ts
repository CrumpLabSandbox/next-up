// The game HUD: built-in widgets plus Game Master-invented ones composed from
// pieces. Hidden until the Game Master defines a visible mechanic.
import type { GameState, Mechanic, WidgetPiece, WidgetSpec } from '../../../shared/game';

const esc = (s: unknown) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const n = (v: unknown, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const list = (v: unknown) => (Array.isArray(v) ? v : []) as Record<string, unknown>[];
const color = (m: Mechanic, d: string) => (typeof m.color === 'string' && /^#[0-9a-f]{3,8}$/i.test(m.color) ? m.color : d);

function bar(value: number, max: number, c: string) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0;
  return `<div class="hbar"><i style="width:${pct}%;background:${c}"></i></div>`;
}

function clock(filled: number, segs: number, c: string) {
  const r = 14, cx = 16, cy = 16;
  const parts: string[] = [];
  for (let i = 0; i < segs; i++) {
    const a0 = (i / segs) * Math.PI * 2 - Math.PI / 2, a1 = ((i + 1) / segs) * Math.PI * 2 - Math.PI / 2;
    const p = (a: number) => `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    parts.push(`<path d="M${cx},${cy} L${p(a0)} A${r},${r} 0 0 1 ${p(a1)} Z" fill="${i < filled ? c : 'transparent'}" stroke="#ffffff55" stroke-width="1"/>`);
  }
  return `<svg width="32" height="32" viewBox="0 0 32 32">${parts.join('')}</svg>`;
}

function fill(template: string, m: Mechanic) {
  return esc(template.replace(/\{(\w+)\}/g, (_, k) => {
    const v = m[k];
    return v === undefined || v === null ? '' : typeof v === 'object' ? JSON.stringify(v) : String(v);
  }));
}

function piece(p: WidgetPiece, m: Mechanic) {
  if ('text' in p) return `<div class="htext">${fill(p.text, m)}</div>`;
  if ('bar' in p) return bar(n(m[p.bar]), n(m[p.max ?? 'max'], 100), p.color ?? color(m, '#c9a0ff'));
  if ('pips' in p) {
    const v = n(m[p.pips]), max = Math.min(20, n(m[p.max ?? 'max'], v));
    return `<div class="hpips">${Array.from({ length: max }, (_, i) => `<span class="${i < v ? 'on' : ''}">${esc(p.icon ?? '●')}</span>`).join('')}</div>`;
  }
  if ('icons' in p) return `<div class="hicons">${list(m[p.icons]).map((x) => `<span title="${esc(x.label ?? x)}">${esc(x.icon ?? (typeof x === 'string' ? x : '◆'))}</span>`).join('')}</div>`;
  if ('list' in p) return `<div class="hlist">${list(m[p.list]).slice(0, 8).map((x) => `<div>${esc(typeof x === 'string' ? x : x.label ?? x.text ?? JSON.stringify(x))}</div>`).join('')}</div>`;
  return '';
}

function widget(m: Mechanic): string {
  const spec: WidgetSpec = typeof m.ui === 'string' ? { type: m.ui } : (m.ui as WidgetSpec);
  const icon = m.icon ? `<span class="hicon">${esc(m.icon)}</span>` : '';
  const head = (extra = '') => `<div class="hhead">${icon}<b>${esc(m.label)}</b>${extra}</div>`;
  switch (spec.type) {
    case 'bar': return head(`<span>${n(m.value)}/${n(m.max, 100)}</span>`) + bar(n(m.value), n(m.max, 100), color(m, '#6aa8ff'));
    case 'clock': return `<div class="hrow">${clock(n(m.filled), n(m.segments, 6), color(m, '#ff8a6a'))}${head(`<span>${n(m.filled)}/${n(m.segments, 6)}</span>`)}</div>`;
    case 'slots': {
      const items = list(m.items), slots = Math.max(items.length, n(m.slots, items.length));
      return head(`<span>${items.length}/${slots}</span>`) + `<div class="hslots">${Array.from({ length: Math.min(slots, 16) }, (_, i) => {
        const it = items[i];
        return `<span class="slot" title="${esc(it ? `${it.label ?? it.id}${it.note ? ` · ${it.note}` : ''}` : 'empty')}">${it ? esc(it.icon ?? String(it.label ?? '?').slice(0, 1)) : ''}</span>`;
      }).join('')}</div>`;
    }
    case 'journal': return head(`<span class="hstatus ${esc(m.status)}">${esc(m.status ?? '')}</span>`) +
      `<div class="hlist">${list(m.objectives).slice(0, 5).map((o) => `<div class="${o.done ? 'done' : ''}">${o.done ? '☑' : '☐'} ${esc(o.text)}</div>`).join('')}</div>`;
    case 'chips': return head() + `<div class="hchips">${list(m.entries).map((e) => `<span>${esc(e.icon ?? '')} ${esc(e.label)}${e.turns ? ` · ${esc(e.turns)}` : ''}</span>`).join('')}</div>`;
    case 'counter': return head(`<span class="hbig">${esc(m.value ?? 0)}</span>`);
    case 'relations': return head() + `<div class="hlist">${list(m.entries).map((e) => `<div class="hrel"><span>${esc(e.label)}</span><span>${'◆'.repeat(Math.max(0, n(e.value)))}${'◇'.repeat(Math.max(0, -n(e.value)))}</span></div>`).join('')}</div>`;
    case 'stats': return head() + `<div class="hlist">${list(m.entries).map((e) => `<div class="hrel"><span>${esc(e.label)}</span><span>${esc(e.value)}</span></div>`).join('')}</div>`;
    case 'text': return head() + `<div class="htext">${esc(m.value ?? '')}</div>`;
    case 'custom': return head() + (spec.pieces ?? []).map((p) => piece(p, m)).join('');
    default: return head(`<span>${esc(typeof m.value === 'object' ? '' : m.value ?? '')}</span>`);
  }
}

export class Hud {
  private seen = new Set<string>();
  constructor(private root: HTMLElement) {}

  /** Renders the HUD; mechanics new since the last call glow when `animate`. */
  render(g: GameState, animate: boolean) {
    const shown = Object.values(g.mechanics).filter((m) => m.ui && !m.hidden).sort((a, b) => a.since - b.since);
    this.root.hidden = shown.length === 0;
    this.root.innerHTML = shown.map((m) => `<div class="hw ${animate && !this.seen.has(m.id) ? 'fresh' : ''}" data-id="${esc(m.id)}">${widget(m)}</div>`).join('');
    this.seen = new Set(shown.map((m) => m.id));
  }

  reset() { this.seen.clear(); }
}
