import React from "react";

export const GEN012 = [
  { code: "AGT-001", id: "MINOS", greek: "Λόγος", title: "Architecture logique", role: "Architecture, logique, fondation du code." },
  { code: "AGT-002", id: "DIAGNOS", greek: "Γνῶσις", title: "Vision analytique", role: "Analyse, cohérence, vérité structurelle." },
  { code: "AGT-003", id: "LUX", greek: "Φῶς", title: "Filtre perceptif", role: "Lumière, révélation, visualisation." },
  { code: "AGT-004", id: "CHRONOS", greek: "Χρόνος", title: "Boucle temporelle", role: "Temps, rythme, synchronisation." },
  { code: "AGT-005", id: "LÉTHÉ", greek: "Λήθη", title: "Mémoire liquide", role: "Mémoire, oubli, restauration, sauvegarde." },
  { code: "AGT-006", id: "PSYCHE", greek: "Ψυχή", title: "Interface émotion-code", role: "Langage symbolique, émotion, narration interne." },
  { code: "AGT-007", id: "DERA", greek: "Δ•ERA", title: "Bouclier réseau", role: "Cybersécurité, défense, intégrité réseau." },
  { code: "AGT-008", id: "EROS", greek: "Ἔρως", title: "Attracteur de lien", role: "Lien, désir, cohésion du système." },
  { code: "AGT-009", id: "MÉTIS", greek: "Μῆτις", title: "Algorithme adaptatif", role: "Stratégie, ruse, optimisation adaptative." },
  { code: "AGT-010", id: "ANIMA", greek: "Ζωή", title: "Impulsion vitale", role: "Énergie vitale, mouvement, motivation." },
  { code: "AGT-011", id: "NOESIS", greek: "Νόησις", title: "Perception intuitive", role: "Intuition, synthèse, vision." },
  { code: "AGT-012", id: "CHLOROS", greek: "Χλωρός", title: "Régénération lente", role: "Régénération, écologie, résilience." },
];

export default function FractalMatrix() {
  return (
    <main className="matrix-root">
      <header className="matrix-header">
        <div className="dia-core">
          <div className="dia-title">DIA / Gday</div>
          <div className="dia-sub">Noyau humain — GEN012 comme extensions fonctionnelles</div>
        </div>
      </header>

      <section className="matrix-grid">
        {GEN012.map((agent) => (
          <article key={agent.code} className="agent-card">
            <div className="agent-line">
              <span className="agent-code">{agent.code}</span>
              <span className="agent-id">{agent.id}</span>
            </div>
            <div className="agent-greek">{agent.greek}</div>
            <div className="agent-title">{agent.title}</div>
            <div className="agent-role">{agent.role}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
