import { useMemo, useState } from 'react'
import PageShell from '../components/PageShell'
import ProjectCard from '../components/ProjectCard'
import { projectFilters, projects } from '../data/portfolioData'

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <PageShell
      eyebrow="Projects"
      title="Selected work with strong UI, clean architecture, and production thinking"
      description="A filterable project showcase with reusable cards, motion, and glassmorphism styling. Replace links and descriptions from a single data file as needed."
    >
      <div className="flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-3 text-sm transition ${activeFilter === filter ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white' : 'border border-white/15 bg-white/10 text-[var(--text)]'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </PageShell>
  )
}

export default ProjectsPage
