/* global React */

function Problem() {
  const points = [
    "Te cuesta mejorar ritmos aunque entrenas.",
    "Llegas sin energía a sesiones clave.",
    "No sabes cómo comer antes, durante o después de entrenar.",
    "Tienes dudas con geles, hidratación o carga de hidratos.",
    "Te lesionas o no recuperas bien.",
    "Sigues planes genéricos que no se adaptan a ti.",
  ];
  return (
    <section id="problema">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div className="eyebrow">¿Te suena?</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.2vw, 50px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: "10px 0 0",
                color: "var(--fg-strong)",
                textWrap: "balance",
              }}
            >
              No necesitas entrenar más. Necesitas entrenar y comer{" "}
              <span style={{ color: "var(--accent)" }}>mejor para tu objetivo</span>.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg)", marginTop: 20, textWrap: "pretty" }}>
              Muchos corredores entrenan con constancia, pero siguen sintiéndose
              estancados, cansados, con molestias digestivas, sin energía en las
              tiradas largas o sin saber cómo organizar sus semanas.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg)", marginTop: 14, textWrap: "pretty" }}>
              Aquí no trabajamos con planes genéricos. Trabajamos con una
              <strong style={{ color: "var(--fg-strong)" }}> estrategia adaptada
              a ti</strong>: tu nivel, tus horarios, tu objetivo, tus sensaciones,
              tu alimentación y tu evolución real.
            </p>
          </div>

          <div
            style={{
              background: "var(--paper-200)",
              borderRadius: "var(--r-xl)",
              padding: "28px 30px",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 14 }}>Señales claras</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {points.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    fontFamily: "var(--font-body)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    color: "var(--fg-strong)",
                    paddingBottom: i === points.length - 1 ? 0 : 14,
                    borderBottom: i === points.length - 1 ? 0 : "1px solid var(--divider)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: "1.5px solid var(--camel-600)",
                      color: "var(--camel-600)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: 11,
                      marginTop: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Problem });
