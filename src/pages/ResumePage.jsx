import { Download } from 'lucide-react'
import PageShell from '../components/PageShell'
import { timeline } from '../data/portfolioData'

function TimelineGroup({ title, items }) {
  return (
    <section className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">{title}</p>
      </div>
      <div className="relative mt-8 space-y-8 before:absolute before:left-[8px] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-white/15">
        {items.map((item) => (
          <article key={`${title}-${item.title}`} className="relative pl-10">
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] shadow-[0_0_0_6px_rgba(255,255,255,0.06)]" />
            <p className="text-sm font-medium text-[var(--accent)]">{item.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">{item.title}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{item.place}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ResumePage() {
  return (
    <PageShell
      eyebrow="Resume"
      title="A clean timeline for work, education, and credentials"
      description="Structured like a professional profile rather than a plain dump. Replace entries from the shared portfolio data file."
    >
      <div className="mb-8 flex flex-wrap gap-4">
        <a
          href="/Arjun-Rao-Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 text-sm font-semibold text-white"
        >
          Download Resume
          <Download size={18} />
        </a>
      </div>
      <div className="grid gap-6">
        <TimelineGroup title="Work Experience" items={timeline.experience} />
        <TimelineGroup title="Education" items={timeline.education} />
        <TimelineGroup title="Certifications" items={timeline.certifications} />
      </div>
    </PageShell>
  )
}

export default ResumePage
