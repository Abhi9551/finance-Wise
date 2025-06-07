import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, CreditCard, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Credit Card Reviews | Expert Analysis & Ratings - FinanceWise",
  description:
    "Read comprehensive credit card reviews from our experts. Get detailed analysis of features, benefits, and value.",
  keywords: "credit card reviews, card analysis, expert ratings, credit card comparison",
}

const featuredReviews = [
  {
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.8,
    annualFee: "$95",
    bestFor: "Travel rewards",
    pros: ["Excellent travel benefits", "Flexible point redemption", "Strong welcome bonus"],
    cons: ["Annual fee", "Limited bonus categories"],
    reviewUrl: "/credit-cards/reviews/chase-sapphire-preferred",
  },
  {
    name: "Citi Double Cash",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.6,
    annualFee: "$0",
    bestFor: "Simple cash back",
    pros: ["2% on all purchases", "No annual fee", "No category restrictions"],
    cons: ["No welcome bonus", "Must pay bill to earn 2nd 1%"],
    reviewUrl: "/credit-cards/reviews/citi-double-cash",
  },
  {
    name: "American Express Gold Card",
    issuer: "American Express",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.7,
    annualFee: "$250",
    bestFor: "Dining & groceries",
    pros: ["High earning rates", "Dining credits", "Premium benefits"],
    cons: ["High annual fee", "Limited acceptance"],
    reviewUrl: "/credit-cards/reviews/amex-gold",
  },
  {
    name: "Capital One Venture",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.5,
    annualFee: "$95",
    bestFor: "Simple travel rewards",
    pros: ["2x miles on all purchases", "No foreign transaction fees", "Easy redemption"],
    cons: ["Limited transfer partners", "Annual fee"],
    reviewUrl: "/credit-cards/reviews/capital-one-venture",
  },
  {
    name: "Discover it Cash Back",
    issuer: "Discover",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.9,
    annualFee: "$0",
    bestFor: "Rotating categories",
    pros: ["Cashback Match", "5% rotating categories", "No annual fee"],
    cons: ["Must activate categories", "Limited acceptance"],
    reviewUrl: "/credit-cards/reviews/discover-it-cash-back",
  },
  {
    name: "Wells Fargo Active Cash",
    issuer: "Wells Fargo",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.4,
    annualFee: "$0",
    bestFor: "Flat-rate cash back",
    pros: ["2% on all purchases", "Welcome bonus", "Cell phone protection"],
    cons: ["Foreign transaction fees", "Limited additional benefits"],
    reviewUrl: "/credit-cards/reviews/wells-fargo-active-cash",
  },
]

const reviewCategories = [
  {
    title: "Travel Credit Cards",
    description: "Reviews of the best travel rewards cards",
    count: 15,
    href: "/credit-cards/reviews/travel",
  },
  {
    title: "Cash Back Cards",
    description: "In-depth reviews of top cash back cards",
    count: 12,
    href: "/credit-cards/reviews/cash-back",
  },
  {
    title: "Business Cards",
    description: "Reviews of business credit cards",
    count: 8,
    href: "/credit-cards/reviews/business",
  },
  {
    title: "Student Cards",
    description: "Reviews of student-friendly credit cards",
    count: 6,
    href: "/credit-cards/reviews/student",
  },
]

export default function CreditCardReviewsPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "reviews")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="outline">
              Expert Reviews
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Credit Card Reviews</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Get comprehensive, unbiased reviews of the top credit cards from our team of financial experts. We analyze
              features, benefits, and value to help you make informed decisions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg">
                <Star className="mr-2 h-4 w-4" />
                Browse All Reviews
              </Button>
              <Button size="lg" variant="outline">
                Compare Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Credit Card Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((card, index) => (
              <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      width={80}
                      height={50}
                      className="rounded-md"
                    />
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{card.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{card.issuer}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Annual Fee:</span>
                      <div className="font-medium">{card.annualFee}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Best For:</span>
                      <div className="font-medium">{card.bestFor}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-green-600">Pros:</h4>
                    <ul className="space-y-1 text-sm">
                      {card.pros.slice(0, 2).map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-red-600">Cons:</h4>
                    <ul className="space-y-1 text-sm">
                      {card.cons.slice(0, 2).map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={card.reviewUrl}>
                      Read Full Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Browse Reviews by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviewCategories.map((category, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{category.count}</span>
                    <span className="text-sm text-muted-foreground ml-1">reviews</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={category.href}>Browse Reviews</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How We Review Credit Cards</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Value Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We analyze the true value of rewards, benefits, and fees to determine if a card offers good value
                    for different spending patterns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Feature Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We compare features, benefits, and terms against similar cards to help you understand how each card
                    stacks up in the market.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Expert Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our financial experts provide unbiased ratings based on rewards value, ease of use, customer
                    service, and overall value proposition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Latest Review Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/reviews/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Credit Card Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Need help choosing a credit card?</h2>
            <p className="mb-8 text-lg opacity-90">
              Our expert reviews and comparison tools make it easy to find the perfect credit card for your needs and
              spending habits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <Star className="mr-2 h-4 w-4" />
                Browse All Reviews
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Compare Cards
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
