/* global React, BrandIcon */

/**
 * Stats — sección de resultados reales. Más editorial que el strip pequeño
 * original: tarjeta oscura full-width con PBs y datos concretos.
 */
function Stats() {
  const headline = [
    { n: "+200", l: "corredores acompañados", sub: "de 10K a maratón y trail" },
    { n: "−8'", l: "marca media en maratón", sub: "tras un bloque completo", featured: true },
    { n: "94%", l: "completa su objetivo", sub: "10K, media o maratón" },
    { n: "24h", l: "respuesta directa", sub: "yo, no un asistente" },
  ];

  const prs = [
    { dist: "10K",     before: "52:14", after: "46:38", who: "Marta · 34a",  delta: "−5:36" },
    { dist: "21K",     before: "1:48:20", after: "1:39:05", who: "David · 41a", delta: "−9:15" },
    { dist: "42K",     before: "3:23:11", after: "3:15:02", who: "Carlos · 42a", delta: "−8:09" },
    { dist: "Trail 30K", before: "DNF",    after: "3:48",    who: "Iñigo · 38a",  delta: "finish" },
  ];

  return (
    <section id="resultados" style={{ background: "var(--paper-100)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 32,
          alignItems: "end",
          marginBottom: 40,
        }}>
          <div>
            <div className="eyebrow">Resultados reales</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(34px, 4.6vw, 56px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.02,
                margin: "10px 0 0",
                color: "var(--fg-strong)",
                textWrap: "balance",
              }}
            >
              Marcas reales, corredores reales.
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--fg)",
            margin: 0,
            maxWidth: 520,
            textWrap: "pretty",
            justifySelf: "end",
          }}>
            Esto no son testimonios bonitos sin contexto. Son corredores que
            empezaron en un sitio y acabaron en otro — con datos.
          </p>
        </div>

        {/* TOP STATS — 4 columnas en tarjeta oscura */}
        <div
          style={{
            background: "var(--espresso-800)",
            color: "var(--paper-50)",
            borderRadius: "var(--r-xl)",
            padding: "36px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            background:
              "radial-gradient(ellipse 50% 80% at 100% 50%, color-mix(in oklab, var(--camel-500) 24%, transparent), transparent 70%)",
            pointerEvents: "none",
          }} />
          {headline.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                borderLeft: i === 0 ? "none" : "1px solid rgba(246, 241, 232, 0.12)",
                paddingLeft: i === 0 ? 0 : 24,
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(38px, 4.4vw, 64px)",
                  letterSpacing: "-0.03em",
                  color: s.featured ? "var(--camel-400)" : "var(--paper-50)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </span>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14,
                color: "var(--paper-100)",
                marginTop: 6,
                letterSpacing: "-0.01em",
              }}>
                {s.l}
              </span>
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: 12.5,
                color: "var(--camel-300)",
              }}>
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* PR TABLE — kilometradas + tiempos */}
        <div style={{
          marginTop: 24,
          background: "var(--bg-card)",
          borderRadius: "var(--r-xl)",
          boxShadow: "var(--shadow-sm)",
          padding: "8px 8px",
          overflow: "hidden",
        }}>
          <div className="pr-header" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr 1.1fr 1fr 0.8fr",
            gap: 0,
            padding: "16px 24px 12px",
            borderBottom: "1px solid var(--divider)",
          }}>
            {["Distancia", "Antes", "Después", "Corredor/a", "Mejora"].map((h, i) => (
              <span key={h} style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--camel-600)",
                textAlign: i >= 1 && i <= 2 || i === 4 ? "left" : "left",
              }}>{h}</span>
            ))}
          </div>
          {prs.map((row, k) => (
            <div
              key={k}
              className="pr-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.1fr 1.1fr 1fr 0.8fr",
                gap: 0,
                padding: "18px 24px",
                alignItems: "center",
                borderBottom: k === prs.length - 1 ? "none" : "1px solid var(--divider)",
              }}
            >
              <span className="pr-dist" style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: "-0.015em",
                color: "var(--fg-strong)",
              }}>{row.dist}</span>

              <span className="pr-before" style={{
                fontFamily: "var(--font-mono)",
                fontVariantNumeric: "tabular-nums",
                fontWeight: 600,
                fontSize: 18,
                color: "var(--fg-muted)",
                textDecoration: "line-through",
                textDecorationColor: "var(--paper-300)",
              }}>{row.before}</span>

              <span className="pr-after" style={{
                fontFamily: "var(--font-mono)",
                fontVariantNumeric: "tabular-nums",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: "-0.02em",
                color: "var(--fg-strong)",
              }}>{row.after}</span>

              <span className="pr-who" style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--fg)",
              }}>{row.who}</span>

              <span className="pr-delta" style={{
                fontFamily: "var(--font-mono)",
                fontVariantNumeric: "tabular-nums",
                fontWeight: 700,
                fontSize: 14,
                color: "var(--moss-700)",
                background: "color-mix(in oklab, var(--moss-300) 50%, transparent)",
                padding: "6px 12px",
                borderRadius: 999,
                justifySelf: "start",
                letterSpacing: "-0.01em",
              }}>
                {row.delta}
              </span>
            </div>
          ))}
          <div style={{
            padding: "14px 24px",
            background: "var(--paper-100)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid var(--divider)",
            marginTop: 4,
          }}>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: 12.5,
              color: "var(--fg-muted)",
              fontStyle: "italic",
            }}>
              Muestra de PBs reales — anonimizados con permiso de los corredores.
            </span>
            <a href="#testimonios" style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--espresso-800)",
              textDecoration: "none",
            }}>
              Ver sus historias →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Stats });
