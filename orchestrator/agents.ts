// The three agents: what each one is shown and what it must return.
import { readFileSync } from 'node:fs';
import { callClaude, type Content } from './claude';
import type { BuilderEvent, FactChange, NarratorEvent, PlayerEvent, TimelineEvent, WorldState } from '../shared/types';
import { LIMITS } from '../shared/world';

const prompt = (name: string) => readFileSync(new URL(`./prompts/${name}.md`, import.meta.url), 'utf8');
const PROMPTS = { player: prompt('player'), narrator: prompt('narrator'), builder: prompt('builder') };

const imageContent = (file: string | null): Content[] =>
  file ? [{ type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: readFileSync(file).toString('base64') } }] : [];

const r1 = (n: number) => Math.round(n * 10) / 10;
const fmtVec = (v: number[]) => `[${v.map(r1).join(', ')}]`;

// ---------- schemas ----------

const PLAYER_SCHEMA = {
  type: 'object',
  properties: { thought: { type: 'string' }, action: { type: 'string' } },
  required: ['thought', 'action'],
  additionalProperties: false,
};

const NARRATOR_SCHEMA = {
  type: 'object',
  properties: {
    narration: { type: 'string' },
    movement: { type: 'string' },
    facts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          op: { type: 'string', enum: ['add', 'change', 'remove'] },
          id: { type: 'string' },
          description: { type: 'string' },
          placement: { type: 'string' },
        },
        required: ['op', 'id', 'description', 'placement'],
        additionalProperties: false,
      },
    },
  },
  required: ['narration', 'movement', 'facts'],
  additionalProperties: false,
};

const BUILDER_SCHEMA = {
  type: 'object',
  properties: {
    notes: { type: 'string' },
    ops: {
      type: 'array',
      items: {
        type: 'object',
        properties: { op: { type: 'string', enum: ['defineComponent', 'add', 'update', 'remove', 'environment', 'moveAvatar'] } },
        required: ['op'],
        additionalProperties: true,
      },
    },
  },
  required: ['notes', 'ops'],
  additionalProperties: false,
};

// ---------- context ----------

function story(events: TimelineEvent[], lastTurns = Infinity): string {
  const byTurn = new Map<number, string[]>();
  for (const e of events) {
    const lines = byTurn.get(e.turn) ?? [];
    if (e.type === 'player') lines.push(`Wanderer: ${e.action}`);
    if (e.type === 'narrator') lines.push(`Narrator: ${e.narration}`);
    byTurn.set(e.turn, lines);
  }
  const turns = [...byTurn.entries()].filter(([, l]) => l.length);
  const shown = turns.slice(-lastTurns);
  const head = turns.length > shown.length ? `(${turns.length - shown.length} earlier turns omitted)\n\n` : '';
  return head + shown.map(([t, l]) => `[${t === 0 ? 'Opening' : `Turn ${t}`}]\n${l.join('\n')}`).join('\n\n');
}

function factsList(state: WorldState): string {
  const built = new Set(Object.values(state.entities).map((e) => e.fact));
  const facts = Object.values(state.facts);
  if (!facts.length) return '(none yet: the world is an empty void)';
  return facts.map((f) => `- ${f.id}: ${f.description} | placement: ${f.placement} | since turn ${f.since}${built.has(f.id) ? '' : ' | NOT YET BUILT'}`).join('\n');
}

function sceneSummary(state: WorldState, lastTriangles: number): string {
  const comps = Object.values(state.components).filter((c) => c.name !== 'placeholder');
  const totalCode = comps.reduce((n, c) => n + c.code.length, 0);
  const showAllCode = totalCode < 45_000;
  const compLines = comps.map((c) => {
    const code = showAllCode || state.turn - c.updated <= 4 ? `\n\`\`\`js\n${c.code}\n\`\`\`` : ' (code omitted; redefine fully if changing)';
    return `### ${c.name}: ${c.doc} (${c.code.length} bytes, updated turn ${c.updated})${code}`;
  });
  const ents = Object.values(state.entities).map((e) =>
    `- ${e.id} · ${e.component} · at ${fmtVec(e.at)} · rot ${r1(e.rotation)} · scale ${r1(e.scale)} · fact ${e.fact ?? '-'}${e.behavior ? ` · behavior ${e.behavior.type}` : ''} · params ${JSON.stringify(e.params).slice(0, 300)}`);
  const env = state.env;
  return [
    `Wanderer: at ${fmtVec(state.avatar.at)}, facing ${r1(state.avatar.facing)}°`,
    `Environment: ${JSON.stringify(env)}`,
    `Scene budget: ${ents.length} entities, ~${lastTriangles.toLocaleString()} / ${LIMITS.trianglesTotal.toLocaleString()} triangles at last render, max ${LIMITS.lightsTotal} lights.`,
    `\n## Components\n${compLines.join('\n\n') || '(none yet)'}`,
    `\n## Entities\n${ents.join('\n') || '(none yet)'}`,
  ].join('\n');
}

