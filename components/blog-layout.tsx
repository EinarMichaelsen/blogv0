import type React from "react"
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="liquid-glass-bg flex items-center justify-center min-h-screen p-0 sm:p-6">
      <div className="phone-frame w-full max-w-[430px] h-screen sm:h-[85vh] sm:max-h-[900px] flex flex-col">
        {children}
      </div>
    </div>
  )
}

