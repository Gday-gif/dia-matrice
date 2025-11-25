// ---------------------------------------------------------------------------
// DIA · SPINOR ENGINE
// Moteur fractal minimal — version MINOS
// ---------------------------------------------------------------------------

export interface AgentState {
  id: string;
  value: number;
  delta?: number;
}

export interface SpinorField {
  coherence: number;
  energy: number;
  entropy: number;
  timestamp: number;
}

export function normalize(value: number, min = 0, max = 100): number {
  return (value - min) / (max - min);
}

export function computeAgentScore(agent: AgentState): number {
  const base = normalize(agent.value);
  const variation = agent.delta ?? 0;
  return Math.min(1, Math.max(0, base + variation * 0.1));
}

export function computeSystemCoherence(agents: AgentState[]): number {
  if (agents.length === 0) return 0;
  const scores = agents.map(computeAgentScore);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
  const variance =
    scores.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / scores.length;

  return Math.min(1, Math.max(0, 1 - Math.sqrt(variance)));
}

export function updateSpinorField(agents: AgentState[]): SpinorField {
  const coherence = computeSystemCoherence(agents);
  return {
    coherence,
    energy: coherence * 0.85 + Math.random() * 0.15,
    entropy: 1 - coherence,
    timestamp: Date.now(),
  };
}
