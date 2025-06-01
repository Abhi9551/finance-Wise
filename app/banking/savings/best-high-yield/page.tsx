import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Shield, Calculator, PiggyBank } from "lucide-react"

export const metadata: Metadata = {
  title: "Best High-Yield Savings Accounts of 2025 | Top Rates - FinanceWise",
  description:
    "Find the best high-yield savings accounts of 2025. Compare top APY rates, fees, and features from leading online banks.",
  keywords: "high yield savings accounts, best savings rates, online savings accounts, high APY",
}

const savingsAccounts = [
  {
    id: 1,
    bankName: "Marcus by Goldman Sachs",
    accountName: "Online Savings",
    apy: "4.50%",
    minimumDeposit: "$0",
    monthlyFee: "$0",
    rating: 4.8,
    features: [
      "No minimum balance requirement",
      "No monthly maintenance fees",
      "FDIC insured up to $250,000",
      "24/7 customer support",
      "Easy online account management",
    ],
    pros: ["Consistently competitive rates", "No fees whatsoever", "Strong customer service"],
    cons: ["No physical branches", "No ATM card provided"],
  },
  {
    id: 2,
    bankName: "Ally Bank",
    accountName: "Online Savings Account",
    apy: "4.25%",
    minimumDeposit: "$0",
    monthlyFee: "$0",
    rating: 4.7,
    features: [
      "No minimum balance to earn APY",
      "No monthly maintenance fees",
      "FDIC insured",
      "Mobile app with high ratings",
      "Buckets feature for goal setting",
    ],
    pros: ["Excellent mobile app", "Helpful savings tools", "Strong customer service"],
    cons: ["Limited physical presence", "No cash deposits"],
  },
  {
    id: 3,
    bankName: "American Express",
    accountName: "Personal Savings",
    apy: "4.35%",
    minimumDeposit: "$0",
    monthlyFee: "$0",
    rating: 4.6,
    features: [
      "No minimum balance requirement",
      "No monthly fees",
      "FDIC insured",
      "Links to Amex checking account",
      "Award-winning customer service",
    ],
    pros: ["Trusted brand name", "Excellent customer service", "Easy integration with other Amex products"],
    cons: ["No physical branches", "Limited account features"],
  },
]

export default function BestHighYieldSavingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <PiggyBank className="h-6 w-6 text-green-600" />
              <Badge variant="outline">High-Yield Savings</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Best High-Yield Savings Accounts of 2025
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Maximize your savings with the highest APY rates available. Compare top online banks offering competitive
              rates with no fees and FDIC insurance.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Find Best Rates
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Savings Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Highlights */}
      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4.50%</div>
              <div className="text-sm text-muted-foreground">Highest APY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-muted-foreground">Minimum Deposit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-muted-foreground">Monthly Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">FDIC</div>
              <div className="text-sm text-muted-foreground">Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Savings Accounts */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top High-Yield Savings Accounts</h2>
          <div className="space-y-6">
            {savingsAccounts.map((account, index) => (
              <Card key={account.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{account.bankName}</CardTitle>
                      <p className="text-muted-foreground">{account.accountName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="ml-1 font-medium">{account.rating}</span>
                        </div>
                        <Badge variant="secondary">#{index + 1} Best Rate</Badge>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-green-600">{account.apy}</div>
                      <div className="text-sm text-muted-foreground">APY</div>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700">Open Account</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Account Details */}
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <PiggyBank className="h-4 w-4 text-green-600" />
                        Account Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">APY:</span>
                          <span className="font-medium text-green-600">{account.apy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Minimum Deposit:</span>
                          <span className="font-medium">{account.minimumDeposit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monthly Fee:</span>
                          <span className="font-medium">{account.monthlyFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">FDIC Insured:</span>
                          <span className="font-medium text-green-600">Yes</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {account.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pros & Cons */}
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

      {/* Savings Guide */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">High-Yield Savings Guide</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    What is a High-Yield Savings Account?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    A high-yield savings account offers significantly higher interest rates than traditional savings
                    accounts, typically 10-20 times higher than the national average.
                  </p>
                  <div>
                    <h4 className="font-semibold">Key Benefits:</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>• Higher APY rates (4%+ vs 0.01% national average)</li>
                      <li>• FDIC insurance protection</li>
                      <li>• Easy online access</li>
                      <li>• No or low fees</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-green-600" />
                    How to Choose the Best Account
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Consider These Factors:</h4>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li>
                        • <strong>APY:</strong> Higher is better, but rates can change
                      </li>
                      <li>
                        • <strong>Fees:</strong> Look for accounts with no monthly fees
                      </li>
                      <li>
                        • <strong>Minimums:</strong> Lower minimum deposits are better
                      </li>
                      <li>
                        • <strong>Access:</strong> Consider online vs. branch access needs
                      </li>
                      <li>
                        • <strong>Customer Service:</strong> 24/7 support is valuable
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Start earning more on your savings today</h2>
            <p className="mb-8 text-lg opacity-90">
              Don't let your money sit in a low-yield account. Compare rates and open a high-yield savings account in
              minutes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <PiggyBank className="mr-2 h-4 w-4" />
                Compare All Accounts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Savings Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
