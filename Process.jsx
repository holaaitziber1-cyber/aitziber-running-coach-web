/* global React */

const STEPS = [
  {
    n: "01",
    icon: "checklist",
    title: "Me cuentas tu situación",
    body:
      "Rellenas un formulario inicial para conocer tu objetivo, historial, entrenamientos, alimentación, disponibilidad y contexto actual.",
  },
  {
    n: "02",
    icon: "route",
    title: "Definimos la mejor estrategia",
    body:
      "Valoro qué necesitas realmente: entrenamiento, nutrición, pack completo o una consulta puntual.",
  },
  {
    n: "03",
    icon: "calendar",
    title: "Creamos tu plan",
    body:
      "Diseño tu planificación y/o estrategia nutricional en base a tu objetivo, nivel, horarios, sensaciones y necesidades.",
  },
  {
    n: "04",
    icon: "chart",
    title: "Ajustamos durante el proceso",
    body:
      "El plan se revisa y se adapta según evolución, carga, energía, digestiones, descanso y resultados.",
  },
];

function Process() {
  return (
    <section id="proceso" style={{ background: "var(--espresso-800)", color: "var(--paper-50)" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow on-dark">Proceso</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.2vw, 50px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "10px 0 0",
              color: "var(--paper-50)",
              textWrap: "balance",
            }}
          >
            Cómo funciona el proceso.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            position: "relative",
          }}
        >
          {/* connecting line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "12.5%",
              right: "12.5%",
              top: 32,
              height: 1,
              borderTop: "1px dashed rgba(246, 241, 232, 0.22)",
              pointerEvents: "none",
            }}
          />
          {STEPS.map((s) => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--espresso-800)",
                  border: "1px solid var(--camel-600)",
                  color: "var(--camel-300)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: 16,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {s.n}
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--camel-300)",
              }}>
                <BrandIcon name={s.icon} size={22} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.15,
                  margin: 0,
                  color: "var(--paper-50)",
                  textWrap: "balance",
                }}
              >
                {s.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 14.5,
                lineHeight: 1.55,
                color: "var(--camel-200)",
                margin: 0,
              }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
