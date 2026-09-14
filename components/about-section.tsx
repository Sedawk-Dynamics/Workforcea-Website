'use client'

import Image from 'next/image'
import { Compass, Target, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To connect businesses with critical talent and build teams that create lasting business impact.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the talent partner businesses trust when the right people matter most.',
  },
  {
    icon: Compass,
    title: 'Our Values',
    lead: 'Integrity. Expertise. Accountability. Partnership. Quality over volume.',
    description:
      'We understand before we search, advise honestly, take ownership of every mandate, and never compromise quality for numbers.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border">
                <Image   
                
                  src="/about-us.jpeg"
                  alt="Workforcea advisors reviewing a hiring plan with a client team"
                  width={800}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-[360px] w-full object-cover lg:h-[460px]"
                />
              </div>

            </div>
          </Reveal>

          <div>
            <SectionHeading
              title="About Workforcea"
              subtitle="A boutique firm. Fifteen years of hiring experience behind it."
              description="Workforcea Talent Solutions LLP is a specialist talent acquisition firm for technology and leadership hiring. We help businesses hire critical talent and build stronger teams — working India-first with product-led companies, growth-stage businesses and Global Capability Centers."
            />

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                Our strength is not the number of recruiters we have. It is
                experience, judgement, market understanding and senior
                involvement in the hiring decisions that carry the most risk.
              </p>
            </Reveal>
          </div>
        </div>

        <RevealGroup
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.article
                key={pillar.title}
                variants={revealItem}
                tabIndex={0}
                className="brand-card group flex h-full flex-col rounded-2xl p-7 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-white text-accent shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-focus-within:bg-accent group-focus-within:text-white">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-navy">
                  {pillar.title}
                </h3>
                {'lead' in pillar && (
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-accent">
                    {pillar.lead}
                  </p>
                )}
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.article>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
