import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children, theme, toggleTheme }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [children])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="page-noise" />
      <div className="page-orb page-orb-one" />
      <div className="page-orb page-orb-two" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
