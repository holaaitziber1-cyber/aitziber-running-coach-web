/* global React */

function About() {
  return (
    <section id="sobre" style={{ background: "var(--paper-200)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="eyebrow">Sobre mí</div>
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
              Soy Aitziber, entrenadora de running y dietista{" "}
              <span style={{ color: "var(--accent)" }}>especializada en corredores</span>.
            </h2>

            <p style={{ fontSize: 17.5, lineHeight: 1.6, color: "var(--fg)", marginTop: 20, maxWidth: 560, textWrap: "pretty" }}>
              Ayudo a corredores y deportistas de resistencia a mejorar su
              rendimiento a través de una planificación de entrenamiento
              personalizada y una nutrición aplicada al deporte.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.6, color: "var(--fg)", marginTop: 14, maxWidth: 560, textWrap: "pretty" }}>
              Durante los últimos años he acompañado a más de
              <strong style={{ color: "var(--fg-strong)" }}> 200 corredores</strong>
              {" "}de diferentes niveles: desde personas que empiezan a correr
              hasta atletas que preparan medias maratones, maratones o pruebas
              de trail.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.6, color: "var(--fg)", marginTop: 14, maxWidth: 560, textWrap: "pretty" }}>
              Mi trabajo no consiste en darte una dieta o una tabla de
              entrenamientos. Consiste en entender tu contexto, tu objetivo, tu
              cuerpo y tu evolución para construir una
              <strong style={{ color: "var(--fg-strong)" }}> estrategia que puedas
              sostener</strong> y que realmente te ayude a rendir mejor.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.6, color: "var(--fg)", marginTop: 14, maxWidth: 560, textWrap: "pretty" }}>
              Como corredora y atleta de resistencia, entiendo lo que implica
              preparar un objetivo, gestionar cargas, convivir con dudas, cuidar
              la energía y llegar al día de la carrera con confianza.
            </p>

            <div style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
              {[
                ["TSAF", "Téc. Sup. Actividad Física"],
                ["TSD", "Téc. Sup. Dietética"],
                ["Máster", "Rendimiento deportivo"],
                ["Especialización", "Corredores"],
              ].map(([n, l]) => (
                <div key={n} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: "-0.015em",
                    color: "var(--fg-strong)",
                  }}>{n}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--fg-muted)" }}>{l}</span>
                </div>
              ))}
            </div>

            <a href="#planes" className="btn btn-primary" style={{ marginTop: 32 }}>
              Trabaja conmigo <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "var(--r-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "var(--espresso-700)",
              }}
            >
              <img
                src="assets/photos/summit-jump.jpg"
                alt="Aitziber en la cima — Embalse de Yesa"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 35%",
                  display: "block",
                }}
              />
            </div>
            <img
              src="assets/logo-mark-transparent.png"
              alt=""
              aria-hidden
              className="about-watermark"
              style={{
                position: "absolute",
                top: -28,
                right: -20,
                width: 120,
                height: 120,
                filter: "drop-shadow(0 12px 24px rgba(31, 20, 10, 0.35))",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
