"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import EnhancedNavbarDropdown from "./enhanced-navbar-dropdown"
import MobileMenu from "./mobile-menu"
import { navItems } from "@/lib/nav-items"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png" 
                alt="Logo"
                width={100}    
                height={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {Object.entries(navItems).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href || "#"}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary ${activeDropdown === key
                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
                        : "text-gray-700 hover:text-gray-900"
                      }`}
                  >
                    {item.title}
                  </Link>
                  {activeDropdown === key && item.dropdown && (
                    <div onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                      <EnhancedNavbarDropdown items={item.dropdown} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right Side - Empty div for balance */}
          <div className="hidden lg:flex items-center w-[120px] justify-end">
            {/* This empty div balances the logo on the left */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 p-0 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <MobileMenu navItems={navItems} onLinkClick={() => setIsOpen(false)} />
          </div>
        )}
      </header>

      {/* Overlay for dropdown */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm" onClick={() => setActiveDropdown(null)} />
      )}
    </>
  )
}
