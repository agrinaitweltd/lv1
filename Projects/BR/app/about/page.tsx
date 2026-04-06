import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Award, Target, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Youth-Focused Removal Company | Breezyee Moves London",
  description:
    "Learn about Breezyee Moves - London's youth-focused removal company. We provide opportunities for NEET (Not in Education, Employment, or Training) young people while delivering professional moving services. Founded in 2023, serving London & M25 areas.",
  keywords:
    "about Breezyee Moves, youth employment, NEET opportunities, London removal company, professional movers, team, company history, mission, values, youth-focused business",
  openGraph: {
    title: "About Us - Youth-Focused Removal Company | Breezyee Moves London",
    description:
      "Learn about Breezyee Moves - London's youth-focused removal company providing opportunities for NEET (Not in Education, Employment, or Training) young people while delivering professional moving services.",
    url: "https://www.breezyeemoves.co.uk/about",
    siteName: "Breezyee Moves",
    images: [
      {
        url: "https://www.breezyeemoves.co.uk/images/team-philosophy-teamwork.jpg",
        width: 1200,
        height: 630,
        alt: "Breezyee Moves Team - Youth-Focused Removal Company",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.breezyeemoves.co.uk/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">About Breezyee Moves</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              A Move for You is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Leap for the Next Generation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just a removal company - we're a youth-focused business creating opportunities for NEET (Not in
              Education, Employment, or Training) young people whilst providing exceptional moving services across
              London.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2023, Breezyee Moves was born from a simple yet powerful idea: combine professional removal
                  services with meaningful youth employment opportunities. We believe that every young person deserves a
                  chance to build their future.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of dedicated young professionals who bring energy, enthusiasm, and a fresh
                  perspective to the moving industry. We're proud to be making a difference in both our customers' lives
                  and our community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">50+ Young People</h3>
                    <p className="text-sm text-gray-600">Employed and trained</p>
                  </CardContent>
                </Card>
                <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">500+ Moves</h3>
                    <p className="text-sm text-gray-600">Successfully completed</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/team-philosophy-teamwork.jpg"
                alt="Breezyee Moves team working together"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-900">4.8/5 Rating</p>
                    <p className="text-sm text-gray-600">From 127+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team in Action - Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real moments capturing our diverse team of young professionals bringing energy, dedication, and
              professionalism to every move across London
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-elegant-building.jpg"
                  alt="Team members in elegant building with professional branding"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Professional Service Delivery</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-van-service.jpg"
                  alt="Team member loading van with professional equipment"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Efficient Van Operations</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-carrying-artwork.jpg"
                  alt="Team member carefully transporting artwork"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Specialist Item Handling</h3>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-wessex-apartments.jpg"
                  alt="Team at Wessex Apartments with clear branding"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Residential Complex Services</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-professional-loading.jpg"
                  alt="Professional team loading with trolleys and equipment"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Professional Equipment Use</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-van-teamwork.jpg"
                  alt="Team working together inside moving van"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Same Day Delivery</h3>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-equipment-loading.jpg"
                  alt="Team loading equipment and bags"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Equipment Management</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-office-environment.jpg"
                  alt="Team working in modern office environment"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Corporate Office Moves</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-furniture-assembly.jpg"
                  alt="Team assembling furniture in residential space"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Furniture Assembly Service</h3>
              </div>
            </div>

            {/* Row 4 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-spring-walk.jpg"
                  alt="Breezyee team members walking together in spring"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Team Unity & Collaboration</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-appliance-moving.jpg"
                  alt="Team members using professional dolly to move large appliance"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Heavy Appliance Moving</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-branded-service.jpg"
                  alt="Professional Breezyee team member with branded uniform providing service"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Branded Professional Service</h3>
              </div>
            </div>

            {/* Row 5 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-furniture-moving.jpg"
                  alt="Breezyee team moving furniture together"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Heavy Furniture Moving</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-trolley-work.jpg"
                  alt="Team member with trolley handling boxes at commercial building"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Commercial Building Services</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-storage-facility.jpg"
                  alt="Team members working in professional storage facility"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Storage Facility Operations</h3>
              </div>
            </div>

            {/* Row 6 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-yellow-storage-corridor.jpeg"
                  alt="Two team members working together in bright yellow storage facility corridor with professional trolley"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Secure Storage Facility Services</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-stair-luggage.jpg"
                  alt="Team member carrying luggage up stairs with professional service"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Stair Navigation & Luggage Services</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-box-organization.jpg"
                  alt="Team member organizing multiple stacks of moving boxes in residential complex"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Item Organisation</h3>
              </div>
            </div>

            {/* Row 7 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-van-loading-branded.jpg"
                  alt="Team member loading van with clear Breezyee branding and contact details"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Home Move</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-van-interior-work.png"
                  alt="Team member working inside moving van with professional organization"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Van Interior Organisation</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-modern-building-trolley.png"
                  alt="Team member using trolley in modern building corridor"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Modern Building Services</h3>
              </div>
            </div>

            {/* Row 8 */}
            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-branded-collaboration.png"
                  alt="Two team members collaborating with full Breezyee branding visible"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Team Collaboration & Branding</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-warehouse-trolleys.png"
                  alt="Team members using multiple trolleys in warehouse facility"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Warehouse & Storage Operations</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="/images/team-corridor-service.png"
                  alt="Team member providing service in modern building corridor"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Luxury Goods Handling</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to excellence and youth empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-cyan-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional removal services whilst creating meaningful employment opportunities for NEET
                  (Not in Education, Employment, or Training) young people, helping them build skills and confidence for
                  their future.
                </p>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Youth Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We specifically target NEET (Not in Education, Employment, or Training) young people, providing them
                  with training, support, and career development opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in all our services, ensuring every move is completed
                  professionally, safely, and with care for your belongings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Move with Purpose?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Choose Breezyee Moves for your next move and support youth employment whilst receiving exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Call 07398 395022
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
