import { NextResponse } from "next/server"
import { fetchWordPressPosts } from "@/lib/wordpress"

export async function GET() {
  try {
    const posts = await fetchWordPressPosts(100)

    const blogUrls = posts.map((post) => ({
      url: `https://www.breezyeemoves.co.uk/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogUrls
        .map(
          (url) => `
        <url>
          <loc>${url.url}</loc>
          <lastmod>${url.lastModified.toISOString()}</lastmod>
          <changefreq>${url.changeFrequency}</changefreq>
          <priority>${url.priority}</priority>
        </url>`,
        )
        .join("")}
    </urlset>`

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    })
  } catch (error) {
    console.error("Error generating dynamic sitemap:", error)
    return new NextResponse("Error generating sitemap", { status: 500 })
  }
}
