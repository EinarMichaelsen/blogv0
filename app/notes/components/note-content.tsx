"use client"

import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { useNotes } from "../lib/notes-context"
import { ImageModal } from "./image-modal"

interface ExpandedImage {
  src: string
  alt: string
}

export default function NoteContent() {
  const { activeNote } = useNotes()
  const contentRef = useRef<HTMLDivElement>(null)
  const [expandedImage, setExpandedImage] = useState<ExpandedImage | null>(null)

  useEffect(() => {
    if (contentRef.current && activeNote) {
      contentRef.current.innerHTML = activeNote.content
      
      // Add click handlers to all images
      const images = contentRef.current.getElementsByTagName('img')
      Array.from(images).forEach(img => {
        img.style.cursor = 'pointer'
        img.onclick = (e) => {
          e.preventDefault()
          setExpandedImage({
            src: img.src,
            alt: img.alt
          })
        }
      })
    }
  }, [activeNote])

  if (!activeNote) return null

  return (
    <div className="note-editor">
      <div className="content-date">{activeNote.fullDate}</div>
      <div className="content-title">
        {activeNote.icon} {activeNote.title}
      </div>
      <div ref={contentRef} className="content-body" dangerouslySetInnerHTML={{ __html: activeNote.content }} />
      {expandedImage && (
        <ImageModal
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={() => setExpandedImage(null)}
        />
      )}
    </div>
  )
} 