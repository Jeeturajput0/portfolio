import Footer from './Footer'
import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'

function Layout({ children, theme, toggleTheme }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <ScrollProgress />
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

