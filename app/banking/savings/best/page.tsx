import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, PiggyBank, Shield, Calculator, ArrowRight, TrendingUp } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Best Savings Accounts of 2025 | Compare Top Rates - FinanceWise",
  description:
    "Find the best savings accounts with high APY rates, no fees, and great features from top banks and credit unions.",
  keywords: "best savings accounts, high yield savings, savings rates, online savings",
}

const savingsAccounts = [
  {
    id: 1,
    bankName: "Marcus by Goldman Sachs",
    accountName: "Online Savings",
    apy: "4.50%",
    minimumDeposit: "$0",
    monthlyFee: "$0",
    rating: 4.8,
    features: ["No minimum balance", "No monthly fees", "FDIC insured", "24/7 customer support"],
    pros: ["Consistently high rates", "No fees", "Strong customer service"],
    cons: ["Online only", "No ATM card"],
  },
  {
    id: 2,
    bankName: "Ally Bank",
    accountName: "Online Savings",
    apy: "4.25%",
    minimumDeposit: "$0",
    monthlyFee: "$0",
    rating: 4.7,
    features: ["No minimum balance", "No monthly fees", "Buckets feature", "Mobile app"],
    pros: ["Excellent mobile app", "Savings tools", "Great customer service"],
    cons: ["No physical branches", "No cash deposits"],
  },
  {
    id: 3,
    bankName: "American Express",
    accountName: "Personal Savings",
    apy: "4.35%",
    minimumDeposit: "$0",
    monthlyFee: "$0",
    rating: 4.6,
    features: ["No minimum balance", "No fees", "FDIC insured", "Award-winning service"],
    pros: ["Trusted brand", "Excellent service", "Easy integration"],
    cons: ["Online only", "Limited features"],
  },
]

export default function BestSavingsAccountsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <PiggyBank className="h-6 w-6 text-green-600" />
              <Badge variant="outline">Savings Accounts</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Savings Accounts of 2025</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Compare the best savings accounts with high APY rates, no fees, and excellent features from top banks.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Find Best Account
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Savings Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Savings Accounts</h2>
          <div className="space-y-6">
            {savingsAccounts.map((account, index) => (
              <Card key={account.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{account.bankName}</CardTitle>
                      <p className="text-muted-foreground">{account.accountName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="ml-1 font-medium">{account.rating}</span>
                        </div>
                        <Badge variant="secondary">#{index + 1} Best Rate</Badge>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-green-600">{account.apy}</div>
                      <div className="text-sm text-muted-foreground">APY</div>
                      <Button className="mt-2 bg-green-600 hover:bg-green-700">Open Account</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <PiggyBank className="h-4 w-4 text-green-600" />
                        Account Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">APY:</span>
                          <span className="font-medium text-green-600">{account.apy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Minimum Deposit:</span>
                          <span className="font-medium">{account.minimumDeposit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monthly Fee:</span>
                          <span className="font-medium">{account.monthlyFee}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {account.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold">Pros & Cons</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-green-600 mb-1">Pros:</p>
                          <ul className="space-y-1">
                            {account.pros.map((pro, idx) => (
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
                            {account.cons.map((con, idx) => (
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

      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Savings Account Articles</h2>
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
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/banking">
                View All Banking Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
