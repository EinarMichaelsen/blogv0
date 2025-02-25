# iMessage style blog
100% vibe coded

# einar.blog

A minimalist, iOS Messages-inspired blog built with Next.js and Tailwind CSS.


## Overview

einar.blog is a personal blog with a twist - it's designed to look and feel like the iOS Messages app. Blog posts are displayed as message bubbles, creating an engaging and familiar reading experience.

## Features

- 📱 iOS Messages-inspired UI
- 💬 Blog posts displayed as message conversations
- 🔗 Social media integration
- 📅 Calendar booking integration
- 📱 Fully responsive design (mobile and desktop)
- ⚡ Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

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
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles
- `components/` - Reusable components
  - `blog-layout.tsx` - Main layout wrapper
  - `sidebar.tsx` - Desktop sidebar component
- `lib/` - Utility functions
  - `get-blog-posts.ts` - Blog post data and retrieval functions
- `public/` - Static assets

## Deployment

This project is deployed on Vercel. Any push to the main branch will trigger a new deployment.

## Adding New Blog Posts

To add a new blog post, edit the `lib/get-blog-posts.ts` file and add a new object to the `posts` array:
For example:
typescript
```
{
slug: "your-post-slug",
title: "Your Post Title",
date: "YYYY-MM-DD",
content: Your content here.You can use multiple paragraphs.Use <br /> for line breaks within a paragraph.Use <a href="https://example.com">links</a> for hyperlinks.
}
```
Make sure the slug is unique, and the date follows the YYYY-MM-DD format.

## Contact

For inquiries, suggestions, or collaboration, reach out via:
- [LinkedIn](https://www.linkedin.com/in/einar-michaelsen/)
- [Instagram](https://www.instagram.com/einarm90/)
- [X](https://x.com/einarm90/)
- [Personal blog](https://einar.blog/)
- [Circular](https://getcircular.ai/)