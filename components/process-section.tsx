'use client'

import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'

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
    <section id="how-we-work" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            How We Work
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            The same five steps on every mandate
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            You should always know where a search stands and what happens next.
            This is the process behind every engagement, whatever its size.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          stagger={0.08}
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={revealItem}
              className="relative flex flex-col rounded-2xl border border-border bg-white p-6"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
