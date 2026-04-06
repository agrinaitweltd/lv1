interface StructuredDataProps {
  type: "FAQ" | "Service" | "Review" | "Breadcrumb"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case "FAQ":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Breezyee Moves",
            url: "https://www.breezyeemoves.co.uk",
          },
          areaServed: {
            "@type": "City",
            name: "London",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: data.name,
            itemListElement: data.offers?.map((offer: any) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: offer.name,
              },
              price: offer.price,
              priceCurrency: "GBP",
            })),
          },
        }

      case "Review":
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "MovingCompany",
            name: "Breezyee Moves",
          },
          author: {
            "@type": "Person",
            name: data.author,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: data.rating,
            bestRating: "5",
          },
          reviewBody: data.text,
          datePublished: data.date,
        }

      case "Breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.breadcrumbs.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }

      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}
