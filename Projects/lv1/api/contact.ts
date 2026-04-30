import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BUSINESS_EMAIL = 'flexiblezerorider@gmail.com'
const FROM_ADDRESS = 'Breezyee Moves <no-reply@breezyeemoves.co.uk>'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    service,
    propertySize,
    currentAddress,
    newAddress,
    moveDate,
    instructions,
    inventory,
  } = req.body as {
    firstName: string
    lastName: string
    email: string
    phone?: string
    service?: string
    propertySize?: string
    currentAddress?: string
    newAddress?: string
    moveDate?: string
    instructions?: string
    inventory?: Record<string, number>
  }

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Build inventory lines for business email
  const inventoryLines =
    inventory && Object.keys(inventory).length > 0
      ? Object.entries(inventory)
          .filter(([, qty]) => qty > 0)
          .map(([key, qty]) => {
            const [room, item] = key.split('::')
            return `  ${room} — ${item} x${qty}`
          })
          .join('\n')
      : null

  const businessEmailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; background: #f0edf4; margin: 0; padding: 0; }
  .wrapper { max-width: 640px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(142,94,162,0.10); }
  .header { background: linear-gradient(135deg, #8E5EA2 0%, #3CB6B0 100%); padding: 32px 36px; display: flex; align-items: center; gap: 18px; }
  .header img { height: 52px; width: auto; display: block; }
  .header-text h1 { color: #fff; font-size: 18px; margin: 0 0 2px; font-weight: 700; letter-spacing: -0.2px; }
  .header-text p { color: rgba(255,255,255,0.75); font-size: 13px; margin: 0; }
  .badge { background: #fff; color: #8E5EA2; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-top: 10px; }
  .body { padding: 36px; }
  .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8E5EA2; font-weight: 700; margin: 28px 0 12px; border-bottom: 2px solid #f0edf4; padding-bottom: 6px; }
  .section-title:first-child { margin-top: 0; }
  .row { display: flex; margin-bottom: 10px; }
  .label { font-size: 12px; color: #999; width: 130px; flex-shrink: 0; padding-top: 2px; }
  .value { font-size: 14px; color: #1a1a1a; font-weight: 600; flex: 1; }
  .inventory { background: #f9f7fb; border-left: 3px solid #8E5EA2; border-radius: 0 6px 6px 0; padding: 14px 18px; font-size: 13px; white-space: pre-line; color: #444; line-height: 1.8; }
  .footer { background: #f9f7fb; border-top: 1px solid #eee; padding: 18px 36px; font-size: 12px; color: #aaa; text-align: center; }
  .footer a { color: #3CB6B0; text-decoration: none; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <img src="https://breezyeemoves.co.uk/logo.png" alt="Breezyee Moves" />
      <div class="header-text">
        <h1>New Quote Request</h1>
        <p>Submitted via breezyeemoves.co.uk</p>
        <span class="badge">Action Required</span>
      </div>
    </div>
    <div class="body">
      <div class="section-title">Customer Details</div>
      <div class="row"><span class="label">Full Name</span><span class="value">${firstName} ${lastName}</span></div>
      <div class="row"><span class="label">Email</span><span class="value">${email}</span></div>
      ${phone ? `<div class="row"><span class="label">Phone</span><span class="value">${phone}</span></div>` : ''}

      <div class="section-title">Move Details</div>
      ${service ? `<div class="row"><span class="label">Service</span><span class="value">${service}</span></div>` : ''}
      ${propertySize ? `<div class="row"><span class="label">Property Size</span><span class="value">${propertySize}</span></div>` : ''}
      ${currentAddress ? `<div class="row"><span class="label">Current Address</span><span class="value">${currentAddress}</span></div>` : ''}
      ${newAddress ? `<div class="row"><span class="label">New Address</span><span class="value">${newAddress}</span></div>` : ''}
      ${moveDate ? `<div class="row"><span class="label">Move Date</span><span class="value">${moveDate}</span></div>` : ''}
      ${instructions ? `<div class="row"><span class="label">Instructions</span><span class="value">${instructions}</span></div>` : ''}
      ${inventoryLines ? `<div class="section-title">Item Inventory</div><div class="inventory">${inventoryLines}</div>` : ''}
    </div>
    <div class="footer">
      © 2026 Breezyee Moves · <a href="https://breezyeemoves.co.uk">breezyeemoves.co.uk</a>
    </div>
  </div>
</body>
</html>`

  const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; background: #f0edf4; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(142,94,162,0.10); }
  .header { background: linear-gradient(135deg, #8E5EA2 0%, #3CB6B0 100%); padding: 40px 36px; text-align: center; }
  .header img { height: 60px; width: auto; display: block; margin: 0 auto 16px; }
  .header h1 { color: #fff; font-size: 24px; margin: 0 0 6px; font-weight: 700; }
  .header p { color: rgba(255,255,255,0.8); font-size: 14px; margin: 0; letter-spacing: 0.3px; }
  .body { padding: 40px 36px 32px; }
  .greeting { font-size: 20px; font-weight: 700; color: #1a1a1a; margin: 0 0 14px; }
  .body p { font-size: 15px; color: #555; line-height: 1.75; margin: 0 0 16px; }
  .highlight { background: linear-gradient(135deg, #f3edf8 0%, #e8f8f7 100%); border-left: 4px solid #8E5EA2; padding: 18px 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
  .highlight strong { display: block; font-size: 16px; color: #8E5EA2; margin-bottom: 4px; }
  .highlight span { font-size: 14px; color: #555; }
  .contact-box { background: #f9f7fb; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .contact-box p { font-size: 14px; color: #666; margin: 6px 0; }
  .contact-box strong { color: #1a1a1a; }
  .contact-box a { color: #3CB6B0; text-decoration: none; }
  .divider { border: none; border-top: 1px solid #f0edf4; margin: 28px 0; }
  .sign-off { font-size: 15px; color: #555; line-height: 1.7; }
  .sign-off strong { color: #8E5EA2; }
  .footer { background: #f9f7fb; border-top: 1px solid #eee; padding: 20px 36px; font-size: 12px; color: #bbb; text-align: center; }
  .footer a { color: #3CB6B0; text-decoration: none; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <img src="https://breezyeemoves.co.uk/logo.png" alt="Breezyee Moves" />
      <h1>We've got your request!</h1>
      <p>Your trusted removal specialists</p>
    </div>
    <div class="body">
      <p class="greeting">Thank you, ${firstName}!</p>
      <p>We've received your removal quote request and our team is already reviewing the details you've submitted.</p>
      <div class="highlight">
        <strong>⏱ We'll be in touch within 2 hours</strong>
        <span>One of our team will send over your personalised quote shortly.</span>
      </div>
      <p>If you have any urgent questions in the meantime, don't hesitate to reach us directly:</p>
      <div class="contact-box">
        <p>📞 <strong>Phone:</strong> <a href="tel:+4407398395022">+44 07398 395022</a></p>
        <p>✉️ <strong>Email:</strong> <a href="mailto:contactus@breezyeemoves.co.uk">contactus@breezyeemoves.co.uk</a></p>
        <p>🕐 <strong>Hours:</strong> Mon–Sat, 7am–8pm</p>
      </div>
      <hr class="divider" />
      <p class="sign-off">We look forward to making your move as smooth and stress-free as possible.<br /><br />Warm regards,<br /><strong>The Breezyee Moves Team</strong></p>
    </div>
    <div class="footer">
      © 2026 Breezyee Moves · <a href="https://breezyeemoves.co.uk">breezyeemoves.co.uk</a>
    </div>
  </div>
</body>
</html>`

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: BUSINESS_EMAIL,
        subject: `New Quote Request from ${firstName} ${lastName}`,
        html: businessEmailHtml,
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: 'We\'ve received your request — Breezyee Moves',
        html: confirmationEmailHtml,
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
