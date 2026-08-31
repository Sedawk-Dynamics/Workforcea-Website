'use client'

import Image, { type StaticImageData } from 'next/image'
import { Cpu, Landmark, Factory, Wind, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

import technologyImg from '@/public/images/industries/technology-product.jpg'
import bfsiImg from '@/public/images/industries/bfsi-fintech.jpg'
import engineeringImg from '@/public/images/industries/engineering-manufacturing.jpg'
import renewableImg from '@/public/images/industries/renewable-energy.jpg'
import gccImg from '@/public/images/industries/gcc-capability-centers.jpg'

type Industry = {
  icon: typeof Cpu
  image: StaticImageData
  title: string
  description: string
  /** Wider tiles fill the second row so five cards align with no gaps. */
  wide?: boolean
}

const INDUSTRIES: Industry[] = [
  {
    icon: Cpu,
    image: technologyImg,
    title: 'Technology & Product',
    description:
      'SaaS, platform and product organizations hiring across the engineering and product stack.',
  },
  {
    icon: Landmark,
    image: bfsiImg,
    title: 'BFSI & FinTech',
    description:
      'Banking, financial services and fintech teams where regulatory depth matters as much as technical skill.',
  },
  {
    icon: Factory,
    image: engineeringImg,
    title: 'Engineering & Manufacturing',
    description:
      'Industrial businesses hiring engineering, plant and digital transformation talent.',
  },
  {
    icon: Wind,
    image: renewableImg,
    title: 'Renewable Energy',
    description:
      'Solar, wind and storage companies building project, engineering and leadership teams as they scale.',
    wide: true,
  },
  {
    icon: Globe2,
    image: gccImg,
    title: 'GCCs & Capability Centers',
    description:
      'Global organizations establishing and scaling capability centers in India.',
    wide: true,
  },
]

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-navy py-16 lg:py-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          align="center"
          title="Industries We Serve"
          subtitle="Where we know the market"
          description="We recruit where we have real market knowledge — who the talent is, what they are paid, and which companies they move between."
        />

        {/* Six-column track: three tiles up top, two wider ones beneath. */}
        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
          stagger={0.08}
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.article
                key={industry.title}
                variants={revealItem}
                tabIndex={0}
                className={`group relative isolate overflow-hidden rounded-2xl outline-none ring-1 ring-white/12 transition-all duration-300 hover:ring-accent/70 focus-visible:ring-2 focus-visible:ring-accent ${
                  industry.wide ? 'lg:col-span-3' : 'lg:col-span-2'
                }`}
              >
                <Image
                  src={industry.image}
                  alt=""
                  aria-hidden="true"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-500 group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
                />
                {/* Keeps the copy legible whatever photo sits behind it. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/25"
                />

                <div className="flex h-full min-h-[15rem] flex-col justify-end p-6 lg:min-h-[17rem]">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-accent group-hover:bg-accent">
                    <Icon
                      className="size-5"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {industry.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
