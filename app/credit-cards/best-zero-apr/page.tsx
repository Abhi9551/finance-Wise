import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, CreditCard, Percent, TrendingUp, ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Best 0% APR Credit Cards 2024 | Compare Intro Offers",
  description:
    "Find the best 0% APR credit cards with longest intro periods. Compare balance transfer and purchase APR offers to save money on interest.",
}

const zeroAprCards = [
  {
    name: "Citi Simplicity® Card",
    issuer: "Citi",
    rating: 4.8,
    introApr: "0% APR for 21 months",
    regularApr: "17.24% - 27.99% Variable",
    annualFee: "$0",
    balanceTransferFee: "5% or $5 minimum",
    highlights: [
      "21 months 0% APR on purchases and balance transfers",
      "No late fees ever",
      "No penalty APR",
      "No annual fee",
    ],
    bestFor: "Long intro period",
    pros: ["Longest 0% APR period available", "No late fees or penalty APR", "Simple, straightforward card"],
    cons: ["No rewards program", "Balance transfer fee applies", "Limited additional benefits"],
  },
  {
    name: "Wells Fargo Reflect® Card",
    issuer: "Wells Fargo",
    rating: 4.7,
    introApr: "0% APR for 21 months",
    regularApr: "16.99% - 28.99% Variable",
    annualFee: "$0",
    balanceTransferFee: "5% or $5 minimum",
    highlights: [
      "21 months 0% APR on purchases and qualifying balance transfers",
      "Cell phone protection",
      "My Wells Fargo Deals",
      "No annual fee",
    ],
    bestFor: "Cell phone protection",
    pros: ["21-month intro period", "Cell phone protection benefit", "Access to Wells Fargo Deals", "No annual fee"],
    cons: ["No rewards program", "Balance transfer fee", "Requires Wells Fargo relationship for best terms"],
  },
  {
    name: "BankAmericard® credit card",
    issuer: "Bank of America",
    rating: 4.5,
    introApr: "0% APR for 21 months",
    regularApr: "16.99% - 26.99% Variable",
    annualFee: "$0",
    balanceTransferFee: "3% or $10 minimum",
    highlights: [
      "21 months 0% APR on purchases and balance transfers",
      "Lower balance transfer fee",
      "No annual fee",
      "FICO® Score access",
    ],
    bestFor: "Lower transfer fees",
    pros: ["Lower 3% balance transfer fee", "21-month intro period", "Free FICO® Score", "No annual fee"],
    cons: ["No rewards program", "Limited additional benefits", "Requires good credit"],
  },
]

export default function BestZeroAprPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-zero-apr")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Percent className="w-4 h-4 mr-1" />
              0% APR Offers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best 0% APR Credit Cards of 2024</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Save money with the longest 0% APR intro periods. Perfect for large purchases or paying down existing debt
              without interest charges.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                Up to 21 months 0% APR
              </div>
              <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                <CreditCard className="w-4 h-4" />
                No annual fees
              </div>
              <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                Balance transfer options
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold">Card</th>
                    <th className="text-left p-4 font-semibold">Intro APR</th>
                    <th className="text-left p-4 font-semibold">Regular APR</th>
                    <th className="text-left p-4 font-semibold">Annual Fee</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {zeroAprCards.map((card, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <div className="font-semibold">{card.name}</div>
                          <div className="text-sm text-gray-600">{card.issuer}</div>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-green-600">{card.introApr}</td>
                      <td className="p-4">{card.regularApr}</td>
                      <td className="p-4 font-semibold">{card.annualFee}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{card.bestFor}</Badge>
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
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Reviews</h2>
            <div className="space-y-8">
              {zeroAprCards.map((card, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{card.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Issued by {card.issuer}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{card.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Key Features</h4>
                        <ul className="space-y-2">
                          {card.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Intro APR:</span>
                            <div className="font-semibold text-green-600">{card.introApr}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Regular APR:</span>
                            <div className="font-semibold">{card.regularApr}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Annual Fee:</span>
                            <div className="font-semibold">{card.annualFee}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Balance Transfer Fee:</span>
                            <div className="font-semibold">{card.balanceTransferFee}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">Pros</h5>
                        <ul className="space-y-1">
                          {card.pros.map((pro, idx) => (
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
                          {card.cons.map((con, idx) => (
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

      {/* How to Choose Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How to Choose the Best 0% APR Card</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Consider the Intro Period Length
                </h3>
                <p className="text-gray-600 mb-4">
                  Look for the longest 0% APR period that fits your needs. Current offers range from 12-21 months.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 12-15 months: Good for smaller purchases</li>
                  <li>• 18-21 months: Better for large purchases or debt payoff</li>
                  <li>• Consider your payoff timeline realistically</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Percent className="w-5 h-5 text-green-600" />
                  Check Transfer Fees
                </h3>
                <p className="text-gray-600 mb-4">
                  Balance transfer fees typically range from 3-5% of the transferred amount.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 3% fee: Better for larger transfers</li>
                  <li>• 5% fee: Standard rate for most cards</li>
                  <li>• Calculate if savings exceed the fee cost</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Regular APR Matters
                </h3>
                <p className="text-gray-600 mb-4">
                  The regular APR kicks in after the intro period ends. Plan accordingly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Aim to pay off balance before intro period ends</li>
                  <li>• Lower regular APR provides safety net</li>
                  <li>• Consider your credit score impact on APR</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  Additional Benefits
                </h3>
                <p className="text-gray-600 mb-4">Some 0% APR cards offer extra perks beyond the intro rate.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Cell phone protection</li>
                  <li>• Purchase protection</li>
                  <li>• Credit score monitoring</li>
                </ul>
              </Card>
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
              <div className="text-center mt-8 md:hidden">
                <Button variant="outline" className="w-full">
                  View All Articles
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
