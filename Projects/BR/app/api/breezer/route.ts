import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      taskType,
      customTask,
      helpersNeeded,
      date,
      timeSlot,
      customHours,
      location,
      duration,
      specialRequirements,
      message,
    } = body

    // Validate required fields
    if (!name || !email || !phone || !taskType || !helpersNeeded || !date || !timeSlot || !location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const actualTask = taskType === "Other (Please Specify)" ? customTask : taskType
    const actualTime = timeSlot === "Custom Hours" ? customHours : timeSlot

    // Send Breezer booking request to your business email
    const { data, error } = await resend.emails.send({
      from: "Breezyee Moves Website <contactus@breezyeemoves.co.uk>",
      to: ["contactus@breezyeemoves.co.uk"],
      subject: `New Breezer Booking: ${helpersNeeded} Helper(s) for ${actualTask}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Breezer Booking Request</h1>
            <p style="color: white; margin: 5px 0 0 0; font-size: 18px;">${helpersNeeded} Helper(s) Required</p>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #40E0D0; padding-bottom: 10px;">Customer Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <h2 style="color: #333; border-bottom: 2px solid #9B59B6; padding-bottom: 10px;">Booking Details</h2>
            <p><strong>Task Type:</strong> ${actualTask}</p>
            <p><strong>Helpers Needed:</strong> ${helpersNeeded}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${actualTime}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Expected Duration:</strong> ${duration || "Not specified"}</p>
            
            ${
              specialRequirements
                ? `
            <h3 style="color: #333;">Special Requirements:</h3>
            <p>${specialRequirements}</p>
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
                <strong>Action Required:</strong> Check Breezer availability and confirm booking within 2 hours.
                Estimated cost: £${Number.parseInt(helpersNeeded) * 12 * (duration ? Number.parseInt(duration) : 4)} (${helpersNeeded} helpers × £12/hour × ${duration || "4"} hours)
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
      subject: "Breezer Booking Request Received - Breezyee Moves",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Breezer Booking Received!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p>Hi ${name},</p>
            
            <p>Thank you for booking Breezers with us! We've received your request for ${helpersNeeded} helper(s) and our team is checking availability.</p>
            
            <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">What happens next?</h3>
              <ul style="margin-bottom: 0;">
                <li>We check helper availability for your date/time</li>
                <li>We match the right team for your task</li>
                <li>You'll receive confirmation within 2 hours</li>
                <li>Payment is taken on completion of work</li>
              </ul>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #9B59B6; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Your Booking Summary:</h3>
              <p><strong>Task:</strong> ${actualTask}</p>
              <p><strong>Helpers:</strong> ${helpersNeeded}</p>
              <p><strong>Date & Time:</strong> ${date} at ${actualTime}</p>
              <p><strong>Location:</strong> ${location}</p>
              <p style="margin-bottom: 0;"><strong>Estimated Cost:</strong> £${Number.parseInt(helpersNeeded) * 12 * (duration ? Number.parseInt(duration) : 4)} (${helpersNeeded} helpers × £12/hour)</p>
            </div>
            
            <p>Need immediate assistance? Call us at <strong>07398 395022</strong></p>
            
            <p>Best regards,<br>
            <strong>The Breezyee Moves Team</strong><br>
            <em>Empowering young people, one task at a time!</em></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Breezer booking request submitted successfully. We'll confirm availability within 2 hours.",
      bookingId: `BR${Date.now()}`,
    })
  } catch (error) {
    console.error("Breezer booking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
