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
      'To help companies hire the technology and leadership talent that determines whether the business plan actually happens.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the recruitment partner technology-led businesses and Global Capability Centers call first when a role really counts.',
  },
  {
    icon: Compass,
    title: 'Our Values',
    description:
      'Senior people on every mandate, honest market advice, and long-term partnership over transactional recruitment.',
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
              subtitle="A new firm. Fifteen years of hiring experience behind it."
              description="Workforcea Talent Solutions LLP is a specialist recruitment firm for technology and leadership hiring. We work with product-led businesses, technology companies and Global Capability Centers to fill the roles that carry the most risk — and to build the teams around them."
            />

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                That experience is why we can tell you early whether a hiring
                plan is realistic, what it will cost and how long it will
                actually take — rather than letting you find out three months
                into a search.
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
