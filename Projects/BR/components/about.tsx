import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { number: "100%", label: "Purpose-Driven" },
  { number: "NEET", label: "Youth Focus" },
  { number: "London+", label: "Service Area" },
  { number: "24/7", label: "Support" },
]

const benefits = [
  "We hire young people (NEET - Not in Education, Employment, or Training) - because talent thrives when given opportunities",
  "Fully licensed and insured removal company",
  "Professional trained and uniformed staff",
  "Modern fleet of removal vehicles",
  "Comprehensive insurance coverage",
  "Supporting youth employment and inclusive opportunities",
]

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-teal-500">"Breezyeers"</span>
            </h2>
            <div className="bg-teal-500 text-white p-6 rounded-lg mb-8">
              <p className="text-lg font-semibold mb-4">
                We hire young people (NEET - Not in Education, Employment, or Training) – because talent thrives when
                given opportunities.
              </p>
              <p className="text-teal-100">
                At Breezyee Moves, we bridge gaps for young people who are not in education, employment, or training,
                empowering them to overcome challenges and build brighter futures.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <p className="text-center text-gray-600 mb-4">
                <strong>Need manpower or a hassle-free end-of-tenancy clearance?</strong>
              </p>
              <p className="text-center text-gray-600">
                Hire a Breezyeer crew by the hour – efficient, thorough, and ready to work!
              </p>
            </div>

            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" asChild>
              <Link href="/about">Learn More About Our Mission</Link>
            </Button>
          </div>

          <div>
            <Image
              src="/images/team-spring-walk.jpg"
              alt="Breezyeer team members walking down a beautiful tree-lined street in spring"
              width={600}
              height={500}
              className="rounded-lg shadow-lg mb-8 object-cover"
            />

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow border-l-4 border-l-teal-500">
                  <div className="text-3xl font-bold text-purple-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
