import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { siteConfig } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const scrollToSection = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="sticky top-0 z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/15 bg-[color:var(--nav-bg)] px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <motion.button whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => scrollToSection('hero')}
           className="flex items-center gap-3 text-left focus:outline-none"
           >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-sm font-bold text-white shadow-[0_4px_14px_rgba(56,189,248,0.4)]">
              JR
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">Developer</p>
              <p className="text-sm font-semibold text-[var(--text)]">{siteConfig.name}</p>
            </div>
          </motion.button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && location.pathname === '/'
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white shadow-sm'
                      : 'text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]'
                  }`}
                >
                  {isActive && <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] shadow-sm" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(56,189,248,0.35)] transition hover:opacity-90 active:scale-95"
            >
              Hire Me
            </motion.button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[var(--text)] lg:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .25 }} className="overflow-hidden lg:hidden">
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id && location.pathname === '/'
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-xl px-4 py-2.5 text-left text-sm font-medium transition ${
                      isActive
                        ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white'
                        : 'text-[var(--muted)] hover:bg-white/10 hover:text-[var(--text)]'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar
