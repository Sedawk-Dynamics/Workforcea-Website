import { SOCIAL_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Founder's personal profile — a person mark distinguishes it from the company page. */
function FounderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </svg>
  )
}

const ICONS = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  user: FounderIcon,
}

export function SocialLinks({
  tone = 'dark',
  className,
}: {
  /** "dark" for navy surfaces, "light" for white ones. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = ICONS[social.icon]
        return (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.ariaLabel}
              title={social.ariaLabel}
              className={cn(
                'flex size-9 items-center justify-center rounded-full border transition-colors',
                tone === 'dark'
                  ? 'border-white/15 text-white/70 hover:border-white/40 hover:bg-white/10 hover:text-white'
                  : 'border-border text-navy/70 hover:border-accent hover:bg-accent hover:text-white',
              )}
            >
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
