'use client'

import Image from 'next/image'
import { Cpu, Landmark, Factory, Wind, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'

const INDUSTRIES = [
  {
    icon: Cpu,
    title: 'Technology & Product',
    description:
      'SaaS, platform and product organizations hiring across the engineering and product stack.',
  },
  {
    icon: Landmark,
    title: 'BFSI & FinTech',
    description:
      'Banking, financial services and fintech teams where regulatory depth matters as much as technical skill.',
  },
  {
    icon: Factory,
    title: 'Engineering & Manufacturing',
    description:
      'Industrial and manufacturing businesses hiring engineering, plant and digital transformation talent.',
  },
  {
    icon: Wind,
    title: 'Renewable Energy',
    description:
      'Solar, wind and storage companies building project, engineering and leadership teams as they scale.',
  },
  {
    icon: Globe2,
    title: 'GCCs & Capability Centers',
    description:
      'Global organizations establishing and scaling capability centers in India.',
  },
]

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-navy py-24 lg:py-32"
    >
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/expertise-analytics.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy-deep/90" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Industries We Serve
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Where we know the market
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/70">
              We recruit where we have real market knowledge — who the talent
              is, what they are paid, and which companies they move between. If
              your sector is not listed here, tell us anyway; we will say
              honestly whether we are the right partner for it.
            </p>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.title}
                  variants={revealItem}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <Icon
                    className="size-5 text-accent"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {industry.description}
                  </p>
                </motion.div>
              )
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
