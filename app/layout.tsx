import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import { ThemeProvider } from "@/components/theme-provider"
import AosProvider from "@/components/aos-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinanceWise | Make Smarter Financial Decisions",
  description:
    "Compare credit cards, banking options, investments, loans, and insurance to make smarter financial decisions.",
  keywords: "personal finance, credit cards, banking, investing, loans, insurance, financial tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AosProvider>
            <Preloader />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AosProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
