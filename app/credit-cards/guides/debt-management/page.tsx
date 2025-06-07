import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  Calculator,
  Shield,
  Target,
  ArrowRight,
  DollarSign,
} from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Managing Credit Card Debt | Complete Debt Payoff Guide 2025 - FinanceWise",
  description:
    "Learn effective strategies to manage and pay off credit card debt. Discover balance transfer options, debt consolidation, and proven payoff methods.",
  keywords: "credit car debt, debt management, balance transfer, debt consolidation, debt payoff strategies",
}

const debtStrategies = [
  {
    strategy: "Debt Avalanche Method",
    description: "Pay minimums on all cards, put extra money toward highest interest rate card",
    icon: <TrendingDown className="h-6 w-6" />,
    color: "red",
    pros: ["Saves the most money on interest", "Mathematically optimal", "Faster debt elimination"],
    cons: ["May take longer to see progress", "Requires discipline", "Less psychological motivation"],
    bestFor: "People motivated by saving money and comfortable with math",
    example: {
      scenario: "3 cards: 24% APR ($5,000), 18% APR ($3,000), 12% APR ($2,000)",
      approach: "Focus extra payments on the 24% APR card first",
    },
  },
  {
    strategy: "Debt Snowball Method",
    description: "Pay minimums on all cards, put extra money toward smallest balance",
    icon: <Target className="h-6 w-6" />,
    color: "blue",
    pros: ["Quick psychological wins", "Builds momentum", "Easier to stick with"],
    cons: ["May cost more in interest", "Not mathematically optimal", "Takes longer overall"],
    bestFor: "People who need motivation and psychological wins",
    example: {
      scenario: "3 cards: $5,000, $3,000, $2,000 balances",
      approach: "Focus extra payments on the $2,000 balance first",
    },
  },
  {
    strategy: "Balance Transfer",
    description: "Move high-interest debt to a 0% APR balance transfer card",
    icon: <Calculator className="h-6 w-6" />,
    color: "green",
    pros: ["0% interest for intro period", "Consolidates multiple payments", "Can save thousands in interest"],
    cons: ["Transfer fees (3-5%)", "Intro rate is temporary", "Requires good credit"],
    bestFor: "People with good credit and disciplined payoff plan",
    example: {
      scenario: "$10,000 debt at 22% APR",
      approach: "Transfer to 0% APR card, save ~$2,200 in first year",
    },
  },
  {
    strategy: "Debt Consolidation Loan",
    description: "Take out a personal loan to pay off all credit card debt",
    icon: <DollarSign className="h-6 w-6" />,
    color: "purple",
    pros: ["Fixed payment and timeline", "Often lower interest rate", "Simplifies payments"],
    cons: ["May have origination fees", "Fixed payment regardless of income", "Temptation to use cards again"],
    bestFor: "People who want predictable payments and timeline",
    example: {
      scenario: "$15,000 credit card debt at various rates",
      approach: "Consolidate with 12% personal loan, fixed 3-year term",
    },
  },
]

const payoffSteps = [
  {
    step: 1,
    title: "Stop Using Credit Cards",
    description: "Prevent the debt from growing while you pay it off",
    actions: [
      "Remove cards from your wallet",
      "Delete saved payment info from websites",
      "Use cash or debit for all purchases",
      "Consider freezing cards temporarily",
    ],
  },
  {
    step: 2,
    title: "List All Your Debts",
    description: "Get a complete picture of what you owe",
    actions: [
      "Write down each card balance",
      "Note the interest rate (APR) for each",
      "Record minimum monthly payments",
      "Calculate total debt amount",
    ],
  },
  {
    step: 3,
    title: "Create a Budget",
    description: "Find money to put toward debt payments",
    actions: [
      "Track all income and expenses",
      "Identify areas to cut spending",
      "Determine how much extra you can pay",
      "Set up automatic payments",
    ],
  },
  {
    step: 4,
    title: "Choose Your Strategy",
    description: "Pick the debt payoff method that works for you",
    actions: [
      "Compare avalanche vs snowball methods",
      "Consider balance transfer options",
      "Look into debt consolidation",
      "Stick with your chosen method",
    ],
  },
  {
    step: 5,
    title: "Track Progress and Stay Motivated",
    description: "Monitor your progress and celebrate milestones",
    actions: [
      "Update debt balances monthly",
      "Celebrate paying off each card",
      "Visualize your progress",
      "Stay committed to the plan",
    ],
  },
]

const balanceTransferCards = [
  {
    name: "Citi Simplicity Card",
    introAPR: "0% for 21 months",
    transferFee: "3% or $5 minimum",
    ongoingAPR: "17.24% - 27.99%",
    annualFee: "$0",
    highlights: ["No late fees", "No penalty APR", "Simple terms"],
  },
  {
    name: "Chase Slate Edge",
    introAPR: "0% for 18 months",
    transferFee: "$0 for first 60 days, then 3%",
    ongoingAPR: "16.24% - 25.24%",
    annualFee: "$0",
    highlights: ["No transfer fee initially", "Credit monitoring", "Payment flexibility"],
  },
  {
    name: "BankAmericard Credit Card",
    introAPR: "0% for 21 months",
    transferFee: "3% or $10 minimum",
    ongoingAPR: "15.24% - 25.24%",
    annualFee: "$0",
    highlights: ["Long intro period", "No annual fee", "Online account management"],
  },
]

