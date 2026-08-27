'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  /** The large section title, e.g. "What We Do". */
  title: string
  /** The smaller descriptive line beneath it. */
  subtitle?: string
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()
  const centered = align === 'center'

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
      className={cn(
        centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className,
      )}
    >
      <motion.h2
        variants={item}
        className={cn(
          'font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          tone === 'dark' ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </motion.h2>

      <motion.span
        variants={item}
        className={cn(
          'mt-4 block h-1 w-14 rounded-full bg-accent',
          centered && 'mx-auto',
        )}
        aria-hidden="true"
      />

      {subtitle && (
        <motion.p
          variants={item}
          className={cn(
            'mt-5 text-pretty text-lg font-medium sm:text-xl',
            tone === 'dark' ? 'text-white/80' : 'text-foreground/70',
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          variants={item}
          className={cn(
            'mt-3 text-pretty text-base leading-relaxed',
            tone === 'dark' ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
