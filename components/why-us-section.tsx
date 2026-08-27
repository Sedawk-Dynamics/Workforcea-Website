'use client'

import { UserCheck, Network, LineChart, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

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
    <section id="why-us" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Why Workforcea"
          subtitle="Four reasons clients give us the difficult roles"
        />

        <RevealGroup
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                variants={revealItem}
                tabIndex={0}
                className="brand-card group flex h-full flex-col rounded-2xl p-7 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-white text-navy shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white">
                  <Icon
                    className="size-6"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-navy">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
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
