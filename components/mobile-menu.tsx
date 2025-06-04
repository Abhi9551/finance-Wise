"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import type { NavItems, NavDropdownItem } from "@/lib/nav-items"

interface MobileMenuProps {
  navItems: NavItems
  onLinkClick: () => void
}

export default function MobileMenu({ navItems, onLinkClick }: MobileMenuProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const renderSubItems = (items: NavDropdownItem[]) => {
    return (
      <div className="pl-3 mt-2 space-y-1 border-l-2 border-blue-100">
        {items.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div className="space-y-1">
                <button
                  onClick={() => toggleItem(`sub-${item.title}`)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                >
                  <span className="text-left">{item.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${openItems[`sub-${item.title}`] ? "rotate-180" : ""}`}
                  />
                </button>
                {openItems[`sub-${item.title}`] && item.subItems && (
                  <div className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2 ml-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-200 group"
                        onClick={onLinkClick}
                      >
                        <span>{subItem.title}</span>
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href || "#"}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
                onClick={onLinkClick}
              >
                <span>{item.title}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="h-full bg-white">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
        <nav className="space-y-2">
          {Object.entries(navItems).map(([key, item]) => (
            <div key={key} className="space-y-1">
              <button
                onClick={() => toggleItem(key)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="capitalize">{item.title}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${openItems[key] ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                />
              </button>
              {openItems[key] && item.dropdown && <div className="mt-2 mb-4">{renderSubItems(item.dropdown)}</div>}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
