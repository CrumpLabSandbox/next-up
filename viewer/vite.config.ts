import { defineConfig, type Plugin } from 'vite';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const RUNS = fileURLToPath(new URL('../runs', import.meta.url));

const TYPES: Record<string, string> = {
  '.json': 'application/json',
  '.jsonl': 'application/x-ndjson',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.js': 'text/javascript',
};

/** Serves runs/ (timelines, screenshots) and a run index to the viewer. */
function runsPlugin(): Plugin {
  return {
    name: 'next-up-runs',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? '').split('?')[0]);
        if (url === '/api/runs') {
          const runs = fs.existsSync(RUNS)
            ? fs.readdirSync(RUNS)
                .map((d) => path.join(RUNS, d, 'run.json'))
                .filter((f) => fs.existsSync(f))
                .map((f) => JSON.parse(fs.readFileSync(f, 'utf8')))
                .sort((a, b) => String(b.created).localeCompare(String(a.created)))
            : [];
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(runs));
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
  };
}

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [runsPlugin()],
  server: { fs: { allow: ['..'] } },
  logLevel: 'warn',
});
