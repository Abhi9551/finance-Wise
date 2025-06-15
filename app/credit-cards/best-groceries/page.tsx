"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Percent, CheckCircle, ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

const groceryCards = [
  {
    name: "Blue Cash Preferred",
    issuer: "American Express",
    image: "/placeholder.svg?height=240&width=380",
    annualFee: "$95",
    groceryRate: "6% on groceries (up to $6,000/year)",
    otherRates: "3% on gas, 1% on other purchases",
    signupBonus: "$250 statement credit",
    pros: ["Highest grocery rate", "Gas rewards", "Streaming credits"],
  },
  {
    name: "Chase Freedom Flex",
    issuer: "Chase",
    image: "/placeholder.svg?height=240&width=380",
    annualFee: "$0",
    groceryRate: "5% on rotating categories (when activated)",
    otherRates: "1% on all other purchases",
    signupBonus: "$200 cash back bonus",
    pros: ["No annual fee", "Rotating categories", "Mobile payments bonus"],
  },
  {
    name: "Citi Custom Cash",
    issuer: "Citi",
    image: "/placeholder.svg?height=240&width=380",
    annualFee: "$0",
    groceryRate: "5% on top spending category (up to $500/month)",
    otherRates: "1% on all other purchases",
    signupBonus: "$200 cash back bonus",
    pros: ["Automatic top category", "No annual fee", "Simple rewards"],
  },
]

export default function BestGroceryCardsPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-groceries")

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Credit Cards for Groceries 2024</h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Maximize your grocery spending with cards offering up to 6% cash back on supermarket purchases
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Grocery Rewards
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Percent className="w-5 h-5 mr-2" />
                Up to 6% Back
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Top Grocery Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Grocery Credit Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groceryCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.name}
                    width={380}
                    height={240}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <p className="text-gray-600">{card.issuer}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="font-semibold">Annual Fee</p>
                    <p className="text-2xl font-bold text-orange-600">{card.annualFee}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Grocery Rate</p>
                    <p className="text-sm font-medium text-green-600">{card.groceryRate}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Other Rates</p>
                    <p className="text-sm">{card.otherRates}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Signup Bonus</p>
                    <p className="text-sm text-blue-600">{card.signupBonus}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Benefits:</p>
                    {card.pros.map((pro, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
