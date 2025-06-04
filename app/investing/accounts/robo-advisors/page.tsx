import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Shield, DollarSign, ArrowRight, Bot, PieChart } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Best Robo-Advisors 2024 | Automated Investment Platforms",
  description:
    "Compare the best robo-advisors for automated investing. Find low-cost, diversified portfolio management with top-rated platforms.",
}

const roboAdvisors = [
  {
    name: "Betterment",
    rating: 4.9,
    managementFee: "0.25% - 0.40%",
    minimumDeposit: "$0",
    accountMinimum: "$0",
    highlights: ["Goal-based investing", "Tax-loss harvesting", "Automatic rebalancing", "Human advisor access"],
    bestFor: "Beginners",
    pros: ["No account minimum", "Easy-to-use interface", "Goal-based planning", "Tax optimization features"],
    cons: ["Limited investment options", "No direct indexing", "Higher fees for premium service"],
    features: {
      taxLossHarvesting: true,
      rebalancing: true,
      humanAdvisor: true,
      goalPlanning: true,
      fractionalShares: true,
    },
  },
  {
    name: "Wealthfront",
    rating: 4.8,
    managementFee: "0.25%",
    minimumDeposit: "$500",
    accountMinimum: "$500",
    highlights: ["Advanced tax optimization", "Direct indexing", "Path financial planning", "High-yield cash account"],
    bestFor: "Tax optimization",
    pros: [
      "Sophisticated tax strategies",
      "Direct indexing available",
      "Comprehensive financial planning",
      "High-yield cash management",
    ],
    cons: ["$500 minimum to start", "No human advisor access", "Limited customization options"],
    features: {
      taxLossHarvesting: true,
      rebalancing: true,
      humanAdvisor: false,
      goalPlanning: true,
      fractionalShares: true,
    },
  },
  {
    name: "Charles Schwab Intelligent Portfolios",
    rating: 4.7,
    managementFee: "0.00%",
    minimumDeposit: "$5,000",
    accountMinimum: "$5,000",
    highlights: ["No advisory fees", "Automatic rebalancing", "Tax-loss harvesting", "Access to human advisors"],
    bestFor: "No fees",
    pros: [
      "No management fees",
      "Strong brand reputation",
      "Access to human advisors",
      "Comprehensive investment options",
    ],
    cons: ["High minimum deposit", "Cash allocation requirement", "Limited goal-based features"],
    features: {
      taxLossHarvesting: true,
      rebalancing: true,
      humanAdvisor: true,
      goalPlanning: false,
      fractionalShares: true,
    },
  },
]

const comparisonFeatures = [
  "Management Fee",
  "Account Minimum",
  "Tax-Loss Harvesting",
  "Automatic Rebalancing",
  "Human Advisor Access",
  "Goal-Based Planning",
  "Fractional Shares",
]

export default function BestRoboAdvisorsPage() {
  const blogs = getBlogsBySubcategory("investing", "best-robo-advisors")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              <Bot className="w-4 h-4 mr-1" />
              Automated Investing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Robo-Advisors of 2024</h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Let technology manage your investments with automated portfolio management, rebalancing, and tax
              optimization from top-rated robo-advisors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-purple-800/50 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4" />
                Low fees from 0.00%
              </div>
              <div className="flex items-center gap-2 bg-purple-800/50 px-4 py-2 rounded-full">
                <PieChart className="w-4 h-4" />
                Diversified portfolios
              </div>
              <div className="flex items-center gap-2 bg-purple-800/50 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                Automatic rebalancing
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
                    <th className="text-left p-4 font-semibold">Robo-Advisor</th>
                    <th className="text-left p-4 font-semibold">Management Fee</th>
                    <th className="text-left p-4 font-semibold">Account Minimum</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                    <th className="text-left p-4 font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {roboAdvisors.map((advisor, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-semibold">{advisor.name}</div>
                      </td>
                      <td className="p-4 font-semibold text-green-600">{advisor.managementFee}</td>
                      <td className="p-4">{advisor.accountMinimum}</td>
                      <td className="p-4">
                        <Badge variant="secondary">{advisor.bestFor}</Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{advisor.rating}</span>
                        </div>
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
              {roboAdvisors.map((advisor, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{advisor.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{advisor.rating}</span>
                          </div>
                          <Badge variant="outline">{advisor.bestFor}</Badge>
                        </div>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Key Features</h4>
                        <ul className="space-y-2">
                          {advisor.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Management Fee:</span>
                            <div className="font-semibold text-green-600">{advisor.managementFee}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Account Minimum:</span>
                            <div className="font-semibold">{advisor.accountMinimum}</div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-2">Features</h5>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              <span className={advisor.features.taxLossHarvesting ? "text-green-500" : "text-red-500"}>
                                {advisor.features.taxLossHarvesting ? "✓" : "✗"}
                              </span>
                              Tax-Loss Harvesting
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={advisor.features.rebalancing ? "text-green-500" : "text-red-500"}>
                                {advisor.features.rebalancing ? "✓" : "✗"}
                              </span>
                              Auto Rebalancing
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={advisor.features.humanAdvisor ? "text-green-500" : "text-red-500"}>
                                {advisor.features.humanAdvisor ? "✓" : "✗"}
                              </span>
                              Human Advisor
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={advisor.features.goalPlanning ? "text-green-500" : "text-red-500"}>
                                {advisor.features.goalPlanning ? "✓" : "✗"}
                              </span>
                              Goal Planning
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                      <div>
                        <h5 className="font-semibold text-green-700 mb-2">Pros</h5>
                        <ul className="space-y-1">
                          {advisor.pros.map((pro, idx) => (
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
                          {advisor.cons.map((con, idx) => (
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

      {/* How Robo-Advisors Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Robo-Advisors Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-600" />
                  Automated Portfolio Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Robo-advisors use algorithms to create and manage diversified portfolios based on your goals and risk
                  tolerance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Initial questionnaire determines your investment profile</li>
                  <li>• Algorithm selects appropriate ETFs and allocation</li>
                  <li>• Continuous monitoring and adjustments</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-green-600" />
                  Automatic Rebalancing
                </h3>
                <p className="text-gray-600 mb-4">
                  Your portfolio is automatically rebalanced to maintain target allocations as markets move.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Maintains target asset allocation</li>
                  <li>• Sells high-performing assets, buys underperforming</li>
                  <li>• Typically rebalances quarterly or when thresholds are met</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Tax Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced tax strategies help minimize your tax burden and maximize after-tax returns.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Tax-loss harvesting to offset gains</li>
                  <li>• Asset location optimization</li>
                  <li>• Tax-efficient fund selection</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  Low-Cost Investing
                </h3>
                <p className="text-gray-600 mb-4">
                  Robo-advisors typically charge much lower fees than traditional financial advisors.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Management fees typically 0.25% - 0.50%</li>
                  <li>• Use low-cost ETFs in portfolios</li>
                  <li>• No trading commissions on rebalancing</li>
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
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
