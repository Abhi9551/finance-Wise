import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogCard({ card }: { card: any }) {
  if (!card) return null // or return a fallback UI

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
    <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={300}
        height={180}
        className="rounded-md mx-auto"
      />
      <h3 className="mt-4 text-xl font-bold text-center">{name}</h3>
      <p className="text-center text-sm text-muted-foreground">{tagline}</p>
      <div className="mt-2 text-sm space-y-1">
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Annual Fee:</strong> {annualFee}</p>
        <p><strong>Intro Offer:</strong> {introOffer}</p>
        <p><strong>Rewards Rate:</strong> {rewardsRate} {rewardsType}</p>
      </div>

      {applyUrl ? (
        <div className="mt-4 text-center">
          <Button asChild variant="outline">
            <Link href={applyUrl} target="_blank" rel="noopener noreferrer">
              Apply Now
            </Link>
          </Button>
        </div>
      ) : (
        <div className="mt-4 text-center text-red-500 text-sm">
          Apply link unavailable
        </div>
      )}
    </div>
  )
}
