import type React from "react"
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen bg-gray-100">{children}</div>
}

