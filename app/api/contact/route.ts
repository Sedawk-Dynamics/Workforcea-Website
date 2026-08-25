import { NextResponse } from 'next/server'
import { HIRING_TYPES, POSITION_COUNTS, SITE } from '@/lib/site'

export const runtime = 'nodejs'

type Payload = {
  name: string
  email: string
  company: string
  hiringType: string
  positions: string
  message: string
  /** Honeypot — real users never fill this. */
  website?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function validate(body: Record<string, unknown>) {
  const data: Payload = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 160),
    hiringType: clean(body.hiringType, 60),
    positions: clean(body.positions, 20),
    message: clean(body.message, 4000),
    website: clean(body.website, 200),
  }

  const errors: Record<string, string> = {}
  if (!data.name) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Please enter a valid email.'
  }
  if (!data.message) errors.message = 'Please share a few details.'
  if (data.hiringType && !HIRING_TYPES.includes(data.hiringType)) {
    errors.hiringType = 'Please choose a valid hiring type.'
  }
  if (data.positions && !POSITION_COUNTS.includes(data.positions)) {
    errors.positions = 'Please choose a valid number of positions.'
  }

  return { data, errors }
}

function renderEnquiry(data: Payload) {
  return [
    `Name:          ${data.name}`,
    `Email:         ${data.email}`,
    `Company:       ${data.company || '—'}`,
    `Hiring type:   ${data.hiringType || '—'}`,
    `Positions:     ${data.positions || '—'}`,
    '',
    'Message:',
    data.message,
  ].join('\n')
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { data, errors } = validate(body)

  // Honeypot: accept silently so bots do not learn they were caught.
  if (data.website) return NextResponse.json({ ok: true })

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || SITE.email
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !from) {
    // Never pretend the enquiry was delivered when it was not.
    console.error(
      '[contact] RESEND_API_KEY and CONTACT_FROM_EMAIL are not configured; enquiry not delivered:\n' +
        renderEnquiry(data),
    )
    return NextResponse.json(
      {
        error:
          'The enquiry form is not connected yet. Please email us directly at ' +
          SITE.email +
          '.',
      },
      { status: 503 },
    )
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New hiring enquiry — ${data.name}${
          data.company ? ` (${data.company})` : ''
        }`,
        text: renderEnquiry(data),
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[contact] Resend rejected the message:', detail)
      return NextResponse.json(
        { error: 'We could not send your message. Please try again.' },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error('[contact] Failed to send enquiry:', error)
    return NextResponse.json(
      { error: 'We could not send your message. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
