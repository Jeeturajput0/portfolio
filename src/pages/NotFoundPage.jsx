import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="This page does not exist"
      description="The route is missing. Use the main navigation to get back into the portfolio."
    >
      <Link
        to="/"
        className="inline-flex rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3 text-sm font-semibold text-white"
      >
        Return Home
      </Link>
    </PageShell>
  )
}

export default NotFoundPage
