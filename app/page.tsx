import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import "@/styles/button-animations.css"

export default function Home() {
  const trendingAuctions = [
    {
      id: 1,
      title: "Premium Wheat",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hlYXR8ZW58MHx8MHx8fDA%3D",
      currentBid: 1000,
      timeRemaining: "2 days",
    },
    {
      id: 2,
      title: "Organic Rice",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
      currentBid: 800,
      timeRemaining: "3 days",
    },
    {
      id: 3,
      title: "Fresh Corn",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D",
      currentBid: 600,
      timeRemaining: "1 day",
    },
  ]

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&auto=format&fit=crop&q=80"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center text-white hero-content max-w-4xl px-4">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
            <Image src="/brain-logo.svg" alt="Vikraya Logo" width={100} height={100} className="mx-auto" />
          </div>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Welcome to Vikraya
          </h1>
          <p className="mx-auto max-w-[800px] text-xl md:text-2xl mb-12 leading-relaxed text-gray-200">
            Revolutionizing agricultural trade through blockchain technology. Connect directly with farmers and buyers
            for transparent, secure, and fair trading.
          </p>
          <div className="space-x-6">
            <Link href="/create-auction">
              <Button
                size="lg"
                className="button-glow bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-6"
              >
                Create Auction
              </Button>
            </Link>
            <Link href="/auctions">
              <Button size="lg" variant="outline" className="button-glow border-2 text-lg px-8 py-6">
                View Auctions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>All transactions are recorded on the blockchain, ensuring complete transparency.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Direct Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect directly with buyers or sellers, eliminating intermediaries.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Smart contracts ensure secure and timely payments for all transactions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Top Trending Auctions
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {trendingAuctions.map((auction) => (
              <Link href={`/auctions/${auction.id}`} key={auction.id}>
                <Card className="cursor-pointer transition-transform hover:scale-105">
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

