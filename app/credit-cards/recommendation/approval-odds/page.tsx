"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Target, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

const approvalFactors = [
  {
    factor: "Credit Score",
    weight: "35%",
    description: "Your FICO score is the most important factor in approval decisions",
    tips: [
      "Check your credit report for errors",
      "Pay down existing balances",
      "Don't apply for multiple cards at once",
    ],
  },
  {
    factor: "Income",
    weight: "25%",
    description: "Higher income increases your approval odds and credit limit",
    tips: [
      "Include all sources of income",
      "Consider household income if applicable",
      "Have income documentation ready",
    ],
  },
  {
    factor: "Credit History Length",
    weight: "20%",
    description: "Longer credit history shows stability and experience",
    tips: ["Keep old accounts open", "Don't close your oldest card", "Consider authorized user status"],
  },
  {
    factor: "Credit Utilization",
    weight: "20%",
    description: "Lower utilization shows responsible credit management",
    tips: ["Keep utilization below 30%", "Pay balances before statement dates", "Consider multiple payment cycles"],
  },
]

export default function ApprovalOddsPage() {
  const [creditScore, setCreditScore] = useState("")
  const [income, setIncome] = useState("")
  const [utilization, setUtilization] = useState("")
  const [creditHistory, setCreditHistory] = useState("")
  const [showResults, setShowResults] = useState(false)

  const calculateApprovalOdds = () => {
    const score = Number.parseInt(creditScore)
    const util = Number.parseInt(utilization)
    const history = Number.parseInt(creditHistory)

    let odds = 0

    // Credit score impact
    if (score >= 750) odds += 40
    else if (score >= 700) odds += 30
    else if (score >= 650) odds += 20
    else if (score >= 600) odds += 10

    // Utilization impact
    if (util <= 10) odds += 25
    else if (util <= 30) odds += 15
    else if (util <= 50) odds += 5

    // Credit history impact
    if (history >= 5) odds += 20
    else if (history >= 2) odds += 15
    else if (history >= 1) odds += 10
    else odds += 5

    // Income impact (simplified)
    if (Number.parseInt(income) >= 75000) odds += 15
    else if (Number.parseInt(income) >= 50000) odds += 10
    else if (Number.parseInt(income) >= 30000) odds += 5

    return Math.min(odds, 95) // Cap at 95%
  }

  const getApprovalLevel = (odds: number) => {
    if (odds >= 80) return { level: "Excellent", color: "green", description: "Very likely to be approved" }
    if (odds >= 60) return { level: "Good", color: "blue", description: "Good chance of approval" }
    if (odds >= 40) return { level: "Fair", color: "yellow", description: "Moderate chance of approval" }
    return { level: "Poor", color: "red", description: "Consider improving credit first" }
  }

  const getRecommendedCards = (odds: number) => {
    if (odds >= 80) {
      return [
        { name: "Chase Sapphire Preferred", type: "Premium Travel", approvalOdds: "95%" },
        { name: "American Express Gold", type: "Premium Rewards", approvalOdds: "90%" },
        { name: "Capital One Venture", type: "Travel Rewards", approvalOdds: "85%" },
      ]
    } else if (odds >= 60) {
      return [
        { name: "Chase Freedom Unlimited", type: "Cash Back", approvalOdds: "85%" },
        { name: "Discover it Cash Back", type: "Cash Back", approvalOdds: "80%" },
        { name: "Capital One Quicksilver", type: "Cash Back", approvalOdds: "75%" },
      ]
    } else if (odds >= 40) {
      return [
        { name: "Capital One Platinum", type: "Credit Building", approvalOdds: "70%" },
        { name: "Discover it Secured", type: "Secured Card", approvalOdds: "85%" },
        { name: "Capital One QuicksilverOne", type: "Fair Credit", approvalOdds: "65%" },
      ]
    } else {
      return [
        { name: "Discover it Secured", type: "Secured Card", approvalOdds: "90%" },
        { name: "Capital One Secured", type: "Secured Card", approvalOdds: "85%" },
        { name: "OpenSky Secured", type: "Secured Card", approvalOdds: "95%" },
      ]
    }
  }

  const blogs = getBlogsBySubcategory("credit-cards", "recommendation")

  if (showResults) {
    const odds = calculateApprovalOdds()
    const approvalLevel = getApprovalLevel(odds)
    const recommendedCards = getRecommendedCards(odds)

    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="outline">
                Approval Results
              </Badge>
              <h1 className="text-3xl font-bold mb-4">Your Credit Card Approval Odds</h1>
            </div>

            {/* Results Summary */}
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className={`text-6xl font-bold text-${approvalLevel.color}-600 mb-2`}>{odds}%</div>
                <CardTitle className={`text-2xl text-${approvalLevel.color}-600`}>
                  {approvalLevel.level} Approval Odds
                </CardTitle>
                <p className="text-muted-foreground">{approvalLevel.description}</p>
              </CardHeader>
              <CardContent>
                <Progress value={odds} className="h-4 mb-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Your Profile:</h4>
                    <ul className="text-sm space-y-1">
                      <li>Credit Score: {creditScore}</li>
                      <li>Annual Income: ${Number.parseInt(income).toLocaleString()}</li>
                      <li>Credit Utilization: {utilization}%</li>
                      <li>Credit History: {creditHistory} years</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Improvement Tips:</h4>
                    <ul className="text-sm space-y-1">
                      {odds < 80 && <li>• Pay down credit card balances</li>}
                      {odds < 60 && <li>• Check credit report for errors</li>}
                      {odds < 40 && <li>• Consider a secured credit card</li>}
                      <li>• Make all payments on time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Cards */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Recommended Cards for Your Profile</h2>
              <div className="space-y-4">
                {recommendedCards.map((card, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{card.name}</h3>
                          <p className="text-muted-foreground">{card.type}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 mb-2">{card.approvalOdds} Approval Odds</Badge>
                          <div>
                            <Button>Learn More</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button onClick={() => setShowResults(false)} variant="outline">
                Check Different Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="outline">
              <Target className="mr-2 h-4 w-4" />
              Approval Calculator
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Check Your Credit Card Approval Odds</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Get an estimate of your approval chances for different credit cards based on your credit profile. Our
              calculator uses industry data to provide realistic expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Enter Your Credit Profile</CardTitle>
                <p className="text-center text-muted-foreground">Provide your information to calculate approval odds</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="credit-score" className="text-base font-medium">
                    What's your credit score range?
                  </Label>
                  <RadioGroup value={creditScore} onValueChange={setCreditScore} className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="800" id="excellent" />
                      <Label htmlFor="excellent">Excellent (750+)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="720" id="good" />
                      <Label htmlFor="good">Good (670-749)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="620" id="fair" />
                      <Label htmlFor="fair">Fair (580-669)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="550" id="poor" />
                      <Label htmlFor="poor">Poor (below 580)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="income" className="text-base font-medium">
                    Annual Income
                  </Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="50000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="utilization" className="text-base font-medium">
                    Credit Utilization (% of credit limits used)
                  </Label>
                  <Input
                    id="utilization"
                    type="number"
                    placeholder="30"
                    value={utilization}
                    onChange={(e) => setUtilization(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="history" className="text-base font-medium">
                    Length of Credit History (years)
                  </Label>
                  <Input
                    id="history"
                    type="number"
                    placeholder="5"
                    value={creditHistory}
                    onChange={(e) => setCreditHistory(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={() => setShowResults(true)}
                  disabled={!creditScore || !income || !utilization || !creditHistory}
                  className="w-full"
                  size="lg"
                >
                  Calculate My Approval Odds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approval Factors */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">What Affects Your Approval Odds</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {approvalFactors.map((factor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{factor.factor}</CardTitle>
                    <Badge variant="outline">{factor.weight}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Improvement Tips:</h4>
                  <ul className="space-y-1">
                    {factor.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-8 bg-yellow-50 border-y">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                <p className="text-sm text-yellow-700">
                  This calculator provides estimates based on general industry data and should not be considered a
                  guarantee of approval. Actual approval decisions depend on many factors including your complete credit
                  history, debt-to-income ratio, and the specific lender's criteria. Always check your credit report
                  before applying and consider pre-qualification offers when available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Credit Approval Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/recommendation/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to apply with confidence?</h2>
            <p className="mb-8 text-lg opacity-90">
              Use our approval odds calculator to find cards that match your credit profile and increase your chances of
              approval.
            </p>
            <Button size="lg" variant="secondary">
              <Target className="mr-2 h-4 w-4" />
              Calculate My Approval Odds
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
