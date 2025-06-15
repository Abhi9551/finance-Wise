import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, CreditCard, TrendingUp, Shield, Target, ArrowRight } from "lucide-react"
import { getAllBlogsByCategory } from "@/lib/blog-data"

const resourceCategories = [
  {
    title: "Credit Card Guides",
    description: "Comprehensive guides covering everything from basics to advanced strategies",
    icon: <BookOpen className="h-6 w-6" />,
    color: "blue",
    resources: [
      { title: "Credit Card Basics", href: "/credit-cards/guides/basics" },
      { title: "How to Apply for a Credit Card", href: "/credit-cards/guides/applying" },
      { title: "Choosing the Right Credit Card", href: "/credit-cards/guides/choosing" },
      { title: "Managing Credit Card Debt", href: "/credit-cards/guides/debt-management" },
      { title: "Building Credit History", href: "/credit-cards/guides/building-credit" },
    ],
  },
  {
    title: "Calculators & Tools",
    description: "Financial calculators to help you make informed credit card decisions",
    icon: <Calculator className="h-6 w-6" />,
    color: "green",
    resources: [
      { title: "Balance Transfer Calculator", href: "/credit-cards/calculators/balance-transfer" },
      { title: "Credit Card Interest Calculator", href: "/credit-cards/calculators/interest" },
      { title: "Payoff Calculator", href: "/credit-cards/calculators/payoff" },
      { title: "Rewards Value Calculator", href: "/credit-cards/calculators/rewards" },
      { title: "Credit Utilization Calculator", href: "/credit-cards/calculators/utilization" },
    ],
  },
  {
    title: "Card Comparisons",
    description: "Compare credit cards side-by-side to find the best options",
    icon: <CreditCard className="h-6 w-6" />,
    color: "purple",
    resources: [
      { title: "Compare All Credit Cards", href: "/credit-cards/compare" },
      { title: "Travel Cards Comparison", href: "/credit-cards/compare/travel" },
      { title: "Cash Back Cards Comparison", href: "/credit-cards/compare/cash-back" },
      { title: "Business Cards Comparison", href: "/credit-cards/compare/business" },
      { title: "Student Cards Comparison", href: "/credit-cards/compare/student" },
    ],
  },
  {
    title: "Rewards & Benefits",
    description: "Learn how to maximize rewards and take advantage of credit card benefits",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "orange",
    resources: [
      { title: "Maximizing Credit Card Rewards", href: "/credit-cards/guides/maximize-rewards" },
      { title: "Understanding Points vs Miles", href: "/credit-cards/guides/points-vs-miles" },
      { title: "Credit Card Benefits Guide", href: "/credit-cards/guides/benefits" },
      { title: "Travel Perks Explained", href: "/credit-cards/guides/travel-perks" },
      { title: "Cash Back Strategies", href: "/credit-cards/guides/cash-back-strategies" },
    ],
  },
  {
    title: "Credit Protection",
    description: "Learn about credit monitoring, fraud protection, and security",
    icon: <Shield className="h-6 w-6" />,
    color: "red",
    resources: [
      { title: "Credit Monitoring Services", href: "/credit-cards/guides/credit-monitoring" },
      { title: "Fraud Protection Tips", href: "/credit-cards/guides/fraud-protection" },
      { title: "Identity Theft Prevention", href: "/credit-cards/guides/identity-theft" },
      { title: "Dispute Resolution Guide", href: "/credit-cards/guides/disputes" },
      { title: "Credit Report Errors", href: "/credit-cards/guides/credit-report-errors" },
    ],
  },
  {
    title: "Personalized Recommendations",
    description: "Get customized credit card recommendations based on your needs",
    icon: <Target className="h-6 w-6" />,
    color: "indigo",
    resources: [
      { title: "Credit Card Quiz", href: "/credit-cards/recommendation/quiz" },
      { title: "Approval Odds Calculator", href: "/credit-cards/recommendation/approval-odds" },
      { title: "Travel Rewards Finder", href: "/credit-cards/recommendation/travel-rewards" },
      { title: "Cash Back Finder", href: "/credit-cards/recommendation/cash-back" },
      { title: "Debt Payoff Recommendations", href: "/credit-cards/recommendation/debt-payoff" },
    ],
  },
]

export default function CreditCardResourcesPage() {
  const allBlogs = getAllBlogsByCategory("credit-cards").slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="outline">
              Complete Resource Center
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Credit Card Resources</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Everything you need to know about credit cards in one place. From beginner guides to advanced strategies,
              calculators, and expert tips.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse All Resources
              </Button>
              <Button size="lg" variant="outline">
                Take Recommendation Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Explore Our Resources</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className={`bg-${category.color}-50`}>
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-${category.color}-100 p-2 text-${category.color}-600`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                  <ul className="space-y-2">
                    {category.resources.map((resource, idx) => (
                      <li key={idx}>
                        <Link
                          href={resource.href}
                          className={`text-sm font-medium text-${category.color}-700 hover:text-${category.color}-800 hover:underline transition-colors duration-200`}
                        >
                          {resource.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Quick Tools & Calculators</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Interest Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate how much interest you'll pay on your balance
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/calculators/interest">Calculate</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Balance Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">See how much you can save with a balance transfer</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/calculators/balance-transfer">Calculate</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Card Finder Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Get personalized credit card recommendations</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/recommendation/quiz">Take Quiz</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Compare Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Compare multiple credit cards side-by-side</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/compare">Compare</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
