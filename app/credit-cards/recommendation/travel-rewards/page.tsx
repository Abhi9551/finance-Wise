import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plane, MapPin, Shield, Globe, CheckCircle, ArrowRight } from "lucide-react"
import { getBlogsBySubcategory } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Best Travel Rewards Credit Cards | Travel Perks & Benefits - FinanceWise",
  description:
    "Find the best travel rewards credit cards with airline miles, hotel points, and premium travel perks. Get personalized recommendations.",
  keywords: "travel rewards credit cards, airline miles, hotel points, travel perks, travel benefits",
}

const travelRewardsCards = [
  {
    id: 1,
    name: "Chase Sapphire Preferred® Card",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=320",
    rating: 5.0,
    annualFee: "$95",
    welcomeBonus: "60,000 points",
    bonusValue: "$750",
    rewardsRate: "2x-5x points",
    bestFor: "Flexible travel rewards",
    keyBenefits: [
      "5x points on travel through Chase Ultimate Rewards",
      "3x points on dining worldwide",
      "2x points on other travel purchases",
      "25% more value when redeeming through Chase",
      "No foreign transaction fees",
      "Trip cancellation/interruption insurance",
    ],
    travelPerks: [
      "Primary rental car insurance",
      "Trip delay reimbursement",
      "Baggage delay insurance",
      "Purchase protection",
    ],
    transferPartners: ["United", "Southwest", "British Airways", "Hyatt", "Marriott"],
  },
  {
    id: 2,
    name: "Capital One Venture Rewards Credit Card",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.7,
    annualFee: "$95",
    welcomeBonus: "75,000 miles",
    bonusValue: "$750",
    rewardsRate: "2x-5x miles",
    bestFor: "Simple travel rewards",
    keyBenefits: [
      "2x miles on all purchases",
      "5x miles on hotels and rental cars through Capital One Travel",
      "No foreign transaction fees",
      "Transfer to 15+ airline and hotel partners",
      "Global Entry/TSA PreCheck credit",
    ],
    travelPerks: [
      "$100 Global Entry/TSA PreCheck credit",
      "No blackout dates",
      "24/7 travel assistance",
      "Auto rental collision damage waiver",
    ],
    transferPartners: ["Turkish Airlines", "Air Canada", "British Airways", "Wyndham"],
  },
  {
    id: 3,
    name: "American Express® Gold Card",
    issuer: "American Express",
    image: "/placeholder.svg?height=200&width=320",
    rating: 4.8,
    annualFee: "$250",
    welcomeBonus: "60,000 points",
    bonusValue: "$600",
    rewardsRate: "1x-4x points",
    bestFor: "Dining and travel rewards",
    keyBenefits: [
      "4x points at restaurants worldwide",
      "4x points at U.S. supermarkets (up to $25,000/year)",
      "3x points on flights",
      "1x points on other purchases",
      "No foreign transaction fees",
    ],
    travelPerks: [
      "$120 dining credit annually",
      "$120 Uber Cash annually",
      "Baggage insurance plan",
      "Car rental loss and damage insurance",
    ],
    transferPartners: ["Delta", "JetBlue", "British Airways", "Hilton", "Marriott"],
  },
]

const travelSpendingCategories = [
  {
    category: "Flights",
    description: "Earn bonus points on airline purchases",
    topCards: ["Chase Sapphire Preferred", "Amex Gold Card", "Capital One Venture"],
    maxRate: "5x points",
  },
  {
    category: "Hotels",
    description: "Get extra points on hotel stays",
    topCards: ["Capital One Venture", "Chase Sapphire Preferred", "Amex Gold Card"],
    maxRate: "5x points",
  },
  {
    category: "Dining",
    description: "Earn rewards on restaurant purchases",
    topCards: ["Amex Gold Card", "Chase Sapphire Preferred", "Capital One Savor"],
    maxRate: "4x points",
  },
  {
    category: "Car Rentals",
    description: "Get bonus points on rental cars",
    topCards: ["Capital One Venture", "Chase Sapphire Preferred", "Amex Platinum"],
    maxRate: "5x points",
  },
]

export default function TravelRewardsRecommendationPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-travel")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Plane className="h-6 w-6 text-blue-600" />
              <Badge variant="outline">Travel Rewards</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Best Travel Rewards Credit Cards</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Earn miles, points, and enjoy premium travel perks. Get personalized recommendations for travel rewards
              credit cards that match your travel style and spending habits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Plane className="mr-2 h-4 w-4" />
                Get My Recommendations
              </Button>
              <Button size="lg" variant="outline">
                Compare Travel Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Spending Categories */}
      <section className="py-12 border-b">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Maximize Rewards by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {travelSpendingCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">{category.maxRate}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="text-xs">
                    <strong>Top Cards:</strong>
                    <ul className="mt-1 space-y-1">
                      {category.topCards.map((card, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          • {card}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Travel Cards */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Top Travel Rewards Cards</h2>
          <div className="space-y-8">
            {travelRewardsCards.map((card, index) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
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
                            <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                            <span className="ml-1 font-medium">{card.rating}</span>
                          </div>
                          <Badge variant="secondary">{card.bestFor}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-blue-600">{card.welcomeBonus}</div>
                      <div className="text-lg font-semibold text-green-600">{card.bonusValue} value</div>
                      <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.keyBenefits.slice(0, 4).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        Travel Perks
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {card.travelPerks.map((perk, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Globe className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold">Card Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Fee:</span>
                          <span className="font-medium">{card.annualFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rewards Rate:</span>
                          <span className="font-medium">{card.rewardsRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Welcome Bonus:</span>
                          <span className="font-medium">{card.welcomeBonus}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transfer Partners */}
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="mb-3 font-semibold">Transfer Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.transferPartners.map((partner, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Card Guide */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">How to Choose a Travel Rewards Card</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-blue-600" />
                    Consider Your Travel Style
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Frequent Travelers</h4>
                    <p className="text-sm text-muted-foreground">
                      Look for cards with high earning rates on travel and dining, plus valuable perks like airport
                      lounge access and travel insurance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Occasional Travelers</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on flexible redemption options and cards with no foreign transaction fees for international
                      trips.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Maximize Your Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Transfer Partners</h4>
                    <p className="text-sm text-muted-foreground">
                      Cards with airline and hotel transfer partners often provide the best redemption value for your
                      points.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Bonuses</h4>
                    <p className="text-sm text-muted-foreground">
                      Large welcome bonuses can provide significant value, often worth $600-$1,000+ in travel.
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
          <h2 className="mb-8 text-center text-3xl font-bold">Travel Rewards Guides</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/best-travel/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Travel Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to start earning travel rewards?</h2>
            <p className="mb-8 text-lg opacity-90">
              Get personalized travel credit card recommendations based on your travel goals and spending patterns.
            </p>
            <Button size="lg" variant="secondary">
              <Plane className="mr-2 h-4 w-4" />
              Get My Travel Card Recommendations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
