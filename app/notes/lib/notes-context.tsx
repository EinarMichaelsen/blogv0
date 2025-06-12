"use client"

import * as React from "react"
import { createContext, useContext } from "react"
import { notes as initialNotes } from "./data"

interface Note {
  id: string
  title: string
  icon?: string
  date: string
  fullDate: string
  preview: string
  pinned: boolean
  content: string
}

interface NotesContextType {
  notes: Note[]
  activeNote: Note | undefined
  setActiveNoteId: (id: string) => void
}

const NotesContext = createContext<NotesContextType>({
  notes: initialNotes,
  activeNote: initialNotes[0],
  setActiveNoteId: () => {},
})

export function NotesProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: NotesContextType
}) {
  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}

export function useNotes() {
  return useContext(NotesContext)
} 