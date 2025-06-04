import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, DollarSign, TrendingUp, ShoppingCart, Fuel, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Best Cash Back Credit Cards of 2025 | Highest Cash Back Rates - FinanceWise",
  description:
    "Find the best cash back credit cards of 2025. Compare the highest cash back rates, welcome bonuses, and rewards categories.",
  keywords: "cash back credit cards, best cash back cards, highest cash back rates, cash rewards",
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
    creditScore: "Good to Excellent",
    features: [
      "2% cash back on all purchases",
      "No annual fee",
      "No rotating categories to track",
      "No cap on earnings",
      "18-month 0% intro APR on balance transfers",
    ],
    pros: ["Simple 2% rate on everything", "No annual fee", "No spending caps"],
    cons: ["No welcome bonus", "Must pay bill to earn second 1%"],
    bestFor: "Those who want simple, high-rate cash back on all purchases",
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
    creditScore: "Good to Excellent",
    features: [
      "5% cash back on travel through Chase Ultimate Rewards",
      "3% on dining and drugstores",
      "1.5% on all other purchases",
      "$200 cash back bonus after spending $500",
      "15-month 0% intro APR",
    ],
    pros: ["Strong bonus categories", "Generous welcome bonus", "No annual fee"],
    cons: ["Lower base rate than some competitors", "Travel bonus requires Chase portal"],
    bestFor: "Those who spend heavily on dining and travel",
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
    creditScore: "Good to Excellent",
    features: [
      "5% cash back on rotating quarterly categories (up to $1,500)",
      "1% cash back on all other purchases",
      "Cashback Match for first year",
      "No annual fee",
      "Free FICO credit score",
    ],
    pros: ["Cashback Match doubles first year", "High quarterly rates", "Free credit score"],
    cons: ["Must activate quarterly categories", "5% rate is capped"],
    bestFor: "Those who can maximize rotating categories and want doubled first-year earnings",
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
    creditScore: "Good to Excellent",
    features: [
      "6% cash back at U.S. supermarkets (up to $6,000/year)",
      "6% cash back on select streaming subscriptions",
      "3% cash back at U.S. gas stations",
      "1% cash back on other purchases",
      "$300 statement credit after spending $3,000",
    ],
    pros: ["Highest grocery rate available", "Strong streaming category", "Large welcome bonus"],
    cons: ["Annual fee", "Grocery rate is capped", "Not accepted everywhere"],
    bestFor: "Heavy grocery spenders who can justify the annual fee",
  },
  {
    id: 5,
    name: "Capital One SavorOne Cash Rewards",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    cashBackRate: "1%-3%",
    structure: "3% dining/entertainment/groceries, 1% everything else",
    annualFee: "$0",
    welcomeBonus: "$200 cash back",
    creditScore: "Good to Excellent",
    features: [
      "3% cash back on dining, entertainment, and popular streaming",
      "3% at grocery stores",
      "1% on all other purchases",
      "$200 cash bonus after spending $500",
      "No foreign transaction fees",
    ],
    pros: ["Strong bonus categories", "No annual fee", "No foreign transaction fees"],
    cons: ["Lower base rate", "Bonus categories not as high as some competitors"],
    bestFor: "Those who spend on dining, entertainment, and groceries",
  },
]

export default function BestCashBackPage() {
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
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Cash Back Credit Cards of 2025</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Earn real cash back on your everyday purchases. Compare the highest cash back rates and find the perfect
              card for your spending habits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <DollarSign className="mr-2 h-4 w-4" />
                Find Best Cash Back Card
              </Button>
              <Button size="lg" variant="outline">
                Compare All Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Back Highlights */}
      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">6%</div>
              <div className="text-sm text-muted-foreground">Max Cash Back Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$300</div>
              <div className="text-sm text-muted-foreground">Max Welcome Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-muted-foreground">Annual Fee Options</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2x</div>
              <div className="text-sm text-muted-foreground">Cashback Match</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Cash Back Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Cash Back Credit Cards</h2>
          <div className="space-y-6">
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
                          <Badge variant="secondary">#{index + 1} Cash Back</Badge>
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
                        Rewards Details
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
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Credit Score:</span>
                          <span className="font-medium">{card.creditScore}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ShoppingCart className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
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
                  <div className="mt-4 p-3 bg-green-50 rounded-md">
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

      {/* Cash Back Categories */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Popular Cash Back Categories</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                    Groceries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Earn up to 6% cash back on grocery purchases with the right card.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Blue Cash Preferred®:</span>
                      <span className="font-medium text-green-600">6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Capital One SavorOne:</span>
                      <span className="font-medium text-green-600">3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-green-600" />
                    Gas Stations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Save money at the pump with high cash back rates on gas purchases.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Blue Cash Preferred®:</span>
                      <span className="font-medium text-green-600">3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discover it® (Q4 2024):</span>
                      <span className="font-medium text-green-600">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Everything Else
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get consistent cash back on all your other purchases.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Citi Double Cash®:</span>
                      <span className="font-medium text-green-600">2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chase Freedom Unlimited®:</span>
                      <span className="font-medium text-green-600">1.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Cash Back Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("credit-cards", "best-cash-back").map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/best-cash-back/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Credit Card Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Start earning cash back today</h2>
            <p className="mb-8 text-lg opacity-90">
              Turn your everyday spending into real cash rewards. Find the perfect cash back card for your lifestyle.
            </p>
            <Button size="lg" variant="secondary">
              <DollarSign className="mr-2 h-4 w-4" />
              Find My Cash Back Card
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
