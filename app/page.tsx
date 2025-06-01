import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CreditCard, Landmark, LineChart, PiggyBank, Shield, Wallet } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import BlogCard from "@/components/blog-card"
import CompareCards from "@/components/compare-cards"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16 md:pt-20 lg:pt-24">
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div data-aos="fade-up" className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit" variant="outline">
                Trusted by millions
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Make smarter financial decisions
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Compare credit cards, banking options, investments, loans, and insurance to find the best financial
                products for your needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="font-medium">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Compare Products
                </Button>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className="relative hidden md:block">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Financial dashboard"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 data-aos="fade-up" className="mb-4 text-3xl font-bold md:text-4xl">
              Find the right financial products
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="mx-auto max-w-2xl text-muted-foreground">
              We help you compare and choose the best credit cards, banking products, investments, loans, and insurance
              for your unique needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<CreditCard className="h-10 w-10 text-primary" />}
              title="Credit Cards"
              description="Find the perfect card for rewards, travel, cash back, or building credit."
              href="/credit-cards"
              aosDelay={0}
            />
            <FeatureCard
              icon={<Landmark className="h-10 w-10 text-primary" />}
              title="Banking"
              description="Compare checking, savings, and CD accounts to maximize your money."
              href="/banking"
              aosDelay={100}
            />
            <FeatureCard
              icon={<LineChart className="h-10 w-10 text-primary" />}
              title="Investing"
              description="Discover the best brokerages and strategies to grow your wealth."
              href="/investing"
              aosDelay={200}
            />
            <FeatureCard
              icon={<Wallet className="h-10 w-10 text-primary" />}
              title="Loans"
              description="Compare personal, student, mortgage, and auto loans for your needs."
              href="/loans"
              aosDelay={300}
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Insurance"
              description="Find the best coverage for auto, home, life, and health insurance."
              href="/insurance"
              aosDelay={400}
            />
            <FeatureCard
              icon={<PiggyBank className="h-10 w-10 text-primary" />}
              title="Personal Finance"
              description="Learn budgeting, saving, and debt management strategies."
              href="/personal-finance"
              aosDelay={500}
            />
          </div>
        </div>
      </section>

      {/* Compare Credit Cards Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 data-aos="fade-up" className="mb-4 text-3xl font-bold md:text-4xl">
              Compare top credit cards
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="mx-auto max-w-2xl text-muted-foreground">
              Find the perfect card for your spending habits and financial goals.
            </p>
          </div>
          <CompareCards />
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/credit-cards">
                View all credit cards <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 data-aos="fade-up" className="mb-4 text-3xl font-bold md:text-4xl">
              Latest financial insights
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="mx-auto max-w-2xl text-muted-foreground">
              Expert advice and tips to help you make better financial decisions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              image="/placeholder.svg?height=200&width=400"
              category="Credit Cards"
              title="How to Choose the Best Travel Credit Card in 2025"
              excerpt="Learn how to select a travel credit card that maximizes your rewards and perks for your specific travel style."
              date="May 28, 2025"
              href="/blog/best-travel-credit-cards"
              aosDelay={0}
            />
            <BlogCard
              image="/placeholder.svg?height=200&width=400"
              category="Investing"
              title="Beginner's Guide to Index Fund Investing"
              excerpt="Everything you need to know about getting started with index funds and building a diversified portfolio."
              date="May 25, 2025"
              href="/blog/index-fund-investing"
              aosDelay={100}
            />
            <BlogCard
              image="/placeholder.svg?height=200&width=400"
              category="Personal Finance"
              title="5 Strategies to Pay Off Debt Faster"
              excerpt="Practical tips and strategies to help you eliminate debt and achieve financial freedom sooner."
              date="May 22, 2025"
              href="/blog/pay-off-debt-faster"
              aosDelay={200}
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                View all articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 data-aos="fade-up" className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to make smarter financial decisions?
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="mb-8 text-lg opacity-90">
              Join millions of people who use FinanceWise to find the best financial products and make informed
              decisions.
            </p>
            <Button data-aos="fade-up" data-aos-delay="200" size="lg" variant="secondary" className="font-medium">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
