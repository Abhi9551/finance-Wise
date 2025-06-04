import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, DollarSign, Calendar, HelpCircle } from "lucide-react"

export default function TaxesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200" variant="outline">
              Tax Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Taxes</h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Find the best tax software, use our calculators, and get expert advice to maximize your refund.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Tax Brackets and Rates */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-red-50 to-pink-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-red-500 to-pink-600 p-3 shadow-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Tax Brackets and Rates</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Current tax brackets and rates</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/taxes/brackets-rates"
                      className="block text-sm font-medium text-red-700 hover:text-red-800 hover:underline transition-colors duration-200"
                    >
                      Tax Brackets and Rates
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tax Calculators */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Tax Calculators</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Calculate your taxes and estimate refunds</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/taxes/calculators/federal-income"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Federal Income Tax Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/taxes/calculators/capital-gains"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Capital Gains Tax Calculator
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tax Preparation and Filing */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Tax Preparation and Filing</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Tax software and filing resources</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/taxes/preparation/credits-deductions"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Tax Credits and Deductions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/taxes/preparation/forms"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Tax Forms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/taxes/preparation/best-software"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Best Tax Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/taxes/preparation/basics"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Tax Preparation Basics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/taxes/preparation/all"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      View All Tax Preparation and Filing
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tax Strategy and Planning */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-3 shadow-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Tax Strategy and Planning</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Year-round tax strategy and planning tips</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/taxes/strategy-planning"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Tax Strategy and Planning
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solving Tax Issues */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 p-3 shadow-lg">
                    <HelpCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Solving Tax Issues</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Help with tax problems and issues</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/taxes/issues"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Solving Tax Issues
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/taxes/explore"
                      className="block text-sm font-medium text-amber-700 hover:text-amber-800 hover:underline transition-colors duration-200"
                    >
                      Explore More Tax Resources
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
