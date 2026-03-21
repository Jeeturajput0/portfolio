import { ArrowUpRight, Github } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur-2xl">
      <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.65),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(30,41,59,0.74))] p-6">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.1),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />
        <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-white/65">{project.category}</span>
          <p className="max-w-[14rem] text-lg font-medium">{project.image}</p>
          <div className="flex flex-wrap gap-2 text-xs text-white/70">
            {project.tech.map((item) => (
              <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--text)]">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--text)] transition hover:-translate-y-1 hover:bg-white/10"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-1"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
