'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'

const DISCIPLINES = [
  'Technology Recruitment',
  'Executive Search',
  'GCC Hiring',
  'Workforce Solutions',
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-semibold uppercase tracking-wide text-navy">
              {DISCIPLINES.map((discipline) => (
                <li
                  key={discipline}
                  className="rounded-full border border-border bg-secondary px-3.5 py-1.5"
                >
                  {discipline}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Building the teams that{' '}
              <span className="text-accent">move businesses forward</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We help companies hire critical technology and leadership talent,
              build teams, and scale their workforce — across India and global
              markets.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg"
                className="bg-navy px-6 text-white hover:bg-navy-deep"
              >
                Discuss Your Hiring Need
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button
                render={<a href="#services" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-border px-6 text-navy hover:bg-secondary"
              >
                Explore Our Services
              </Button>
            </div>
          </Reveal>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-navy/10">
            <Image
              src="/images/hero-team.png"
              alt="Workforcea talent advisory team collaborating in a modern office"
              width={900}
              height={1000}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/0 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:w-72"
          >
            <p className="text-sm font-semibold text-navy">
              Senior-led on every mandate
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              You deal directly with the person running your search.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
