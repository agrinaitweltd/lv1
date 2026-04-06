"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Clock, MapPin, Package, Phone, Mail, CheckCircle, AlertCircle, CreditCard, Calculator } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { calculateServicePrice, formatPrice } from "@/lib/client-utils"
import PaymentForm from "@/components/payment/PaymentForm"

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    moveDate: "",
    timePreference: "",
    fromAddress: "",
    toAddress: "",
    bedrooms: "",
    additionalServices: [] as string[],
    specialItems: "",
    accessIssues: "",
    additionalInfo: "",
  })
  const { toast } = useToast()

  // Calculate price whenever relevant fields change
  useEffect(() => {
    if (formData.serviceType && formData.bedrooms) {
      const price = calculateServicePrice(
        formData.serviceType,
        formData.bedrooms,
        formData.additionalServices
      )
      setCalculatedPrice(price)
    } else {
      setCalculatedPrice(0)
    }
  }, [formData.serviceType, formData.bedrooms, formData.additionalServices])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare the data to match the API expectations
      const submitData = {
        ...formData,
        message: formData.additionalInfo, // Map additionalInfo to message field
      }

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        const result = await response.json()
        toast({
          title: "Quote Request Submitted!",
          description: "We'll get back to you within 2 hours with your personalized quote.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          moveDate: "",
          timePreference: "",
          fromAddress: "",
          toAddress: "",
          bedrooms: "",
          additionalServices: [],
          specialItems: "",
          accessIssues: "",
          additionalInfo: "",
        })
        setCalculatedPrice(0)
        setShowPayment(false)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit quote request")
      }
    } catch (error) {
      console.error("Quote submission error:", error)
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again or call us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePaymentSuccess = (paymentIntentId: string) => {
    toast({
      title: "Payment Successful!",
      description: "Your booking has been confirmed. We'll contact you within 24 hours.",
    })
    // Reset form after successful payment
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      moveDate: "",
      timePreference: "",
      fromAddress: "",
      toAddress: "",
      bedrooms: "",
      additionalServices: [],
      specialItems: "",
      accessIssues: "",
      additionalInfo: "",
    })
    setCalculatedPrice(0)
    setShowPayment(false)
  }

  const handlePaymentError = (error: string) => {
    toast({
      title: "Payment Error",
      description: error,
      variant: "destructive",
    })
  }

  const additionalServiceOptions = [
    { id: "packing", label: "Full Packing Service", price: "from £150" },
    { id: "storage", label: "Storage Solutions", price: "from £80/month" },
    { id: "cleaning", label: "End of Tenancy Cleaning", price: "from £120" },
    { id: "assembly", label: "Furniture Assembly", price: "from £60" },
    { id: "piano", label: "Piano Moving", price: "from £200" },
    { id: "insurance", label: "Premium Insurance", price: "from £50" },
  ]

  const canShowPayment = formData.name && formData.email && formData.phone && formData.serviceType && formData.bedrooms && calculatedPrice > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Instant Quote & Booking</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Instant Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant price and book your move immediately, or request a detailed quote within 2 hours.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-cyan-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call for Instant Quote</h3>
                  <p className="text-cyan-600 font-medium">07398 395022</p>
                  <p className="text-sm text-gray-600">Available 7am-8pm, 7 days a week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-cyan-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-cyan-600 font-medium">contactus@breezyeemoves.co.uk</p>
                  <p className="text-sm text-gray-600">Response within 2 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-cyan-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                <CardDescription className="text-cyan-100">
                  Fill out the details below for an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mr-2" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Move Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Package className="h-5 w-5 text-cyan-600 mr-2" />
                      Move Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) => handleInputChange("serviceType", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="house-removal">House Removal</SelectItem>
                            <SelectItem value="office-removal">Office Removal</SelectItem>
                            <SelectItem value="packing-services">Packing Service Only</SelectItem>
                            <SelectItem value="storage">Storage Service</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="bedrooms">Property Size *</Label>
                        <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange("bedrooms", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select property size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">Studio/Bedsit</SelectItem>
                            <SelectItem value="one-bed">1 Bedroom</SelectItem>
                            <SelectItem value="two-bed">2 Bedroom</SelectItem>
                            <SelectItem value="three-bed">3 Bedroom</SelectItem>
                            <SelectItem value="four-bed">4 Bedroom</SelectItem>
                            <SelectItem value="five-plus-bed">5+ Bedroom</SelectItem>
                            <SelectItem value="small">Small Office</SelectItem>
                            <SelectItem value="medium">Medium Office</SelectItem>
                            <SelectItem value="large">Large Office</SelectItem>
                            <SelectItem value="enterprise">Enterprise Office</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="moveDate">Preferred Move Date *</Label>
                        <Input
                          id="moveDate"
                          type="date"
                          value={formData.moveDate}
                          onChange={(e) => handleInputChange("moveDate", e.target.value)}
                          required
                          className="mt-1"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="timePreference">Time Preference</Label>
                        <Select
                          value={formData.timePreference}
                          onValueChange={(value) => handleInputChange("timePreference", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                            <SelectItem value="evening">Evening (5pm-8pm)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Addresses */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <MapPin className="h-5 w-5 text-cyan-600 mr-2" />
                      Addresses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fromAddress">Moving From *</Label>
                        <Textarea
                          id="fromAddress"
                          value={formData.fromAddress}
                          onChange={(e) => handleInputChange("fromAddress", e.target.value)}
                          required
                          className="mt-1"
                          rows={3}
                          placeholder="Full address including postcode"
                        />
                      </div>
                      <div>
                        <Label htmlFor="toAddress">Moving To *</Label>
                        <Textarea
                          id="toAddress"
                          value={formData.toAddress}
                          onChange={(e) => handleInputChange("toAddress", e.target.value)}
                          required
                          className="mt-1"
                          rows={3}
                          placeholder="Full address including postcode"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Services */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Services</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {additionalServiceOptions.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.additionalServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceToggle(service.id, checked as boolean)}
                          />
                          <div className="flex-1">
                            <Label htmlFor={service.id} className="font-medium cursor-pointer">
                              {service.label}
                            </Label>
                            <p className="text-sm text-cyan-600">{service.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Special Requirements */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="h-5 w-5 text-cyan-600 mr-2" />
                      Special Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="specialItems">Special Items</Label>
                        <Textarea
                          id="specialItems"
                          value={formData.specialItems}
                          onChange={(e) => handleInputChange("specialItems", e.target.value)}
                          className="mt-1"
                          rows={3}
                          placeholder="Piano, antiques, artwork, fragile items, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="accessIssues">Access Issues</Label>
                        <Textarea
                          id="accessIssues"
                          value={formData.accessIssues}
                          onChange={(e) => handleInputChange("accessIssues", e.target.value)}
                          className="mt-1"
                          rows={3}
                          placeholder="Stairs, narrow doorways, parking restrictions, etc."
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                        className="mt-1"
                        rows={4}
                        placeholder="Any other details that might help us provide an accurate quote"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 space-y-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    </Button>
                    
                    
                    {canShowPayment && (
                      <Button
                        type="button"
                        onClick={() => setShowPayment(true)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg"
                      >
                        <CreditCard className="h-5 w-5 mr-2" />
                        Book Now & Pay {formatPrice(calculatedPrice)}
                      </Button>
                    )}
                    
                    <p className="text-sm text-gray-600 text-center">
                      We'll respond within 2 hours with your personalized quote
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Pricing & Payment Sidebar */}
          <div className="lg:col-span-1">
            {/* Instant Pricing Card */}
            <Card className="border-cyan-200 shadow-xl mb-6">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Instant Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {calculatedPrice > 0 ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Estimated Total</p>
                      <p className="text-3xl font-bold text-green-600">{formatPrice(calculatedPrice)}</p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="capitalize">{formData.serviceType.replace("-", " ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="capitalize">{formData.bedrooms.replace("-", " ")}</span>
                      </div>
                      {formData.additionalServices.length > 0 && (
                        <div className="flex justify-between">
                          <span>Extras:</span>
                          <span>{formData.additionalServices.length} service(s)</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Book now</strong> to secure your date and get instant confirmation!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Select your service type and property size to see instant pricing
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Form */}
            {showPayment && canShowPayment && (
              <Card className="border-cyan-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="text-xl flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <PaymentForm
                    serviceType={formData.serviceType}
                    serviceSize={formData.bedrooms}
                    additionalServices={formData.additionalServices}
                    customerDetails={{
                      name: formData.name,
                      email: formData.email,
                      phone: formData.phone,
                      moveDate: formData.moveDate,
                      fromAddress: formData.fromAddress,
                      toAddress: formData.toAddress,
                    }}
                    amount={calculatedPrice}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                  
                  <Button
                    type="button"
                    onClick={() => setShowPayment(false)}
                    variant="outline"
                    className="w-full mt-4"
                  >
                    Back to Quote Form
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-cyan-200 text-center">
            <CardContent className="p-6">
              <CalendarDays className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-gray-600">7 days a week availability</p>
            </CardContent>
          </Card>
          <Card className="border-cyan-200 text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">Quote within 2 hours</p>
            </CardContent>
          </Card>
          <Card className="border-cyan-200 text-center">
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-gray-600">Transparent pricing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
