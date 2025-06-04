import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Calculator, DollarSign } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Savings Account Alternatives 2025 | Better Options - FinanceWise",
  description:
    "Explore alternatives to traditional savings accounts including money market accounts, CDs, and investment options.",
  keywords: "savings alternatives, money market accounts, CDs, investment options",
}

const alternatives = [
  {
    id: 1,
    name: "Money Market Accounts",
    apy: "4.75%",
    minimumDeposit: "$1,000",
    liquidity: "High",
    risk: "Low",
    features: ["Check writing privileges", "Debit card access", "Higher APY than savings", "FDIC insured"],
    pros: ["Higher rates than savings", "Easy access to funds", "Check writing ability"],
    cons: ["Higher minimum balance", "Limited transactions", "Variable rates"],
    bestFor: "Emergency funds with higher returns",
  },
  {
    id: 2,
    name: "Certificates of Deposit (CDs)",
    apy: "5.15%",
    minimumDeposit: "$500",
    liquidity: "Low",
    risk: "Very Low",
    features: ["Fixed interest rates", "FDIC insured", "Various terms available", "Guaranteed returns"],
    pros: ["Higher guaranteed rates", "Fixed returns", "FDIC protection"],
    cons: ["Early withdrawal penalties", "No liquidity", "Rate risk"],
    bestFor: "Long-term savings with guaranteed returns",
  },
  {
    id: 3,
    name: "Treasury Bills (T-Bills)",
    apy: "5.25%",
    minimumDeposit: "$100",
    liquidity: "Medium",
    risk: "Very Low",
    features: ["Government backed", "Tax advantages", "Short-term options", "Highly liquid market"],
    pros: ["Government guarantee", "Tax benefits", "Competitive rates"],
    cons: ["Minimum investment", "Market fluctuations", "Complex for beginners"],
    bestFor: "Conservative investors seeking tax advantages",
  },
  {
    id: 4,
    name: "High-Yield Checking",
    apy: "3.50%",
    minimumDeposit: "$0",
    liquidity: "Very High",
    risk: "Low",
    features: ["Daily access", "Debit card included", "ATM access", "Direct deposit"],
    pros: ["Complete liquidity", "Checking features", "No penalties"],
    cons: ["Lower rates", "Requirements for high APY", "Variable rates"],
    bestFor: "Daily banking with earning potential",
  },
]

export default function SavingsAlternativesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Savings Alternatives</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Savings Account Alternatives</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover better options than traditional savings accounts with higher returns and flexible features.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Compare Options
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Returns
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Savings Alternatives</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {alternatives.map((alternative) => (
              <Card key={alternative.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{alternative.name}</CardTitle>
                      <p className="text-muted-foreground mt-1">{alternative.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{alternative.apy}</div>
                      <div className="text-sm text-muted-foreground">APY</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Min. Deposit:</span>
                        <div className="font-medium">{alternative.minimumDeposit}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Liquidity:</span>
                        <div className="font-medium">{alternative.liquidity}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Risk:</span>
                        <div className="font-medium">{alternative.risk}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {alternative.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <DollarSign className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-600 mb-1">Pros</h5>
                        <ul className="space-y-1 text-sm">
                          {alternative.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-green-600">+</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-600 mb-1">Cons</h5>
                        <ul className="space-y-1 text-sm">
                          {alternative.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-red-600">-</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("banking", "savings").map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/banking/savings/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
