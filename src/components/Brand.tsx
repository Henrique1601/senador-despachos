export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand${light ? ' brand-light' : ''}`}
      href="#inicio"
      aria-label="Senador Despachos — início"
    >
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 52 52" fill="none">
          <path
            d="m15 29 3-18 20 4-5 18M16 24l19 4M10 28c-4 8 26 17 31 8M11 37c6 8 18 10 26 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="brand-name">
        SENADOR<span>DESPACHOS</span>
      </span>
    </a>
  )
}
