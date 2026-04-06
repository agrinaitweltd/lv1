import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Building,
  Package,
  Truck,
  Users,
  Clock,
  Shield,
  Wrench,
  Piano,
  Briefcase,
  HardHat,
  Key,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "House Removals",
    description:
      "Complete residential moving services for homes of all sizes. From packing to unpacking, we handle everything.",
    features: ["Professional packing", "Furniture dismantling", "Secure transportation", "Unpacking service"],
  },
  {
    icon: Building,
    title: "Office Removals",
    description:
      "Minimise business downtime with our efficient office relocation services. We work around your schedule.",
    features: ["IT equipment handling", "Minimal disruption", "Weekend moves available", "Secure document handling"],
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Professional packing using high-quality materials to ensure your belongings arrive safely.",
    features: ["Quality packing materials", "Fragile item specialists", "Labelling system", "Unpacking available"],
  },
  {
    icon: Truck,
    title: "Storage Solutions",
    description: "Secure storage facilities for short-term or long-term needs during your move.",
    features: ["Climate controlled", "24/7 security", "Flexible terms", "Easy access"],
  },
  {
    icon: Clock,
    title: "Same Day Courier",
    description: "Urgent delivery service for single items or small loads across London and surrounding areas.",
    features: ["Same day delivery", "Real-time tracking", "Secure handling", "Flexible pickup times"],
  },
  {
    icon: Shield,
    title: "Collection & Delivery",
    description: "Reliable collection and delivery service for furniture, appliances, and large items.",
    features: ["Scheduled collections", "Safe delivery", "Assembly service", "Damage protection"],
  },
  {
    icon: Piano,
    title: "Piano Moving",
    description: "Specialist piano moving service with trained professionals and proper equipment.",
    features: ["Piano specialists", "Protective equipment", "Insurance included", "Upright & grand pianos"],
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Professional furniture assembly and disassembly service for all types of furniture.",
    features: ["Expert assembly", "All furniture types", "Tool provision", "Quality guarantee"],
  },
  {
    icon: Users,
    title: "Student Moves",
    description: "Affordable moving services tailored specifically for students and university accommodation.",
    features: [
      "Student-friendly rates",
      "Flexible scheduling",
      "Small load specialists",
      "University moves",
      "Holiday storage",
      "Term-time availability",
    ],
  },
  {
    icon: Key,
    title: "Estate Agent Services",
    description: "Comprehensive logistics support for estate agents and property professionals.",
    features: ["End-of-tenancy clearance", "Property staging", "Viewings preparation", "Tenant move coordination"],
  },
  {
    icon: HardHat,
    title: "Construction Logistics",
    description: "Specialised logistics services for construction companies and contractors.",
    features: ["Site clearance", "Material transport", "Equipment moving", "Waste removal coordination"],
  },
  {
    icon: Briefcase,
    title: "Corporate Logistics",
    description: "Tailored logistics solutions for businesses of all sizes and industries.",
    features: ["Regular delivery routes", "Inventory management", "Bulk transportation", "Contract services"],
  },
  {
    icon: Users,
    title: "Breezyeer Service",
    description: "Hire young, energetic helpers for events, labour tasks, and any job where extra hands are needed.",
    features: ["Flexible team sizes (1-20 helpers)", "Event assistance", "General labour", "Same-day availability"],
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partner with <span className="text-teal-500">Breezyee</span> <span className="text-purple-500">Moves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beat the competition with a service that's fast, insured, and purpose-driven. Covering London & Surrounding
            Areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Link
              href={`/services#${service.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")}`}
              key={index}
            >
              <Card
                id={service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}
                className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500 cursor-pointer transform hover:scale-105 transition-all duration-200"
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-purple-500 mb-3" />
                  <CardTitle className="text-teal-600">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Businesses Trust Us</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-purple-600 mb-2">Focus on Growth</h4>
                <p className="text-sm text-gray-600">Let us handle logistics whilst you focus on core operations.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-purple-600 mb-2">Scalable Solutions</h4>
                <p className="text-sm text-gray-600">Tailored services from SMEs to large enterprises.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-purple-600 mb-2">CSR Leadership</h4>
                <p className="text-sm text-gray-600">Strengthen your brand by supporting youth employment.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-purple-600 mb-2">Dedicated Team</h4>
                <p className="text-sm text-gray-600">
                  Assign our trained crews to your projects for seamless collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Services Section */}
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Specialised Business Solutions</h3>
            <p className="text-lg opacity-90">
              Partnering with industries to provide tailored logistics and moving solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Key className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">Estate Agents</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• End-of-tenancy clearances</li>
                <li>• Property staging support</li>
                <li>• Tenant move coordination</li>
                <li>• Emergency clearance services</li>
              </ul>
            </div>
            <div className="text-center">
              <HardHat className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">Construction Industry</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Site clearance and preparation</li>
                <li>• Material and equipment transport</li>
                <li>• Waste removal coordination</li>
                <li>• Project logistics support</li>
              </ul>
            </div>
            <div className="text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="font-semibold mb-2">Corporate Partners</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• Regular delivery contracts</li>
                <li>• Inventory management</li>
                <li>• Bulk transportation</li>
                <li>• Dedicated account management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
