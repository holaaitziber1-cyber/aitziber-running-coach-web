/* global React, ReactDOM, Nav, Hero, Authority, Problem, Services, PlanCards, ForWhom, About, Process, Stats, Testimonial, Blog, FAQ, ContactForm, Footer, TweaksHost */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showAuthorityStrip": true,
  "showBlog": true,
  "showProcess": true,
  "showStats": true,
  "accentPalette": "camel",
  "heroScriptNote": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks
    ? window.useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];

  // Apply accent palette
  React.useEffect(() => {
    const root = document.documentElement;
    if (tweaks.accentPalette === "glacier") {
      root.style.setProperty("--accent", "var(--glacier-700)");
    } else if (tweaks.accentPalette === "clay") {
      root.style.setProperty("--accent", "var(--clay-700)");
    } else {
      root.style.setProperty("--accent", "var(--camel-600)");
    }
  }, [tweaks.accentPalette]);

  const onNavigate = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <Nav onNavigate={onNavigate} />
      <Hero showScriptNote={tweaks.heroScriptNote} />
      {tweaks.showAuthorityStrip && <Authority />}
      <Problem />
      <Services />
      <PlanCards />
      <ForWhom />
      {tweaks.showStats && <Stats />}
      <About />
      {tweaks.showProcess && <Process />}
      <Testimonial />
      {tweaks.showBlog && <Blog />}
      <FAQ />
      <ContactForm />
      <Footer />

      {window.TweaksHost && (
        <TweaksHost tweaks={tweaks} setTweak={setTweak} />
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
