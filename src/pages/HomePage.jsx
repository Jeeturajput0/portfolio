import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { serviceCards, siteConfig, stats, techStack } from '../data/portfolioData'
import DP from '../assets/facepic.png'
const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
}

function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-18 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)] backdrop-blur-xl">
            Available for freelance and full-time roles
          </span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--text)] md:text-6xl xl:text-7xl">
              Modern developer portfolio with product-level polish.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">{siteConfig.title}. {siteConfig.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(249,115,22,0.25)]"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <a
              href="/jeetuResume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-[var(--text)] backdrop-blur-xl"
            >
              Download Resume
              <Download size={18} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[var(--text)]"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((item) => {
              const Icon = socialIconMap[item.label]
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[var(--text)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-semibold text-[var(--text)]">{item.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full pr-2 ">
           <img src={DP} alt="" className='rounded-2xl mb-35'/>
                </div>
                <div className="space-y-5 text-[var(--text)]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">Featured profile</p>
                    <h2 className="mt-2 text-3xl font-semibold">{siteConfig.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Frontend developer focused on scalable systems, premium visuals, and performance-led interfaces.</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/12 bg-black/15 p-4 dark:bg-white/5">
                    <p className="text-sm flex uppercase tracking-[0.3em] text-[var(--muted)]">Core stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {techStack.map((item) => (
                        <span key={item} className="rounded-full border flex border-white/12 px-3 py-2 text-xs text-[var(--text)]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="What I Do"
          title="Crafting premium interfaces that feel fast, intentional, and conversion-ready"
          description="This portfolio uses reusable patterns you can keep extending: route pages, data-driven sections, reusable wrappers, and strong visual consistency."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <article key={card.title} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl">
              <div className="mb-5 h-14 w-14 rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] opacity-90" />
              <h3 className="text-2xl font-semibold text-[var(--text)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
