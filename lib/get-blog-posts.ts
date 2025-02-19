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
    date: "2025-02-18",
    content: `welcome to my blog

more to come`,
  },
  {
    slug: "einar.blog1",
    title: "check out Circular",
    date: "2025-02-19",
    content: `go to www.getcircular.ai

lmk what you think`,
  },
  {
    slug: "einar.blog2",
    title: "just testing out adding more messages",
    date: "2025-02-20",
    content: `seems ok

i think.

just testing how it looks when i add a longer message to see if it wraps and if it looks ok

now i'm just letting cursor write this for me.`,
  },
  {
    slug: "einar.blog3",
    title: "i'm just vibe coding",
    date: "2025-02-20",
    content: `how i made this blog

i started out with a prompt in v0: i want to create a iMessage-like blog

then i added: the blog should be written in blue bubbles, like in iMessage

and pasted an image saying that it should have a similar feel to it

that was enough for v0 to start

then i downloaded all the files that v0 generated. created a github repo, copy-pasted the files into the repo and opened Cursor and github desktop

i had to ask cursor to fix the code for me a couple of times

tab tab tab. accept all

commit to main

voila
`,
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

