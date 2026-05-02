import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="section">
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found."
        canonical="/404"
        noindex
      />
      <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you requested does not exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </section>
  )
}
