import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Globe, Shield, Smartphone, ArrowRight, TrendingUp } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Best Online Banks 2025 | Top Digital Banking - FinanceWise",
  description:
    "Find the best online banks with high rates, low fees, and excellent digital features for modern banking.",
  keywords: "best online banks, digital banking, online banking, high yield online banks",
}

const onlineBanks = [
  {
    id: 1,
    bankName: "Ally Bank",
    rating: 4.9,
    savingsAPY: "4.25%",
    checkingAPY: "0.25%",
    features: ["No monthly fees", "24/7 customer service", "Excellent mobile app", "Large ATM network"],
    pros: ["Top-rated customer service", "Competitive rates", "User-friendly platform", "No hidden fees"],
    cons: ["No physical branches", "Limited cash deposit options"],
    bestFor: "Overall digital banking experience",
  },
  {
    id: 2,
    bankName: "Marcus by Goldman Sachs",
    rating: 4.8,
    savingsAPY: "4.50%",
    checkingAPY: "N/A",
    features: ["High-yield savings", "No minimum balance", "No fees", "FDIC insured"],
    pros: ["Highest savings rates", "Trusted brand", "Simple platform", "No fees"],
    cons: ["Savings only", "Limited product offerings", "No checking account"],
    bestFor: "High-yield savings",
  },
  {
    id: 3,
    bankName: "Capital One",
    rating: 4.7,
    savingsAPY: "4.25%",
    checkingAPY: "0.10%",
    features: ["360 Banking", "Large ATM network", "Mobile banking", "Zelle integration"],
    pros: ["Physical branch access", "Good mobile app", "Multiple products", "Large ATM network"],
    cons: ["Lower checking rates", "Limited branch locations"],
    bestFor: "Hybrid online/branch banking",
  },
  {
    id: 4,
    bankName: "Discover Bank",
    rating: 4.6,
    savingsAPY: "4.25%",
    checkingAPY: "0.00%",
    features: ["Cashback debit card", "No fees", "24/7 customer service", "Mobile banking"],
    pros: ["Cashback rewards", "No fees", "Good customer service", "Multiple products"],
    cons: ["Lower rates", "Limited ATM network", "Online only"],
    bestFor: "Cashback rewards",
  },
]

export default function BestOnlineBanksPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Online Banks</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Online Banks of 2025</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover the top online banks offering high rates, low fees, and cutting-edge digital banking features.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Find Best Bank
              </Button>
              <Button size="lg" variant="outline">
                <Smartphone className="mr-2 h-4 w-4" />
                Compare Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.50%</div>
              <div className="text-sm text-muted-foreground">Highest APY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">$0</div>
              <div className="text-sm text-muted-foreground">Monthly Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">FDIC</div>
              <div className="text-sm text-muted-foreground">Insured</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Online Banks</h2>
          <div className="space-y-6">
            {onlineBanks.map((bank, index) => (
              <Card key={bank.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{bank.bankName}</CardTitle>
                      <p className="text-muted-foreground">{bank.bestFor}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                          <span className="ml-1 font-medium">{bank.rating}</span>
                        </div>
                        <Badge variant="secondary">#{index + 1} Online Bank</Badge>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-blue-600">{bank.savingsAPY}</div>
                      <div className="text-sm text-muted-foreground">Savings APY</div>
                      <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Open Account</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-600" />
                        Account Rates
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Savings APY:</span>
                          <span className="font-medium text-blue-600">{bank.savingsAPY}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Checking APY:</span>
                          <span className="font-medium">{bank.checkingAPY}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monthly Fees:</span>
                          <span className="font-medium">$0</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {bank.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Smartphone className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
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
                            {bank.pros.map((pro, idx) => (
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
                            {bank.cons.map((con, idx) => (
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
          <h2 className="mb-8 text-center text-3xl font-bold">Online Banking Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("banking", "online-banks").map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/banking/online-banks/${blog.slug}`}
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
