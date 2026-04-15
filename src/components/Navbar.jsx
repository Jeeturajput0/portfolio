import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Resume', to: '/resume' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-white/15 text-[var(--text)]' : 'text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]'}`

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/15 bg-[color:var(--nav-bg)] px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-sm font-semibold text-white">
              JR
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Developer</p>
              <p className="text-sm font-semibold text-[var(--text)]">{siteConfig.name}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Link
              to="/contact"
              className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-5 py-3 text-sm font-medium text-white"
            >
              Hire Me
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[var(--text)] lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="overflow-hidden lg:hidden">
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 flex items-center justify-between">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-5 py-3 text-sm font-medium text-white"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
