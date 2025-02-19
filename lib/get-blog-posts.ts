export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

const posts: Post[] = [
  {
    slug: "einar.blog",
    title: "hi i'm einar",
    date: "2025-02-19",
    content: `welcome to my blog

more to come`,
  },
  {
    slug: "einar.blog2",
    title: "check out Circular",
    date: "2025-02-19",
    content: `go to www.getcircular.ai

lmk what you think`,
  },
]

export async function getBlogPosts(): Promise<Post[]> {
  return posts
}

export async function getBlogPost(slug: string): Promise<Post> {
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    throw new Error(`Post not found: ${slug}`)
  }
  return post
}

