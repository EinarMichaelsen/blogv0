import Link from "next/link"
import type { Post } from "../lib/get-blog-posts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Sidebar({ posts, currentSlug }: { posts: Post[]; currentSlug?: string }) {
  return (
    <aside className="w-80 bg-white overflow-y-auto border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6 px-2">Messages</h2>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  currentSlug === post.slug ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{post.title[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className="font-semibold truncate">{post.title}</p>
                    <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{post.content.split("\n")[0]}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

