import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, GraduationCap, Car, Calculator } from "lucide-react"

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200" variant="outline">
              Loan Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Loans</h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Compare personal loans, student loans, and auto loans to find the best rates and terms for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Personal Loans */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-3 shadow-lg">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Personal Loans</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Unsecured loans for debt consolidation and major purchases
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/loans/personal/pre-qualify"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Pre-qualify for a Personal Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/personal/compare-lenders"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Compare Top Lenders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/personal/reviews"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Personal Loan Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/personal/calculator"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Personal Loan Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/personal/how-to-qualify"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      How to Qualify
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/personal/debt-consolidation"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      How to Consolidate Credit Card Debt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/personal/interest-rates"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Average Personal Loan Interest Rates
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Student Loans */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Student Loans</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Federal and private student loans for education financing
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/loans/student/paying-for-college"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Paying for College
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/fafsa"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      FAFSA and Federal Student Aid
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/taking-out"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Taking Out Student Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/paying-off"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Paying Off Student Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/refinance"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Student Loan Refinance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/interest-rates"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Student Loan Interest Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/calculator"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Student Loan Calculator
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Auto Loans */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 shadow-lg">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Auto Loans</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  New and used car loans with competitive rates
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/loans/auto/best"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Best Auto Loans for Good and Bad Credit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/auto/refinance"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Best Auto Loans Refinance Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/auto/lease-buyout"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Best Lease Buyout Loans
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Loan Calculators */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 shadow-lg">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Loan Calculators</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Calculate payments and compare loan options</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/loans/personal/calculator"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Personal Loan Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/student/calculator"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Student Loan Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/auto/calculator"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Auto Loan Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/debt-to-income-calculator"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Debt-to-Income Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/loans/explore"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Explore More Loan Resources
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
