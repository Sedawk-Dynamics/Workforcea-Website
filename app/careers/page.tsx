import type { Metadata } from 'next'
import { ArrowUpRight, Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/motion/reveal'
import { SITE } from '@/lib/site'

const DESCRIPTION =
  'Careers at Workforcea Talent Solutions. We have no open positions right now, but we are always glad to hear from strong talent acquisition and technology professionals.'

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

const CONTACT_URL = `${SITE.url}/#contact`

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
            </div>
          </Reveal>
        </section>

        <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-brand-tint px-8 py-14 text-center sm:px-12">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white text-accent shadow-sm ring-1 ring-navy/5">
                <Inbox className="size-7" strokeWidth={1.7} aria-hidden="true" />
              </span>

              <h2 className="mt-7 text-balance font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                No open positions right now
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                We are not actively hiring at the moment. We would still rather
                know good people early than advertise for them later — so if
                you work in talent acquisition or technology and our approach
                resonates, get in touch.
              </p>

              <div className="mt-9 flex justify-center">
                <Button
                  render={<a href={CONTACT_URL} />}
                  nativeButton={false}
                  size="lg"
                  className="px-7"
                >
                  Contact Us
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
