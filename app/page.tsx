import BlogLayout from "../components/blog-layout"
import Sidebar from "../components/sidebar"
import { getBlogPosts } from "../lib/get-blog-posts"
import { MessageSquare } from "lucide-react"

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <BlogLayout>
      <Sidebar posts={posts} />
      <main className="flex-1 bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <MessageSquare className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-xl font-semibold">Welcome to iMessage Blog</h1>
          <p className="text-gray-500">Select a conversation to start reading</p>
        </div>
      </main>
    </BlogLayout>
  )
}

