"use client"

import * as React from "react"
import { useState } from "react"
import { Search, ChevronLeft } from "lucide-react"
import { notes } from "../lib/data"
import { NotesProvider } from "../lib/notes-context"
import NoteContent from "./note-content"
import { useRouter } from "next/navigation"

export default function NotesLayout() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)

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
        {/* Glass header */}
        <div className="notes-glass-header">
          <div className="pt-3 pb-1 flex justify-center">
            <div className="dynamic-island" />
          </div>
          <div className="h-5 text-xs px-6 flex justify-between items-center text-gray-600">
            <span className="font-medium">13:37</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span>96%</span>
            </div>
          </div>
          <div className="notes-header-bar">
            {activeNoteId ? (
              <button className="back-button" onClick={handleBackClick}>
                <ChevronLeft size={20} />
                Notes
              </button>
            ) : (
              <button className="back-button" onClick={handleCloseClick}>
                <ChevronLeft size={20} />
                Messages
              </button>
            )}
            <span className="notes-header-title">
              {activeNoteId ? (activeNote?.icon || '') + ' ' + (activeNote?.title || '') : 'Notes'}
            </span>
            <div style={{ width: 60 }} />
          </div>
          {!activeNoteId && (
            <div className="search-container">
              <div className="relative">
                <Search className="search-icon" size={14} />
                <input
                  type="text"
                  className="search-input glass-search"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Note list view */}
        {!activeNoteId && (
          <div className="note-list">
            {pinnedNotes.length > 0 && (
              <>
                <div className="section-header">PINNED</div>
                {pinnedNotes.map((note) => (
                  <div
                    key={note.id}
                    className="note-item glass-list-item"
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
                    className="note-item glass-list-item"
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
        )}

        {/* Note content view */}
        {activeNoteId && (
          <main className="content">
            <NoteContent />
          </main>
        )}
      </div>
    </NotesProvider>
  )
} 