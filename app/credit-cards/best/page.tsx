import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, CreditCard, Shield, Zap } from "lucide-react"
import CreditCardComparison from "@/components/credit-cards/credit-card-comparison"
import CreditCardGuide from "@/components/credit-cards/credit-card-guide"

export const metadata: Metadata = {
  title: "Best Credit Cards of 2025 | Compare Top Rated Cards - FinanceWise",
  description:
    "Find the best credit cards of 2025. Compare top-rated cards with generous rewards, sign-up bonuses, and 0% APR offers. Expert reviews and ratings.",
  keywords: "best credit cards 2025, top credit cards, credit card reviews, rewards credit cards, cash back cards",
}

const topCreditCards = [
  {
    id: 1,
    name: "Discover it® Cash Back",
    issuer: "Discover",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.9,
    annualFee: "$0",
    introOffer: "Cashback Match™",
    rewardsRate: "1%-5%",
    rewardsType: "Cashback",
    recommendedScore: "690-850",
    scoreRange: "Good - Excellent",
    purchaseAPR: "0% intro APR on purchases for 6 months",
    balanceTransferAPR: "0% intro APR on balance transfers for 18 months",
    regularAPR: "18.24%-27.24% Variable APR",
    bestFor: "Long intro period + quarterly categories",
    features: [
      "5% cash back on rotating quarterly categories",
      "1% cash back on all other purchases",
      "Cashback Match for first year",
      "No annual fee",
      "Free FICO credit score",
    ],
    pros: [
      "Generous quarterly bonus categories",
      "Cashback Match doubles first year earnings",
      "No foreign transaction fees",
    ],
    cons: ["Must activate quarterly categories", "5% rate capped at $1,500 per quarter"],
  },
  {
    id: 2,
    name: "Wells Fargo Reflect® Card",
    issuer: "Wells Fargo",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    annualFee: "$0",
    introOffer: "N/A",
    rewardsRate: "N/A",
    rewardsType: "None",
    recommendedScore: "690-850",
    scoreRange: "Good - Excellent",
    purchaseAPR: "0% intro APR on Purchases for 21 months",
    balanceTransferAPR: "0% intro APR on Balance Transfers for 21 months",
    regularAPR: "17.24%, 23.74%, or 28.99% Variable APR",
    bestFor: "Longest Intro APR period",
    features: [
      "21-month 0% intro APR on purchases and balance transfers",
      "No annual fee",
      "Cell phone protection",
      "My Wells Fargo Deals",
    ],
    pros: [
      "Longest 0% intro period available",
      "No balance transfer fee for first 120 days",
      "Cell phone protection benefit",
    ],
    cons: ["No rewards program", "Balance transfer fee after 120 days"],
  },
  {
    id: 3,
    name: "Wells Fargo Active Cash® Card",
    issuer: "Wells Fargo",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    annualFee: "$0",
    introOffer: "$200",
    rewardsRate: "2%",
    rewardsType: "Cashback",
    recommendedScore: "690-850",
    scoreRange: "Good - Excellent",
    purchaseAPR: "0% intro APR on Purchases for 12 months",
    balanceTransferAPR: "0% intro APR on Balance Transfers for 12 months",
    regularAPR: "19.24%, 24.24%, or 29.24% Variable APR",
    bestFor: "2% cash back on everything",
    features: [
      "2% cash back on all purchases",
      "$200 cash rewards bonus",
      "12-month 0% intro APR",
      "No annual fee",
      "Cell phone protection",
    ],
    pros: ["Simple 2% rate on all purchases", "Generous welcome bonus", "No category restrictions"],
    cons: ["No bonus categories for higher earnings", "Foreign transaction fees apply"],
  },
  {
    id: 4,
    name: "Chase Freedom Unlimited®",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    annualFee: "$0",
    introOffer: "$200",
    rewardsRate: "1.5%-5%",
    rewardsType: "Cashback",
    recommendedScore: "690-850",
    scoreRange: "Good - Excellent",
    purchaseAPR: "0% intro APR on purchases for 15 months",
    balanceTransferAPR: "0% intro APR on balance transfers for 15 months",
    regularAPR: "18.99%-28.49% Variable APR",
    bestFor: "All-around cash back",
    features: [
      "5% cash back on travel through Chase Ultimate Rewards",
      "3% on dining and drugstores",
      "1.5% on all other purchases",
      "$200 cash back bonus",
      "15-month 0% intro APR",
    ],
    pros: ["Strong bonus categories", "Flexible redemption options", "No annual fee"],
    cons: ["Lower base rate than some competitors", "Foreign transaction fees"],
  },
  {
    id: 5,
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.7,
    annualFee: "$95",
    introOffer: "75,000 miles",
    rewardsRate: "2x-5x",
    rewardsType: "Miles",
    recommendedScore: "690-850",
    scoreRange: "Good - Excellent",
    purchaseAPR: "N/A",
    balanceTransferAPR: "N/A",
    regularAPR: "19.99%-29.24% Variable APR",
    bestFor: "Simple travel rewards",
    features: [
      "2x miles on all purchases",
      "5x miles on hotels and rental cars through Capital One Travel",
      "75,000 mile welcome bonus",
      "No foreign transaction fees",
      "Transfer partners for enhanced value",
    ],
    pros: ["Simple earning structure", "Valuable transfer partners", "No foreign transaction fees"],
    cons: ["Annual fee required", "No intro APR offer"],
  },
  {
    id: 6,
    name: "Chase Sapphire Preferred® Card",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    annualFee: "$95",
    introOffer: "60,000 points",
    rewardsRate: "1x-5x",
    rewardsType: "Points",
    recommendedScore: "690-850",
    scoreRange: "Good - Excellent",
    purchaseAPR: "N/A",
    balanceTransferAPR: "N/A",
    regularAPR: "19.99%-28.24% Variable APR",
    bestFor: "Bonus travel rewards",
    features: [
      "5x points on travel through Chase Ultimate Rewards",
      "3x points on dining",
      "2x points on other travel",
      "60,000 point welcome bonus",
      "25% more value when redeeming through Chase",
    ],
    pros: ["Excellent bonus categories", "Valuable transfer partners", "Strong welcome bonus"],
    cons: ["Annual fee required", "Foreign transaction fees"],
  },
]

