import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Our Services - Professional Removal & Moving Services | Breezyee Moves",
  description:
    "Comprehensive removal services in London: House removals from £350, office moves from £550, packing services, storage solutions, piano moving, and more. Fully insured team with competitive pricing.",
  keywords:
    "removal services London, house removals, office removals, packing services, storage solutions, piano moving, student moves, same day courier, furniture assembly, construction logistics, estate agent clearances, London moving company",
  openGraph: {
    title: "Our Services - Professional Removal & Moving Services | Breezyee Moves",
    description:
      "Comprehensive removal services in London: House removals from £350, office moves from £550, packing services, storage solutions, and more.",
    url: "https://www.breezyeemoves.co.uk/services",
    siteName: "Breezyee Moves",
    images: [
      {
        url: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
        width: 1200,
        height: 630,
        alt: "Breezyee Moves Services - Professional Removal Services London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.breezyeemoves.co.uk/services",
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
