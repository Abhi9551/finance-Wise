import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  AlertTriangle,
  Target,
  CreditCard,
  TrendingUp,
  Shield,
  ArrowRight,
  Calculator,
} from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "How to Choose the Right Credit Card | Complete Selection Guide 2025 - FinanceWise",
  description:
    "Learn how to choose the perfect credit card for your needs. Compare rewards, fees, and features to find the best card for your lifestyle.",
  keywords: "choose credit card, best credit card, credit card comparison, credit card selection guide",
}

const cardTypes = [
  {
    type: "Cash Back Cards",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "green",
    bestFor: "Everyday spending and simplicity",
    features: ["1-5% cash back on purchases", "No complicated redemptions", "Often no annual fee"],
    considerations: ["Lower earning rates than travel cards", "May have spending caps", "Limited bonus categories"],
    idealUser: "People who want simple, straightforward rewards without complexity",
  },
  {
    type: "Travel Rewards Cards",
    icon: <CreditCard className="h-6 w-6" />,
    color: "blue",
    bestFor: "Frequent travelers and vacation planning",
    features: ["Points/miles for travel", "Transfer partners", "Travel perks and protections"],
    considerations: ["Often have annual fees", "Complex redemption systems", "Best value requires travel knowledge"],
    idealUser: "People who travel frequently or want to maximize travel value",
  },
  {
    type: "Balance Transfer Cards",
    icon: <Calculator className="h-6 w-6" />,
    color: "purple",
    bestFor: "Paying down existing credit card debt",
    features: ["0% intro APR periods", "Low balance transfer fees", "Debt consolidation"],
    considerations: ["Intro rates are temporary", "Transfer fees apply", "Requires discipline to pay off"],
    idealUser: "People with existing credit card debt who want to save on interest",
  },
  {
    type: "Low Interest Cards",
    icon: <Shield className="h-6 w-6" />,
    color: "orange",
    bestFor: "Carrying balances occasionally",
    features: ["Low ongoing APR", "0% intro APR offers", "Minimal fees"],
    considerations: ["Lower or no rewards", "Still expensive to carry debt", "Better to pay in full"],
    idealUser: "People who might carry balances but want to minimize interest costs",
  },
]

const selectionFactors = [
  {
    factor: "Your Credit Score",
    importance: "Critical",
    description: "Determines which cards you can qualify for",
    questions: ["What's your current credit score?", "Do you have a thin credit file?", "Any recent negative marks?"],
    tips: [
      "Check your score before applying",
      "Apply for cards matching your credit level",
      "Consider secured cards if building credit",
    ],
  },
  {
    factor: "Spending Habits",
    importance: "High",
    description: "Should align with card's bonus categories",
    questions: [
      "Where do you spend the most money?",
      "Do you have consistent spending patterns?",
      "How much do you spend monthly?",
    ],
    tips: [
      "Track spending for 2-3 months",
      "Choose cards that match your top categories",
      "Consider flat-rate cards for varied spending",
    ],
  },
  {
    factor: "Financial Goals",
    importance: "High",
    description: "Cards should support your objectives",
    questions: ["Are you saving for travel?", "Do you want cash back?", "Are you paying down debt?"],
    tips: ["Align card choice with goals", "Consider sign-up bonuses", "Think about long-term value"],
  },
  {
    factor: "Fees and Costs",
    importance: "Medium",
    description: "Annual fees should be justified by benefits",
    questions: ["Can you justify an annual fee?", "What other fees might apply?", "Do benefits outweigh costs?"],
    tips: ["Calculate total cost of ownership", "Consider fee waivers for first year", "Factor in all potential fees"],
  },
]

const decisionFramework = [
  {
    step: 1,
    title: "Assess Your Credit Profile",
    description: "Understand your creditworthiness and options",
    actions: [
      "Check your credit score from multiple sources",
      "Review your credit report for errors",
      "Understand your approval odds for different cards",
      "Consider pre-qualification tools",
    ],
  },
  {
    step: 2,
    title: "Define Your Goals",
    description: "Clarify what you want from a credit card",
    actions: [
      "Identify your primary goal (rewards, debt payoff, building credit)",
      "Consider secondary benefits you value",
      "Set realistic expectations for rewards earning",
      "Think about your 1-2 year financial plans",
    ],
  },
  {
    step: 3,
    title: "Analyze Your Spending",
    description: "Match cards to your spending patterns",
    actions: [
      "Track spending by category for 2-3 months",
      "Identify your top 3 spending categories",
      "Calculate potential rewards with different cards",
      "Consider seasonal spending variations",
    ],
  },
  {
    step: 4,
    title: "Compare Your Options",
    description: "Evaluate cards that match your profile",
    actions: [
      "Create a shortlist of 3-5 cards",
      "Compare rewards rates, fees, and benefits",
      "Read terms and conditions carefully",
      "Check for current sign-up bonus offers",
    ],
  },
  {
    step: 5,
    title: "Make Your Decision",
    description: "Choose the card that best fits your needs",
    actions: [
      "Calculate first-year value including bonuses",
      "Consider long-term value beyond year one",
      "Factor in your ability to meet spending requirements",
      "Apply for your chosen card",
    ],
  },
]

