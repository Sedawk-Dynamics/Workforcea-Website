'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/site'

/**
 * The six services, plus the two capabilities clients ask for by name but that
 * sit inside every mandate rather than being sold on their own.
 */
const EXTRA = [
  { title: 'Talent Market Intelligence', href: '/#outcomes' },
  { title: 'Structured Candidate Assessment', href: '/#how-we-work' },
]

const TILES = [
  ...SERVICES.map((service) => ({
    title: service.title,
    href: `/${service.slug}`,
  })),
  ...EXTRA,
]

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Our Areas of Expertise"
          subtitle="The right partner when the role really counts"
          description="Specialist talent solutions across technology, leadership and capability building — each one led by someone who has done the work."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {TILES.map((tile) => (
            <motion.div key={tile.title} variants={revealItem}>
              <Link
                href={tile.href}
                className="group flex h-full min-h-[11rem] flex-col justify-between rounded-2xl border border-border bg-white p-6 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-b hover:from-accent hover:to-navy hover:shadow-[0_24px_50px_-28px_rgba(11,31,61,0.55)] focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-balance font-heading text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-white">
                  {tile.title}
                </h3>

                <span className="mt-6 flex justify-end">
                  <ArrowUpRight
                    className="size-6 text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
