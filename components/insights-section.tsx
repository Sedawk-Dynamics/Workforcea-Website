import { ArrowUpRight, Newspaper } from 'lucide-react'
import { SITE } from '@/lib/site'

export function InsightsSection() {
  return (
    <section id="insights" className="bg-white px-6 pb-4 pt-20 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl border border-border bg-muted p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Insights from the Workforcea team
          </span>
          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Hiring commentary, market notes and talent strategy
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We publish what we learn from live mandates — what talent costs,
            what is scarce, and what is actually working in hiring right now.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-navy/5"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </span>
              <span>
                <span className="block font-heading text-sm font-semibold text-navy">
                  Follow Workforcea on LinkedIn
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Roles we are hiring for, and what we are seeing in the market
                </span>
              </span>
            </div>
            <ArrowUpRight
              className="size-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-navy/5"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy">
                <Newspaper className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-heading text-sm font-semibold text-navy">
                  {SITE.newsletterTitle}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Our newsletter on talent acquisition leadership
                </span>
              </span>
            </div>
            <ArrowUpRight
              className="size-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
