// Headless screenshots through the same engine host page the viewer uses.
import { createServer, type ViteDevServer } from 'vite';
import { chromium, type Browser, type Page } from 'playwright';
import { fileURLToPath } from 'node:url';

const CONFIG = fileURLToPath(new URL('../viewer/vite.config.ts', import.meta.url));
const TIMEOUT = 45_000;

export class EngineCapture {
  private server!: ViteDevServer;
  private browser!: Browser;
  private page: Page | null = null;
  private engineUrl = '';
  private errs: string[] = [];
  private base = '';

  async start() {
    this.server = await createServer({ configFile: CONFIG, logLevel: 'silent', server: { port: 5199, strictPort: false } });
    await this.server.listen();
    this.base = this.server.resolvedUrls?.local[0] ?? 'http://localhost:5199/';
    this.browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  }

  private async open(engineUrl: string) {
    await this.page?.close().catch(() => {});
    this.page = await this.browser.newPage({ viewport: { width: 960, height: 540 } });
    this.errs = [];
    this.page.on('pageerror', (e) => this.errs.push(e.message));
    this.engineUrl = engineUrl;
    await this.page.goto(`${this.base}engine-host.html?capture=1&engine=${encodeURIComponent(engineUrl)}`);
    await this.page.waitForFunction(() => (window as unknown as { __hostReady?: boolean }).__hostReady === true, null, { timeout: TIMEOUT });
  }

  /** engineUrl is site-relative, e.g. /runs/<id>/engines/v2/engine.js */
  async render(engineUrl: string, world: unknown, file: string, view: 'follow' | 'overview'): Promise<{ errors: string[] }> {
    try {
      if (!this.page || this.engineUrl !== engineUrl) await this.open(engineUrl);
      this.errs = [];
      const res = await Promise.race([
        this.page!.evaluate(([w, v]) => (window as unknown as { __host: { render(w: unknown, v: string): Promise<{ errors: string[] }> } }).__host.render(w, v as string), [world, view] as const),
        new Promise<never>((_, rej) => setTimeout(() => rej(new Error(`render timed out after ${TIMEOUT / 1000}s`)), TIMEOUT)),
      ]);
      await this.page!.screenshot({ path: file, type: 'jpeg', quality: 72 });
      return { errors: [...res.errors, ...this.errs] };
    } catch (err) {
      // A hung or crashed page gets a fresh one next time.
      await this.page?.close().catch(() => {});
      this.page = null;
      return { errors: [`render failed: ${(err as Error).message}`, ...this.errs] };
    }
  }

  async stop() {
    await this.browser?.close();
    await this.server?.close();
  }
}
