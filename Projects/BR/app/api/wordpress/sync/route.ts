import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

// WordPress webhook endpoint for content synchronization
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action, post_type, post_id } = body

    // Verify webhook secret for security
    const webhookSecret = request.headers.get("x-webhook-secret")
    if (webhookSecret !== process.env.WORDPRESS_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Handle different WordPress actions
    switch (action) {
      case "post_updated":
      case "post_published":
        // Revalidate relevant pages based on post type
        if (post_type === "page") {
          revalidatePath("/about")
          revalidatePath("/services")
          revalidatePath("/contact")
        } else if (post_type === "post") {
          revalidatePath("/blog")
          revalidatePath("/")
        } else if (post_type === "service") {
          revalidatePath("/services")
          revalidatePath("/")
        } else if (post_type === "testimonial") {
          revalidatePath("/")
        }
        break

      case "post_deleted":
        // Handle post deletion
        revalidatePath("/")
        revalidatePath("/services")
        revalidatePath("/blog")
        break

      default:
        console.log("Unhandled WordPress action:", action)
    }

    return NextResponse.json({
      success: true,
      message: "Content synchronized successfully",
      revalidated_paths: ["/", "/services", "/about", "/contact"],
    })
  } catch (error) {
    console.error("WordPress sync error:", error)
    return NextResponse.json({ error: "Sync failed" }, { status: 500 })
  }
}

// GET endpoint for manual content refresh
export async function GET() {
  try {
    // Revalidate all main pages
    revalidatePath("/")
    revalidatePath("/services")
    revalidatePath("/about")
    revalidatePath("/contact")
    revalidatePath("/blog")

    return NextResponse.json({
      success: true,
      message: "All content revalidated successfully",
    })
  } catch (error) {
    console.error("Manual revalidation error:", error)
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 })
  }
}
