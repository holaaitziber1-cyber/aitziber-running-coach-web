/* global React */

/**
 * Authority — la "mini autoridad" strip que la clienta pide debajo del hero.
 * Una sola línea con el número y la especialización. No es un grid de stats.
 */
function Authority() {
  return (
    <section style={{ padding: "0", marginTop: -28, position: "relative", zIndex: 2 }}>
      <div className="container">
        <div
          style={{
            background: "var(--paper-50)",
            borderRadius: "var(--r-pill)",
            boxShadow: "var(--shadow-md)",
            padding: "16px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BrandIcon name="shoe" size={22} style={{ color: "var(--accent)" }} />
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 16,
              color: "var(--fg-strong)",
              letterSpacing: "-0.01em",
            }}>
              +200 corredores acompañados
            </span>
          </div>
          <span style={{
            width: 1, height: 22,
            background: "var(--paper-300)",
            display: "inline-block",
          }} />
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: 14.5,
            color: "var(--fg-muted)",
            lineHeight: 1.4,
          }}>
            Especialista en running, nutrición deportiva y rendimiento de resistencia
          </span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Authority });
