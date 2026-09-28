'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Boxes,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Factory,
  Crown,
  Briefcase,
  Plus,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

type RoleGroup = {
  title: string
  icon: LucideIcon
  roles: string[]
}

const ROLE_GROUPS: RoleGroup[] = [
  {
    title: 'Technology',
    icon: Code2,
    roles: [
      'Software Engineering',
      'Platform & Infrastructure',
      'QA & Automation',
    ],
  },
  {
    title: 'Product',
    icon: Boxes,
    roles: ['Product Management', 'Product Design & UX', 'Program & Delivery'],
  },
  {
    title: 'Data & AI',
    icon: BrainCircuit,
    roles: [
      'Data Engineering',
      'Data Science & Analytics',
      'AI & Machine Learning',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    roles: ['Cloud Architecture', 'DevOps & SRE', 'Automation & Tooling'],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    roles: ['Security Engineering', 'GRC & Compliance', 'Identity & Access'],
  },
  {
    title: 'Engineering',
    icon: Factory,
    roles: [
      'Design & R&D',
      'Manufacturing & Plant',
      'Project & Site Leadership',
    ],
  },
  {
    title: 'Leadership',
    icon: Crown,
    roles: ['CXO & Business Heads', 'VP / Director', 'Function & Practice Heads'],
  },
  {
    title: 'Business & Specialist Roles',
    icon: Briefcase,
    roles: [
      'Sales & Revenue Leadership',
      'Finance & Strategy',
      'HR & Talent Acquisition',
    ],
  },
]

function FlipCard({ group }: { group: RoleGroup }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = group.icon

  return (
    <div className="flip-scene h-60">
      {/*
        One button drives the card: hover and focus flip it on desktop, and a
        tap toggles it on touch, where there is no hover. aria-expanded plus a
        real list on the back keeps it readable to assistive tech.
      */}
      <button
        type="button"
        aria-expanded={flipped}
        aria-label={`${group.title} roles`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        onClick={() => setFlipped((open) => !open)}
        className="group h-full w-full rounded-2xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-4 focus-visible:ring-offset-muted"
      >
        <div className="flip-inner" data-flipped={flipped}>
          {/* Front: the discipline, nothing else. */}
          <div className="flip-face flip-face-front flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-[0_14px_34px_-26px_rgba(11,31,61,0.5)]">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-accent">
              <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-balance font-heading text-xl font-bold leading-snug tracking-tight text-navy">
                {group.title}
              </span>
              <span
                aria-hidden="true"
                className="mt-3 block h-1 w-10 rounded-full bg-accent"
              />
            </span>

            <span className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-navy/40">
              {group.roles.length} focus areas
              <Plus className="size-4 text-accent" aria-hidden="true" />
            </span>
          </div>

          {/* Back: the roles themselves. */}
          <div className="flip-face flip-face-back flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-deep p-6 shadow-[0_22px_50px_-28px_rgba(11,31,61,0.7)]">
            <span
              className="bg-grid pointer-events-none absolute inset-0 opacity-[0.08]"
              aria-hidden="true"
            />
            <span className="relative block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">
              {group.title}
            </span>
            <ul className="relative mt-4 flex flex-col gap-3">
              {group.roles.map((role) => (
                <li
                  key={role}
                  className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-white"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </button>
    </div>
  )
}

export function RolesSection() {
  return (
    <section id="roles" className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Roles We Hire"
          subtitle="Specialists, not generalists"
          description="We stay deliberately specialised. Hover or tap a card to see the roles we hire in each area."
        />

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {ROLE_GROUPS.map((group) => (
            <motion.div key={group.title} variants={revealItem}>
              <FlipCard group={group} />
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
