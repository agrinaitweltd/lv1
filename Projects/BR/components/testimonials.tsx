import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London",
    rating: 5,
    text: "Absolutely fantastic service! Breezyee Moves team was professional, careful with our belongings, and made our house move completely stress-free. The young team brought such energy and efficiency to the job. Highly recommended!",
  },
  {
    name: "Michael Brown",
    location: "London",
    rating: 5,
    text: "Breezyee Moves handled our office relocation perfectly. They worked around our schedule and had us up and running in no time. The Breezyeers were incredibly hardworking and professional. Excellent service!",
  },
  {
    name: "Emma Wilson",
    location: "Birmingham",
    rating: 5,
    text: "From quote to completion, everything was handled professionally by Breezyee Moves. The team was punctual, friendly, and took great care of our furniture. Will definitely use again!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
