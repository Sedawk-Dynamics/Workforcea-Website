'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/public/images/workforcea-logo-tight.png'

const HOLD_MS = 4000
const FADE_MS = 500

/**
 * Full-screen brand loader shown on a fresh page load. It sits on top of the
 * real page rather than replacing it, so content is always in the DOM for
 * crawlers, and it is rendered on the server so there is no flash of the site
 * before it appears.
 */
export function SplashScreen() {
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return

    const hold = setTimeout(() => setLeaving(true), HOLD_MS)
    const finish = setTimeout(() => setDone(true), HOLD_MS + FADE_MS)

    // Let people out early — a forced wait should never be a trap.
    const skip = () => {
      setLeaving(true)
      setTimeout(() => setDone(true), FADE_MS)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        skip()
      }
    }
    window.addEventListener('keydown', onKey)

    // Hold the page still while the loader is up, then hand scrolling back.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(hold)
      clearTimeout(finish)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [done])

  if (done) return null

  return (
    <div
      data-splash=""
      role="status"
      aria-live="polite"
      aria-label="Loading Workforcea"
      onClick={() => {
        setLeaving(true)
        setTimeout(() => setDone(true), FADE_MS)
      }}
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-8 bg-white transition-opacity duration-500 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Logo with a highlight sweeping through its silhouette. */}
      <div className="relative w-[280px] sm:w-[380px]">
        <Image
          src={logo}
          alt="Workforcea Talent Solutions"
          priority
          sizes="300px"
          className="h-auto w-full"
        />
        <span
          aria-hidden="true"
          className="shimmer-sweep absolute inset-0"
          style={{
            WebkitMaskImage: `url(${logo.src})`,
            maskImage: `url(${logo.src})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />
      </div>

      {/* Progress bar so the wait has a visible end point. */}
      <div className="relative h-0.5 w-44 overflow-hidden rounded-full bg-navy/10">
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left rounded-full bg-accent"
          style={{
            animation: `splash-progress ${HOLD_MS}ms linear forwards`,
          }}
        />
      </div>

      <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Connecting Talent, Enabling Growth
      </p>
    </div>
  )
}
