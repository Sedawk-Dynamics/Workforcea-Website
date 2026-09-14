'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  Crown,
  UserCheck,
  Globe2,
  Compass,
  Workflow,
  Cpu,
  Factory,
  Landmark,
  Wind,
  MapPin,
  Mail,
  Phone,
  Quote,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FOUNDER, SITE } from '@/lib/site'
import founderPhoto from '@/public/founder-image.jpeg'

const EXPERTISE_ICONS: Record<string, LucideIcon> = {
  'Technology Recruitment': Cpu,
  'Leadership Hiring': UserCheck,
  'Executive Search': Crown,
  'Talent Advisory': Compass,
  'Recruitment Operations': Workflow,
}

const SECTOR_ICONS: Record<string, LucideIcon> = {
  'Technology & Product': Cpu,
  'GCCs & Capability Centers': Globe2,
  'BFSI & FinTech': Landmark,
  'Engineering & Manufacturing': Factory,
  'Renewable Energy': Wind,
}

const TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'sectors', label: 'Sectors' },
] as const

type TabId = (typeof TABS)[number]['id']

export function FounderSection() {
  const [tab, setTab] = useState<TabId>('profile')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow-key navigation, as expected of a tablist.
  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    const last = TABS.length - 1
    let next: number | null = null
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    setTab(TABS[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-muted py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="The Founder"
          subtitle="Founder-led talent acquisition"
          description="Workforcea is built on fifteen years of hands-on talent acquisition leadership — and that experience stays on every mandate."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Digital business card */}
          <Reveal direction="right">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_70px_-38px_rgba(11,31,61,0.5)] motion-reduce:hover:translate-y-0"
            >
              <div className="relative">
                <Image
                  src={founderPhoto}
                  alt={`${FOUNDER.name}, ${FOUNDER.role} of ${FOUNDER.company}`}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  placeholder="blur"
                  className="h-[340px] w-full object-cover object-top lg:h-[400px]"
                />
                <span className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-accent text-white shadow-lg">
                  <Quote
                    className="size-6"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
              </div>

              {/* Credentials sit directly under the photo, where they read as
                  part of the portrait rather than as another list. */}
              <dl className="grid grid-cols-3 divide-x divide-white/15 bg-navy px-2 py-4">
                {FOUNDER.credentials.map((item) => (
                  <div key={item.label} className="px-2 text-center">
                    <dt className="sr-only">{item.label}</dt>
                    <dd>
                      <span className="block font-heading text-xl font-extrabold tracking-tight text-white">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-[0.65rem] font-bold uppercase leading-tight tracking-wide text-white/60">
                        {item.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border-t border-border p-6">
                <p className="font-heading text-2xl font-bold tracking-tight text-navy">
                  {FOUNDER.name}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-accent">
                  {FOUNDER.role}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {FOUNDER.company}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                  <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <MapPin
                      className="size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {FOUNDER.location}
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-navy"
                    >
                      <Mail
                        className="size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.phoneHref}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-navy"
                    >
                      <Phone
                        className="size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {SITE.phone}
                    </a>
                  </li>
                </ul>

                <a
                  href={SITE.linkedinFounder}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </Reveal>

          {/* Tabbed detail panel */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
              <div
                role="tablist"
                aria-label="About the founder"
                className="flex flex-wrap gap-2 rounded-xl bg-brand-tint p-1.5"
              >
                {TABS.map((item, index) => {
                  const active = tab === item.id
                  return (
                    <button
                      key={item.id}
                      ref={(el) => {
                        tabRefs.current[index] = el
                      }}
                      type="button"
                      role="tab"
                      id={`founder-tab-${item.id}`}
                      aria-selected={active}
                      aria-controls={`founder-panel-${item.id}`}
                      tabIndex={active ? 0 : -1}
                      onClick={() => setTab(item.id)}
                      onKeyDown={(event) => onTabKeyDown(event, index)}
                      className="relative rounded-lg px-4 py-2.5 text-sm font-semibold outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {active && (
                        <motion.span
                          layoutId="founder-tab-pill"
                          transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-0 rounded-lg bg-navy"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`relative ${active ? 'text-white' : 'text-navy/70 hover:text-navy'}`}
                      >
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-7 min-h-[17rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    role="tabpanel"
                    id={`founder-panel-${tab}`}
                    aria-labelledby={`founder-tab-${tab}`}
                    tabIndex={0}
                    className="outline-none"
                  >
                    {tab === 'profile' && (
                      <div>
                        <p className="text-pretty leading-relaxed text-muted-foreground">
                          Workforcea is founded by{' '}
                          <strong className="font-semibold text-navy">
                            {FOUNDER.name}
                          </strong>
                          , a talent acquisition leader with 15+ years across
                          technology recruitment, leadership hiring, executive
                          search and recruitment operations.
                        </p>
                        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                          That background is the foundation of the firm. It is
                          why Workforcea can tell you early whether a hiring
                          plan is realistic, what the market will cost you and
                          how a critical search should be run — and why senior
                          judgement stays on the mandate from brief to closure.
                        </p>

                        <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                          {FOUNDER.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-navy/80"
                            >
                              <Check
                                className="mt-0.5 size-4 shrink-0 text-accent"
                                strokeWidth={2.5}
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <blockquote className="relative mt-7 overflow-hidden rounded-2xl bg-navy p-6 sm:p-7">
                          <div
                            className="bg-grid pointer-events-none absolute inset-0 opacity-[0.08]"
                            aria-hidden="true"
                          />
                          <Quote
                            className="absolute -right-1 -top-1 size-16 text-white/[0.07]"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                          <p className="relative text-balance font-heading text-lg font-bold leading-[1.5] tracking-tight text-white sm:text-xl">
                            &ldquo;{FOUNDER.principle}&rdquo;
                          </p>
                          <footer className="relative mt-4 flex items-center gap-2.5 border-t border-white/15 pt-4">
                            <span
                              className="h-px w-6 bg-accent"
                              aria-hidden="true"
                            />
                            <cite className="text-xs font-bold uppercase not-italic tracking-wide text-white/70">
                              {FOUNDER.name}, {FOUNDER.role}
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    )}

                    {tab === 'expertise' && (
                      <div>
                        <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                          The disciplines behind every Workforcea mandate —
                          practised first-hand, not delegated.
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {FOUNDER.expertise.map((item, index) => {
                            const Icon = EXPERTISE_ICONS[item] ?? Compass
                            return (
                              <motion.li
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: index * 0.06,
                                  duration: 0.3,
                                }}
                                className="brand-card group flex items-center gap-3.5 rounded-xl p-4"
                              >
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                                  <Icon
                                    className="size-5"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="text-sm font-semibold text-navy">
                                  {item}
                                </span>
                              </motion.li>
                            )
                          })}
                        </ul>
                      </div>
                    )}

                    {tab === 'sectors' && (
                      <div>
                        <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                          The markets where we know the talent, the companies
                          they move between and what they are paid.
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {FOUNDER.sectors.map((item, index) => {
                            const Icon = SECTOR_ICONS[item] ?? Cpu
                            return (
                              <motion.li
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: index * 0.06,
                                  duration: 0.3,
                                }}
                                className="brand-card group flex items-center gap-3.5 rounded-xl p-4"
                              >
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                                  <Icon
                                    className="size-5"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="text-sm font-semibold text-navy">
                                  {item}
                                </span>
                              </motion.li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
