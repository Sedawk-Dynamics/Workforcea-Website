'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'

type Stat = {
  /** Numeric part to count up. Omit for text-only values such as "India + Global". */
  value?: number
  prefix?: string
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

function Counter({ value, prefix, suffix }: Omit<Stat, 'label'>) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (value === undefined || !isInView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    let frame = 0
    const duration = 900
    const start = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, reduceMotion])

  return (
    <span ref={ref}>
      {prefix}
      {value === undefined ? null : display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section
      aria-label="Workforcea at a glance"
      className="border-y border-border bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-3xl font-bold text-navy sm:text-4xl">
                    {stat.text ? (
                      stat.text
                    ) : (
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-2 block text-xs leading-snug text-muted-foreground sm:text-sm"
                  >
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
