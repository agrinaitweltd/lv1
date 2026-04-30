import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BUSINESS_EMAIL = 'flexiblezerorider@gmail.com'
const FROM_ADDRESS = 'LV Exterior Cleaning <no-reply@breezyeemoves.co.uk>'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    firstName,
    email,
    phone,
    instructions,
  } = req.body as {
    firstName: string
    lastName?: string
    email?: string
    phone?: string
    instructions?: string
  }

  if (!firstName || (!email && !phone)) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Build business email content
  const businessEmailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; background: #eff7f1; margin: 0; padding: 0; }
  .wrapper { max-width: 640px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(27,138,60,0.10); }
  .header { background: linear-gradient(135deg, #1B8A3C 0%, #1565C0 100%); padding: 32px 36px; }
  .header h1 { color: #fff; font-size: 18px; margin: 0 0 4px; font-weight: 700; }
  .header p { color: rgba(255,255,255,0.75); font-size: 13px; margin: 0; }
  .badge { background: #fff; color: #1B8A3C; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-top: 10px; }
  .body { padding: 36px; }
  .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #1B8A3C; font-weight: 700; margin: 28px 0 12px; border-bottom: 2px solid #eff7f1; padding-bottom: 6px; }
  .section-title:first-child { margin-top: 0; }
  .row { display: flex; margin-bottom: 10px; }
  .label { font-size: 12px; color: #999; width: 130px; flex-shrink: 0; padding-top: 2px; }
  .value { font-size: 14px; color: #1a1a1a; font-weight: 600; flex: 1; }
  .footer { background: #f6fbf7; border-top: 1px solid #eee; padding: 18px 36px; font-size: 12px; color: #aaa; text-align: center; }
  .footer a { color: #1565C0; text-decoration: none; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>Submitted via lvexteriorcleaning.co.uk</p>
      <span class="badge">Action Required</span>
    </div>
    <div class="body">
      <div class="section-title">Customer Details</div>
      <div class="row"><span class="label">Name</span><span class="value">${firstName}</span></div>
      ${phone ? `<div class="row"><span class="label">Phone</span><span class="value">${phone}</span></div>` : ''}
      ${email ? `<div class="row"><span class="label">Email</span><span class="value">${email}</span></div>` : ''}
      ${instructions ? `<div class="section-title">Message / What Needs Cleaning</div><div class="row"><span class="value">${instructions}</span></div>` : ''}
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} LV Exterior Cleaning &middot; <a href="https://lvexteriorcleaning.co.uk">lvexteriorcleaning.co.uk</a>
    </div>
  </div>
</body>
</html>`

  const confirmationEmailHtml = email ? `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; background: #eff7f1; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(27,138,60,0.10); }
  .header { background: linear-gradient(135deg, #1B8A3C 0%, #1565C0 100%); padding: 40px 36px; text-align: center; }
  .header h1 { color: #fff; font-size: 24px; margin: 0 0 6px; font-weight: 700; }
  .header p { color: rgba(255,255,255,0.8); font-size: 14px; margin: 0; }
  .body { padding: 40px 36px 32px; }
  .greeting { font-size: 20px; font-weight: 700; color: #1a1a1a; margin: 0 0 14px; }
  .body p { font-size: 15px; color: #555; line-height: 1.75; margin: 0 0 16px; }
  .highlight { background: linear-gradient(135deg, #eff7f1 0%, #e3f0fd 100%); border-left: 4px solid #1B8A3C; padding: 18px 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
  .highlight strong { display: block; font-size: 16px; color: #1B8A3C; margin-bottom: 4px; }
  .highlight span { font-size: 14px; color: #555; }
  .contact-box { background: #f6fbf7; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .contact-box p { font-size: 14px; color: #666; margin: 6px 0; }
  .contact-box a { color: #1565C0; text-decoration: none; }
  .divider { border: none; border-top: 1px solid #eff7f1; margin: 28px 0; }
  .sign-off { font-size: 15px; color: #555; line-height: 1.7; }
  .sign-off strong { color: #1B8A3C; }
  .footer { background: #f6fbf7; border-top: 1px solid #eee; padding: 20px 36px; font-size: 12px; color: #bbb; text-align: center; }
  .footer a { color: #1565C0; text-decoration: none; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>We've got your request!</h1>
      <p>Professional Exterior Cleaning</p>
    </div>
    <div class="body">
      <p class="greeting">Thank you, ${firstName}!</p>
      <p>We've received your cleaning quote request and will be in touch shortly.</p>
      <div class="highlight">
        <strong>We'll be in touch soon</strong>
        <span>You can also call or text directly for a quick response.</span>
      </div>
      <div class="contact-box">
        <p>&#128222; <a href="tel:07555653736">07555 653736</a></p>
        <p>&#128197; Available 7 days a week</p>
      </div>
      <hr class="divider" />
      <p class="sign-off">Thanks for choosing LV Exterior Cleaning!<br /><br /><strong>LV Exterior Cleaning</strong></p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} LV Exterior Cleaning &middot; <a href="https://lvexteriorcleaning.co.uk">lvexteriorcleaning.co.uk</a>
    </div>
  </div>
</body>
</html>` : null

  try {
    const sends: Promise<unknown>[] = [
      resend.emails.send({
        from: FROM_ADDRESS,
        to: BUSINESS_EMAIL,
        subject: `New Quote Request from ${firstName}${phone ? ' — ' + phone : ''}`,
        html: businessEmailHtml,
      }),
    ]
    if (confirmationEmailHtml && email) {
      sends.push(
        resend.emails.send({
          from: FROM_ADDRESS,
          to: email,
          subject: "We've received your request — LV Exterior Cleaning",
          html: confirmationEmailHtml,
        }),
      )
    }
    await Promise.all(sends)

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
