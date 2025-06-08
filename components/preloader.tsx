"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`preloader fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="animate-pulse">
        <Image
          src="/logo.png"
          alt="Finqable ..."
          width={140}
          height={140}
          priority
        />
      </div>
    </div>
  )
}
