import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Gift, TrendingUp, Clock, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Credit Card Bonus Offers of 2025 | Highest Welcome Bonuses - FinanceWise",
  description:
    "Find the best credit card bonus offers of 2025. Compare the highest welcome bonuses and sign-up offers from top credit cards.",
  keywords: "credit card bonus offers, welcome bonus, sign up bonus, credit card promotions",
}

const bonusOffers = [
  {
    id: 1,
    name: "Chase Sapphire Preferred® Card",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    welcomeBonus: "80,000 points",
    bonusValue: "$1,000",
    spendRequirement: "$4,000 in first 3 months",
    annualFee: "$95",
    category: "Travel",
    features: [
      "5x points on travel through Chase Ultimate Rewards",
      "3x points on dining",
      "2x points on other travel",
      "25% more value when redeeming through Chase",
      "Transfer to airline and hotel partners",
    ],
    bestFor: "Travel enthusiasts who want flexible redemption options",
  },
  {
    id: 2,
    name: "Capital One Venture X Rewards Credit Card",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.9,
    welcomeBonus: "75,000 miles",
    bonusValue: "$750",
    spendRequirement: "$4,000 in first 3 months",
    annualFee: "$395",
    category: "Premium Travel",
    features: [
      "2x miles on all purchases",
      "5x miles on hotels and rental cars through Capital One Travel",
      "$300 annual travel credit",
      "Priority Pass lounge access",
      "TSA PreCheck/Global Entry credit",
    ],
    bestFor: "Frequent travelers who want premium perks and benefits",
  },
  {
    id: 3,
    name: "American Express® Gold Card",
    issuer: "American Express",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.8,
    welcomeBonus: "60,000 points",
    bonusValue: "$600",
    spendRequirement: "$4,000 in first 6 months",
    annualFee: "$250",
    category: "Dining & Groceries",
    features: [
      "4x points at restaurants worldwide",
      "4x points at U.S. supermarkets (up to $25,000/year)",
      "3x points on flights",
      "$120 dining credit annually",
      "$120 Uber Cash annually",
    ],
    bestFor: "Heavy spenders on dining and groceries",
  },
  {
    id: 4,
    name: "Chase Freedom Unlimited®",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    welcomeBonus: "$200 cash back",
    bonusValue: "$200",
    spendRequirement: "$500 in first 3 months",
    annualFee: "$0",
    category: "Cash Back",
    features: [
      "5% cash back on travel through Chase Ultimate Rewards",
      "3% on dining and drugstores",
      "1.5% on all other purchases",
      "15-month 0% intro APR",
      "No annual fee",
    ],
    bestFor: "Those wanting cash back with no annual fee",
  },
  {
    id: 5,
    name: "Citi Premier® Card",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.6,
    welcomeBonus: "80,000 points",
    bonusValue: "$800",
    spendRequirement: "$4,000 in first 3 months",
    annualFee: "$95",
    category: "Flexible Rewards",
    features: [
      "3x points on travel, gas stations, supermarkets, and restaurants",
      "1x points on all other purchases",
      "Transfer to 18 airline and hotel partners",
      "No foreign transaction fees",
      "Citi Entertainment access",
    ],
    bestFor: "Those who want high earning rates in multiple categories",
  },
]

export default function BestBonusOffersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Gift className="h-6 w-6 text-orange-600" />
              <Badge variant="outline">Welcome Bonuses</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Best Credit Card Bonus Offers of 2025
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Maximize your rewards with the highest welcome bonuses available. Compare sign-up offers worth $600 to
              $1,000+ from top credit cards.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Gift className="mr-2 h-4 w-4" />
                Find Best Bonuses
              </Button>
              <Button size="lg" variant="outline">
                Compare All Offers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Highlights */}
      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">80,000</div>
              <div className="text-sm text-muted-foreground">Max Points Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">$1,000</div>
              <div className="text-sm text-muted-foreground">Max Bonus Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">3 months</div>
              <div className="text-sm text-muted-foreground">Typical Timeframe</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">$4,000</div>
              <div className="text-sm text-muted-foreground">Avg Spend Requirement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Bonus Offers */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Highest Welcome Bonuses</h2>
          <div className="space-y-6">
            {bonusOffers.map((card, index) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
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
                            <Star className="h-4 w-4 fill-orange-600 text-orange-600" />
                            <span className="ml-1 font-medium">{card.rating}</span>
                          </div>
                          <Badge variant="secondary">{card.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-orange-600">{card.welcomeBonus}</div>
                      <div className="text-lg font-semibold text-green-600">{card.bonusValue} value</div>
                      <div className="text-sm text-muted-foreground">{card.spendRequirement}</div>
                      <Button className="mt-2 bg-orange-600 hover:bg-orange-700">Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-orange-600" />
                        Bonus Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Welcome Bonus:</span>
                          <span className="font-medium">{card.welcomeBonus}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Estimated Value:</span>
                          <span className="font-medium text-green-600">{card.bonusValue}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Spend Requirement:</span>
                          <span className="font-medium">{card.spendRequirement}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Fee:</span>
                          <span className="font-medium">{card.annualFee}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-orange-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-md">
                    <p className="text-sm">
                      <strong>Best for:</strong> {card.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Guide */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How to Maximize Welcome Bonuses</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    Meeting Spend Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Plan Your Spending</h4>
                    <p className="text-sm text-muted-foreground">
                      Time your application with large purchases like home improvements, travel, or holiday shopping.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Use for Regular Expenses</h4>
                    <p className="text-sm text-muted-foreground">
                      Put all your regular spending on the new card to naturally meet the requirement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Don't Overspend</h4>
                    <p className="text-sm text-muted-foreground">
                      Only spend what you can afford to pay off. Interest charges can negate bonus value.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-orange-600" />
                    Maximizing Bonus Value
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Understand Redemption Options</h4>
                    <p className="text-sm text-muted-foreground">
                      Points and miles often have higher value when transferred to partners or used for travel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Time Your Redemptions</h4>
                    <p className="text-sm text-muted-foreground">
                      Look for transfer bonuses or special redemption offers to maximize value.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Consider Annual Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Factor in annual fees when calculating net bonus value, especially for premium cards.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to earn a massive welcome bonus?</h2>
            <p className="mb-8 text-lg opacity-90">
              Compare the best bonus offers and find the perfect card to maximize your rewards from day one.
            </p>
            <Button size="lg" variant="secondary">
              <Gift className="mr-2 h-4 w-4" />
              Find My Perfect Bonus
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
