"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, CreditCard, TrendingUp, Shield, Calculator, BookOpen, Star } from "lucide-react"
import type { NavDropdownItem } from "@/lib/nav-items"

interface EnhancedNavbarDropdownProps {
  items: NavDropdownItem[]
}

const getIconForCategory = (title: string) => {
  if (title.toLowerCase().includes("best")) return <Star className="h-4 w-4 text-emerald-600" />
  if (title.toLowerCase().includes("compare")) return <TrendingUp className="h-4 w-4 text-blue-600" />
  if (title.toLowerCase().includes("calculator")) return <Calculator className="h-4 w-4 text-purple-600" />
  if (title.toLowerCase().includes("guide") || title.toLowerCase().includes("resource"))
    return <BookOpen className="h-4 w-4 text-orange-600" />
  if (title.toLowerCase().includes("recommendation")) return <Shield className="h-4 w-4 text-green-600" />
  return <CreditCard className="h-4 w-4 text-gray-600" />
}

export default function EnhancedNavbarDropdown({ items }: EnhancedNavbarDropdownProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const categoriesWithSubItems = items.filter((item) => item.subItems && item.subItems.length > 0)
  const singleItems = items.filter((item) => !item.subItems || item.subItems.length === 0)

  // Default to first category with subitems if no category is hovered
  const activeCategory = hoveredCategory
    ? items.find((item) => item.title === hoveredCategory)
    : categoriesWithSubItems[0]

  return (
    <div className="absolute left-0 top-full z-50 mt-1 animate-in fade-in-0 zoom-in-95 duration-200">
      <div className="w-[720px] rounded-lg border border-gray-200 bg-white shadow-xl">
        <div className="grid grid-cols-5 divide-x divide-gray-100">
          {/* Left Column - Main Categories */}
          <div className="col-span-2 p-4">
            <div className="space-y-1">
              {items.map((item, index) => (
                <div key={index}>
                  {item.subItems && item.subItems.length > 0 ? (
                    <div
                      onMouseEnter={() => setHoveredCategory(item.title)}
                      className={`group rounded-md transition-all duration-200 ${
                        hoveredCategory === item.title || (!hoveredCategory && index === 0)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <Link
                        href={item.href || "#"}
                        className="group flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:text-gray-900"
                      >
                        <div className="flex items-center space-x-3">
                          {getIconForCategory(item.title)}
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <div className="flex items-center space-x-3">
                        {getIconForCategory(item.title)}
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Subcategories */}
          <div className="col-span-3 p-4">
            {activeCategory && activeCategory.subItems && (
              <div>
                <h3 className="mb-3 text-sm font-semibold text-gray-900">{activeCategory.title}</h3>
                <div className="grid grid-cols-1 gap-1">
                  {activeCategory.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href || "#"}
                      className="rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Featured or Popular Items */}
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-medium text-gray-600">Popular this week</span>
            </div>
            <Link href="#" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
              View all →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
