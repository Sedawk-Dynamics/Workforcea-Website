import Image from 'next/image'
// Static import: Next fingerprints the file by content, so replacing the PNG
// produces a brand-new hashed URL. No browser, CDN or optimizer cache can
// serve a stale banner, and width/height come from the file itself.
import heroBanner from '@/public/hero.png'

export function HeroSection() {
  return (
    <section id="top" className="bg-white pt-24 sm:pt-28">
      {/*
        Banner only — no overlaid copy or buttons. The <h1> is kept for search
        engines and screen readers, which cannot read text baked into an image.
      */}
      <h1 className="sr-only">
        Workforcea Talent Solutions — building capability beyond hiring.
        Specialist talent solutions for technology, leadership and growth-stage
        businesses, built on 15+ years of talent acquisition experience.
      </h1>

      <Image
        src={heroBanner}
        alt="Workforcea Talent Solutions — building capability beyond hiring"
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  )
}
