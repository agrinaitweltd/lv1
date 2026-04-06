import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, age, location, experience, availability, transport, motivation, references } = body

    // Validate required fields
    if (!name || !email || !phone || !age || !location || !availability || !transport || !motivation) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send job application to your business email
    const { data, error } = await resend.emails.send({
      from: "Breezyee Moves Website <contactus@breezyeemoves.co.uk>",
      to: ["contactus@breezyeemoves.co.uk"],
      subject: `New Job Application from ${name} (Age: ${age})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Job Application</h1>
            <p style="color: white; margin: 5px 0 0 0; font-size: 18px;">Potential Team Member</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #40E0D0; padding-bottom: 10px;">Applicant Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location:</strong> ${location}</p>
            
            <h2 style="color: #333; border-bottom: 2px solid #9B59B6; padding-bottom: 10px;">Availability & Transport</h2>
            <p><strong>Availability:</strong> ${availability}</p>
            <p><strong>Transport:</strong> ${transport}</p>
            
            ${
              experience
                ? `
            <h3 style="color: #333;">Previous Experience:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #40E0D0;">
              ${experience.replace(/\n/g, "<br>")}
            </div>
            `
                : ""
            }
            
            <h3 style="color: #333;">Motivation:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #9B59B6;">
              ${motivation.replace(/\n/g, "<br>")}
            </div>
            
            ${
              references
                ? `
            <h3 style="color: #333;">References:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #40E0D0;">
              ${references.replace(/\n/g, "<br>")}
            </div>
            `
                : ""
            }
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f8f5; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Action Required:</strong> Review application and contact candidate within 48 hours.
                This application aligns with our mission to hire young people (NEET) and provide opportunities.
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

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "Breezyee Moves <contactus@breezyeemoves.co.uk>",
      to: [email],
      subject: "Application Received - Welcome to the Breezyee Moves Journey!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Application Received!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p>Hi ${name},</p>
            
            <p>Thank you for your interest in joining the Breezyee Moves team! We're excited that you want to be part of our mission to empower young people while delivering exceptional moving services.</p>
            
            <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">What happens next?</h3>
              <ul style="margin-bottom: 0;">
                <li>Our HR team reviews your application (within 48 hours)</li>
                <li>We'll contact you for an initial phone interview</li>
                <li>Successful candidates invited for face-to-face meeting</li>
                <li>Training and onboarding for successful applicants</li>
              </ul>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #9B59B6; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">What We're Looking For:</h3>
              <ul style="margin-bottom: 0;">
                <li>Enthusiasm and positive attitude</li>
                <li>Willingness to learn and grow</li>
                <li>Physical fitness for moving work</li>
                <li>Reliability and punctuality</li>
                <li>Team player mentality</li>
              </ul>
            </div>
            
            <p>We believe in giving young people real opportunities to build their careers and make a positive impact. Your application is important to us, and we'll be in touch soon!</p>
            
            <p>Questions? Call us at <strong>07398 395022</strong></p>
            
            <p>Best regards,<br>
            <strong>The Breezyee Moves Team</strong><br>
            <em>A move for you is a leap for the next generation!</em></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully. We'll review your application and get back to you within 48 hours.",
      applicationId: `APP${Date.now()}`,
    })
  } catch (error) {
    console.error("Job application error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
