"use client"
import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building,
  Package,
  Truck,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Piano,
  Wrench,
  Key,
  HardHat,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "House Removals",
    description: "Complete residential moving services for homes of all sizes across London.",
    features: [
      "Free home survey and quote",
      "Professional packing materials",
      "Furniture dismantling and reassembly",
      "Secure transportation with GPS tracking",
      "Unpacking and placement service",
      "Post-move cleaning service available",
    ],
    price: "From £350",
    priceDetail: "1-bed: £350-450 | 2-bed: £450-650 | 3-bed: £650-850 | 4-bed: £850-1200",
  },
  {
    icon: Building,
    title: "Office Removals",
    description: "Efficient commercial relocations with minimal business disruption across London.",
    features: [
      "Out-of-hours and weekend moving",
      "IT equipment specialists and setup",
      "Secure document handling and archiving",
      "Furniture installation and configuration",
      "Dedicated project management",
      "Comprehensive insurance coverage",
    ],
    price: "From £550",
    priceDetail: "Small office: £550-800 | Medium: £800-1500 | Large: £1500-3000+",
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Professional packing using premium materials and expert techniques.",
    features: [
      "High-quality packing materials included",
      "Fragile item specialists and custom crating",
      "Systematic labelling and inventory",
      "Room-by-room organisation system",
      "Full unpacking service available",
      "Eco-friendly packing options",
    ],
    price: "From £28/hour",
    priceDetail: "Per packer: £28-35/hour | Full house packing: £200-600",
  },
  {
    icon: Truck,
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities across London.",
    features: [
      "Climate-controlled storage units",
      "24/7 CCTV security monitoring",
      "Flexible short and long-term rental",
      "Easy access with advance booking",
      "Comprehensive insurance included",
      "Collection and delivery service",
    ],
    price: "From £25/week",
    priceDetail: "Small unit: £25-35/week | Medium: £35-55/week | Large: £55-85/week",
  },
  {
    icon: Clock,
    title: "Same Day Courier",
    description: "Urgent delivery service for single items across London and surrounding areas.",
    features: [
      "Same day delivery guarantee",
      "Real-time GPS tracking updates",
      "Secure handling protocols",
      "Flexible pickup times (7am-8pm)",
      "London and M25 coverage",
      "Emergency and out-of-hours delivery",
    ],
    price: "From £45",
    priceDetail: "Local: £45-65 | Cross-London: £65-95 | Emergency: £95-150",
  },
  {
    icon: Shield,
    title: "Collection & Delivery",
    description: "Reliable collection and delivery for furniture, appliances, and large items.",
    features: [
      "Scheduled collections with time slots",
      "Safe delivery with placement service",
      "Assembly and installation service",
      "Comprehensive damage protection",
      "White goods and furniture specialists",
      "Two-man delivery team standard",
    ],
    price: "From £75",
    priceDetail: "Small items: £75-95 | Large furniture: £95-150 | White goods: £120-180",
  },
  {
    icon: Piano,
    title: "Piano Moving",
    description: "Specialist piano moving service with trained professionals and proper equipment.",
    features: [
      "Certified piano moving specialists",
      "Professional protective equipment",
      "Comprehensive insurance coverage",
      "Upright and grand piano expertise",
      "Staircase and difficult access navigation",
      "Climate-controlled transportation",
    ],
    price: "From £180",
    priceDetail: "Upright: £180-250 | Baby grand: £250-350 | Concert grand: £350-500+",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Professional furniture assembly and disassembly service for all brands.",
    features: [
      "Expert assembly technicians",
      "All major furniture brands covered",
      "Professional tools and equipment provided",
      "Quality guarantee and warranty",
      "Disassembly service for moves",
      "Same-day and next-day availability",
    ],
    price: "From £35/hour",
    priceDetail: "Standard: £35-45/hour | Complex items: £45-55/hour | Minimum 2 hours",
  },
  {
    icon: Users,
    title: "Student Moves",
    description: "Affordable moving services tailored specifically for students and university life.",
    features: [
      "Student discount rates available",
      "Flexible scheduling around term times",
      "Small load and single room specialists",
      "University accommodation expertise",
      "Holiday storage solutions included",
      "Packing materials and boxes provided",
    ],
    price: "From £180",
    priceDetail: "Studio/room: £180-250 | 1-bed flat: £250-350 | Shared house: £350-450",
  },
  {
    icon: Key,
    title: "Estate Agent Services",
    description: "Comprehensive logistics support for estate agents and property professionals.",
    features: [
      "End-of-tenancy clearances",
      "Property staging and preparation",
      "Viewings preparation and setup",
      "Tenant move coordination",
      "Emergency clearance services",
      "Inventory management and reports",
    ],
    price: "From £120",
    priceDetail: "Clearance: £120-300 | Staging: £200-500 | Full service: £300-800",
  },
  {
    icon: HardHat,
    title: "Construction Logistics",
    description: "Specialised logistics services for construction companies and contractors.",
    features: [
      "Site clearance and preparation",
      "Material and equipment transport",
      "Waste removal coordination",
      "Project logistics support",
      "Heavy machinery moving",
      "Scheduled delivery routes",
    ],
    price: "From £400/day",
    priceDetail: "Day rate: £400-800 | Project rates available | Specialist equipment extra",
  },
  {
    icon: Briefcase,
    title: "Corporate Logistics",
    description: "Tailored logistics solutions for businesses of all sizes and industries.",
    features: [
      "Regular delivery contracts available",
      "Inventory management support",
      "Bulk transportation services",
      "Dedicated account management",
      "Flexible scheduling options",
      "Volume discount pricing structure",
    ],
    price: "Contract pricing",
    priceDetail: "Regular routes: £200-500/day | Bulk moves: 15-25% discount | Annual contracts available",
  },
]

