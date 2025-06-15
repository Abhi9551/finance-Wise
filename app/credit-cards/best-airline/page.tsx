"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, CheckCircle, ArrowRight, Luggage } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

const airlineCards = [
  {
    name: "Chase Sapphire Preferred",
    airline: "Multiple Airlines",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.8,
    annualFee: "$95",
    signupBonus: "60,000 points",
    milesRate: "2X on travel",
    perks: ["Priority boarding", "Free checked bags", "Airport lounge access"],
    bestFor: "Frequent flyers",
  },
  {
    name: "Delta SkyMiles Gold",
    airline: "Delta",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.6,
    annualFee: "$99",
    signupBonus: "40,000 miles",
    milesRate: "2X on Delta purchases",
    perks: ["Priority boarding", "Free checked bag", "20% savings on inflight purchases"],
    bestFor: "Delta loyalists",
  },
  {
    name: "United Explorer Card",
    airline: "United",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.5,
    annualFee: "$95",
    signupBonus: "50,000 miles",
    milesRate: "2X on United purchases",
    perks: ["Priority boarding", "Free checked bags", "United Club passes"],
    bestFor: "United frequent flyers",
  },
]

export default function BestAirlineCardsPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-airline")

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Airline Credit Cards of 2024</h1>
            <p className="text-xl md:text-2xl mb-8 text-sky-100">
              Earn miles, enjoy perks, and fly for less with top airline credit cards
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Plane className="w-5 h-5 mr-2" />
                Travel Rewards
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Luggage className="w-5 h-5 mr-2" />
                Travel Perks
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Top Airline Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Airline Credit Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airlineCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.name}
                    width={380}
                    height={240}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <Badge variant="outline">{card.airline}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Annual Fee</p>
                      <p className="text-blue-600">{card.annualFee}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Signup Bonus</p>
                      <p className="text-green-600">{card.signupBonus}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Miles Rate</p>
                    <p className="text-sm">{card.milesRate}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Travel Perks:</p>
                    {card.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
