'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { SERVICES } from '@/lib/site'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services', hasDropdown: true },
  { label: 'Industries', href: '/#industries' },
  { label: 'Roles', href: '/#roles' },
  { label: 'How We Work', href: '/#how-we-work' },
  { label: 'Contact', href: '/#contact' },
]

function ServicesDropdown({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  function show() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  // Small delay so the pointer can travel from the trigger into the panel.
  function hide() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node)) {
          setOpen(false)
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false)
      }}
    >
      <Link
        href="/#services"
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-navy"
      >
        Services
        <ChevronDown
          className={cn(
            'size-3.5 transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3',
              !isScrolled && 'drop-shadow-xl',
            )}
          >
            <ul className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-xl">
              {SERVICES.map((service) => {
                const Icon = service.icon
                return (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-tint"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                        <Icon
                          className="size-4"
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm font-semibold text-navy">
                        {service.short}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Workforcea home"
        >
          <Image
            src="/images/logo.png"
            alt="Workforcea Talent Solutions"
            width={868}
            height={509}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <ServicesDropdown key={link.href} isScrolled={isScrolled} />
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<a href="/#contact" />}
            nativeButton={false}
            className="bg-navy text-white hover:bg-navy-deep"
          >
            Start Hiring
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary lg:hidden"
              >
                <Menu aria-hidden="true" />
              </button>
            }
          />
          <SheetContent side="right" className="w-[300px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/images/logo.png"
                  alt="Workforcea Talent Solutions"
                  width={868}
                  height={509}
                  className="h-12 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-6">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-navy"
                      >
                        {link.label}
                      </a>
                    }
                  />

                  {link.hasDropdown && (
                    <ul className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                      {SERVICES.map((service) => (
                        <li key={service.slug}>
                          <SheetClose
                            nativeButton={false}
                            render={
                              <Link
                                href={`/${service.slug}`}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                              >
                                {service.short}
                              </Link>
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    render={<a href="/#contact" />}
                    nativeButton={false}
                    className="mt-3 bg-navy text-white hover:bg-navy-deep"
                  >
                    Discuss Your Hiring Need
                    <ArrowUpRight data-icon="inline-end" />
                  </Button>
                }
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
