import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, DollarSign, Clock, Shield, ArrowRight, Calculator } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Best Personal Loans 2024 | Compare Top Lenders & Rates",
  description:
    "Find the best personal loans with competitive rates and flexible terms. Compare top lenders for debt consolidation, home improvement, and more.",
}

const personalLoans = [
  {
    lender: "SoFi",
    rating: 4.9,
    aprRange: "8.99% - 25.81%",
    loanAmounts: "$5,000 - $100,000",
    terms: "2 - 7 years",
    origination: "No fee",
    highlights: [
      "No fees whatsoever",
      "Unemployment protection",
      "Rate discount with autopay",
      "Member benefits and perks",
    ],
    bestFor: "No fees",
    pros: [
      "No origination, prepayment, or late fees",
      "Competitive rates for good credit",
      "Unemployment protection program",
      "Additional member benefits",
    ],
    cons: ["Requires good to excellent credit", "No co-signer option", "Limited physical locations"],
    minCreditScore: 680,
  },
  {
    lender: "LightStream",
    rating: 4.8,
    aprRange: "7.49% - 25.49%",
    loanAmounts: "$5,000 - $100,000",
    terms: "2 - 7 years",
    origination: "No fee",
    highlights: ["Low rates for excellent credit", "No fees", "Rate beat program", "Same-day funding available"],
    bestFor: "Excellent credit",
    pros: ["Very competitive rates", "No fees of any kind", "Rate beat program", "Fast funding options"],
    cons: ["Requires excellent credit", "No pre-qualification", "No co-signer option"],
    minCreditScore: 720,
  },
  {
    lender: "Discover Personal Loans",
    rating: 4.7,
    aprRange: "7.99% - 24.99%",
    loanAmounts: "$2,500 - $40,000",
    terms: "3 - 7 years",
    origination: "No fee",
    highlights: ["No fees", "30-day return policy", "Direct payment to creditors", "Excellent customer service"],
    bestFor: "Customer service",
    pros: ["30-day return policy", "No fees", "Direct creditor payments", "Award-winning customer service"],
    cons: ["Lower maximum loan amount", "Requires good credit", "Limited loan purposes"],
    minCreditScore: 660,
  },
]

const loanPurposes = [
  {
    purpose: "Debt Consolidation",
    description: "Combine multiple debts into one payment",
    benefits: ["Lower interest rate", "Simplified payments", "Fixed payment schedule"],
    idealFor: "High-interest credit card debt",
  },
  {
    purpose: "Home Improvement",
    description: "Fund renovations and upgrades",
    benefits: ["No collateral required", "Fast funding", "Flexible use of funds"],
    idealFor: "Kitchen remodels, bathroom upgrades",
  },
  {
    purpose: "Major Purchase",
    description: "Finance large expenses",
    benefits: ["Predictable payments", "No down payment", "Immediate access to funds"],
    idealFor: "Wedding, vacation, medical expenses",
  },
]

export default function BestPersonalLoansPage() {
  const blogs = getBlogsBySubcategory("loans", "best-personal-loans")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              <DollarSign className="w-4 h-4 mr-1" />
              Personal Loans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Personal Loans of 2024</h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Compare top personal loan lenders with competitive rates, flexible terms, and no hidden fees. Get the
              funding you need for any purpose.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-indigo-800/50 px-4 py-2 rounded-full">
                <Calculator className="w-4 h-4" />
                Rates from 7.49%
              </div>
              <div className="flex items-center gap-2 bg-indigo-800/50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                Fast funding
              </div>
              <div className="flex items-center gap-2 bg-indigo-800/50 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                No collateral required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Top Personal Loan Lenders</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold">Lender</th>
                    <th className="text-left p-4 font-semibold">APR Range</th>
                    <th className="text-left p-4 font-semibold">Loan Amounts</th>
                    <th className="text-left p-4 font-semibold">Terms</th>
                    <th className="text-left p-4 font-semibold">Origination Fee</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {personalLoans.map((loan, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <div className="font-semibold">{loan.lender}</div>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{loan.rating}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-green-600">{loan.aprRange}</td>
                      <td className="p-4">{loan.loanAmounts}</td>
                      <td className="p-4">{loan.terms}</td>
                      <td className="p-4 font-semibold text-green-600">{loan.origination}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{loan.bestFor}</Badge>
                      </td>
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
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Lender Reviews</h2>
            <div className="space-y-8">
              {personalLoans.map((loan, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{loan.lender}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{loan.rating}</span>
                          </div>
                          <Badge variant="outline">{loan.bestFor}</Badge>
                        </div>
                      </div>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">Check Rates</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-indigo-700">Key Features</h4>
                        <ul className="space-y-2">
                          {loan.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">APR Range:</span>
                            <div className="font-semibold text-green-600">{loan.aprRange}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Loan Amounts:</span>
                            <div className="font-semibold">{loan.loanAmounts}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Terms:</span>
                            <div className="font-semibold">{loan.terms}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Min Credit Score:</span>
                            <div className="font-semibold">{loan.minCreditScore}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">Pros</h5>
                        <ul className="space-y-1">
                          {loan.pros.map((pro, idx) => (
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
                          {loan.cons.map((con, idx) => (
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

      {/* Loan Purposes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Personal Loan Uses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {loanPurposes.map((purpose, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-center">{purpose.purpose}</h3>
                  <p className="text-gray-600 text-center mb-6">{purpose.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-indigo-700 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {purpose.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-2">Ideal For:</h4>
                      <p className="text-sm text-gray-600">{purpose.idealFor}</p>
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
                  <BlogCard date={""} href={""} key={index} {...blog} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
