'use client'

import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const ROLE_GROUPS = [
  {
    title: 'Technology',
    roles: [
      'Software Engineering',
      'Cloud & DevOps',
      'Data Engineering',
      'Cybersecurity',
      'AI & Machine Learning',
      'Infrastructure & Platform',
      'QA & Automation',
    ],
  },
  {
    title: 'Product & Design',
    roles: [
      'Product Management',
      'Product & Engineering Leadership',
      'Program & Delivery Management',
      'UX & Product Design',
      'Business & Data Analysis',
    ],
  },
  {
    title: 'Leadership',
    roles: [
      'CXO',
      'VP / Director',
      'Business Heads',
      'Technology Leaders',
      'Engineering Leaders',
      'TA & HR Leadership',
    ],
  },
]

export function RolesSection() {
  return (
    <section id="roles" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Roles We Hire"
          subtitle="Specialists, not generalists"
          description="These are the roles we hire repeatedly and know well — from individual contributors through to the leadership layer above them."
        />

        <RevealGroup
          className="mt-12 grid gap-6 md:grid-cols-3"
          stagger={0.08}
        >
          {ROLE_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              tabIndex={0}
              className="brand-card group h-full rounded-2xl p-7 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <h3 className="font-heading text-2xl font-bold tracking-tight text-navy">
                {group.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-3 block h-1 w-10 origin-left rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-150"
              />
              <ul className="mt-6 flex flex-col gap-3">
                {group.roles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 text-base font-semibold text-navy/80"
                  >
                    <span
                      className="size-2 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
