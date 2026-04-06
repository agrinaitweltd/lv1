import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { stripHtmlTags, getExcerpt } from "@/lib/wordpress"
import type { WordPressService } from "@/lib/wordpress"

interface WordPressServicesProps {
  services: WordPressService[]
}

export default function WordPressServices({ services }: WordPressServicesProps) {
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {services.map((service) => (
        <Card key={service.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              {service.acf?.icon && <div className="text-4xl">{service.acf.icon}</div>}
              {service.acf?.price && <span className="text-2xl font-bold text-blue-600">{service.acf.price}</span>}
            </div>
            <CardTitle className="text-2xl">{stripHtmlTags(service.title.rendered)}</CardTitle>
            <CardDescription className="text-lg">
              {service.acf?.description || getExcerpt(service.content.rendered, 100)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {service.acf?.features && (
              <ul className="space-y-3 mb-6">
                {service.acf.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div
              className="prose prose-sm mb-6"
              dangerouslySetInnerHTML={{
                __html: service.content.rendered,
              }}
            />

            <Button className="w-full" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
