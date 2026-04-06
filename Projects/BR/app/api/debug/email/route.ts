import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    const resend = resendApiKey ? new Resend(resendApiKey) : null

    if (!resend) {
      return NextResponse.json({
        error: "Resend API key not configured",
        resendApiKey: resendApiKey ? "Present (hidden)" : "Missing",
        environment: process.env.NODE_ENV
      })
    }

    // Test email sending
    const { data, error } = await resend.emails.send({
      from: "Breezyee Moves <contactus@breezyeemoves.co.uk>",
      to: ["contactus@breezyeemoves.co.uk"],
      subject: "Email Debug Test - Breezyee Moves",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #40E0D0, #9B59B6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Email Debug Test</h1>
          </div>
          
          <div style="padding: 20px;">
            <h2>Email Configuration Test</h2>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p><strong>Environment:</strong> ${process.env.NODE_ENV}</p>
            <p><strong>Resend API Key:</strong> ${resendApiKey ? "Configured" : "Missing"}</p>
            <p><strong>From Address:</strong> contactus@breezyeemoves.co.uk</p>
            <p><strong>To Address:</strong> contactus@breezyeemoves.co.uk</p>
            
            <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #40E0D0; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">If you receive this email:</h3>
              <ul style="margin-bottom: 0;">
                <li>✅ Resend API key is working</li>
                <li>✅ Domain authentication is working</li>
                <li>✅ Email sending is functional</li>
              </ul>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #9B59B6; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">If you don't receive this email:</h3>
              <ul style="margin-bottom: 0;">
                <li>❌ Check your spam folder</li>
                <li>❌ Verify domain DNS records</li>
                <li>❌ Check Resend dashboard for errors</li>
                <li>❌ Verify API key is correct</li>
              </ul>
            </div>
            
            <p>Best regards,<br>
            <strong>The Breezyee Moves Team</strong></p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({
        error: "Failed to send test email",
        resendError: error,
        resendApiKey: resendApiKey ? "Present (hidden)" : "Missing",
        environment: process.env.NODE_ENV
      })
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      emailId: data?.id,
      resendApiKey: resendApiKey ? "Present (hidden)" : "Missing",
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    return NextResponse.json({
      error: "Debug email test failed",
      details: error,
      resendApiKey: process.env.RESEND_API_KEY ? "Present (hidden)" : "Missing",
      environment: process.env.NODE_ENV
    })
  }
} 