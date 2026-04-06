export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.breezyeemoves.co.uk/#localbusiness",
    name: "Breezyee Moves",
    image: "https://www.breezyeemoves.co.uk/images/breezyee-logo.png",
    telephone: "+447398395022",
    email: "contactus@breezyeemoves.co.uk",
    url: "https://www.breezyeemoves.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "London",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "Various",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    priceRange: "£180-£1200+",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "GBP",
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
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
