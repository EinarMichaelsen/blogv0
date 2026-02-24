import BlogLayout from "../components/blog-layout"
import { getBlogPosts } from "../lib/get-blog-posts"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '');
}

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <BlogLayout>
      <div className="flex flex-col h-full w-full">
        <main className="flex-1 flex flex-col h-full w-full overflow-hidden">
          {/* iPhone-style header */}
          <div className="glass-header sticky top-0 z-10">
            {/* Dynamic Island */}
            <div className="pt-3 pb-1 flex justify-center">
              <div className="dynamic-island" />
            </div>
            {/* Status bar */}
            <div className="h-5 text-xs px-6 flex justify-between items-center text-gray-600">
              <span className="font-medium">13:37</span>
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span>96%</span>
              </div>
            </div>
            {/* Navigation header */}
            <div className="flex items-center px-4 h-11 pb-2">
              <span className="font-bold text-2xl">Messages</span>
            </div>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto">
            {posts.length > 0 ? (
              <div>
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="flex items-center px-4 py-3 glass-list-item"
                  >
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h2 className="text-base font-semibold truncate">{post.title}</h2>
                        <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{post.date}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {stripHtml(post.content.split('\n')[0])}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4 max-w-md px-4">
                  <div className="w-20 h-20 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-semibold">No Messages</h1>
                  <p className="text-gray-500">Your messages will appear here</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </BlogLayout>
  )
}

