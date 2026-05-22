/* global React, BrandIcon */

const SERVICE_PILLARS = [
  {
    icon: "stopwatch",
    title: "Entrenamiento personalizado",
    body: "Rodajes, series, fuerza y descansos. Una planificación que respeta tu nivel real, tu calendario y tu evolución — no la del plan de la revista.",
    metric: "z1 → z5",
    metricLabel: "5 zonas de esfuerzo",
  },
  {
    icon: "plate",
    title: "Nutrición deportiva",
    body: "Cómo comer para entrenar, recuperar y competir. Energía estable, digestiones tranquilas y composición corporal sin dietas restrictivas.",
    metric: "tu plato",
    metricLabel: "adaptado a tu semana",
  },
  {
    icon: "gut",
    title: "Salud digestiva",
    body: "Si te molesta el estómago entrenando o compitiendo, hay solución. Pauta concreta para tolerar geles, sales y comida pre-carrera.",
    metric: "0 pájaras",
    metricLabel: "estómago en su sitio",
  },
  {
    icon: "heart",
    title: "Recuperación",
    body: "Descanso programado, sueño, fuerza y nutrición de recuperación. Para que la carga sume — no acumule fatiga ni lesiones.",
    metric: "FC vs RPE",
    metricLabel: "carga real medida",
  },
  {
    icon: "route",
    title: "Estrategia de carrera",
    body: "El día clave no se improvisa. Desayuno, geles, sales, hidratación, ritmo por tramos y plan B para cuando el cuerpo grita.",
    metric: "km a km",
    metricLabel: "tu plan de carrera",
  },
  {
    icon: "dumbbell",
    title: "Fuerza para correr",
    body: "Sesiones específicas para corredores: economía de carrera, prevención de lesiones y potencia para los cambios de ritmo.",
    metric: "2× / sem",
    metricLabel: "fuerza específica",
  },
];

function Services() {
  return (
    <section id="metodo" style={{ background: "var(--paper-200)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 32,
          alignItems: "end",
          marginBottom: 56,
        }}>
          <div>
            <div className="eyebrow">El método · 6 pilares</div>
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
              Todo lo que un corredor necesita —{" "}
              <span style={{ color: "var(--accent)" }}>en un solo método</span>.
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
            No es entrenamiento por un lado y nutrición por otro. Es un único
            sistema: cada pilar habla con el resto, porque tu cuerpo no funciona
            por compartimentos.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {SERVICE_PILLARS.map((it, i) => (
            <article
              key={it.title}
              style={{
                background: "var(--bg-card)",
                borderRadius: "var(--r-lg)",
                padding: "26px 24px 22px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
                transition: "transform var(--dur-2) var(--ease-out), box-shadow var(--dur-2)",
                overflow: "hidden",
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
              {/* number stripe */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 4,
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "var(--camel-600)",
                }}>
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
                <div
                  style={{
                    width: 42, height: 42,
                    borderRadius: 12,
                    background: "var(--paper-200)",
                    color: "var(--espresso-800)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BrandIcon name={it.icon} size={22} />
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 21,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "var(--fg-strong)",
                  lineHeight: 1.1,
                  textWrap: "balance",
                }}
              >
                {it.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--fg)", margin: 0 }}>
                {it.body}
              </p>

              {/* metric chip — gives every card a "data point" */}
              <div style={{
                marginTop: "auto",
                paddingTop: 16,
                borderTop: "1px solid var(--divider)",
                display: "flex",
                alignItems: "baseline",
                gap: 10,
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontVariantNumeric: "tabular-nums",
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: "-0.01em",
                  color: "var(--espresso-800)",
                }}>{it.metric}</span>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--fg-muted)",
                }}>{it.metricLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
