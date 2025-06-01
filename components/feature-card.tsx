"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  aosDelay?: number
}

export default function FeatureCard({ icon, title, description, href, aosDelay = 0 }: FeatureCardProps) {
  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={href} className="flex items-center text-sm font-medium text-primary">
          Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
