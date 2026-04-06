import { NextResponse } from "next/server"

export async function GET() {
  // Google Search Console verification
  const verificationContent = `google-site-verification: google${process.env.GOOGLE_SEARCH_CONSOLE_ID}.html`

  return new NextResponse(verificationContent, {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
