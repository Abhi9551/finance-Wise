import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Calculator, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best 0% APR Cards for Big Purchases | Finance Large Expenses - FinanceWise",
  description:
    "Find the best 0% APR credit cards for financing large purchases. Compare intro offers and get personalized recommendations.",
  keywords: "0% APR credit cards, big purchase financing, large expense cards, purchase APR",
}

const bigPurchaseCards = [
  {
    id: 1,
    name: "Wells Fargo Reflect® Card",
    issuer: "Wells Fargo",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    introAPR: "0% APR for 21 months",
    purchaseAPR: "0% on purchases for 21 months",
    regularAPR: "17.24%-28.99%",
    annualFee: "$0",
    creditLimit: "Up to $15,000+",
    bestFor: "Longest 0% purchase period",
    keyBenefits: [
      "21 months 0% APR on purchases",
      "21 months 0% APR on balance transfers",
      "Cell phone protection up to $600",
      "My Wells Fargo Deals for savings",
      "No annual fee",
    ],
    purchaseFeatures: [
      "21-month interest-free financing",
      "High credit limits available",
      "Purchase protection benefits",
      "Online account management",
    ],
    idealFor: ["Home improvements", "Major appliances", "Furniture", "Electronics"],
  },
  {
    id: 2,
    name: "Citi Simplicity® Card",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    introAPR: "0% APR for 12 months",
    purchaseAPR: "0% on purchases for 12 months",
    regularAPR: "18.24%-28.99%",
    annualFee: "$0",
    creditLimit: "Up to $10,000+",
    bestFor: "No late fees ever",
    keyBenefits: [
      "12 months 0% APR on purchases",
      "21 months 0% APR on balance transfers",
      "No late fees ever",
      "No penalty APR",
      "Simple, straightforward terms",
    ],
    purchaseFeatures: [
      "12-month payment flexibility",
      "No late fee penalties",
      "Simple terms and conditions",
      "Automatic payment options",
    ],
    idealFor: ["Medical expenses", "Car repairs", "Travel bookings", "Wedding expenses"],
  },
  {
    id: 3,
    name: "Chase Freedom Unlimited®",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    introAPR: "0% APR for 15 months",
    purchaseAPR: "0% on purchases for 15 months",
    regularAPR: "18.99%-28.49%",
    annualFee: "$0",
    creditLimit: "Up to $12,000+",
    bestFor: "Rewards + 0% APR combo",
    keyBenefits: [
      "15 months 0% APR on purchases",
      "15 months 0% APR on balance transfers",
      "1.5% cash back on all purchases",
      "$200 cash back bonus",
      "No annual fee",
    ],
    purchaseFeatures: [
      "15-month financing window",
      "Earn rewards while financing",
      "Welcome bonus opportunity",
      "Mobile payment alerts",
    ],
    idealFor: ["Business equipment", "Education expenses", "Home office setup", "Technology purchases"],
  },
]

const purchaseCategories = [
  {
    category: "Home Improvement",
    description: "Kitchen remodels, bathroom upgrades, flooring",
    averageCost: "$5,000 - $25,000",
    recommendedPeriod: "18-21 months",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    category: "Major Appliances",
    description: "Refrigerators, washers, dryers, HVAC systems",
    averageCost: "$1,000 - $8,000",
    recommendedPeriod: "12-18 months",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    category: "Medical Expenses",
    description: "Dental work, elective procedures, medical bills",
    averageCost: "$2,000 - $15,000",
    recommendedPeriod: "12-21 months",
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    category: "Education",
    description: "Tuition, certification courses, training programs",
    averageCost: "$3,000 - $20,000",
    recommendedPeriod: "15-21 months",
    icon: <Clock className="h-5 w-5" />,
  },
]

const financingCalculator = {
  example: {
    purchaseAmount: 8000,
    scenarios: [
      {
        name: "Regular Credit Card (22% APR)",
        monthlyPayment: "$400",
        totalInterest: "$1,456",
        totalPaid: "$9,456",
        timeToPayoff: "24 months",
      },
      {
        name: "0% APR Card (18 months)",
        monthlyPayment: "$445",
        totalInterest: "$0",
        totalPaid: "$8,000",
        timeToPayoff: "18 months",
      },
    ],
  },
}

export default function BigPurchaseRecommendationPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-zero-apr")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
              <Badge variant="outline">Big Purchase Financing</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Finance Large Purchases with 0% APR</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Make big purchases without paying interest. Get personalized recommendations for 0% APR credit cards that
              help you finance large expenses interest-free for up to 21 months.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Find My Purchase Card
              </Button>
              <Button size="lg" variant="outline">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Savings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Example */}
      <section className="py-8 bg-green-50 border-b">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold">Interest Savings Example</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {financingCalculator.example.scenarios.map((scenario, index) => (
                <Card key={index} className={index === 1 ? "border-green-500 bg-white" : ""}>
                  <CardHeader>
                    <CardTitle className={index === 1 ? "text-green-600" : ""}>{scenario.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly payment:</span>
                        <span className="font-medium">{scenario.monthlyPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total interest:</span>
                        <span className={`font-medium ${index === 1 ? "text-green-600" : "text-red-600"}`}>
                          {scenario.totalInterest}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total paid:</span>
                        <span className="font-medium">{scenario.totalPaid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time to pay off:</span>
                        <span className="font-medium">{scenario.timeToPayoff}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Badge className="bg-green-600">Save $1,456 in interest!</Badge>
              <p className="mt-2 text-sm text-muted-foreground">Example based on $8,000 purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Categories */}
      <section className="py-12 border-b">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Popular Big Purchase Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {purchaseCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mb-2 flex justify-center text-orange-600">{category.icon}</div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <Badge className="bg-orange-100 text-orange-800">{category.recommendedPeriod}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="text-xs">
                    <strong>Typical Cost:</strong>
                    <p className="mt-1 text-muted-foreground">{category.averageCost}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Big Purchase Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Best 0% APR Cards for Big Purchases</h2>
          <div className="space-y-8">
            {bigPurchaseCards.map((card, index) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.name}
                        width={80}
                        height={50}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-xl">{card.name}</CardTitle>
                        <p className="text-muted-foreground">{card.issuer}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-orange-600 text-orange-600" />
                            <span className="ml-1 font-medium">{card.rating}</span>
                          </div>
                          <Badge variant="secondary">{card.bestFor}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-orange-600">{card.introAPR}</div>
                      <div className="text-sm text-muted-foreground">on Purchases</div>
                      <Button className="mt-2 bg-orange-600 hover:bg-orange-700">Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        Purchase Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Purchase APR:</span>
                          <span className="font-medium text-orange-600">{card.purchaseAPR}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Regular APR:</span>
                          <span className="font-medium">{card.regularAPR}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Fee:</span>
                          <span className="font-medium">{card.annualFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Credit Limit:</span>
                          <span className="font-medium">{card.creditLimit}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4 text-orange-600" />
                        Purchase Features
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.purchaseFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold">Ideal For</h4>
                      <ul className="space-y-1 text-sm">
                        {card.idealFor.map((use, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{use}</span>
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
      </section>

      {/* Big Purchase Strategy Guide */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Smart Big Purchase Strategy</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-orange-600" />
                    Plan Your Purchase
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Calculate Monthly Payments</h4>
                    <p className="text-sm text-muted-foreground">
                      Divide your purchase amount by the 0% APR period to determine affordable monthly payments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Time Your Application</h4>
                    <p className="text-sm text-muted-foreground">
                      Apply for the card shortly before making your purchase to maximize the intro period.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-600" />
                    Maximize Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Use Purchase Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Many cards offer purchase protection, extended warranties, and return protection for big
                      purchases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pay Before Intro Ends</h4>
                    <p className="text-sm text-muted-foreground">
                      Set up automatic payments to ensure you pay off the balance before the 0% rate expires.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Big Purchase Financing Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/best-zero-apr/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Financing Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to finance your big purchase?</h2>
            <p className="mb-8 text-lg opacity-90">
              Get personalized 0% APR credit card recommendations and make your large purchase without paying interest.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Find My Purchase Card
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calculate My Savings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
