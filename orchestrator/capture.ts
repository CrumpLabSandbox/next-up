// Renders world states to screenshots using the viewer's own runtime in
// headless Chromium, so what the agents see matches what replays show.
import { createServer, type ViteDevServer } from 'vite';
import { chromium, type Browser, type Page } from 'playwright';
import { fileURLToPath } from 'node:url';
import type { WorldState } from '../shared/types';

const CONFIG = fileURLToPath(new URL('../viewer/vite.config.ts', import.meta.url));

export class Capture {
  private server!: ViteDevServer;
  private browser!: Browser;
  private page!: Page;
  private pageErrors: string[] = [];

  async start() {
    this.server = await createServer({ configFile: CONFIG, server: { port: 5199, strictPort: false } });
    await this.server.listen();
    const url = this.server.resolvedUrls?.local[0] ?? 'http://localhost:5199/';
    this.browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
    await this.openPage(url);
  }

  private async openPage(url: string) {
    this.page = await this.browser.newPage({ viewport: { width: 960, height: 540 } });
    this.page.on('pageerror', (e) => this.pageErrors.push(e.message));
    await this.page.goto(`${url}?capture=1`);
    await this.page.waitForFunction(() => (window as unknown as { __nextupReady?: boolean }).__nextupReady === true, null, { timeout: 60_000 });
  }

  /** Renders `state` and saves a JPEG. Returns runtime errors and the triangle count. */
  async render(state: WorldState, file: string, view: 'story' | 'overview' = 'story'): Promise<{ errors: string[]; triangles: number; lights: number }> {
    this.pageErrors = [];
    const res = await this.page.evaluate(
      async ([s, v]) => (window as unknown as { __nextup: { render(s: unknown, v: string): Promise<{ errors: string[]; triangles: number; lights: number }> } }).__nextup.render(s, v as string),
      [state as unknown as Record<string, unknown>, view] as const,
    );
    await this.page.screenshot({ path: file, type: 'jpeg', quality: 72 });
    return { errors: [...res.errors, ...this.pageErrors], triangles: res.triangles, lights: res.lights };
  }

  async stop() {
    await this.browser?.close();
    await this.server?.close();
  }
}
