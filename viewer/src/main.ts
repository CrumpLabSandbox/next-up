import { WorldView, type CameraMode } from './runtime/world-view';
import { Feed } from './ui/feed';
import { worldFromEvents } from '../../shared/world';
import type { RunInfo, TimelineEvent, WorldState } from '../../shared/types';

const $ = <T extends HTMLElement>(sel: string) => document.querySelector(sel) as T;
const params = new URLSearchParams(location.search);
const canvas = $<HTMLCanvasElement>('#c');

if (params.has('capture')) {
  // Headless mode for the orchestrator: render a state passed in from Playwright.
  document.body.classList.add('capture');
  const view = new WorldView(canvas);
  (window as unknown as Record<string, unknown>).__nextup = {
    async render(state: WorldState) {
      await view.setState(state, false);
      view.renderStill();
      return { errors: view.drainErrors(), triangles: view.triangleCount() };
    },
  };
  (window as unknown as Record<string, unknown>).__nextupReady = true;
} else {
  startViewer();
}

function startViewer() {
  const view = new WorldView(canvas);
  view.start();
  const feed = new Feed($('#feed'));
  const pos = $<HTMLInputElement>('#pos');
  const playBtn = $<HTMLButtonElement>('#play');
  const caption = $('#caption');
  const tip = $('#tip');
  const thumb = $<HTMLImageElement>('#thumb');

  let run: RunInfo | null = null;
  let events: TimelineEvent[] = [];
  let cursor = 0; // number of events revealed
  let state: WorldState = worldFromEvents([], 0);
  let playing = false;
  let timer: number | undefined;
  let pollTimer: number | undefined;

  const speed = () => Number($<HTMLSelectElement>('#speed').value) || 1;

  async function loadRuns() {
    const runs: RunInfo[] = await fetch('runs/index.json').then((r) => r.json());
    const sel = $<HTMLSelectElement>('#run');
    sel.innerHTML = runs.map((r) => `<option value="${r.id}">${r.id} · ${r.turnsCompleted}/${r.maxTurns} · ${r.status}</option>`).join('');
    $('#empty').hidden = runs.length > 0;
    const want = params.get('run') ?? runs[0]?.id;
    if (want) { sel.value = want; await openRun(want); }
    sel.onchange = () => {
      history.replaceState(null, '', `?run=${sel.value}`);
      openRun(sel.value);
    };
  }

  async function fetchRun(id: string) {
    const info: RunInfo = await fetch(`runs/${id}/run.json`, { cache: 'no-store' }).then((r) => r.json());
    const text = await fetch(`runs/${id}/timeline.jsonl`, { cache: 'no-store' }).then((r) => (r.ok ? r.text() : ''));
    const evs = text.split('\n').filter(Boolean).map((l) => JSON.parse(l) as TimelineEvent);
    return { info, evs };
  }

  async function openRun(id: string) {
    pause();
    clearInterval(pollTimer);
    const { info, evs } = await fetchRun(id);
    run = info;
    events = evs;
    $('#premise').textContent = info.premise;
    feed.clear();
    seek(0, false);
    updateStatus();
    renderTicks();
    if (info.status === 'running') pollTimer = window.setInterval(poll, 3000);
  }

  async function poll() {
    if (!run) return;
    const { info, evs } = await fetchRun(run.id);
    run = info;
    if (evs.length > events.length) {
      const atEnd = cursor >= events.length;
      events = evs;
      renderTicks();
      if (atEnd && !playing) play();
    }
    updateStatus();
    if (info.status !== 'running') clearInterval(pollTimer);
  }

  function updateStatus() {
    const s = $('#status');
    s.textContent = run ? `${run.status} · ${run.turnsCompleted}/${run.maxTurns} turns` : '';
    s.classList.toggle('live', run?.status === 'running');
  }

  function renderTicks() {
    pos.max = String(events.length);
    const ticks = $('#ticks');
    ticks.innerHTML = '';
    events.forEach((e, i) => {
      if (i > 0 && events[i - 1].turn === e.turn) return;
      const t = document.createElement('i');
      t.style.left = `${(i / Math.max(1, events.length)) * 100}%`;
      ticks.append(t);
    });
  }

  const turnAt = (c: number) => (c > 0 ? events[c - 1].turn : 0);

  function seek(c: number, animate: boolean) {
    c = Math.max(0, Math.min(events.length, c));
    // Render events carry no world change; reveal them with the step before.
    while (c < events.length && c > 0 && events[c].type === 'render') c++;
    cursor = c;
    state = worldFromEvents(events, cursor);
    view.setState(state, animate);
    feed.show(events, cursor, run?.id ?? '');
    pos.value = String(cursor);
    const last = run?.maxTurns ?? 0;
    $('#turnlabel').textContent = cursor === 0 ? 'start' : `turn ${turnAt(cursor)} / ${last}`;
    const narr = [...events.slice(0, cursor)].reverse().find((e) => e.type === 'narrator');
    caption.textContent = narr && narr.type === 'narrator' ? narr.narration : '';
  }

  function delayFor(ev: TimelineEvent | undefined) {
    if (!ev) return 1000;
    const base = ev.type === 'player' ? 1800 + ev.action.length * 15
      : ev.type === 'narrator' ? Math.min(7000, 1500 + ev.narration.length * 18)
      : ev.type === 'builder' ? 3000
      : 1000;
    return base / speed();
  }

  function step() {
    if (cursor >= events.length) {
      if (run?.status !== 'running') pause();
      return;
    }
    seek(cursor + 1, true);
    timer = window.setTimeout(step, delayFor(events[cursor - 1]));
  }

  function play() {
    if (playing) return;
    if (cursor >= events.length && run?.status !== 'running') seek(0, false);
    playing = true;
    playBtn.innerHTML = '&#10074;&#10074;';
    timer = window.setTimeout(step, 300);
  }

  function pause() {
    playing = false;
    clearTimeout(timer);
    playBtn.innerHTML = '&#9654;';
  }

  const toStart = (turn: number) => {
    pause();
    const i = events.findIndex((e) => e.turn === turn);
    seek(i < 0 ? 0 : i, false);
  };
  feed.onSeekTurn = (t) => {
    pause();
    const i = events.findIndex((e) => e.turn > t);
    seek(i < 0 ? events.length : i, false);
  };

  playBtn.onclick = () => (playing ? pause() : play());
  $('#fwd').onclick = () => { pause(); seek(cursor + 1, true); };
  $('#back').onclick = () => {
    pause();
    let c = cursor;
    while (c > 0 && events[c - 1].type === 'render') c--;
    seek(c - 1, false);
  };
  $('#first').onclick = () => toStart(0);
  $('#last').onclick = () => { pause(); seek(events.length, false); };
  pos.oninput = () => { pause(); seek(Number(pos.value), false); };
  pos.onmousemove = (e) => {
    const r = pos.getBoundingClientRect();
    const c = Math.round(((e.clientX - r.left) / r.width) * events.length);
    const shot = [...events.slice(0, Math.max(1, c))].reverse().find((ev) => ev.type === 'render' && ev.shot);
    if (!shot || shot.type !== 'render' || !run) { thumb.hidden = true; return; }
    thumb.src = `runs/${run.id}/${shot.shot}`;
    thumb.style.left = `${e.clientX - r.left}px`;
    thumb.hidden = false;
  };
  pos.onmouseleave = () => (thumb.hidden = true);

  function setMode(m: CameraMode) {
    view.setMode(m);
    document.querySelectorAll<HTMLButtonElement>('#modes button').forEach((b) => b.classList.toggle('on', b.dataset.mode === m));
    $('#walkhelp').hidden = m !== 'walk';
    if (m === 'walk') canvas.focus();
  }
  document.querySelectorAll<HTMLButtonElement>('#modes button').forEach((b) => (b.onclick = () => setMode(b.dataset.mode as CameraMode)));

  addEventListener('keydown', (e) => {
    if ((e.target as HTMLElement).tagName === 'SELECT') return;
    if (e.key === 'Escape') setMode('follow');
    if (view.getMode() === 'walk') return;
    if (e.key === ' ') { e.preventDefault(); playing ? pause() : play(); }
    else if (e.key === 'ArrowRight') $('#fwd').click();
    else if (e.key === 'ArrowLeft') $('#back').click();
    else if (e.key === 'f') setMode('follow');
    else if (e.key === 'o') setMode('orbit');
    else if (e.key === 'k') setMode('walk');
  });

  let hoverFrame = 0;
  canvas.addEventListener('pointermove', (e) => {
    if (hoverFrame) return;
    hoverFrame = requestAnimationFrame(() => {
      hoverFrame = 0;
      const id = view.entityAt(e.clientX, e.clientY);
      const ent = id ? state.entities[id] : null;
      if (!ent) { tip.hidden = true; return; }
      const fact = ent.fact ? state.facts[ent.fact] : null;
      const r = canvas.getBoundingClientRect();
      tip.innerHTML = `<b>${ent.fact ?? ent.id}</b><div>${fact ? fact.description : ''}</div><div class="meta">${ent.id} · ${ent.component} · since turn ${ent.since}</div>`;
      tip.style.left = `${e.clientX - r.left + 14}px`;
      tip.style.top = `${e.clientY - r.top + 14}px`;
      tip.hidden = false;
    });
  });
  canvas.addEventListener('pointerleave', () => (tip.hidden = true));

  loadRuns();
}
