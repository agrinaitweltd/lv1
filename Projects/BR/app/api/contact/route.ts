import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to your business email
    const { data, error } = await resend.emails.send({
      from: "Breezyee Moves Website <contactus@breezyeemoves.co.uk>",
      to: ["contactus@breezyeemoves.co.uk"],
      subject: `New Contact Form Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Inquiry</h1>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #40E0D0; padding-bottom: 10px;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            
            <h2 style="color: #333; border-bottom: 2px solid #9B59B6; padding-bottom: 10px;">Message</h2>
            <div style="background: white; padding: 15px; border-left: 4px solid #40E0D0; margin: 10px 0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f8f5; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This inquiry was submitted through the Breezyee Moves website contact form.
                Please respond within 24 hours for the best customer experience.
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: "Breezyee Moves <contactus@breezyeemoves.co.uk>",
      to: [email],
      subject: "Thank you for contacting Breezyee Moves!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Contacting Us!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p>Hi ${name},</p>
            
            <p>Thank you for reaching out to Breezyee Moves! We've received your inquiry and our team will get back to you within 24 hours.</p>
            
            <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
              <p style="margin-bottom: 0;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Call us directly at <strong>07398 395022</strong></li>
              <li>Visit our website at <strong>www.breezyeemoves.co.uk</strong></li>
              <li>Get a free quote online</li>
            </ul>
            
            <p>Best regards,<br>
            <strong>The Breezyee Moves Team</strong><br>
            <em>A move for you is a leap for the next generation</em></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
