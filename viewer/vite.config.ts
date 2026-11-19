import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const RUNS = fileURLToPath(new URL('../runs', import.meta.url));
const OUT = fileURLToPath(new URL('../dist', import.meta.url));

const TYPES: Record<string, string> = {
  '.json': 'application/json',
  '.jsonl': 'application/x-ndjson',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.js': 'text/javascript',
};

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
        if (url === '/runs/index.json') {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-store');
          res.end(JSON.stringify(runIndex()));
          return;
        }
        if (url.startsWith('/runs/')) {
          const file = path.normalize(path.join(RUNS, url.slice('/runs/'.length)));
          if (!file.startsWith(RUNS + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
            res.statusCode = 404;
            res.end('not found');
            return;
          }
          res.setHeader('Content-Type', TYPES[path.extname(file)] ?? 'application/octet-stream');
          res.setHeader('Cache-Control', 'no-store');
          fs.createReadStream(file).pipe(res);
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
          filter: (src) => !src.endsWith('.log') && path.basename(src) !== 'STOP',
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
  build: { outDir: OUT, emptyOutDir: true, chunkSizeWarningLimit: 1500 },
  logLevel: 'warn',
});
