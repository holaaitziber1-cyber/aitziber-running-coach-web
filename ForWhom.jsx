/* global React */

const YES = [
  "Corres y quieres mejorar tu rendimiento.",
  "Estás preparando un 10K, media maratón, maratón o trail.",
  "Quieres entrenar con estructura y no improvisar.",
  "No sabes cómo adaptar tu alimentación a tus entrenamientos.",
  "Te cuesta recuperar o llegas sin energía.",
  "Tienes molestias digestivas entrenando o compitiendo.",
  "Quieres aprender a usar geles, sales e hidratación de forma individualizada.",
  "Quieres un acompañamiento cercano, pero profesional.",
];

const NO = [
  "Una dieta rápida para perder peso sin importar el rendimiento.",
  "Un plan genérico copiado y pegado.",
  "Entrenar más sin mirar descanso, nutrición ni recuperación.",
  "Resultados sin implicarte en el proceso.",
  "Soluciones extremas o restrictivas.",
];

function CheckIcon({ kind }) {
  // kind = "yes" | "no"
  const stroke = kind === "yes" ? "var(--moss-700)" : "var(--clay-700)";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
      {kind === "yes" ? (
        <g fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.7 2.7L16.5 9.5" />
        </g>
      ) : (
        <g fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 8.5l7 7" />
          <path d="M15.5 8.5l-7 7" />
        </g>
      )}
    </svg>
  );
}

function ForWhom() {
  return (
    <section id="paraquien">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* YES */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--paper-300)",
              borderRadius: "var(--r-xl)",
              padding: "32px 30px 28px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--moss-700)" }}>Encaja contigo</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 32,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: "10px 0 22px",
                color: "var(--fg-strong)",
                textWrap: "balance",
              }}
            >
              Esto es para ti si…
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {YES.map((p, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontFamily: "var(--font-body)",
                  fontSize: 15.5,
                  lineHeight: 1.5,
                  color: "var(--fg)",
                }}>
                  <CheckIcon kind="yes" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO */}
          <div
            style={{
              background: "var(--paper-200)",
              borderRadius: "var(--r-xl)",
              padding: "32px 30px 28px",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--clay-700)" }}>No encaja contigo</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 32,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: "10px 0 22px",
                color: "var(--fg-strong)",
                textWrap: "balance",
              }}
            >
              Esto no es para ti si buscas…
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {NO.map((p, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontFamily: "var(--font-body)",
                  fontSize: 15.5,
                  lineHeight: 1.5,
                  color: "var(--fg)",
                }}>
                  <CheckIcon kind="no" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p style={{
              marginTop: 20,
              paddingTop: 18,
              borderTop: "1px solid var(--divider)",
              fontFamily: "var(--font-body)",
              fontSize: 13.5,
              lineHeight: 1.55,
              color: "var(--fg-muted)",
              fontStyle: "italic",
            }}>
              Si estás en esta columna, mejor que no trabajemos juntos. Y eso
              también es honesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ForWhom });
