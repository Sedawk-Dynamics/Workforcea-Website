'use client'

import { UserCheck, Network, LineChart, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'

const REASONS = [
  {
    icon: UserCheck,
    title: 'Senior-led delivery',
    description:
      'Every mandate gets experienced talent acquisition oversight. You deal with the person running the search, not an account manager.',
  },
  {
    icon: Network,
    title: 'Specialist talent networks',
    description:
      'Deep access to technology and leadership talent pools built over fifteen years — including an 18,000-strong professional network.',
  },
  {
    icon: LineChart,
    title: 'Market intelligence',
    description:
      'Real-time understanding of talent availability, compensation and competitor hiring, so you plan against reality rather than assumptions.',
  },
  {
    icon: Gauge,
    title: 'Speed with quality',
    description:
      'A structured search and assessment process, supported by technology, that moves quickly without lowering the bar.',
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Workforcea
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Four reasons clients give us the difficult roles
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={revealItem}
                className="flex flex-col rounded-2xl border border-border bg-muted p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-white">
                  <Icon
                    className="size-5 text-navy"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-navy">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
