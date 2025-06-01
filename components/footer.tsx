import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              FinanceWise helps you make smarter financial decisions by comparing credit cards, banking options,
              investments, loans, and insurance.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Credit Cards</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Best Credit Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Compare Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Card Recommendations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Credit Card Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Banking</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Checking Accounts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Savings Accounts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  CD Rates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Banking Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Investing</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Best Brokerages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  IRA Accounts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Robo-Advisors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Retirement Planning
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FinanceWise. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
