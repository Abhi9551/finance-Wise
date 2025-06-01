import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { NavDropdownItem } from "@/lib/nav-items"

interface NavbarDropdownProps {
  items: NavDropdownItem[]
}

export default function NavbarDropdown({ items }: NavbarDropdownProps) {
  return (
    <div className="dropdown-menu absolute left-0 top-full mt-1 w-[280px] rounded-md border bg-background shadow-lg">
      <div className="grid gap-1 p-2">
        {items.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <div className="grid gap-1">
                <Link
                  href={item.href || "#"}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  {item.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
                {item.subItems && (
                  <div className="ml-4 grid gap-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href || "#"}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
