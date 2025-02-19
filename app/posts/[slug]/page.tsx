import BlogLayout from "../../../components/blog-layout"
import Sidebar from "../../../components/sidebar"
import { getBlogPosts, getBlogPost } from "../../../lib/get-blog-posts"
import { ChevronLeft, Video, Camera, AppWindow, Mic } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts()
  const post = await getBlogPost(params.slug)

  return (
    <BlogLayout>
      <Sidebar posts={posts} currentSlug={params.slug} />
      <main className="flex-1 bg-white flex flex-col h-screen max-w-lg mx-auto">
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
            <button className="flex items-center text-[#0B84FF]">
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <div className="flex-1 flex justify-center items-center gap-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Blog Post</span>
            </div>
            <button className="text-[#0B84FF]">
              <Video className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-center text-xs text-gray-500 my-2">{post.date}</div>

          <div className="space-y-2">
            {/* Title as received message */}
            <div className="flex justify-start">
              <div className="bg-[#E9E9EB] text-black px-4 py-[6px] rounded-[20px] rounded-bl-[4px] max-w-[70%] leading-5">
                <p className="font-medium">{post.title}</p>
              </div>
            </div>

            {/* Content as sent messages */}
            {post.content.split("\n\n").map(
              (paragraph, index) =>
                paragraph && (
                  <div key={index} className="flex justify-end group">
                    <div
                      className="relative bg-[#0B84FF] text-white px-4 py-[6px] rounded-[20px] rounded-br-[4px] max-w-[70%] leading-5"
                      style={{
                        filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.05))",
                      }}
                    >
                      <p>{paragraph}</p>
                    </div>
                  </div>
                ),
            )}
          </div>

          <div className="text-[10px] text-gray-500 text-right mr-2 pt-1">Delivered</div>
        </div>

        {/* Message input area */}
        <div className="p-4 bg-gray-100/80 backdrop-blur-md border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="text-[#0B84FF]">
              <Camera className="h-6 w-6" />
            </button>
            <button className="text-[#0B84FF]">
              <AppWindow className="h-6 w-6" />
            </button>
            <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-400 border border-gray-200">iMessage</div>
            <button className="text-[#0B84FF]">
              <Mic className="h-6 w-6" />
            </button>
          </div>
        </div>
      </main>
    </BlogLayout>
  )
}

