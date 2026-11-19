import { WorldView } from './runtime/world-view';
import { Feed } from './ui/feed';
import { Stage } from './stage';
import { snapshot, type Snapshot } from './model';
import { TIERS, THREE_TIERS, fmtBytes, fmtTier } from '../../shared/ladder';
import type { RunInfo, TimelineEvent, WorldState } from '../../shared/types';

const $ = <T extends HTMLElement>(sel: string) => document.querySelector(sel) as T;
const params = new URLSearchParams(location.search);

if (params.has('capture')) {
  // Legacy headless mode for orchestrator/run.ts: render a state passed in from Playwright.
  document.body.classList.add('capture');
  const canvas = document.createElement('canvas');
  $('#stage').prepend(canvas);
  const view = new WorldView(canvas);
  (window as unknown as Record<string, unknown>).__nextup = {
    async render(state: WorldState, which: 'story' | 'overview' = 'story') {
      await view.setState(state, false);
      view.renderStill(which);
      return { errors: view.drainErrors(), triangles: view.triangleCount(), lights: view.lightCount() };
    },
  };
  (window as unknown as Record<string, unknown>).__nextupReady = true;
} else {
  startViewer();
}

function startViewer() {
  const stage = new Stage($('#stage'));
  const feed = new Feed($('#feed'));
  const pos = $<HTMLInputElement>('#pos');
  const playBtn = $<HTMLButtonElement>('#play');
  const caption = $('#caption');
  const tip = $('#tip');
  const thumb = $<HTMLImageElement>('#thumb');

  let run: RunInfo | null = null;
  let events: TimelineEvent[] = [];
  let cursor = 0; // number of events revealed
  let snap: Snapshot | null = null;
  let seekToken = 0;
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
    $('#ladder').hidden = info.mode !== 'ladder' && info.mode !== 'tiered';
    feed.clear();
    await seek(0, false);
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
      const left = `${(i / Math.max(1, events.length)) * 100}%`;
      if (e.type === 'engine' || e.type === 'budget') {
        const t = document.createElement('i');
        t.className = e.type;
        t.style.left = left;
        t.title = e.type === 'engine' ? `engine ${e.version}` : `budget ${fmtBytes(e.limit)}`;
        ticks.append(t);
      } else if (i === 0 || events[i - 1].turn !== e.turn) {
        const t = document.createElement('i');
        t.style.left = left;
        ticks.append(t);
      }
    });
  }

  /** Ladder header: which engine is live and how full the budget is (log scale). */
  function updateLadder(s: Snapshot) {
    if (run?.mode !== 'ladder' && run?.mode !== 'tiered') return;
    const eng = $('#engine');
    eng.textContent = run.mode === 'tiered' ? (s.engine ?? '') : `engine ${s.engine ?? '–'}`;
    eng.title = s.engineNotes || (run.mode === 'tiered' ? fmtTier(THREE_TIERS[Math.max(0, s.tier)]) : '');
    const ladder = run.mode === 'tiered' ? THREE_TIERS.map((t) => t.bytes) : TIERS;
    const lo = Math.log(ladder[0] / 4), hi = Math.log(ladder[ladder.length - 1]);
    const frac = (b: number) => `${Math.max(0, Math.min(1, (Math.log(Math.max(1, b)) - lo) / (hi - lo))) * 100}%`;
    $('#budget-limit').style.width = frac(s.limit);
    $('#budget-used').style.width = frac(s.bytes ?? 0);
    $('#budget-label').textContent = `${fmtBytes(s.bytes ?? 0)} / ${fmtBytes(s.limit)}`;
  }

  const turnAt = (c: number) => (c > 0 ? events[c - 1].turn : 0);

  async function seek(c: number, animate: boolean) {
    c = Math.max(0, Math.min(events.length, c));
    // Render events carry no world change; reveal them with the step before.
    while (c < events.length && c > 0 && events[c].type === 'render') c++;
    cursor = c;
    feed.show(events, cursor, run?.id ?? '');
    pos.value = String(cursor);
    $('#turnlabel').textContent = cursor === 0 ? 'start' : `turn ${turnAt(cursor)} / ${run?.maxTurns ?? 0}`;
    const narr = [...events.slice(0, cursor)].reverse().find((e) => e.type === 'narrator');
    caption.textContent = narr && narr.type === 'narrator' ? narr.narration : '';
    if (!run) return;
    const token = ++seekToken;
    const s = await snapshot(run, events, cursor);
    if (token !== seekToken) return;
    snap = s;
    updateLadder(s);
    await stage.show(s.engineUrl, s.world, animate);
  }

  function delayFor(ev: TimelineEvent | undefined) {
    if (!ev) return 1000;
    const base = ev.type === 'player' ? 1800 + ev.action.length * 15
      : ev.type === 'narrator' ? Math.min(7000, 1500 + ev.narration.length * 18)
      : ev.type === 'builder' ? 3000
      : ev.type === 'designer' ? Math.min(8000, 2500 + ev.critique.length * 15)
      : ev.type === 'engineer' ? 4500
      : ev.type === 'reviewer' ? Math.min(10000, 3000 + ev.assessment.length * 15)
      : ev.type === 'engine' ? 4000
      : ev.type === 'budget' ? 2500
      : 1000;
    return base / speed();
  }

  async function step() {
    if (cursor >= events.length) {
      if (run?.status !== 'running') pause();
      return;
    }
    await seek(cursor + 1, true);
    if (playing) timer = window.setTimeout(step, delayFor(events[cursor - 1]));
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
  $('#first').onclick = () => { pause(); seek(0, false); };
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

  const modeButtons = () => document.querySelectorAll<HTMLButtonElement>('#modes button');
  function setMode(m: string) {
    if (!stage.modes.includes(m)) m = 'follow';
    stage.setMode(m);
    modeButtons().forEach((b) => b.classList.toggle('on', b.dataset.mode === m));
    $('#walkhelp').hidden = m !== 'walk';
  }
  stage.onModes = (modes) => {
    modeButtons().forEach((b) => (b.disabled = !modes.includes(b.dataset.mode!)));
    const on = [...modeButtons()].find((b) => b.classList.contains('on'))?.dataset.mode ?? 'follow';
    if (!modes.includes(on)) setMode('follow');
  };
  modeButtons().forEach((b) => (b.onclick = () => setMode(b.dataset.mode!)));

  const handleKey = (key: string) => {
    if (key === 'Escape') setMode('follow');
    else if (key === ' ') (playing ? pause() : play());
    else if (key === 'ArrowRight') $('#fwd').click();
    else if (key === 'ArrowLeft') $('#back').click();
    else if (key === 'f') setMode('follow');
    else if (key === 'o') setMode('orbit');
    else if (key === 'k') setMode('walk');
  };
  stage.onKey = handleKey;
  addEventListener('keydown', (e) => {
    if ((e.target as HTMLElement).tagName === 'SELECT') return;
    if ([' ', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
    handleKey(e.key);
  });

  stage.onHover = (hit, x, y) => {
    if (!hit || !snap) { tip.hidden = true; return; }
    const factId = hit.fact ?? snap.entityFacts(hit.id);
    const fact = factId ? snap.facts[factId] : null;
    tip.innerHTML = `<b>${factId ?? hit.id}</b><div>${fact ? fact.description : ''}</div><div class="meta">${hit.id}${fact ? ` · since turn ${fact.since}` : ''}</div>`;
    tip.style.left = `${x + 14}px`;
    tip.style.top = `${y + 14}px`;
    tip.hidden = false;
  };

  loadRuns();
}
