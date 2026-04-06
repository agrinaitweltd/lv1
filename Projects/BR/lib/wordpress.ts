// WordPress API integration utilities
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || "https://your-wordpress-site.com/wp-json/wp/v2"

export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  slug: string
  date: string
  featured_media: number
  categories: number[]
  tags: number[]
  acf?: any // Advanced Custom Fields
}

export interface WordPressPage {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  slug: string
  date: string
  featured_media: number
  acf?: any
}

export interface WordPressService {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  slug: string
  acf?: {
    price?: string
    features?: string[]
    icon?: string
    description?: string
  }
}

export interface WordPressTestimonial {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  acf?: {
    customer_name?: string
    customer_location?: string
    rating?: number
    testimonial_text?: string
  }
}

// Fetch functions
export async function fetchWordPressPosts(limit = 10): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=${limit}&_embed`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    })

    if (!response.ok) {
      throw new Error("Failed to fetch posts")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress posts:", error)
    return []
  }
}

export async function fetchWordPressPage(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch page")
    }

    const pages = await response.json()
    return pages.length > 0 ? pages[0] : null
  } catch (error) {
    console.error("Error fetching WordPress page:", error)
    return null
  }
}

export async function fetchWordPressServices(): Promise<WordPressService[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/services?per_page=50&_embed`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch services")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress services:", error)
    return []
  }
}

export async function fetchWordPressTestimonials(): Promise<WordPressTestimonial[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/testimonials?per_page=20&_embed`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch testimonials")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching WordPress testimonials:", error)
    return []
  }
}

export async function fetchWordPressMedia(mediaId: number): Promise<string | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/media/${mediaId}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch media")
    }

    const media = await response.json()
    return media.source_url || null
  } catch (error) {
    console.error("Error fetching WordPress media:", error)
    return null
  }
}

// Custom post types for removal company
export async function fetchWordPressCustomField(postId: number, fieldName: string): Promise<any> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts/${postId}?_fields=acf`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch custom field")
    }

    const post = await response.json()
    return post.acf?.[fieldName] || null
  } catch (error) {
    console.error("Error fetching WordPress custom field:", error)
    return null
  }
}

// WordPress form submission (for contact forms, etc.)
export async function submitToWordPress(endpoint: string, data: any): Promise<boolean> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WORDPRESS_API_TOKEN}`, // If using JWT auth
      },
      body: JSON.stringify(data),
    })

    return response.ok
  } catch (error) {
    console.error("Error submitting to WordPress:", error)
    return false
  }
}

// Helper function to strip HTML tags from WordPress content
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim()
}

// Helper function to get excerpt from WordPress content
export function getExcerpt(content: string, length = 150): string {
  const stripped = stripHtmlTags(content)
  return stripped.length > length ? stripped.substring(0, length) + "..." : stripped
}
