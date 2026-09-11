'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const ROLE_GROUPS = [
  {
    title: 'Technology',
    roles: ['Software Engineering', 'Platform & Infrastructure', 'QA & Automation'],
  },
  {
    title: 'Product',
    roles: ['Product Management', 'Product Design & UX', 'Program & Delivery'],
  },
  {
    title: 'Data & AI',
    roles: ['Data Engineering', 'Data Science & Analytics', 'AI & Machine Learning'],
  },
  {
    title: 'Cloud & DevOps',
    roles: ['Cloud Architecture', 'DevOps & SRE', 'Automation & Tooling'],
  },
  {
    title: 'Cybersecurity',
    roles: ['Security Engineering', 'GRC & Compliance', 'Identity & Access'],
  },
  {
    title: 'Engineering',
    roles: ['Design & R&D', 'Manufacturing & Plant', 'Project & Site Leadership'],
  },
  {
    title: 'Leadership',
    roles: ['CXO & Business Heads', 'VP / Director', 'Function & Practice Heads'],
  },
  {
    title: 'Business & Specialist Roles',
    roles: ['Sales & Revenue Leadership', 'Finance & Strategy', 'HR & Talent Acquisition'],
  },
]

export function RolesSection() {
  return (
    <section id="roles" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Roles We Hire"
          subtitle="Specialists, not generalists"
          description="We stay deliberately specialised. These are the areas we hire in repeatedly, where we know the market, the talent and what good actually looks like."
        />

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {ROLE_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              tabIndex={0}
              className="brand-card group h-full rounded-2xl p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <h3 className="font-heading text-xl font-bold tracking-tight text-navy">
                {group.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-3 block h-1 w-10 origin-left rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-150"
              />
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.roles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 text-sm font-semibold text-navy/80"
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

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-border bg-navy px-8 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                Hiring for a role that is not listed here?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Tell us the brief — we will say honestly whether we are the
                right partner for it.
              </p>
            </div>
            <Button
              render={<a href="/#contact" />}
              nativeButton={false}
              size="lg"
              className="shrink-0 bg-white px-6 text-navy hover:bg-white/90"
            >
              Discuss Your Hiring Need
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
