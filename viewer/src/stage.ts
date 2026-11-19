// Hosts engines in iframes (one per engine version) and cross-fades between them,
// handing the camera pose across so a change of engine reads as one continuous shot.

interface Frame {
  url: string;
  iframe: HTMLIFrameElement;
  ready: Promise<string[]>;
  pending: Map<number, { resolve: (v: unknown) => void; reject: (e: Error) => void }>;
}

const FADE_MS = 1600;

export class Stage {
  private frames = new Map<string, Frame>();
  private current: Frame | null = null;
  private seq = 0;
  private mode = 'follow';
  private chain: Promise<void> = Promise.resolve();
  private queued: { url: string; world: unknown; animate: boolean } | null = null;
  modes: string[] = ['follow'];
  onKey: (key: string) => void = () => {};
  onHover: (hit: { id: string; fact: string | null } | null, x: number, y: number) => void = () => {};
  onModes: (modes: string[]) => void = () => {};

  constructor(private root: HTMLElement) {
    addEventListener('message', (e) => {
      const m = e.data;
      if (!m?.nextup) return;
      const frame = [...this.frames.values()].find((f) => f.iframe.contentWindow === e.source);
      if (!frame) return;
      if (m.id !== undefined) {
        const p = frame.pending.get(m.id);
        if (!p) return;
        frame.pending.delete(m.id);
        if (m.error) p.reject(new Error(m.error));
        else p.resolve(m.result);
      } else if (frame === this.current) {
        if (m.event === 'key') this.onKey(m.key);
        if (m.event === 'hover') this.onHover(m.hit, m.x, m.y);
      }
    });
  }

  private frame(url: string): Frame {
    let f = this.frames.get(url);
    if (f) return f;
    const iframe = document.createElement('iframe');
    iframe.className = 'engine';
    iframe.style.opacity = '0';
    iframe.src = `engine-host.html?engine=${encodeURIComponent(url)}`;
    this.root.prepend(iframe);
    let resolveReady!: (m: string[]) => void;
    const ready = new Promise<string[]>((r) => (resolveReady = r));
    const onReady = (e: MessageEvent) => {
      if (e.source === iframe.contentWindow && e.data?.nextup && e.data.event === 'ready') {
        removeEventListener('message', onReady);
        resolveReady(e.data.modes ?? ['follow']);
      }
    };
    addEventListener('message', onReady);
    f = { url, iframe, ready, pending: new Map() };
    this.frames.set(url, f);
    return f;
  }

  private call(f: Frame, method: string, ...args: unknown[]): Promise<unknown> {
    const id = ++this.seq;
    return new Promise((resolve, reject) => {
      f.pending.set(id, { resolve, reject });
      f.iframe.contentWindow?.postMessage({ nextupCall: true, id, method, args }, '*');
      setTimeout(() => { if (f.pending.delete(id)) reject(new Error(`${method} timed out`)); }, 20000);
    });
  }

  /** Show `world` on the engine at `url`. Serialized; only the latest queued request runs. */
  show(url: string, world: unknown, animate: boolean): Promise<void> {
    this.queued = { url, world, animate };
    this.chain = this.chain.then(async () => {
      const q = this.queued;
      if (!q) return;
      this.queued = null;
      try { await this.apply(q.url, q.world, q.animate); } catch (err) { console.warn(err); }
    });
    return this.chain;
  }

  private async apply(url: string, world: unknown, animate: boolean) {
    if (this.current?.url === url) {
      await this.call(this.current, 'setWorld', world, { animate });
      return;
    }
    const next = this.frame(url);
    const modes = await next.ready;
    const pose = this.current ? await this.call(this.current, 'getCamera').catch(() => null) : null;
    const mode = modes.includes(this.mode) ? this.mode : 'follow';
    await this.call(next, 'setCamera', mode, pose).catch(() => {});
    await this.call(next, 'setWorld', world, { animate: false });
    const prev = this.current;
    this.current = next;
    this.modes = modes;
    this.onModes(modes);
    next.iframe.style.transition = animate ? `opacity ${FADE_MS}ms ease` : 'none';
    next.iframe.style.zIndex = '1';
    next.iframe.style.opacity = '1';
    if (prev) {
      prev.iframe.style.zIndex = '0';
      const drop = () => {
        // Keep the two most recent engines warm for scrubbing; drop older ones.
        prev.iframe.style.opacity = '0';
        for (const [u, f] of this.frames) {
          if (f !== this.current && f !== prev) { f.iframe.remove(); this.frames.delete(u); }
        }
      };
      if (animate) setTimeout(drop, FADE_MS); else drop();
    }
  }

  setMode(mode: string) {
    this.mode = mode;
    if (this.current) this.call(this.current, 'setCamera', mode, null).catch(() => {});
    if (mode === 'walk') this.current?.iframe.focus();
  }
}
