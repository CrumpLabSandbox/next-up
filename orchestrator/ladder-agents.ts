// Agents for 'ladder' runs, where the engine and its world format can change.
// The Wanderer and Narrator are shared with legacy runs (see agents.ts).
import { readFileSync } from 'node:fs';
import { callClaude, runAgent, type Content } from './claude';
import { TIERS, fmtBytes } from '../shared/ladder';
import type { BuilderEvent, DesignerEvent, DesignSuggestion, EngineEvent, Fact, NarratorEvent, TimelineEvent } from '../shared/types';

const prompt = (name: string) => readFileSync(new URL(`./prompts/${name}.md`, import.meta.url), 'utf8');
const PROMPTS = { builder: prompt('builder-ladder'), designer: prompt('designer-ladder'), engineer: prompt('engineer') };

const image = (file: string | null): Content[] =>
  file ? [{ type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: readFileSync(file).toString('base64') } }] : [];

/** What every ladder agent needs to know about the live engine and budget. */
export interface LadderContext {
  turn: number;
  engine: { version: string; ops: string; notes: string; bytes: number };
  sceneText: string; // engine describe(world)
  worldBytes: number;
  tier: number;
  avatar: { at: number[]; facing: number };
  facts: Record<string, Fact>;
  builtFacts: Set<string>;
  styleGuide: string;
  issues: string[];
}

const limit = (c: LadderContext) => TIERS[c.tier];

export function budgetLine(c: LadderContext) {
  const used = c.engine.bytes + c.worldBytes;
  return `Budget tier ${c.tier + 1}/${TIERS.length}: ${fmtBytes(limit(c))}. Using engine ${fmtBytes(c.engine.bytes)} + world ${fmtBytes(c.worldBytes)} = ${fmtBytes(used)} (${Math.round((used / limit(c)) * 100)}%), ${fmtBytes(Math.max(0, limit(c) - used))} free.`;
}

function factLines(c: LadderContext) {
  const fs = Object.values(c.facts);
  if (!fs.length) return '(none yet: the world is an empty void)';
  return fs.map((f) => `- ${f.id}: ${f.description} | placement: ${f.placement}${c.builtFacts.has(f.id) ? '' : ' | NOT YET BUILT'}`).join('\n');
}

const r1 = (n: number) => Math.round(n * 10) / 10;
const sceneBlock = (c: LadderContext) =>
  `Wanderer at [${c.avatar.at.map(r1).join(', ')}], facing ${r1(c.avatar.facing)}°\n${budgetLine(c)}\n\n${c.sceneText.slice(0, 60_000)}`;

const BUILDER_SCHEMA = {
  type: 'object',
  properties: {
    notes: { type: 'string' },
    ops: { type: 'array', items: { type: 'object', properties: { op: { type: 'string' } }, required: ['op'], additionalProperties: true } },
  },
  required: ['notes', 'ops'],
  additionalProperties: false,
};

export type LadderBrief = { stage: 'build'; narr: NarratorEvent } | { stage: 'polish'; design: DesignerEvent };

const fmtSuggestions = (list: DesignSuggestion[]) => list.map((x, i) => `${i + 1}. [${x.target}] ${x.change}`).join('\n');

export async function runLadderBuilder(model: string, c: LadderContext, brief: LadderBrief, shot: string | null, feedback: string | null) {
  const task = brief.stage === 'build'
    ? [
        `## Turn ${c.turn} narration\n${brief.narr.narration}`,
        `## Fact changes this turn\n${brief.narr.facts.length ? brief.narr.facts.map((f) => `- ${f.op} ${f.id}: ${f.description} | placement: ${f.placement}`).join('\n') : '(none)'}`,
        `## Wanderer movement this turn\n${brief.narr.movement || '(none: the Wanderer stays put)'}`,
      ]
    : [
        `## Turn ${c.turn}: POLISH PASS\nImplement the Graphic Designer's suggestions now, as well as this engine and budget allow (no story changes, no Wanderer movement).`,
        `Designer's critique: ${brief.design.critique}`,
        `## Suggestions\n${fmtSuggestions(brief.design.suggestions)}`,
      ];
  const parts = [
    ...task,
    c.styleGuide ? `## Style guide\n${c.styleGuide}` : '',
    `## All established facts\n${factLines(c)}`,
    `## Current scene (engine ${c.engine.version}, before your ops)\n${sceneBlock(c)}`,
    c.issues.length ? `## Issues from the last render (please fix)\n${c.issues.map((i) => `- ${i}`).join('\n')}` : '',
    `The picture is the Wanderer's current view before your changes.`,
    feedback ? `## Your previous attempt this turn had problems\n${feedback}\nSend the complete corrected list of ops (it replaces the previous attempt entirely).` : '',
  ];
  const system = `${PROMPTS.builder}\n\n# The current engine: ${c.engine.version}\n\n${c.engine.ops}`;
  const { output } = await callClaude<{ notes: string; ops: unknown[] }>({
    label: `builder:${brief.stage}`, model, system, schema: BUILDER_SCHEMA,
    content: [...image(shot), { type: 'text', text: parts.filter(Boolean).join('\n\n') }],
  });
  return { notes: output.notes ?? '', ops: Array.isArray(output.ops) ? output.ops : [] };
}