const redFlags = [
  {
    warning: "Choosing based on sign-up bonus alone",
    why: "Bonuses are one-time, but you'll use the card long-term",
    solution: "Consider ongoing rewards and benefits, not just the bonus",
  },
  {
    warning: "Ignoring annual fees",
    why: "Fees can quickly erode the value of rewards earned",
    solution: "Calculate if benefits justify the annual fee for your spending",
  },
  {
    warning: "Applying for cards above your credit level",
    why: "Rejections hurt your credit score and waste hard pulls",
    solution: "Be realistic about your approval odds and apply strategically",
  },
  {
    warning: "Not reading the fine print",
    why: "Important restrictions and limitations are in the details",
    solution: "Read all terms, especially regarding rewards and fees",
  },
  {
    warning: "Choosing too many cards at once",
    why: "Multiple applications can hurt credit and be hard to manage",
    solution: "Focus on one card at a time and space applications apart",
  },
]

export default function ChoosingCreditCardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-purple-600" />
              <Badge variant="outline">Selection Guide</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">How to Choose the Right Credit Card</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Find the perfect credit card for your needs, spending habits, and financial goals. Our comprehensive guide
              helps you make the right choice.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Target className="mr-2 h-4 w-4" />
                Find My Perfect Card
              </Button>
              <Button size="lg" variant="outline">
                Compare All Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Card Types Overview */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Types of Credit Cards</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {cardTypes.map((card, index) => (
              <Card key={index} className="h-full">
                <CardHeader className={`bg-${card.color}-50`}>
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-${card.color}-100 p-2 text-${card.color}-600`}>{card.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{card.type}</CardTitle>
                      <p className="text-sm text-muted-foreground">{card.bestFor}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Considerations:</h4>
                    <ul className="space-y-1">
                      {card.considerations.map((consideration, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="h-3 w-3 text-orange-600 mt-0.5 flex-shrink-0" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm">
                      <strong>Ideal for:</strong> {card.idealUser}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Factors */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Key Factors to Consider</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {selectionFactors.map((factor, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{factor.factor}</CardTitle>
                    <Badge
                      variant={
                        factor.importance === "Critical"
                          ? "destructive"
                          : factor.importance === "High"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {factor.importance}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{factor.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ask Yourself:</h4>
                    <ul className="space-y-1">
                      {factor.questions.map((question, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tips:</h4>
                    <ul className="space-y-1">
                      {factor.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
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
      </section>

      {/* Decision Framework */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">5-Step Decision Framework</h2>
            <div className="space-y-6">
              {decisionFramework.map((step, index) => (
                <Card key={index}>
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {step.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{action}</span>
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

      {/* Red Flags */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Common Mistakes to Avoid</h2>
            <div className="space-y-6">
              {redFlags.map((flag, index) => (
                <Card key={index} className="border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-red-800">{flag.warning}</h3>
                        <p className="text-muted-foreground mb-3">{flag.why}</p>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm font-medium text-green-800">
                            <strong>Better approach:</strong> {flag.solution}
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

      {/* Quick Decision Tools */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Quick Decision Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Card Finder Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Answer a few questions to get personalized recommendations
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/recommendation/quiz">Take Quiz</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Rewards Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Calculate potential rewards with different cards</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/calculators/rewards">Calculate</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Compare Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Side-by-side comparison of multiple cards</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/compare">Compare</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Approval Odds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Check your approval odds before applying</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/credit-cards/recommendation/approval-odds">Check Odds</Link>
                </Button>
              </CardContent>
            </Card>
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
      <section className="bg-purple-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Find Your Perfect Credit Card?</h2>
            <p className="mb-8 text-lg opacity-90">
              Use our tools and guides to make an informed decision that aligns with your financial goals and spending
              habits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <Target className="mr-2 h-4 w-4" />
                Get Recommendations
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Compare Cards
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
