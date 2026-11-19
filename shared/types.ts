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
  ts: string;
}

export interface NarratorEvent {
  turn: number;
  type: 'narrator';
  narration: string;
  movement: string;
  facts: FactChange[];
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
  ts: string;
}

export interface SystemEvent {
  turn: number;
  type: 'system';
  message: string;
  ts: string;
}

export type TimelineEvent = PlayerEvent | NarratorEvent | BuilderEvent | RenderEvent | DesignerEvent | SystemEvent;

export interface RunInfo {
  id: string;
  created: string;
  premise: string;
  model: string;
  maxTurns: number;
  /** Designer + polish pass every N turns (0 = no designer). Absent = 0. */
  designEvery?: number;
  status: 'running' | 'complete' | 'failed' | 'stopped';
  turnsCompleted: number;
  calls: number;
  note?: string;
}
