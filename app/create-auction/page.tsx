"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreateAuctionPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = document.cookie.includes("auth=")
    if (!isAuthenticated) {
      router.push("/auth")
    }
  }, [router])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
          Create Auction
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>Auction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission
              }}
            >
              <div className="space-y-2">
                <label htmlFor="crop-name">Crop Name</label>
                <Input id="crop-name" placeholder="Enter crop name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity">Quantity (kg)</label>
                <Input id="quantity" placeholder="Enter quantity" type="number" />
              </div>
              <div className="space-y-2">
                <label htmlFor="quality">Quality</label>
                <Input id="quality" placeholder="Enter quality grade" />
              </div>
              <div className="space-y-2">
                <label htmlFor="price">Starting Price per kg (USD)</label>
                <Input id="price" placeholder="Enter starting price" type="number" step="0.01" />
              </div>
              <div className="space-y-2">
                <label htmlFor="location">Location</label>
                <Input id="location" placeholder="Enter location" />
              </div>
              <div className="space-y-2">
                <label htmlFor="description">Description</label>
                <Textarea id="description" placeholder="Enter detailed description" />
              </div>
              <div className="space-y-2">
                <label htmlFor="photos">Upload Photos</label>
                <Input id="photos" type="file" multiple accept="image/*" />
              </div>
              <Button type="submit">Create Auction</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

