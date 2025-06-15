import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Shield, AlertTriangle, CheckCircle, Target, ArrowRight, Eye } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Get Your Free Credit Score | Check Credit Report 2025 - FinanceWise",
  description:
    "Get your free credit score and credit report. Learn how to check, monitor, and improve your credit score with our comprehensive guide.",
  keywords: "free credit score, credit report, check credit score, improve credit score, credit monitoring",
}

const creditScoreRanges = [
  { range: "300-579", label: "Poor", color: "red", percentage: 16 },
  { range: "580-669", label: "Fair", color: "orange", percentage: 38 },
  { range: "670-739", label: "Good", color: "yellow", percentage: 56 },
  { range: "740-799", label: "Very Good", color: "blue", percentage: 76 },
  { range: "800-850", label: "Excellent", color: "green", percentage: 94 },
]

const creditFactors = [
  {
    factor: "Payment History",
    percentage: 35,
    description: "Whether you pay your bills on time",
    tips: ["Pay all bills by due date", "Set up automatic payments", "Pay off past-due accounts"],
  },
  {
    factor: "Credit Utilization",
    percentage: 30,
    description: "How much credit you're using vs. available",
    tips: ["Keep utilization below 30%", "Pay down balances", "Don't close old accounts"],
  },
  {
    factor: "Length of Credit History",
    percentage: 15,
    description: "How long you've had credit accounts",
    tips: ["Keep old accounts open", "Don't close your first card", "Be patient - time helps"],
  },
  {
    factor: "Credit Mix",
    percentage: 10,
    description: "Variety of credit types you have",
    tips: ["Mix of cards and loans", "Don't open accounts just for mix", "Focus on payment history first"],
  },
  {
    factor: "New Credit",
    percentage: 10,
    description: "Recent credit inquiries and new accounts",
    tips: ["Limit new applications", "Space out credit applications", "Only apply when needed"],
  },
]

const freeScoreServices = [
  {
    name: "Credit Karma",
    score: "VantageScore 3.0",
    bureaus: ["TransUnion", "Equifax"],
    features: ["Free credit monitoring", "Credit simulator", "Personalized recommendations"],
    pros: ["Completely free", "Weekly updates", "Mobile app"],
    cons: ["VantageScore (not FICO)", "Ads for financial products"],
  },
  {
    name: "Credit Sesame",
    score: "VantageScore 3.0",
    bureaus: ["TransUnion"],
    features: ["Identity theft protection", "Credit analysis", "Savings recommendations"],
    pros: ["Free basic plan", "Identity monitoring", "Debt analysis"],
    cons: ["Limited to one bureau", "Premium features cost extra"],
  },
  {
    name: "Experian",
    score: "FICO Score 8",
    bureaus: ["Experian"],
    features: ["FICO score", "Credit report", "Dark web monitoring"],
    pros: ["Real FICO score", "Direct from bureau", "Comprehensive monitoring"],
    cons: ["Only Experian data", "Limited free features"],
  },
  {
    name: "Annual Credit Report",
    score: "No score",
    bureaus: ["All three bureaus"],
    features: ["Official free reports", "Detailed credit history", "Dispute process"],
    pros: ["Federally mandated", "All three bureaus", "Most comprehensive"],
    cons: ["No credit score", "Limited to once per year per bureau"],
  },
]

export default function CreditScorePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <Badge variant="outline">Free Credit Score</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Get Your Free Credit Score</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Check your credit score for free, understand what affects it, and learn how to improve it. Monitor your
              credit health with trusted services.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Eye className="mr-2 h-4 w-4" />
                Check Your Score Now
              </Button>
              <Button size="lg" variant="outline">
                Learn About Credit Scores
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Ranges */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Understanding Credit Score Ranges</h2>
            <Card>
              <CardHeader>
                <CardTitle>FICO Score Ranges (Most Common)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {creditScoreRanges.map((range, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={`border-${range.color}-500 text-${range.color}-700 bg-${range.color}-50`}
                        >
                          {range.label}
                        </Badge>
                        <span className="font-semibold">{range.range}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{range.percentage}% of population</span>
                    </div>
                    <Progress value={range.percentage} className="h-2" />
                  </div>
                ))}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Different lenders may have varying requirements, but generally a score of
                    670+ is considered good for most credit cards and loans.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Credit Score Services */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Best Free Credit Score Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {freeScoreServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <Badge variant="secondary">{service.score}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Data from: {service.bureaus.join(", ")}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="font-semibold text-green-600 mb-1">Pros:</h5>
                      <ul className="text-xs space-y-1">
                        {service.pros.map((pro, idx) => (
                          <li key={idx}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-600 mb-1">Cons:</h5>
                      <ul className="text-xs space-y-1">
                        {service.cons.map((con, idx) => (
                          <li key={idx}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Your Credit Score */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">What Affects Your Credit Score</h2>
            <div className="space-y-6">
              {creditFactors.map((factor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{factor.factor}</CardTitle>
                      <Badge variant="outline" className="text-lg font-bold">
                        {factor.percentage}%
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{factor.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Progress value={factor.percentage} className="h-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tips to Improve:</h4>
                      <ul className="space-y-1">
                        {factor.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Target className="h-3 w-3 text-blue-600 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credit Monitoring Tips */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Credit Monitoring Best Practices</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                    Do's
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Check your score regularly</h4>
                      <p className="text-sm text-muted-foreground">Monitor monthly for changes and trends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Review your credit reports</h4>
                      <p className="text-sm text-muted-foreground">Get free reports from all three bureaus annually</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Set up alerts</h4>
                      <p className="text-sm text-muted-foreground">Get notified of changes to your credit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Dispute errors immediately</h4>
                      <p className="text-sm text-muted-foreground">Contact bureaus to fix incorrect information</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                    Don'ts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't obsess over daily changes</h4>
                      <p className="text-sm text-muted-foreground">Scores fluctuate naturally; focus on trends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't pay for what's free</h4>
                      <p className="text-sm text-muted-foreground">Many services offer free credit scores</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't ignore credit reports</h4>
                      <p className="text-sm text-muted-foreground">Reports contain more detail than just scores</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't fall for credit repair scams</h4>
                      <p className="text-sm text-muted-foreground">You can dispute errors yourself for free</p>
                    </div>
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
