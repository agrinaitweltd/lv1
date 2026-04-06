"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/breezyee-logo.png"
              alt="Breezyee Moves Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-500 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-500 transition-colors">
              Contact
            </Link>
            <Link href="/breezer" className="text-gray-700 hover:text-teal-500 transition-colors">
              Breezyeers
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white flex items-center" asChild>
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" /> 07398 395022
              </Link>
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white" asChild>
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-teal-500 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-teal-500 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-500 transition-colors">
                Contact
              </Link>
              <Link href="/breezer" className="text-gray-700 hover:text-teal-500 transition-colors">
                Breezyeers
              </Link>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white w-fit flex items-center" asChild>
                <Link href="/contact">
                  <Phone className="h-4 w-4 mr-2" /> 07398 395022
                </Link>
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white w-fit" asChild>
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
