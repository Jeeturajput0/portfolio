function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-[var(--muted)] md:text-lg">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
