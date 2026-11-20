// Shared data model for the orchestrator (Node) and the viewer (browser).
// Conventions: meters, +Y up. Compass facing in degrees: 0 = north (-Z), 90 = east (+X).

export type Vec3 = [number, number, number];

/** A physical thing the Narrator has established in the world. */
export interface Fact {
  id: string;
  description: string;
  placement: string;
  since: number;
  updated: number;
}

export interface FactChange {
  op: 'add' | 'change' | 'remove';
  id: string;
  description: string;
  placement: string;
}

export type BehaviorType = 'spin' | 'bob' | 'sway' | 'pulse' | 'flicker';

export interface Behavior {
  type: BehaviorType;
  speed?: number;
  amount?: number;
}

/** One placed instance of a component in the 3D scene. */
export interface Entity {
  id: string;
  component: string;
  params: Record<string, unknown>;
  at: Vec3;
  rotation: number; // compass yaw in degrees (clockwise seen from above)
  scale: number;
  behavior: Behavior | null;
  fact: string | null;
  since: number;
  updated: number;
}

export interface ComponentDef {
  name: string;
  code: string;
  doc: string;
  since: number;
  updated: number;
}

export interface Environment {
  skyTop: string;
  skyBottom: string;
  fogColor: string;
  fogDensity: number;
  ambient: number;
  sunColor: string;
  sunIntensity: number;
  sunDirection: Vec3; // direction the light comes FROM
  particles: number; // 0..1 floating dust density
  // Realism controls (added for world-04; older runs fall back to the defaults).
  exposure: number; // tone-mapping exposure, ~0.5-2
  bloom: number; // 0 = off, ~0.2-1.5 glow on bright things
  envLight: number; // 0..2 image-based ambient/reflection light
  skyMode: 'gradient' | 'physical'; // physical = atmospheric scattering sky driven by sunDirection
}

export interface Avatar {
  at: Vec3;
  facing: number;
}

export interface WorldState {
  turn: number;
  components: Record<string, ComponentDef>;
  entities: Record<string, Entity>;
  facts: Record<string, Fact>;
  env: Environment;
  avatar: Avatar;
}

export type Op =
  | { op: 'defineComponent'; name: string; code: string; doc?: string }
  | {
      op: 'add';
      id: string;
      component: string;
      params?: Record<string, unknown>;
      at?: Vec3;
      rotation?: number;
      scale?: number;
      behavior?: Behavior | null;
      fact?: string | null;
    }
  | {
      op: 'update';
      id: string;
      component?: string;
      params?: Record<string, unknown>;
      at?: Vec3;
      rotation?: number;
      scale?: number;
      behavior?: Behavior | null;
      fact?: string | null;
    }
  | { op: 'remove'; id: string }
  | ({ op: 'environment' } & Partial<Environment>)
  | { op: 'moveAvatar'; to: Vec3; facing?: number };

export interface PlayerEvent {
  turn: number;
  type: 'player';
  thought: string;
  action: string;
  /** True when a person typed this move (human Wanderer mode). */
  human?: boolean;
  ts: string;
}

export interface NarratorEvent {
  turn: number;
  type: 'narrator';
  narration: string;
  movement: string;
  facts: FactChange[];
  human?: boolean; // a person played the Narrator this turn
  ts: string;
}

export interface BuilderEvent {
  turn: number;
  type: 'builder';
  /** 'build' realizes the Narrator's facts; 'polish' applies the Designer's suggestions. Absent = build. */
  stage?: 'build' | 'polish';
  notes: string;
  ops: Op[];
  rejected: { op: unknown; error: string }[];
  attempts: number;
  ts: string;
}

export interface RenderEvent {
  turn: number;
  type: 'render';
  /** False for the intermediate render before a polish pass. Absent = final. */
  final?: boolean;
  shot: string | null;
  triangles: number;
  /** Ladder runs: total budgeted bytes (engine + world) at this render. */
  bytes?: number;
  errors: string[];
  ts: string;
}

export interface DesignSuggestion {
  target: string; // entity id, component name, 'environment' or 'new decor'
  change: string;
}

