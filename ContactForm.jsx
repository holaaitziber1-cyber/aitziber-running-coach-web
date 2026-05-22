/* global React, BrandIcon */
const { useState } = React;

function Field({ label, hint, children, required }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: "var(--fg-strong)",
        textTransform: "uppercase",
      }}>
        {label}{required && <span style={{ color: "var(--accent)", marginLeft: 4 }}>*</span>}
      </span>
      {children}
      {hint && (
        <span style={{
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--fg-muted)",
        }}>{hint}</span>
      )}
    </label>
  );
}

const inputStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 15,
  background: "var(--paper-50)",
  color: "var(--fg-strong)",
  border: "1px solid var(--paper-300)",
  borderRadius: "var(--r-md)",
  padding: "12px 14px",
  outline: "none",
  width: "100%",
  transition: "border-color var(--dur-2) var(--ease-out), box-shadow var(--dur-2)",
};

const focusStyle = (e) => {
  e.target.style.borderColor = "var(--camel-500)";
  e.target.style.boxShadow = "0 0 0 3px var(--ring)";
};
const blurStyle = (e) => {
  e.target.style.borderColor = "var(--paper-300)";
  e.target.style.boxShadow = "none";
};

const WEB3FORMS_KEY = "e9a2f01d-6903-4eb0-93a8-1d82988c4eb0";

