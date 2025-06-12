import type React from "react"
import type { Metadata } from "next"
import { SF_Pro } from "@/lib/fonts"
import "./notes.css"

export const metadata: Metadata = {
  title: "einar.blog | Notes",
  description: "Apple Notes inspired blog",
  generator: 'v0.dev'
}

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="notes-wrapper">
      {children}
    </div>
  )
} 