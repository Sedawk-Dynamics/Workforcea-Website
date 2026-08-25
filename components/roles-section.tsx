'use client'

import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'

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
    <section id="roles" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Roles We Hire
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Specialists, not generalists
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            These are the roles we hire repeatedly and know well — from
            individual contributors through to the leadership layer above them.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-6 md:grid-cols-3"
          stagger={0.08}
        >
          {ROLE_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              className="rounded-2xl border border-border bg-muted p-7"
            >
              <h3 className="font-heading text-lg font-semibold text-navy">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.roles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-2.5 text-sm text-foreground/75"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-accent"
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
