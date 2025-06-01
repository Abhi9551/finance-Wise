"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const creditCards = [
  {
    id: 1,
    name: "Premium Travel Rewards",
    issuer: "Capital One",
    image: "/placeholder.svg?height=200&width=300",
    annualFee: "$95",
    rewardsRate: "2x-5x",
    welcomeBonus: "75,000 points",
    apr: "18.99% - 26.99%",
    creditScore: "Excellent",
    features: [
      "5x points on travel",
      "3x points on dining",
      "2x points on everything else",
      "No foreign transaction fees",
      "Travel insurance",
    ],
    rating: 4.8,
    bestFor: "Travel",
  },
  {
    id: 2,
    name: "Ultimate Cash Back",
    issuer: "Chase",
    image: "/placeholder.svg?height=200&width=300",
    annualFee: "$0",
    rewardsRate: "1.5%-5%",
    welcomeBonus: "$200",
    apr: "17.99% - 25.99%",
    creditScore: "Good to Excellent",
    features: [
      "5% cash back on rotating categories",
      "3% on dining and drugstores",
      "1.5% on everything else",
      "No annual fee",
      "0% intro APR for 15 months",
    ],
    rating: 4.7,
    bestFor: "Cash Back",
  },
  {
    id: 3,
    name: "Balance Transfer Plus",
    issuer: "Citi",
    image: "/placeholder.svg?height=200&width=300",
    annualFee: "$0",
    rewardsRate: "1%-2%",
    welcomeBonus: "None",
    apr: "0% intro for 21 months, then 16.99% - 26.99%",
    creditScore: "Good",
    features: [
      "0% intro APR on balance transfers for 21 months",
      "0% intro APR on purchases for 12 months",
      "No late fees",
      "No penalty rate",
      "2% cash back on groceries and gas",
    ],
    rating: 4.5,
    bestFor: "Balance Transfer",
  },
]

export default function CompareCards() {
  const [selectedCards, setSelectedCards] = useState<number[]>([])

  const toggleCardSelection = (id: number) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id))
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, id])
    }
  }

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creditCards.map((card) => (
          <Card
            key={card.id}
            className={`transition-all duration-300 ${
              selectedCards.includes(card.id) ? "border-primary shadow-md" : "hover:shadow-md"
            }`}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  Best for {card.bestFor}
                </Badge>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{card.rating}</span>
                </div>
              </div>
              <div className="mb-6 flex justify-center">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.name}
                  width={300}
                  height={200}
                  className="h-40 w-64 object-contain"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">{card.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{card.issuer}</p>
              <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Annual Fee</p>
                  <p className="font-medium">{card.annualFee}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Rewards Rate</p>
                  <p className="font-medium">{card.rewardsRate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Welcome Bonus</p>
                  <p className="font-medium">{card.welcomeBonus}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Credit Score</p>
                  <p className="font-medium">{card.creditScore}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-medium">Key Features:</p>
                <ul className="space-y-1">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 p-6 pt-0">
              <Button asChild className="flex-1">
                <Link href={`/credit-cards/${card.id}`}>Apply Now</Link>
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => toggleCardSelection(card.id)}>
                {selectedCards.includes(card.id) ? "Selected" : "Compare"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedCards.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href={`/credit-cards/compare?ids=${selectedCards.join(",")}`}>
              Compare {selectedCards.length} Selected Cards
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
