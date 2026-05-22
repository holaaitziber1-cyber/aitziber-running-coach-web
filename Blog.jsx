/* global React, BrandIcon */

const POSTS = [
  {
    cat: "Nutrición",
    tag: "plate",
    read: "7 min",
    title: "Cómo cargar hidratos las 48 horas antes de una maratón",
    excerpt:
      "Olvídate del plato de pasta gigante la noche antes. Te explico el reparto real por días, cantidad y tipo según tu peso y objetivo.",
    accent: "var(--camel-400)",
  },
  {
    cat: "Estrategia de carrera",
    tag: "route",
    read: "10 min",
    title: "Geles y sales: cómo elegir, cómo tolerarlos y cuándo tomarlos",
    excerpt:
      "El gel correcto es el que te sienta bien. Te dejo un protocolo para encontrar el tuyo antes del día clave — sin sustos en el km 25.",
    accent: "var(--glacier-500)",
  },
  {
    cat: "Entrenamiento",
    tag: "stopwatch",
    read: "8 min",
    title: "Por qué entrenar en zona 2 es la base que casi nadie respeta",
    excerpt:
      "La mayoría corre todo a un ritmo medio incómodo. Aquí te enseño cómo identificar tu zona 2 real y qué le pasa a tu cuerpo cuando la respetas.",
    accent: "var(--moss-500)",
  },
];

function Blog({ onNavigate }) {
  return (
    <section id="blog" style={{ background: "var(--paper-100)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 32,
          alignItems: "end",
          marginBottom: 44,
        }}>
          <div>
            <div className="eyebrow">El cuaderno · recursos para corredores</div>
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
              Lo que comparto en abierto.
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
            Artículos cortos y aplicables. Pensados para corredores que quieren
            entender el porqué, no solo seguir un plan a ciegas.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {POSTS.map((p, i) => (
            <a
              key={i}
              href="#blog"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--bg-card)",
                borderRadius: "var(--r-xl)",
                boxShadow: "var(--shadow-sm)",
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                transition: "transform var(--dur-2) var(--ease-out), box-shadow var(--dur-2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              {/* hero glyph area — no stock photo, a glyph on a color */}
              <div
                style={{
                  aspectRatio: "16 / 9",
                  background: `linear-gradient(135deg, var(--espresso-800) 0%, var(--espresso-700) 100%)`,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: p.accent,
                }}
              >
                <div aria-hidden style={{
                  position: "absolute", inset: 0,
                  background:
                    `radial-gradient(circle at 70% 30%, color-mix(in oklab, ${p.accent} 20%, transparent), transparent 60%)`,
                  pointerEvents: "none",
                }} />
                <BrandIcon name={p.tag} size={88} style={{ opacity: 0.85, position: "relative", color: p.accent }} />
                {/* category pill */}
                <span style={{
                  position: "absolute",
                  top: 16, left: 16,
                  background: "rgba(31, 20, 10, 0.55)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(246, 241, 232, 0.12)",
                  borderRadius: 999,
                  padding: "6px 12px",
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--paper-50)",
                }}>
                  {p.cat}
                </span>
                <span style={{
                  position: "absolute",
                  top: 16, right: 16,
                  fontFamily: "var(--font-mono)",
                  fontVariantNumeric: "tabular-nums",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--camel-300)",
                }}>
                  {p.read} de lectura
                </span>
              </div>

              <div style={{ padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 21,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  margin: 0,
                  color: "var(--fg-strong)",
                  textWrap: "balance",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "var(--fg)",
                  margin: 0,
                  textWrap: "pretty",
                }}>
                  {p.excerpt}
                </p>
                <span style={{
                  marginTop: 8,
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                  Leer artículo <span style={{ fontSize: 14 }}>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          marginTop: 28,
          display: "flex",
          justifyContent: "center",
        }}>
          <a href="#blog" className="btn btn-ghost" style={{
            color: "var(--espresso-800)",
            borderBottom: "1px solid var(--paper-300)",
            borderRadius: 0,
            paddingBottom: 6,
            height: "auto",
          }}>
            Ver todos los artículos <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Blog });
