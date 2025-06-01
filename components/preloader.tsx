"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`preloader ${loading ? "" : "loaded"}`}>
      <div className="preloader-icon"></div>
    </div>
  )
}