const avoidanceStrategies = [
  {
    title: "Build an Emergency Fund",
    description: "Prevent future debt by having cash for emergencies",
    tips: [
      "Start with $500-$1,000 emergency fund",
      "Build to 3-6 months of expenses over time",
      "Keep in separate high-yield savings account",
      "Only use for true emergencies",
    ],
  },
  {
    title: "Use Credit Responsibly",
    description: "Develop healthy credit card habits",
    tips: [
      "Pay full balance every month",
      "Keep utilization below 30%",
      "Set up automatic payments",
      "Review statements monthly",
    ],
  },
  {
    title: "Improve Your Financial Habits",
    description: "Address the root causes of debt accumulation",
    tips: [
      "Create and stick to a budget",
      "Track spending regularly",
      "Distinguish between wants and needs",
      "Find free or low-cost entertainment",
    ],
  },
  {
    title: "Increase Your Income",
    description: "More income makes debt management easier",
    tips: [
      "Ask for a raise at work",
      "Take on a side hustle",
      "Sell items you don't need",
      "Consider freelancing or gig work",
    ],
  },
]

export default function DebtManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <TrendingDown className="h-6 w-6 text-red-600" />
              <Badge variant="outline">Debt Management</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Managing Credit Card Debt</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Take control of your credit card debt with proven strategies, balance transfer options, and practical
              steps to become debt-free faster.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Debt Payoff
              </Button>
              <Button size="lg" variant="outline">
                Find Balance Transfer Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Debt Payoff Strategies */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Debt Payoff Strategies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {debtStrategies.map((strategy, index) => (
              <Card key={index} className="h-full">
                <CardHeader className={`bg-${strategy.color}-50`}>
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-${strategy.color}-100 p-2 text-${strategy.color}-600`}>
                      {strategy.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{strategy.strategy}</CardTitle>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {strategy.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {strategy.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <AlertTriangle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t space-y-2">
                    <p className="text-sm">
                      <strong>Best for:</strong> {strategy.bestFor}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold mb-1">Example:</p>
                      <p className="text-xs text-muted-foreground mb-1">{strategy.example.scenario}</p>
                      <p className="text-xs">{strategy.example.approach}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">5-Step Debt Elimination Process</h2>
            <div className="space-y-6">
              {payoffSteps.map((step, index) => (
                <Card key={index}>
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
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

      {/* Balance Transfer Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Top Balance Transfer Cards</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {balanceTransferCards.map((card, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {card.introAPR}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Transfer Fee:</span>
                      <span className="font-medium">{card.transferFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ongoing APR:</span>
                      <span className="font-medium">{card.ongoingAPR}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Fee:</span>
                      <span className="font-medium">{card.annualFee}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {card.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/credit-cards/best-balance-transfer">
                View All Balance Transfer Cards <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Debt Calculator Example */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Debt Payoff Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Scenario: $10,000 Credit Card Debt at 22% APR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Minimum Payments Only</h3>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-red-600">43 years</p>
                      <p className="text-sm text-muted-foreground">Time to pay off</p>
                      <p className="text-lg font-semibold">$21,271</p>
                      <p className="text-sm text-muted-foreground">Total interest paid</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Extra $100/month</h3>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-orange-600">4.5 years</p>
                      <p className="text-sm text-muted-foreground">Time to pay off</p>
                      <p className="text-lg font-semibold">$4,456</p>
                      <p className="text-sm text-muted-foreground">Total interest paid</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">0% Balance Transfer</h3>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-green-600">18 months</p>
                      <p className="text-sm text-muted-foreground">Time to pay off</p>
                      <p className="text-lg font-semibold">$300</p>
                      <p className="text-sm text-muted-foreground">Transfer fee only</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-center text-sm text-muted-foreground">
                    This example shows how different strategies can dramatically affect your payoff time and total cost.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avoiding Future Debt */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Preventing Future Debt</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {avoidanceStrategies.map((strategy, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strategy.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Related Debt Management Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("credit-cards", "debt-management")
              .slice(0, 3)
              .map((blog, index) => (
                <BlogCard
                  key={blog.slug}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.publishedAt}
                  href={`/blog/credit-cards/debt-management/${blog.slug}`}
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
      <section className="bg-red-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Take Control of Your Debt Today</h2>
            <p className="mb-8 text-lg opacity-90">
              Don't let credit card debt control your life. Start with a plan and take the first step toward financial
              freedom.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Payoff Plan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <Shield className="mr-2 h-4 w-4" />
                Find Balance Transfer Card
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
