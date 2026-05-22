/* global React */

function Footer() {
  return (
    <footer
      style={{
        background: "var(--espresso-900)",
        color: "var(--paper-100)",
        padding: "64px 0 36px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(246, 241, 232, 0.08)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 80% 0%, color-mix(in oklab, var(--camel-500) 22%, transparent), transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <img
                src="logo-mark-transparent.png"
                alt="Aitziber"
                style={{ width: 56, height: 56 }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "var(--paper-50)",
                  letterSpacing: "-0.01em",
                }}>AITZIBER</span>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.24em",
                  color: "var(--camel-400)",
                  marginTop: 4,
                }}>RUNNING COACH</span>
              </div>
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.55,
              color: "var(--camel-200)",
              maxWidth: 360,
            }}>
              Entrenamiento + nutrición para corredores. Estrategia, no plantilla.
            </p>
          </div>

          {[
            ["Método",   ["Entrenamiento", "Nutrición", "Estrategia de carrera", "Seguimiento"]],
            ["Servicios", ["Entrenamiento + Nutrición", "Sólo entrenamiento", "Sólo nutrición", "Consultas puntuales"]],
            ["Contacto",  ["holaaitziber1@gmail.com", "@aitzibermendibil", "Online · ESP"]],
          ].map(([title, links]) => (
            <div key={title}>
              <div className="eyebrow on-dark" style={{ marginBottom: 14 }}>{title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "var(--paper-100)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--camel-300)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper-100)")}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 22,
            borderTop: "1px solid rgba(246, 241, 232, 0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--camel-300)",
          }}
        >
          <span>© 2026 Aitziber Running Coach</span>
          <span>Método aplicado · seguimiento real</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
