import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Breezyee Moves - Professional Removal Services London | House & Office Moving",
  description:
    "Professional removal services across London & surrounding areas. House removals from £350, office moves from £550. Fully insured, youth-focused team. Free quotes available. Call 07398 395022.",
  keywords:
    "removal services London, house removals London, office removals London, moving company London, professional movers London, removal quotes London, packing services London, storage solutions London, piano moving London, student moves London, Breezyee Moves",
  openGraph: {
    title: "Breezyee Moves - Professional Removal Services London",
    description:
      "Professional removal services across London & surrounding areas. House removals from £350, office moves from £550. Free quotes available.",
    url: "https://www.breezyeemoves.co.uk",
    siteName: "Breezyee Moves",
    images: [
      {
        url: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
        width: 1200,
        height: 630,
        alt: "Breezyee Moves - Professional Removal Services London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breezyee Moves - Professional Removal Services London",
    description:
      "Professional removal services across London & surrounding areas. House removals from £350, office moves from £550. Free quotes available.",
    images: ["https://www.breezyeemoves.co.uk/images/breezyee-logo.png"],
  },
  alternates: {
    canonical: "https://www.breezyeemoves.co.uk",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}
