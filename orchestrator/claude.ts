// Thin wrapper around the `claude` CLI in headless mode. Unsetting the API key
// makes calls bill to the logged-in Claude subscription.
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export type Content =
  | { type: 'text'; text: string }
  | { type: 'image'; source: { type: 'base64'; media_type: 'image/jpeg' | 'image/png'; data: string } };

export interface CallOptions {
  label: string;
  model: string;
  system: string;
  schema: object;
  content: Content[];
  timeoutMs?: number;
}

export interface CallResult<T> {
  output: T;
  durationMs: number;
}

const CWD = join(tmpdir(), 'next-up-agents');
mkdirSync(CWD, { recursive: true });

function runOnce(opts: CallOptions): Promise<CallResult<unknown>> {
  const args = [
    '-p',
    '--input-format', 'stream-json',
    '--output-format', 'stream-json',
    '--verbose',
    '--model', opts.model,
    '--tools', '',
    '--setting-sources', '',
    '--strict-mcp-config',
    '--no-session-persistence',
    '--system-prompt', opts.system,
    '--json-schema', JSON.stringify(opts.schema),
  ];
  const env = { ...process.env };
  delete env.ANTHROPIC_API_KEY;
  delete env.CLAUDE_CODE_OAUTH_TOKEN;
  delete env.CLAUDECODE;

  return new Promise((resolve, reject) => {
    const started = Date.now();
    const child = spawn('claude', args, { cwd: CWD, env, stdio: ['pipe', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new Error(`${opts.label}: timed out after ${opts.timeoutMs}ms`));
    }, opts.timeoutMs ?? 10 * 60_000);
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('error', (e) => { clearTimeout(timer); reject(e); });
    child.on('close', (code) => {
      clearTimeout(timer);
      const result = stdout
        .split('\n')
        .filter((l) => l.startsWith('{'))
        .map((l) => { try { return JSON.parse(l); } catch { return null; } })
        .find((m) => m && m.type === 'result');
      if (!result) {
        reject(new Error(`${opts.label}: no result (exit ${code}) ${stderr.slice(-500)} ${stdout.slice(-500)}`));
        return;
      }
      if (result.is_error || result.structured_output === undefined) {
        reject(new Error(`${opts.label}: ${result.subtype ?? 'error'} ${String(result.result ?? '').slice(0, 500)}`));
        return;
      }
      resolve({ output: result.structured_output, durationMs: Date.now() - started });
    });
    const msg = { type: 'user', message: { role: 'user', content: opts.content } };
    child.stdin.end(JSON.stringify(msg) + '\n');
  });
}

/** Calls Claude with up to three attempts on transport/format failures. */
export async function callClaude<T>(opts: CallOptions): Promise<CallResult<T>> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return (await runOnce(opts)) as CallResult<T>;
    } catch (err) {
      lastErr = err;
      console.warn(`  ! ${(err as Error).message} (attempt ${attempt})`);
      await new Promise((r) => setTimeout(r, 4000 * attempt));
    }
  }
  throw lastErr;
}
