/**
 * Circular country marks, drawn inline so they stay crisp at any size and add
 * no image requests. Simplified renderings — recognisable at badge size.
 */

export function CanadaFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Canada">
      <defs>
        <clipPath id="ca-round">
          <circle cx="24" cy="24" r="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#ca-round)">
        <rect width="48" height="48" fill="#fff" />
        <rect width="12" height="48" fill="#d52b1e" />
        <rect x="36" width="12" height="48" fill="#d52b1e" />
        {/* Maple leaf */}
        <path
          fill="#d52b1e"
          d="M24 11.5l2.1 3.9a.7.7 0 00.8.34l2.4-.6-.84 4.2a.7.7 0 001 .76l3.2-1.66 1 2.12a.7.7 0 00.84.36l3.1-.82-1.05 3.02a.7.7 0 00.26.8l1.1.72-5.9 4.9a.8.8 0 00-.24.86l.6 1.9-6.3-1.1a.7.7 0 00-.8.78l.4 5.5h-2.3l.4-5.5a.7.7 0 00-.8-.78l-6.3 1.1.6-1.9a.8.8 0 00-.24-.86l-5.9-4.9 1.1-.72a.7.7 0 00.26-.8l-1.05-3.02 3.1.82a.7.7 0 00.84-.36l1-2.12 3.2 1.66a.7.7 0 001-.76l-.84-4.2 2.4.6a.7.7 0 00.8-.34L24 11.5z"
        />
      </g>
    </svg>
  )
}

export function UsaFlag({ className }: { className?: string }) {
  const stripes = Array.from({ length: 13 })
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="United States">
      <defs>
        <clipPath id="us-round">
          <circle cx="24" cy="24" r="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-round)">
        <rect width="48" height="48" fill="#fff" />
        {stripes.map((_, i) =>
          i % 2 === 0 ? (
            <rect
              key={i}
              y={(i * 48) / 13}
              width="48"
              height={48 / 13}
              fill="#b22234"
            />
          ) : null,
        )}
        <rect width="26" height={(48 / 13) * 7} fill="#3c3b6e" />
        {Array.from({ length: 4 }).flatMap((_, row) =>
          Array.from({ length: 5 }).map((__, col) => (
            <circle
              key={`${row}-${col}`}
              cx={3.4 + col * 4.9 + (row % 2 ? 2.45 : 0)}
              cy={3.6 + row * 5.6}
              r="1.15"
              fill="#fff"
            />
          )),
        )}
      </g>
    </svg>
  )
}
