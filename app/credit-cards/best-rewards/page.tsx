"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

const rewardsCards = [
  {
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.8,
    annualFee: "$95",
    signupBonus: "60,000 points",
    rewardsRate: "2X on travel and dining",
    pros: ["Excellent travel benefits", "Flexible point redemption", "No foreign transaction fees"],
    cons: ["Annual fee", "Limited bonus categories"],
    bestFor: "Travel enthusiasts",
  },
  {
    name: "Capital One Venture Rewards",
    issuer: "Capital One",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.7,
    annualFee: "$95",
    signupBonus: "75,000 miles",
    rewardsRate: "2X on all purchases",
    pros: ["Simple rewards structure", "No category restrictions", "Travel portal benefits"],
    cons: ["Annual fee", "Limited transfer partners"],
    bestFor: "Simple rewards earning",
  },
  {
    name: "American Express Gold Card",
    issuer: "American Express",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.6,
    annualFee: "$250",
    signupBonus: "60,000 points",
    rewardsRate: "4X on dining, 4X on groceries",
    pros: ["High earning rates", "Dining credits", "Premium benefits"],
    cons: ["High annual fee", "Limited acceptance"],
    bestFor: "Dining and grocery spending",
  },
]

const rewardTypes = [
  {
    type: "Travel Rewards",
    description: "Earn points/miles for flights, hotels, and travel expenses",
    bestFor: "Frequent travelers",
    examples: ["Chase Sapphire", "Capital One Venture", "Citi Premier"],
  },
  {
    type: "Cash Back",
    description: "Earn cash back on purchases with no redemption restrictions",
    bestFor: "Simple rewards preference",
    examples: ["Chase Freedom", "Citi Double Cash", "Capital One Quicksilver"],
  },
  {
    type: "Flexible Points",
    description: "Earn points that can be redeemed for travel, cash, or gift cards",
    bestFor: "Maximum flexibility",
    examples: ["Chase Ultimate Rewards", "Amex Membership Rewards", "Capital One Miles"],
  },
]

export default function BestRewardsCardsPage() {
  const [selectedCard, setSelectedCard] = useState(0)
  const blogs = getBlogsBySubcategory("credit-cards", "best-rewards")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Rewards Credit Cards of 2024</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Maximize your spending with top rewards credit cards offering the best earning rates and benefits
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                Expert Reviewed
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <TrendingUp className="w-5 h-5 mr-2" />
                Updated Daily
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rewards Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Rewards Credit Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewardsCards.map((card, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader className="text-center">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.name}
                    width={380}
                    height={240}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(card.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{card.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Annual Fee</p>
                      <p className="text-blue-600">{card.annualFee}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Signup Bonus</p>
                      <p className="text-green-600">{card.signupBonus}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Rewards Rate</p>
                    <p className="text-sm">{card.rewardsRate}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Best For</p>
                    <Badge variant="outline">{card.bestFor}</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Pros:</p>
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

      {/* Reward Types Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Rewards Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rewardTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{type.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{type.description}</p>
                  <div>
                    <p className="font-semibold text-sm mb-2">Best For:</p>
                    <Badge variant="outline">{type.bestFor}</Badge>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Popular Cards:</p>
                    <ul className="text-sm space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i} className="text-gray-600">
                          {example}
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
    </div>
  )
}
