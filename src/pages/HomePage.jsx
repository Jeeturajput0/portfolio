import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Twitter,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'
import {
  aboutSections,
  contactInfo,
  projectFilters,
  projects,
  serviceCards,
  siteConfig,
  skillCategories,
  stackGroups,
  stats,
  techStack,
  timeline,
} from '../data/portfolioData'
import DP from '../assets/facepic.png'

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
}

function TimelineGroup({ title, items }) {
  return (
    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--muted)]">{title}</p>
      </div>
      <div className="relative mt-8 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-white/15">
        {items.map((item, idx) => (
          <div key={`${title}-${item.title}-${idx}`} className="relative pl-8">
            <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] shadow-[0_0_0_5px_rgba(249,115,22,0.2)]" />
            <p className="text-xs font-semibold text-[var(--accent)]">{item.period}</p>
            <h4 className="mt-1 text-xl font-semibold text-[var(--text)]">{item.title}</h4>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">{item.place}</p>
            <p className="mt-2.5 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function HomePage() {
  // Project filter state
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateContact = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Enter a valid email address.'
    if (formData.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters.'
    return nextErrors
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateContact()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="space-y-24 pb-20">
      {/* SECTION 1: HERO SECTION */}
      <section id="hero" className="mx-auto grid max-w-7xl gap-12 px-6 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance & full-time roles
          </span>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
     Frontend Developer & MERN Stack Developer
             
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              {siteConfig.title}. {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(249,115,22,0.3)] transition hover:opacity-90 active:scale-95"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <a
              href="/jeetuResume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-[var(--text)] backdrop-blur-xl transition hover:bg-white/20 active:scale-95"
            >
              Download Resume
              <Download size={18} />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:bg-white/10 active:scale-95"
            >
              Contact Me
            </button>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {siteConfig.socialLinks.map((item) => {
              const Icon = socialIconMap[item.label] || Mail
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4.5 py-2 text-xs font-medium text-[var(--text)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <Icon size={15} />
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition hover:border-white/25">
                <p className="text-3xl font-bold text-[var(--text)]">{item.value}</p>
                <p className="mt-1.5 text-xs text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* HERO PROFILE DISPLAY CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col justify-center space-y-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.15)] md:p-8"
        >
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 shadow-xl">
            <img src={DP} alt={siteConfig.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
          </div>
          <div className="space-y-4 text-[var(--text)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Featured Profile</p>
              <h2 className="mt-1 text-2xl font-bold">{siteConfig.name}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Frontend developer focused on scalable systems, premium visuals, and performance-led interfaces.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/12 bg-black/15 p-4 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Core Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <span key={item} className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-[var(--text)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT ME SECTION */}
      <section id="about" className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
  eyebrow="About Me"
  title="Building responsive experiences with modern web technologies"
  description="I’m Jeetu Rajput, a BCA student and Frontend Developer with hands-on MERN Stack experience. I focus on creating responsive, user-friendly applications with React.js, Tailwind CSS, REST APIs, Node.js, Express.js, and MongoDB."
/>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {aboutSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/25"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white shadow-md">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)]">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Tech Stack</p>
              <h3 className="mt-2 text-2xl font-bold text-[var(--text)] md:text-3xl">Grouped by the way I build</h3>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stackGroups.map((group) => (
                <article key={group.title} className="rounded-[1.5rem] border border-white/12 bg-black/10 p-5 dark:bg-white/5">
                  <h4 className="text-lg font-semibold text-[var(--text)]">{group.title}</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-[var(--muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: SERVICES / WHAT I DO */}
      <section id="services" className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="What I Do"
            title="Crafting premium interfaces that feel fast, intentional, and conversion-ready"
            description="Focusing on user experience, pixel-perfect UI execution, responsive design, and smooth motion."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white shadow-lg">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: PROJECTS SHOWCASE */}
      <section id="projects" className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Portfolio Projects"
            title="Selected work with strong UI, clean architecture, and real-world impact"
            description="Filterable project showcase featuring full stack applications, frontend designs, and interactive web tools."
          />

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white shadow-md'
                    : 'border border-white/15 bg-white/10 text-[var(--text)] hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
            <span className="ml-auto text-xs text-[var(--muted)]">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>

          {/* Projects Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: SKILLS & TECHNOLOGIES */}
      <section id="skills" className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Skills & Proficiency"
            title="Capabilities mapped across frontend, backend, databases, and tooling"
            description="Core technical proficiency and hands-on tool mastery built through projects and industry practice."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <section key={category.title} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
                <h3 className="text-xl font-bold text-[var(--text)]">{category.title}</h3>
                <div className="mt-6 space-y-5">
                  {category.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: RESUME & TIMELINE */}
      <section id="resume" className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Resume & Journey"
              title="Experience, education, and professional credentials"
              description="A transparent timeline of background and technical milestone highlights."
            />
            <a
              href="/jeetuResume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 active:scale-95"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <TimelineGroup title="Work Experience" items={timeline.experience} />
            <TimelineGroup title="Education" items={timeline.education} />
            <TimelineGroup title="Certifications" items={timeline.certifications} />
          </div>
        </motion.div>
      </section>

      {/* SECTION 7: CONTACT ME */}
      <section id="contact" className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's build something exceptional together"
            description="Have a project in mind, a freelance opportunity, or a role? Drop a message below or reach out directly."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Contact Information Cards */}
            <section className="space-y-4 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Contact Details</p>
              <div className="space-y-4 pt-2">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-[1.4rem] border border-white/12 bg-black/10 p-4 transition hover:-translate-y-1 hover:border-white/25 dark:bg-white/5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">{item.label}</p>
                    <p className="mt-1 text-base font-medium text-[var(--text)]">{item.value}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* Interactive Contact Form */}
            <section className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
              <form className="space-y-5" onSubmit={handleContactSubmit} noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((curr) => ({ ...curr, name: e.target.value }))}
                    className="w-full rounded-2xl border border-white/12 bg-black/10 px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)] dark:bg-white/5"
                    placeholder="Your Full Name"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-amber-400 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((curr) => ({ ...curr, email: e.target.value }))}
                    className="w-full rounded-2xl border border-white/12 bg-black/10 px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)] dark:bg-white/5"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-amber-400 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((curr) => ({ ...curr, message: e.target.value }))}
                    className="w-full rounded-2xl border border-white/12 bg-black/10 px-4 py-3 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)] dark:bg-white/5"
                    placeholder="Describe your project, timeline, or requirement..."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-amber-400 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 active:scale-95"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>

              {submitted && (
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 size={18} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </section>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default HomePage

