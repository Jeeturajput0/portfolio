function SkillBar({ name, level }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-[var(--text)]">
        <span>{name}</span>
        <span className="text-[var(--muted)]">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-black/15 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-strong),#f59e0b)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default SkillBar
