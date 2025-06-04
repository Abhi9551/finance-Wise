import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, TrendingDown, Repeat, Building, Calculator, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200" variant="outline">
              Home & Mortgage Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Home & Mortgage
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Find the best mortgage rates, home loans, and refinancing options. Compare lenders and get expert advice.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mortgage Rates */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 shadow-lg">
                    <TrendingDown className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Mortgage Rates</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Find today's best mortgage rates</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/home/mortgage-rates/today"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Today's Mortgage Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-rates/30-year"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      30 Year Mortgage Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-rates/5-year-arm"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      5-Year ARM Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-rates/3-year-arm"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      3-Year ARM Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-rates/fha"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      FHA Mortgage Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-rates/va"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      VA Mortgage Rates
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Best Mortgage Lenders */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Best Mortgage Lenders</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Compare top mortgage lenders</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/home/mortgage-lenders/best"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Mortgage Lenders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-lenders/best-fha"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Lenders for FHA Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-lenders/low-down-payment"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best Lenders for Low- and No-Down-Payment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/mortgage-lenders/best-va"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Best VA Mortgage Lenders
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Refinance and HELOC */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-3 shadow-lg">
                    <Repeat className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Refinance and HELOC</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Refinance options and home equity</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/home/refinance/rates-today"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Today's Refinance Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/refinance/best-lenders"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Best Refinance Lenders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/refinance/30-year-fixed"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      30-Year Fixed Refinance Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/refinance/15-year-fixed"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      15-Year Fixed Refinance Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/refinance/cash-out"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Best Cash-Out Refinance Lenders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/refinance/heloc"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Best HELOC Lenders
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Buying a Home */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 shadow-lg">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Buying a Home</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Resources for home buyers</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/home/buying/pre-approval"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Get Pre-Approved for a Mortgage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/buying/affordability"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Home Affordability
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/buying/first-time-guide"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      First-Time Homebuyers Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/buying/down-payment"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Down Payment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/buying/borrow-calculator"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      How Much Can I Borrow Mortgage Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/buying/inspections"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Inspections and Appraisals
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Home Calculators */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-teal-50 to-cyan-50 border-b border-teal-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 p-3 shadow-lg">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Home Calculators</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Calculate mortgage payments and more</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/home/calculators/mortgage"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Mortgage Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/down-payment"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Down Payment Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/affordability"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      How Much House Can I Afford Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/closing-costs"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Closing Costs Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/cost-of-living"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Cost of Living Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/amortization"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Mortgage Amortization Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/refinance"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Refinance Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/calculators/rent-vs-buy"
                      className="block text-sm font-medium text-teal-700 hover:text-teal-800 hover:underline transition-colors duration-200"
                    >
                      Rent vs Buy Calculator
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Homeownership */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 p-3 shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Homeownership</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Resources for current homeowners</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/home/ownership/managing-mortgage"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Managing a Mortgage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/ownership/refinancing-equity"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Refinancing and Equity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/ownership/improvement"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Home Improvement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/ownership/value"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Home Value
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/ownership/insurance"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Home Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/selling"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Selling a Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/home/first-time-guide"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      First-Time Homebuyer's Guide
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
