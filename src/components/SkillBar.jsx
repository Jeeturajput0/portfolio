import { motion, useReducedMotion } from 'framer-motion'

function SkillBar({ name, level }) {
  const reduced = useReducedMotion()
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-[var(--text)]">
        <span>{name}</span>
        <span className="text-[var(--muted)]">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-black/15 dark:bg-white/10">
        <motion.div className="progress-shine h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-strong),#a855f7)]" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: reduced ? .01 : .9, ease: 'easeOut' }} />
      </div>
    </div>
  )
}

export default SkillBar
