import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Wallet, Calculator, BookOpen } from "lucide-react"

export default function CreditCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200" variant="outline">
              Credit Card Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Credit Cards
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Compare credit cards, find the best rewards, and make informed decisions with our expert recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Best Credit Cards */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Best Credit Cards</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Find the perfect credit card for your needs</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/credit-cards/best"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-bonus-offers"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Credit Card Bonus Offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-balance-transfer"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Balance Transfer Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-travel"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Travel Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-cash-back"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Cash Back Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-zero-apr"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best 0% APR Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-rewards"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Rewards Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-airline"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Airline Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-student"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best College Student Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/best-groceries"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Credit Cards for Groceries
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card Recommendations */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 shadow-lg">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Card Recommendations</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Get personalized credit card recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/credit-cards/compare"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Compare Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/recommendation/travel-rewards"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Travel Rewards and Perks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/recommendation/cash-back"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Earn Cash Back
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/recommendation/debt-payoff"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Pay Down Debt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/recommendation/big-purchase"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Make a Big Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/recommendation/approval-odds"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Get Your Approval Odds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/recommendation/quiz"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Card Recommendation Quiz
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/reviews"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Credit Card Reviews
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Credit Card Calculators */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-3 shadow-lg">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Credit Card Calculators</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Calculate savings, interest, and more</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/credit-cards/calculators/balance-transfer"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Balance Transfer Savings Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/calculators/interest"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Credit Card Interest Calculator
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Guides and Resources */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Guides and Resources</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Learn about credit cards and best practices</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/credit-cards/guides/free-credit-score"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Get Your Free Credit Score
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/guides/basics"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Credit Card Basics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/guides/applying"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Applying for a Credit Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/guides/choosing"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Choosing a Credit Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/guides/debt-management"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Managing Credit Card Debt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/guides/resources"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Credit Card Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/credit-cards/resources"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Explore More Credit Card Resources
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
