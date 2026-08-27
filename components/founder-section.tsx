'use client'

import Image from 'next/image'
import { Quote, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/site'

const HIGHLIGHTS = [
  'Technology recruitment & executive search',
  'Built and led recruitment teams of 50+',
  'Stakeholder management & recruitment operations',
  'Hiring across US, India and global markets',
]

export function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-muted py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="The Founder"
          subtitle="Built on 15 years of talent acquisition leadership"
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left: portrait + identity */}
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_70px_-38px_rgba(11,31,61,0.5)]">
                <Image
                  src="/images/founder.jpg"
                  alt="Sunil Yadav, Founder and CEO of Workforcea Talent Solutions LLP"
                  width={800}
                  height={900}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-[380px] w-full object-cover object-top lg:h-[460px]"
                />
                <div className="border-t border-border p-6">
                  <p className="font-heading text-2xl font-bold tracking-tight text-navy">
                    Sunil Yadav
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-accent">
                    Founder &amp; CEO
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {SITE.name}
                  </p>

                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
                  >
                    Connect on LinkedIn
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -right-4 -top-4 flex size-16 items-center justify-center rounded-2xl bg-accent text-white shadow-lg"
              >
                <Quote className="size-7" strokeWidth={1.75} />
              </motion.span>
            </div>
          </Reveal>

          {/* Right: story, quote and highlights */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Workforcea is founded by{' '}
                <strong className="font-semibold text-navy">Sunil Yadav</strong>,
                a talent acquisition leader with fifteen years of experience
                across technology recruitment, leadership hiring, stakeholder
                management and recruitment operations — including building and
                leading recruitment teams of fifty-plus recruiters across US,
                India and global markets.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <blockquote className="mt-8 rounded-3xl border-l-4 border-accent bg-white p-7 shadow-sm sm:p-8">
                <p className="text-balance font-heading text-xl font-semibold leading-[1.45] tracking-tight text-navy sm:text-2xl">
                  &ldquo;I spent fifteen years hiring for other companies and
                  leading their recruitment teams. Workforcea exists because the
                  hires that matter most are still handled with the least care.
                  We take the roles a business cannot afford to get wrong, and we
                  run them properly.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <RevealGroup
              className="mt-8 grid gap-4 sm:grid-cols-2"
              stagger={0.08}
            >
              {HIGHLIGHTS.map((highlight) => (
                <motion.div
                  key={highlight}
                  variants={revealItem}
                  className="brand-card flex items-start gap-3 rounded-xl p-4"
                >
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold leading-snug text-navy/80">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
