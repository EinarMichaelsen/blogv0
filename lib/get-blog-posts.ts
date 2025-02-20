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
    content: `here's a short introduction

i'm currently a co-founder in circular, an ai-powered resale platform

previously co-founded cirkulær, a second-hand chain with a yearly turnover of €1M (this is where the founder-problem-fit for circular originated from)

my background: i have worked within ai and automation for almost a decade

>built a nordic center of excellence for automation & ai in santander

>led ai & emerging tech services in kpmg

>did business development and product management in coop & brødrene dahl. worked on phygital self service solutions, unmanned stores, ecom and mobile apps.`
,
  },
  {
    slug: "check-out-circular",
    title: "check out circular🚀",
    date: "2025-02-19",
    content: `go to <a href="https://getcircular.ai" target="_blank" rel="noopener noreferrer">getcircular.ai</a>

interested in learning more? click the facetime icon to book a meeting with me`,
  },
  {
    slug: "vibe-coding",
    title: "vibe coding",
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
  {
    slug: "tech-stack",
    title: "we built a b2b saas in 81 days",
    date: "2025-02-21",
    content: `this was our stack

we started building circular october 11th 2024

we had go-live with our first paying customer december 31th 

how is that possible?

let's start with the tech stuff

we did a concious choice of not spending any time setting up our own infra

everything is serverless and as-a-service

and we're utilizing good, flexible, secure and future proof frameworks

This is our stack <br />
🔮 Framework: Next js <br />
⚡️ Database: Supabase <br />
🔐 Auth: Supabase <br />
🚩 State management: TanStack <br />
📋 ORM: Drizzle <br />
📧 Emails: Resend <br />
💻 UI: Shadcn <br />
✨ AI: OpenAI + Gemini <br />
👨🏻‍🎨 Design: Figma <br />
⚫️ Backlog: Linear <br />
🛰️ Hosting: Vercel <br />
💶 Payments: Stripe

to build fast without burning cash, we also used some different AI tools

that supercharges the development speed. Like having a large team of offshore devs at your fingertips

this is the AI stack <br />
✔️ Generative UI: v0 <br />
▶️ IDE: Cursor <br />
✨ Coding assistant: OpenAI o1 <br />
👾 Rapid prototyping: Databutton

this is the tech foundating we build upon to build at speed
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

