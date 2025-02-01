import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuctionDetailsPage() {
  const auction = {
    id: 1,
    title: "Premium Wheat",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hlYXR8ZW58MHx8MHx8fDA%3D",
    currentBid: 1000,
    timeRemaining: "2 days",
    location: "Punjab, India",
    description:
      "High-quality wheat harvested using organic farming methods. This batch of wheat was grown without the use of synthetic pesticides or fertilizers, ensuring a pure and natural product. The wheat has been carefully harvested at peak ripeness, resulting in plump, golden grains with excellent nutritional value.",
    details: [
      { label: "Quantity", value: "1000 kg" },
      { label: "Quality", value: "Premium Grade" },
      { label: "Price per kg", value: "$1" },
      { label: "Harvest Date", value: "15th June 2023" },
      { label: "Fertilizers Used", value: "Organic compost" },
      { label: "Growing Duration", value: "120 days" },
    ],
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              {auction.title}
            </h1>
            <div className="aspect-video relative mb-4">
              <Image
                src={auction.image || "/placeholder.svg"}
                alt={auction.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-xl mb-2">Current Highest Bid: ${auction.currentBid}</p>
            <p className="text-xl mb-2">Time Remaining: {auction.timeRemaining}</p>
            <p className="text-xl mb-4">Location: {auction.location}</p>
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p className="mb-4">{auction.description}</p>
            <h3 className="text-xl font-bold mb-2">Details</h3>
            <ul className="list-disc list-inside mb-4">
              {auction.details.map((detail, index) => (
                <li key={index}>
                  {detail.label}: {detail.value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Place Your Bid</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="bid-amount">Bid Amount (USD)</label>
                    <Input
                      id="bid-amount"
                      placeholder="Enter your bid amount"
                      type="number"
                      min={auction.currentBid + 1}
                    />
                  </div>
                  <Button className="w-full">Place Bid</Button>
                </form>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Bid History</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>User123: $1000 - 2 hours ago</li>
                  <li>FarmerBuyer: $950 - 5 hours ago</li>
                  <li>AgriTech: $900 - 1 day ago</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

