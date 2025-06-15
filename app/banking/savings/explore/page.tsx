import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PiggyBank, TrendingUp, Shield, Calculator, ArrowRight, Star, Zap, Target } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Explore Savings Accounts & Resources | FinanceWise",
  description:
    "Discover comprehensive savings resources, tools, and guides to maximize your savings potential and reach your financial goals.",
  keywords: "savings resources, savings tools, financial planning, savings guides",
}

const savingsResources = [
  {
    id: 1,
    title: "Best High-Yield Savings Accounts",
    description: "Compare the highest APY rates from top online banks and credit unions",
    icon: TrendingUp,
    color: "green",
    href: "/banking/savings/best-high-yield",
    features: ["Up to 5.0% APY", "No monthly fees", "FDIC insured", "Online access"],
  },
  {
    id: 2,
    title: "Savings Account Alternatives",
    description: "Explore money market accounts, CDs, and other high-yield options",
    icon: Shield,
    color: "blue",
    href: "/banking/savings/alternatives",
    features: ["Money market accounts", "Certificates of deposit", "Treasury bills", "Investment options"],
  },
  {
    id: 3,
    title: "Savings Calculator",
    description: "Calculate compound interest and plan your savings growth",
    icon: Calculator,
    color: "purple",
    href: "/banking/savings/calculator",
    features: ["Compound interest", "Monthly contributions", "Goal planning", "Growth projections"],
  },
  {
    id: 4,
    title: "Emergency Fund Guide",
    description: "Build and maintain your emergency savings fund",
    icon: Target,
    color: "orange",
    href: "/banking/calculators/emergency-fund",
    features: ["3-6 months expenses", "Quick access funds", "Separate account", "Automatic savings"],
  },
]

const savingsStrategies = [
  {
    title: "50/30/20 Rule",
    description: "Allocate 20% of income to savings and debt repayment",
    tip: "Automate this percentage to ensure consistent saving habits",
  },
  {
    title: "Pay Yourself First",
    description: "Save money before paying other expenses",
    tip: "Set up automatic transfers on payday to prioritize savings",
  },
  {
    title: "High-Yield Focus",
    description: "Maximize interest earnings with high-APY accounts",
    tip: "Compare rates regularly and switch if you find better options",
  },
  {
    title: "Goal-Based Saving",
    description: "Create specific savings goals with target amounts and dates",
    tip: "Use separate accounts for different goals to track progress",
  },
]

const quickStats = [
  {
    stat: "4.5%",
    label: "Average High-Yield APY",
    description: "Current top savings account rates",
  },
  {
    stat: "$1,000",
    label: "Recommended Emergency Fund Start",
    description: "Initial emergency fund goal",
  },
  {
    stat: "20%",
    label: "Recommended Savings Rate",
    description: "Percentage of income to save",
  },
  {
    stat: "3-6",
    label: "Months of Expenses",
    description: "Full emergency fund target",
  },
]

export default function ExploreSavingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-green-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <PiggyBank className="h-6 w-6 text-green-600" />
              <Badge variant="outline">Savings Resources</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Explore Savings Resources</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Comprehensive tools, guides, and resources to maximize your savings potential and achieve your financial
              goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <TrendingUp className="mr-2 h-4 w-4" />
                Find Best Accounts
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Use Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Savings at a Glance</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{item.stat}</div>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Resources */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Savings Tools & Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {savingsResources.map((resource) => {
              const IconComponent = resource.icon
              const colorClasses = {
                green: "from-green-50 to-green-100 text-green-600",
                blue: "from-blue-50 to-blue-100 text-blue-600",
                purple: "from-purple-50 to-purple-100 text-purple-600",
                orange: "from-orange-50 to-orange-100 text-orange-600",
              }

              return (
                <Card key={resource.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <CardHeader
                    className={`bg-gradient-to-r ${colorClasses[resource.color as keyof typeof colorClasses]}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <IconComponent className="h-6 w-6" />
                          {resource.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2">{resource.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          Key Features
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {resource.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Zap className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={resource.href}>
                          Explore {resource.title} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Savings Strategies */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Proven Savings Strategies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {savingsStrategies.map((strategy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{strategy.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Pro Tip:</strong> {strategy.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
    </div>
  )
}
