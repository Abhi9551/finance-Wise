import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface CreditCard {
  id: number
  name: string
  issuer: string
  image: string
  rating: number
  annualFee: string
  introOffer: string
  rewardsRate: string
  rewardsType: string
  bestFor: string
}

interface CreditCardComparisonProps {
  cards: CreditCard[]
}

export default function CreditCardComparison({ cards }: CreditCardComparisonProps) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {/* Header */}
        <div className="mb-6 hidden grid-cols-6 gap-4 border-b pb-4 text-sm font-medium text-muted-foreground md:grid">
          <div>Credit Card</div>
          <div>Rating</div>
          <div>Annual Fee</div>
          <div>Intro Offer</div>
          <div>Rewards Rate</div>
          <div>Apply</div>
        </div>

        {/* Cards */}
        <div className="space-y-4 md:space-y-2">
          {cards.map((card) => (
            <Card key={card.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="grid gap-4 md:grid-cols-6 md:items-center">
                  {/* Card Info */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      width={60}
                      height={38}
                      className="rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{card.name}</h3>
                      <p className="text-sm text-muted-foreground">{card.issuer}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {card.bestFor}
                      </Badge>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{card.rating}</span>
                    <span className="text-sm text-muted-foreground">/5</span>
                  </div>

                  {/* Annual Fee */}
                  <div>
                    <span className="font-medium">{card.annualFee}</span>
                  </div>

                  {/* Intro Offer */}
                  <div>
                    <span className="font-medium">{card.introOffer}</span>
                  </div>

                  {/* Rewards Rate */}
                  <div>
                    <span className="font-medium">{card.rewardsRate}</span>
                    <span className="ml-1 text-sm text-muted-foreground">{card.rewardsType}</span>
                  </div>

                  {/* Apply Button */}
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/credit-cards/${card.id}`}>Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
