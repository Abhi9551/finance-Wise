"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  image: string
  category: string
  title: string
  excerpt: string
  date: string
  href: string
  aosDelay?: number
}

export default function BlogCard({ image, category, title, excerpt, date, href, aosDelay = 0 }: BlogCardProps) {
  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="overflow-hidden">
        <Link href={href}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-6">
        <div className="mb-3 flex items-center">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <span className="ml-auto text-xs text-muted-foreground">{date}</span>
        </div>
        <Link href={href}>
          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">{title}</h3>
        </Link>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={href} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}
