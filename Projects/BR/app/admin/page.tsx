"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, ExternalLink, Database, Webhook, Settings } from "lucide-react"

export default function AdminPage() {
  const [isRevalidating, setIsRevalidating] = useState(false)
  const [lastSync, setLastSync] = useState<string | null>(null)
  const [wpStatus, setWpStatus] = useState<"connected" | "disconnected" | "checking">("checking")

  useEffect(() => {
    checkWordPressConnection()
    setLastSync(localStorage.getItem("lastWordPressSync"))
  }, [])

  const checkWordPressConnection = async () => {
    try {
      const response = await fetch("/api/wordpress/status")
      setWpStatus(response.ok ? "connected" : "disconnected")
    } catch (error) {
      setWpStatus("disconnected")
    }
  }

  const handleRevalidateContent = async () => {
    setIsRevalidating(true)
    try {
      const response = await fetch("/api/wordpress/sync", {
        method: "GET",
      })

      if (response.ok) {
        const timestamp = new Date().toLocaleString()
        setLastSync(timestamp)
        localStorage.setItem("lastWordPressSync", timestamp)
        alert("Content revalidated successfully!")
      } else {
        alert("Failed to revalidate content")
      }
    } catch (error) {
      alert("Error revalidating content")
    }
    setIsRevalidating(false)
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            WordPress <span className="text-teal-500">CMS</span> Admin
          </h1>
          <p className="text-xl text-gray-600">Manage your WordPress content integration and synchronization</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WordPress Connection Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                WordPress Connection
              </CardTitle>
              <CardDescription>Current status of WordPress API connection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Badge
                    variant={wpStatus === "connected" ? "default" : "destructive"}
                    className={wpStatus === "connected" ? "bg-green-500" : ""}
                  >
                    {wpStatus === "checking" ? "Checking..." : wpStatus === "connected" ? "Connected" : "Disconnected"}
                  </Badge>
                  {lastSync && <p className="text-sm text-gray-500 mt-2">Last sync: {lastSync}</p>}
                </div>
                <Button variant="outline" size="sm" onClick={checkWordPressConnection}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Check
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Content Synchronization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                Content Sync
              </CardTitle>
              <CardDescription>Manually refresh content from WordPress</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleRevalidateContent} disabled={isRevalidating} className="w-full">
                {isRevalidating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Revalidating...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Revalidate All Content
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-2">This will refresh all pages with latest WordPress content</p>
            </CardContent>
          </Card>
        </div>

        {/* WordPress Admin Links */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              WordPress Admin Access
            </CardTitle>
            <CardDescription>Quick links to manage your WordPress content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start" asChild>
                <a
                  href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL || "#"}/wp-admin`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  WordPress Dashboard
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a
                  href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL || "#"}/wp-admin/edit.php?post_type=service`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Manage Services
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a
                  href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL || "#"}/wp-admin/edit.php?post_type=testimonial`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Manage Testimonials
                </a>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <a
                  href={`${process.env.NEXT_PUBLIC_WORDPRESS_URL || "#"}/wp-admin/edit.php`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Manage Blog Posts
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>WordPress Setup Instructions</CardTitle>
            <CardDescription>Follow these steps to complete your WordPress CMS integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Install Required Plugins</h4>
                  <p className="text-sm text-gray-600">
                    Advanced Custom Fields Pro, Custom Post Type UI, JWT Authentication
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Create Custom Post Types</h4>
                  <p className="text-sm text-gray-600">Services and Testimonials with REST API enabled</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Configure Custom Fields</h4>
                  <p className="text-sm text-gray-600">
                    Set up ACF fields for services (price, features) and testimonials (rating, customer info)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">Set Environment Variables</h4>
                  <p className="text-sm text-gray-600">Configure WORDPRESS_API_URL and webhook settings</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Need help?</strong> Check the wordpress-setup.md file for detailed setup instructions and code
                examples.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
