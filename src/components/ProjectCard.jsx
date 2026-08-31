import { ArrowUpRight, Code2, Github, Globe } from 'lucide-react'

function ProjectCard({ project }) {
  const isImageUrl =
    typeof project.image === 'string' &&
    (project.image.startsWith('http://') ||
      project.image.startsWith('https://') ||
      project.image.startsWith('/') ||
      project.image.startsWith('data:') ||
      /\.(png|jpe?g|svg|webp|gif)$/i.test(project.image))

  const hasDemo = project.demo && project.demo !== '#'

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] flex flex-col justify-between">
      <div>
        {/* Website Preview Container */}
        <div className="relative h-60 w-full overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.35),transparent_60%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.85))] p-5">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

          {isImageUrl ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} website preview`}
                className="h-full w-full object-cover object-top rounded-xl border border-white/10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </>
          ) : (
            <div className="relative flex h-full flex-col justify-between rounded-xl border border-white/15 bg-slate-900/60 p-4.5 backdrop-blur-md">
              {/* Fake Browser Top Dots */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  {project.category}
                </span>
              </div>

              {/* Center Content / Description text */}
              <div className="my-auto space-y-1">
                <div className="flex items-center gap-2 text-orange-400">
                  <Code2 size={18} />
                  <h4 className="text-base font-bold text-white">{project.title}</h4>
                </div>
                <p className="text-xs text-white/70 line-clamp-2">{project.image}</p>
              </div>

              {/* Tech Tags Mini */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech?.slice(0, 3).map((item) => (
                  <span key={item} className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
                    {item}
                  </span>
                ))}
                {project.tech?.length > 3 && (
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/60">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Quick View Icon if URL available */}
          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[var(--text)]">{project.title}</h3>
              {isImageUrl && (
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                  {project.category}
                </span>
              )}
            </div>
            <p className="mt-2.5 text-sm leading-6 text-[var(--muted)] line-clamp-3">{project.description}</p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4.5 py-2 text-xs font-semibold text-[var(--text)] transition hover:bg-white/10 active:scale-95"
          >
            <Github size={15} />
            GitHub
          </a>
        )}

        {hasDemo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-5 py-2 text-xs font-semibold text-white shadow-md transition hover:opacity-90 active:scale-95"
          >
            <Globe size={15} />
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[var(--muted)]">
            In Development
          </span>
        )}
      </div>
    </article>
  )
}

export default ProjectCard