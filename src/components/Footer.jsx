import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { siteConfig } from '../data/portfolioData'

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
}

function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-white/15 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-xs font-bold text-white shadow-sm">
              JR
            </span>
            <h3 className="text-xl font-bold text-[var(--text)]">{siteConfig.name}</h3>
          </div>
          <p className="max-w-md text-sm text-[var(--muted)]">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Quick Links</p>
          <div className="flex flex-col gap-2.5 text-sm text-[var(--muted)]">
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="w-fit text-left transition hover:text-[var(--text)]"
            >
              About Me
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="w-fit text-left transition hover:text-[var(--text)]"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="w-fit text-left transition hover:text-[var(--text)]"
            >
              Skills & Stack
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('resume')}
              className="w-fit text-left transition hover:text-[var(--text)]"
            >
              Resume & Timeline
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="w-fit text-left transition hover:text-[var(--text)]"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Connect</p>
          <div className="flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((item) => {
              const Icon = iconMap[item.label] || Mail
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[var(--text)] transition hover:-translate-y-1 hover:bg-white/15"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-6 py-5 text-sm text-[var(--muted)] lg:px-8">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-[var(--text)] transition hover:-translate-y-1 hover:bg-white/15"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
