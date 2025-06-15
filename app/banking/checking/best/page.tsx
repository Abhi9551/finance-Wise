import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Landmark, Shield, DollarSign, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best Checking Accounts of 2025 | No Fee Options - FinanceWise",
  description:
    "Find the best checking accounts of 2025 with no monthly fees, high interest rates, and great features from top banks.",
  keywords: "best checking accounts, no fee checking, high yield checking, online banking",
}

const checkingAccounts = [
  {
    id: 1,
    bankName: "Ally Bank",
    accountName: "Interest Checking Account",
    apy: "0.25%",
    monthlyFee: "$0",
    minimumBalance: "$0",
    rating: 4.8,
    features: [
      "No monthly maintenance fees",
      "No minimum balance requirement",
      "Over 43,000 fee-free ATMs",
      "Mobile check deposit",
      "Overdraft protection available",
    ],
    pros: ["High interest rate for checking", "Excellent mobile app", "24/7 customer service"],
    cons: ["No physical branches", "Limited cash deposit options"],
  },
  {
    id: 2,
    bankName: "Charles Schwab",
    accountName: "High Yield Investor Checking",
    apy: "0.45%",
    monthlyFee: "$0",
    minimumBalance: "$0",
    rating: 4.9,
    features: [
      "No ATM fees worldwide",
      "No foreign transaction fees",
      "No minimum balance requirement",
      "Free checks",
      "Mobile and online banking",
    ],
    pros: ["No ATM fees anywhere", "Great for travelers", "High interest rate"],
    cons: ["Requires brokerage account", "Limited physical locations"],
  },
  {
    id: 3,
    bankName: "Capital One",
    accountName: "360 Checking",
    apy: "0.10%",
    monthlyFee: "$0",
    minimumBalance: "$0",
    rating: 4.6,
    features: [
      "No monthly fees or minimums",
      "Over 70,000 fee-free ATMs",
      "Mobile check deposit",
      "Zelle integration",
      "Early direct deposit",
    ],
    pros: ["Large ATM network", "User-friendly app", "No fees"],
    cons: ["Lower interest rate", "Limited branch network"],
  },
]

export default function BestCheckingAccountsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Landmark className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Checking Accounts</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Checking Accounts of 2025</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Find the best checking accounts with no monthly fees, high interest rates, and convenient features from
              top banks and credit unions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Landmark className="mr-2 h-4 w-4" />
                Find Best Account
              </Button>
              <Button size="lg" variant="outline">
                Compare All Accounts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Account Highlights */}
      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">0.45%</div>
              <div className="text-sm text-muted-foreground">Highest APY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">$0</div>
              <div className="text-sm text-muted-foreground">Monthly Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">70K+</div>
              <div className="text-sm text-muted-foreground">Free ATMs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">FDIC</div>
              <div className="text-sm text-muted-foreground">Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Checking Accounts */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Checking Accounts</h2>
          <div className="space-y-6">
            {checkingAccounts.map((account, index) => (
              <Card key={account.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{account.bankName}</CardTitle>
                      <p className="text-muted-foreground">{account.accountName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                          <span className="ml-1 font-medium">{account.rating}</span>
                        </div>
                        <Badge variant="secondary">#{index + 1} Best Checking</Badge>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-blue-600">{account.apy}</div>
                      <div className="text-sm text-muted-foreground">APY</div>
                      <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Open Account</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-blue-600" />
                        Account Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">APY:</span>
                          <span className="font-medium text-blue-600">{account.apy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monthly Fee:</span>
                          <span className="font-medium">{account.monthlyFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Minimum Balance:</span>
                          <span className="font-medium">{account.minimumBalance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">FDIC Insured:</span>
                          <span className="font-medium text-blue-600">Yes</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {account.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Landmark className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
         </div>
  )
}
