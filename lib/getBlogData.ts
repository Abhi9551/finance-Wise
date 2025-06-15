import creditCards from "@/data/blogs/credit-cards.json"

export function getBlogsBySubcategory(category: string, sub: string) {
  if (category === "credit-cards") {
    return creditCards[sub as keyof typeof creditCards] ?? []
  }
  return []
}

export function getCreditCardMeta(category: string, sub: string) {
  if (category === "credit-cards") {
    return creditCards.meta?.[sub as keyof typeof creditCards.meta] ?? null
  }
  return null
}
