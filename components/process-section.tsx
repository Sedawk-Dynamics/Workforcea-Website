'use client'

import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  {
    title: 'Understand',
    description:
      'We understand the business, the role, the team and the hiring objective — before we write a single search string.',
  },
  {
    title: 'Map',
    description:
      'We map the relevant talent market and identify the right talent pools, including the people who are not actively looking.',
  },
  {
    title: 'Engage',
    description:
      'We approach, assess and engage candidates through a structured process, so every profile you see has been evaluated the same way.',
  },
  {
    title: 'Deliver',
    description:
      'We manage the process through interviews, offer, closure and onboarding — including the notice period, where most offers are lost.',
  },
  {
    title: 'Build',
    description:
      'For ongoing requirements, we help you build scalable hiring capability that keeps working after the mandate closes.',
  },
]

export function ProcessSection() {
  return (
    <section id="how-we-work" className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="The same five steps on every mandate"
          description="You should always know where a search stands and what happens next. This is the process behind every engagement, whatever its size."
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
