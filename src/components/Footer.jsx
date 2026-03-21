import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/portfolioData'

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
}

function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black/10 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Portfolio</p>
          <h3 className="text-2xl font-semibold text-[var(--text)]">{siteConfig.name}</h3>
          <p className="max-w-md text-sm text-[var(--muted)]">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Connect</p>
          <div className="flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((item) => {
              const Icon = iconMap[item.label]
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-[var(--muted)] lg:px-8">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[var(--text)] transition hover:-translate-y-1"
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