export default function ServicesClientPage() {
  useEffect(() => {
    // Smooth scroll to anchor if present in URL
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            London's Premier Moving & Logistics Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional removal and logistics solutions across London and surrounding areas. Competitive pricing,
            expert service, and youth empowerment at the heart of everything we do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow"
              id={service.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-12 w-12 text-blue-600" />
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600 block">{service.price}</span>
                    <span className="text-xs text-gray-500">Competitive London rates</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
                <div className="bg-blue-50 p-3 rounded-lg mt-3">
                  <p className="text-sm text-blue-800 font-medium">Pricing Details:</p>
                  <p className="text-sm text-blue-700">{service.priceDetail}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button className="flex-1" asChild>
                    <Link href="/quote">Get Free Quote</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Call Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Transparency Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent London Pricing</h2>
            <p className="text-xl text-gray-600">Our competitive rates are based on extensive London market research</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">£</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">
                All prices include VAT, insurance, and standard equipment. What you see is what you pay.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Price Match Promise</h3>
              <p className="text-gray-600">
                We'll match any genuine like-for-like quote from a licensed London removal company.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fixed Price Guarantee</h3>
              <p className="text-gray-600">
                Your quote is fixed - no surprise charges on moving day. Guaranteed in writing.
              </p>
            </div>
          </div>
        </div>

        {/* Business Partnership Section */}
        <div className="bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">London Industry Partnerships</h2>
            <p className="text-xl opacity-90">
              Trusted by London businesses across multiple industries for reliable logistics solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <Key className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Estate Agents & Property</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• End-of-tenancy clearances (£120-300)</li>
                <li>• Property staging and preparation</li>
                <li>• Tenant move coordination</li>
                <li>• Emergency clearance services</li>
                <li>• Inventory and condition reports</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <HardHat className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Construction & Contracting</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Site clearance (£400-800/day)</li>
                <li>• Material and equipment transport</li>
                <li>• Waste removal coordination</li>
                <li>• Heavy machinery relocation</li>
                <li>• Project logistics management</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <Briefcase className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate & Retail</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Regular delivery contracts</li>
                <li>• Inventory management</li>
                <li>• Bulk transportation (15-25% discount)</li>
                <li>• Store relocations</li>
                <li>• Dedicated account management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Breezyee Moves in London?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Licensed & Insured</h3>
              <p className="text-gray-600">
                BAR (British Association of Removers) member with comprehensive insurance coverage up to £50,000 per
                item.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dynamic Young Team</h3>
              <p className="text-gray-600">
                Our energetic, tech-savvy workforce brings speed, agility, and fresh thinking to London's removal
                industry.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient Service</h3>
              <p className="text-gray-600">
                Average 25% faster completion times compared to traditional removal companies, with same-day quotes
                available.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Move with London's Best?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your free, no-obligation quote today and discover why London businesses and residents choose Breezyee
            Moves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/quote">Get Free Quote Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Call: 07398 395022</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
