"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, DollarSign, TrendingDown, Clock, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"

export default function CreditCardInterestCalculatorPage() {
  const [balance, setBalance] = useState<string>("5000")
  const [apr, setApr] = useState<string>("24.99")
  const [monthlyPayment, setMonthlyPayment] = useState<string>("200")
  const [results, setResults] = useState<any>(null)

  const calculateInterest = () => {
    const principal = Number.parseFloat(balance)
    const annualRate = Number.parseFloat(apr) / 100
    const monthlyRate = annualRate / 12
    const payment = Number.parseFloat(monthlyPayment)

    if (principal <= 0 || payment <= 0 || annualRate < 0) return

    let currentBalance = principal
    let totalInterest = 0
    let months = 0
    const maxMonths = 600 // 50 years max

    while (currentBalance > 0.01 && months < maxMonths) {
      const interestPayment = currentBalance * monthlyRate
      const principalPayment = Math.min(payment - interestPayment, currentBalance)

      if (principalPayment <= 0) {
        // Payment is less than interest, balance will never be paid off
        setResults({
          error: "Monthly payment is too low to pay off the balance. Increase your payment amount.",
        })
        return
      }

      totalInterest += interestPayment
      currentBalance -= principalPayment
      months++
    }

    const totalPaid = principal + totalInterest
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    setResults({
      months,
      years,
      remainingMonths,
      totalInterest: totalInterest.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      monthlyInterest: (totalInterest / months).toFixed(2),
    })
  }

  const blogs = getBlogsBySubcategory("credit-cards", "calculators")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800" variant="outline">
              <Calculator className="mr-2 h-4 w-4" />
              Interest Calculator
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Credit Card Interest Calculator</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Calculate how much interest you'll pay on your credit card balance and see how different payment amounts
              affect your payoff timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-orange-600" />
                  Calculate Your Interest
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="balance">Current Balance</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="balance"
                      type="number"
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                      className="pl-10"
                      placeholder="5000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="apr">Annual Percentage Rate (APR)</Label>
                  <div className="relative">
                    <Input
                      id="apr"
                      type="number"
                      step="0.01"
                      value={apr}
                      onChange={(e) => setApr(e.target.value)}
                      className="pr-8"
                      placeholder="24.99"
                    />
                    <span className="absolute right-3 top-3 text-sm text-muted-foreground">%</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="payment">Monthly Payment</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="payment"
                      type="number"
                      value={monthlyPayment}
                      onChange={(e) => setMonthlyPayment(e.target.value)}
                      className="pl-10"
                      placeholder="200"
                    />
                  </div>
                </div>

                <Button onClick={calculateInterest} className="w-full bg-orange-600 hover:bg-orange-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Interest
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  Your Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {results ? (
                  results.error ? (
                    <div className="text-center py-8">
                      <div className="text-red-600 font-medium mb-2">Payment Too Low</div>
                      <p className="text-sm text-muted-foreground">{results.error}</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{results.months}</div>
                          <div className="text-sm text-muted-foreground">Months to Pay Off</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {results.years}y {results.remainingMonths}m
                          </div>
                          <div className="text-sm text-muted-foreground">Time to Pay Off</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Total Interest Paid:</span>
                          <span className="text-lg font-bold text-red-600">${results.totalInterest}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Total Amount Paid:</span>
                          <span className="text-lg font-bold">${results.totalPaid}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Average Monthly Interest:</span>
                          <span className="text-lg font-bold text-orange-600">${results.monthlyInterest}</span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">💡 Money-Saving Tip</h4>
                        <p className="text-sm text-yellow-700">
                          Consider increasing your monthly payment or looking into a balance transfer card with 0% APR
                          to save on interest charges.
                        </p>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter your details and click calculate to see your results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Tips to Reduce Interest Charges</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Increase Your Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Even small increases to your monthly payment can significantly reduce total interest paid.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Pay more than the minimum whenever possible</li>
                    <li>• Apply windfalls like tax refunds to your balance</li>
                    <li>• Round up payments to the nearest $50 or $100</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Consider Balance Transfers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Transfer your balance to a 0% APR card to stop interest charges temporarily.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Look for 0% intro APR periods of 15-21 months</li>
                    <li>• Factor in balance transfer fees (typically 3-5%)</li>
                    <li>• Make a plan to pay off the balance during the intro period</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
