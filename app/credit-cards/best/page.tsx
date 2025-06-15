"use client"

import BlogCard from "@/components/BlogCard"
import { getBlogsBySubcategory, getCreditCardMeta } from "@/lib/getBlogData"
import { useEffect } from "react"

import "aos/dist/aos.css"

export default function BestCreditCardsPage() {
  const cards = getBlogsBySubcategory("credit-cards", "best")
  const meta = getCreditCardMeta("credit-cards", "best")

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      {/* Header Section */}
      <section className="py-14 text-center bg-emerald-100 border-b border-emerald-200">
        <div className="container max-w-4xl px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-3">
            {meta?.title}
          </h1>
          <p className="text-sm text-gray-600">Updated: {meta?.updated}</p>

          <div className="mt-6 space-y-1 text-sm text-gray-700">
            {meta?.authors.map((author, index) => (
              <p key={index}>
                <strong>{author.role}:</strong> {author.name}
              </p>
            ))}
          </div>

          <p className="mt-6 max-w-3xl mx-auto text-base text-gray-800">{meta?.intro}</p>

          {meta?.disclaimer && (
            <p className="mt-6 text-xs text-gray-600 italic max-w-3xl mx-auto">
              {meta.disclaimer}
            </p>
          )}
        </div>
      </section>

      {/* Card Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
            Best Credit Card Offers of June 2025
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {cards.map((card: any, index: number) => (
              <div data-aos="fade-up" key={card.id}>
                <BlogCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
