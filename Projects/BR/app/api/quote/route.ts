import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Check if Resend API key is configured
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      serviceType,
      fromAddress,
      toAddress,
      moveDate,
      bedrooms,
      additionalServices,
      specialItems,
      message,
    } = body

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !fromAddress || !toAddress) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send detailed quote request to your business email
    if (!resend) {
      console.error("Resend API key not configured")
      return NextResponse.json({ 
        error: "Email service not configured. Please contact support." 
      }, { status: 500 })
    }

    const { data, error } = await resend.emails.send({
      from: "Breezyee Moves Website <contactus@breezyeemoves.co.uk>",
      to: ["contactus@breezyeemoves.co.uk"],
      subject: `New Quote Request from ${name} - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Quote Request</h1>
            <p style="color: white; margin: 5px 0 0 0; font-size: 18px;">${serviceType}</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #40E0D0; padding-bottom: 10px;">Customer Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <h2 style="color: #333; border-bottom: 2px solid #9B59B6; padding-bottom: 10px;">Move Details</h2>
            <p><strong>Move Type:</strong> ${serviceType}</p>
            <p><strong>From:</strong> ${fromAddress}</p>
            <p><strong>To:</strong> ${toAddress}</p>
            <p><strong>Preferred Date:</strong> ${moveDate || "Not specified"}</p>
            <p><strong>Bedrooms:</strong> ${bedrooms || "Not specified"}</p>
            
            ${
              additionalServices && additionalServices.length > 0
                ? `
            <h3 style="color: #333;">Additional Services:</h3>
            <ul>
              ${additionalServices.map((service: string) => `<li>${service}</li>`).join("")}
            </ul>
            `
                : ""
            }
            
            ${
              specialItems
                ? `
            <h3 style="color: #333;">Special Items:</h3>
            <p>${specialItems}</p>
            `
                : ""
            }
            
            ${
              message
                ? `
            <h3 style="color: #333;">Additional Information:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #40E0D0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            `
                : ""
            }
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f8f5; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Action Required:</strong> Please prepare and send a detailed quote within 2 hours.
                Customer expects a response within this timeframe.
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email: " + error }, { status: 500 })
    }

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: "Breezyee Moves <contactus@breezyeemoves.co.uk>",
        to: [email],
        subject: "Quote Request Received - Breezyee Moves",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Quote Request Received!</h1>
            </div>
            
            <div style="padding: 20px;">
              <p>Hi ${name},</p>
              
              <p>Thank you for requesting a quote from Breezyee Moves! We've received your ${serviceType.toLowerCase()} request and our team is preparing a detailed quote for you.</p>
              
              <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">What happens next?</h3>
                <ul style="margin-bottom: 0;">
                  <li>Our team reviews your requirements</li>
                  <li>We prepare a detailed, competitive quote</li>
                  <li>You'll receive it via email within 2 hours</li>
                  <li>We'll call to discuss any questions</li>
                </ul>
              </div>
              
              <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #9B59B6; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Your Move Summary:</h3>
                <p><strong>From:</strong> ${fromAddress}</p>
                <p><strong>To:</strong> ${toAddress}</p>
                <p><strong>Date:</strong> ${moveDate || "To be confirmed"}</p>
                <p style="margin-bottom: 0;"><strong>Type:</strong> ${serviceType}</p>
              </div>
              
              <p>Need immediate assistance? Call us at <strong>07398 395022</strong></p>
              
              <p>Best regards,<br>
              <strong>The Breezyee Moves Team</strong><br>
              <em>A Day's Move in a Breeze!</em></p>
            </div>
          </div>
        `,
      })
    } catch (confirmationError) {
      console.error("Confirmation email error:", confirmationError)
      // Don't fail the entire request if confirmation email fails
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully. We'll send you a detailed quote within 2 hours.",
      quoteId: `QT${Date.now()}`,
    })
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
