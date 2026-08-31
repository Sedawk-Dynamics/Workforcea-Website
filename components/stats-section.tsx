'use client'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Users, Network, Globe2, MapPin } from 'lucide-react'
import { UsaFlag } from '@/components/flags'

type Item = {
  key: string
  icon: ReactNode
  /** Counts up when set; otherwise `heading` is shown as-is. */
  value?: number
  suffix?: string
  heading?: string
  eyebrow?: string
  label?: string
  description: string
  /** The middle card is raised and outlined. */
  featured?: boolean
}

const ITEMS: Item[] = [
  {
    key: 'recruiters',
    icon: <Users className="size-7" strokeWidth={1.7} aria-hidden="true" />,
    value: 50,
    suffix: '+',
    label: 'Recruiters & Teams Led',
    description:
      'Experienced professionals driving successful hiring outcomes.',
  },
  {
    key: 'network',
    icon: <Network className="size-7" strokeWidth={1.7} aria-hidden="true" />,
    value: 18,
    suffix: 'K+',
    label: 'Professional Network',
    description: 'A vast network of skilled talent across industries and functions.',
  },
  {
    key: 'focus',
    icon: (
      <span className="relative">
        <Globe2 className="size-8" strokeWidth={1.6} aria-hidden="true" />
        <MapPin
          className="absolute -bottom-0.5 -right-1 size-4 fill-accent text-accent"
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    ),
    eyebrow: 'Our Focus',
    heading: 'USA + India',
    description: 'Uniting opportunities and delivering exceptional talent across borders.',
    featured: true,
  },
  {
    key: 'usa',
    icon: <UsaFlag className="size-9" />,
    heading: 'USA',
    description:
      'Extensive network across the USA connecting top talent with leading companies.',
  },
]

// useLayoutEffect on the client, useEffect on the server (where it is a no-op).
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  // Server-render the real figure so crawlers and no-JS visitors never see "0",
  // then drop to zero before first paint so the count-up still reads correctly.
  const [display, setDisplay] = useState(value)
  useIsoLayoutEffect(() => {
    if (!reduceMotion) setDisplay(0)
  }, [reduceMotion])

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }
    let frame = 0
    const duration = 1400
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round((1 - Math.pow(1 - progress, 4)) * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-accent">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  return (
    <section
      aria-label="Workforcea at a glance"
      className="relative overflow-hidden bg-white px-6 py-12 lg:px-8 lg:py-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <motion.dl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-y-8 rounded-3xl border border-border bg-brand-tint p-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-y-0 lg:p-8"
      >
        {ITEMS.map((item, index) => (
          <motion.div
            key={item.key}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className={
              item.featured
                ? 'flex flex-col items-center rounded-2xl border-2 border-accent/60 bg-white px-5 py-7 text-center shadow-[0_18px_40px_-24px_rgba(11,31,61,0.45)] lg:-my-4'
                : `flex flex-col items-center px-5 py-4 text-center ${
                    index > 0 ? 'lg:border-l lg:border-navy/10' : ''
                  }`
            }
          >
            {/* Icon badge */}
            <span
              className={`flex items-center justify-center rounded-full ${
                item.featured
                  ? 'size-16 bg-accent/10 text-accent'
                  : 'size-14 bg-white text-accent shadow-sm ring-1 ring-navy/5'
              }`}
            >
              {item.icon}
            </span>

            <dd className="order-none mt-5 flex flex-col items-center">
              {item.eyebrow && (
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {item.eyebrow}
                </span>
              )}

              {item.value !== undefined ? (
                <span className="font-heading text-4xl font-extrabold tracking-tight text-navy lg:text-5xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </span>
              ) : (
                <span
                  className={`font-heading font-extrabold uppercase tracking-tight text-navy ${
                    item.featured
                      ? 'mt-2 text-xl leading-tight lg:text-2xl'
                      : 'text-2xl lg:text-3xl'
                  }`}
                >
                  {item.heading}
                </span>
              )}
            </dd>

            {item.label && (
              <dt className="mt-2 text-xs font-bold uppercase leading-snug tracking-wide text-navy/75 lg:text-[0.8rem]">
                {item.label}
              </dt>
            )}

            {/* Rule with a dot, as in the reference layout. */}
            <span
              aria-hidden="true"
              className="relative mt-4 block h-px w-16 bg-navy/15"
            >
              <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </span>

            <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  )
}
