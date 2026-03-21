import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { blogPosts } from '../data/portfolioData'

function BlogArticlePage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <PageShell
        eyebrow="Blog"
        title="Article not found"
        description="The requested article does not exist. Return to the blog index to choose another post."
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </PageShell>
    )
  }

  return (
    <PageShell eyebrow={post.category} title={post.title} description={post.date}>
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl md:p-8">
        <div className="mb-8 h-56 rounded-[1.6rem] bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.55),transparent_34%),linear-gradient(135deg,rgba(30,41,59,0.9),rgba(15,23,42,0.75))]" />
        <div className="space-y-6 text-base leading-8 text-[var(--muted)] md:text-lg">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          to="/blog"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-[var(--text)] transition hover:-translate-y-1 hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </article>
    </PageShell>
  )
}

export default BlogArticlePage
