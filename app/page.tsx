import BlogLayout from "../components/blog-layout"
import Sidebar from "../components/sidebar"
import { getBlogPosts } from "../lib/get-blog-posts"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare } from "lucide-react"

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <BlogLayout>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="hidden md:block">
          <Sidebar posts={posts} />
        </div>
        <main className="flex-1 bg-white flex flex-col h-screen">
          {/* iPhone-style header */}
          <div className="bg-gray-100/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
            {/* Status bar */}
            <div className="h-6 text-xs px-4 flex justify-between items-center">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
            {/* Navigation header */}
            <div className="flex items-center px-4 h-11">
              <span className="font-bold text-2xl">Messages</span>
            </div>
          </div>

          {/* Messages list on mobile, empty state on desktop */}
          <div className="flex-1 overflow-y-auto">
            <div className="md:hidden">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/posts/${post.slug}`}
                  className="flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50"
                >
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h2 className="text-base font-semibold truncate">{post.title}</h2>
                      <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{post.content.split('\n')[0]}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
                </Link>
              ))}
            </div>
            
            {/* Empty state on desktop */}
            <div className="hidden md:flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8 text-blue-500" />
                </div>
                <h1 className="text-xl font-semibold">einar.blog</h1>
                <p className="text-gray-500">Select a conversation to start reading</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BlogLayout>
  )
}

