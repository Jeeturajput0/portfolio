import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import BlogArticlePage from './pages/BlogArticlePage'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

const THEME_KEY = 'portfolio-theme'

function SectionPage({ sectionId }) {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [sectionId, location])

  return <HomePage />
}

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem(THEME_KEY)
    if (storedTheme) {
      return storedTheme
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SectionPage sectionId="about" />} />
        <Route path="/projects" element={<SectionPage sectionId="projects" />} />
        <Route path="/skills" element={<SectionPage sectionId="skills" />} />
        <Route path="/resume" element={<SectionPage sectionId="resume" />} />
        <Route path="/contact" element={<SectionPage sectionId="contact" />} />
        <Route path="/services" element={<SectionPage sectionId="services" />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App

