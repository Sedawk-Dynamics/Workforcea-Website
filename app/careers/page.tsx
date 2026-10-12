import type { Metadata } from 'next'
import {
  ArrowUpRight,
  Check,
  MapPin,
  Clock,
  Briefcase,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/motion/reveal'
import { OPEN_ROLES, SITE } from '@/lib/site'

const DESCRIPTION =
  'Open positions at Workforcea Talent Solutions. A boutique talent acquisition firm where the work is senior-led and the team stays small on purpose.'

export const metadata: Metadata = {
  // The root layout applies the "%s | Workforcea" template.
  title: 'Careers',
  description: DESCRIPTION,
  alternates: { canonical: '/careers' },
  openGraph: {
    title: `Careers | ${SITE.shortName}`,
    description: DESCRIPTION,
    url: '/careers',
    type: 'website',
  },
}

/** Pre-fills the subject line so applications are easy to triage. */
function applyHref(title: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Application: ${title}`,
  )}`
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-navy px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
          <Reveal>
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Careers
              </p>
              <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Build Workforcea with us
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-white/70">
                We keep the team small on purpose. That means real ownership
                from day one, direct access to the founder, and work that is
                judged on quality rather than volume.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/80">
                <Users className="size-4 text-accent" aria-hidden="true" />
                {OPEN_ROLES.length} open positions
              </p>
            </div>
          </Reveal>
        </section>

        <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            {OPEN_ROLES.map((role, index) => (
              <Reveal key={role.slug} delay={index * 0.08}>
                <article
                  id={role.slug}
                  className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_-40px_rgba(11,31,61,0.5)]"
                >
                  <header className="border-b border-border bg-brand-tint p-7 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                          {role.team}
                        </p>
                        <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                          {role.title}
                        </h2>
                        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                          {role.summary}
                        </p>
                      </div>

                      <Button
                        render={<a href={applyHref(role.title)} />}
                        nativeButton={false}
                        size="lg"
                        className="shrink-0 px-6"
                      >
                        Apply Now
                        <ArrowUpRight data-icon="inline-end" />
                      </Button>
                    </div>

                    <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                      {[
                        { icon: MapPin, value: role.location },
                        { icon: Clock, value: role.type },
                        { icon: Briefcase, value: role.experience },
                      ].map((meta) => {
                        const Icon = meta.icon
                        return (
                          <li
                            key={meta.value}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-navy/75"
                          >
                            <Icon
                              className="size-3.5 text-accent"
                              aria-hidden="true"
                            />
                            {meta.value}
                          </li>
                        )
                      })}
                    </ul>
                  </header>

                  <div className="grid gap-8 p-7 sm:p-8 lg:grid-cols-2 lg:gap-12">
                    {[
                      { heading: 'What you will do', items: role.responsibilities },
                      { heading: 'What we are looking for', items: role.requirements },
                    ].map((block) => (
                      <div key={block.heading}>
                        <h3 className="font-heading text-lg font-bold text-navy">
                          {block.heading}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="mt-3 block h-1 w-10 rounded-full bg-accent"
                        />
                        <ul className="mt-5 flex flex-col gap-3">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                            >
                              <Check
                                className="mt-0.5 size-4 shrink-0 text-accent"
                                strokeWidth={2.5}
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-navy px-8 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                  <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                    Nothing here that fits?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Send us your profile anyway. We would rather know good
                    people early than advertise for them later.
                  </p>
                </div>
                <Button
                  render={
                    <a
                      href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                        'General application',
                      )}`}
                    />
                  }
                  nativeButton={false}
                  size="lg"
                  className="shrink-0 bg-white px-6 text-navy hover:bg-white/90"
                >
                  Send Your Profile
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
