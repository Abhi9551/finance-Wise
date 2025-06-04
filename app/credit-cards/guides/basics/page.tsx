import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CreditCard, TrendingUp, Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Credit Card Basics: Complete Beginner's Guide 2025 - FinanceWise",
  description:
    "Learn credit card basics with our comprehensive beginner's guide. Understand how credit cards work, benefits, risks, and best practices.",
  keywords: "credit card basics, how credit cards work, credit card guide, beginner credit cards",
}

export default function CreditCardBasicsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Beginner's Guide</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Credit Card Basics</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Everything you need to know about credit cards as a beginner. Learn how they work, their benefits, and how
              to use them responsibly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <CreditCard className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Best Beginner Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-xl font-semibold">In This Guide:</h2>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 text-sm">
              <Link href="#what-is-credit-card" className="text-blue-600 hover:underline">
                • What is a credit card?
              </Link>
              <Link href="#how-they-work" className="text-blue-600 hover:underline">
                • How credit cards work
              </Link>
              <Link href="#benefits" className="text-blue-600 hover:underline">
                • Benefits of credit cards
              </Link>
              <Link href="#risks" className="text-blue-600 hover:underline">
                • Risks and considerations
              </Link>
              <Link href="#types" className="text-blue-600 hover:underline">
                • Types of credit cards
              </Link>
              <Link href="#best-practices" className="text-blue-600 hover:underline">
                • Best practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Credit Card */}
      <section id="what-is-credit-card" className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  What is a Credit Card?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A credit card is a financial tool that allows you to borrow money from a bank or credit card company
                  to make purchases. Unlike a debit card that uses money from your bank account, a credit card lets you
                  spend money you don't currently have, with the promise to pay it back later.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Borrow money for purchases</li>
                      <li>• Pay back over time</li>
                      <li>• Build credit history</li>
                      <li>• Earn rewards (on some cards)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Important Terms:</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>
                        • <strong>Credit Limit:</strong> Maximum you can borrow
                      </li>
                      <li>
                        • <strong>APR:</strong> Annual interest rate
                      </li>
                      <li>
                        • <strong>Minimum Payment:</strong> Least you must pay monthly
                      </li>
                      <li>
                        • <strong>Grace Period:</strong> Time to pay without interest
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Credit Cards Work */}
      <section id="how-they-work" className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">How Credit Cards Work</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">You Make a Purchase</h3>
                  <p className="text-sm text-muted-foreground">
                    Use your credit card to buy something online or in-store
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Bank Pays Merchant</h3>
                  <p className="text-sm text-muted-foreground">
                    Your credit card company pays the merchant for your purchase
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">You Get a Bill</h3>
                  <p className="text-sm text-muted-foreground">
                    At the end of the month, you receive a statement with your balance
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                    <span className="font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">You Pay Back</h3>
                  <p className="text-sm text-muted-foreground">
                    Pay your bill in full or make minimum payments with interest
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Risks */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Benefits */}
              <Card id="benefits">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                    Benefits of Credit Cards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Build Credit History</h4>
                    <p className="text-sm text-muted-foreground">
                      Responsible use helps establish and improve your credit score, which is important for loans,
                      mortgages, and even job applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Earn Rewards</h4>
                    <p className="text-sm text-muted-foreground">
                      Many cards offer cash back, points, or miles for your purchases, essentially giving you money back
                      for spending.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Purchase Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Credit cards often provide fraud protection, extended warranties, and dispute resolution for
                      purchases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Convenience & Safety</h4>
                    <p className="text-sm text-muted-foreground">
                      Safer than carrying cash, accepted worldwide, and useful for online purchases and emergencies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Risks */}
              <Card id="risks">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                    Risks and Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">High Interest Rates</h4>
                    <p className="text-sm text-muted-foreground">
                      If you don't pay your full balance, you'll be charged interest, often 18-29% annually, which can
                      add up quickly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Debt Accumulation</h4>
                    <p className="text-sm text-muted-foreground">
                      Easy access to credit can lead to overspending and accumulating debt that becomes difficult to pay
                      off.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Credit Score Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Late payments, high balances, or missed payments can significantly damage your credit score.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      Annual fees, late payment fees, over-limit fees, and foreign transaction fees can add to your
                      costs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Credit Cards */}
      <section id="types" className="py-12 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Types of Credit Cards</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Rewards Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Earn cash back, points, or miles on your purchases. Best for those who pay their balance in full
                    each month.
                  </p>
                  <div className="text-sm">
                    <strong>Examples:</strong> Cash back cards, travel cards, airline cards
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Low Interest Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Offer lower APRs for those who might carry a balance. Often include 0% intro APR periods.
                  </p>
                  <div className="text-sm">
                    <strong>Examples:</strong> Balance transfer cards, 0% APR cards
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                    Credit Building Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Designed for people with no credit or poor credit. Help establish or rebuild credit history.
                  </p>
                  <div className="text-sm">
                    <strong>Examples:</strong> Secured cards, student cards, starter cards
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-center">Credit Card Best Practices</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Do's</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Pay your full balance each month</h4>
                      <p className="text-sm text-muted-foreground">Avoid interest charges and build good credit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Pay on time, every time</h4>
                      <p className="text-sm text-muted-foreground">Set up autopay to never miss a payment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Keep utilization low</h4>
                      <p className="text-sm text-muted-foreground">Use less than 30% of your credit limit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Monitor your statements</h4>
                      <p className="text-sm text-muted-foreground">Check for errors and fraudulent charges</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Don'ts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't spend more than you can afford</h4>
                      <p className="text-sm text-muted-foreground">Only charge what you can pay off</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't make only minimum payments</h4>
                      <p className="text-sm text-muted-foreground">You'll pay much more in interest over time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't apply for too many cards at once</h4>
                      <p className="text-sm text-muted-foreground">Multiple applications can hurt your credit score</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Don't ignore your credit report</h4>
                      <p className="text-sm text-muted-foreground">Check it regularly for errors and fraud</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">More Credit Card Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("credit-cards", "best")
              .slice(0, 3)
              .map((blog, index) => (
                <BlogCard
                  key={blog.slug}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.publishedAt}
                  href={`/blog/credit-cards/best/${blog.slug}`}
                  aosDelay={index * 100}
                />
              ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Credit Card Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to get your first credit card?</h2>
            <p className="mb-8 text-lg opacity-90">
              Now that you understand the basics, explore beginner-friendly credit cards that can help you build credit
              responsibly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <CreditCard className="mr-2 h-4 w-4" />
                View Beginner Cards
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                More Guides
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
