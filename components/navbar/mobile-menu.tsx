"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { NavItems, NavDropdownItem } from "@/lib/nav-items"

interface MobileMenuProps {
  navItems: NavItems
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const renderSubItems = (items: NavDropdownItem[]) => {
    return (
      <div className="pl-4 mt-1 space-y-1">
        {items.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div className="space-y-1">
                <button
                  onClick={() => toggleItem(`sub-${item.title}`)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-muted text-gray-950"
                >
                  {item.title}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openItems[`sub-${item.title}`] ? "rotate-180" : ""}`}
                  />
                </button>
                {openItems[`sub-${item.title}`] && item.subItems && (
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-muted text-gray-950"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link href={item.href || "#"} className="block rounded-md px-3 py-2 text-sm hover:bg-muted text-gray-950">
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="space-y-4">
        <nav className="space-y-2">
          {Object.entries(navItems).map(([key, item]) => (
            <div key={key} className="space-y-1">
              <button
                onClick={() => toggleItem(key)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.title}
                <ChevronDown className={`h-4 w-4 transition-transform ${openItems[key] ? "rotate-180" : ""}`} />
              </button>
              {openItems[key] && item.dropdown && renderSubItems(item.dropdown)}
            </div>
          ))}
        </nav>
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <Link
            href="#"
            className="flex w-full items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Search
          </Link>
          <Link
            href="#"
            className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