const DESIGNER_SCHEMA = {
  type: 'object',
  properties: {
    critique: { type: 'string' },
    suggestions: {
      type: 'array',
      items: { type: 'object', properties: { target: { type: 'string' }, change: { type: 'string' } }, required: ['target', 'change'], additionalProperties: false },
    },
    styleGuide: { type: 'string' },
    requestUnlock: { type: 'boolean' },
    unlockReason: { type: 'string' },
    engineRequest: { type: 'string' },
  },
  required: ['critique', 'suggestions', 'styleGuide', 'requestUnlock', 'unlockReason', 'engineRequest'],
  additionalProperties: false,
};

export async function runLadderDesigner(
  model: string, c: LadderContext, events: TimelineEvent[], storyShot: string | null, overviewShot: string | null,
  availability: { unlockIn: number; engineIn: number },
) {
  const past = events.filter((e): e is DesignerEvent => e.type === 'designer').slice(-4);
  const polish = new Map(events.filter((e): e is BuilderEvent => e.type === 'builder' && e.stage === 'polish').map((b) => [b.turn, b.notes]));
  const history = past.map((d) => `[Turn ${d.turn}] ${d.critique}\n${fmtSuggestions(d.suggestions)}\nBuilder did: ${polish.get(d.turn) ?? '(n/a)'}${d.engineRequest ? `\nEngine request: ${d.engineRequest}` : ''}`).join('\n\n');
  const engines = events.filter((e): e is EngineEvent => e.type === 'engine').map((e) => `- ${e.version} (turn ${e.turn}, ${fmtBytes(e.bytes)}): ${e.notes}`).join('\n');
  const engineer = events.filter((e) => e.type === 'engineer').slice(-3).map((e) => e.type === 'engineer' ? `- turn ${e.turn}: ${e.ok ? `built ${e.version}` : `FAILED (${e.problems.slice(0, 2).join('; ')})`}` : '').join('\n');
  const latest = [...events].reverse().find((e): e is NarratorEvent => e.type === 'narrator');
  const next = TIERS[c.tier + 1];
  const parts = [
    `Turn ${c.turn}. Picture 1 is the story view; picture 2 is the overview.`,
    `## Budget\n${budgetLine(c)}\nLadder: ${TIERS.map(fmtBytes).join(' → ')}\n${next ? `Next tier (${fmtBytes(next)}): ${availability.unlockIn <= 0 ? 'available to request NOW' : `available in ${availability.unlockIn} turns`}.` : 'Already at the top tier.'}`,
    `## Engine\nCurrent: ${c.engine.version}. A new engine: ${availability.engineIn <= 0 ? 'can be requested NOW' : `available in ${availability.engineIn} turns`}.\nHistory:\n${engines}${engineer ? `\nRecent Engineer sessions:\n${engineer}` : ''}\n\n### Current engine's ops doc\n${c.engine.ops}`,
    `## Current style guide\n${c.styleGuide || '(none yet: establish one)'}`,
    `## Latest narration\n${latest?.narration ?? ''}`,
    `## Established story facts (respect these)\n${factLines(c)}`,
    `## Current scene\n${sceneBlock(c)}`,
    c.issues.length ? `## Render issues\n${c.issues.join('\n')}` : '',
    history ? `## Your recent critiques and what the Builder did\n${history}` : '',
  ];
  const { output } = await callClaude<Omit<DesignerEvent, 'turn' | 'type' | 'overview' | 'ts'>>({
    label: 'designer', model, system: PROMPTS.designer, schema: DESIGNER_SCHEMA,
    content: [...image(storyShot), ...image(overviewShot), { type: 'text', text: parts.filter(Boolean).join('\n\n') }],
  });
  return {
    critique: output.critique,
    suggestions: (output.suggestions ?? []).slice(0, 4),
    styleGuide: output.styleGuide || c.styleGuide,
    requestUnlock: !!output.requestUnlock,
    unlockReason: output.unlockReason ?? '',
    engineRequest: (output.engineRequest ?? '').trim(),
  };
}

export const ENGINEER_TOOLS = [
  'Read', 'Write', 'Edit', 'Glob', 'Grep',
  'Bash(npm install *)', 'Bash(npm i *)', 'Bash(npm ls *)', 'Bash(node *)', 'Bash(ls *)', 'Bash(cat *)', 'Bash(head *)', 'Bash(wc *)', 'Bash(mkdir *)',
];

export async function runEngineer(model: string, cwd: string, toolPath: string, request: string, newVersion: string, logFile: string) {
  return runAgent({
    label: 'engineer',
    model,
    cwd,
    appendSystem: PROMPTS.engineer.replaceAll('{{TOOL}}', toolPath),
    prompt: `Build engine ${newVersion}. The Graphic Designer's request:\n\n${request}\n\nStart by reading CONTRACT.md and task.json, then the current src/ and OPS.md. Check your work with: node ${toolPath} check`,
    allowedTools: ENGINEER_TOOLS,
    timeoutMs: 35 * 60_000,
    logFile,
  });
}
