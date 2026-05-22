/* global React, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSelect */

function TweaksHost({ tweaks, setTweak }) {
  if (!window.TweaksPanel) return null;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero">
        <TweakToggle
          label="Nota manuscrita"
          value={tweaks.heroScriptNote}
          onChange={(v) => setTweak("heroScriptNote", v)}
        />
        <TweakToggle
          label="Strip de autoridad"
          value={tweaks.showAuthorityStrip}
          onChange={(v) => setTweak("showAuthorityStrip", v)}
        />
      </TweakSection>

      <TweakSection label="Secciones">
        <TweakToggle
          label="Resultados / PBs"
          value={tweaks.showStats}
          onChange={(v) => setTweak("showStats", v)}
        />
        <TweakToggle
          label="Proceso (oscuro)"
          value={tweaks.showProcess}
          onChange={(v) => setTweak("showProcess", v)}
        />
        <TweakToggle
          label="Blog / recursos"
          value={tweaks.showBlog}
          onChange={(v) => setTweak("showBlog", v)}
        />
      </TweakSection>

      <TweakSection label="Paleta">
        <TweakRadio
          label="Acento"
          value={tweaks.accentPalette}
          onChange={(v) => setTweak("accentPalette", v)}
          options={[
            { value: "camel",   label: "Camel" },
            { value: "glacier", label: "Glaciar" },
            { value: "clay",    label: "Arcilla" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

Object.assign(window, { TweaksHost });
