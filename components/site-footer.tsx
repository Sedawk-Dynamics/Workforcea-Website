import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { SERVICES, SITE } from '@/lib/site'

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
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

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Roles We Hire', href: '/#roles' },
  { label: 'How We Work', href: '/#how-we-work' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-footer.png"
              alt="Workforcea Talent Solutions"
              width={860}
              height={501}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              A specialist recruitment firm for technology and leadership
              hiring — built on fifteen years of talent acquisition
              leadership.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Workforcea on LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <LinkedinIcon />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Workforcea on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-white">
              Navigate
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-white">
              Services
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-white">
              Contact
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.tagline}.</p>
        </div>
      </div>
    </footer>
  )
}
