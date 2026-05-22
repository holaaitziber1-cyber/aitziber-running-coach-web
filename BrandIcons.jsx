/* global React */
/*
 * BrandIcons — set de iconografía custom para Aitziber Running Coach.
 *
 * Estilo:
 *   - Lineal, fino, profesional, minimalista
 *   - viewBox 24×24, stroke 1.5, round caps/joins, sin rellenos
 *   - currentColor — heredan espresso/camel/clay según contexto
 *
 * Uso:
 *   <BrandIcon name="shoe" size={28} />
 *   <BrandIcon name="stopwatch" size={20} style={{ color: "var(--camel-600)" }} />
 */

const STROKE = 1.5;

const PATHS = {
  // Zapatilla running — perfil lateral
  shoe: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 16.5h18.2c.7 0 1.2-.6 1-1.3l-.3-1c-.2-.6-.7-1-1.3-1.1l-3-.5c-.4-.1-.8-.3-1.1-.6L13 9.5c-.5-.5-1.1-.7-1.8-.7H8c-1.7 0-3.2 1-3.9 2.5L3 14c-.4.8-.5 1.7-.5 2.5z" />
      <path d="M5.5 12.5l1 1.5" />
      <path d="M8 11l1 2" />
      <path d="M10.5 9.8l1 2.2" />
      <path d="M2.5 16.5l1 1.5h17l1-1.5" />
    </g>
  ),

  // Cronómetro
  stopwatch: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="7.5" />
      <path d="M10 3.5h4" />
      <path d="M12 3.5v2.5" />
      <path d="M18 7l1.3-1.3" />
      <path d="M12 14l3-3" />
    </g>
  ),

  // Plato / comida
  plate: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 9.5v5" />
    </g>
  ),

  // Botella / hidratación
  bottle: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2.5h4" />
      <path d="M10.5 2.5v3" />
      <path d="M13.5 2.5v3" />
      <path d="M9 8.5c0-1.5 1.5-3 3-3s3 1.5 3 3v11c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-11z" />
      <path d="M9 13.5h6" />
    </g>
  ),

  // Rayo / energía
  bolt: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 2.5L5.5 13.5h6L10.5 21.5l8-11h-6L13.5 2.5z" />
    </g>
  ),

  // Corazón / recuperación — con linea de pulso
  heart: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20.5s-7.5-4.5-7.5-10c0-2.8 2.2-5 5-5 1.5 0 2.8.7 3.7 1.8.9-1.1 2.2-1.8 3.8-1.8 2.8 0 5 2.2 5 5 0 5.5-7.5 10-10 10z" />
      <path d="M5 12.5h3l1.5-2.5 2 5 1.5-3h3" />
    </g>
  ),

  // Gráfico / progreso
  chart: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5h17" />
      <path d="M3.5 20.5v-17" />
      <path d="M7 17v-5" />
      <path d="M11 17v-8" />
      <path d="M15 17v-6" />
      <path d="M19 17v-11" />
      <path d="M6.5 7.5l4.5-3 4 2.5 4.5-3.5" />
    </g>
  ),

  // Checklist
  checklist: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4" width="4" height="4" rx="0.7" />
      <path d="M4.3 6l1.2 1.2L7.2 5" />
      <rect x="3.5" y="10" width="4" height="4" rx="0.7" />
      <path d="M4.3 12l1.2 1.2L7.2 11" />
      <rect x="3.5" y="16" width="4" height="4" rx="0.7" />
      <path d="M11 6h9.5" />
      <path d="M11 12h9.5" />
      <path d="M11 18h7" />
    </g>
  ),

  // Calendario
  calendar: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3.5v3" />
      <path d="M16 3.5v3" />
      <path d="M8 14h1" />
      <path d="M12 14h1" />
      <path d="M16 14h1" />
      <path d="M8 17.5h1" />
      <path d="M12 17.5h1" />
    </g>
  ),

  // Ruta / camino — sendero serpenteante con pin al final
  route: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="19" r="1.8" />
      <path d="M5 17.2c0-3 2-4 4-4 2.5 0 4 1.5 4 4 0 3-4 3-4 0 0-2.5 2-4 4.5-4 2.5 0 5 1 5 -3" />
      <path d="M18.5 7.5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 2 3 4.5 3 4.5s3-2.5 3-4.5z" />
      <circle cx="15.5" cy="7.5" r="0.9" />
    </g>
  ),

  // Fuerza / músculo — mancuerna
  dumbbell: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5v5" />
      <path d="M5.5 7v10" />
      <path d="M5.5 12h13" />
      <path d="M18.5 7v10" />
      <path d="M21 9.5v5" />
    </g>
  ),

  // Intestino / salud digestiva — minimalista, curva serpenteante
  gut: (
    <g fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3.5v3c0 2 3 2 3 4s-3 2-3 4 3 2 3 4-3 2-3 4v1" />
      <path d="M14 3.5v3c0 2 3 2 3 4s-3 2-3 4 3 2 3 4-3 2-3 4v1" />
    </g>
  ),
};

function BrandIcon({ name, size = 24, style, ...rest }) {
  const path = PATHS[name];
  if (!path) {
    console.warn(`BrandIcon: unknown icon "${name}"`);
    return null;
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: "inline-block", flexShrink: 0, ...(style || {}) }}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
}

Object.assign(window, { BrandIcon });
