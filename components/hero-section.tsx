import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroCarousel } from '@/components/hero-carousel'

/** Read in the first few seconds, so it has to say what we actually do. */
const PROOF = [
  '15+ Years in Talent Acquisition',
  'Technology & Leadership Hiring',
  'Senior-Led Delivery',
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Copy left, carousel right — vertically centred against each other. */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              People. Purpose. Performance.
            </p>

            <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold tracking-tight text-navy sm:text-5xl xl:text-6xl">
              Building Capability{' '}
              <span className="text-accent">Beyond Hiring</span>
            </h1>

            <p className="mt-5 max-w-xl text-balance text-lg font-semibold leading-relaxed text-navy/75 sm:text-xl">
              Specialist talent solutions for technology, leadership and
              growth-stage businesses.
            </p>

            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              With 15+ years of Talent Acquisition experience, we help
              businesses hire critical talent and build stronger teams. Every
              mandate is led by that experience — not handed to a database
              search.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg"
                className="px-6"
              >
                Discuss Your Hiring Need
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button
                render={<a href="#services" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="px-6"
              >
                Explore Our Services
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>

            {/* Proof ticker. The track carries two identical copies of the
                list, so the -50% loop is seamless; the second copy is hidden
                from assistive tech, which reads the first. */}
            <div className="marquee-mask group mt-9 overflow-hidden">
              <div className="marquee-track flex w-max items-center gap-3 group-hover:[animation-play-state:paused]">
                {[0, 1].map((copy) => (
                  <ul
                    key={copy}
                    aria-hidden={copy === 1 ? 'true' : undefined}
                    className="flex shrink-0 items-center gap-3 pr-3"
                  >
                    {PROOF.map((item) => (
                      <li
                        key={item}
                        className="shrink-0 whitespace-nowrap rounded-full border border-border bg-brand-tint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-navy/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>
  )
}
