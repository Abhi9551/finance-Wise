"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogCard({ card }: { card: any }) {
  if (!card) return null

  const {
    name,
    tagline,
    rating,
    annualFee,
    introOffer,
    rewardsRate,
    rewardsType,
    applyUrl,
    image,
  } = card

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-muted-foreground text-sm mb-2">{tagline}</p>
      <div className="text-sm space-y-1 mb-4">
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Annual Fee:</strong> {annualFee}</p>
        <p><strong>Intro Offer:</strong> {introOffer}</p>
        <p><strong>Rewards Rate:</strong> {rewardsRate} {rewardsType}</p>
      </div>

      {applyUrl ? (
        <Button asChild className="w-full">
          <Link href={applyUrl} target="_blank" rel="noopener noreferrer">
            Apply Now
          </Link>
        </Button>
      ) : (
        <p className="text-xs text-muted-foreground italic">Apply link not available</p>
      )}
    </div>
  )
}
