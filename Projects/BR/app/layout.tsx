import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoogleAnalytics from "@/components/seo/GoogleAnalytics"
import GoogleTagManager from "@/components/seo/GoogleTagManager"
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Breezyee Moves - Professional Removal Services London | House & Office Moving",
    template: "%s | Breezyee Moves - London's Premier Removal Company",
  },
  description:
    "Professional removal services across London & surrounding areas. House removals from £350, office moves from £550. Fully insured, youth-focused team. Free quotes available. Call 07398 395022.",
  keywords: [
    "removal services London",
    "house removals London",
    "office removals London",
    "moving company London",
    "professional movers London",
    "removal quotes London",
    "packing services London",
    "storage solutions London",
    "piano moving London",
    "student moves London",
    "estate agent clearances",
    "construction logistics London",
    "same day courier London",
    "furniture assembly London",
    "youth employment",
    "NEET opportunities",
    "Breezyee Moves",
    "London removals",
    "M25 removals",
    "competitive removal prices",
  ].join(", "),
  authors: [{ name: "Breezyee Moves", url: "https://www.breezyeemoves.co.uk" }],
  creator: "Breezyee Group Ltd",
  publisher: "Breezyee Group Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.breezyeemoves.co.uk"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.breezyeemoves.co.uk",
    siteName: "Breezyee Moves - Professional Removal Services London",
    title: "Breezyee Moves - Professional Removal Services London | House & Office Moving",
    description:
      "Professional removal services across London & surrounding areas. House removals from £350, office moves from £550. Fully insured, youth-focused team. Free quotes available.",
    images: [
      {
        url: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
        width: 1200,
        height: 630,
        alt: "Breezyee Moves - Professional Removal Services London",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breezyee Moves - Professional Removal Services London",
    description:
      "Professional removal services across London & surrounding areas. House removals from £350, office moves from £550. Free quotes available.",
    images: ["/images/breezyee-logo.png"],
    creator: "@BreezyeeMoves",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Business Services",
  classification: "Removal Services",
  icons: {
    icon: [
      { url: "/images/breezyee-logo.png", sizes: "96x96", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "64x64", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "48x48", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [{ url: "/images/breezyee-logo.png", type: "image/png", sizes: "96x96" }],
    apple: [
      { url: "/images/breezyee-logo.png", sizes: "180x180", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "152x152", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "144x144", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "120x120", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "114x114", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "76x76", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "72x72", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "60x60", type: "image/png" },
      { url: "/images/breezyee-logo.png", sizes: "57x57", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/images/breezyee-logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://www.breezyeemoves.co.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#40E0D0" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Favicon and icons */}
        <link rel="icon" href="/images/breezyee-logo.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/images/breezyee-logo.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/images/breezyee-logo.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/images/breezyee-logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/breezyee-logo.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/images/breezyee-logo.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/images/breezyee-logo.png" sizes="57x57" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Breezyee Moves",
              alternateName: "Breezyee Group Ltd",
              description:
                "Professional removal services across London & surrounding areas. House removals, office moves, packing services, and storage solutions.",
              url: "https://www.breezyeemoves.co.uk",
              logo: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
              image: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
              telephone: "+447398395022",
              email: "contactus@breezyeemoves.co.uk",
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressRegion: "Greater London",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "51.5074",
                longitude: "-0.1278",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "London",
                },
                {
                  "@type": "State",
                  name: "Greater London",
                },
              ],
              serviceType: [
                "House Removals",
                "Office Removals",
                "Packing Services",
                "Storage Solutions",
                "Piano Moving",
                "Student Moves",
                "Same Day Courier",
                "Furniture Assembly",
              ],
              priceRange: "£180-£1200+",
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
              currenciesAccepted: "GBP",
              openingHours: "Mo-Su 07:00-20:00",
              foundingDate: "2023",
              numberOfEmployees: "10-50",
              slogan: "A move for you is a leap for the next generation",
              brand: "Breezyee Moves",
              sameAs: [
                "https://www.facebook.com/breezyeemoves",
                "https://www.twitter.com/breezyeemoves",
                "https://www.instagram.com/breezyeemoves",
                "https://www.linkedin.com/company/breezyee-moves",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Removal Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "House Removals",
                      description: "Complete residential moving services",
                    },
                    price: "350",
                    priceCurrency: "GBP",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: "350",
                      maxPrice: "1200",
                      priceCurrency: "GBP",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sarah Johnson",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Absolutely fantastic service! Breezyee Moves team was professional, careful with our belongings, and made our house move completely stress-free.",
                },
              ],
            }),
          }}
        />

        {/* Organisation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Breezyee Group Ltd",
              legalName: "Breezyee Group Ltd",
              url: "https://www.breezyeemoves.co.uk",
              logo: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
              foundingDate: "2023",
              founders: [
                {
                  "@type": "Person",
                  name: "Breezyee Founder",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressRegion: "Greater London",
                addressCountry: "GB",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+447398395022",
                  contactType: "customer service",
                  email: "contactus@breezyeemoves.co.uk",
                  availableLanguage: "English",
                  areaServed: "GB",
                },
              ],
              sameAs: [
                "https://www.facebook.com/breezyeemoves",
                "https://www.twitter.com/breezyeemoves",
                "https://www.instagram.com/breezyeemoves",
                "https://www.linkedin.com/company/breezyee-moves",
              ],
            }),
          }}
        />

        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleTagManager />
          <Header />
          {children}
          <Footer />
          <GoogleAnalytics />
          <Toaster />
        </Suspense>
      </body>
    </html>
  )
}
