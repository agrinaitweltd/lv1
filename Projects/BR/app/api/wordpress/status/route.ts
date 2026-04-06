import { NextResponse } from "next/server"

export async function GET() {
  try {
    const wordpressUrl = process.env.WORDPRESS_API_URL

    if (!wordpressUrl) {
      return NextResponse.json(
        {
          status: "error",
          message: "WordPress API URL not configured",
        },
        { status: 500 },
      )
    }

    // Test WordPress API connection
    const response = await fetch(`${wordpressUrl}/posts?per_page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      return NextResponse.json({
        status: "connected",
        message: "WordPress API is accessible",
        url: wordpressUrl,
      })
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: `WordPress API returned ${response.status}`,
          url: wordpressUrl,
        },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("WordPress connection error:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to WordPress API",
      },
      { status: 500 },
    )
  }
}
