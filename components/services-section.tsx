'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem, Reveal } from '@/components/motion/reveal'
import { SERVICES } from '@/lib/site'

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Six ways we help you hire
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            From a single leadership appointment to a full Global Capability
            Center build-out — permanent, contract and embedded models, matched
            to how you actually need to hire.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                variants={revealItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href={`/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-navy/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-navy/5">
                    <Icon className="size-6 text-navy" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
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
