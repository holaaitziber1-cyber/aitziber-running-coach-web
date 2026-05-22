/* global React, BrandIcon */

function Hero({ showScriptNote = true }) {
  // Animated pace ticker — feels alive without being noisy
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1100);
    return () => clearInterval(id);
  }, []);
  const paces = ["4:15", "4:08", "3:58", "4:02", "3:55", "4:11"];
  const pace = paces[tick % paces.length];

  return (
    <section
      id="top"
      style={{
        position: "relative",
        background: "var(--espresso-900)",
        color: "var(--paper-50)",
        paddingTop: 72,
        paddingBottom: 88,
        overflow: "hidden",
      }}
    >
      {/* warm light radial */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse 55% 50% at 78% 25%, color-mix(in oklab, var(--camel-500) 32%, transparent), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* topographic contour pattern — very subtle */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, opacity: 0.06,
          background:
            "repeating-radial-gradient(circle at 12% 88%, transparent 0 38px, rgba(246,241,232,0.6) 38px 39px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* TOP ROW — eyebrow + meta strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 44,
            flexWrap: "wrap",
          }}
        >
          <div className="eyebrow on-dark" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--glacier-500)",
              boxShadow: "0 0 0 4px color-mix(in oklab, var(--glacier-500) 25%, transparent)",
            }} />
            Entrenamiento + nutrición · para corredores
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 18,
            fontFamily: "var(--font-mono)",
            fontVariantNumeric: "tabular-nums",
            fontSize: 12, fontWeight: 600,
            color: "var(--camel-300)",
            letterSpacing: "0.04em",
          }}>
            <span>10K · 21K · 42K · TRAIL</span>
            <span style={{ opacity: 0.4 }}>—</span>
            <span>+200 CORREDORES</span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* LEFT — headline */}
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(46px, 6.4vw, 92px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                margin: 0,
                color: "var(--paper-50)",
                textWrap: "balance",
              }}
            >
              Corre <span style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: "0.78em", color: "var(--camel-400)", letterSpacing: 0 }}>más rápido</span>{" "}
              entrenando y comiendo con <span style={{
                position: "relative",
                color: "var(--camel-400)",
                whiteSpace: "nowrap",
              }}>
                estrategia
                <span aria-hidden style={{
                  position: "absolute",
                  left: 0, right: 0, bottom: "-0.06em",
                  height: "0.08em",
                  background: "var(--glacier-500)",
                  borderRadius: 999,
                  opacity: 0.7,
                }} />
              </span>.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 19,
                lineHeight: 1.55,
                color: "var(--camel-200)",
                maxWidth: 560,
                marginTop: 26,
                textWrap: "pretty",
              }}
            >
              Soy <strong style={{ color: "var(--paper-50)", fontWeight: 600 }}>Aitziber</strong> —
              entrenadora de running, dietista deportiva y corredora.
              Preparo a corredores de 10K, media, maratón y trail para que rindan
              con un método real: entrenamiento, nutrición, recuperación, salud
              digestiva y estrategia de carrera. <span style={{ color: "var(--paper-50)" }}>Plan personal, nunca plantilla.</span>
            </p>

            {/* DIFFERENTIATOR PILLS */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "30px 0 0",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {[
                ["shoe",      "Runner, no nutri genérica"],
                ["route",     "10K → maratón → trail"],
                ["plate",     "Entreno + nutrición"],
                ["gut",       "Salud digestiva"],
                ["chart",     "Estrategia de carrera"],
              ].map(([icon, label]) => (
                <li key={label} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(246, 241, 232, 0.18)",
                  background: "rgba(246, 241, 232, 0.04)",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--paper-100)",
                  letterSpacing: "-0.005em",
                }}>
                  <BrandIcon name={icon} size={16} style={{ color: "var(--camel-300)" }} />
                  {label}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 12, marginTop: 36, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contacto" className="btn btn-cool">
                Quiero empezar <span style={{ fontSize: 18 }}>→</span>
              </a>
              <a href="#planes" className="btn btn-on-dark">Ver servicios</a>
              <span style={{
                marginLeft: 6,
                fontFamily: "var(--font-script)",
                fontSize: 22,
                color: "var(--camel-300)",
                opacity: 0.9,
              }}>
                — Aitzi
              </span>
            </div>
          </div>

          {/* RIGHT — photo stack */}
          <div style={{ position: "relative" }}>
            {/* main photo */}
            <div
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "var(--r-xl)",
                boxShadow: "var(--shadow-lg)",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "var(--espresso-700)",
              }}
            >
              <img
                src="assets/photos/race-urban-white.jpg"
                alt="Aitziber corriendo el maratón de Zúrich"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 28%",
                  display: "block",
                }}
              />
              {/* warm protection gradient */}
              <div
                aria-hidden
                style={{
                  position: "absolute", inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(31, 20, 10, 0.55) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* TOP chip — live pace */}
              <div
                style={{
                  position: "absolute",
                  top: 16, left: 16,
                  background: "rgba(31, 20, 10, 0.55)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 14,
                  padding: "10px 14px",
                  color: "var(--paper-50)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  border: "1px solid rgba(246, 241, 232, 0.08)",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--camel-300)",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--glacier-500)",
                    animation: "ari-pulse 1.6s ease-in-out infinite",
                  }} />
                  Ritmo objetivo
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 700,
                    fontSize: 26,
                    letterSpacing: "-0.02em",
                    color: "var(--paper-50)",
                  }}>{pace}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--camel-200)" }}>/ km</span>
                </div>
              </div>

              {/* BOTTOM chip — session summary */}
              <div
                className="hero-meta-3"
                style={{
                  position: "absolute",
                  left: 16, bottom: 16, right: 16,
                  background: "rgba(31, 20, 10, 0.55)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 14,
                  padding: "12px 14px",
                  color: "var(--paper-50)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                  border: "1px solid rgba(246, 241, 232, 0.08)",
                }}
              >
                {[
                  ["Long-run", "18 km", "z2"],
                  ["Fartlek", "6×3'", "z4"],
                  ["Fuerza",  "45'", "core"],
                ].map(([k, v, sub]) => (
                  <div key={k} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--camel-300)",
                    }}>{k}</span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: "-0.01em",
                      color: "var(--paper-50)",
                    }}>{v}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--camel-200)" }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SMALL OVERLAPPING PHOTO — trail */}
            <div
              className="hero-overlap-photo"
              style={{
                position: "absolute",
                left: -52,
                bottom: -28,
                width: 152,
                height: 192,
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "4px solid var(--espresso-900)",
                transform: "rotate(-3deg)",
                display: "block",
              }}
            >
              <img
                src="assets/photos/trail-uphill.jpg"
                alt="Aitziber subiendo trail de montaña"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  display: "block",
                }}
              />
            </div>

            {/* SCRIPT NOTE — handwritten */}
            {showScriptNote && <div className="hero-script-note" style={{
              position: "absolute",
              top: -28, right: -8,
              fontFamily: "var(--font-script)",
              fontSize: 28,
              color: "var(--camel-300)",
              transform: "rotate(-6deg)",
              lineHeight: 1,
              pointerEvents: "none",
            }}>
              cada zancada cuenta
            </div>}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ari-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero });
