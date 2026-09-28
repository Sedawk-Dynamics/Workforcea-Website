'use client'

import Image, { type StaticImageData } from 'next/image'
import {
  Search,
  Map,
  Handshake,
  ClipboardCheck,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import discoveryImg from '@/public/about-us.jpeg'
import strategyImg from '@/public/images/about-strategy.png'
import teamImg from '@/public/images/hero-team.png'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

type Step = {
  title: string
  icon: LucideIcon
  description: string
  image: StaticImageData
  /** Which part of the frame survives the circular crop. */
  focus: string
  alt: string
}

const STEPS: Step[] = [
  {
    title: 'Understand',
    icon: Search,
    image: discoveryImg,
    focus: '18% 45%',
    alt: 'A team working through requirements at a whiteboard',
    description:
      'We start with the business — the outcome the role has to deliver, the team around it and what success looks like in year one. Not just a job description.',
  },
  {
    title: 'Map',
    icon: Map,
    image: strategyImg,
    focus: '50% 50%',
    alt: 'Business leaders reviewing talent market data',
    description:
      'We map the relevant talent market and the target companies, so you can see where the talent sits and what it costs before anyone is approached.',
  },
  {
    title: 'Engage',
    icon: Handshake,
    image: teamImg,
    focus: '42% 45%',
    alt: 'Two professionals in conversation in an office',
    description:
      'Senior-led, considered outreach that can articulate the opportunity properly — including to the people who were not looking for a move.',
  },
  {
    title: 'Assess',
    icon: ClipboardCheck,
    image: discoveryImg,
    focus: '52% 42%',
    alt: 'Colleagues evaluating work together on screen',
    description:
      'Structured evaluation against the agreed success profile, so every profile you see has been through the same assessment and the comparison is real.',
  },
  {
    title: 'Deliver',
    icon: Trophy,
    image: teamImg,
    focus: '72% 45%',
    alt: 'A leadership team walking through the office',
    description:
      'We manage interviews, offer, negotiation, notice period and onboarding — the closure stages where good hires are most often lost.',
  },
]

export function ProcessSection() {
  const reduceMotion = useReducedMotion()

  // The rail draws itself in as the section arrives, which reads as progress
  // through the process rather than as five unconnected cards.
  const draw = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  }
  const drawVertical = {
    hidden: { scaleY: reduceMotion ? 1 : 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-muted py-16 lg:py-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="The same five steps on every mandate"
          description="We are involved in understanding your business and evaluating talent — not simply forwarding profiles. You always know where a search stands and what happens next."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-16"
        >
          {/* Rail: vertical through the nodes on small screens, horizontal
              across them from lg up. Sits behind the nodes. */}
          <span
            aria-hidden="true"
            className="absolute left-12 top-6 h-[calc(100%-3rem)] w-0.5 -translate-x-1/2 rounded-full bg-navy/10 lg:left-0 lg:top-14 lg:h-0.5 lg:w-full lg:translate-x-0 lg:-translate-y-1/2"
          />
          <motion.span
            aria-hidden="true"
            variants={drawVertical}
            className="absolute left-12 top-6 h-[calc(100%-3rem)] w-0.5 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-accent to-accent/20 lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            variants={draw}
            className="absolute left-0 top-14 hidden h-0.5 w-full origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-accent via-accent to-accent/20 lg:block"
          />

          <RevealGroup
            className="relative grid gap-10 lg:grid-cols-5 lg:gap-6"
            stagger={0.12}
          >
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  variants={revealItem}
                  tabIndex={0}
                  className="group flex gap-5 outline-none lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  {/* Node: a photograph rather than a plain badge. */}
                  <span className="relative z-10 size-24 shrink-0 lg:size-28">
                    <span className="block size-full overflow-hidden rounded-full ring-4 ring-white shadow-[0_14px_34px_-16px_rgba(11,31,61,0.55)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:ring-accent group-focus-visible:ring-accent motion-reduce:group-hover:translate-y-0">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        placeholder="blur"
                        sizes="112px"
                        style={{ objectPosition: step.focus }}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                      />
                      {/* A wash of navy keeps the circles reading as one set
                          despite coming from different photographs. */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-navy/25 transition-colors duration-300 group-hover:bg-navy/5"
                      />
                    </span>

                    <span className="absolute -left-1 -top-1 flex size-7 items-center justify-center rounded-full bg-navy font-heading text-[0.65rem] font-extrabold text-white ring-2 ring-muted lg:-left-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="absolute -bottom-1 -right-1 flex size-9 items-center justify-center rounded-full bg-white text-accent shadow-md ring-1 ring-navy/5 transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white lg:-right-2">
                      <Icon
                        className="size-5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                  </span>

                  <div className="lg:mt-6">
                    <h3 className="font-heading text-lg font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground lg:mx-auto lg:max-w-60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </RevealGroup>
        </motion.div>
      </div>
    </section>
  )
}
