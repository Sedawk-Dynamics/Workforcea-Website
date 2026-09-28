'use client'

import {
  Briefcase,
  Users,
  Network,
  LayoutGrid,
  Factory,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

type Stat = {
  icon: LucideIcon
  value: string
  label: string
}

/**
 * Only figures the site can stand behind: the founder's track record and what
 * we actually cover. No placement or client counts — the firm is new, and
 * inventing volume would undercut the boutique positioning.
 */
const STATS: Stat[] = [
  { icon: Briefcase, value: '15+', label: 'Years in Talent Acquisition' },
  { icon: Users, value: '50+', label: 'Recruiters & Teams Led' },
  { icon: Network, value: '19,000+', label: 'Professional Network' },
  { icon: LayoutGrid, value: '8', label: 'Areas of Expertise' },
  { icon: Factory, value: '5', label: 'Core Industries' },
]

function StatItem({ stat }: { stat: Stat }) {
  const Icon = stat.icon
  return (
    <li className="flex shrink-0 items-center gap-4 border-r border-border pr-8 last:border-r-0 sm:pr-10">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-tint text-accent">
        <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap">
        <span className="block font-heading text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
          {stat.value}
        </span>
        <span className="mt-0.5 block text-sm text-muted-foreground">
          {stat.label}
        </span>
      </span>
    </li>
  )
}

export function StatsTicker() {
  return (
    <section
      aria-label="Workforcea at a glance"
      className="bg-white px-6 pb-14 lg:px-8 lg:pb-16"
    >
      <Reveal>
        <div className="marquee-mask group mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-white py-6 shadow-[0_18px_50px_-34px_rgba(11,31,61,0.45)]">
          {/* Two identical copies, so translating the track by half its width
              loops with no seam. The second is hidden from assistive tech. */}
          <div className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? 'true' : undefined}
                className="flex shrink-0 items-center gap-8 pl-8 sm:gap-10 sm:pl-10"
              >
                {STATS.map((stat) => (
                  <StatItem key={stat.label} stat={stat} />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
