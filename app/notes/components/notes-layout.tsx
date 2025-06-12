"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Search, ChevronLeft } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"
import { notes } from "../lib/data"
import { NotesProvider } from "../lib/notes-context"
import NoteContent from "./note-content"
import { useRouter } from "next/navigation"

export default function NotesLayout() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)
  const isMobile = useMobile()

  // Filter notes based on search query
  const filteredNotes = notes.filter((note) => {
    const searchLower = searchQuery.toLowerCase()
    return (
      note.title.toLowerCase().includes(searchLower) ||
      note.content.toLowerCase().includes(searchLower) ||
      note.preview.toLowerCase().includes(searchLower)
    )
  })

  // Split notes into pinned and older
  const pinnedNotes = filteredNotes.filter((note) => note.pinned)
  const olderNotes = filteredNotes.filter((note) => !note.pinned)

  const handleNoteClick = (noteId: string) => {
    setActiveNoteId(noteId)
  }

  const handleBackClick = () => {
    setActiveNoteId(null)
  }

  const handleCloseClick = () => {
    router.push("/")
  }

  const activeNote = notes.find((note) => note.id === activeNoteId)

  return (
    <NotesProvider value={{ notes: filteredNotes, activeNote, setActiveNoteId: handleNoteClick }}>
      <div className="notes-wrapper">
        <div className="notes-container">
          {/* Sidebar */}
          <aside className={`sidebar ${isMobile && activeNoteId ? "hidden" : ""}`}>
            <div className="sidebar-header">
              <div className="window-controls">
                <button 
                  className="window-button red" 
                  onClick={handleCloseClick}
                  aria-label="Close and return to home"
                />
                <div className="window-button yellow" />
                <div className="window-button green" />
              </div>
            </div>

            <div className="search-container">
              <div className="relative">
                <Search className="search-icon" size={14} />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="note-list">
              {pinnedNotes.length > 0 && (
                <>
                  <div className="section-header">PINNED</div>
                  {pinnedNotes.map((note) => (
                    <div
                      key={note.id}
                      className={`note-item ${activeNoteId === note.id ? "active" : ""}`}
                      onClick={() => handleNoteClick(note.id)}
                    >
                      <div className="note-item-title">
                        <span>{note.icon}</span>
                        {note.title}
                      </div>
                      <div className="note-item-date">{note.date}</div>
                      <div className="note-item-preview">{note.preview}</div>
                    </div>
                  ))}
                </>
              )}

              {olderNotes.length > 0 && (
                <>
                  <div className="section-header">OLDER</div>
                  {olderNotes.map((note) => (
                    <div
                      key={note.id}
                      className={`note-item ${activeNoteId === note.id ? "active" : ""}`}
                      onClick={() => handleNoteClick(note.id)}
                    >
                      <div className="note-item-title">
                        <span>{note.icon}</span>
                        {note.title}
                      </div>
                      <div className="note-item-date">{note.date}</div>
                      <div className="note-item-preview">{note.preview}</div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </aside>

          {/* Content */}
          <main className={`content ${isMobile && !activeNoteId ? "hidden" : ""}`}>
            {isMobile && activeNoteId && (
              <div className="mobile-header">
                <button className="back-button" onClick={handleBackClick}>
                  <ChevronLeft size={20} />
                  Notes
                </button>
              </div>
            )}
            <NoteContent />
          </main>
        </div>
      </div>
    </NotesProvider>
  )
} 