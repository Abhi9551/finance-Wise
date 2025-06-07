"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, PiggyBank, DollarSign, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"

export default function SavingsCalculatorClient() {
  const [initialDeposit, setInitialDeposit] = useState("1000")
  const [monthlyDeposit, setMonthlyDeposit] = useState("100")
  const [interestRate, setInterestRate] = useState("4.5")
  const [timeYears, setTimeYears] = useState("5")
  const [results, setResults] = useState<{
    finalAmount: number
    totalDeposits: number
    totalInterest: number
  } | null>(null)

  const calculateSavings = () => {
    const principal = Number.parseFloat(initialDeposit) || 0
    const monthly = Number.parseFloat(monthlyDeposit) || 0
    const rate = (Number.parseFloat(interestRate) || 0) / 100 / 12
    const months = (Number.parseFloat(timeYears) || 0) * 12

    let balance = principal
    let totalDeposits = principal

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + rate) + monthly
      totalDeposits += monthly
    }

    const finalAmount = Math.round(balance * 100) / 100
    const totalInterest = Math.round((finalAmount - totalDeposits) * 100) / 100

    setResults({
      finalAmount,
      totalDeposits,
      totalInterest,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Calculator className="h-6 w-6 text-green-600" />
              <Badge variant="outline">Savings Calculator</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Savings Calculator</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Calculate how your savings will grow with compound interest and regular contributions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator Form */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  Savings Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="initial-deposit">Initial Deposit</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="initial-deposit"
                        type="number"
                        placeholder="1000"
                        value={initialDeposit}
                        onChange={(e) => setInitialDeposit(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-deposit">Monthly Contribution</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="monthly-deposit"
                        type="number"
                        placeholder="100"
                        value={monthlyDeposit}
                        onChange={(e) => setMonthlyDeposit(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest-rate">Annual Interest Rate (%)</Label>
                    <Input
                      id="interest-rate"
                      type="number"
                      step="0.1"
                      placeholder="4.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time-years">Time Period (Years)</Label>
                    <Input
                      id="time-years"
                      type="number"
                      placeholder="5"
                      value={timeYears}
                      onChange={(e) => setTimeYears(e.target.value)}
                    />
                  </div>

                  <Button onClick={calculateSavings} className="w-full bg-green-600 hover:bg-green-700">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Savings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Your Savings Results
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {results ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">${results.finalAmount.toLocaleString()}</div>
                      <p className="text-muted-foreground">Final Amount</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-blue-600">
                          ${results.totalDeposits.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Total Deposits</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-purple-600">
                          ${results.totalInterest.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">Interest Earned</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Total Deposits:</span>
                        <span className="font-medium">${results.totalDeposits.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Interest Earned:</span>
                        <span className="font-medium text-green-600">${results.totalInterest.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold border-t pt-2">
                        <span>Final Amount:</span>
                        <span className="text-green-600">${results.finalAmount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Growth Rate:</strong> Your money will grow by{" "}
                        {Math.round(((results.finalAmount - results.totalDeposits) / results.totalDeposits) * 100)}%
                        through compound interest!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <PiggyBank className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Enter your savings details and click calculate to see results
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Savings Tips</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Start Early
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The power of compound interest means starting early can significantly impact your savings growth, even
                  with smaller amounts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="h-5 w-5 text-blue-600" />
                  Automate Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Set up automatic transfers to your savings account to ensure consistent contributions without having
                  to think about it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                  High-Yield Accounts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose high-yield savings accounts to maximize your interest earnings and accelerate your savings
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Savings Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("banking", "savings")
              .slice(0, 6)
              .map((blog, index) => (
                <BlogCard
                  key={blog.slug}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.publishedAt}
                  href={`/blog/banking/savings/${blog.slug}`}
                  aosDelay={index * 100}
                />
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/banking/savings/explore">
                Explore More Savings Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
