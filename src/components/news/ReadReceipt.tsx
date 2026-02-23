'use client'
import { useEffect, useState } from "react"

export default function ReadReceipt() {
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSeen(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <span
      className={`ml-1 text-xs transition-all duration-500 ${
        seen ? "text-blue-500 scale-100" : "scale-0"
      }`}
    >
      ✓✓
    </span>
  )
}