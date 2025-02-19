export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

const posts: Post[] = [
  {
    slug: "long-conversation",
    title: "A Day in the Life",
    date: "2024-02-19",
    content: `Good morning! Just wanted to share my thoughts about today.

I've been thinking about how technology shapes our daily lives.

It's fascinating how we can communicate so effortlessly across distances.

Remember when we had to use landline phones? Now we have smartphones, tablets, and computers all connected.

The internet has revolutionized everything - from how we work to how we maintain relationships.

Social media has its pros and cons, but it's undeniably changed how we interact.

Cloud computing has made it possible to access our data from anywhere.

Artificial intelligence is now becoming part of our everyday experiences.

What do you think about these technological changes?

How do you see technology evolving in the next decade?

I believe we're just at the beginning of this technological revolution.

Virtual and augmented reality might become as common as smartphones.

Quantum computing could solve problems we thought were impossible.

The future is both exciting and a bit overwhelming, don't you think?

We'll need to find the right balance between embracing innovation and maintaining human connection.

What are your thoughts on maintaining this balance?

How do you manage your relationship with technology?

I try to have regular digital detox periods.

It helps me stay grounded and connected to the physical world.

Would love to hear your perspective on this!`,
  },
  {
    slug: "hello-world",
    title: "Quick Chat",
    date: "2024-02-19",
    content: `Hey there!

Just wanted to say hello.

How are you doing today?`,
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

