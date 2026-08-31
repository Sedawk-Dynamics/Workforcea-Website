/**
 * Circular country marks, drawn inline so they stay crisp at any size and add
 * no image requests. Simplified renderings — recognisable at badge size.
 */

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
