"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/client-utils"
import { CreditCard, Lock, Shield } from "lucide-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentFormProps {
  serviceType: string
  serviceSize: string
  additionalServices: string[]
  helpers?: number
  hours?: number
  customerDetails: {
    name: string
    email: string
    phone: string
    moveDate?: string
    fromAddress?: string
    toAddress?: string
  }
  amount: number
  onSuccess: (paymentIntentId: string) => void
  onError: (error: string) => void
}

function CheckoutForm({
  serviceType,
  serviceSize,
  additionalServices,
  helpers,
  hours,
  customerDetails,
  amount,
  onSuccess,
  onError,
}: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    // Create payment intent when component mounts
    fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serviceType,
        serviceSize,
        additionalServices,
        helpers,
        hours,
        customerEmail: customerDetails.email,
        customerName: customerDetails.name,
        customerPhone: customerDetails.phone,
        moveDate: customerDetails.moveDate,
        fromAddress: customerDetails.fromAddress,
        toAddress: customerDetails.toAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret)
        } else {
          onError(data.error || "Failed to initialize payment")
        }
      })
      .catch((error) => {
        onError("Failed to initialize payment")
      })
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements || !clientSecret) {
      return
    }

    setIsProcessing(true)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      onError("Card element not found")
      setIsProcessing(false)
      return
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: customerDetails.name,
          email: customerDetails.email,
          phone: customerDetails.phone,
        },
      },
    })

    if (error) {
      onError(error.message || "Payment failed")
    } else if (paymentIntent.status === "succeeded") {
      onSuccess(paymentIntent.id)
    }

    setIsProcessing(false)
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <CreditCard className="h-5 w-5" />
          Secure Payment
        </CardTitle>
        <CardDescription>Complete your booking with a secure payment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Order Summary */}
        <div className="space-y-3">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Service:</span>
              <span className="capitalize">{serviceType.replace("-", " ")}</span>
            </div>
            <div className="flex justify-between">
              <span>Size:</span>
              <span className="capitalize">{serviceSize.replace("-", " ")}</span>
            </div>
            {helpers && (
              <div className="flex justify-between">
                <span>Helpers:</span>
                <span>{helpers}</span>
              </div>
            )}
            {hours && (
              <div className="flex justify-between">
                <span>Hours:</span>
                <span>{hours}</span>
              </div>
            )}
            {additionalServices.length > 0 && (
              <div className="flex justify-between">
                <span>Additional Services:</span>
                <span>{additionalServices.length}</span>
              </div>
            )}
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>{formatPrice(amount)}</span>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <CardElement options={cardElementOptions} />
          </div>

          <Button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700"
          >
            {isProcessing ? "Processing..." : `Pay ${formatPrice(amount)}`}
          </Button>
        </form>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Lock className="h-3 w-3" />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            <span>PCI Compliant</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Your payment information is secure and encrypted. We never store your card details.
        </p>
      </CardContent>
    </Card>
  )
}

export default function PaymentForm(props: PaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  )
}
