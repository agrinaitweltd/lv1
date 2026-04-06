import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { stripHtmlTags } from "@/lib/wordpress"
import type { WordPressTestimonial } from "@/lib/wordpress"

interface WordPressTestimonialsProps {
  testimonials: WordPressTestimonial[]
}

export default function WordPressTestimonials({ testimonials }: WordPressTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No testimonials available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => {
        const rating = testimonial.acf?.rating || 5
        const customerName = testimonial.acf?.customer_name || stripHtmlTags(testimonial.title.rendered)
        const customerLocation = testimonial.acf?.customer_location || "London"
        const testimonialText = testimonial.acf?.testimonial_text || stripHtmlTags(testimonial.content.rendered)

        return (
          <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonialText}"</p>
              <div>
                <p className="font-semibold text-gray-900">{customerName}</p>
                <p className="text-sm text-gray-500">{customerLocation}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
