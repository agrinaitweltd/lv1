"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">GET YOUR FREE QUOTE TODAY!</h2>
          <p className="text-xl text-gray-600">Ready to move? Contact us for a free quote or any questions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-600">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-teal-600 text-lg font-semibold mb-2">Thank you for your message!</div>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-teal-500 mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">07398 395022</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-purple-500 mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contactus@breezyeemoves.co.uk</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-teal-500 mr-3" />
                  <div>
                    <h3 className="font-semibold">Website</h3>
                    <p className="text-gray-600">www.breezyeemoves.co.uk</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-500 mr-3" />
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="text-gray-600">Covering London & Surrounding Areas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-teal-500 mr-3" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-600">Mon-Sun: Available 7 days a week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-teal-500 to-purple-500 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Company Information</h3>
                <div className="text-center space-y-2">
                  <p className="text-sm">BREEZYEE GROUP LTD</p>
                  <p className="text-sm">COMPANY NUMBER: 15484073</p>
                  <p className="text-sm opacity-90">Statistics Source: UK Office for National Statistics, 2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-500">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">QR Code for Quick Contact</h3>
                <div className="w-32 h-32 mx-auto rounded-lg flex items-center justify-center bg-white p-2 shadow-lg">
                  <Image
                    src="/images/breezyee-qr-code.jpg"
                    alt="Breezyee Moves Contact QR Code"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">Scan to get our contact details instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
