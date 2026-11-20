// The Game Master and the Cutscene Director, plus the "scribe" calls that turn a
// person's words into an agent's structured output on a role-swap turn.
import { readFileSync } from 'node:fs';
import { callClaude } from './claude';
import { factsList, imageContent, story, turnContext } from './agents';
import { CUTSCENE_TIERS, type Cutscene } from '../shared/cutscene';
import type { CutsceneEvent, GameMasterEvent, NarratorEvent, PlayerEvent, TimelineEvent, WorldState } from '../shared/types';

const prompt = (name: string) => readFileSync(new URL(`./prompts/${name}.md`, import.meta.url), 'utf8');
const PROMPTS = { gm: prompt('gamemaster'), cutscene: prompt('cutscene') };

const GM_SCHEMA = {
  type: 'object',
  properties: {
    ruling: { type: 'string' },
    announce: { type: 'string' },
    useRoll: { type: 'boolean' },
    modifier: { type: 'integer' },
    visible: { type: 'boolean' },
    presentation: { type: 'string' },
    rollReason: { type: 'string' },
    ops: { type: 'array', items: { type: 'object', properties: { op: { type: 'string' }, id: { type: 'string' } }, required: ['op', 'id'], additionalProperties: true } },
    pacing: { type: 'string', enum: ['build', 'peak', 'relax'] },
    breakthrough: { type: 'string' },
    grantRole: { type: 'string', enum: ['', 'narrator', 'designer', 'gamemaster'] },
    grantReason: { type: 'string' },
  },
  required: ['ruling', 'announce', 'useRoll', 'modifier', 'visible', 'presentation', 'rollReason', 'ops', 'pacing', 'breakthrough', 'grantRole', 'grantReason'],
  additionalProperties: false,
};

export interface GMOutput {
  ruling: string; announce: string; useRoll: boolean; modifier: number; visible: boolean; presentation: string; rollReason: string;
  ops: unknown[]; pacing: 'build' | 'peak' | 'relax'; breakthrough: string; grantRole: '' | 'narrator' | 'designer' | 'gamemaster'; grantReason: string;
}

const recentRulings = (events: TimelineEvent[]) => events.filter((e): e is GameMasterEvent => e.type === 'gamemaster').slice(-6)
  .map((g) => `[${g.turn}] ${g.announce} | ${g.ruling}${g.roll ? ` (roll ${g.roll.total} ${g.roll.band})` : ''} | pacing ${g.pacing}`).join('\n');

export async function runGameMaster(
  model: string, turn: number, maxTurns: number, events: TimelineEvent[], state: WorldState, move: PlayerEvent,
  dice: number[], shot: string | null, roleSwapAvailable: boolean, humanRuling: string | null,
): Promise<GMOutput> {
  const parts = [
    `Turn ${turn} of about ${maxTurns}.`,
    `## The Wanderer's move\n"${move.action}"${move.thought ? `\n(their thought: ${move.thought})` : ''}`,
    `## Pre-rolled dice (use only if a roll is warranted)\n2d6 = ${dice[0]} + ${dice[1]} = ${dice[0] + dice[1]} (before your modifier)`,
    `## Game state\n${turnContext.game || '(no mechanics yet: the HUD is hidden)'}`,
    `## Recent rulings\n${recentRulings(events) || '(none yet)'}`,
    `## Established world facts\n${factsList(state)}`,
    `## Story so far\n${story(events, 10) || '(nothing yet)'}`,
    turnContext.review?.narrative || turnContext.review?.experience ? `## Reviewer's latest notes\n${[turnContext.review?.narrative, turnContext.review?.experience].filter(Boolean).join('\n')}` : '',
    roleSwapAvailable ? 'A role swap could be granted this turn if truly earned.' : 'Role swaps are not available right now (leave grantRole empty).',
    humanRuling ? `## A PERSON IS PLAYING THE GAME MASTER THIS TURN\nTheir ruling, in their words, is final: "${humanRuling}"\nFormalize it faithfully: restate it as \`ruling\`, express any mechanics it implies as ops, and set the roll fields to match what they said (useRoll false unless they asked for a roll).` : '',
    'The picture is the current view.',
  ];
  const { output } = await callClaude<GMOutput>({
    label: 'gamemaster', model, system: PROMPTS.gm, schema: GM_SCHEMA,
    content: [...imageContent(shot), { type: 'text', text: parts.filter(Boolean).join('\n\n') }],
  });
  return output;
}

const CUT_SCHEMA = {
  type: 'object',
  properties: {
    notes: { type: 'string' },
    cutscene: { type: 'object', properties: { style: { type: 'string' }, duration: { type: 'number' }, shots: { type: 'array', items: { type: 'object' } } }, required: ['style', 'duration', 'shots'], additionalProperties: true },
  },
  required: ['notes', 'cutscene'],
  additionalProperties: false,
};

export async function runCutsceneDirector(
  model: string, turn: number, events: TimelineEvent[], state: WorldState, sceneText: string, shot: string | null,
  tier: number, breakthrough: string | null, feedback: string | null,
): Promise<{ notes: string; cutscene: Cutscene }> {
  const L = CUTSCENE_TIERS[Math.min(tier, CUTSCENE_TIERS.length - 1)];
  const of = <T extends TimelineEvent['type']>(type: T) => [...events].reverse().find((e) => e.type === type && e.turn === turn) as Extract<TimelineEvent, { type: T }> | undefined;
  const move = of('player'), gm = of('gamemaster'), narr = of('narrator') as NarratorEvent | undefined;
  const past = events.filter((e): e is CutsceneEvent => e.type === 'cutscene').slice(-4).map((c) => `[${c.turn}] ${c.cutscene.style} (${c.cutscene.duration}s, ${c.cutscene.shots.length} shots)`).join('\n');
  const parts = [
    `## Turn ${turn}`,
    move ? `Wanderer: "${move.action}"` : '',
    gm ? `Game Master: ${gm.announce} | ${gm.ruling}` : '',
    narr ? `Narrator: ${narr.narration}${narr.movement ? `\nMovement: ${narr.movement}` : ''}` : '',
    `## Your limits (cutscene tier ${tier + 1}${breakthrough ? ', BREAKTHROUGH' : ''})\nduration ≤ ${L.duration}s, shots ≤ ${L.shots}, animations ≤ ${L.animations}, props ≤ ${L.props}, env changes ≤ ${L.env}, captions ≤ ${L.captions}. Expected quality: ${L.note}.`,
    breakthrough ? `## BREAKTHROUGH granted: ${breakthrough}\nMake this one unforgettable, with a striking, distinctive style.` : '',
    `## Scene\n${sceneText}`,
    past ? `## Your recent cutscenes (vary them)\n${past}` : '',
    feedback ? `## Your previous attempt had problems\n${feedback}\nSend a corrected cutscene.` : '',
    'The picture is the final view of this turn (where the next turn begins).',
  ];
  const { output } = await callClaude<{ notes: string; cutscene: Cutscene }>({
    label: 'cutscene', model, system: PROMPTS.cutscene, schema: CUT_SCHEMA,
    content: [...imageContent(shot), { type: 'text', text: parts.filter(Boolean).join('\n\n') }],
  });
  return output;
}
