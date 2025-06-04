"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Filter, Star } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

const creditCards = [
  {
    id: 1,
    name: "Chase Sapphire Preferred",
    issuer: "Chase",
    rating: 4.8,
    annualFee: 95,
    signupBonus: "60,000 points",
    rewardsRate: "2X on travel and dining",
    apr: "21.49% - 28.49%",
    category: "Travel",
    features: ["No foreign transaction fees", "Travel insurance", "Purchase protection"],
  },
  {
    id: 2,
    name: "Citi Double Cash",
    issuer: "Citi",
    rating: 4.6,
    annualFee: 0,
    signupBonus: "None",
    rewardsRate: "2% on all purchases",
    apr: "18.49% - 28.49%",
    category: "Cash Back",
    features: ["No annual fee", "Simple rewards", "Balance transfer option"],
  },
  {
    id: 3,
    name: "Blue Cash Preferred",
    issuer: "American Express",
    rating: 4.7,
    annualFee: 95,
    signupBonus: "$250 statement credit",
    rewardsRate: "6% on groceries, 3% on gas",
    apr: "18.49% - 29.49%",
    category: "Cash Back",
    features: ["High grocery rewards", "Streaming credits", "No preset spending limit"],
  },
]

export default function CompareCardsPage() {
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [filterFee, setFilterFee] = useState<string>("all")
  const blogs = getBlogsBySubcategory("credit-cards", "compare")

  const handleCardSelect = (cardId: number) => {
    setSelectedCards((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : prev.length < 3 ? [...prev, cardId] : prev,
    )
  }

  const filteredCards = creditCards.filter((card) => {
    if (filterCategory !== "all" && card.category.toLowerCase() !== filterCategory) return false
    if (filterFee === "no-fee" && card.annualFee > 0) return false
    if (filterFee === "with-fee" && card.annualFee === 0) return false
    return true
  })

  const selectedCardData = creditCards.filter((card) => selectedCards.includes(card.id))

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Compare Credit Cards</h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Find the perfect credit card by comparing features, rewards, and benefits side by side
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Filter className="w-5 h-5 mr-2" />
              Advanced Comparison Tool
            </Badge>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filters:</span>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Card Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="cash back">Cash Back</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterFee} onValueChange={setFilterFee}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Annual Fee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fees</SelectItem>
                <SelectItem value="no-fee">No Annual Fee</SelectItem>
                <SelectItem value="with-fee">With Annual Fee</SelectItem>
              </SelectContent>
            </Select>
            {selectedCards.length > 0 && (
              <Badge variant="secondary">
                {selectedCards.length} card{selectedCards.length > 1 ? "s" : ""} selected
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Card Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Select Cards to Compare (up to 3)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <Card
                key={card.id}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCards.includes(card.id) ? "ring-2 ring-purple-500 bg-purple-50" : "hover:shadow-lg"
                }`}
                onClick={() => handleCardSelect(card.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{card.name}</CardTitle>
                      <p className="text-gray-600">{card.issuer}</p>
                    </div>
                    <Checkbox checked={selectedCards.includes(card.id)} onChange={() => handleCardSelect(card.id)} />
                  </div>
                  <div className="flex items-center gap-2">
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
                    <span className="text-sm">{card.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Annual Fee</p>
                      <p className="text-purple-600">${card.annualFee}</p>
                    </div>
                    <div>
                      <p className="font-semibold">APR</p>
                      <p className="text-sm">{card.apr}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Rewards</p>
                    <p className="text-sm">{card.rewardsRate}</p>
                  </div>
                  <Badge variant="outline">{card.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {selectedCardData.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    {selectedCardData.map((card) => (
                      <th key={card.id} className="p-4 text-center min-w-48">
                        <div>
                          <p className="font-bold">{card.name}</p>
                          <p className="text-purple-200 text-sm">{card.issuer}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Annual Fee</td>
                    {selectedCardData.map((card) => (
                      <td key={card.id} className="p-4 text-center">
                        ${card.annualFee}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Signup Bonus</td>
                    {selectedCardData.map((card) => (
                      <td key={card.id} className="p-4 text-center">
                        {card.signupBonus}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Rewards Rate</td>
                    {selectedCardData.map((card) => (
                      <td key={card.id} className="p-4 text-center">
                        {card.rewardsRate}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">APR</td>
                    {selectedCardData.map((card) => (
                      <td key={card.id} className="p-4 text-center">
                        {card.apr}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Apply</td>
                    {selectedCardData.map((card) => (
                      <td key={card.id} className="p-4 text-center">
                        <Button size="sm">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {blogs.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Credit Card Comparison Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogCard
                  key={index}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.publishedAt}
                  href={`/blog/${blog.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
