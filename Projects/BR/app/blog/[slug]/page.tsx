import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import WordPressContent from "@/components/wordpress/WordPressContent"
import { fetchWordPressPosts, stripHtmlTags, getExcerpt } from "@/lib/wordpress"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const posts = await fetchWordPressPosts(100) // Get more posts to find the specific one
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: stripHtmlTags(post.title.rendered),
    description: getExcerpt(post.content.rendered, 160),
    keywords: "moving tips, removal advice, blog post",
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = await fetchWordPressPosts(100)
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" className="mb-6" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Breezyee Team
            </span>
          </div>
        </div>

        <WordPressContent content={post} />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Moving Services?</h3>
            <p className="text-gray-600 mb-6">
              Ready to experience our professional removal services? Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
