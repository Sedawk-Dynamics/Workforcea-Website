'use client'

import {
  UserCheck,
  Network,
  LineChart,
  ShieldCheck,
  Briefcase,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const REASONS = [
  {
    icon: UserCheck,
    title: 'Senior-led delivery',
    description:
      'Every mandate is run by an experienced talent acquisition leader. You deal with the person handling the search, not an account manager passing it down.',
  },
  {
    icon: Network,
    title: 'Specialist talent networks',
    description:
      'Direct access to technology, product and leadership talent pools built over fifteen years — including the people who are not on job boards.',
  },
  {
    icon: LineChart,
    title: 'Talent market intelligence',
    description:
      'A current read on availability, compensation and competitor hiring, so your plan is tested against the market before budgets are locked.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality over CV volume',
    description:
      'We send a short, evaluated shortlist rather than a stream of profiles. Fewer interviews, better conversations, faster decisions.',
  },
  {
    icon: Briefcase,
    title: 'Business-focused hiring',
    description:
      'We start with the business outcome the role exists to deliver, then hire against it — because hiring is a business decision, not an administrative one.',
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Why Workforcea"
          subtitle="Why clients give us the roles that matter most"
        />

        <RevealGroup
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