export interface DesignerEvent {
  turn: number;
  type: 'designer';
  critique: string;
  suggestions: DesignSuggestion[];
  styleGuide: string;
  overview: string | null; // overview screenshot the Designer looked at
  /** Ladder runs: the Designer may ask for the next budget tier or a new engine. */
  requestUnlock?: boolean;
  unlockReason?: string;
  engineRequest?: string;
  human?: boolean; // a person played the Designer this turn
  ts: string;
}

/** Roles a person can play: always the Wanderer, and rarely (as an unlock) another agent. */
export type HumanRole = 'wanderer' | 'narrator' | 'designer' | 'gamemaster';

export interface Roll {
  dice: number[]; // the seeded dice actually rolled
  modifier: number;
  total: number;
  band: 'hit' | 'partial' | 'miss';
  visible: boolean; // shown to the audience?
  presentation: string; // how it is shown: "dice", "a tossed coin", "the tarot", "an omen in the stars", …
  reason: string; // what was at stake
}

/** The Game Master's ruling on a move, plus game-state changes. */
export interface GameMasterEvent {
  turn: number;
  type: 'gamemaster';
  ruling: string; // for the Narrator: what happened mechanically
  announce: string; // one line for the audience
  roll: Roll | null;
  ops: import('./game').GameOp[];
  rejected: { op: unknown; error: string }[];
  pacing: 'build' | 'peak' | 'relax';
  grantRole?: { role: HumanRole; forTurn: number; reason: string } | null;
  breakthrough?: string | null; // nomination for this turn's cutscene
  human?: boolean; // a person played the Game Master this turn
  ts: string;
}

/** A short film linking this turn to the next. */
export interface CutsceneEvent {
  turn: number;
  type: 'cutscene';
  cutscene: import('./cutscene').Cutscene;
  tier: number; // effective cutscene tier (breakthroughs go higher)
  breakthrough: string | null;
  notes: string;
  stills: string[];
  problems: string[];
  ts: string;
}

/** A periodic whole-run review with direction for each agent. */
export interface ReviewerEvent {
  turn: number;
  type: 'reviewer';
  assessment: string;
  narrative: string;
  visual: string;
  builder: string;
  wanderer: string;
  experience: string;
  breakthrough?: string; // optional nomination for the next cutscene
  ts: string;
}

/** Ladder runs: the world's size budget moved to a new tier. */
export interface BudgetEvent {
  turn: number;
  type: 'budget';
  tier: number;
  limit: number; // bytes
  reason: string;
  ts: string;
}

/** Ladder runs: an Engineer session that tried to build a new engine version. */
export interface EngineerEvent {
  turn: number;
  type: 'engineer';
  request: string;
  notes: string;
  ok: boolean;
  version: string | null;
  problems: string[];
  minutes: number;
  ts: string;
}

/** Ladder runs: from here on the world renders with this engine version. */
export interface EngineEvent {
  turn: number;
  type: 'engine';
  version: string;
  from: string | null;
  notes: string;
  bytes: number;
  ts: string;
}

export interface SystemEvent {
  turn: number;
  type: 'system';
  message: string;
  ts: string;
}

export type TimelineEvent =
  | PlayerEvent | NarratorEvent | BuilderEvent | RenderEvent | DesignerEvent | SystemEvent
  | BudgetEvent | EngineerEvent | EngineEvent | ReviewerEvent | GameMasterEvent | CutsceneEvent;

export interface RunInfo {
  id: string;
  created: string;
  premise: string;
  model: string;
  maxTurns: number;
  /** Designer + polish pass every N turns (0 = no designer). Absent = 0. */
  designEvery?: number;
  /** 'ladder' runs use swappable engines and a growing budget; absent = legacy three.js runtime. */
  mode?: 'ladder' | 'tiered';
  engine?: string;
  tier?: number;
  status: 'running' | 'complete' | 'failed' | 'stopped';
  turnsCompleted: number;
  calls: number;
  note?: string;
  /** Human Wanderer mode: a person types the Wanderer's moves. */
  human?: boolean;
  /** Set while the run is waiting for the person's move. */
  awaiting?: { turn: number; since: string; role?: HumanRole; prompt?: string } | null;
  /** Game Master runs: a GM rules each move, and a cutscene follows each turn. */
  gameMaster?: boolean;
}
