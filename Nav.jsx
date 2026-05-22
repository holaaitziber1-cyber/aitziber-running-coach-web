/* global React, lucide */
const { useEffect } = React;

function Icon({ name, size = 20, strokeWidth = 1.75, style }) {
  const ref = React.useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      el.setAttribute("stroke-width", String(strokeWidth));
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { "stroke-width": strokeWidth } });
    }
  }, [name, strokeWidth]);
  return (
    <span
      ref={ref}
      style={{
        display: "inline-flex",
        width: size,
        height: size,
        lineHeight: 0,
        ...(style || {}),
      }}
    />
  );
}

function Nav({ onNavigate }) {
  const linkStyle = {
    fontFamily: "var(--font-display)",
    fontSize: 14,
    fontWeight: 600,
    color: "var(--espresso-700)",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 999,
    transition: "background var(--dur-2) var(--ease-out)",
  };
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(246, 241, 232, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--divider)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
          onClick={(e) => { e.preventDefault(); onNavigate?.("top"); }}
        >
          <img
            src="assets/logo-mark-transparent.png"
            alt="Aitziber"
            style={{ width: 40, height: 40, display: "block" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 17,
              letterSpacing: "-0.01em",
              color: "var(--espresso-800)",
            }}>AITZIBER</span>
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: "0.22em",
              color: "var(--camel-600)",
              marginTop: 3,
            }}>RUNNING COACH</span>
          </div>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            ["método", "metodo"],
            ["servicios", "planes"],
            ["resultados", "resultados"],
            ["sobre mí", "sobre"],
            ["blog", "blog"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--paper-200)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              onClick={(e) => { e.preventDefault(); onNavigate?.(id); }}
            >
              {label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary" style={{ marginLeft: 12 }}
            onClick={(e) => { e.preventDefault(); onNavigate?.("contacto"); }}
          >
            Quiero empezar <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { Nav, Icon });
