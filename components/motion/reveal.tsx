'use client'

import { useMemo } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

const distanceByDirection = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -28 },
  right: { y: 0, x: 28 },
  none: { y: 0, x: 0 },
}

export function Reveal({
  children,
  delay = 0,
  className,
  direction = 'up',
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  const variants: Variants = useMemo(() => {
    const offset = reduceMotion
      ? distanceByDirection.none
      : distanceByDirection[direction]

    return {
      hidden: { opacity: 0, x: offset.x, y: offset.y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: reduceMotion ? 0 : 0.6,
          delay: reduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }
  }, [direction, delay, reduceMotion])

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduceMotion = useReducedMotion()

  const container: Variants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: reduceMotion ? 0 : stagger },
      },
    }),
    [stagger, reduceMotion],
  )

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}
