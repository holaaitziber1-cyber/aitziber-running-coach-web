/* global React */

const PROGRAMAS = [
  {
    id: "integrado",
    n: "01",
    name: "Entrenamiento + Nutrición",
    intro:
      "Para corredores que quieren mejorar su rendimiento trabajando de forma integrada: entrenamiento, alimentación, recuperación, energía, digestiones y estrategia de competición.",
    cta: "Quiero más información",
    badge: "Programa más completo",
    featured: true,
  },
  {
    id: "entreno",
    n: "02",
    name: "Entrenamiento personalizado",
    intro:
      "Para corredores que quieren dejar de improvisar y entrenar con una planificación adaptada a su objetivo, nivel, disponibilidad y evolución.",
    cta: "Quiero mi plan de entrenamiento",
    badge: null,
    featured: false,
  },
  {
    id: "nutri",
    n: "03",
    name: "Nutrición deportiva",
    intro:
      "Para corredores que quieren mejorar energía, recuperación, digestiones, composición corporal o estrategia de competición.",
    cta: "Quiero más información",
    badge: null,
    featured: false,
  },
];

const PUNTUALES = [
  {
    icon: "plate",
    name: "Consulta de nutrición deportiva",
    desc:
      "Para resolver dudas concretas sobre alimentación, energía, digestiones, organización de comidas, suplementación o cómo comer alrededor de los entrenamientos.",
    price: "70 €",
    priceLabel: "consulta",
    cta: "Reservar consulta",
  },
  {
    icon: "route",
    name: "Estrategia nutricional de carrera",
    desc:
      "Para llegar a tu competición con un plan claro de alimentación, hidratación, geles, sales y timing según distancia, objetivo y tolerancia digestiva.",
    price: "desde 45 €",
    priceLabel: "carrera",
    cta: "Preparar mi carrera",
  },
  {
    icon: "chart",
    name: "Revisión de entrenamiento",
    desc:
      "Para analizar tu planificación actual, detectar errores y saber qué cambios necesitas hacer para mejorar sin entrenar a ciegas.",
    price: "75 €",
    priceLabel: "revisión",
    cta: "Revisar mi entrenamiento",
  },
];

function PlanCards() {
  return (
    <section id="planes" style={{ background: "var(--paper-200)" }}>
      <div className="container">
        {/* Section header */}
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <div className="eyebrow">Servicios · cómo trabajamos juntos</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(34px, 4.6vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "10px 0 0",
              color: "var(--fg-strong)",
              textWrap: "balance",
            }}
          >
            Elige cómo quieres empezar a trabajar conmigo.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg)", marginTop: 18, maxWidth: 660, textWrap: "pretty" }}>
            Puedes trabajar conmigo a través de programas completos de
            seguimiento o mediante servicios puntuales si necesitas resolver
            algo concreto.
          </p>
        </div>

        {/* PROGRAMAS PRINCIPALES */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 22,
            flexWrap: "wrap",
          }}
        >
          <div className="eyebrow">Programas principales</div>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--fg-muted)",
            fontStyle: "italic",
          }}>
            Seguimiento personalizado · valoramos tu caso antes de empezar
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
            marginBottom: 72,
          }}
        >
          {PROGRAMAS.map((p) => {
            const isDark = p.featured;
            return (
              <article
                key={p.id}
                style={{
                  background: isDark ? "var(--espresso-800)" : "var(--bg-card)",
                  color: isDark ? "var(--paper-50)" : "var(--fg)",
                  borderRadius: "var(--r-xl)",
                  padding: "32px 30px 28px",
                  boxShadow: isDark ? "var(--shadow-lg)" : "var(--shadow-sm)",
                  transform: isDark ? "translateY(-8px)" : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* watermark inside featured card */}
                {isDark && (
                  <img
                    src="assets/logo-mark-transparent.png"
                    alt=""
                    aria-hidden
                    style={{
                      position: "absolute",
                      right: -60,
                      bottom: -60,
                      width: 240,
                      height: 240,
                      opacity: 0.07,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {p.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: 24,
                      right: 24,
                      background: "var(--glacier-500)",
                      color: "var(--espresso-900)",
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "6px 12px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.badge}
                  </span>
                )}

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    color: isDark ? "var(--camel-400)" : "var(--camel-600)",
                    position: "relative",
                  }}
                >
                  {p.n}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 26,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.1,
                    margin: 0,
                    color: isDark ? "var(--paper-50)" : "var(--fg-strong)",
                    textWrap: "balance",
                    position: "relative",
                  }}
                >
                  {p.name}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: isDark ? "var(--camel-200)" : "var(--fg)",
                    margin: 0,
                    position: "relative",
                  }}
                >
                  {p.intro}
                </p>

                {/* Formats — replaces price */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 18,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: isDark ? "rgba(246, 241, 232, 0.10)" : "var(--paper-200)",
                      color: isDark ? "var(--camel-100)" : "var(--fg-strong)",
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      marginBottom: 18,
                    }}
                  >
                    <BrandIcon name="calendar" size={16} />
                    Trimestral · semestral
                  </div>

                  <a
                    href="#contacto"
                    className={isDark ? "btn btn-cool" : "btn btn-primary"}
                    style={{ width: "100%" }}
                  >
                    {p.cta}
                    <span style={{ fontSize: 18 }}>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* SERVICIOS PUNTUALES */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 22,
            flexWrap: "wrap",
          }}
        >
          <div className="eyebrow">Servicios puntuales</div>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--fg-muted)",
            fontStyle: "italic",
          }}>
            Reservas sueltas · sin compromiso de programa
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {PUNTUALES.map((s) => (
            <article
              key={s.name}
              style={{
                background: "var(--paper-50)",
                border: "1px solid var(--paper-300)",
                borderRadius: "var(--r-lg)",
                padding: "24px 22px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: "var(--paper-200)",
                    color: "var(--espresso-800)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BrandIcon name={s.icon} size={22} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginLeft: "auto" }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: "-0.015em",
                    color: "var(--fg-strong)",
                    lineHeight: 1,
                  }}>{s.price}</span>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    color: "var(--fg-muted)",
                    marginTop: 4,
                  }}>{s.priceLabel}</span>
                </div>
              </div>
              <h4 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.01em",
                margin: 0,
                color: "var(--fg-strong)",
                textWrap: "balance",
              }}>{s.name}</h4>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--fg)",
                margin: 0,
              }}>{s.desc}</p>
              <a
                href="#contacto"
                className="btn btn-ghost"
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  height: 36,
                  padding: "0 0",
                  fontSize: 14,
                  color: "var(--accent)",
                }}
              >
                {s.cta} <span style={{ fontSize: 16 }}>→</span>
              </a>
            </article>
          ))}
        </div>

        {/* CIERRE */}
        <div
          style={{
            background: "var(--bg-card)",
            borderRadius: "var(--r-xl)",
            padding: "36px 40px",
            boxShadow: "var(--shadow-sm)",
            display: "grid",
            gridTemplateColumns: "1.4fr auto",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
              margin: 0,
              color: "var(--fg-strong)",
              textWrap: "balance",
            }}>
              ¿No sabes qué opción encaja mejor contigo?
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "var(--fg)",
              margin: "10px 0 0",
              maxWidth: 620,
              textWrap: "pretty",
            }}>
              Escríbeme, cuéntame tu situación y te ayudo a elegir el servicio
              más adecuado según tu objetivo, tu momento actual y el nivel de
              acompañamiento que necesitas.
            </p>
          </div>
          <a href="#contacto" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
            Quiero que me asesores <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PlanCards });
