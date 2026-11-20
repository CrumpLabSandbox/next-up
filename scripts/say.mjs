#!/usr/bin/env node
// Human Wanderer mode: submit your move from the terminal.
//   npm run say -- world-05 "light the candle" ["optional inner thought"]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [run, action, thought = ''] = process.argv.slice(2);
if (!run || !action) {
  console.log('usage: npm run say -- <run-id> "what you do" ["thought"]');
  process.exit(2);
}
const dir = path.join(fileURLToPath(new URL('..', import.meta.url)), 'runs', run);
const info = JSON.parse(fs.readFileSync(path.join(dir, 'run.json'), 'utf8'));
if (!info.awaiting) {
  console.log(`${run} isn't waiting for a move right now (status: ${info.status}).`);
  process.exit(1);
}
const turn = info.awaiting.turn;
fs.mkdirSync(path.join(dir, 'input'), { recursive: true });
fs.writeFileSync(path.join(dir, 'input', `turn-${String(turn).padStart(3, '0')}.json`), JSON.stringify({ action, thought, via: 'terminal' }));
console.log(`sent turn ${turn}: ${action}`);
