function PageShell({ eyebrow, title, description, children }) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="max-w-3xl space-y-5 pb-12">
        <p className="text-sm uppercase tracking-[0.4em] text-[var(--muted)]">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">{title}</h1>
        <p className="text-lg leading-8 text-[var(--muted)]">{description}</p>
      </div>
      {children}
    </main>
  )
}

export default PageShell
