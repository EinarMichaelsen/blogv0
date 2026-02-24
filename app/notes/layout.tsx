import type React from "react"
import type { Metadata } from "next"
import "./notes.css"

export const metadata: Metadata = {
  title: "einar.blog | Notes",
  description: "this is where i keep my longer notes",
  generator: 'v0.dev'
}

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="liquid-glass-bg flex items-center justify-center min-h-screen p-0 sm:p-6">
      <div className="phone-frame w-full max-w-[430px] h-screen sm:h-[85vh] sm:max-h-[900px] flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
} 