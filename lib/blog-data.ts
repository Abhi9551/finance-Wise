import creditCardsBlogs from "@/data/blogs/credit-cards.json"
import bankingBlogs from "@/data/blogs/banking.json"
import investingBlogs from "@/data/blogs/investing.json"
import loansBlogs from "@/data/blogs/loans.json"
import insuranceBlogs from "@/data/blogs/insurance.json"
import homeBlogs from "@/data/blogs/home.json"
import personalFinanceBlogs from "@/data/blogs/personal-finance.json"
import taxesBlogs from "@/data/blogs/taxes.json"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  tags: string[]
  content: string
}

export interface BlogData {
  [subcategory: string]: BlogPost[]
}

export const blogData: { [category: string]: BlogData } = {
  "credit-cards": creditCardsBlogs,
  banking: bankingBlogs,
  investing: investingBlogs,
  loans: loansBlogs,
  insurance: insuranceBlogs,
  home: homeBlogs,
  "personal-finance": personalFinanceBlogs,
  taxes: taxesBlogs,
}

export function getBlogsByCategory(category: string): BlogData {
  return blogData[category] || {}
}

export function getBlogsBySubcategory(category: string, subcategory: string): BlogPost[] {
  const categoryBlogs = getBlogsByCategory(category)
  return categoryBlogs[subcategory] || []
}

export function getBlogBySlug(category: string, subcategory: string, slug: string): BlogPost | null {
  const subcategoryBlogs = getBlogsBySubcategory(category, subcategory)
  return subcategoryBlogs.find((blog) => blog.slug === slug) || null
}

export function getAllBlogs(): BlogPost[] {
  const allBlogs: BlogPost[] = []

  Object.values(blogData).forEach((categoryData) => {
    Object.values(categoryData).forEach((subcategoryBlogs) => {
      allBlogs.push(...subcategoryBlogs)
    })
  })

  return allBlogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getRecentBlogs(limit = 6): BlogPost[] {
  return getAllBlogs().slice(0, limit)
}

export function getBlogsByTag(tag: string): BlogPost[] {
  return getAllBlogs().filter((blog) => blog.tags.some((blogTag) => blogTag.toLowerCase().includes(tag.toLowerCase())))
}

export function getAllBlogsByCategory(category: string): BlogPost[] {
  const categoryBlogs = getBlogsByCategory(category)
  const allBlogs: BlogPost[] = []

  Object.values(categoryBlogs).forEach((subcategoryBlogs) => {
    allBlogs.push(...subcategoryBlogs)
  })

  return allBlogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
