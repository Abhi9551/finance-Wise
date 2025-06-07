import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, RefreshCw, Calculator, TrendingDown, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best Balance Transfer Cards for Debt Payoff | 0% APR Offers - FinanceWise",
  description:
    "Find the best balance transfer credit cards to pay off debt faster. Compare 0% APR offers and get personalized recommendations.",
  keywords: "balance transfer cards, debt payoff, 0% APR, debt consolidation, pay off debt",
}

const debtPayoffCards = [
  {
    id: 1,
    name: "Citi Simplicity® Card",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    introAPR: "0% for 21 months",
    transferFee: "5% or $5 minimum",
    regularAPR: "18.24%-28.99%",
    annualFee: "$0",
    bestFor: "Longest 0% period",
    keyBenefits: [
      "0% intro APR on balance transfers for 21 months",
      "0% intro APR on purchases for 12 months",
      "No late fees ever",
      "No penalty rate",
      "No annual fee",
    ],
    debtPayoffFeatures: [
      "21-month interest-free period",
      "No late fee penalties",
      "Simple terms and conditions",
      "Online debt management tools",
    ],
    pros: ["Longest 0% period available", "No late fees", "Simple terms"],
    cons: ["No rewards program", "Balance transfer fee applies"],
  },
  {
    id: 2,
    name: "Wells Fargo Reflect® Card",
    issuer: "Wells Fargo",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    introAPR: "0% for 21 months",
    transferFee: "3% for first 120 days, then 5%",
    regularAPR: "17.24%-28.99%",
    annualFee: "$0",
    bestFor: "Lower transfer fees initially",
    keyBenefits: [
      "0% intro APR on purchases and balance transfers for 21 months",
      "Reduced balance transfer fee for first 120 days",
      "Cell phone protection",
      "My Wells Fargo Deals",
      "No annual fee",
    ],
    debtPayoffFeatures: [
      "21-month payment plan flexibility",
      "Lower initial transfer costs",
      "Cell phone protection benefit",
      "Online account management",
    ],
    pros: ["21-month 0% period", "Lower transfer fee initially", "Cell phone protection"],
    cons: ["No rewards program", "Transfer fee increases after 120 days"],
  },
  {
    id: 3,
    name: "BankAmericard® credit card",
    issuer: "Bank of America",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.3,
    introAPR: "0% for 18 months",
    transferFee: "3% or $10 minimum",
    regularAPR: "16.24%-26.24%",
    annualFee: "$0",
    bestFor: "Lower transfer fees",
    keyBenefits: [
      "0% intro APR on purchases and balance transfers for 18 months",
      "Lower balance transfer fee",
      "No annual fee",
      "Online and mobile account management",
      "FICO® Score for free",
    ],
    debtPayoffFeatures: [
      "18-month debt payoff window",
      "Lowest transfer fee option",
      "Free credit score monitoring",
      "Mobile payment alerts",
    ],
    pros: ["Lower transfer fee", "Free FICO score", "18-month 0% period"],
    cons: ["Shorter intro period than competitors", "No rewards"],
  },
]

const debtPayoffCalculator = {
  example: {
    currentBalance: 5000,
    currentAPR: 24.99,
    monthlyPayment: 200,
    scenarios: [
      {
        name: "Current High-Interest Card",
        timeToPayoff: "31 months",
        totalInterest: "$1,247",
        totalPaid: "$6,247",
      },
      {
        name: "0% APR Balance Transfer",
        timeToPayoff: "25 months",
        totalInterest: "$247",
        totalPaid: "$5,247",
      },
    ],
  },
}

export default function DebtPayoffRecommendationPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-balance-transfer")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <RefreshCw className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Debt Payoff</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Pay Off Debt Faster with 0% APR Cards
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Transfer your high-interest debt to a 0% APR balance transfer card and save thousands in interest. Get
              personalized recommendations to accelerate your debt payoff journey.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <TrendingDown className="mr-2 h-4 w-4" />
                Find My Debt Payoff Card
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Savings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Example */}
      <section className="py-8 bg-green-50 border-b">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold">Potential Debt Payoff Savings</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {debtPayoffCalculator.example.scenarios.map((scenario, index) => (
                <Card key={index} className={index === 1 ? "border-green-500 bg-white" : ""}>
                  <CardHeader>
                    <CardTitle className={index === 1 ? "text-green-600" : ""}>{scenario.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Time to pay off:</span>
                        <span className="font-medium">{scenario.timeToPayoff}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total interest:</span>
                        <span className={`font-medium ${index === 1 ? "text-green-600" : "text-red-600"}`}>
                          {scenario.totalInterest}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total paid:</span>
                        <span className="font-medium">{scenario.totalPaid}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Badge className="bg-green-600">Save $1,000 in interest!</Badge>
              <p className="mt-2 text-sm text-muted-foreground">Example based on $5,000 debt, $200 monthly payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Debt Payoff Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Best Balance Transfer Cards for Debt Payoff</h2>
          <div className="space-y-8">
            {debtPayoffCards.map((card, index) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.name}
                        width={80}
                        height={50}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-xl">{card.name}</CardTitle>
                        <p className="text-muted-foreground">{card.issuer}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                            <span className="ml-1 font-medium">{card.rating}</span>
                          </div>
                          <Badge variant="secondary">{card.bestFor}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-blue-600">{card.introAPR}</div>
                      <div className="text-sm text-muted-foreground">Intro APR</div>
                      <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        Transfer Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Intro APR:</span>
                          <span className="font-medium text-blue-600">{card.introAPR}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Transfer Fee:</span>
                          <span className="font-medium">{card.transferFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Regular APR:</span>
                          <span className="font-medium">{card.regularAPR}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Fee:</span>
                          <span className="font-medium">{card.annualFee}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-blue-600" />
                        Debt Payoff Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.debtPayoffFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold">Pros & Cons</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="font-medium text-green-600 mb-1">Pros:</p>
                          <ul className="space-y-1">
                            {card.pros.slice(0, 2).map((pro, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-green-600">+</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-red-600 mb-1">Cons:</p>
                          <ul className="space-y-1">
                            {card.cons.slice(0, 2).map((con, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-red-600">-</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Debt Payoff Strategy Guide */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Debt Payoff Strategy Guide</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    Create a Payoff Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Calculate Your Timeline</h4>
                    <p className="text-sm text-muted-foreground">
                      Divide your total debt by the intro period months to determine your monthly payment goal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Factor in Transfer Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Include balance transfer fees in your calculations to ensure the move saves you money.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-blue-600" />
                    Maximize Your Success
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Avoid New Debt</h4>
                    <p className="text-sm text-muted-foreground">
                      Don't use the old cards for new purchases while paying off the transferred balance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Set Up Autopay</h4>
                    <p className="text-sm text-muted-foreground">
                      Automate payments to ensure you never miss a payment and lose your 0% APR rate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Debt Payoff Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/best-balance-transfer/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Debt Payoff Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Start your debt-free journey today</h2>
            <p className="mb-8 text-lg opacity-90">
              Get personalized balance transfer card recommendations and create a plan to pay off your debt faster.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <RefreshCw className="mr-2 h-4 w-4" />
                Find My Debt Payoff Card
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calculate My Savings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
