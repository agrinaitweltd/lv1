import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
}

const BASE_URL = 'https://lvexteriorcleaning.co.uk'

function normalizeCanonicalPath(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`
  if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')) {
    return withLeadingSlash.slice(0, -1)
  }
  return withLeadingSlash
}

export default function Seo({ title, description, canonical, noindex = false }: SeoProps) {
  const fullTitle = title.includes('LV Exterior') ? title : `${title} | LV Exterior Cleaning`
  const canonicalPath = normalizeCanonicalPath(canonical || '/')
  const url = `${BASE_URL}${canonicalPath}`
  const robots = noindex ? 'noindex, nofollow' : 'index, follow'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
