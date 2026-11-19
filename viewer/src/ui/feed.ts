// The chat feed: one block per turn showing what each agent said and did.
import type { BuilderEvent, NarratorEvent, Op, TimelineEvent } from '../../../shared/types';
import { fmtBytes } from '../../../shared/ladder';

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function el(html: string): HTMLElement {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
}

function opChip(op: Op): string {
  switch (op.op) {
    case 'defineComponent': return `<span class="chip" title="${esc(op.doc ?? '')}">◆ ${esc(op.name)}</span>`;
    case 'add': return `<span class="chip" title="${esc(op.component)}">＋ ${esc(op.id)}</span>`;
    case 'update': return `<span class="chip">～ ${esc(op.id)}</span>`;
    case 'remove': return `<span class="chip">− ${esc(op.id)}</span>`;
    case 'environment': return `<span class="chip">☼ environment</span>`;
    case 'moveAvatar': return `<span class="chip">→ wanderer</span>`;
  }
  // Ladder engines define their own ops.
  const o = op as { op?: string; id?: string; name?: string };
  return `<span class="chip">${esc(String(o.op ?? '?'))}${o.id || o.name ? ` ${esc(String(o.id ?? o.name))}` : ''}</span>`;
}

function factChips(ev: NarratorEvent) {
  const sym = { add: '＋', change: '～', remove: '−' } as const;
  return ev.facts.map((f) => `<span class="chip" title="${esc(f.description)} — ${esc(f.placement)}">${sym[f.op]} ${esc(f.id)}</span>`).join('');
}

function builderBody(ev: BuilderEvent) {
  const code = ev.ops
    .filter((o): o is Extract<Op, { op: 'defineComponent' }> => o.op === 'defineComponent')
    .map((o) => `<details><summary>${esc(o.name)}.js · ${o.code.length} bytes</summary><pre>${esc(o.code)}</pre></details>`)
    .join('');
  const bad = ev.rejected.map((r) => `<span class="chip bad" title="${esc(r.error)}">✕ ${esc(String((r.op as { op?: string; id?: string; name?: string })?.id ?? (r.op as { name?: string })?.name ?? (r.op as { op?: string })?.op ?? 'op'))}</span>`).join('');
  return `<div>${esc(ev.notes)}</div><div class="chips">${ev.ops.map(opChip).join('')}${bad}</div>${code}`;
}

export function renderEvent(ev: TimelineEvent, runId: string): HTMLElement | null {
  switch (ev.type) {
    case 'player':
      return el(`<div class="msg player"><div class="who">Wanderer</div><div class="action">${esc(ev.action)}</div><div class="thought">${esc(ev.thought)}</div></div>`);
    case 'narrator':
      return el(`<div class="msg narrator"><div class="who">Narrator</div><div class="narration">${esc(ev.narration)}</div>${ev.movement ? `<div class="move">↳ ${esc(ev.movement)}</div>` : ''}<div class="chips">${factChips(ev)}</div></div>`);
    case 'builder':
      return el(`<div class="msg builder${ev.stage === 'polish' ? ' polish' : ''}"><div class="who">Builder${ev.stage === 'polish' ? ' · polish' : ''}${ev.attempts > 1 ? ` · ${ev.attempts} tries` : ''}</div>${builderBody(ev)}</div>`);
    case 'designer':
      return el(`<div class="msg designer"><div class="who">Graphic Designer</div><div>${esc(ev.critique)}</div>${ev.requestUnlock ? `<div class="ask unlock">▲ asks for more room: ${esc(ev.unlockReason ?? '')}</div>` : ''}${ev.engineRequest ? `<div class="ask engine">⚙ asks for a new engine: ${esc(ev.engineRequest)}</div>` : ''}<ol class="suggest">${ev.suggestions.map((x) => `<li><code>${esc(x.target)}</code> ${esc(x.change)}</li>`).join('')}</ol>${ev.overview ? `<img class="shot" loading="lazy" src="runs/${esc(runId)}/${esc(ev.overview)}" alt="Overview the designer reviewed">` : ''}<details><summary>style guide</summary><div class="guide">${esc(ev.styleGuide)}</div></details></div>`);
    case 'render': {
      if (!ev.shot && !ev.errors.length) return null;
      const label = ev.final === false ? 'after build' : 'view';
      const size = ev.bytes !== undefined ? `${fmtBytes(ev.bytes)}` : `${ev.triangles.toLocaleString()} triangles`;
      return el(`<div class="msg system">${ev.shot ? `<img class="shot" loading="lazy" src="runs/${esc(runId)}/${esc(ev.shot)}" alt="What the wanderer sees after turn ${ev.turn}">` : ''}${ev.errors.map((e) => `<div>⚠ ${esc(e)}</div>`).join('')}<div>${label} · ${size}</div></div>`);
    }
    case 'budget':
      return el(`<div class="banner budget"><b>▲ Budget ${ev.tier === 0 ? 'starts at' : 'unlocked:'} ${fmtBytes(ev.limit)}</b>${esc(ev.reason)}</div>`);
    case 'engineer':
      return el(`<div class="msg engineer"><div class="who">Engineer · ${ev.ok ? `built ${esc(ev.version ?? '')}` : 'failed'} · ${ev.minutes} min</div><div class="request">Request: ${esc(ev.request)}</div><div>${esc(ev.notes)}</div>${ev.problems.length ? `<div class="chips">${ev.problems.map((p) => `<span class="chip bad">${esc(p)}</span>`).join('')}</div>` : ''}</div>`);
    case 'engine':
      return el(`<div class="banner engine"><b>⚙ Engine ${esc(ev.version)}${ev.from ? ` takes over from ${esc(ev.from)}` : ''} · ${fmtBytes(ev.bytes)}</b>${esc(ev.notes)}</div>`);
    case 'system':
      return el(`<div class="msg system">${esc(ev.message)}</div>`);
  }
  return null;
}

export class Feed {
  private shown = 0;
  private turnEls = new Map<number, HTMLElement>();
  onSeekTurn: (turn: number) => void = () => {};

  constructor(private root: HTMLElement) {}

  /** Show exactly events[0..count). Appends when moving forward, rebuilds otherwise. */
  show(events: TimelineEvent[], count: number, runId: string) {
    if (count < this.shown) this.clear();
    for (let i = this.shown; i < count; i++) {
      const ev = events[i];
      let block = this.turnEls.get(ev.turn);
      if (!block) {
        block = el(`<div class="turn"><h3>${ev.turn === 0 ? 'Genesis' : `Turn ${ev.turn}`}</h3></div>`);
        block.querySelector('h3')!.addEventListener('click', () => this.onSeekTurn(ev.turn));
        this.root.append(block);
        this.turnEls.set(ev.turn, block);
      }
      const node = renderEvent(ev, runId);
      if (node) block.append(node);
    }
    this.shown = count;
    this.root.scrollTop = this.root.scrollHeight;
  }

  clear() {
    this.root.innerHTML = '';
    this.turnEls.clear();
    this.shown = 0;
  }
}
