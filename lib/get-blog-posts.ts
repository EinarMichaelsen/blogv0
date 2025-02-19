export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

const posts: Post[] = [
  {
    slug: "blog-1",
    title: "Test blog one",
    date: "2025-02-19",
    content: `Good day! This is a test blog post.

Expect more posts soon!`,
  },
  {
    slug: "hello-world",
    title: "Quick Chat",
    date: "2025-02-19",
    content: `yo!

Just testing this out.

Check out getcircular.ai`,
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

