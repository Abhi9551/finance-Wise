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

export interface MetaData {
  title: string
  updated: string
  authors: { name: string; role: string }[]
  intro: string
  disclaimer: string
}

export interface BlogSubcategoryData {
  meta?: MetaData
  blogs: BlogPost[]
}

export interface BlogCategoryData {
  [subcategory: string]: BlogSubcategoryData
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

// Get all blog data for a category
export function getBlogsByCategory(category: string): BlogCategoryData {
  return blogData[category] || {}
}

// ✅ UPDATED: Returns both meta and blogs
export function getBlogsBySubcategory(
  category: string,
  subcategory: string
): BlogSubcategoryData {
  const categoryData = getBlogsByCategory(category)
  const subcategoryData = categoryData[subcategory]

  if (!subcategoryData) return { blogs: [] }

  // If it's an array, it's legacy style; wrap in { blogs }
  if (Array.isArray(subcategoryData)) {
    return { blogs: subcategoryData }
  }

  return subcategoryData
}

// Get a specific blog post by its slug
export function getBlogBySlug(
  category: string,
  subcategory: string,
  slug: string
): BlogPost | null {
  const { blogs } = getBlogsBySubcategory(category, subcategory)
  return blogs.find((blog) => blog.slug === slug) || null
}

// Get all blogs across all categories & subcategories
export function getAllBlogs(): BlogPost[] {
  const allBlogs: BlogPost[] = []

  Object.values(blogData).forEach((categoryData) => {
    Object.values(categoryData).forEach((subcategory) => {
      if (Array.isArray(subcategory)) {
        allBlogs.push(...subcategory)
      } else {
        allBlogs.push(...subcategory.blogs)
      }
    })
  })

  return allBlogs.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

// Get recent blogs by limit
export function getRecentBlogs(limit = 6): BlogPost[] {
  return getAllBlogs().slice(0, limit)
}

// Filter blogs by tag
export function getBlogsByTag(tag: string): BlogPost[] {
  return getAllBlogs().filter((blog) =>
    blog.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
  )
}

// Get all blogs for a specific category
export function getAllBlogsByCategory(category: string): BlogPost[] {
  const categoryData = getBlogsByCategory(category)
  const allBlogs: BlogPost[] = []

  Object.values(categoryData).forEach((subcategory) => {
    if (Array.isArray(subcategory)) {
      allBlogs.push(...subcategory)
    } else {
      allBlogs.push(...subcategory.blogs)
    }
  })

  return allBlogs.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}
