import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt =
  'Workforcea Talent Solutions — Building Capability Beyond Hiring'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Rendered rather than shipped as a binary, so the share card always matches
 * the live positioning and costs nothing in the repo.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0B1F3D 0%, #071630 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 48,
              borderRadius: 999,
              background: '#2563EB',
            }}
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.5px',
            }}
          >
            Workforcea
          </div>
          <div
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Talent Solutions
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-2px',
            }}
          >
            Building Capability
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#60A5FA',
              lineHeight: 1.08,
              letterSpacing: '-2px',
            }}
          >
            Beyond Hiring
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Specialist talent solutions for technology, leadership and
            growth-stage businesses.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            fontSize: 20,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          <span>15+ Years in Talent Acquisition</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
          <span>Senior-Led Delivery</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
          <span>{SITE.url.replace('https://', '')}</span>
        </div>
      </div>
    ),
    size,
  )
}
