import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Shield, Calculator, ArrowRight, Percent } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Best CD Rates 2024 | Highest Certificate of Deposit Rates",
  description:
    "Find the highest CD rates available today. Compare certificate of deposit rates from top banks and credit unions for all terms.",
}

const cdRates = [
  {
    institution: "Marcus by Goldman Sachs",
    type: "Online Bank",
    rating: 4.9,
    rates: {
      "6 months": "5.05%",
      "1 year": "5.15%",
      "2 years": "4.90%",
      "3 years": "4.75%",
      "5 years": "4.60%",
    },
    minimumDeposit: "$500",
    highlights: ["No fees", "Competitive rates across all terms", "FDIC insured", "Easy online account management"],
    bestFor: "Overall value",
    pros: ["Consistently high rates", "Low minimum deposit", "No monthly fees", "Strong customer service"],
    cons: ["Online only", "Limited branch access", "No relationship bonuses"],
  },
  {
    institution: "Ally Bank",
    type: "Online Bank",
    rating: 4.8,
    rates: {
      "6 months": "4.95%",
      "1 year": "5.10%",
      "2 years": "4.85%",
      "3 years": "4.70%",
      "5 years": "4.55%",
    },
    minimumDeposit: "$0",
    highlights: ["No minimum deposit", "No fees", "Automatic renewal options", "24/7 customer support"],
    bestFor: "No minimum deposit",
    pros: [
      "No minimum deposit required",
      "Excellent customer service",
      "User-friendly online platform",
      "Flexible renewal options",
    ],
    cons: ["Slightly lower rates than competitors", "Online only", "Limited physical presence"],
  },
  {
    institution: "Capital One",
    type: "National Bank",
    rating: 4.7,
    rates: {
      "6 months": "4.90%",
      "1 year": "5.00%",
      "2 years": "4.75%",
      "3 years": "4.60%",
      "5 years": "4.45%",
    },
    minimumDeposit: "$0",
    highlights: ["No minimum deposit", "No fees", "Branch and online access", "Relationship banking benefits"],
    bestFor: "Branch access",
    pros: ["Physical branch locations", "No minimum deposit", "Strong mobile app", "Multiple banking products"],
    cons: ["Lower rates than online-only banks", "Limited branch network", "Relationship requirements for best rates"],
  },
]

const cdTerms = [
  {
    term: "3-6 Months",
    bestFor: "Short-term savings",
    pros: ["Quick access to funds", "Lower interest rate risk"],
    cons: ["Lower rates", "Frequent renewal needed"],
    idealFor: "Emergency funds, short-term goals",
  },
  {
    term: "1-2 Years",
    bestFor: "Medium-term goals",
    pros: ["Balanced rate and flexibility", "Good for rate laddering"],
    cons: ["Moderate penalty for early withdrawal"],
    idealFor: "Car purchase, home down payment",
  },
  {
    term: "3-5 Years",
    bestFor: "Long-term savings",
    pros: ["Higher rates", "Set-and-forget investing"],
    cons: ["Higher penalty costs", "Rate risk if rates rise"],
    idealFor: "Retirement savings, long-term goals",
  },
]

export default function BestCDRatesPage() {
  const blogs = getBlogsBySubcategory("banking", "best-cd-rates")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <TrendingUp className="w-4 h-4 mr-1" />
              High Yield CDs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best CD Rates of 2024</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Lock in guaranteed returns with the highest certificate of deposit rates. Compare rates from top banks and
              credit unions across all terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full">
                <Percent className="w-4 h-4" />
                Up to 5.15% APY
              </div>
              <div className="flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                FDIC Insured
              </div>
              <div className="flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full">
                <Calculator className="w-4 h-4" />
                Guaranteed Returns
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Best Rates */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Current Best CD Rates</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold">Institution</th>
                    <th className="text-left p-4 font-semibold">6 Months</th>
                    <th className="text-left p-4 font-semibold">1 Year</th>
                    <th className="text-left p-4 font-semibold">2 Years</th>
                    <th className="text-left p-4 font-semibold">5 Years</th>
                    <th className="text-left p-4 font-semibold">Min. Deposit</th>
                  </tr>
                </thead>
                <tbody>
                  {cdRates.map((bank, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <div className="font-semibold">{bank.institution}</div>
                          <div className="text-sm text-gray-600">{bank.type}</div>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-green-600">{bank.rates["6 months"]}</td>
                      <td className="p-4 font-semibold text-green-600">{bank.rates["1 year"]}</td>
                      <td className="p-4 font-semibold text-green-600">{bank.rates["2 years"]}</td>
                      <td className="p-4 font-semibold text-green-600">{bank.rates["5 years"]}</td>
                      <td className="p-4 font-semibold">{bank.minimumDeposit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Reviews</h2>
            <div className="space-y-8">
              {cdRates.map((bank, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{bank.institution}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{bank.type}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{bank.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">Open Account</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Key Features</h4>
                        <ul className="space-y-2">
                          {bank.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Current Rates (APY)</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(bank.rates).map(([term, rate]) => (
                            <div key={term} className="flex justify-between">
                              <span className="text-gray-600">{term}:</span>
                              <span className="font-semibold text-green-600">{rate}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Minimum Deposit:</span>
                            <span className="font-semibold">{bank.minimumDeposit}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">Pros</h5>
                        <ul className="space-y-1">
                          {bank.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 mb-2">Cons</h5>
                        <ul className="space-y-1">
                          {bank.cons.map((con, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="text-red-500 mt-1">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CD Terms Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Choosing the Right CD Term</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cdTerms.map((term, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-center">{term.term}</h3>
                  <div className="text-center mb-4">
                    <Badge variant="secondary">{term.bestFor}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {term.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {term.cons.map((con, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-2">Ideal For:</h4>
                      <p className="text-sm text-gray-600">{term.idealFor}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {blogs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Related Articles</h2>
                <Button variant="outline" className="hidden md:flex items-center gap-2">
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.slice(0, 3).map((blog, index) => (
                  <BlogCard key={index} {...blog} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
