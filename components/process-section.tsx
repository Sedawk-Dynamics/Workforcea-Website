'use client'

import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    title: 'Understand',
    description:
      'We start with the business — the outcome the role has to deliver, the team around it and what success looks like in year one. Not just a job description.',
  },
  {
    title: 'Map',
    description:
      'We map the relevant talent market and the target companies, so you can see where the talent sits and what it costs before anyone is approached.',
  },
  {
    title: 'Engage',
    description:
      'Senior-led, considered outreach that can articulate the opportunity properly — including to the people who were not looking for a move.',
  },
  {
    title: 'Assess',
    description:
      'Structured evaluation against the agreed success profile, so every profile you see has been through the same assessment and the comparison is real.',
  },
  {
    title: 'Deliver',
    description:
      'We manage interviews, offer, negotiation, notice period and onboarding — the closure stages where good hires are most often lost.',
  },
]

export function ProcessSection() {
  return (
    <section id="how-we-work" className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="The same five steps on every mandate"
          description="We are involved in understanding your business and evaluating talent — not simply forwarding profiles. You always know where a search stands and what happens next."
        />

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          stagger={0.08}
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={revealItem}
              tabIndex={0}
              className="brand-card group relative flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white font-heading text-base font-extrabold text-accent shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
