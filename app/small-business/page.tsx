import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, DollarSign, FileText, Users } from "lucide-react"

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200" variant="outline">
              Small Business Solutions
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Small Business
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              Find the best small business loans, banking solutions, and financial tools to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Funding Your Business */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 shadow-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Funding Your Business</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Small business loans, SBA loans, and lines of credit
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/small-business/funding/loans"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Small-Business Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/funding/sba-loans"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      SBA Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/funding/lines-of-credit"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Business Lines of Credit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/funding/grants"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Business Grants
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/funding/startup-loans"
                      className="block text-sm font-medium text-orange-700 hover:text-orange-800 hover:underline transition-colors duration-200"
                    >
                      Startup Business Loans
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Managing Business Finances */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Managing Business Finances</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Business bank accounts and credit cards</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/small-business/finances/bank-accounts"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Business Bank Accounts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/finances/credit-cards"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Business Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/finances/accounting-software"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Accounting Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/finances/taxes"
                      className="block text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      Business Taxes
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Starting a Business */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Starting a Business</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Business plans, ideas, and startup guidance</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/small-business/starting/how-to-start"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      How to Start a Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/starting/ideas"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Business Ideas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/starting/business-plan"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Writing a Business Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/starting/entrepreneurship"
                      className="block text-sm font-medium text-green-700 hover:text-green-800 hover:underline transition-colors duration-200"
                    >
                      Entrepreneurship
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Running Your Business */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5" />
              <CardHeader className="relative bg-gradient-to-r from-purple-50 to-violet-50 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-3 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Running Your Business</CardTitle>
                </div>
                <CardDescription className="text-gray-600">Tools and software for business operations</CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/small-business/running/payment-processing"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Payment Processing Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/running/payroll-hr"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Payroll & HR Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/running/ecommerce"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      E-commerce Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/running/marketing"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Marketing Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/running/insurance"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Business Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/running/legal"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Business Legal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/small-business/explore"
                      className="block text-sm font-medium text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                    >
                      Explore More Small-Business Resources
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
