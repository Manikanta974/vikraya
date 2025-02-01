import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AuctionsPage() {
  const auctions = [
    {
      id: 1,
      title: "Premium Wheat",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hlYXR8ZW58MHx8MHx8fDA%3D",
      currentBid: 1000,
      timeRemaining: "2 days",
      location: "Punjab, India",
    },
    {
      id: 2,
      title: "Organic Rice",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
      currentBid: 800,
      timeRemaining: "3 days",
      location: "West Bengal, India",
    },
    {
      id: 3,
      title: "Fresh Corn",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D",
      currentBid: 600,
      timeRemaining: "1 day",
      location: "Karnataka, India",
    },
    {
      id: 4,
      title: "Golden Soybeans",
      image:
        "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c295YmVhbnN8ZW58MHx8MHx8fDA%3D",
      currentBid: 750,
      timeRemaining: "4 days",
      location: "Madhya Pradesh, India",
    },
    {
      id: 5,
      title: "Premium Cotton",
      image:
        "https://images.unsplash.com/photo-1594641746915-4f9f3fca2b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dG9ufGVufDB8fDB8fHww",
      currentBid: 1200,
      timeRemaining: "2 days",
      location: "Gujarat, India",
    },
    {
      id: 6,
      title: "Aromatic Basmati",
      image:
        "https://images.unsplash.com/photo-1626016769336-d1e5dc7d08d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzbWF0aSUyMHJpY2V8ZW58MHx8MHx8fDA%3D",
      currentBid: 950,
      timeRemaining: "5 days",
      location: "Haryana, India",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
          Active Auctions
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input className="flex-grow" placeholder="Search auctions..." type="search" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by crop" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wheat">Wheat</SelectItem>
              <SelectItem value="rice">Rice</SelectItem>
              <SelectItem value="corn">Corn</SelectItem>
              <SelectItem value="soybean">Soybean</SelectItem>
              <SelectItem value="cotton">Cotton</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="time-asc">Time: Ending Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {auctions.map((auction) => (
            <Card key={auction.id}>
              <CardHeader>
                <Image
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  width={500}
                  height={300}
                  className="rounded-t-lg object-cover h-48 w-full"
                />
                <CardTitle>{auction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current Highest Bid: ${auction.currentBid}</p>
                <p>Time Remaining: {auction.timeRemaining}</p>
                <p>Location: {auction.location}</p>
                <p className="mt-2">High-quality crop harvested using sustainable farming methods.</p>
                <Link href={`/auctions/${auction.id}`}>
                  <Button className="mt-4 w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

