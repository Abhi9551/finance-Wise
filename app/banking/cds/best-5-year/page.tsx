import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Shield, Calculator, TrendingUp } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best 5-Year CD Rates 2025 | Long-Term CDs - FinanceWise",
  description:
    "Find the best 5-year CD rates for maximum long-term returns. Compare rates from top banks and credit unions.",
  keywords: "5 year CD rates, long term CDs, certificate of deposit",
}

const cdRates = [
  {
    id: 1,
    bankName: "Quontic Bank",
    apy: "4.60%",
    minimumDeposit: "$500",
    rating: 4.8,
    features: ["Long-term competitive rate", "FDIC insured", "Automatic renewal", "Online management"],
    pros: ["Best rate for 5-year term", "Low minimum deposit", "Stable online platform"],
    cons: ["Online only", "High early withdrawal penalties"],
  },
  {
    id: 2,
    bankName: "Marcus by Goldman Sachs",
    apy: "4.55%",
    minimumDeposit: "$500",
    rating: 4.9,
    features: ["No fees", "FDIC insured", "Trusted institution", "Easy management"],
    pros: ["Trusted brand", "No monthly fees", "Excellent customer service"],
    cons: ["Online only", "Slightly lower rate"],
  },
  {
    id: 3,
    bankName: "Ally Bank",
    apy: "4.50%",
    minimumDeposit: "$0",
    rating: 4.8,
    features: ["No minimum deposit", "FDIC insured", "24/7 support", "Mobile app"],
    pros: ["No minimum deposit", "Great customer service", "User-friendly platform"],
    cons: ["Lower rate", "Online only"],
  },
]

export default function Best5YearCDPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-indigo-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <Badge variant="outline">5-Year CDs</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best 5-Year CD Rates</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Maximize your long-term savings with the best 5-year certificate of deposit rates available.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Find Best Rate
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                CD Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">4.60%</div>
              <div className="text-sm text-muted-foreground">Highest APY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">5</div>
              <div className="text-sm text-muted-foreground">Years Term</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">$0</div>
              <div className="text-sm text-muted-foreground">Min Deposit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">FDIC</div>
              <div className="text-sm text-muted-foreground">Insured</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top 5-Year CD Rates</h2>
          <div className="space-y-6">
            {cdRates.map((cd, index) => (
              <Card key={cd.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{cd.bankName}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                          <span className="ml-1 font-medium">{cd.rating}</span>
                        </div>
                        <Badge variant="secondary">#{index + 1} Best Rate</Badge>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-indigo-600">{cd.apy}</div>
                      <div className="text-sm text-muted-foreground">APY</div>
                      <Button className="mt-2 bg-indigo-600 hover:bg-indigo-700">Open CD</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-indigo-600" />
                        CD Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">APY:</span>
                          <span className="font-medium text-indigo-600">{cd.apy}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Term:</span>
                          <span className="font-medium">5 Years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Min Deposit:</span>
                          <span className="font-medium">{cd.minimumDeposit}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4 text-indigo-600" />
                        Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {cd.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
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
                            {cd.pros.map((pro, idx) => (
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
                            {cd.cons.map((con, idx) => (
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
          <h2 className="mb-8 text-center text-3xl font-bold">CD Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("banking", "cds").map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/banking/cds/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