export default function BestCreditCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="outline">
              Updated: June 1, 2025
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Credit Cards of 2025</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Our experts have reviewed and rated hundreds of credit cards to find the best options for rewards, sign-up
              bonuses, 0% APR periods, and credit building in 2025.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg">Find Your Perfect Card</Button>
              <Button size="lg" variant="outline">
                Compare All Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Expert Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span>Unbiased Ratings</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <span>500+ Cards Reviewed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Best Offers of 2025</h2>
          <CreditCardComparison cards={topCreditCards.slice(0, 4)} />
        </div>
      </section>

      {/* Detailed Card Reviews */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Detailed Reviews</h2>
          <div className="space-y-8">
            {topCreditCards.map((card, index) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
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
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="ml-1 font-medium">{card.rating}</span>
                          </div>
                          <Badge variant="secondary">{card.bestFor}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild>
                        <Link href={`/credit-cards/${card.id}`}>View Details</Link>
                      </Button>
                      <Button variant="outline">Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Key Details */}
                    <div>
                      <h4 className="mb-3 font-semibold">Key Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Fee:</span>
                          <span className="font-medium">{card.annualFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rewards Rate:</span>
                          <span className="font-medium">
                            {card.rewardsRate} {card.rewardsType}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Welcome Bonus:</span>
                          <span className="font-medium">{card.introOffer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Credit Score:</span>
                          <span className="font-medium">{card.scoreRange}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="mb-3 font-semibold">Key Features</h4>
                      <ul className="space-y-1 text-sm">
                        {card.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pros & Cons */}
                    <div>
                      <h4 className="mb-3 font-semibold">Pros & Cons</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="font-medium text-green-600 mb-1">Pros:</p>
                          <ul className="space-y-1">
                            {card.pros.slice(0, 2).map((pro, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-green-600">+</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-red-600 mb-1">Cons:</p>
                          <ul className="space-y-1">
                            {card.cons.slice(0, 2).map((con, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-red-600">-</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Card Guide */}
      <section className="py-12">
        <div className="container">
          <CreditCardGuide />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to find your perfect credit card?</h2>
            <p className="mb-8 text-lg opacity-90">
              Answer a few questions and we'll recommend the best cards for your needs and credit profile.
            </p>
            <Button size="lg" variant="secondary">
              Get Personalized Recommendations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
