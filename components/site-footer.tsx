import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { SocialLinks } from '@/components/social-links'
import { SERVICES, SITE } from '@/lib/site'
// White knockout of the same wordmark — the full-colour logo is navy/grey and
// would disappear against the dark footer.
import wordmarkWhite from '@/public/images/workforcea-logo-white.png'

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
              src={wordmarkWhite}
              alt="Workforcea Talent Solutions"
              className="h-14 w-auto object-contain sm:h-16"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Executive search, technology recruitment and workforce
              solutions for companies scaling with ambition.
            </p>
            <SocialLinks tone="dark" className="mt-6" />
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
