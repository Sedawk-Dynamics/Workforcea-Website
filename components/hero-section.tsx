import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="top" className="bg-white pt-20 sm:pt-24">
      {/*
        Banner only — no overlaid copy or buttons. The <h1> is kept for search
        engines and screen readers, which cannot read text baked into an image.
      */}
      <h1 className="sr-only">
        Workforcea Talent Solutions — building the teams that move businesses
        forward. Technology recruitment, executive search, GCC hiring and
        workforce solutions.
      </h1>

      <Image
        src="/hero-banner-image.png"
        alt="Workforcea Talent Solutions — connecting talent, enabling growth"
        width={1107}
        height={652}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  )
}
