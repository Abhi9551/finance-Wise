"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingDown, DollarSign, Clock } from "lucide-react"

interface CalculationResult {
  currentScenario: {
    monthsToPayoff: number
    totalInterest: number
    totalPaid: number
    monthlyPayment: number
  }
  transferScenario: {
    monthsToPayoff: number
    totalInterest: number
    totalPaid: number
    transferFee: number
    totalSavings: number
  }
}

export default function BalanceTransferCalculatorPage() {
  const [currentBalance, setCurrentBalance] = useState<string>("5000")
  const [currentAPR, setCurrentAPR] = useState<string>("24.99")
  const [monthlyPayment, setMonthlyPayment] = useState<string>("200")
  const [transferAPR, setTransferAPR] = useState<string>("0")
  const [transferPeriod, setTransferPeriod] = useState<string>("18")
  const [transferFeeRate, setTransferFeeRate] = useState<string>("3")
  const [regularTransferAPR, setRegularTransferAPR] = useState<string>("18.99")
  const [results, setResults] = useState<CalculationResult | null>(null)

  const calculateBalanceTransfer = () => {
    const balance = Number.parseFloat(currentBalance) || 0
    const currentRate = Number.parseFloat(currentAPR) / 100 / 12
    const payment = Number.parseFloat(monthlyPayment) || 0
    const transferRate = Number.parseFloat(transferAPR) / 100 / 12
    const transferMonths = Number.parseInt(transferPeriod) || 0
    const feeRate = Number.parseFloat(transferFeeRate) / 100
    const regularRate = Number.parseFloat(regularTransferAPR) / 100 / 12

    // Calculate current scenario
    let currentBalance_temp = balance
    let currentTotalInterest = 0
    let currentMonths = 0

    while (currentBalance_temp > 0 && currentMonths < 600) {
      const interestPayment = currentBalance_temp * currentRate
      const principalPayment = Math.min(payment - interestPayment, currentBalance_temp)

      if (principalPayment <= 0) break

      currentTotalInterest += interestPayment
      currentBalance_temp -= principalPayment
      currentMonths++
    }

    // Calculate transfer scenario
    const transferFee = balance * feeRate
    let transferBalance = balance + transferFee
    let transferTotalInterest = 0
    let transferMonths_count = 0

    // During intro period
    while (transferBalance > 0 && transferMonths_count < transferMonths) {
      const interestPayment = transferBalance * transferRate
      const principalPayment = Math.min(payment - interestPayment, transferBalance)

      if (principalPayment <= 0) break

      transferTotalInterest += interestPayment
      transferBalance -= principalPayment
      transferMonths_count++
    }

    // After intro period
    while (transferBalance > 0 && transferMonths_count < 600) {
      const interestPayment = transferBalance * regularRate
      const principalPayment = Math.min(payment - interestPayment, transferBalance)

      if (principalPayment <= 0) break

      transferTotalInterest += interestPayment
      transferBalance -= principalPayment
      transferMonths_count++
    }

    const totalSavings = currentTotalInterest + balance - (transferTotalInterest + balance + transferFee)

    setResults({
      currentScenario: {
        monthsToPayoff: currentMonths,
        totalInterest: currentTotalInterest,
        totalPaid: balance + currentTotalInterest,
        monthlyPayment: payment,
      },
      transferScenario: {
        monthsToPayoff: transferMonths_count,
        totalInterest: transferTotalInterest,
        totalPaid: balance + transferTotalInterest + transferFee,
        transferFee: transferFee,
        totalSavings: totalSavings,
      },
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Balance Transfer Calculator</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Balance Transfer Savings Calculator</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Calculate how much you could save by transferring your high-interest debt to a 0% APR balance transfer
              card.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <TrendingDown className="mr-2 h-4 w-4" />
                Calculate Savings
              </Button>
              <Button size="lg" variant="outline">
                View Best Transfer Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    Enter Your Debt Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="currentBalance">Current Balance</Label>
                      <Input
                        id="currentBalance"
                        type="number"
                        placeholder="5000"
                        value={currentBalance}
                        onChange={(e) => setCurrentBalance(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentAPR">Current APR (%)</Label>
                      <Input
                        id="currentAPR"
                        type="number"
                        placeholder="24.99"
                        value={currentAPR}
                        onChange={(e) => setCurrentAPR(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="monthlyPayment">Monthly Payment</Label>
                    <Input
                      id="monthlyPayment"
                      type="number"
                      placeholder="200"
                      value={monthlyPayment}
                      onChange={(e) => setMonthlyPayment(e.target.value)}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="mb-4 font-semibold">Balance Transfer Card Details</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="transferAPR">Intro APR (%)</Label>
                        <Input
                          id="transferAPR"
                          type="number"
                          placeholder="0"
                          value={transferAPR}
                          onChange={(e) => setTransferAPR(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="transferPeriod">Intro Period (months)</Label>
                        <Input
                          id="transferPeriod"
                          type="number"
                          placeholder="18"
                          value={transferPeriod}
                          onChange={(e) => setTransferPeriod(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                      <div>
                        <Label htmlFor="transferFeeRate">Transfer Fee (%)</Label>
                        <Input
                          id="transferFeeRate"
                          type="number"
                          placeholder="3"
                          value={transferFeeRate}
                          onChange={(e) => setTransferFeeRate(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="regularTransferAPR">Regular APR (%)</Label>
                        <Input
                          id="regularTransferAPR"
                          type="number"
                          placeholder="18.99"
                          value={regularTransferAPR}
                          onChange={(e) => setRegularTransferAPR(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={calculateBalanceTransfer} className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Savings
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {results ? (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          Your Potential Savings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600">
                            ${results.transferScenario.totalSavings.toLocaleString()}
                          </div>
                          <div className="text-muted-foreground">Total Interest Savings</div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Current Card</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span>Time to pay off:</span>
                            <span className="font-medium">
                              {Math.round(results.currentScenario.monthsToPayoff)} months
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total interest:</span>
                            <span className="font-medium text-red-600">
                              ${results.currentScenario.totalInterest.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total paid:</span>
                            <span className="font-medium">${results.currentScenario.totalPaid.toLocaleString()}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-500">
                        <CardHeader>
                          <CardTitle className="text-lg text-green-600">Balance Transfer Card</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span>Time to pay off:</span>
                            <span className="font-medium">
                              {Math.round(results.transferScenario.monthsToPayoff)} months
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total interest:</span>
                            <span className="font-medium text-green-600">
                              ${results.transferScenario.totalInterest.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transfer fee:</span>
                            <span className="font-medium">
                              ${results.transferScenario.transferFee.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total paid:</span>
                            <span className="font-medium">${results.transferScenario.totalPaid.toLocaleString()}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Calculator className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Ready to Calculate?</h3>
                      <p className="text-muted-foreground">
                        Enter your debt information to see how much you could save with a balance transfer.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Balance Transfer Tips</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Timing Your Transfer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Apply before you need it</h4>
                    <p className="text-sm text-muted-foreground">
                      Balance transfers can take 2-3 weeks to process, so apply early.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Transfer quickly</h4>
                    <p className="text-sm text-muted-foreground">
                      Some cards offer lower transfer fees for the first few months.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-blue-600" />
                    Maximizing Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Pay more than the minimum</h4>
                    <p className="text-sm text-muted-foreground">Use the 0% period to pay down principal faster.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Avoid new purchases</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on paying off the transferred balance during the intro period.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to start saving on interest?</h2>
            <p className="mb-8 text-lg opacity-90">
              Find the best balance transfer cards and start your journey to debt freedom.
            </p>
            <Button size="lg" variant="secondary">
              <TrendingDown className="mr-2 h-4 w-4" />
              View Best Balance Transfer Cards
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
