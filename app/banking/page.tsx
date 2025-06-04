import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Landmark, TrendingUp, Shield, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Banking - Compare Best Bank Accounts & Rates | FinanceWise",
  description:
    "Find the best savings accounts, checking accounts, CDs, and online banks. Compare rates, fees, and features to maximize your money.",
}

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200" variant="outline">
              Banking Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Find the Best Banking Products
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Compare savings accounts, checking accounts, CDs, and online banks to maximize your money and minimize
              fees.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Categories */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Savings accounts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                  High-yield savings accounts to grow your money faster
                </CardDescription>
                <div className="space-y-3">
                  <Link
                    href="/banking/savings/best-high-yield"
                    className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                  >
                    Best high-yield savings accounts
                  </Link>
                  <Link
                    href="/banking/savings/best"
                    className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                  >
                    Best savings accounts
                  </Link>
                  <Link
                    href="/banking/savings/alternatives"
                    className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                  >
                    Savings account alternatives
                  </Link>
                  <Link
                    href="/banking/savings/calculator"
                    className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                  >
                    Savings calculator
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                    <Landmark className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Checking accounts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                  Free checking accounts with no monthly fees
                </CardDescription>
                <div className="space-y-3">
                  <Link
                    href="/banking/checking/best"
                    className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Best checking accounts
                  </Link>
                  <Link
                    href="/banking/checking/best-free"
                    className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Best free checking accounts
                  </Link>
                  <Link
                    href="/banking/checking/best-online"
                    className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Best online checking accounts
                  </Link>
                  <Link
                    href="/banking/checking/alternatives"
                    className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    Checking account alternatives
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5" />
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-3 shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">CDs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                  Certificates of deposit with guaranteed returns
                </CardDescription>
                <div className="space-y-3">
                  <Link
                    href="/banking/cds/best-rates"
                    className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                  >
                    Best CD rates
                  </Link>
                  <Link
                    href="/banking/cds/best-3-month"
                    className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                  >
                    Best 3-month CD rates
                  </Link>
                  <Link
                    href="/banking/cds/best-6-month"
                    className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                  >
                    Best 6-month CD rates
                  </Link>
                  <Link
                    href="/banking/cds/best-1-year"
                    className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                  >
                    Best 1-year CD rates
                  </Link>
                  <Link
                    href="/banking/cds/best-3-year"
                    className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                  >
                    Best 3-year CD rates
                  </Link>
                  <Link
                    href="/banking/cds/best-5-year"
                    className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                  >
                    Best 5-year CD rates
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
              <CardHeader className="relative pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 shadow-lg">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Banking calculators</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                  Banking calculators to plan your finances
                </CardDescription>
                <div className="space-y-3">
                  <Link
                    href="/banking/calculators/compound-interest"
                    className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                  >
                    Compound interest calculator
                  </Link>
                  <Link
                    href="/banking/calculators/emergency-fund"
                    className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                  >
                    Emergency fund calculator
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
