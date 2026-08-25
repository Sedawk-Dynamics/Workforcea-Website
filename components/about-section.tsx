'use client'

import Image from 'next/image'
import { Compass, Target, Eye } from 'lucide-react'
import { Reveal, RevealGroup, revealItem } from '@/components/motion/reveal'
import { motion } from 'framer-motion'

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
      'To be the recruitment partner technology-led businesses and Global Capability Centers call first for the hires that matter most.',
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
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/images/about-strategy.png"
                  alt="Workforcea advisors reviewing a hiring plan with a client team"
                  width={800}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                />
              </div>
              <div className="absolute -right-5 -top-5 hidden max-w-[13rem] rounded-2xl border border-border bg-white p-5 shadow-xl sm:block">
                <p className="font-heading text-3xl font-bold text-navy">15</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Years of recruitment leadership behind a new firm
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                About Workforcea
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                A new firm. Fifteen years of hiring experience behind it.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Workforcea Talent Solutions LLP is a specialist recruitment firm
                for technology and leadership hiring. We work with product-led
                businesses, technology companies and Global Capability Centers
                to fill the roles that carry the most risk — and to build the
                teams around them.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                The company is new. The experience is not. Workforcea was
                founded by a talent acquisition leader with fifteen years spent
                hiring across technology and leadership roles, and leading
                recruitment teams of fifty-plus recruiters. That is who runs
                your mandate — and it is why we can tell you early whether a
                hiring plan is realistic, what it will cost, and how long it
                will actually take.
              </p>
            </Reveal>

            <RevealGroup
              className="mt-10 grid gap-5 sm:grid-cols-3"
              stagger={0.1}
            >
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.title}
                    variants={revealItem}
                    className="rounded-2xl border border-border bg-muted p-5"
                  >
                    <Icon className="size-5 text-accent" strokeWidth={1.75} />
                    <p className="mt-3 font-heading text-sm font-semibold text-navy">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </motion.div>
                )
              })}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
