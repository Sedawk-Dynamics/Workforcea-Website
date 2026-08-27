import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check, ChevronRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/motion/reveal'
import { SERVICES, SITE, getService } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return {
    // The root layout applies the "%s | Workforcea" template.
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${SITE.shortName}`,
      description: service.description,
      url: `/${service.slug}`,
      type: 'website',
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const Icon = service.icon
  const others = SERVICES.filter((item) => item.slug !== service.slug)

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="bg-grid absolute inset-0 opacity-[0.07]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-white/50"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <Link
                href="/#services"
                className="transition-colors hover:text-white"
              >
                Services
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <span className="text-white/80">{service.short}</span>
            </nav>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <Icon className="size-7 text-white" strokeWidth={1.6} />
                </div>
                <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-accent">
                  {service.title}
                </p>
                <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl">
                  {service.headline}
                </h1>
              </div>

              <div>
                <p className="text-pretty leading-relaxed text-white/70">
                  {service.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    render={<a href="/#contact" />}
                    nativeButton={false}
                    size="lg"
                    className="bg-white px-6 text-navy hover:bg-white/90"
                  >
                    Discuss Your Hiring Need
                    <ArrowUpRight data-icon="inline-end" />
                  </Button>
                  <Button
                    render={<a href={SITE.phoneHref} />}
                    nativeButton={false}
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent px-6 text-white hover:bg-white/10"
                  >
                    <Phone data-icon="inline-start" />
                    Call Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Who it&apos;s for
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy">
                  Is this the right engagement for you?
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.whoItsFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-muted p-5"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm leading-relaxed text-foreground/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What we solve */}
        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                What we solve
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                The problems this work exists to fix
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {service.whatWeSolve.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-white p-7">
                    <p className="font-mono text-xs font-semibold text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                How we work
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                A process you can see into
              </h2>
            </Reveal>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
              {service.howWeWork.map((step, index) => {
                const [label, ...rest] = step.split(':')
                return (
                  <li key={step} className="bg-white p-6">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 font-heading text-sm font-semibold text-navy">
                      {label}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {rest.join(':').trim()}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* Roles covered + engagement */}
        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Roles covered
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy">
                  What we hire under this practice
                </h2>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {service.rolesCovered.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground/75"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Engagement model
                </span>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy">
                  How we can work together
                </h2>
                <div className="mt-8 flex flex-col gap-4">
                  {service.engagement.map((model) => (
                    <div
                      key={model.title}
                      className="rounded-2xl border border-border bg-white p-6"
                    >
                      <h3 className="font-heading text-base font-semibold text-navy">
                        {model.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Workforcea */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Why Workforcea
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Why clients bring this work to us
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {service.whyWorkforcea.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-muted p-6"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    strokeWidth={2.5}
                  />
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-xl font-semibold text-navy">
              Other services
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {others.map((item) => {
                const OtherIcon = item.icon
                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-navy/5"
                  >
                    <OtherIcon
                      className="size-5 text-navy"
                      strokeWidth={1.75}
                    />
                    <span className="mt-4 font-heading text-sm font-semibold text-navy">
                      {item.short}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      View
                      <ArrowUpRight className="size-3" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy px-8 py-14 sm:px-14 sm:py-16">
            <div className="bg-grid absolute inset-0 opacity-[0.08]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Have a mandate in {service.short}?
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-white/70">
                  Send us the brief and we will come back with a view on how to
                  run it — including whether we think we are the right partner
                  for it.
                </p>
              </div>
              <Button
                render={<a href="/#contact" />}
                nativeButton={false}
                size="lg"
                className="shrink-0 bg-white px-6 text-navy hover:bg-white/90"
              >
                Start a Conversation
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
