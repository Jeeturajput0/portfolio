import { useState } from 'react'
import PageShell from '../components/PageShell'
import { contactInfo } from '../data/portfolioData'

const initialState = { name: '', email: '', message: '' }

function ContactPage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Enter a valid email address.'
    if (formData.message.trim().length < 12) nextErrors.message = 'Message should be at least 12 characters.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
    setFormData(initialState)
    window.setTimeout(() => setSubmitted(false), 2600)
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Let’s build something sharp, fast, and useful"
      description="The form is client-side validated. Plug this into EmailJS, Formspree, or your backend if you want live delivery."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Contact details</p>
          <div className="mt-6 space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[1.4rem] border border-white/12 bg-black/10 p-4 transition hover:-translate-y-1 dark:bg-white/5"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-base text-[var(--text)]">{item.value}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-[var(--text)]">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/12 bg-black/10 px-4 py-3 text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)] dark:bg-white/5"
                placeholder="Your name"
              />
              {errors.name ? <p className="mt-2 text-sm text-amber-300">{errors.name}</p> : null}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-[var(--text)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-2xl border border-white/12 bg-black/10 px-4 py-3 text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)] dark:bg-white/5"
                placeholder="you@example.com"
              />
              {errors.email ? <p className="mt-2 text-sm text-amber-300">{errors.email}</p> : null}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-[var(--text)]">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                className="w-full rounded-2xl border border-white/12 bg-black/10 px-4 py-3 text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)] dark:bg-white/5"
                placeholder="Tell me about the product, timeline, and what you need shipped."
              />
              {errors.message ? <p className="mt-2 text-sm text-amber-300">{errors.message}</p> : null}
            </div>
            <button
              type="submit"
              className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 text-sm font-semibold text-white"
            >
              Send Message
            </button>
          </form>
          {submitted ? (
            <div className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
              Message sent successfully. Hook this form to a real endpoint when you are ready.
            </div>
          ) : null}
        </section>
      </div>
    </PageShell>
  )
}

export default ContactPage
