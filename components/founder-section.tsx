'use client'

import { Quote, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'
import { SITE } from '@/lib/site'

const CREDENTIALS = [
  {
    value: '15 Years',
    label: 'In talent acquisition, across technology and leadership hiring',
  },
  {
    value: '50+',
    label: 'Recruiters and hiring teams led and scaled',
  },
  {
    value: '18K+',
    label: 'Professional network across the talent community',
  },
  {
    value: 'US + India',
    label: 'Hiring experience across global talent markets',
  },
]

export function FounderSection() {
  return (
    <section id="founder" className="relative overflow-hidden bg-muted py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            The Founder
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Built on 15 years of talent acquisition leadership
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Workforcea is founded by Sunil Yadav, a talent acquisition leader
            with fifteen years of experience across technology recruitment,
            leadership hiring, stakeholder management and recruitment
            operations — including building and leading recruitment teams of
            fifty-plus recruiters across US, India and global markets.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_24px_70px_-35px_rgba(11,31,61,0.35)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
            <div className="grid lg:grid-cols-[0.28fr_1fr]">
              <div className="flex flex-col justify-between bg-navy px-7 py-8 text-white sm:px-10 lg:px-9 lg:py-10">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Founder&apos;s perspective
                  </p>
                  <div className="mt-8 flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                    <Quote
                      className="size-8 text-white"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p className="mt-10 max-w-[12rem] text-sm leading-relaxed text-white/65 lg:mt-0">
                  Building teams that are ready for what comes next.
                </p>
              </div>

              <div className="p-8 sm:p-12 lg:p-14">
                <blockquote className="max-w-4xl text-balance font-heading text-2xl font-semibold leading-[1.35] tracking-tight text-navy sm:text-3xl lg:text-[2.3rem]">
                  &ldquo;I spent fifteen years hiring for other companies and
                  leading their recruitment teams. Workforcea exists because the
                  hires that matter most are still handled with the least care.
                  We take the roles a business cannot afford to get wrong, and
                  we run them properly.&rdquo;
                </blockquote>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-7">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-14 border-2 border-secondary">
                      <AvatarFallback className="bg-navy font-heading text-sm font-semibold text-white">
                        SY
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-heading text-base font-semibold text-navy">
                        Sunil Yadav
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Founder &amp; CEO, {SITE.name}
                      </p>
                    </div>
                  </div>

                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Connect on LinkedIn
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {CREDENTIALS.map((item) => (
            <motion.div
              key={item.value}
              variants={revealItem}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <p className="font-heading text-2xl font-bold text-navy">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
