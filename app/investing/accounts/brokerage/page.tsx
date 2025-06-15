import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Shield, DollarSign, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best Brokerage Accounts of 2025 | Top Investment Platforms - FinanceWise",
  description:
    "Find the best brokerage accounts of 2025 with low fees, excellent research tools, and user-friendly platforms for all investors.",
  keywords: "best brokerage accounts, investment platforms, stock trading, online brokers",
}

const brokerageAccounts = [
  {
    id: 1,
    brokerName: "Fidelity",
    accountName: "Brokerage Account",
    commissionFree: "Yes",
    accountMinimum: "$0",
    rating: 4.9,
    features: [
      "Commission-free stock and ETF trades",
      "Excellent research and analysis tools",
      "24/7 customer support",
      "Fractional shares available",
      "No account minimums or fees",
    ],
    pros: ["Outstanding research tools", "No fees or minimums", "Excellent customer service"],
    cons: ["Complex platform for beginners", "Limited cryptocurrency options"],
    bestFor: "Serious investors who want comprehensive research tools",
  },
  {
    id: 2,
    brokerName: "Charles Schwab",
    accountName: "One Brokerage Account",
    commissionFree: "Yes",
    accountMinimum: "$0",
    rating: 4.8,
    features: [
      "Commission-free stock and ETF trades",
      "Strong research and educational resources",
      "Physical branch locations",
      "Robo-advisor option available",
      "No account fees",
    ],
    pros: ["Physical branches available", "Great educational content", "Strong customer service"],
    cons: ["Platform can be overwhelming", "Limited international trading"],
    bestFor: "Investors who want both online and in-person support",
  },
  {
    id: 3,
    brokerName: "E*TRADE",
    accountName: "Core Portfolios",
    commissionFree: "Yes",
    accountMinimum: "$0",
    rating: 4.7,
    features: [
      "Commission-free stock and ETF trades",
      "Advanced trading platform",
      "Mobile app with full functionality",
      "Options trading available",
      "Banking services included",
    ],
    pros: ["Advanced trading tools", "Full-featured mobile app", "Banking integration"],
    cons: ["Higher fees for some services", "Complex for beginners"],
    bestFor: "Active traders who want advanced tools and features",
  },
]

export default function BestBrokerageAccountsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <Badge variant="outline">Brokerage Accounts</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Brokerage Accounts of 2025</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Find the best brokerage accounts with commission-free trading, excellent research tools, and low fees for
              all types of investors.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Find Best Broker
              </Button>
              <Button size="lg" variant="outline">
                Compare All Platforms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-muted-foreground">Commission Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-muted-foreground">Account Minimums</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">SIPC</div>
              <div className="text-sm text-muted-foreground">Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brokerage Accounts */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Brokerage Platforms</h2>
          <div className="space-y-6">
            {brokerageAccounts.map((account, index) => (
              <Card key={account.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{account.brokerName}</CardTitle>
                      <p className="text-muted-foreground">{account.accountName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="ml-1 font-medium">{account.rating}</span>
                        </div>
                        <Badge variant="secondary">#{index + 1} Best Broker</Badge>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-green-600">{account.commissionFree}</div>
                      <div className="text-sm text-muted-foreground">Commission-Free</div>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700">Open Account</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Account Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Commission-Free:</span>
                          <span className="font-medium text-green-600">{account.commissionFree}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Minimum:</span>
                          <span className="font-medium">{account.accountMinimum}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SIPC Protected:</span>
                          <span className="font-medium text-green-600">Yes</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {account.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold">Pros & Cons</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-green-600 mb-1">Pros:</p>
                          <ul className="space-y-1">
                            {account.pros.map((pro, idx) => (
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
                            {account.cons.map((con, idx) => (
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
                      <strong>Best for:</strong> {account.bestFor}
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
