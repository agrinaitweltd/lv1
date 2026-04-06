import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Removal Quote | Breezyee Moves London",
  description:
    "Contact Breezyee Moves for your free removal quote. Call 07398 395022 or email contactus@breezyeemoves.co.uk. Professional removal services across London & surrounding areas.",
  keywords:
    "contact Breezyee Moves, removal quote London, moving quote, house removal quote, office removal quote, contact removal company, London movers contact, free quote",
  openGraph: {
    title: "Contact Us - Get Your Free Removal Quote | Breezyee Moves London",
    description:
      "Contact Breezyee Moves for your free removal quote. Professional removal services across London & surrounding areas.",
    url: "https://www.breezyeemoves.co.uk/contact",
    siteName: "Breezyee Moves",
    images: [
      {
        url: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Breezyee Moves - Professional Removal Services London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://www.breezyeemoves.co.uk/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