function ContactForm() {
  const [interest, setInterest] = useState("integrado");
  const [distance, setDistance] = useState("21K");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const interests = [
    ["integrado",  "Entrenamiento + Nutrición"],
    ["entreno",    "Sólo entrenamiento"],
    ["nutri",      "Sólo nutrición"],
    ["puntual",    "Consulta puntual"],
    ["nose",       "No lo tengo claro"],
  ];
  const interestLabel = (id) => (interests.find((i) => i[0] === id) || [])[1] || id;

  const distances = ["10K", "21K", "42K", "Trail", "Iniciación", "Otro"];

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("distancia", distance);
    data.set("interes", interestLabel(interest));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "No se ha podido enviar. Prueba otra vez en un momento o escríbeme directamente a holaaitziber1@gmail.com.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Sin conexión. Escríbeme directamente a holaaitziber1@gmail.com.");
    }
  };

  if (status === "sent") {
    return (
      <section id="contacto" style={{ background: "var(--paper-200)" }}>
        <div className="container">
          <div style={{
            background: "var(--bg-card)",
            borderRadius: "var(--r-xl)",
            padding: "56px 48px",
            boxShadow: "var(--shadow-md)",
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto",
          }}>
            <div style={{
              width: 64, height: 64,
              borderRadius: "50%",
              background: "color-mix(in oklab, var(--moss-300) 50%, transparent)",
              color: "var(--moss-700)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 18,
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 36,
              letterSpacing: "-0.025em",
              margin: 0,
              color: "var(--fg-strong)",
              textWrap: "balance",
            }}>
              Recibido. Te respondo en menos de 24 horas.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--fg)",
              marginTop: 16,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              textWrap: "pretty",
            }}>
              Voy a leer tu situación con calma y te escribiré un correo
              personal con los siguientes pasos. Nos vemos pronto en una zancada
              cualquiera.
            </p>
            <p style={{
              fontFamily: "var(--font-script)",
              fontSize: 28,
              color: "var(--accent)",
              marginTop: 22,
              lineHeight: 1,
            }}>
              — Aitzi
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn btn-ghost"
              style={{ marginTop: 24, color: "var(--espresso-800)" }}
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" style={{ background: "var(--paper-200)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: 56,
          alignItems: "start",
        }}>
          {/* LEFT — pitch */}
          <div>
            <div className="eyebrow">Empezamos</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(34px, 4.4vw, 52px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.02,
                margin: "10px 0 0",
                color: "var(--fg-strong)",
                textWrap: "balance",
              }}
            >
              Cuéntame tu carrera. Te respondo yo, en menos de{" "}
              <span style={{ color: "var(--accent)" }}>24 horas</span>.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--fg)",
              marginTop: 18,
              maxWidth: 480,
              textWrap: "pretty",
            }}>
              No hay formularios largos ni embudos. Solo lo justo para entender
              tu objetivo y proponerte el camino — sin compromiso.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["heart", "Te respondo yo personalmente"],
                ["calendar", "Primera valoración sin coste"],
                ["checklist", "Propuesta clara antes de avanzar"],
              ].map(([icon, label]) => (
                <li key={label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "var(--font-body)",
                  fontSize: 15.5,
                  color: "var(--fg-strong)",
                }}>
                  <span style={{
                    width: 34, height: 34,
                    borderRadius: 10,
                    background: "var(--paper-50)",
                    color: "var(--espresso-800)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <BrandIcon name={icon} size={18} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div style={{
              marginTop: 32,
              paddingTop: 22,
              borderTop: "1px solid var(--divider)",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}>
              <span className="eyebrow">O directamente</span>
              <a href="mailto:holaaitziber1@gmail.com" style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "-0.015em",
                color: "var(--espresso-800)",
                textDecoration: "none",
              }}>holaaitziber1@gmail.com</a>
              <a href="https://instagram.com/aitzibermendibil" target="_blank" rel="noopener" style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--fg-muted)",
                textDecoration: "none",
              }}>@aitzibermendibil · Online</a>
            </div>
          </div>

          {/* RIGHT — form */}
          <form
            onSubmit={onSubmit}
            style={{
              background: "var(--bg-card)",
              borderRadius: "var(--r-xl)",
              padding: "36px 36px 32px",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            {/* web3forms config — hidden */}
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="Nuevo contacto desde aitziberrunningcoach.com" />
            <input type="hidden" name="from_name" value="Web Aitziber Running Coach" />
            <input type="hidden" name="distancia" value={distance} />
            <input type="hidden" name="interes" value={interestLabel(interest)} />
            {/* honeypot — anti-spam */}
            <input type="checkbox" name="botcheck" tabIndex="-1" style={{ display: "none" }} aria-hidden="true" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Nombre" required>
                <input type="text" name="nombre" required placeholder="Aitziber" style={inputStyle}
                       onFocus={focusStyle} onBlur={blurStyle} />
              </Field>
              <Field label="Email" required>
                <input type="email" name="email" required placeholder="tu@email.com" style={inputStyle}
                       onFocus={focusStyle} onBlur={blurStyle} />
              </Field>
            </div>

            {/* Tipo de objetivo — chips */}
            <Field label="Tu distancia / objetivo">
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {distances.map((d) => {
                  const active = d === distance;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDistance(d)}
                      style={{
                        cursor: "pointer",
                        border: "1px solid",
                        borderColor: active ? "var(--espresso-800)" : "var(--paper-300)",
                        background: active ? "var(--espresso-800)" : "var(--paper-50)",
                        color: active ? "var(--paper-50)" : "var(--fg-strong)",
                        padding: "8px 14px",
                        borderRadius: 999,
                        fontFamily: "var(--font-display)",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "-0.005em",
                        transition: "background var(--dur-2) var(--ease-out)",
                      }}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </Field>

            {/* Interés — segmented */}
            <Field label="Qué te interesa">
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {interests.map(([id, label]) => {
                  const active = id === interest;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setInterest(id)}
                      style={{
                        cursor: "pointer",
                        border: "1px solid",
                        borderColor: active ? "var(--camel-600)" : "var(--paper-300)",
                        background: active ? "color-mix(in oklab, var(--camel-300) 40%, var(--paper-50))" : "var(--paper-50)",
                        color: "var(--fg-strong)",
                        padding: "10px 14px",
                        borderRadius: "var(--r-md)",
                        fontFamily: "var(--font-display)",
                        fontSize: 13,
                        fontWeight: 600,
                        transition: "background var(--dur-2) var(--ease-out)",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field
              label="Cuéntame tu situación"
              hint="Tu objetivo, tu nivel actual, lo que has probado, lo que te frena. Cuanto más concreto, mejor."
              required
            >
              <textarea
                name="mensaje"
                required
                rows={5}
                placeholder="Estoy preparando mi primera media maratón en abril, llevo 8 meses corriendo, mi mejor 10K es 52 minutos, me cuesta la energía en las tiradas largas y..."
                style={{ ...inputStyle, resize: "vertical", minHeight: 120, fontFamily: "var(--font-body)" }}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </Field>

            <label style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--fg-muted)",
              lineHeight: 1.45,
            }}>
              <input type="checkbox" required style={{ marginTop: 3, accentColor: "var(--camel-600)" }} />
              <span>
                Acepto la política de privacidad. Tus datos solo se usan para
                contactarte sobre los servicios que pides.
              </span>
            </label>

            {status === "error" && (
              <div style={{
                background: "color-mix(in oklab, var(--clay-300) 30%, var(--paper-50))",
                border: "1px solid var(--clay-500)",
                color: "var(--clay-700)",
                borderRadius: "var(--r-md)",
                padding: "12px 14px",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.5,
              }}>
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
              style={{
                marginTop: 4,
                height: 52,
                fontSize: 16,
                opacity: status === "sending" ? 0.6 : 1,
                cursor: status === "sending" ? "wait" : "pointer",
              }}
            >
              {status === "sending" ? "Enviando…" : (<>Enviar mi caso <span style={{ fontSize: 18 }}>→</span></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactForm });
