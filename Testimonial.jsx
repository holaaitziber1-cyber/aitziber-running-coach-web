/* global React */

const QUOTES = [
  {
    title: "Llegué al quirófano fuerte — y volví antes a correr",
    quote:
      "Mi experiencia con el programa de nutrición con Aitziber ha sido maravillosa. Contacté con ella por tener que someterme a una cirugía laparoscópica programada, quería asegurarme de llegar lo suficientemente preparada para el quirófano, el postoperatorio y afrontar de la mejor forma el parón obligado en los entrenos.\n\nEl resultado ha superado todas mis expectativas: logramos bajar la inflamación previa y postquirúrgica, aprendí a manejar el estrés y la ansiedad por la comida en una época de muchos nervios. Conseguimos mantener la energía a tope en todo momento, incluso en el postoperatorio inmediato, y a pesar de haber tenido complicaciones digestivas durante la cirugía, que manejó a la perfección. Además he vuelto mucho antes de lo que pensaba a los entrenos, con súper buenas sensaciones, mucha motivación, un rendimiento brutal y gestionando súper bien el tema del hambre/saciedad.\n\nEstoy feliz de haber contado con ella para acompañarme durante este proceso, me he sentido súper bien cuidada. Destaco mucho su cercanía, su calidez humana y la empatía que me ha demostrado desde el minuto uno. Aitziber es una persona y una profesional excelente.",
    who: "Patri",
    role: "Corredora · nutrición + cirugía programada",
    tag: "Nutrición · salud",
  },
  {
    title: "Bajé 8 minutos mi marca de maratón",
    quote:
      "Llevaba tres años atascado en 3:23. Aitziber me ordenó la temporada por bloques, metió fuerza de verdad y cambió por completo mi nutrición de las semanas previas y del propio día de carrera. Llegué a la línea de salida con un plan kilómetro a kilómetro y la cabeza tranquila.\n\nBajé 8 minutos — y, lo que más valoro, llegué con piernas. Es la primera vez que termino un maratón disfrutando del último cuarto en lugar de sufriéndolo.",
    who: "Carlos M.",
    role: "42 años · maratón · sub-3:15",
    tag: "Entrenamiento + Nutrición",
  },
  {
    title: "De no saber por dónde empezar a mi primer 10K",
    quote:
      "Empecé a correr en enero sin tener ni idea. Probé apps gratis, vídeos, planes copiados de Instagram, y siempre acababa lesionada o reventada. Con Aitziber por fin tuve algo coherente: un plan que entendía mi nivel real, una pauta de alimentación adaptada a mis horarios y, sobre todo, alguien a quien preguntarle las dudas tontas sin sentirme mal.\n\nHice mi primer 10K en mayo. No es una marca brutal, pero llegué disfrutando y sin molestias. Hace seis meses no me lo creía.",
    who: "Sara L.",
    role: "31 años · iniciación al running",
    tag: "Entrenamiento personalizado",
  },
  {
    title: "Por fin no me da la pájara en el km 25",
    quote:
      "Llevaba dos temporadas en trails largos con el mismo problema: a partir del km 25 me daba la pájara, vomitaba los geles y bajaba el ritmo a la mitad. Hicimos una estrategia muy concreta para mi tipo de carrera — qué comer la noche antes, el desayuno, geles cada cuánto, sales, qué llevar para más allá del km 30.\n\nEste año hice Zegama entero, sin pájara, con energía para correr la última bajada. Para mí es un antes y un después.",
    who: "Iñigo R.",
    role: "38 años · trail de montaña",
    tag: "Estrategia nutricional de carrera",
  },
];

function BigQuoteMark() {
  return (
    <svg width="64" height="48" viewBox="0 0 64 48" fill="none" aria-hidden="true" style={{ display: "block" }}>
      <path
        d="M14 48c-7.732 0-14-6.268-14-14C0 17 9 4 23 0l3 7c-9 3-15 11-15 19h3c7.732 0 14 6.268 14 14s-6.268 8-14 8zm36 0c-7.732 0-14-6.268-14-14 0-17 9-30 23-34l3 7c-9 3-15 11-15 19h3c7.732 0 14 6.268 14 14s-6.268 8-14 8z"
        fill="var(--camel-400)"
        opacity="0.5"
      />
    </svg>
  );
}

function Testimonial() {
  const [i, setI] = React.useState(0);
  const t = QUOTES[i];
  return (
    <section id="testimonios" style={{ background: "var(--paper-200)" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <div className="eyebrow">Testimonios</div>
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
            Lo que cuentan las personas con las que entreno.
          </h2>
        </div>

        <div
          style={{
            background: "var(--paper-50)",
            borderRadius: "var(--r-xl)",
            padding: "40px 48px 36px",
            boxShadow: "var(--shadow-sm)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* lion watermark */}
          <img
            src="logo-mark-transparent.png"
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              right: -80,
              top: -80,
              width: 360,
              height: 360,
              opacity: 0.06,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <BigQuoteMark />

            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--camel-600)",
                marginTop: 12,
              }}
            >
              {t.tag}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.2vw, 38px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: "10px 0 0",
                color: "var(--fg-strong)",
                textWrap: "balance",
                maxWidth: 880,
              }}
            >
              “{t.title}”
            </h3>

            <div
              style={{
                marginTop: 24,
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--fg)",
                maxWidth: 880,
                textWrap: "pretty",
                whiteSpace: "pre-wrap",
              }}
            >
              {t.quote}
            </div>

            <div
              style={{
                marginTop: 28,
                paddingTop: 22,
                borderTop: "1px solid var(--divider)",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--camel-300)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "var(--espresso-800)",
                  flexShrink: 0,
                }}
              >
                {t.who
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--fg-strong)",
                }}>
                  {t.who}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-muted)" }}>
                  {t.role}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selector — small pill cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 10,
            marginTop: 16,
          }}
        >
          {QUOTES.map((q, k) => {
            const active = k === i;
            return (
              <button
                key={k}
                onClick={() => setI(k)}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: active ? "var(--espresso-700)" : "var(--paper-300)",
                  background: active ? "var(--espresso-800)" : "var(--bg-card)",
                  color: active ? "var(--paper-50)" : "var(--fg-strong)",
                  padding: "12px 14px",
                  borderRadius: "var(--r-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  fontFamily: "inherit",
                  transition: "transform var(--dur-2) var(--ease-out), background var(--dur-2)",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "var(--paper-50)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: active ? "var(--camel-400)" : "var(--camel-600)",
                }}>
                  {String(k + 1).padStart(2, "0")}
                </span>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}>
                  {q.who}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  lineHeight: 1.35,
                  color: active ? "var(--camel-200)" : "var(--fg-muted)",
                }}>
                  {q.role}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonial });
