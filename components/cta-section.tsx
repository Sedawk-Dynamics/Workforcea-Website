'use client'

import { ArrowUpRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'
import { SITE } from '@/lib/site'

export function CtaSection() {
  return (
    <section className="bg-white px-6 py-14 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy px-8 py-14 sm:px-14 sm:py-16">
          <div className="bg-grid absolute inset-0 opacity-[0.08]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a critical role to fill?
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-white/70">
                Let&apos;s discuss it. Tell us the role, the timeline and the
                constraints — we will come back within one business day with a
                view on how to run it.
              </p>
            </div>

            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg"
                className="bg-white px-6 text-navy hover:bg-white/90"
              >
                Start a Conversation
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button
                render={<a href={SITE.phoneHref} />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent px-6 text-white hover:bg-white/10"
              >
                <Phone data-icon="inline-start" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
