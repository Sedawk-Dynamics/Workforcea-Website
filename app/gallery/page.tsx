import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/motion/reveal'
import { GalleryGrid } from '@/components/gallery-grid'
import { SITE } from '@/lib/site'

const DESCRIPTION =
  'A look at how Workforcea works — the team behind the firm, the way we run a search, and the markets where we know the talent.'

export const metadata: Metadata = {
  // The root layout applies the "%s | Workforcea" template.
  title: 'Gallery',
  description: DESCRIPTION,
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: `Gallery | ${SITE.shortName}`,
    description: DESCRIPTION,
    url: '/gallery',
    type: 'website',
  },
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-navy px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
          <Reveal>
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Gallery
              </p>
              <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Inside Workforcea
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-white/70">
                {DESCRIPTION}
              </p>
            </div>
          </Reveal>
        </section>

        <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <GalleryGrid />

            <Reveal delay={0.1}>
              <div className="mt-14 flex flex-col items-center gap-5 rounded-2xl border border-border bg-brand-tint px-8 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                  <p className="font-heading text-xl font-bold text-navy sm:text-2xl">
                    Have a role you can&apos;t afford to get wrong?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Tell us what you are trying to hire, the business context
                    and your timeline. We&apos;ll tell you how we would
                    approach it.
                  </p>
                </div>
                <Button
                  render={<a href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="shrink-0 px-6"
                >
                  Discuss Your Hiring Need
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
