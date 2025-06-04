import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CreditCard, Landmark, TrendingUp, Home, Shield, PiggyBank, Calculator } from "lucide-react"
import { getRecentBlogs, getBlogsByCategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Financial Blog | Expert Advice & Guides - FinanceWise",
  description:
    "Get expert financial advice, guides, and tips on credit cards, banking, investing, loans, insurance, and personal finance.",
  keywords: "financial blog, money advice, credit cards, banking, investing, personal finance",
}

const blogCategories = [
  {
    slug: "credit-cards",
    title: "Credit Cards",
    description: "Reviews, guides, and tips for choosing the best credit cards",
    icon: <CreditCard className="h-6 w-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    slug: "banking",
    title: "Banking",
    description: "Find the best savings, checking, and CD accounts",
    icon: <Landmark className="h-6 w-6" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    slug: "investing",
    title: "Investing",
    description: "Investment strategies, brokerage reviews, and retirement planning",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    slug: "loans",
    title: "Loans",
    description: "Personal loans, student loans, and auto financing guides",
    icon: <Calculator className="h-6 w-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    slug: "insurance",
    title: "Insurance",
    description: "Auto, home, life, and health insurance comparisons",
    icon: <Shield className="h-6 w-6" />,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    slug: "home",
    title: "Home & Mortgage",
    description: "Mortgage rates, home buying guides, and real estate tips",
    icon: <Home className="h-6 w-6" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    slug: "personal-finance",
    title: "Personal Finance",
    description: "Budgeting, saving, debt management, and financial planning",
    icon: <PiggyBank className="h-6 w-6" />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    slug: "taxes",
    title: "Taxes",
    description: "Tax preparation, deductions, and planning strategies",
    icon: <Calculator className="h-6 w-6" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
]

export default function BlogPage() {
  const recentBlogs = getRecentBlogs(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <Badge variant="outline">Financial Blog</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Expert Financial Advice & Guides</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Get the latest insights, reviews, and tips on credit cards, banking, investing, and personal finance from
              our team of financial experts.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Articles
              </Button>
              <Button size="lg" variant="outline">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/${blog.category.toLowerCase().replace(/\s+/g, "-")}/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Browse by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogCategories.map((category) => {
              const categoryBlogs = getBlogsByCategory(category.slug)
              const articleCount = categoryBlogs
                ? Object.values(categoryBlogs).reduce((total, subcategory) => total + subcategory.length, 0)
                : 0

              return (
                <Card key={category.slug} className="group transition-all duration-300 hover:shadow-lg">
                  <CardHeader className={`${category.bgColor} transition-colors`}>
                    <div className="flex items-center gap-3">
                      <div className={`${category.color}`}>{category.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{articleCount} articles</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/blog/${category.slug}`}>View Articles</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Stay Updated with Financial Tips</h2>
            <p className="mb-8 text-lg opacity-90">
              Get the latest financial advice, product reviews, and money-saving tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary">
                <BookOpen className="mr-2 h-4 w-4" />
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