// ---------- calls ----------

export async function runPlayer(model: string, turn: number, events: TimelineEvent[], shot: string | null) {
  const lastNarr = [...events].reverse().find((e): e is NarratorEvent => e.type === 'narrator');
  const text = `Story so far:\n\n${story(events)}\n\n---\nTurn ${turn}. The Narrator's latest:\n"${lastNarr?.narration ?? ''}"\n\nThe picture shows your current view. What do you do?`;
  const { output } = await callClaude<{ thought: string; action: string }>({
    label: 'player', model, system: PROMPTS.player, schema: PLAYER_SCHEMA,
    content: [...imageContent(shot), { type: 'text', text }],
  });
  return { turn, type: 'player', thought: output.thought, action: output.action, ts: new Date().toISOString() } satisfies PlayerEvent;
}

export async function runNarrator(model: string, turn: number, events: TimelineEvent[], state: WorldState, shot: string | null, premise: string) {
  const lastBuild = [...events].reverse().find((e): e is BuilderEvent => e.type === 'builder');
  const action = [...events].reverse().find((e): e is PlayerEvent => e.type === 'player' && e.turn === turn);
  const parts = [
    `## Established facts\n${factsList(state)}`,
    `## Wanderer position\nat ${fmtVec(state.avatar.at)}, facing ${r1(state.avatar.facing)}° (0 = north)`,
    lastBuild ? `## Builder's notes from last turn\n${lastBuild.notes}` : '',
    `## Story so far\n${story(events, 14) || '(nothing yet)'}`,
  ];
  if (turn === 0) {
    parts.push(
      `## This is the opening\nThe Wanderer has just come into being. Nothing exists yet. Write what they first perceive. Establish at most one or two facts: perhaps the ground beneath them, perhaps a single distant light, perhaps only a change in the dark. Leave room for the world to grow.` +
        (premise ? `\n\nA seed for this world (let it emerge subtly over many turns, don't announce it): ${premise}` : ''),
    );
  } else {
    parts.push(`## Turn ${turn}: the Wanderer acts\n"${action?.action ?? 'looks around'}"\n\nThe picture shows the current rendered view before your response.`);
  }
  const { output } = await callClaude<{ narration: string; movement: string; facts: FactChange[] }>({
    label: 'narrator', model, system: PROMPTS.narrator, schema: NARRATOR_SCHEMA,
    content: [...imageContent(shot), { type: 'text', text: parts.filter(Boolean).join('\n\n') }],
  });
  return { turn, type: 'narrator', narration: output.narration, movement: output.movement ?? '', facts: output.facts ?? [], ts: new Date().toISOString() } satisfies NarratorEvent;
}

export async function runBuilder(
  model: string, turn: number, narr: NarratorEvent, state: WorldState, shot: string | null,
  lastTriangles: number, issues: string[], feedback: string | null,
) {
  const parts = [
    `## Turn ${turn} narration\n${narr.narration}`,
    `## Fact changes this turn\n${narr.facts.length ? narr.facts.map((f) => `- ${f.op} ${f.id}: ${f.description} | placement: ${f.placement}`).join('\n') : '(none)'}`,
    `## Wanderer movement this turn\n${narr.movement || '(none: the Wanderer stays put)'}`,
    `## All established facts\n${factsList(state)}`,
    `## Current scene (before your ops)\n${sceneSummary(state, lastTriangles)}`,
    issues.length ? `## Issues from the last render (please fix)\n${issues.map((i) => `- ${i}`).join('\n')}` : '',
    `The picture is the Wanderer's current view before your changes.`,
    feedback ? `## Your previous attempt this turn had problems\n${feedback}\nSend the complete corrected list of ops for this turn (it replaces the previous attempt entirely).` : '',
  ];
  const { output } = await callClaude<{ notes: string; ops: unknown[] }>({
    label: 'builder', model, system: PROMPTS.builder, schema: BUILDER_SCHEMA,
    content: [...imageContent(shot), { type: 'text', text: parts.filter(Boolean).join('\n\n') }],
  });
  return { notes: output.notes ?? '', ops: Array.isArray(output.ops) ? output.ops : [] };
}
