import PageShell from '../components/PageShell'
import SkillBar from '../components/SkillBar'
import { skillCategories } from '../data/portfolioData'

function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills"
      title="Capability mapped across frontend, backend, data, and workflow tools"
      description="Each category is built as a reusable block so you can extend the portfolio without restructuring the layout."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <section key={category.title} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl">
            <h2 className="text-2xl font-semibold text-[var(--text)]">{category.title}</h2>
            <div className="mt-6 space-y-5">
              {category.items.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  )
}

export default SkillsPage
