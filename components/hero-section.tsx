import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
// Static import: Next fingerprints the file by content, so replacing the PNG
// produces a brand-new hashed URL. No browser, CDN or optimizer cache can
// serve a stale banner, and width/height come from the file itself.
import heroBanner from '@/public/images/workforcea-banner.png'

/** Read in the first few seconds, so it has to say what we actually do. */
const PROOF = [
  '15+ Years in Talent Acquisition',
  'Technology & Leadership Hiring',
  'Senior-Led Delivery',
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-24 sm:pt-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Specialist Talent Acquisition
          </p>

          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Building Capability Beyond Hiring
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg font-semibold leading-relaxed text-navy/75 sm:text-xl">
            Specialist talent solutions for technology, leadership and
            growth-stage businesses.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Workforcea helps businesses hire critical talent and build stronger
            teams, drawing on 15+ years of talent acquisition experience across
            technology recruitment, leadership hiring and recruitment
            operations. Every mandate is led by that experience — not handed to
            a database search.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {PROOF.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-brand-tint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-navy/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border">
          <Image
            src={heroBanner}
            alt="Workforcea Talent Solutions — specialist technology and leadership hiring"
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
