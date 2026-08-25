'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SelectNative } from '@/components/ui/select-native'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from '@/components/ui/field'
import { Reveal } from '@/components/motion/reveal'
import { HIRING_TYPES, POSITION_COUNTS, SITE } from '@/lib/site'

const CONTACT_DETAILS = [
  { icon: MapPin, label: 'Office Address', value: SITE.address },
  {
    icon: Phone,
    label: 'Phone',
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  { icon: Clock, label: 'Working Hours', value: SITE.hours },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || '').trim(),
      hiringType: String(data.get('hiringType') || '').trim(),
      positions: String(data.get('positions') || '').trim(),
      message: String(data.get('message') || '').trim(),
      website: String(data.get('website') || '').trim(),
    }

    const nextErrors: Record<string, boolean> = {
      name: payload.name.length === 0,
      email: !EMAIL_PATTERN.test(payload.email),
      message: payload.message.length === 0,
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        toast.error('Message not sent', {
          description:
            result.error ||
            `Something went wrong. Please email us at ${SITE.email}.`,
        })
        return
      }

      form.reset()
      toast.success('Message sent', {
        description:
          'We will get back to you within one business day.',
      })
    } catch {
      toast.error('Message not sent', {
        description: `Please check your connection, or email us at ${SITE.email}.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Let&apos;s talk about your next hire
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Tell us the role, the timeline and the constraints. You will hear
            back from the person who would actually run the search — within one
            business day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-navy p-8 text-white">
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  {SITE.name}
                </h3>
                <div className="mt-8 flex flex-col gap-6">
                  {CONTACT_DETAILS.map((detail) => {
                    const Icon = detail.icon
                    const content = (
                      <div className="flex items-start gap-3.5">
                        <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-white/50">
                            {detail.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-white/90">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    )
                    return detail.href ? (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className="transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={detail.label}>{content}</div>
                    )
                  })}
                </div>
              </div>

              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white"
              >
                Follow us on LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-white p-8"
            >
              <FieldGroup>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field data-invalid={errors.name || undefined}>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jordan Smith"
                      aria-invalid={errors.name || undefined}
                    />
                    {errors.name && (
                      <FieldError>Please enter your name.</FieldError>
                    )}
                  </Field>
                  <Field data-invalid={errors.email || undefined}>
                    <FieldLabel htmlFor="email">Work Email</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={errors.email || undefined}
                    />
                    {errors.email && (
                      <FieldError>Please enter a valid email.</FieldError>
                    )}
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="company">Company</FieldLabel>
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name"
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="hiringType">Hiring Type</FieldLabel>
                    <SelectNative id="hiringType" name="hiringType" defaultValue="">
                      <option value="">Select a hiring type</option>
                      {HIRING_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </SelectNative>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="positions">
                      Number of Positions
                    </FieldLabel>
                    <SelectNative id="positions" name="positions" defaultValue="">
                      <option value="">Select a range</option>
                      {POSITION_COUNTS.map((count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ))}
                    </SelectNative>
                  </Field>
                </div>

                <Field data-invalid={errors.message || undefined}>
                  <FieldLabel htmlFor="message">
                    Tell us about your hiring need
                  </FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Role, seniority, location, timeline, and any specific requirements..."
                    aria-invalid={errors.message || undefined}
                  />
                  {errors.message && (
                    <FieldError>Please share a few details.</FieldError>
                  )}
                </Field>

                {/* Honeypot — hidden from people, tempting to bots. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-navy text-white hover:bg-navy-deep sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowUpRight data-icon="inline-end" />}
                </Button>
              </FieldGroup>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
