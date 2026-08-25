'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, ArrowUpRight } from 'lucide-react'
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

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Roles', href: '/#roles' },
  { label: 'How We Work', href: '/#how-we-work' },
  { label: 'Contact', href: '/#contact' },
]

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
        <Link href="/" className="flex items-center gap-2" aria-label="Workforcea home">
          <Image
            src="/images/logo.png"
            alt="Workforcea Talent Solutions"
            width={868}
            height={509}
            priority
            className="h-16 w-auto object-contain sm:h-[72px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
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
          <SheetContent side="right" className="w-[300px]">
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
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-navy"
                    >
                      {link.label}
                    </a>
                  }
                />
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
