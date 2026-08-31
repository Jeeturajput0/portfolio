import PageShell from '../components/PageShell'
import {  stackGroups } from '../data/portfolioData'

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Me"
      title="Frontend Developer building modern and user-friendly web applications"
      description="I am a BCA student and Frontend Developer with hands-on experience in the MERN stack, focused on creating responsive interfaces and reliable web applications."
    >
      {/* <section className="grid gap-6 lg:grid-cols-3">
        {aboutSections.map((section) => (
          <article
            key={section.title}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              {section.title}
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--text)]">
              {section.body}
            </p>
          </article>
        ))}
      </section> */}

      <section className="mt-12 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            My Tech Stack
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[var(--text)]">
            Technologies I use to build web applications
          </h2>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            My development stack covers frontend development, backend APIs,
            database management, authentication, and modern development tools.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.5rem] border border-white/12 bg-black/10 p-5 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-[var(--text)]">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-3 py-2 text-sm text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage