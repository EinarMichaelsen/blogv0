import BlogLayout from "../../../components/blog-layout"
import { getBlogPosts, getBlogPost } from "../../../lib/get-blog-posts"
import { ChevronLeft, Video, Camera, AppWindow, Mic } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

function createMarkup(content: string) {
  return { __html: content };
}

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
              <Link href="/" className="flex items-center text-[#0B84FF]">
                <ChevronLeft className="h-5 w-5" />
                <span>Back</span>
              </Link>
              <div className="flex-1 flex justify-center items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/einar-michaelsen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar className="h-7 w-7 hover:opacity-80 transition-opacity">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                </Link>
                <span className="font-semibold">einar</span>
              </div>
              <Link
                href="https://cal.com/einar-michaelsen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B84FF]"
              >
                <Video className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <div className="text-center text-xs text-gray-500 my-2">{post.date}</div>

            <div className="space-y-2">
              {/* Title as received message */}
              <div className="flex justify-start">
                <div className="glass-bubble-received text-black px-4 py-[6px] rounded-[20px] rounded-bl-[4px] max-w-[75%] leading-5">
                  <p className="font-medium">{post.title}</p>
                </div>
              </div>

              {/* Content as sent messages */}
              {post.content.split("\n\n").map(
                (paragraph, index) =>
                  paragraph && (
                    <div key={index} className="flex justify-end group">
                      <div
                        className="relative glass-bubble-sent text-white px-4 py-[6px] rounded-[20px] rounded-br-[4px] max-w-[75%] leading-5"
                      >
                        <p dangerouslySetInnerHTML={createMarkup(paragraph)} className="[&_a]:underline [&_a]:text-white" />
                      </div>
                    </div>
                  ),
              )}
            </div>

            <div className="text-[10px] text-gray-500 text-right mr-2 pt-1">Delivered</div>
          </div>

          {/* Message input area */}
          <div className="glass-footer p-4">
            <div className="flex items-center gap-2">
              <Link
                href="https://www.instagram.com/einarm90"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B84FF]"
              >
                <Camera className="h-6 w-6" />
              </Link>
              <Link
                href="https://getcircular.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B84FF]"
              >
                <AppWindow className="h-6 w-6" />
              </Link>
              <div className="flex-1 glass-input rounded-full px-4 py-2 text-gray-400">iMessage</div>
              <button className="text-[#0B84FF]">
                <Mic className="h-6 w-6" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </BlogLayout>
  )
}

