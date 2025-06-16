"use client"

import * as React from "react"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  React.useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <img 
          src={src} 
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
} 