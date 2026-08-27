'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/site'

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What We Do"
          subtitle="Six ways we help you hire"
          description="From a single leadership appointment to a full Global Capability Center build-out — permanent, contract and embedded models, matched to how you actually need to hire."
        />

        <RevealGroup
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.slug} variants={revealItem}>
                <Link
                  href={`/${service.slug}`}
                  className="brand-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {/* Accent rule that draws in on hover. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />

                  <span className="flex size-12 items-center justify-center rounded-xl bg-white text-navy shadow-sm transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                    <Icon
                      className="size-6"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-6 font-heading text-xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
