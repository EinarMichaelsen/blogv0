"use client"

import * as React from "react"
import { useRef, useEffect } from "react"
import { useNotes } from "../lib/notes-context"

export default function NoteContent() {
  const { activeNote } = useNotes()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current && activeNote) {
      contentRef.current.innerHTML = activeNote.content
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
    </div>
  )
} 