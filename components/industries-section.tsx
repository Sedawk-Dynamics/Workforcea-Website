'use client'

import Image from 'next/image'
import { Cpu, Landmark, Factory, Wind, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

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
      'Industrial businesses hiring engineering, plant and digital transformation talent.',
  },
  {
    icon: Wind,
    title: 'Renewable Energy',
    description:
      'Solar, wind and storage companies building project, engineering and leadership teams.',
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
      className="relative overflow-hidden bg-navy py-16 lg:py-20"
    >
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/expertise-analytics.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-deep" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          align="center"
          title="Industries We Serve"
          subtitle="Where we know the market"
          description="We recruit where we have real market knowledge — who the talent is, what they are paid, and which companies they move between."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          stagger={0.08}
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.article
                key={industry.title}
                variants={revealItem}
                tabIndex={0}
                className="group flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.06] p-6 outline-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:bg-white/[0.11] focus-visible:border-accent/60 focus-visible:bg-white/[0.11] motion-reduce:hover:translate-y-0"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white">
                  <Icon
                    className="size-5"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold leading-snug text-white">
                  {industry.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/65">
                  {industry.description}
                </p>
              </motion.article>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
