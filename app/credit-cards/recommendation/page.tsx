import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, CreditCard, Calculator, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Credit Card Recommendations | Find Your Perfect Card - FinanceWise",
  description:
    "Get personalized credit card recommendations based on your spending habits, credit score, and financial goals.",
  keywords: "credit card recommendations, personalized cards, card finder, credit card quiz",
}

const recommendationCategories = [
  {
    title: "Travel Rewards and Perks",
    href: "/credit-cards/recommendation/travel-rewards",
    description: "Find cards with the best travel rewards, airline miles, and premium travel benefits",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "blue",
    features: ["Airline miles", "Hotel points", "Travel insurance", "Airport lounge access"],
  },
  {
    title: "Earn Cash Back",
    href: "/credit-cards/recommendation/cash-back",
    description: "Discover cards offering the highest cash back rates on your everyday spending",
    icon: <CreditCard className="h-6 w-6" />,
    color: "green",
    features: ["High cash back rates", "Bonus categories", "No annual fees", "Simple rewards"],
  },
  {
    title: "Pay Down Debt",
    href: "/credit-cards/recommendation/debt-payoff",
    description: "Find balance transfer cards with 0% APR to help you pay off debt faster",
    icon: <Target className="h-6 w-6" />,
    color: "purple",
    features: ["0% intro APR", "Low transfer fees", "Long intro periods", "Debt consolidation"],
  },
  {
    title: "Make a Big Purchase",
    href: "/credit-cards/recommendation/big-purchase",
    description: "Cards with 0% APR on purchases to help finance large expenses interest-free",
    icon: <Calculator className="h-6 w-6" />,
    color: "orange",
    features: ["0% purchase APR", "Large credit limits", "No interest financing", "Purchase protection"],
  },
]

export default function CreditCardRecommendationPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "recommendation")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="outline">
              Personalized Recommendations
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Find Your Perfect Credit Card</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Get personalized credit card recommendations based on your spending habits, credit score, and financial
              goals. Our expert analysis helps you find the best card for your needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/credit-cards/recommendation/quiz">
                  <Target className="mr-2 h-4 w-4" />
                  Take Recommendation Quiz
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/credit-cards/recommendation/approval-odds">Check Approval Odds</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">What's Your Goal?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {recommendationCategories.map((category, index) => (
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
                  <p className="mb-4 text-muted-foreground">{category.description}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold">Key Features:</h4>
                    <ul className="space-y-1">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={category.href}>
                      Get Recommendations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Recommendation Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Card Recommendation Quiz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Answer a few questions about your spending and preferences to get personalized card recommendations.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/credit-cards/recommendation/quiz">Take Quiz</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Approval Odds Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Check your approval odds for different credit cards based on your credit profile.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/credit-cards/recommendation/approval-odds">Check Odds</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Compare Cards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Compare multiple credit cards side-by-side to find the best features and benefits.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/credit-cards/compare">Compare Cards</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How Our Recommendations Work</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Tell Us About You</h3>
                <p className="text-sm text-muted-foreground">
                  Share your spending habits, credit score range, and financial goals
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="mb-2 font-semibold">We Analyze Options</h3>
                <p className="text-sm text-muted-foreground">
                  Our algorithm matches you with cards that maximize your rewards and benefits
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Get Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Receive personalized recommendations with detailed explanations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
