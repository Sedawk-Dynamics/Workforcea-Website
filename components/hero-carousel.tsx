'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import teamImg from '@/public/images/hero-team.png'
import clientImg from '@/public/about-us.jpeg'
import strategyImg from '@/public/images/about-strategy.png'
import technologyImg from '@/public/images/industries/technology-product.jpg'

type Slide = {
  src: StaticImageData
  alt: string
  eyebrow: string
  caption: string
}

const SLIDES: Slide[] = [
  {
    src: teamImg,
    alt: 'A leadership team walking through a modern office',
    eyebrow: 'Leadership Hiring',
    caption: 'The layer of leaders that turns strategy into delivery.',
  },
  {
    src: clientImg,
    alt: 'Workforcea advisors reviewing a hiring plan with a client team',
    eyebrow: 'Senior-Led Delivery',
    caption: 'We understand the business before we start the search.',
  },
  {
    src: strategyImg,
    alt: 'Business leaders reviewing talent market data on screen',
    eyebrow: 'Market Intelligence',
    caption: 'Talent availability, compensation and target-company mapping.',
  },
  {
    src: technologyImg,
    alt: 'Technology and product teams at work',
    eyebrow: 'Technology Recruitment',
    caption: 'Specialist hiring across engineering, product, data and cloud.',
  },
]

const INTERVAL_MS = 5000

export function HeroCarousel() {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  // Direction drives the slide animation: 1 forward, -1 back.
  const [direction, setDirection] = useState(1)
  const regionRef = useRef<HTMLDivElement>(null)

  const go = useCallback((delta: number) => {
    setDirection(delta)
    setIndex((current) => (current + delta + SLIDES.length) % SLIDES.length)
  }, [])

  const jumpTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    },
    [index],
  )

  // Autoplay, held while the viewer is hovering, focused inside, or has asked
  // for reduced motion — and while the tab is in the background.
  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setDirection(1)
        setIndex((current) => (current + 1) % SLIDES.length)
      }
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, reduceMotion])

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    }
  }

  const active = SLIDES[index]

  return (
    <div
      ref={regionRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Workforcea in practice"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false)
        }
      }}
      className="relative outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border bg-navy shadow-[0_30px_80px_-40px_rgba(11,31,61,0.55)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction * 40, scale: 1.02 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction * -40, scale: 1.02 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              // The first slide is above the fold on every visit.
              priority={index === 0}
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            {/* Ink at the foot of the frame so the caption always reads. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-deep/90 via-navy-deep/45 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">
                {active.eyebrow}
              </p>
              <p className="mt-2 max-w-md text-balance font-heading text-base font-bold leading-snug text-white sm:text-lg">
                {active.caption}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Live region: announces the slide without moving focus. */}
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {SLIDES.length}: {active.eyebrow}
        </p>
      </div>

      {/* Controls sit below the frame so they never cover the photography. */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {SLIDES.map((slide, slideIndex) => {
            const selected = slideIndex === index
            return (
              <button
                key={slide.eyebrow}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={slide.eyebrow}
                onClick={() => jumpTo(slideIndex)}
                className={`h-1.5 rounded-full outline-none transition-all duration-300 focus-visible:ring-3 focus-visible:ring-ring/50 ${
                  selected
                    ? 'w-8 bg-accent'
                    : 'w-3 bg-navy/20 hover:bg-navy/40'
                }`}
              />
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy outline-none transition-colors hover:border-navy/30 hover:bg-brand-tint focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy outline-none transition-colors hover:border-navy/30 hover:bg-brand-tint focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
