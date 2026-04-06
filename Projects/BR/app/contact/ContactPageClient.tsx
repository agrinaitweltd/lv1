"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Globe, Briefcase, Users, Heart, Award } from "lucide-react"
import { useState } from "react"

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    experience: "",
    availability: "",
    transport: "",
    motivation: "",
    references: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          location: "",
          experience: "",
          availability: "",
          transport: "",
          motivation: "",
          references: "",
        })
      }
    } catch (error) {
      console.error("Error submitting application:", error)
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 mb-16 shadow-lg border-l-4 border-l-teal-500">
        <div className="text-center">
          <div className="text-teal-600 text-6xl mb-6">✓</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your interest in joining the Breezyee Moves team! We'll review your application and get back
            to you within 48 hours.
          </p>
          <div className="bg-teal-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Our HR team reviews your application</li>
              <li>• We'll contact you for an initial phone interview</li>
              <li>• Successful candidates invited for face-to-face meeting</li>
              <li>• Training and onboarding for successful applicants</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-8 mb-16 shadow-lg border-l-4 border-l-purple-500">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply to Join Our Team</h3>
        <p className="text-gray-600">
          Fill out the application below and take the first step towards joining our dynamic team!
        </p>
        <div className="bg-purple-50 p-4 rounded-lg mt-4">
          <p className="text-sm text-purple-700">
            <strong>NEET Focus:</strong> We specifically welcome applications from young people who are Not in
            Education, Employment, or Training. We believe everyone deserves a chance to build their future!
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age *
            </label>
            <Input
              id="age"
              name="age"
              type="number"
              min="16"
              max="30"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location/Postcode *
          </label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Where are you based?"
            required
            className="w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
              Availability *
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select availability</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="weekends">Weekends only</option>
              <option value="flexible">Flexible hours</option>
            </select>
          </div>
          <div>
            <label htmlFor="transport" className="block text-sm font-medium text-gray-700 mb-1">
              Transport *
            </label>
            <select
              id="transport"
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">How do you travel?</option>
              <option value="own-car">Own car</option>
              <option value="public-transport">Public transport</option>
              <option value="bicycle">Bicycle</option>
              <option value="walking">Walking distance</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Previous Experience
          </label>
          <Textarea
            id="experience"
            name="experience"
            rows={3}
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about any previous work experience, even if not in moving/logistics... Don't worry if you're NEET - we provide full training!"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you want to join Breezyee Moves? *
          </label>
          <Textarea
            id="motivation"
            name="motivation"
            rows={4}
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Tell us what motivates you and why you'd like to be part of our team..."
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-1">
            References
          </label>
          <Textarea
            id="references"
            name="references"
            rows={3}
            value={formData.references}
            onChange={handleChange}
            placeholder="Please provide contact details for 2 references (can be teachers, previous employers, community leaders, etc.)"
            className="w-full"
          />
        </div>

        <div className="bg-teal-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">What We Offer:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Competitive hourly rates starting from £11.50/hour</li>
            <li>• Full training and professional development</li>
            <li>• Branded uniforms and equipment provided</li>
            <li>• Flexible working arrangements</li>
            <li>• Opportunity to make a real difference in young people's lives</li>
            <li>• Career progression opportunities</li>
            <li>
              • <strong>NEET-friendly environment</strong> - we understand your journey
            </li>
          </ul>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg py-3"
        >
          {isSubmitting ? "Submitting Application..." : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}

function ContactForm() {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-teal-600 text-lg font-semibold mb-2">Thank you for your message!</div>
        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
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
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

export default function ContactPageClient() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">GET YOUR FREE QUOTE TODAY!</h1>
          <p className="text-xl text-gray-600">Ready to move? Contact us for a free quote or join our amazing team</p>
        </div>

        {/* Join the Team Section */}
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg p-8 mb-16 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Team!</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to be part of something bigger? We're always looking for energetic young people to join our mission
              of empowering the next generation while delivering exceptional moving services.
            </p>
            <div className="bg-white/20 p-4 rounded-lg mt-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold">
                <strong>NEET-Friendly:</strong> Not in Education, Employment, or Training? Perfect! We specialise in
                giving young people their first real opportunity to build a career.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="font-semibold mb-2">Youth Focus</h3>
              <p className="text-sm opacity-90">
                We specifically hire young people (NEET - Not in Education, Employment, or Training) and provide real
                opportunities for growth
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="font-semibold mb-2">Training Provided</h3>
              <p className="text-sm opacity-90">
                Full training, professional uniforms, and ongoing support for your development
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="font-semibold mb-2">Purpose-Driven</h3>
              <p className="text-sm opacity-90">
                Be part of a company that creates positive social impact while building your career
              </p>
            </div>
            <div className="text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm opacity-90">
                Opportunities to advance within the company and develop valuable skills
              </p>
            </div>
          </div>
        </div>

        <JobApplicationForm />

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-600">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
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
                <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">QR Code</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">Scan to get our contact details instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
