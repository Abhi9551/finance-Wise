"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, CheckCircle, ArrowRight, BookOpen } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getBlogsBySubcategory } from "@/lib/blog-data"

const studentCards = [
  {
    name: "Discover it Student Cash Back",
    issuer: "Discover",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.7,
    annualFee: "$0",
    cashBack: "5% rotating categories, 1% everything else",
    perks: ["Good Grade Rewards", "No annual fee", "Cashback Match"],
    creditScore: "Fair to Good",
  },
  {
    name: "Capital One Journey Student",
    issuer: "Capital One",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.5,
    annualFee: "$0",
    cashBack: "1.25% on all purchases after paying on time",
    perks: ["No annual fee", "Build credit history", "Online account management"],
    creditScore: "Fair",
  },
  {
    name: "Chase Freedom Student",
    issuer: "Chase",
    image: "/placeholder.svg?height=240&width=380",
    rating: 4.6,
    annualFee: "$0",
    cashBack: "1% on all purchases",
    perks: ["No annual fee", "Build credit", "Mobile app"],
    creditScore: "Fair to Good",
  },
]

export default function BestStudentCardsPage() {
  const blogs = getBlogsBySubcategory("credit-cards", "best-student")

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Student Credit Cards of 2024</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Build credit history and earn rewards while in college with student-friendly credit cards
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <GraduationCap className="w-5 h-5 mr-2" />
                Student Friendly
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <BookOpen className="w-5 h-5 mr-2" />
                Build Credit
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Top Student Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Student Credit Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentCards.map((card, index) => (
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
                  <Badge variant="outline">{card.creditScore}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="font-semibold">Annual Fee</p>
                    <p className="text-2xl font-bold text-green-600">{card.annualFee}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Cash Back</p>
                    <p className="text-sm">{card.cashBack}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Student Benefits:</p>
                    {card.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{perk}</span>
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
