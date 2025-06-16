import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Plane, MapPin, Shield, Globe, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best Travel Credit Cards of 2025 | Top Travel Rewards Cards - FinanceWise",
  description:
    "Find the best travel credit cards of 2025. Compare top travel rewards cards with airline miles, hotel points, and travel perks.",
  keywords: "best travel credit cards, travel rewards, airline miles, hotel points, travel perks",
}

const travelCards = [
  {
    id: 1,
    name: "Chase Sapphire Preferred® Card",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    annualFee: "$95",
    welcomeBonus: "60,000 points",
    bonusRequirement: "after spending $4,000 in first 3 months",
    rewardsRate: "1x-5x points",
    bestFor: "Flexible travel rewards",
    features: [
      "5x points on travel through Chase Ultimate Rewards",
      "3x points on dining",
      "2x points on other travel purchases",
      "25% more value when redeeming through Chase",
      "No foreign transaction fees",
      "Trip cancellation/interruption insurance",
    ],
    transferPartners: ["United", "Southwest", "British Airways", "Hyatt", "Marriott"],
    perks: [
      "Primary rental car insurance",
      "Trip delay reimbursement",
      "Baggage delay insurance",
      "Purchase protection",
    ],
  },
  {
    id: 2,
    name: "Capital One Venture Rewards Credit Card",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.7,
    annualFee: "$95",
    welcomeBonus: "75,000 miles",
    bonusRequirement: "after spending $4,000 in first 3 months",
    rewardsRate: "2x-5x miles",
    bestFor: "Simple travel rewards",
    features: [
      "2x miles on all purchases",
      "5x miles on hotels and rental cars through Capital One Travel",
      "No foreign transaction fees",
      "Transfer to 15+ airline and hotel partners",
      "Global Entry/TSA PreCheck credit",
    ],
    transferPartners: ["Turkish Airlines", "Air Canada", "British Airways", "Wyndham"],
    perks: [
      "$100 Global Entry/TSA PreCheck credit",
      "No blackout dates",
      "24/7 travel assistance",
      "Auto rental collision damage waiver",
    ],
  },
  {
    id: 3,
    name: "American Express® Gold Card",
    issuer: "American Express",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.8,
    annualFee: "$250",
    welcomeBonus: "60,000 points",
    bonusRequirement: "after spending $4,000 in first 6 months",
    rewardsRate: "1x-4x points",
    bestFor: "Dining and travel rewards",
    features: [
      "4x points at restaurants worldwide",
      "4x points at U.S. supermarkets (up to $25,000/year)",
      "3x points on flights",
      "1x points on other purchases",
      "No foreign transaction fees",
    ],
    transferPartners: ["Delta", "JetBlue", "British Airways", "Hilton", "Marriott"],
    perks: [
      "$120 dining credit annually",
      "$120 Uber Cash annually",
      "Baggage insurance plan",
      "Car rental loss and damage insurance",
    ],
  },
]

export default function BestTravelCreditCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
  <div className="container">
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <Plane className="h-6 w-6 text-green-600" />
        <Badge variant="outline">Travel Rewards</Badge>
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Best Travel Credit Cards of 2025
      </h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Earn miles, points, and travel perks with the top travel credit cards. Compare rewards rates, welcome
        bonuses, and exclusive travel benefits.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          <Plane className="mr-2 h-4 w-4" />
          Find Your Travel Card
        </Button>
        <Button size="lg" variant="outline">Compare All Cards</Button>
      </div>
    </div>
  </div>
</section>

{/* Quick Stats */}
<section className="border-b py-8">
  <div className="container">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">75,000+</div>
        <div className="text-sm text-muted-foreground">Max Welcome Bonus</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">5x</div>
        <div className="text-sm text-muted-foreground">Max Rewards Rate</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">15+</div>
        <div className="text-sm text-muted-foreground">Transfer Partners</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">$0</div>
        <div className="text-sm text-muted-foreground">Foreign Transaction Fees</div>
      </div>
    </div>
  </div>
</section>


     {/* Top Travel Cards */}
<section className="py-12">
  <div className="container">
    <h2 className="mb-8 text-center text-3xl font-bold">Top Travel Credit Cards</h2>
    <div className="space-y-8">
      {travelCards.map((card, index) => (
        <Card key={card.id} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.name}
                  width={80}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <p className="text-muted-foreground">{card.issuer}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-green-600 text-green-600" />
                      <span className="ml-1 font-medium">{card.rating}</span>
                    </div>
                    <Badge variant="secondary">{card.bestFor}</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href={`/credit-cards/${card.id}`}>Learn More</Link>
                </Button>
                <Button variant="outline">Apply Now</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Key Details */}
              <div>
                <h4 className="mb-3 font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  Key Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Fee:</span>
                    <span className="font-medium">{card.annualFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Welcome Bonus:</span>
                    <span className="font-medium">{card.welcomeBonus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rewards Rate:</span>
                    <span className="font-medium">{card.rewardsRate}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{card.bonusRequirement}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="mb-3 font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-green-600" />
                  Key Features
                </h4>
                <ul className="space-y-1 text-sm">
                  {card.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Travel Perks */}
              <div>
                <h4 className="mb-3 font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Travel Perks
                </h4>
                <ul className="space-y-1 text-sm">
                  {card.perks.slice(0, 4).map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transfer Partners */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="mb-3 font-semibold">Transfer Partners</h4>
              <div className="flex flex-wrap gap-2">
                {card.transferPartners.map((partner, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {partner}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}
