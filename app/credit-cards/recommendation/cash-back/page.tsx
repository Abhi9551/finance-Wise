import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, DollarSign, TrendingUp, ShoppingCart, Fuel, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best Cash Back Credit Cards | Earn Cash Back Rewards - FinanceWise",
  description:
    "Find the best cash back credit cards with highest rates and welcome bonuses. Get personalized cash back recommendations.",
  keywords: "cash back credit cards, cash back rewards, highest cash back rates, cash rewards",
}

const cashBackCards = [
  {
    id: 1,
    name: "Citi Double Cash® Card",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.8,
    cashBackRate: "2% on everything",
    structure: "1% when you buy + 1% when you pay",
    annualFee: "$0",
    welcomeBonus: "None",
    bestFor: "Simple, high-rate cash back",
    keyBenefits: [
      "2% cash back on all purchases",
      "No annual fee",
      "No rotating categories to track",
      "No cap on earnings",
      "18-month 0% intro APR on balance transfers",
    ],
    pros: ["Simple 2% rate on everything", "No annual fee", "No spending caps"],
    cons: ["No welcome bonus", "Must pay bill to earn second 1%"],
  },
  {
    id: 2,
    name: "Chase Freedom Unlimited®",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    cashBackRate: "1.5%-5%",
    structure: "5% travel, 3% dining/drugstores, 1.5% everything else",
    annualFee: "$0",
    welcomeBonus: "$200 cash back",
    bestFor: "Bonus categories + welcome bonus",
    keyBenefits: [
      "5% cash back on travel through Chase Ultimate Rewards",
      "3% on dining and drugstores",
      "1.5% on all other purchases",
      "$200 cash back bonus after spending $500",
      "15-month 0% intro APR",
    ],
    pros: ["Strong bonus categories", "Generous welcome bonus", "No annual fee"],
    cons: ["Lower base rate than some competitors", "Travel bonus requires Chase portal"],
  },
  {
    id: 3,
    name: "Discover it® Cash Back",
    issuer: "Discover",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.9,
    cashBackRate: "1%-5%",
    structure: "5% rotating categories, 1% everything else",
    annualFee: "$0",
    welcomeBonus: "Cashback Match™",
    bestFor: "Rotating categories + doubled first year",
    keyBenefits: [
      "5% cash back on rotating quarterly categories (up to $1,500)",
      "1% cash back on all other purchases",
      "Cashback Match for first year",
      "No annual fee",
      "Free FICO credit score",
    ],
    pros: ["Cashback Match doubles first year", "High quarterly rates", "Free credit score"],
    cons: ["Must activate quarterly categories", "5% rate is capped"],
  },
  {
    id: 4,
    name: "Blue Cash Preferred® Card",
    issuer: "American Express",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.6,
    cashBackRate: "1%-6%",
    structure: "6% groceries, 6% streaming, 3% gas, 1% everything else",
    annualFee: "$95",
    welcomeBonus: "$300 cash back",
    bestFor: "Heavy grocery spenders",
    keyBenefits: [
      "6% cash back at U.S. supermarkets (up to $6,000/year)",
      "6% cash back on select streaming subscriptions",
      "3% cash back at U.S. gas stations",
      "1% cash back on other purchases",
      "$300 statement credit after spending $3,000",
    ],
    pros: ["Highest grocery rate available", "Strong streaming category", "Large welcome bonus"],
    cons: ["Annual fee", "Grocery rate is capped", "Not accepted everywhere"],
  },
]

const cashBackCategories = [
  {
    category: "Groceries",
    description: "Earn up to 6% cash back on supermarket purchases",
    topCards: ["Blue Cash Preferred", "Capital One SavorOne", "Discover it"],
    maxRate: "6%",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    category: "Gas Stations",
    description: "Get cash back on fuel and gas station purchases",
    topCards: ["Blue Cash Preferred", "Discover it", "Chase Freedom Flex"],
    maxRate: "5%",
    icon: <Fuel className="h-5 w-5" />,
  },
  {
    category: "Dining",
    description: "Earn rewards on restaurant and food delivery",
    topCards: ["Chase Freedom Unlimited", "Capital One SavorOne", "Discover it"],
    maxRate: "3%",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    category: "Everything Else",
    description: "Consistent cash back on all other purchases",
    topCards: ["Citi Double Cash", "Chase Freedom Unlimited", "Capital One Quicksilver"],
    maxRate: "2%",
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

export default function CashBackRecommendationPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-cash-back")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              <Badge variant="outline">Cash Back Rewards</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Cash Back Credit Cards</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Earn real cash back on your everyday purchases. Get personalized recommendations for cash back credit
              cards that maximize your rewards based on your spending habits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <DollarSign className="mr-2 h-4 w-4" />
                Get My Cash Back Recommendations
              </Button>
              <Button size="lg" variant="outline">
                Compare Cash Back Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Back Categories */}
      <section className="py-12 border-b">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Maximize Cash Back by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cashBackCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mb-2 flex justify-center text-green-600">{category.icon}</div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Up to {category.maxRate}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="text-xs">
                    <strong>Top Cards:</strong>
                    <ul className="mt-1 space-y-1">
                      {category.topCards.map((card, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          • {card}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Cash Back Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Cash Back Credit Cards</h2>
          <div className="space-y-8">
            {cashBackCards.map((card, index) => (
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
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-green-600">{card.cashBackRate}</div>
                      <div className="text-sm text-muted-foreground">Cash Back</div>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700">Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Rewards Structure
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Structure:</span>
                          <p className="font-medium">{card.structure}</p>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Fee:</span>
                          <span className="font-medium">{card.annualFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Welcome Bonus:</span>
                          <span className="font-medium">{card.welcomeBonus}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.keyBenefits.slice(0, 4).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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

      {/* Cash Back Strategy Guide */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How to Maximize Cash Back Rewards</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                    Choose the Right Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Flat Rate Cards</h4>
                    <p className="text-sm text-muted-foreground">
                      Best for simplicity. Earn the same rate on all purchases without tracking categories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bonus Category Cards</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher rates on specific categories like groceries, gas, or dining. Great for targeted spending.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Optimization Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Track Your Spending</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyze your spending patterns to choose cards that maximize rewards on your top categories.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Consider Multiple Cards</h4>
                    <p className="text-sm text-muted-foreground">
                      Use different cards for different categories to maximize your overall cash back earnings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
