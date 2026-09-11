'use client'

import {
  BrainCircuit,
  LineChart,
  Crosshair,
  UserCheck,
  Handshake,
  ClipboardCheck,
  FileSignature,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

/** What a client actually walks away with — the deliverables, not the activity. */
const OUTCOMES = [
  {
    icon: BrainCircuit,
    title: 'Better talent decisions',
    description:
      'A clear, evidenced view of your options, so the hiring decision is made on substance rather than on whoever was available.',
  },
  {
    icon: LineChart,
    title: 'Talent market intelligence',
    description:
      'What talent exists, where it sits, what it costs and how long it realistically takes to hire.',
  },
  {
    icon: Crosshair,
    title: 'Target-company mapping',
    description:
      'A mapped view of the companies and teams your talent comes from, shared with you before we approach anyone.',
  },
  {
    icon: UserCheck,
    title: 'Relevant, qualified candidates',
    description:
      'A short shortlist of people who match the brief — screened for depth against the real must-haves.',
  },
  {
    icon: Handshake,
    title: 'Senior-level involvement',
    description:
      'An experienced talent acquisition leader on your mandate from brief to closure, not just at the pitch.',
  },
  {
    icon: ClipboardCheck,
    title: 'Structured candidate evaluation',
    description:
      'Every candidate assessed against the same agreed success profile, so your comparison is like for like.',
  },
  {
    icon: FileSignature,
    title: 'Offer and closure support',
    description:
      'Benchmarking, negotiation and notice-period management through to day one — the stage where offers are most often lost.',
  },
]

export function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden bg-muted py-16 lg:py-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="What You Get"
          subtitle="Not more CVs. Better talent decisions."
          description="Clients do not engage us for access to profiles. They engage us for the judgement, market understanding and structure that sit behind a hire that has to be right."
        />

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {OUTCOMES.map((outcome) => {
            const Icon = outcome.icon
            return (
              <motion.div
                key={outcome.title}
                variants={revealItem}
                tabIndex={0}
                className="brand-card group flex h-full gap-4 rounded-2xl bg-white p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm ring-1 ring-navy/5 transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-navy">
                    {outcome.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
