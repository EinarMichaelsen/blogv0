export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

const posts: Post[] = [
  {
    slug: "einar.blog",
    title: "hei i'm einar",
    date: "2025-09-27",
    content: `welcome to my blog

i'm the founder & ceo of <a href="https://getcircular.ai" target="_blank" rel="noopener noreferrer">circular resale</a> - the ai-native operating system for resale

previously co-founded <a href="https://cirkulaer.love" target="_blank" rel="noopener noreferrer">cirkulær</a>, a second-hand chain with a yearly turnover of €1M (this is where the founder-problem-fit for circular originated from)

i have worked within ai and automation for almost a decade <br /> <br />
i built the nordic center of excellence for automation & ai in santander  <br /> <br />
i was head of ai & emerging tech in kpmg <br /> <br />
i did business development and product management in coop & brødrene dahl where i worked on phygital self service solutions, unmanned stores, ecom and mobile apps.

i like to create, make, build and write

here is something i made: <a href="https://lumowrite.com" target="_blank" rel="noopener noreferrer">lumowrite.com</a>

click my picture in the top to find my linkedin account

click the facetime icon to book a meeting

connect and say hi👋🏼
`
,
  },
  {
    slug: "scope",
    title: "speed: scope vs quality",
    date: "2025-09-27",
    content: `when facing deadlines, product teams<br />
     often end up with two bad options:<br />

1 Ship fast but compromise on quality.

2 Build it "right" but miss the deadline.

None of these should be selected. instead:

<strong>cut scope</strong> aggressively

dont lower the bar for quality.

this is how:

start with the full vision of your feature or product. then ask:<br />
"what if we remove this? is the product still useful?"<br />
keep cutting until the answer is "no".<br />
then add back the last piece you removed.<br />

what you're left with is the most scoped-down version of the product that still delivers value. 

nothing more. nothing less.

keeps quality high

faster to market

cheaper to be wrong`,
  },
  {
    slug: "circular-background",
    title: "intro to Circular🚀",
    date: "2025-02-19",
    content: `and why we will win

Running a second-hand business should be about delighting your customers, finding hidden treasures, and building a community

not wrestling with outdated software or complicated processes. 

that's where <a href="https://getcircular.ai" target="_blank" rel="noopener noreferrer">Circular</a> comes in. 

built by resellers, for resellers

our platform streamlines everything from inventory management to pricing to seller management

Circular is the B2B SaaS for resale, making operations easy, efficient, and profitable through AI and automation. 

Customers anticipate a +400% ROI. Several customers have already signed up, evaluating Circular as superior to incumbent competitors.

Our goal is clear: Circular will be the market leader for in-store resale

why we will win?

AGENCY

we are a team of doers

we are action-biased, and we operate at high speed 

we built a world-class product with paying customers in 81 days

while we built product, we also built a waitlist of 17 stores

SALES

we sell

we did our first sale before we had a product

we sold a vision in sept

we started building in october

we went live with our first paying customer in december

EXPERIENCE

we are serial founders that know how to build and scale companies.

in the team we have

first-hand experience from the resale industry

expertise in building own distribution and reach without spending wildly <br />
Proof: 40K followers across SoMe (and Norway's most followed second hand store on LinkedIn) <br />
a newsletter with 1,8K followers

All employees are ex founders and have experience from building and scaling companies

We have experience from product, technology, AI & automation, retail, resale and marketplaces

Corporate experience from companies such as EY, KPMG, Coop, Saint-Gobain, Sprint Consulting and Santander.

Together, we're a well-rounded team with high agency that can sell, build great products and attract top talent`,
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
    title: "culture and values",
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
  },
  {
    slug: "priorities",
    title: "focus and priorities",
    date: "2025-02-23",
    content: `let's call this blog part 3 of how we built a b2b saas in 81 days

To maintain momentum and progress, two things are essential

🎯 Focus

🫡 Prioritization

Focus is constantly challenged by new ideas and opportunities.

🍏 Golden apples, as Christina Wodtke calls them in Radical Focus. Tempting distractions. Short-term opportunities that can pull us away from our long-term goals. Seemingly attractive options that slow down progress.

Being good at prioritization and maintaining focus has been one of the biggest challenges in building Circular

So, how do we work to stay focused?

OKRs and weekly priorities

Monthly OKRs:

⭐ One objective to set the direction.

✅ Three key results to measure whether we have achieved our objective.

Weekly priorities:

📋 Each week, we create a list of up to five priorities.

Only priorities that move the needle on our key results make the list.

This means we have to leave exciting ideas and opportunities on the table—no matter how tempting they are.

This is the hardest part for me. There are so many exciting things we could do. So many ideas and opportunities. But we (unfortunately) can't do everything at once.

One model for prioritization is the New Opportunity Test

If it doesn't fit within our priorities for the week

it's a no.

If it's not a hell yes

it's a no.

And it has to create value

ideally a lot of value
 `
  }
  ,
  {
    slug: "resale-market",
    title: "the resale market",
    date: "2025-02-24",
    content: `let explore why resale is exciting

with Circular, we aim for global impact.

we target the underserved brick-and-mortar part of resale

surprisingly, in-store (offline) resale accounts for more than 50% of the global resale market

even though online gets most of the fuzz

so, why is the resale market exciting? and why now?

a perfect storm of regulatory, consumer, and technological shifts is propelling the secondhand market into a transformative wave

𐄷 regulations 𐄷 <br />
Policies like Extended Producer Responsibility (EPR) and Digital Product Passports (DPP) require producers to manage their products throughout their lifecycle and make data accessible

🛍️ consumer trends 🛍️ <br />
secondhand shopping has gone mainstream, driven by eco-conscious consumers

🏠 retail trends 🏠 <br />
brick and mortar is coming back. Even D2C companies are establishing physical presence to create meaningful customer relationships and shopping experiences

🤖 technology 🤖 <br />
advancements in AI helps us automating manual and time consuming tasks tasks, making circular retail scalable

⏱️ internal efficiency gains ⏱️  <br />
AI also reduces costs and speeds up the development of scalable B2B SaaS solutions

Europe has more than 75,000 secondhand stores

contributing to a global resale market worth $265 billion

this is a market that is growing at 12% CAGR

offline resale accounts for over half of the market

we are positioning Circular to be the winner in this market`
  },
  {
    slug: "lumowrite",
    title: "i made an app for writing",
    date: "2025-06-02",
    content: `so, i tested out a mac app for freewriting and wanted to do my own take on it on a web app

set a timer for 15 minutes and just write. only feature i added was dark mode.

after you are done writing, you can download the text if you want to. the text is only stored locally on your computer.

unless you download it.

also, if you want to, you can chat with an ai about your writing

i think thats kindof a cool feature and a nice way to structure your ideas or thoughts.

test it out here: <a href="https://lumowrite.com/" target="_blank" rel="noopener noreferrer">lumowrite.com</a>
`,
  },
  {
    slug: "ml-api",
    title: "ml training writeup",
    date: "2025-06-12",
    content: `i made a write up of how i built, trained and deployed my first machine learning model.

Read it here <a href="https://einar.blog/notes/">einar.blog/notes</a>
`,
  },
  {
    slug: "the-curious-compound",
    title: "the curious compound",
    date: "2025-12-10",
    content: `why the curious are compounding while others wait

the people at the very front of AI - the ones building with it every day, shipping products, automating entire workflows - feel like they're falling behind

they have FOMO. they're anxious about what they're missing. they stay up late experimenting because they know what's coming

meanwhile, large enterprises and the late majority are still debating whether to try ChatGPT or Copilot to write emails faster

the gap is already here. and in 2026, it will widen

AI has an exponential learning curve. every hour you spend with it makes the next hour more valuable. you learn what to ask. how to ask. what it can do. you start seeing applications everywhere

the tooling sounds fancy: "data ingestion," "agents," "agentic workflows." but strip away the jargon and it's just automation. you learn it the same way you learned Salesforce or PowerPoint: by using it

the curious compound. the waiters fall exponentially behind

you don't need to be technical. you just need to use the tools. that's the advantage

the curious learn something important: you can just do things

you don't need permission. you don't need to be an expert. you don't need to understand how transformers work. you just need to start, keep going, and learn by doing

that's the whole secret. the people at the front aren't smarter. they just started and never stopped

if you have AI content saved in your bookmarks that you haven't watched or read, that's a symptom. you're waiting when you should be doing

stop reading this. open Claude. open ChatGPT. open v0. build something you've been thinking about

it doesn't matter if it's small. it matters that you start

automate something you do every week. something you find boring. something that will make you more efficient

the best time to start was yesterday. the second best time to start is now

the curious are already compounding`
  },
  {
    slug: "resale-2026",
    title: "resale 2026",
    date: "2025-12-16",
    content: `from thrift to retail's operating system

everyone talks about the resale boom. consumer demand is real. sustainability is mainstream. the market is worth $265 billion and growing at 12% CAGR

the real bottleneck is the quality of supply feeding it

high-quality secondhand inventory exists. it's sitting in thousands of independent resale stores. offline. disconnected from the platforms that need it

i saw this firsthand building <a href="https://cirkulaer.love" target="_blank" rel="noopener noreferrer">Cirkulær</a>, our consignment resale chain. the product was there. the demand was there. but there was no system to surface and distribute quality supply at scale

marketplaces have been the industry's go-to solution. they connect sellers and buyers, handle discovery and transactions. but without quality infrastructure underneath, premium secondhand goods stay inaccessible

what resale needs is an operating system for professional resale

digitize inventory from offline resellers

apply consistent quality and condition standards

connect fragmented supply into unified distribution networks

better supply leads to better marketplaces

the long-term vision: marketplaces powered by professionals, built on quality-assured inventory where buying secondhand feels like buying something new

that's what makes secondhand shopping a default consumer behavior. not just a sustainable choice, but a better one

that's exactly what we're building with <a href="https://getcircular.ai" target="_blank" rel="noopener noreferrer">Circular</a>

the operating system for professional resale`
  },
  {
    slug: "vibe-coding",
    title: "vibe coding",
    date: "2025-02-25",
    content: `how i made this blog

    vibe coding only

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
  }
]

export async function getBlogPosts(): Promise<Post[]> {
  // Keep the intro post at the top, then sort the rest by date (newest to oldest)
  const introPost = posts.find(post => post.slug === "einar.blog")
  const otherPosts = posts.filter(post => post.slug !== "einar.blog")
  
  // Sort other posts by date (newest first)
  const sortedOtherPosts = otherPosts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
  
  // Return intro post first, then sorted posts
  return introPost ? [introPost, ...sortedOtherPosts] : sortedOtherPosts
}

export async function getBlogPost(slug: string): Promise<Post> {
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    throw new Error(`Post not found: ${slug}`)
  }
  return post
}

