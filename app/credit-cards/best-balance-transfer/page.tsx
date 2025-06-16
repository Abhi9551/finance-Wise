import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, RefreshCw, Calculator, TrendingDown, Clock } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import creditCardsData from "@/data/blogs/credit-cards.json"

const balanceTransferCards = [
  {
    id: 1,
    name: "Citi Simplicity® Card",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    introAPR: "0% for 21 months",
    transferFee: "5% or $5 minimum",
    regularAPR: "18.24%-28.99%",
    annualFee: "$0",
    creditScore: "Good to Excellent",
    features: [
      "0% intro APR on balance transfers for 21 months",
      "0% intro APR on purchases for 12 months",
      "No late fees ever",
      "No penalty rate",
      "No annual fee",
    ],
    pros: ["Longest 0% period available", "No late fees", "Simple terms"],
    cons: ["No rewards program", "Balance transfer fee applies"],
    bestFor: "Those who need the longest time to pay off debt",
  },
  {
    id: 2,
    name: "Wells Fargo Reflect® Card",
    issuer: "Wells Fargo",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    introAPR: "0% for 21 months",
    transferFee: "3% for first 120 days, then 5%",
    regularAPR: "17.24%-28.99%",
    annualFee: "$0",
    creditScore: "Good to Excellent",
    features: [
      "0% intro APR on purchases and balance transfers for 21 months",
      "Reduced balance transfer fee for first 120 days",
      "Cell phone protection",
      "My Wells Fargo Deals",
      "No annual fee",
    ],
    pros: ["21-month 0% period", "Lower transfer fee initially", "Cell phone protection"],
    cons: ["No rewards program", "Transfer fee increases after 120 days"],
    bestFor: "Those who can transfer debt quickly to save on fees",
  },
  {
    id: 3,
    name: "BankAmericard® credit card",
    issuer: "Bank of America",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.3,
    introAPR: "0% for 18 months",
    transferFee: "3% or $10 minimum",
    regularAPR: "16.24%-26.24%",
    annualFee: "$0",
    creditScore: "Good to Excellent",
    features: [
      "0% intro APR on purchases and balance transfers for 18 months",
      "Lower balance transfer fee",
      "No annual fee",
      "Online and mobile account management",
      "FICO® Score for free",
    ],
    pros: ["Lower transfer fee", "Free FICO score", "18-month 0% period"],
    cons: ["Shorter intro period than competitors", "No rewards"],
    bestFor: "Those who want to minimize transfer fees",
  },
  {
    id: 4,
    name: "Chase Slate Edge℠",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.2,
    introAPR: "0% for 18 months",
    transferFee: "3% or $5 minimum",
    regularAPR: "17.24%-25.99%",
    annualFee: "$0",
    creditScore: "Good to Excellent",
    features: [
      "0% intro APR on purchases and balance transfers for 18 months",
      "1.5% cash back on purchases after intro period",
      "No annual fee",
      "Blueprint by Chase budgeting tools",
      "Free credit score access",
    ],
    pros: ["Earns rewards after intro period", "Budgeting tools included", "Lower transfer fee"],
    cons: ["Shorter intro period", "Rewards only after intro period ends"],
    bestFor: "Those who want rewards after paying off debt",
  },
]

const savingsCalculator = {
  currentBalance: 5000,
  currentAPR: 24.99,
  monthlyPayment: 200,
  scenarios: [
    {
      name: "Current Card",
      timeToPayoff: "31 months",
      totalInterest: "$1,247",
      totalPaid: "$6,247",
    },
    {
      name: "Balance Transfer Card",
      timeToPayoff: "25 months",
      totalInterest: "$247",
      totalPaid: "$5,247",
    },
  ],
}

export default function BestBalanceTransferPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
     <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
  <div className="container">
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <RefreshCw className="h-6 w-6 text-green-600" />
        <Badge variant="outline">Balance Transfer</Badge>
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        Best Balance Transfer Credit Cards of 2025
      </h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Pay off high-interest debt faster with 0% APR balance transfer offers. Save thousands in interest with the
        right card.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          <TrendingDown className="mr-2 h-4 w-4" />
          Find Best Transfer Card
        </Button>
        <Button size="lg" variant="outline">
          <Calculator className="mr-2 h-4 w-4" />
          Calculate Savings
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Savings Example */}
     <section className="py-12">
  <div className="container">
    <h2 className="mb-8 text-center text-3xl font-bold">Top Balance Transfer Cards</h2>
    <div className="space-y-6">
      {balanceTransferCards.map((card, index) => (
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
                    <Badge variant="secondary">#{index + 1} Best Transfer</Badge>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-2xl font-bold text-green-600">{card.introAPR}</div>
                <div className="text-sm text-muted-foreground">Intro APR</div>
                <Button className="mt-2 bg-green-600 hover:bg-green-700">Apply Now</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <h4 className="mb-3 font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  Transfer Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Intro APR:</span>
                    <span className="font-medium text-green-600">{card.introAPR}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transfer Fee:</span>
                    <span className="font-medium">{card.transferFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Regular APR:</span>
                    <span className="font-medium">{card.regularAPR}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Fee:</span>
                    <span className="font-medium">{card.annualFee}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Key Features</h4>
                <ul className="space-y-1 text-sm">
                  {card.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <RefreshCw className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
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
    </div>
  )
}
