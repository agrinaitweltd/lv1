import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import { fetchWordPressPosts, stripHtmlTags, getExcerpt } from "@/lib/wordpress"

export const metadata: Metadata = {
  title: "Blog - Moving Tips & Company News",
  description:
    "Read our latest blog posts about moving tips, company updates, and industry insights from Breezyee Moves.",
  keywords: "moving tips, removal advice, company news, blog, moving guides",
}

export default async function BlogPage() {
  const posts = await fetchWordPressPosts(12)

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-teal-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with moving tips, company news, and insights from the removal industry
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
            <p className="text-gray-500 mt-2">Check back soon for moving tips and company updates!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{stripHtmlTags(post.title.rendered)}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Breezyee Team
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{getExcerpt(post.content.rendered, 120)}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to stay updated with our latest posts?</p>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
            <Link href="/contact">Subscribe to Our Newsletter</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
