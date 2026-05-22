/* global React */

const FAQS = [
  {
    q: "¿Trabajas solo con corredores avanzados?",
    a: "No. Trabajo con corredores de diferentes niveles, desde personas que empiezan a correr hasta atletas que preparan media maratón, maratón o trail.",
  },
  {
    q: "¿Puedo contratar solo nutrición o solo entrenamiento?",
    a: "Sí. Puedes elegir entrenamiento, nutrición o el programa completo de entrenamiento + nutrición.",
  },
  {
    q: "¿El seguimiento es online?",
    a: "Sí, todo el seguimiento es online. Trabajo con corredores de cualquier parte de España (y fuera) sin problemas de horarios ni desplazamientos.",
  },
  {
    q: "¿Puedo empezar si tengo molestias o vengo de una lesión?",
    a: "Depende del caso. Se valora tu situación para adaptar cargas, fuerza y progresión. Si necesitas atención médica o fisioterapia, se deriva o se trabaja de forma complementaria.",
  },
  {
    q: "¿La nutrición es una dieta cerrada?",
    a: "No. La nutrición se adapta a tus entrenamientos, horarios, gustos, digestiones, hambre, energía y objetivo.",
  },
  {
    q: "¿Qué opción me recomiendas si no sé por dónde empezar?",
    a: "Si quieres mejorar rendimiento de forma completa, la mejor opción suele ser entrenamiento + nutrición. Si tienes una necesidad concreta, puedes empezar con una consulta puntual.",
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--divider)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: 0,
          padding: "22px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          cursor: "pointer",
          textAlign: "left",
          color: "var(--fg-strong)",
        }}
      >
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 19,
          letterSpacing: "-0.015em",
          color: "var(--fg-strong)",
          lineHeight: 1.3,
          textWrap: "balance",
        }}>
          {item.q}
        </span>
        <span
          aria-hidden
          style={{
            flexShrink: 0,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1px solid var(--paper-300)",
            color: "var(--espresso-700)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 18,
            fontWeight: 400,
            transition: "transform var(--dur-2) var(--ease-out), background var(--dur-2)",
            background: open ? "var(--paper-200)" : "transparent",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 240 : 0,
          overflow: "hidden",
          transition: "max-height var(--dur-3) var(--ease-out)",
        }}
      >
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.6,
          color: "var(--fg)",
          margin: 0,
          paddingBottom: 22,
          maxWidth: 720,
          textWrap: "pretty",
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: 56, alignItems: "start" }}>
          <div>
            <div className="eyebrow">FAQ</div>
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
              Preguntas frecuentes.
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--fg-muted)", marginTop: 18, maxWidth: 320 }}>
              ¿No ves tu pregunta? Escríbeme directamente y te respondo en menos
              de 24 horas.
            </p>
          </div>
          <div>
            {FAQS.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
