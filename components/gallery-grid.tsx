'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { RevealGroup, revealItem } from '@/components/motion/reveal'
import { GALLERY, GALLERY_CATEGORIES } from '@/lib/site'

const FILTERS = ['All', ...GALLERY_CATEGORIES] as const
type Filter = (typeof FILTERS)[number]

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>('All')
  // Index into the *filtered* list, so arrow keys walk what is on screen.
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items =
    filter === 'All'
      ? GALLERY
      : GALLERY.filter((item) => item.category === filter)

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null
          ? null
          : (current + delta + items.length) % items.length,
      ),
    [items.length],
  )

  // Lightbox keyboard controls, plus a scroll lock while it is open.
  useEffect(() => {
    if (openIndex === null) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [openIndex, close, step])

  const active = openIndex === null ? null : items[openIndex]

  return (
    <>
      <div
        role="group"
        aria-label="Filter gallery"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {FILTERS.map((option) => {
          const selected = filter === option
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(option)
                setOpenIndex(null)
              }}
              className={
                selected
                  ? 'rounded-full border border-navy bg-navy px-5 py-2 text-sm font-bold text-white outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50'
                  : 'rounded-full border border-border bg-white px-5 py-2 text-sm font-bold text-navy/70 outline-none transition-colors hover:border-navy/30 hover:text-navy focus-visible:ring-3 focus-visible:ring-ring/50'
              }
            >
              {option}
            </button>
          )
        })}
      </div>

      <RevealGroup
        key={filter}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {items.map((item, index) => (
          <motion.button
            key={item.src}
            variants={revealItem}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View ${item.title}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white text-left outline-none ring-1 ring-border transition-all duration-300 hover:-translate-y-1.5 hover:ring-2 hover:ring-accent focus-visible:ring-2 focus-visible:ring-accent motion-reduce:hover:translate-y-0"
          >
            <div className="relative aspect-4/3 shrink-0 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
              />
              <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-lg bg-white/90 text-navy opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="size-4" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-lg font-bold leading-snug text-navy">
                {item.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-3 block h-1 w-10 origin-left rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-150"
              />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
            className="fixed inset-0 z-100 flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery image"
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-3 focus-visible:ring-white/50"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    step(-1)
                  }}
                  aria-label="Previous image"
                  className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-3 focus-visible:ring-white/50 sm:left-6"
                >
                  <ChevronLeft className="size-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    step(1)
                  }}
                  aria-label="Next image"
                  className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-3 focus-visible:ring-white/50 sm:right-6"
                >
                  <ChevronRight className="size-6" aria-hidden="true" />
                </button>
              </>
            )}

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-16/10 w-full bg-navy">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {active.category}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-navy">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {active.caption}
                </p>
                <p className="mt-4 text-xs font-semibold text-navy/40">
                  {(openIndex ?? 0) + 1} of {items.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
