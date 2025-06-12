# iMessage style blog
100% vibe coded

# einar.blog

A minimalist, iOS Messages-inspired blog built with Next.js and Tailwind CSS.

## Overview

einar.blog is a personal blog with two main features:
1. A Messages-inspired blog where posts are displayed as message bubbles
2. A Notes app for longer-form content, inspired by Apple Notes

## Features

### Blog
- 📱 iOS Messages-inspired UI
- 💬 Blog posts displayed as message conversations
- 🔗 Social media integration
- 📅 Calendar booking integration
- 📱 Fully responsive design (mobile and desktop)
- ⚡ Built with Next.js for optimal performance

### Notes App
- 📝 Apple Notes-inspired interface
- 🔍 Real-time search functionality
- 📌 Pin important notes
- 📱 Responsive design with mobile-first approach
- 🎨 Clean, minimalist UI with SF Pro font
- 📱 Mobile-optimized navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **State Management**: React Context
- **Theme**: next-themes
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel
- **CodeGen**: v0.dev

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EinarMichaelsen/blogv0.git
   cd blogv0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Home page (Messages overview)
  - `posts/[slug]/page.tsx` - Individual blog post page
  - `notes/` - Notes app
    - `components/` - Notes-specific components
    - `lib/` - Notes data and context
    - `notes.css` - Notes-specific styles
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles
- `components/` - Shared components
  - `blog-layout.tsx` - Main layout wrapper
  - `sidebar.tsx` - Desktop sidebar component
  - `ui/` - shadcn/ui components
- `lib/` - Utility functions
  - `get-blog-posts.ts` - Blog post data and retrieval functions
  - `fonts.ts` - Font configurations
- `public/` - Static assets
- `styles/` - Global styles and Tailwind configuration

## Adding Content

### Blog Posts
To add a new blog post, edit the `lib/get-blog-posts.ts` file and add a new object to the `posts` array:
```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  date: "YYYY-MM-DD",
  content: `Your content here.
  You can use multiple paragraphs.
  Use <br /> for line breaks within a paragraph.
  Use <a href="https://example.com">links</a> for hyperlinks.`
}
```

### Notes
Notes are managed in `app/notes/lib/data.ts`. Each note follows this structure:
```typescript
{
  id: "unique-id",
  title: "Note Title",
  icon: "emoji",
  date: "MM/DD/YYYY",
  fullDate: "Month DD, YYYY at HH:MM AM/PM",
  preview: "Short preview text",
  pinned: boolean,
  content: "HTML content"
}
```

## Development

- Uses TypeScript for type safety
- Follows Next.js App Router conventions
- Implements React Server Components where possible
- Uses client components only when necessary (e.g., for interactivity)
- Follows mobile-first responsive design principles

## Contact

For inquiries, suggestions, or collaboration, reach out via:
- [LinkedIn](https://www.linkedin.com/in/einar-michaelsen/)
- [Instagram](https://www.instagram.com/einarm90/)
- [X](https://x.com/einar_m/)
- [Personal blog](https://einar.blog/)
- [Circular](https://getcircular.ai/)