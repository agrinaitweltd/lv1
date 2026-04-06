import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-teal-500">Breezyee</span> <span className="text-purple-500">Moves</span>
            </h3>
            <p className="text-gray-400 mb-4">
              A move for you is a leap for the next generation. Professional removal services across London &
              surrounding areas.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-teal-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-teal-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-teal-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-teal-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-teal-500">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  House Removals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Estate Agent Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Construction Logistics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="/breezer" className="hover:text-white transition-colors">
                  Breezyeer Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-500">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-teal-500">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <span className="font-medium text-white">Phone:</span>
                <div>07398 395022</div>
              </div>
              <div>
                <span className="font-medium text-white">Email:</span>
                <div className="break-all">contactus@breezyeemoves.co.uk</div>
              </div>
              <div>
                <span className="font-medium text-white">Website:</span>
                <div className="break-all">www.breezyeemoves.co.uk</div>
              </div>
              <div>
                <span className="font-medium text-white">Service Area:</span>
                <div>London & Surrounding Areas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Breezyee Group Ltd. Company Number: 15484073 | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
