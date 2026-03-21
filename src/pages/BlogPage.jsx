import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { blogPosts } from '../data/portfolioData'

function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Optional editorial layer for technical writing and product thinking"
      description="These entries are represented as cards for now. You can expand them into real article routes later without replacing the overall structure."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl">
            <div className="h-44 rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.55),transparent_34%),linear-gradient(135deg,rgba(30,41,59,0.9),rgba(15,23,42,0.75))]" />
            <div className="mt-6 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--text)]">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--text)] transition hover:-translate-y-1 hover:bg-white/10"
            >
              Read Article
              <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

export default BlogPage
