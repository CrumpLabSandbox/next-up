import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const RUNS = fileURLToPath(new URL('../runs', import.meta.url));
const WORK = fileURLToPath(new URL('../work', import.meta.url));
const OUT = fileURLToPath(new URL('../dist', import.meta.url));

const TYPES: Record<string, string> = {
  '.json': 'application/json',
  '.jsonl': 'application/x-ndjson',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.wasm': 'application/wasm',
  '.md': 'text/markdown',
  '.bin': 'application/octet-stream',
};

function serveFrom(root: string, rel: string, res: import('node:http').ServerResponse): boolean {
  const file = path.normalize(path.join(root, rel));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return false;
  res.setHeader('Content-Type', TYPES[path.extname(file)] ?? 'application/octet-stream');
  res.setHeader('Cache-Control', 'no-store');
  fs.createReadStream(file).pipe(res);
  return true;
}

/** Run folders worth publishing (skips scratch output like _selftest). */
function runDirs(): string[] {
  if (!fs.existsSync(RUNS)) return [];
  return fs.readdirSync(RUNS).filter((d) => !d.startsWith('_') && fs.existsSync(path.join(RUNS, d, 'run.json')));
}

function runIndex() {
  return runDirs()
    .map((d) => JSON.parse(fs.readFileSync(path.join(RUNS, d, 'run.json'), 'utf8')))
    .sort((a, b) => String(b.created).localeCompare(String(a.created)));
}

/**
 * Dev: serves runs/ (timelines, screenshots) plus a generated runs/index.json.
 * Build: copies the same files into dist/runs so the site works statically (GitHub Pages).
 */
function runsPlugin(): Plugin {
  return {
    name: 'next-up-runs',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? '').split('?')[0]);
        if (url === '/api/input' && req.method === 'POST') {
          // Human Wanderer mode: the viewer's input box submits the person's move here.
          let body = '';
          req.on('data', (d) => (body += d));
          req.on('end', () => {
            const fail = (code: number, msg: string) => { res.statusCode = code; res.end(JSON.stringify({ error: msg })); };
            try {
              const { run, turn, action, thought, role = 'wanderer' } = JSON.parse(body);
              if (typeof run !== 'string' || !/^[\w-]+$/.test(run)) return fail(400, 'bad run');
              const runDir = path.join(RUNS, run);
              const info = JSON.parse(fs.readFileSync(path.join(runDir, 'run.json'), 'utf8'));
              if (!info.awaiting || info.awaiting.turn !== turn || (info.awaiting.role ?? 'wanderer') !== role) return fail(409, 'not waiting for that turn');
              if (!/^(wanderer|narrator|designer|gamemaster)$/.test(role)) return fail(400, 'bad role');
              const text = String(action ?? '').trim().slice(0, 500);
              if (!text) return fail(400, 'empty move');
              fs.mkdirSync(path.join(runDir, 'input'), { recursive: true });
              const file = path.join(runDir, 'input', `turn-${String(turn).padStart(3, '0')}-${role}.json`);
              fs.writeFileSync(file, JSON.stringify({ action: text, thought: String(thought ?? '').slice(0, 500), via: 'viewer' }));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
            } catch (err) {
              fail(500, String((err as Error).message));
            }
          });
          return;
        }
        if (url === '/runs/index.json') {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-store');
          res.end(JSON.stringify(runIndex()));
          return;
        }
        // /work/ holds engine drafts the Engineer is still checking (dev only).
        for (const [prefix, root] of [['/runs/', RUNS], ['/work/', WORK]] as const) {
          if (!url.startsWith(prefix)) continue;
          if (!serveFrom(root, url.slice(prefix.length), res)) {
            res.statusCode = 404;
            res.end('not found');
          }
          return;
        }
        next();
      });
    },
    closeBundle() {
      const dest = path.join(OUT, 'runs');
      fs.mkdirSync(dest, { recursive: true });
      for (const d of runDirs()) {
        fs.cpSync(path.join(RUNS, d), path.join(dest, d), {
          recursive: true,
          filter: (src) => !src.endsWith('.log') && path.basename(src) !== 'STOP' && !src.includes(`${path.sep}src${path.sep}`),
        });
      }
      fs.writeFileSync(path.join(dest, 'index.json'), JSON.stringify(runIndex()));
    },
  };
}

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: './',
  plugins: [runsPlugin()],
  server: { fs: { allow: ['..'] } },
  build: {
    outDir: OUT,
    emptyOutDir: true,
    target: 'es2022',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        host: fileURLToPath(new URL('./engine-host.html', import.meta.url)),
      },
    },
  },
});
