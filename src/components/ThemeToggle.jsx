import { MoonStar, SunMedium } from 'lucide-react'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-20 items-center rounded-full border border-white/15 bg-white/10 px-2 backdrop-blur-lg"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute h-8 w-8 rounded-full ${theme === 'dark' ? 'translate-x-8 bg-white text-slate-900' : 'translate-x-0 bg-slate-950 text-white'}`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-0.5 text-[var(--text)]">
        <SunMedium size={15} />
        <MoonStar size={15} />
      </span>
      <span className="sr-only">{theme}</span>
    </button>
  )
}

export default ThemeToggle
