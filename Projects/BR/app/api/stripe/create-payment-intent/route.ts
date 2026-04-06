import { type NextRequest, NextResponse } from "next/server"
import { stripe, calculateServicePrice } from "@/lib/stripe"

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is initialized
    if (!stripe) {
      return NextResponse.json(
        { error: "Payment processing is not configured. Please contact support." },
        { status: 503 }
      )
    }

    const body = await request.json()
    const {
      serviceType,
      serviceSize,
      additionalServices = [],
      helpers,
      hours,
      customerEmail,
      customerName,
      customerPhone,
      moveDate,
      fromAddress,
      toAddress,
    } = body

    // Calculate total amount
    const amount = calculateServicePrice(serviceType, serviceSize, additionalServices, helpers, hours)

    if (amount < 50) {
      return NextResponse.json({ error: "Minimum payment amount is £0.50" }, { status: 400 })
    }

    // Create or retrieve customer
    let customer
    try {
      const existingCustomers = await stripe.customers.list({
        email: customerEmail,
        limit: 1,
      })

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0]
      } else {
        customer = await stripe.customers.create({
          email: customerEmail,
          name: customerName,
          phone: customerPhone,
          metadata: {
            source: "breezyee_website",
          },
        })
      }
    } catch (error) {
      console.error("Error creating/retrieving customer:", error)
      return NextResponse.json({ error: "Failed to process customer information" }, { status: 500 })
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      customer: customer.id,
      metadata: {
        serviceType,
        serviceSize,
        additionalServices: additionalServices.join(","),
        helpers: helpers?.toString() || "",
        hours: hours?.toString() || "",
        moveDate: moveDate || "",
        fromAddress: fromAddress || "",
        toAddress: toAddress || "",
        customerName,
        customerPhone,
      },
      description: `Breezyee Moves - ${serviceType} service`,
      receipt_email: customerEmail,
      setup_future_usage: "off_session", // For future payments
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount,
      currency: "gbp",
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
