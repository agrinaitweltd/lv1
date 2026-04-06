import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Breezyee%20intro%20video-XtHhGTZTQmjSsVn8iq8FsQCzwqqJAC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Teal-coloured overlay for brand consistency */}
        <div className="absolute inset-0 bg-teal-500 bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-teal-300">Breezyee</span> <span className="text-purple-300">Moves:</span>
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white drop-shadow-lg">
              A Day's Move in a <span className="text-purple-300">Breeze!</span>
            </h2>
          </div>
          <p className="text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-md">
            A move for you is a leap for the next generation. We bridge gaps for young people (NEET), empowering them to
            overcome challenges and build brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-4" asChild>
              <Link href="/quote">
                Get Free Quote Today! <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-400 text-white hover:bg-purple-400 hover:text-white bg-purple-500 bg-opacity-30 backdrop-blur-sm text-lg px-8 py-4"
              asChild
            >
              <Link href="/contact">Call: 07398 395022</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-teal-500 bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-10 w-10 text-white mx-auto mb-3" />
              <p className="text-lg font-semibold text-white">Fully Insured</p>
            </div>
            <div className="text-center bg-purple-500 bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-10 w-10 text-white mx-auto mb-3" />
              <p className="text-lg font-semibold text-white">Fast Service</p>
            </div>
            <div className="text-center bg-teal-500 bg-opacity-30 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-10 w-10 text-white mx-auto mb-3" />
              <p className="text-lg font-semibold text-white">Purpose-Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
