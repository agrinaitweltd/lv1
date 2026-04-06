import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    let event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    switch (event.type) {
      case "payment_intent.succeeded":
        await handlePaymentSuccess(event.data.object)
        break
      case "payment_intent.payment_failed":
        await handlePaymentFailure(event.data.object)
        break
      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object)
        break
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}

async function handlePaymentSuccess(paymentIntent: any) {
  const { metadata, amount, customer } = paymentIntent

  // Get customer details
  const customerDetails = await stripe.customers.retrieve(customer)

  // Send confirmation email to customer
  await resend.emails.send({
    from: "Breezyee Moves <payments@breezyeemoves.co.uk>",
    to: [(customerDetails as any).email],
    subject: "Payment Confirmed - Breezyee Moves",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Payment Confirmed!</h1>
        </div>
        
        <div style="padding: 20px;">
          <p>Hi ${metadata.customerName},</p>
          
          <p>Your payment of <strong>£${(amount / 100).toFixed(2)}</strong> has been successfully processed.</p>
          
          <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Service Details:</h3>
            <p><strong>Service:</strong> ${metadata.serviceType}</p>
            <p><strong>Size:</strong> ${metadata.serviceSize}</p>
            <p><strong>Move Date:</strong> ${metadata.moveDate}</p>
            <p><strong>From:</strong> ${metadata.fromAddress}</p>
            <p><strong>To:</strong> ${metadata.toAddress}</p>
          </div>
          
          <p>Our team will contact you within 24 hours to confirm your booking details.</p>
          
          <p>Questions? Call us at <strong>07398 395022</strong></p>
          
          <p>Best regards,<br>
          <strong>The Breezyee Moves Team</strong></p>
        </div>
      </div>
    `,
  })

  // Send notification to business
  await resend.emails.send({
    from: "Breezyee Moves <payments@breezyeemoves.co.uk>",
    to: ["contactus@breezyeemoves.co.uk"],
    subject: `Payment Received - £${(amount / 100).toFixed(2)} from ${metadata.customerName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Payment Received</h1>
        </div>
        
        <div style="padding: 20px;">
          <h2>New Payment: £${(amount / 100).toFixed(2)}</h2>
          
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${metadata.customerName}</p>
          <p><strong>Email:</strong> ${(customerDetails as any).email}</p>
          <p><strong>Phone:</strong> ${metadata.customerPhone}</p>
          
          <h3>Service Details:</h3>
          <p><strong>Service:</strong> ${metadata.serviceType}</p>
          <p><strong>Size:</strong> ${metadata.serviceSize}</p>
          <p><strong>Move Date:</strong> ${metadata.moveDate}</p>
          <p><strong>From:</strong> ${metadata.fromAddress}</p>
          <p><strong>To:</strong> ${metadata.toAddress}</p>
          
          <div style="background: #e8f8f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Action Required:</strong> Contact customer within 24 hours to confirm booking.
            </p>
          </div>
        </div>
      </div>
    `,
  })
}

async function handlePaymentFailure(paymentIntent: any) {
  const { metadata, customer } = paymentIntent
  const customerDetails = await stripe.customers.retrieve(customer)

  // Send failure notification to customer
  await resend.emails.send({
    from: "Breezyee Moves <contactus@breezyeemoves.co.uk>",
    to: [(customerDetails as any).email],
    subject: "Payment Issue - Breezyee Moves",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #dc3545; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Payment Issue</h1>
        </div>
        
        <div style="padding: 20px;">
          <p>Hi ${metadata.customerName},</p>
          
          <p>We encountered an issue processing your payment for your removal service.</p>
          
          <p>Please try again or contact us at <strong>07398 395022</strong> for assistance.</p>
          
          <p>Best regards,<br>
          <strong>The Breezyee Moves Team</strong></p>
        </div>
      </div>
    `,
  })
}

async function handleSubscriptionCreated(subscription: any) {
  // Handle storage subscription creation
  console.log("New subscription created:", subscription.id)
}
