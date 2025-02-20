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

i'm currently a co-founder in circular, an ai-powered resale platform

previously co-founded cirkulær, a second-hand chain with a yearly turnover of €1M (this is where the founder-problem-fit for circular originated from)

i have worked within ai and automation for almost a decade <br /> <br />
i built a nordic center of excellence for automation & ai in santander  <br /> <br />
i led ai & emerging tech services in kpmg <br /> <br />
i did business development and product management in coop & brødrene dahl where i worked on phygital self service solutions, unmanned stores, ecom and mobile apps.

i like to create, build and write

click my picture in the top to find my linkedin account. 

or click the camera button in bottom to find my insta
`
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

    doing vibe coding only

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
    content: `this is how we did it (part 1)

we started building circular october 11th 2024

we had go-live with our first paying customer december 31th 

how is that possible?

let's start with the tech stuff

we did a concious choice of not spending any time setting up our own infra

everything is serverless and as-a-service

and we're utilizing good, flexible, secure and future proof frameworks

this is our stack <br />
🔮 framework: Next js <br />
⚡️ database: Supabase <br />
🔐 auth: Supabase <br />
🚩 state management: TanStack <br />
📋 ORM: Drizzle <br />
📧 emails: Resend <br />
💻 ui: Shadcn <br />
✨ ai: OpenAI + Gemini <br />
👨🏻‍🎨 design: Figma <br />
⚫️ backlog: Linear <br />
🛰️ hosting: Vercel <br />
💶 payments: Stripe

to build fast without burning cash, we also used some different AI tools

that supercharges the development speed. Like having a large team of offshore devs at your fingertips

this is the AI stack <br />
✔️ Generative UI: v0 <br />
▶️ IDE: Cursor <br />
✨ Coding assistant: OpenAI o1 <br />
👾 Rapid prototyping: Databutton

this is the tech foundating we build upon to build at speed`
  },
  {
    slug: "culture",
    title: "culture and values in circular💕",
    date: "2025-02-22",
    content: `this is kinda the part 2 of "how we built a b2b saas in 81 days"

a bit more abstract than the tech stack, but just as important for delivering on quality and speed

you can just do things

^that is what we try to live by at Circular

it's very simple, yet incredibly difficult

an excessive focus on perfection is often the biggest obstacle to actually getting things done

at Circular we have a bias towards action <br />
⚡️ we do <br />
⚡️ we deliver <br /> 
⚡️ we fail <br />
⚡️ we learn <br />
⚡️ we improve

that allows us to move fast and build great products—products that keep getting better and better

these are the values at Circular

🛠️ execution 🛠️ <br />
we believe in action. We have a strong action bias. We move fast, fail quickly, learn, and iterate

⚠️ risk ⚠️ <br />
we take risks. If nothing ever fails, we're not innovating enough

📣 clarity 📣 <br />
we value clear expectations and communication. Information should be transparent and accessible

❤️ empathy ❤️ <br />
we listen to our customers' challenges. Our most important task is always to create value for them`
  }
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

