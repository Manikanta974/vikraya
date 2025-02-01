"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
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
          User Dashboard
        </h1>
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Name: John Doe</p>
              <p>Email: john@example.com</p>
              <p>Location: Punjab, India</p>
              <Link href="/profile/edit">
                <Button className="mt-4">Edit Profile</Button>
              </Link>
            </CardContent>
          </Card>
          <Tabs defaultValue="transactions">
            <TabsList>
              <TabsTrigger value="transactions">Transaction History</TabsTrigger>
              <TabsTrigger value="auctions">My Auctions</TabsTrigger>
            </TabsList>
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <p>Wheat Auction #1</p>
                      <p>Bid Amount: $1000</p>
                      <p>Status: Won</p>
                    </li>
                    <li>
                      <p>Rice Auction #3</p>
                      <p>Bid Amount: $800</p>
                      <p>Status: Outbid</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="auctions">
              <Card>
                <CardHeader>
                  <CardTitle>My Auctions</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-4">Auctions Created</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex justify-between items-center">
                      <span>Corn Auction #2</span>
                      <div>
                        <Button variant="outline" size="sm" className="mr-2">
                          Pause
                        </Button>
                        <Button variant="outline" size="sm" className="mr-2">
                          Cancel
                        </Button>
                        <Button variant="outline" size="sm">
                          End
                        </Button>
                      </div>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Auctions Participated</h3>
                  <ul className="space-y-4">
                    <li>
                      <p>Wheat Auction #1</p>
                      <p>Your Bid: $1000</p>
                      <p>Status: Highest Bidder</p>
                    </li>
                    <li>
                      <p>Rice Auction #3</p>
                      <p>Your Bid: $800</p>
                      <p>Status: Outbid</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

