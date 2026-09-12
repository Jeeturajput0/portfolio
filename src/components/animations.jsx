import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fadeUp } from './motionVariants'

export function Reveal({ children, className = '', variant = fadeUp, delay = 0 }) {
  return <motion.div className={className} variants={variant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} transition={{ delay }}>{children}</motion.div>
}

export function AnimatedNumber({ value }) {
  const ref = useRef(null)
  const active = useInView(ref, { once: true, amount: 0.7 })
  const [shown, setShown] = useState(0)
  const number = Number.parseFloat(String(value).replace(/[^0-9.]/g, ''))
  const suffix = String(value).replace(/[0-9.]/g, '')
  useEffect(() => {
    if (!active || !Number.isFinite(number)) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / 900, 1)
      setShown(Math.round((1 - (1 - progress) ** 3) * number))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, number])
  return <span ref={ref}>{Number.isFinite(number) ? `${shown}${suffix}` : value}</span>
}

export function FloatingBackground() {
  const reduced = useReducedMotion()
  const particles = Array.from({ length: reduced ? 0 : 28 }, (_, index) => ({
    id: index, left: `${(index * 37) % 100}%`, top: `${(index * 61) % 100}%`, size: 2 + (index % 3), duration: 13 + (index % 9), delay: -(index % 8),
  }))
  return <div className="background-effects" aria-hidden="true">
    <motion.div className="ambient-orb ambient-orb-one" animate={reduced ? {} : { x: [0, 50, -10, 0], y: [0, 42, 18, 0], opacity: [0.28, 0.42, 0.25, 0.28] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="ambient-orb ambient-orb-two" animate={reduced ? {} : { x: [0, -45, 15, 0], y: [0, -35, 30, 0], opacity: [0.2, 0.34, 0.22, 0.2] }} transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }} />
    <div className="background-grid" />
    {particles.map((particle) => <span key={particle.id} className="star-particle" style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, animationDuration: `${particle.duration}s`, animationDelay: `${particle.delay}s` }} />)}
  </div>
}
