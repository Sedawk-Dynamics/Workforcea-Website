'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

type Stat = {
  /** Numeric part to count up. Omit for text-only values such as "India + Global". */
  value?: number
  suffix?: string
  /** Used instead of the counter when there is no number to animate. */
  text?: string
  label: string
}

const STATS: Stat[] = [
  { value: 15, suffix: '+', label: 'Years of Talent Acquisition Experience' },
  { value: 50, suffix: '+', label: 'Recruiters & Teams Led' },
  { value: 18, suffix: 'K+', label: 'Professional Network' },
  { text: 'India + Global', label: 'Talent Markets Covered' },
]

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    let frame = 0
    const duration = 1400
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      <span className="text-accent">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  return (
    <section
      aria-label="Workforcea at a glance"
      className="relative overflow-hidden border-y border-border bg-brand-tint py-12 lg:py-14"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />

      <motion.dl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 sm:grid-cols-4 lg:px-8"
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className={`flex flex-col-reverse px-4 text-center sm:px-6 ${
              index > 0 ? 'sm:border-l sm:border-navy/10' : ''
            }`}
          >
            <dt className="mt-2.5 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-[0.8rem]">
              {stat.label}
            </dt>
            <dd className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              {stat.text ?? (
                <Counter value={stat.value!} suffix={stat.suffix} />
              )}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  )
}
