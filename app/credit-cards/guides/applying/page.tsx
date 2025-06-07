import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, FileText, CreditCard, Clock, Shield, ArrowRight, Users } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "How to Apply for a Credit Card | Complete Application Guide 2025 - FinanceWise",
  description:
    "Learn how to apply for a credit card with our step-by-step guide. Understand requirements, improve approval odds, and avoid common mistakes.",
  keywords: "apply for credit card, credit card application, approval requirements, credit card eligibility",
}

const applicationSteps = [
  {
    step: 1,
    title: "Check Your Credit Score",
    description: "Know where you stand before applying",
    details: [
      "Get your free credit score from multiple sources",
      "Review your credit report for errors",
      "Understand which cards match your credit level",
      "Wait to apply if your score needs improvement",
    ],
    icon: <FileText className="h-6 w-6" />,
  },
  {
    step: 2,
    title: "Research Credit Cards",
    description: "Find cards that match your needs and credit profile",
    details: [
      "Compare rewards, fees, and interest rates",
      "Read card terms and conditions carefully",
      "Check pre-qualification tools when available",
      "Consider your spending habits and goals",
    ],
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    step: 3,
    title: "Gather Required Information",
    description: "Prepare all necessary documents and details",
    details: [
      "Social Security number",
      "Annual income (including all sources)",
      "Employment information and housing costs",
      "Bank account information for payments",
    ],
    icon: <Users className="h-6 w-6" />,
  },
  {
    step: 4,
    title: "Submit Your Application",
    description: "Complete the application accurately and honestly",
    details: [
      "Fill out all required fields completely",
      "Double-check all information for accuracy",
      "Be honest about income and expenses",
      "Submit during business hours for faster processing",
    ],
    icon: <Clock className="h-6 w-6" />,
  },
  {
    step: 5,
    title: "Wait for Decision",
    description: "Understand the approval process and timeline",
    details: [
      "Instant approval, pending review, or denial",
      "May take 7-10 business days for final decision",
      "Check application status online if available",
      "Don't apply for other cards while waiting",
    ],
    icon: <Shield className="h-6 w-6" />,
  },
]

const approvalFactors = [
  {
    factor: "Credit Score",
    importance: "Very High",
    description: "Most important factor in approval decisions",
    tips: [
      "Check your score before applying",
      "Apply for cards matching your credit level",
      "Wait if score is too low",
    ],
  },
  {
    factor: "Income",
    importance: "High",
    description: "Determines your ability to repay debt",
    tips: ["Include all income sources", "Be honest and accurate", "Consider household income if applicable"],
  },
  {
    factor: "Debt-to-Income Ratio",
    importance: "High",
    description: "Shows how much debt you can handle",
    tips: ["Pay down existing debt first", "Include all monthly obligations", "Keep ratio below 36%"],
  },
  {
    factor: "Credit History Length",
    importance: "Medium",
    description: "Shows your experience with credit",
    tips: ["Keep old accounts open", "Be patient if you're new to credit", "Consider authorized user status"],
  },
  {
    factor: "Recent Credit Applications",
    importance: "Medium",
    description: "Too many applications can hurt approval odds",
    tips: ["Space out applications", "Only apply when needed", "Use pre-qualification tools"],
  },
]

const commonMistakes = [
  {
    mistake: "Applying for the wrong card",
    description: "Choosing cards that don't match your credit profile",
    solution: "Research credit requirements and use pre-qualification tools",
  },
  {
    mistake: "Providing inaccurate information",
    description: "Lying about income or other details on application",
    solution: "Be completely honest and double-check all information",
  },
  {
    mistake: "Applying for multiple cards at once",
    description: "Multiple applications in short time period",
    solution: "Space applications 3-6 months apart and research thoroughly",
  },
  {
    mistake: "Not reading terms and conditions",
    description: "Missing important fees, rates, or restrictions",
    solution: "Read all terms carefully before applying",
  },
  {
    mistake: "Applying without checking credit first",
    description: "Not knowing your credit score or report status",
    solution: "Check credit score and report before any application",
  },
]

export default function ApplyingCreditCardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Application Guide</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">How to Apply for a Credit Card</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Complete step-by-step guide to applying for your first or next credit card. Learn requirements, improve
              your approval odds, and avoid common mistakes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <CreditCard className="mr-2 h-4 w-4" />
                Start Application Process
              </Button>
              <Button size="lg" variant="outline">
                Check My Credit Score
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Credit Card Application Process</h2>
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">Step {step.step}</Badge>
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approval Factors */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">What Affects Your Approval Odds</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {approvalFactors.map((factor, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{factor.factor}</CardTitle>
                      <Badge
                        variant={
                          factor.importance === "Very High"
                            ? "destructive"
                            : factor.importance === "High"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {factor.importance}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Tips:</h4>
                    <ul className="space-y-1">
                      {factor.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Information */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Information You'll Need</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Full legal name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Date of birth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Social Security number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Current address and phone number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email address</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-green-600" />
                    Financial Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Annual gross income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Employment status and employer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Monthly housing payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Bank account information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Other sources of income (if applicable)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Common Application Mistakes to Avoid</h2>
            <div className="space-y-6">
              {commonMistakes.map((mistake, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{mistake.mistake}</h3>
                        <p className="text-muted-foreground mb-3">{mistake.description}</p>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm font-medium text-green-800">
                            <strong>Solution:</strong> {mistake.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">What to Expect After Applying</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Instant Decision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Many applications receive instant approval or denial online
                  </p>
                  <Badge variant="outline">0-2 minutes</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <CardTitle>Under Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Some applications need manual review by underwriters
                  </p>
                  <Badge variant="outline">7-10 business days</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle>Card Arrival</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Approved cards typically arrive by mail within 7-10 days
                  </p>
                  <Badge variant="outline">7-10 business days</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Related Credit Card Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("credit-cards", "guides")
              .slice(0, 3)
              .map((blog, index) => (
                <BlogCard
                  key={blog.slug}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.publishedAt}
                  href={`/blog/credit-cards/guides/${blog.slug}`}
                  aosDelay={index * 100}
                />
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/credit-cards/guides">
                View All Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Apply for Your Credit Card?</h2>
            <p className="mb-8 text-lg opacity-90">
              Now that you know the process, check your credit score and find the right card for your needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <CreditCard className="mr-2 h-4 w-4" />
                Find My Card
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <FileText className="mr-2 h-4 w-4" />
                Check Credit Score
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
